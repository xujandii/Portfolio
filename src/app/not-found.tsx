import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="not-found page-width">
      <p>404 / A missing connection</p>
      <h1>
        This path doesn’t
        <br />
        lead anywhere yet.
      </h1>
      <p>You can head back to the portfolio and pick up another thread.</p>
      <Link href="/" className="button-primary">
        Back to the portfolio
      </Link>
    </main>
  );
}
