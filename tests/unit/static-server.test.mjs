import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';

test('Static preview preserves deep links, missing pages, legacy routes, and video seeking', async (t) => {
  const folder = await fs.mkdtemp(path.join(os.tmpdir(), 'portfolio-static-test-'));
  await fs.mkdir(path.join(folder, 'about'), { recursive: true });
  await fs.writeFile(path.join(folder, 'index.html'), '<h1>Home</h1>');
  await fs.writeFile(path.join(folder, 'about/index.html'), '<h1>About</h1>');
  await fs.writeFile(path.join(folder, '404.html'), '<h1>Missing</h1>');
  await fs.writeFile(
    path.join(folder, 'video.mp4'),
    Buffer.from(Array.from({ length: 2048 }, (_, i) => i % 256)),
  );
  await fs.writeFile(
    path.join(folder, 'deployment.json'),
    JSON.stringify({ basePath: '/portfolio', redirects: { '/old': '/about/' } }),
  );
  const child = spawn(process.execPath, ['scripts/serve-static.mjs'], {
    env: { ...process.env, STATIC_DIR: folder, PORT: '0' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  t.after(async () => {
    child.kill('SIGTERM');
    await fs.rm(folder, { recursive: true, force: true });
  });
  const origin = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Static preview did not start')), 10000);
    child.once('error', reject);
    child.stdout.on('data', (data) => {
      const url = String(data).match(/http:\/\/127\.0\.0\.1:\d+/)?.[0];
      if (url) {
        clearTimeout(timeout);
        resolve(url);
      }
    });
    child.stderr.on('data', (data) => reject(new Error(String(data))));
  });
  assert.match(await (await fetch(origin + '/portfolio/about/')).text(), /About/);
  const missing = await fetch(origin + '/portfolio/missing');
  assert.equal(missing.status, 404);
  assert.match(await missing.text(), /Missing/);
  const old = await fetch(origin + '/portfolio/old', { redirect: 'manual' });
  assert.equal(old.status, 308);
  assert.equal(old.headers.get('location'), '/portfolio/about/');
  assert.equal((await fetch(origin + '/outside')).status, 404);
  const range = await fetch(origin + '/portfolio/video.mp4', {
    headers: { Range: 'bytes=0-1023' },
  });
  assert.equal(range.status, 206);
  assert.equal(range.headers.get('content-range'), 'bytes 0-1023/2048');
  assert.equal((await range.arrayBuffer()).byteLength, 1024);
  const suffix = await fetch(origin + '/portfolio/video.mp4', { headers: { Range: 'bytes=-10' } });
  assert.equal(suffix.headers.get('content-range'), 'bytes 2038-2047/2048');
  assert.equal(
    (await fetch(origin + '/portfolio/video.mp4', { headers: { Range: 'bytes=9000-' } })).status,
    416,
  );
  const head = await fetch(origin + '/portfolio/video.mp4', { method: 'HEAD' });
  assert.equal(head.headers.get('content-length'), '2048');
  assert.equal((await head.arrayBuffer()).byteLength, 0);
});
