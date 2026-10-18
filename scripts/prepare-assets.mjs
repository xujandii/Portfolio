import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import sharp from 'sharp';
import { publicAssets } from './lib/public-assets.mjs';

const root = process.cwd();
const settings = JSON.parse(
  await fs.readFile(path.join(root, 'config/image-settings.json'), 'utf8'),
);
const sizes = [...settings.imageSizes, ...settings.deviceSizes].sort((a, b) => a - b);
const output = path.join(root, 'public/_images');
const manifest = {};
const used = new Set();
const assets = await publicAssets(root);
await fs.mkdir(output, { recursive: true });
const tasks = assets.filter((src) => /\.(?:png|webp|jpe?g)$/.test(src));
let generated = 0;

async function prepare(src) {
  const input = await fs.readFile(path.join(root, 'public', src));
  const metadata = await sharp(input).metadata();
  const id = createHash('sha256')
    .update(input)
    .update(`webp-v1-${settings.quality}`)
    .digest('hex')
    .slice(0, 12);
  const widths = [
    ...new Set([
      ...sizes.filter((size) => size < metadata.width),
      Math.min(metadata.width, sizes.at(-1)),
    ]),
  ];
  manifest[src] = { id, width: metadata.width, height: metadata.height, widths };
  for (const width of widths) {
    const filename = `${id}-${width}.webp`;
    used.add(filename);
    try {
      await fs.access(path.join(output, filename));
      continue;
    } catch {
      /* New or changed image. */
    }
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: settings.quality, effort: 4 })
      .toFile(path.join(output, filename));
    generated++;
  }
}

// Limit concurrent decoders to keep high-resolution research artifacts memory-efficient in CI.
await Promise.all(
  Array.from({ length: 2 }, async () => {
    while (tasks.length) await prepare(tasks.shift());
  }),
);
for (const file of await fs.readdir(output)) {
  if (/^[a-f0-9]{12}-\d+\.webp$/.test(file) && !used.has(file))
    await fs.unlink(path.join(output, file));
}
await fs.mkdir(path.join(root, 'src/generated'), { recursive: true });
const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
const json = JSON.stringify(sorted, null, 2) + '\n';
const manifestPath = path.join(root, 'src/generated/image-manifest.json');
if ((await fs.readFile(manifestPath, 'utf8').catch(() => '')) !== json)
  await fs.writeFile(manifestPath, json);
console.log(
  `Prepared ${Object.keys(manifest).length} responsive images (${generated} new WebP variants).`,
);
