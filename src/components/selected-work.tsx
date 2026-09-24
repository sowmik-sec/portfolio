import type { FC } from "react";
import Link from "next/link";
import { SELECTED_PROJECTS } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
import { StatCallout } from "./stat-callout";
import { LedgerRow } from "./ledger-row";

export const SelectedWork: FC = () => {
  return (
    <section
      id="work"
      aria-labelledby="selected-work-title"
      className="relative scroll-mt-24 py-20 sm:py-28 md:py-36"
    >
      {/* Section Header */}
      <h2
        id="selected-work-title"
        className="text-title font-semibold text-text-primary"
      >
        Selected Work
      </h2>

      {/* Projects */}
      <div className="mt-16 space-y-24 sm:mt-20 sm:space-y-32">
        {SELECTED_PROJECTS.map((project) => (
          <article
            key={project.id}
            id={project.id}
            aria-labelledby={`project-title-${project.id}`}
            className="relative flex flex-col"
          >
            {/* Project Header: title, category, live link */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3
                  id={`project-title-${project.id}`}
                  className="text-title font-semibold tracking-tight text-text-primary"
                >
                  {project.title}
                </h3>
                <p className="mt-2 text-[15px] text-text-secondary">
                  {project.category}
                </p>
              </div>

              {/* Direct Live URL Link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw inline-flex min-h-[44px] items-center gap-1.5 self-start text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:self-auto"
                aria-label={`Visit live site for ${project.title} (opens in new tab)`}
              >
                <span>
                  {project.liveUrl.replace("https://", "").replace(/\/$/, "")}
                </span>
                <svg
                  className="h-3.5 w-3.5 shrink-0 text-text-muted"
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
            </div>

            {/* Product visual on a plain plate */}
            <div className="mt-10 border border-border bg-surface sm:mt-12">
              <ProjectVisual projectId={project.id} projectTitle={project.title} />
            </div>

            {/* Stack caption row */}
            <LedgerRow label="Stack" className="mt-3">
              <p className="text-[13px] leading-6 text-text-muted">
                {project.technologies.join(", ")}
              </p>
            </LedgerRow>

            {/* Project Metric (verified products only) */}
            {project.metric ? (
              <div className="mt-12 sm:mt-16">
                <StatCallout
                  value={project.metric.value}
                  caption={project.metric.caption}
                  detail={project.metric.detail}
                />
              </div>
            ) : null}

            {/* Spec rows */}
            <div className="mt-12 space-y-8 border-t border-border pt-8 sm:mt-16">
              <LedgerRow label="Scope">
                <p className="max-w-2xl text-lead text-text-secondary">
                  {project.description}
                </p>
              </LedgerRow>

              <LedgerRow label="What it does">
                <p className="max-w-2xl text-base leading-relaxed text-text-secondary">
                  {project.capabilities.join(", ")}
                </p>
              </LedgerRow>

              <LedgerRow label="Case study">
                <Link
                  href={project.caseStudyUrl}
                  className="link-draw inline-flex min-h-[44px] items-center text-sm font-semibold text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span>View case study</span>
                </Link>
              </LedgerRow>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
