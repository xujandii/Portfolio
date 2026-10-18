import Link from 'next/link';
import { Arrow } from './Icons';
import { BrandLogo } from './BrandLogo';
import { ContactLinks } from './ContactLinks';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-invitation">
        <p>Something unclear?</p>
        <Link href="/contact">
          Let’s make
          <br />
          sense of it.
          <Arrow diagonal />
        </Link>
      </div>
      <div className="footer-bottom">
        <Link className="footer-brand" href="/" aria-label="Jandi Nguyen, home">
          <BrandLogo />
          Jandi Nguyen
        </Link>
        <p>Service & UX Designer</p>
        <p>Helsinki, Finland</p>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <ContactLinks />
        </div>
        <span className="copyright">© {new Date().getFullYear()} Jandi Nguyen</span>
      </div>
    </footer>
  );
}
