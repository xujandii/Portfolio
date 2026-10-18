'use client';

import type { ImageLoaderProps } from 'next/image';
import generatedImages from '../generated/image-manifest.json';
import { assetPath, basePath } from './paths';

type PreparedImage = { id: string; width: number; height: number; widths: number[] };
const images = generatedImages as Record<string, PreparedImage>;

/** Build-time WebP variants work on static hosts without an image API or paid service. */
export default function imageLoader({ src, width }: ImageLoaderProps): string {
  const local = basePath && src.startsWith(`${basePath}/`) ? src.slice(basePath.length) : src;
  const image = images[local.split(/[?#]/, 1)[0]];
  if (!image) return assetPath(src);
  const size = image.widths.find((candidate) => candidate >= width) ?? image.widths.at(-1);
  return assetPath(`/_images/${image.id}-${size}.webp`);
}
