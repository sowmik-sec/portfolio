import Link from "next/link";

interface CaseStudyNavProps {
  backHref?: string;
  backLabel?: string;
}

export function CaseStudyNav({
  backHref = "/#work",
  backLabel = "Back to Selected Work",
}: CaseStudyNavProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 sm:mb-12">
      <Link
        href={backHref}
        className="group inline-flex min-h-[44px] items-center gap-2 py-2 text-[13px] font-medium text-text-muted transition-colors duration-200 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <svg
          aria-hidden="true"
          className="h-3.5 w-3.5 stroke-current transition-transform duration-200 ease-out group-hover:-translate-x-1 motion-reduce:transform-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span>{backLabel}</span>
      </Link>
    </nav>
  );
}
