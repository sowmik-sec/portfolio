import type { FC } from "react";
import Link from "next/link";
import { SELECTED_PROJECTS } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
import { ScrollReveal } from "./scroll-reveal";

export const SelectedWork: FC = () => {
  return (
    <section
      id="work"
      aria-labelledby="selected-work-title"
      className="relative border-t border-border/70 py-16 sm:py-24 md:py-32"
    >
      {/* Section Header */}
      <ScrollReveal className="flex flex-col gap-2 border-b border-border/70 pb-6 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Portfolio
          </span>
          <h2
            id="selected-work-title"
            className="mt-1 text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl md:text-4xl"
          >
            Selected Work
          </h2>
        </div>
        <p className="font-mono text-xs text-text-muted">
          Shipped Production Applications
        </p>
      </ScrollReveal>

      {/* Projects Editorial Flow */}
      <div className="mt-12 space-y-24 sm:mt-16 sm:space-y-32">
        {SELECTED_PROJECTS.map((project, index) => (
          <ScrollReveal
            as="article"
            key={project.id}
            id={project.id}
            delay={index * 60}
            aria-labelledby={`project-title-${project.id}`}
            className="flex flex-col"
          >
            {/* Project Header (Number, Title, Subtitle, Live Link) */}
            <div className="flex flex-col justify-between gap-4 border-b border-border/40 pb-5 sm:flex-row sm:items-end">
              <div>
                <span className="font-mono text-sm font-semibold text-accent">
                  {project.number}
                </span>
                <h3
                  id={`project-title-${project.id}`}
                  className="mt-1 text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl md:text-4xl"
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-text-secondary sm:text-base">
                  {project.category}
                </p>
              </div>

              {/* Direct Live URL Link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 self-start rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-text-muted shadow-2xs transition-all duration-200 hover:border-border/90 hover:bg-surface-elevated hover:text-text-primary active:scale-95 focus-visible:outline-2 focus-visible:outline-accent sm:self-auto"
                aria-label={`Visit live site for ${project.title} (opens in new tab)`}
              >
                <span>{project.liveUrl.replace("https://", "").replace(/\/$/, "")}</span>
                <svg
                  className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
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
            <div className="mt-6 sm:mt-8">
              <ProjectVisual projectId={project.id} projectTitle={project.title} />
            </div>

            {/* Editorial Narrative & Engineering Metadata */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Narrative & Key Capabilities */}
              <div className="space-y-6 lg:col-span-8">
                <div>
                  <h4 className="sr-only">About the Project</h4>
                  <p className="text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Capabilities Pills */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Engineering Focus &amp; Core Systems
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="inline-flex items-center rounded-md border border-border/70 bg-surface-elevated/60 px-2.5 py-1 text-xs text-text-secondary transition-colors duration-150 hover:border-border hover:text-text-primary"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Technology & Case Study CTA */}
              <div className="flex flex-col justify-between gap-6 border-t border-border/40 pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:border-border/60 lg:pl-8 lg:pt-0">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Technology
                  </h4>
                  <ul className="mt-3 space-y-1.5 font-mono text-xs text-text-primary">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent/70" aria-hidden="true" />
                        <span className="transition-colors duration-150 hover:text-accent">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-border/40">
                  <div>
                    <Link
                      href={project.caseStudyUrl}
                      className="group inline-flex min-h-[44px] items-center text-sm font-semibold text-text-primary transition-colors duration-200 hover:text-accent active:translate-x-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
                      className="group inline-flex min-h-[44px] items-center text-xs font-medium text-text-muted transition-colors duration-200 hover:text-text-primary active:translate-x-0.5 focus-visible:outline-2 focus-visible:outline-accent"
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
