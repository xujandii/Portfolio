import fs from 'node:fs/promises';
import path from 'node:path';
import { publicAssets, walkFiles } from './lib/public-assets.mjs';

const root = process.cwd(),
  output = path.join(root, 'out');
const { basePath } = JSON.parse(await fs.readFile(path.join(output, 'deployment.json'), 'utf8'));
const htmlFiles = (await walkFiles(output)).filter((file) => file.endsWith('.html'));
const checked = new Set();
for (const file of htmlFiles) {
  const html = await fs.readFile(file, 'utf8');
  for (const match of html.matchAll(/(?:src|href|poster)="(\/[^"<>]*)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (url.startsWith('//')) continue;
    if (basePath && !url.startsWith(`${basePath}/`))
      throw new Error(`Unprefixed path ${url} in ${file}`);
    const clean = decodeURIComponent(url.slice(basePath.length).split(/[?#]/, 1)[0]);
    const target = path.join(output, clean);
    if (checked.has(target)) continue;
    checked.add(target);
    const stat = await fs.stat(target).catch(() => null);
    if (!stat) throw new Error(`Missing exported resource: ${url}`);
    if (stat.isDirectory()) await fs.access(path.join(target, 'index.html'));
  }
  if (html.includes('/_next/image?')) throw new Error(`Server image URL remains in ${file}`);
}
await fs.access(path.join(output, '.nojekyll'));
await fs.access(path.join(output, '404.html'));
for (const src of await publicAssets(root)) await fs.access(path.join(output, src));
const files = await walkFiles(output);
let bytes = 0;
for (const file of files) bytes += (await fs.stat(file)).size;
console.log(
  `Verified ${htmlFiles.length} HTML pages and ${checked.size} referenced paths. Export: ${(bytes / 1048576).toFixed(1)} MB, ${files.length} files. Base path: ${basePath || '/'}.`,
);
