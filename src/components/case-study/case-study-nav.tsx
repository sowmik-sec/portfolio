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
        className="group inline-flex min-h-[44px] items-center gap-2 py-2 font-mono text-xs text-text-muted transition-colors duration-200 hover:text-text-primary active:translate-x-[-2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span
          aria-hidden="true"
          className="transition-transform duration-200 ease-out group-hover:-translate-x-1.5 motion-reduce:transform-none"
        >
          ←
        </span>
        <span>{backLabel}</span>
      </Link>
    </nav>
  );
}
