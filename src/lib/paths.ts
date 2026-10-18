const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? '';

export const basePath = configuredBasePath === '/' ? '' : configuredBasePath.replace(/\/$/, '');

/** Prefix public files, which Next Link's automatic basePath handling does not cover. */
export function assetPath(src: string): string {
  if (!basePath || !src.startsWith('/') || src.startsWith('//')) return src;
  if (src === basePath || src.startsWith(`${basePath}/`)) return src;
  return `${basePath}${src}`;
}

export function routePath(pathname: string): string {
  const path =
    basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
      ? pathname.slice(basePath.length)
      : pathname;
  return path.replace(/\/+$/, '') || '/';
}
