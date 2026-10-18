import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const code = ts.transpileModule(
  await readFile(new URL('../../src/lib/paths.ts', import.meta.url), 'utf8'),
  { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } },
).outputText;
async function paths(base) {
  const previous = process.env.NEXT_PUBLIC_BASE_PATH;
  process.env.NEXT_PUBLIC_BASE_PATH = base;
  try {
    return await import(
      `data:text/javascript;base64,${Buffer.from(code).toString('base64')}#${encodeURIComponent(base)}`
    );
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_BASE_PATH;
    else process.env.NEXT_PUBLIC_BASE_PATH = previous;
  }
}
test('Public file paths work for root sites and repository subpaths without duplicate prefixes', async () => {
  const root = await paths('');
  assert.equal(root.assetPath('/logo.svg'), '/logo.svg');
  const project = await paths('/portfolio/');
  assert.equal(project.assetPath('/pause/image.webp'), '/portfolio/pause/image.webp');
  assert.equal(project.assetPath('/portfolio/pause/image.webp'), '/portfolio/pause/image.webp');
  assert.equal(
    project.assetPath('https://example.com/image.webp'),
    'https://example.com/image.webp',
  );
  assert.equal(project.assetPath('data:image/webp;base64,test'), 'data:image/webp;base64,test');
  assert.equal(project.assetPath('//example.com/image.webp'), '//example.com/image.webp');
});
test('Navigation recognizes the same route with base paths and trailing slashes', async () => {
  const project = await paths('/portfolio');
  assert.equal(project.routePath('/portfolio/'), '/');
  assert.equal(project.routePath('/portfolio/about/'), '/about');
  assert.equal(project.routePath('/about/'), '/about');
  assert.equal(project.routePath('/portfolio-other/about/'), '/portfolio-other/about');
});
