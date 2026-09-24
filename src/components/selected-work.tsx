import type { FC } from "react";
import Link from "next/link";
import { SELECTED_PROJECTS } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
import { StatCallout } from "./stat-callout";
import { Artboard } from "./artboard";

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
        className="font-serif text-title text-text-primary"
      >
        Selected Work
      </h2>

      {/* Projects */}
      <div className="mt-16 space-y-28 sm:mt-20 sm:space-y-40">
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
                  className="font-serif text-title tracking-[0.02em] text-text-primary"
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

            {/* Framed product visual with spec-plate caption */}
            <div className="mt-10 sm:mt-12">
              <Artboard
                label={`${project.title} interface preview`}
                caption={project.technologies.join(", ")}
              >
                <ProjectVisual projectId={project.id} projectTitle={project.title} />
              </Artboard>
            </div>

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

            {/* Narrative & Capabilities */}
            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <p className="text-lead text-text-secondary lg:col-span-7">
                {project.description}
              </p>

              <div className="flex flex-col justify-between gap-10 lg:col-span-5">
                <div>
                  <h4 className="text-[13px] font-medium text-text-muted">
                    What it does
                  </h4>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {project.capabilities.join(", ")}
                  </p>
                </div>

                {/* Case Study CTA */}
                <div>
                  <Link
                    href={project.caseStudyUrl}
                    className="link-draw inline-flex min-h-[44px] items-center text-base font-semibold text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span>View case study</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
