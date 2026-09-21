import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="flex flex-1 flex-col items-center justify-center py-16 text-center sm:py-24 md:py-32"
    >
      {/* Category / Status Kicker */}
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        404 Error · Page Missing
      </p>

      {/* Main Headline */}
      <h1
        id="not-found-title"
        className="mt-4 text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl md:text-6xl"
      >
        Page Not Found
      </h1>

      {/* Editorial Explanatory Copy */}
      <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg">
        The requested page does not exist, has been moved, or is temporarily
        unavailable.
      </p>

      {/* Primary Action: Direct Link Back to Homepage */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-text-primary px-5 py-3 text-sm font-semibold text-background shadow-xs transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <svg
            className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-translate-x-1 motion-reduce:transform-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Return to Home</span>
        </Link>

        <Link
          href="/#work"
          className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary shadow-2xs transition-all duration-200 hover:bg-surface-elevated hover:border-border/90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Explore Selected Work
        </Link>
      </div>

      {/* Helpful Directory of Project Routes */}
      <div className="mt-14 w-full max-w-md rounded-xl border border-border/70 bg-surface-elevated/40 p-5 text-left">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-muted">
          Looking for a case study?
        </span>
        <ul className="mt-3 divide-y divide-border/50 text-sm">
          <li>
            <Link
              href="/projects/pixoree"
              className="flex items-center justify-between py-2 text-text-secondary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span className="font-medium text-text-primary">PIXOREE</span>
              <span className="font-mono text-[11px] text-text-muted">Interactive Design Platform →</span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects/children-of-the-ummah"
              className="flex items-center justify-between py-2 text-text-secondary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span className="font-medium text-text-primary">CHILDREN OF THE UMMAH</span>
              <span className="font-mono text-[11px] text-text-muted">Charity &amp; Payments →</span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects/skillbento"
              className="flex items-center justify-between py-2 text-text-secondary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span className="font-medium text-text-primary">SKILLBENTO</span>
              <span className="font-mono text-[11px] text-text-muted">Multi-Tenant Architecture →</span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects/paw-pals-rescue"
              className="flex items-center justify-between py-2 text-text-secondary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span className="font-medium text-text-primary">PAW PALS RESCUE</span>
              <span className="font-mono text-[11px] text-text-muted">Pet Adoption Client →</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
