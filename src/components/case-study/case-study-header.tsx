interface CaseStudyHeaderProps {
  title: string;
  tagline: string;
  category: string;
  status?: string;
  externalLink?: {
    label: string;
    url: string;
  };
  repoLink?: {
    label: string;
    url: string;
  };
  role: string;
  timeline: string;
  techStack: string[];
}

export function CaseStudyHeader({
  title,
  tagline,
  category,
  status,
  externalLink,
  repoLink,
  role,
  timeline,
  techStack,
}: CaseStudyHeaderProps) {
  return (
    <header className="border-b border-border/70 pb-10 sm:pb-12">
      {/* Category & Status */}
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
          {category}
        </span>
        {status && (
          <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
            {status}
          </span>
        )}
      </div>

      {/* Main Title & Tagline */}
      <h1 className="mt-3 text-title font-semibold text-text-primary">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-lead text-text-secondary">
        {tagline}
      </p>

      {/* Project Meta & Actions */}
      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
              Role
            </span>
            <p className="mt-1 text-sm font-medium text-text-primary">{role}</p>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
              Timeline / Status
            </span>
            <p className="mt-1 text-sm font-medium text-text-primary">
              {timeline}
            </p>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
              Tech Stack
            </span>
            <p className="mt-1 font-mono text-sm leading-relaxed text-text-primary">
              {techStack.join(" · ")}
            </p>
          </div>
        </div>

        {/* External / Repository CTAs */}
        <div className="flex flex-wrap items-center gap-5">
          {externalLink && (
            <a
              href={externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-md bg-text-primary px-4 py-2 text-sm font-semibold text-background transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span>{externalLink.label}</span>
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          )}

          {repoLink && (
            <a
              href={repoLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-text-primary underline decoration-border underline-offset-8 transition-colors duration-200 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg
                className="h-3.5 w-3.5 text-text-muted"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>{repoLink.label}</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
