import fs from 'node:fs/promises';
import path from 'node:path';

export async function walkFiles(folder) {
  const files = [];
  for (const entry of await fs.readdir(folder, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const file = path.join(folder, entry.name);
    if (entry.isDirectory()) files.push(...(await walkFiles(file)));
    else if (entry.isFile()) files.push(file);
  }
  return files.sort();
}

/** Only source-referenced public files belong in the deployment or public repository. */
export async function publicAssets(root = process.cwd()) {
  const files = (await walkFiles(path.join(root, 'src'))).filter(
    (file) => /\.[cm]?[jt]sx?$/.test(file) && !file.includes(`${path.sep}generated${path.sep}`),
  );
  const assets = new Set();
  for (const file of files) {
    const code = await fs.readFile(file, 'utf8');
    for (const match of code.matchAll(
      /['"](\/(?!\/)[^'"\s?#]+\.(?:png|webp|jpe?g|svg|ico|mp4))['"]/g,
    )) {
      const source = path.resolve(root, 'public', `.${match[1]}`);
      if (!source.startsWith(path.resolve(root, 'public') + path.sep))
        throw new Error('Invalid public asset path');
      await fs.access(source);
      assets.add(match[1]);
    }
  }
  return [...assets].sort();
}
