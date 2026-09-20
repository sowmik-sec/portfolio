interface CaseStudyHeaderProps {
  title: string;
  tagline: string;
  category: string;
  statusBadge?: {
    label: string;
    variant?: "default" | "warning" | "success";
  };
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
  statusBadge,
  externalLink,
  repoLink,
  role,
  timeline,
  techStack,
}: CaseStudyHeaderProps) {
  return (
    <header className="border-b border-border/70 pb-10 sm:pb-12">
      {/* Category & Status Badges */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
          {category}
        </span>
        {statusBadge && (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium ${
              statusBadge.variant === "warning"
                ? "border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400"
                : statusBadge.variant === "success"
                ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                : "border border-border bg-surface-elevated text-text-secondary"
            }`}
          >
            {statusBadge.variant === "warning" && (
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
            )}
            {statusBadge.variant === "success" && (
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            )}
            {statusBadge.label}
          </span>
        )}
      </div>

      {/* Main Title & Tagline */}
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl sm:leading-relaxed">
        {tagline}
      </p>

      {/* Project Meta Bar & Actions */}
      <div className="mt-8 grid grid-cols-1 gap-6 border-t border-border/50 pt-6 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
        {/* Role & Timeline */}
        <div className="space-y-4 sm:col-span-1 lg:col-span-3">
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
            <p className="mt-1 text-sm font-medium text-text-primary">{timeline}</p>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="sm:col-span-1 lg:col-span-5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
            Tech Stack
          </span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-border bg-surface-elevated/70 px-2 py-0.5 font-mono text-xs text-text-primary transition-colors duration-150 hover:bg-surface-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* External / Repository CTAs */}
        <div className="flex flex-wrap items-center gap-3 sm:col-span-2 lg:col-span-4 lg:justify-end">
          {externalLink && (
            <a
              href={externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-md bg-text-primary px-4 py-2 text-xs font-semibold text-background shadow-xs transition-all duration-200 hover:opacity-90 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
              className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-md border border-border bg-surface px-4 py-2 text-xs font-semibold text-text-primary shadow-2xs transition-all duration-200 hover:border-border/90 hover:bg-surface-elevated active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg
                className="h-3.5 w-3.5 text-text-muted transition-colors duration-200 group-hover:text-text-primary"
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
