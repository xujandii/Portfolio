import type { Metadata } from 'next';
import { sora, dmSans, instrumentSerif } from './fonts';
import './approach-utilities.css';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ReadingProgress } from '@/components/ReadingProgress';
import { assetPath } from '@/lib/paths';
export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) }
    : {}),
  title: {
    default: 'Jandi Nguyen — Service & UX Designer, Helsinki',
    template: '%s | Jandi Nguyen',
  },
  description:
    'Jandi Nguyen is a Service & UX Designer in Helsinki, connecting people, systems, and possibilities through research, service design, and prototyping.',
  robots: { index: false, follow: false },
  icons: {
    icon: { url: assetPath('/logo.svg'), type: 'image/svg+xml', sizes: 'any' },
  },
  openGraph: {
    title: 'Jandi Nguyen — Good design connects the dots.',
    description:
      'Service design, systems thinking, and human possibility. A portfolio from Helsinki.',
    type: 'website',
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} ${instrumentSerif.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ReadingProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
