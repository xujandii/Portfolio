import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { createHash } from 'node:crypto';
import { constants } from 'node:fs';
import { spawn } from 'node:child_process';
import { finalizeExport } from './finalize-export.mjs';

const root = process.cwd();
for (const file of ['.env.production.local', '.env.local', '.env.production', '.env']) {
  try {
    process.loadEnvFile(path.join(root, file));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

let workspace = root;
// Webpack interprets #/? in absolute paths as resource queries. Keep this checkout usable.
if (/[#?]/.test(root)) {
  const id = createHash('sha256').update(root).digest('hex').slice(0, 12);
  workspace = path.join(os.tmpdir(), `jandi-portfolio-build-${id}`);
  await fs.mkdir(workspace, { recursive: true });
  const lock = await fs.readFile('package-lock.json');
  const signature = createHash('sha256')
    .update(lock)
    .update(process.version)
    .update(os.arch())
    .digest('hex');
  const stamp = path.join(workspace, '.dependency-version');
  if ((await fs.readFile(stamp, 'utf8').catch(() => '')) !== signature) {
    await fs.rm(path.join(workspace, 'node_modules'), { recursive: true, force: true });
    await fs.cp(path.join(root, 'node_modules'), path.join(workspace, 'node_modules'), {
      recursive: true,
      mode: constants.COPYFILE_FICLONE,
    });
    await fs.writeFile(stamp, signature);
  }
  for (const file of [
    'src',
    'public',
    'config',
    'package.json',
    'package-lock.json',
    'next.config.ts',
    'tsconfig.json',
    'next-env.d.ts',
    'postcss.config.mjs',
  ]) {
    const target = path.join(workspace, file);
    await fs.rm(target, { recursive: true, force: true });
    await fs.cp(path.join(root, file), target, {
      recursive: true,
      mode: constants.COPYFILE_FICLONE,
    });
  }
  // Only public build configuration crosses into the disposable build workspace.
  const env = await fs.readFile(path.join(root, '.env.local'), 'utf8').catch(() => '');
  const publicEnv = env
    .split(/\r?\n/)
    .filter((line) => /^NEXT_PUBLIC_[A-Z0-9_]+=/.test(line))
    .join('\n');
  await fs.writeFile(path.join(workspace, '.env.local'), publicEnv);
  console.log('Building in a temporary workspace because the project path contains # or ?.');
}
const child = spawn(
  process.execPath,
  [path.join(workspace, 'node_modules/next/dist/bin/next'), 'build', '--webpack'],
  {
    cwd: workspace,
    env: process.env,
    stdio: 'inherit',
  },
);
const code = await new Promise((resolve, reject) => {
  child.once('error', reject);
  child.once('exit', resolve);
});
if (code !== 0) process.exit(typeof code === 'number' ? code : 1);
if (workspace !== root) {
  await fs.rm(path.join(root, 'out'), { recursive: true, force: true });
  await fs.cp(path.join(workspace, 'out'), path.join(root, 'out'), {
    recursive: true,
    mode: constants.COPYFILE_FICLONE,
  });
}
await finalizeExport(root);
