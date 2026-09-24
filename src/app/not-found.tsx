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

const CASE_STUDIES = [
  {
    href: "/projects/pixoree",
    name: "Pixoree",
    descriptor: "Interactive design platform",
  },
  {
    href: "/projects/children-of-the-ummah",
    name: "Children of the Ummah",
    descriptor: "Charity & payments",
  },
  {
    href: "/projects/skillbento",
    name: "Skillbento",
    descriptor: "Multi-tenant architecture",
  },
  {
    href: "/projects/paw-pals-rescue",
    name: "Paw Pals Rescue",
    descriptor: "Pet adoption client",
  },
];

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="flex flex-1 flex-col justify-center py-20 sm:py-28 md:py-36"
    >
      <div className="max-w-2xl">
        {/* Status label */}
        <p className="text-[13px] font-medium text-text-muted">404 Error</p>

        {/* Statement */}
        <h1
          id="not-found-title"
          className="mt-6 font-serif text-display text-text-primary"
        >
          Page Not Found.
        </h1>

        {/* Explanatory copy */}
        <p className="mt-8 max-w-xl text-lead text-text-secondary">
          The requested page does not exist, has been moved, or is temporarily
          unavailable.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-text-primary px-6 py-3 text-sm font-semibold text-background transition-colors duration-200 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>Return to Home</span>
          </Link>

          <Link
            href="/#work"
            className="link-draw inline-flex min-h-[44px] items-center text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>Explore Selected Work</span>
          </Link>
        </div>
      </div>

      {/* Helpful directory of project routes */}
      <div className="mt-16 max-w-2xl rounded-xs border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-[13px] font-medium text-text-muted">
          Looking for a case study?
        </h2>
        <ul className="mt-4 divide-y divide-border text-base">
          {CASE_STUDIES.map((project) => (
            <li key={project.href}>
              <Link
                href={project.href}
                className="flex items-baseline justify-between gap-4 py-3 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span className="font-serif text-lg text-text-primary">
                  {project.name}
                </span>
                <span className="text-[13px] text-text-muted">
                  {project.descriptor}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
