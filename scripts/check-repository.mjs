import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const tracked = spawnSync('git', ['ls-files', '-z'], { cwd: root, encoding: 'utf8' });
if (tracked.status === 0) {
  const blocked = tracked.stdout
    .split('\0')
    .filter(
      (file) =>
        /^(?:Project content\/|framer\/|\.next\/|out\/|node_modules\/|dist\/|\.env(?!\.example$))/.test(
          file,
        ) ||
        /(?:^|\/)\.DS_Store$/.test(file) ||
        (/^docs\//.test(file) && !/^docs\/(?:deployment|performance)\.md$/.test(file)),
    );
  if (blocked.length)
    throw new Error(
      `Local/private files are tracked. Remove them from Git's index before uploading:\n${blocked.join('\n')}`,
    );
}
const { publicAssets } = await import('./lib/public-assets.mjs');
for (const src of await publicAssets(root)) {
  if ((await fs.stat(path.join(root, 'public', src))).size >= 100 * 1024 * 1024) {
    throw new Error(`Public asset exceeds GitHub's individual-file limit: ${src}`);
  }
}
console.log('Repository checks pass: no tracked local/private files or oversized public assets.');
