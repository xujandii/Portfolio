import fs from 'node:fs/promises';
import path from 'node:path';
import { publicAssets, walkFiles } from './lib/public-assets.mjs';

export async function finalizeExport(root = process.cwd()) {
  const output = path.join(root, 'out');
  await fs.access(path.join(output, 'index.html'));
  const referenced = new Set(await publicAssets(root));
  let removedBytes = 0;
  let removedFiles = 0;
  for (const file of await walkFiles(path.join(root, 'public'))) {
    const src = '/' + path.relative(path.join(root, 'public'), file).split(path.sep).join('/');
    if (referenced.has(src) || src.startsWith('/_images/')) continue;
    const exported = path.join(output, src);
    try {
      removedBytes += (await fs.stat(exported)).size;
      await fs.unlink(exported);
      removedFiles++;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  // macOS Finder metadata has no role in a public site.
  async function cleanMetadata(folder) {
    for (const entry of await fs.readdir(folder, { withFileTypes: true })) {
      const file = path.join(folder, entry.name);
      if (entry.name === '.DS_Store') await fs.unlink(file);
      else if (entry.isDirectory()) await cleanMetadata(file);
    }
  }
  await cleanMetadata(output);
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').trim().replace(/\/$/, '');
  const redirects = JSON.parse(await fs.readFile(path.join(root, 'config/redirects.json'), 'utf8'));
  for (const [source, target] of Object.entries(redirects)) {
    const folder = path.join(output, source);
    const destination = `${basePath}${target}`;
    const absolute = process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(destination, process.env.NEXT_PUBLIC_SITE_URL).href
      : destination;
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><link rel="canonical" href="${absolute}"><meta http-equiv="refresh" content="0;url=${destination}"><title>Project moved | Jandi Nguyen</title></head><body><p>This project has moved. <a href="${destination}">Continue to the case study</a>.</p><script>location.replace(${JSON.stringify(destination)} + location.search + location.hash)</script></body></html>`;
    await fs.mkdir(folder, { recursive: true });
    await fs.writeFile(path.join(folder, 'index.html'), html);
  }
  await fs.writeFile(path.join(output, '.nojekyll'), '');
  await fs.writeFile(path.join(output, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  await fs.writeFile(
    path.join(output, 'deployment.json'),
    JSON.stringify({ basePath, redirects }) + '\n',
  );
  console.log(
    `Static export ready. Excluded ${removedFiles} unused files (${(removedBytes / 1048576).toFixed(1)} MB); source files preserved.`,
  );
}
