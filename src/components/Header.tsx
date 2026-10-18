'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { routePath } from '@/lib/paths';

export function Header() {
  const pathname = routePath(usePathname());
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [pathname]);
  return (
    <header className="site-header" data-home={pathname === '/'} data-scrolled={scrolled}>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/#work" aria-current={pathname.startsWith('/work') ? 'page' : undefined}>
          Works
        </Link>
        <Link className="brand" href="/" aria-label="Jandi Nguyen, home">
          <BrandLogo priority />
          <span>Jandi Nguyen</span>
        </Link>
        <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>
          About
        </Link>
      </nav>
    </header>
  );
}
