import type { FC } from "react";
import Link from "next/link";
import { SELECTED_PROJECTS } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
import { StatCallout } from "./stat-callout";
import { ScrollReveal } from "./scroll-reveal";

export const SelectedWork: FC = () => {
  return (
    <section
      id="work"
      aria-labelledby="selected-work-title"
      className="relative py-16 sm:py-24 md:py-32"
    >
      {/* Section Header */}
      <ScrollReveal>
        <h2
          id="selected-work-title"
          className="text-title font-semibold text-text-primary"
        >
          Selected Work
        </h2>
      </ScrollReveal>

      {/* Projects Editorial Flow */}
      <div className="mt-16 space-y-28 sm:mt-20 sm:space-y-40">
        {SELECTED_PROJECTS.map((project) => (
          <ScrollReveal
            as="article"
            key={project.id}
            id={project.id}
            aria-labelledby={`project-title-${project.id}`}
            className="relative flex flex-col"
          >
            {/* Ghost numeral (decorative, behind content) */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-14 right-0 hidden select-none text-[13rem] font-semibold leading-none text-surface-muted dark:text-surface-elevated sm:block lg:text-[15rem]"
            >
              {project.number}
            </span>

            {/* Project Header (Number, Title, Subtitle, Live Link) */}
            <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-mono text-sm font-semibold text-accent">
                  {project.number}
                </span>
                <h3
                  id={`project-title-${project.id}`}
                  className="mt-2 text-title font-semibold text-text-primary"
                >
                  {project.title}
                </h3>
                <p className="mt-2 text-base text-text-secondary sm:text-lg">
                  {project.category}
                </p>
              </div>

              {/* Direct Live URL Link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-1.5 self-start text-sm font-medium text-text-primary underline decoration-border underline-offset-8 transition-colors duration-200 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:self-auto"
                aria-label={`Visit live site for ${project.title} (opens in new tab)`}
              >
                <span>
                  {project.liveUrl.replace("https://", "").replace(/\/$/, "")}
                </span>
                <svg
                  className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
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

            {/* Large Product Visual */}
            <div className="relative mt-10 sm:mt-12">
              <ProjectVisual projectId={project.id} projectTitle={project.title} />
            </div>

            {/* Project Metric (verified products only) */}
            {project.metric ? (
              <div className="relative mt-12 sm:mt-16">
                <StatCallout
                  value={project.metric.value}
                  caption={project.metric.caption}
                  detail={project.metric.detail}
                />
              </div>
            ) : null}

            {/* Editorial Narrative & Engineering Metadata */}
            <div className="relative mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Narrative & Capabilities */}
              <div className="lg:col-span-8">
                <p className="text-lead text-text-secondary">
                  {project.description}
                </p>

                <div className="mt-10">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    What it does
                  </h4>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-secondary">
                    {project.capabilities.join(" · ")}
                  </p>
                </div>
              </div>

              {/* Right Column: Technology & Case Study CTA */}
              <div className="flex flex-col justify-between gap-10 lg:col-span-4">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Technology
                  </h4>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-text-primary">
                    {project.technologies.join(" · ")}
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <div>
                    <Link
                      href={project.caseStudyUrl}
                      className="group inline-flex min-h-[44px] items-center text-base font-semibold text-text-primary transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <span>View case study</span>
                      <svg
                        className="ml-1.5 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>

                  <div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-[44px] items-center text-sm font-medium text-text-muted transition-colors duration-200 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <span>Visit live product</span>
                      <svg
                        className="ml-1 h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
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
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
