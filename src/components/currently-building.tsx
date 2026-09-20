import type { FC } from "react";
import Link from "next/link";
import { CURRENTLY_BUILDING_PROJECTS } from "@/data/projects";

export const CurrentlyBuilding: FC = () => {
  return (
    <section
      id="currently-building"
      aria-labelledby="currently-building-title"
      className="relative border-t border-border/70 py-16 sm:py-24 md:py-32"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-2 border-b border-border/70 pb-6 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              Active Engineering
            </span>
            <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-amber-600 dark:text-amber-400">
              WIP
            </span>
          </div>
          <h2
            id="currently-building-title"
            className="mt-1 text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl md:text-4xl"
          >
            Currently Building
          </h2>
        </div>
        <p className="font-mono text-xs text-text-muted">
          Systems Design &amp; In-Progress Projects
        </p>
      </div>

      {/* Editorial Framing Notice */}
      <div className="mt-8 rounded-lg border border-border/70 bg-surface-elevated/40 p-4 text-xs text-text-secondary sm:flex sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 rounded-full bg-amber-500 shrink-0" aria-hidden="true" />
          <p>
            <strong className="font-semibold text-text-primary">Separate Workflows:</strong>{" "}
            These projects showcase ongoing systems engineering and active client codebases, explicitly separated from completed production showcases.
          </p>
        </div>
        <span className="mt-2 block font-mono text-[11px] text-text-muted sm:mt-0 shrink-0">
          In Active Development
        </span>
      </div>

      {/* In-Progress Projects Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {CURRENTLY_BUILDING_PROJECTS.map((project) => (
          <article
            key={project.id}
            id={`building-${project.id}`}
            aria-labelledby={`building-title-${project.id}`}
            className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs transition-colors hover:border-border/90 hover:bg-surface/90 sm:p-8"
          >
            {/* Top Section: Header, Concept, Architecture */}
            <div>
              {/* Card Meta Row */}
              <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-4">
                <span className="font-mono text-xs font-semibold text-accent">
                  {project.number} / In Progress
                </span>

                {/* Status Indicator Badge */}
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs font-medium ${
                    project.statusVariant === "warning"
                      ? "border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      : "border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      project.statusVariant === "warning"
                        ? "bg-amber-500 animate-pulse"
                        : "bg-sky-500 animate-pulse"
                    }`}
                    aria-hidden="true"
                  />
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="mt-4">
                <h3
                  id={`building-title-${project.id}`}
                  className="text-xl font-bold tracking-tight text-text-primary sm:text-2xl"
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-text-muted sm:text-sm">
                  {project.category}
                </p>
              </div>

              {/* Concept Narrative */}
              <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                {project.concept}
              </p>

              {/* Architecture & Modules */}
              <div className="mt-6 space-y-4">
                {/* Architecture Highlights */}
                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Architecture &amp; Systems
                  </h4>
                  <ul className="mt-2.5 space-y-1.5 font-mono text-xs text-text-primary">
                    {project.architectureHighlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                        <span className="text-text-secondary leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Modules or Features */}
                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {project.id === "skillbento" ? "Core Platform Modules" : "Confirmed Client Features"}
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.coreModules.map((mod) => (
                      <span
                        key={mod}
                        className="inline-flex items-center rounded-md border border-border/70 bg-surface-elevated/70 px-2.5 py-1 text-xs text-text-secondary"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Technologies, Status Note, and Action Links */}
            <div className="mt-8 border-t border-border/50 pt-6 space-y-4">
              {/* Tech Stack Pills */}
              <div>
                <h5 className="sr-only">Technologies Used</h5>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded bg-surface-elevated px-2 py-0.5 font-mono text-[11px] text-text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Scope & Authenticity Note */}
              <p className="font-mono text-[11px] leading-relaxed text-text-muted">
                {project.statusNote}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={project.caseStudyUrl}
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm"
                >
                  <span>
                    {project.id === "skillbento"
                      ? "Explore system architecture"
                      : "Read client case study"}
                  </span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
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

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-xs font-medium text-text-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                  >
                    <span>GitHub repository</span>
                    <svg
                      className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
