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
        className="group inline-flex items-center gap-2 font-mono text-xs text-text-muted transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:-translate-x-1 motion-reduce:transform-none"
        >
          ←
        </span>
        <span>{backLabel}</span>
      </Link>
    </nav>
  );
}
