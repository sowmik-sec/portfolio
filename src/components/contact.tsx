import type { FC } from "react";
import { ScrollReveal } from "./scroll-reveal";

export const Contact: FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative border-t border-border/70 py-16 sm:py-24 md:py-32"
    >
      {/* Editorial Header */}
      <ScrollReveal className="max-w-3xl">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
          Direct Channel · Get In Touch
        </span>
        <h2
          id="contact-title"
          className="mt-3 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]"
        >
          Have something worth building?
        </h2>
        <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
          Whether you are looking to engineer a greenfield SaaS platform, scale
          an existing production web application, or need a full-stack engineer
          for your team—I am open to full-time engineering roles, contracts, and
          technical consultations.
        </p>
      </ScrollReveal>

      {/* Main Action Block: Direct, high-contrast, form-free interaction */}
      <ScrollReveal delay={80} className="mt-10 sm:mt-12">
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-200 hover:border-border/90 sm:p-8 md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Direct Email Callout */}
            <div className="space-y-2">
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-text-muted">
                Primary Contact
              </span>
              <div>
                <a
                  href="mailto:sowmik-sec@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] items-center gap-3 text-xl font-bold tracking-tight text-text-primary transition-colors duration-200 hover:text-accent active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-accent sm:text-2xl md:text-3xl"
                  aria-label="Send email to sowmik-sec@gmail.com"
                >
                  <span className="underline decoration-border decoration-2 underline-offset-4 transition-colors duration-200 group-hover:decoration-accent">
                    sowmik-sec@gmail.com
                  </span>
                  <svg
                    className="h-5 w-5 text-text-muted transition-transform duration-200 ease-out group-hover:translate-x-1.5 group-hover:text-accent motion-reduce:transform-none sm:h-6 sm:w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
              <p className="text-xs text-text-muted sm:text-sm">
                Direct inbox · Typically responds within 24 hours
              </p>
            </div>

            {/* Direct Résumé Download Button */}
            <div className="flex items-center">
              <a
                href="/Md.%20Ahsan%20Habib%20Resume.pdf"
                download="Md_Ahsan_Habib_Resume.pdf"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-text-primary px-6 py-3.5 text-sm font-semibold text-background shadow-xs transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
                aria-label="Download Md. Ahsan Habib's résumé in PDF format"
              >
                <svg
                  className="h-4 w-4 stroke-current transition-transform duration-200 ease-out group-hover:translate-y-0.5 motion-reduce:transform-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download résumé</span>
              </a>
            </div>
          </div>

          {/* Social / Professional Profiles Secondary Row */}
          <div className="mt-8 border-t border-border/60 pt-6">
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-text-muted">
              Connect Across Networks
            </span>
            <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/sowmik-sec"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border bg-surface-elevated/70 px-4 py-2.5 text-xs font-semibold text-text-primary transition-all duration-200 hover:border-text-primary/30 hover:text-accent hover:shadow-xs active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm"
                aria-label="Visit Ahsan's GitHub profile (opens in new tab)"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
                <span className="font-mono text-[11px] text-text-muted">
                  @sowmik-sec
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/md-ahsan-habib-18569b21a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border bg-surface-elevated/70 px-4 py-2.5 text-xs font-semibold text-text-primary transition-all duration-200 hover:border-text-primary/30 hover:text-accent hover:shadow-xs active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm"
                aria-label="Connect with Ahsan on LinkedIn (opens in new tab)"
              >
                <svg
                  className="h-4 w-4 text-[#0A66C2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
                <span className="font-mono text-[11px] text-text-muted">
                  md-ahsan-habib
                </span>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
