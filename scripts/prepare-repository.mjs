import fs from 'node:fs/promises';
import path from 'node:path';
import { publicAssets } from './lib/public-assets.mjs';

const root = process.cwd();
const target = path.join(root, 'dist/github-repository');
await fs.rm(target, { recursive: true, force: true });
await fs.mkdir(target, { recursive: true });
const includes = [
  'src',
  'config',
  '.github',
  'scripts/lib',
  'scripts/prepare-assets.mjs',
  'scripts/finalize-export.mjs',
  'scripts/build.mjs',
  'scripts/serve-static.mjs',
  'scripts/check-repository.mjs',
  'scripts/check-export.mjs',
  'scripts/prepare-repository.mjs',
  'tests',
  'README.md',
  'AGENTS.md',
  'DESIGN.MD',
  '.gitignore',
  '.gitattributes',
  '.node-version',
  '.prettierignore',
  '.prettierrc.json',
  '.env.example',
  'package.json',
  'package-lock.json',
  'next.config.ts',
  'next-env.d.ts',
  'tsconfig.json',
  'eslint.config.mjs',
  'postcss.config.mjs',
  'docs/deployment.md',
  'docs/performance.md',
];
for (const name of includes) {
  const source = path.join(root, name);
  if (!(await fs.stat(source).catch(() => null))) continue;
  await fs.cp(source, path.join(target, name), {
    recursive: true,
    filter: (src) =>
      !src.includes(`${path.sep}generated${path.sep}`) &&
      !src.endsWith(`${path.sep}generated`) &&
      !src.endsWith('.DS_Store'),
  });
}
for (const src of await publicAssets(root)) {
  const dest = path.join(target, 'public', src);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.copyFile(path.join(root, 'public', src), dest);
}
console.log(
  `Prepared public repository files at ${target}. Private sources, progress notes, generated Framer files, and dependencies were excluded.`,
);
