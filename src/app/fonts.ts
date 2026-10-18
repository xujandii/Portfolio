import localFont from 'next/font/local';

export const sora = localFont({
  src: '../../node_modules/@fontsource-variable/sora/files/sora-latin-wght-normal.woff2',
  weight: '100 800',
  display: 'swap',
  variable: '--font-sora',
});

export const dmSans = localFont({
  src: '../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2',
  weight: '100 1000',
  display: 'swap',
  variable: '--font-dm-sans',
});

export const instrumentSerif = localFont({
  src: '../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2',
  weight: '400',
  display: 'swap',
  preload: false,
  variable: '--font-instrument-serif',
});
