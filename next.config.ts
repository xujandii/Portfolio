import type { NextConfig } from 'next';
import imageSettings from './config/image-settings.json';

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').trim().replace(/\/$/, '');
if (basePath && !/^\/[a-zA-Z0-9._/-]+$/.test(basePath)) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be empty or a path such as /portfolio.');
}
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  poweredByHeader: false,
  images: {
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
    deviceSizes: imageSettings.deviceSizes,
    imageSizes: imageSettings.imageSizes,
  },
  experimental: { optimizePackageImports: ['@phosphor-icons/react'] },
};
export default nextConfig;
