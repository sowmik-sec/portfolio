import type { FC } from "react";
import { ScrollReveal } from "./scroll-reveal";

export const Contact: FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative border-t border-border/70 py-16 sm:py-24 md:py-32"
    >
      {/* Editorial Closing Statement */}
      <ScrollReveal className="max-w-4xl">
        {/* Single decorative gesture */}
        <span className="block h-px w-16 bg-accent" aria-hidden="true" />

        <h2
          id="contact-title"
          className="mt-8 text-display font-semibold text-text-primary"
        >
          Have something worth building?
        </h2>

        <p className="mt-8 max-w-2xl text-lead text-text-secondary">
          Whether you want to build a SaaS platform from scratch, scale an
          existing product, or need a full-stack engineer on your team —
          I&apos;m open to full-time roles, contracts, and technical
          consultations.
        </p>
      </ScrollReveal>

      {/* Direct Email — the primary action */}
      <ScrollReveal delay={80} className="mt-12 sm:mt-16">
        <a
          href="mailto:sowmik-sec@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-[44px] items-center gap-3 text-2xl font-semibold tracking-tight text-text-primary underline decoration-border underline-offset-[12px] transition-colors duration-200 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-3xl md:text-4xl lg:text-5xl"
          aria-label="Send email to sowmik-sec@gmail.com"
        >
          <span>sowmik-sec@gmail.com</span>
          <svg
            className="h-6 w-6 shrink-0 text-text-muted transition-all duration-200 ease-out group-hover:translate-x-1.5 group-hover:text-accent motion-reduce:transform-none sm:h-8 sm:w-8"
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
      </ScrollReveal>

      {/* Secondary row: résumé + profiles */}
      <ScrollReveal delay={120} className="mt-10">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <a
            href="/Md.%20Ahsan%20Habib%20Resume.pdf"
            download="Md_Ahsan_Habib_Resume.pdf"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-text-secondary underline decoration-border underline-offset-8 transition-colors duration-200 hover:text-text-primary hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Download Md. Ahsan Habib's résumé in PDF format"
          >
            <svg
              className="h-4 w-4 stroke-current"
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

          <a
            href="https://github.com/sowmik-sec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-text-secondary underline decoration-border underline-offset-8 transition-colors duration-200 hover:text-text-primary hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Visit Ahsan's GitHub profile (opens in new tab)"
          >
            <span>GitHub — @sowmik-sec</span>
          </a>

          <a
            href="https://www.linkedin.com/in/md-ahsan-habib-18569b21a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-text-secondary underline decoration-border underline-offset-8 transition-colors duration-200 hover:text-text-primary hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Connect with Ahsan on LinkedIn (opens in new tab)"
          >
            <span>LinkedIn — md-ahsan-habib</span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};
