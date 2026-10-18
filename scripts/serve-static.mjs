import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.env.STATIC_DIR ?? 'out');
const { basePath, redirects } = JSON.parse(
  await fs.readFile(path.join(root, 'deployment.json'), 'utf8'),
);
const port = Number(process.env.PORT ?? 4173);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.mp4': 'video/mp4',
};
const server = createServer(async (req, res) => {
  try {
    if (!['GET', 'HEAD'].includes(req.method)) {
      res.writeHead(405, { Allow: 'GET, HEAD' });
      res.end();
      return;
    }
    const url = new URL(req.url, 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    if (basePath && pathname === '/') {
      res.writeHead(302, { Location: `${basePath}/` });
      res.end();
      return;
    }
    if (basePath && !pathname.startsWith(`${basePath}/`) && pathname !== basePath) {
      res.writeHead(404);
      res.end();
      return;
    }
    const relative = pathname.slice(basePath.length) || '/';
    const redirect = redirects[relative.replace(/\/$/, '')];
    if (redirect) {
      res.writeHead(308, { Location: `${basePath}${redirect}${url.search}` });
      res.end();
      return;
    }
    let file = path.resolve(root, '.' + relative);
    if (file !== root && !file.startsWith(root + path.sep)) {
      res.writeHead(400);
      res.end();
      return;
    }
    let stat = await fs.stat(file).catch(() => null);
    if (stat?.isDirectory()) {
      if (!pathname.endsWith('/')) {
        res.writeHead(308, { Location: `${pathname}/${url.search}` });
        res.end();
        return;
      }
      file = path.join(file, 'index.html');
      stat = await fs.stat(file).catch(() => null);
    }
    let status = 200;
    if (!stat?.isFile()) {
      file = path.join(root, '404.html');
      stat = await fs.stat(file);
      status = 404;
    }
    const headers = {
      'Content-Type': mime[path.extname(file)] ?? 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': /\/(?:_next\/static|_images)\//.test(relative)
        ? 'public, max-age=31536000, immutable'
        : 'no-cache',
    };
    let start = 0,
      end = stat.size - 1;
    if (req.headers.range && status === 200) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if (!match || (!match[1] && !match[2])) {
        res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` });
        res.end();
        return;
      }
      start = match[1] ? Number(match[1]) : Math.max(0, stat.size - Number(match[2]));
      end = match[1] && match[2] ? Math.min(Number(match[2]), end) : end;
      if (start > end || start >= stat.size) {
        res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` });
        res.end();
        return;
      }
      status = 206;
      headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
    }
    headers['Accept-Ranges'] = 'bytes';
    headers['Content-Length'] = Math.max(0, end - start + 1);
    res.writeHead(status, headers);
    if (req.method === 'HEAD' || stat.size === 0) {
      res.end();
      return;
    }
    const stream = createReadStream(file, { start, end });
    stream.on('error', () => res.destroy());
    stream.pipe(res);
  } catch {
    if (!res.headersSent) res.writeHead(400);
    res.end();
  }
});
server.listen(port, '127.0.0.1', () =>
  console.log(`Static preview: http://127.0.0.1:${server.address().port}${basePath}/`),
);
for (const signal of ['SIGINT', 'SIGTERM'])
  process.on(signal, () => server.close(() => process.exit(0)));
