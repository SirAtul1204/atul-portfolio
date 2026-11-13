import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <p className="eyebrow">404 / LOST IN THE STACK</p>
      <h1>This page took a detour.</h1>
      <Link href="/" className="primary-link">
        Back to the portfolio ↗
      </Link>
    </main>
  );
}
