import type { FC } from "react";

export const Contact: FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-24 py-20 sm:py-28 md:py-36"
    >
      {/* Editorial Closing Statement */}
      <div className="max-w-4xl">
        {/* Single decorative gesture: a short live-green rule */}
        <span className="block h-px w-16 bg-accent" aria-hidden="true" />

        <h2
          id="contact-title"
          className="mt-8 font-serif text-display text-text-primary"
        >
          Have something worth building?
        </h2>

        <p className="mt-8 max-w-2xl text-lead text-text-secondary">
          Whether you want to build a SaaS platform from scratch, scale an
          existing product, or need a full-stack engineer on your team —
          I&apos;m open to full-time roles, contracts, and technical
          consultations.
        </p>
      </div>

      {/* Direct Email — the primary action */}
      <div className="mt-12 sm:mt-16">
        <a
          href="mailto:sowmik-sec@gmail.com"
          className="link-draw inline-flex min-h-[44px] flex-wrap items-center font-serif text-[clamp(1.5rem,1.1rem+2.7vw,3.5rem)] leading-tight text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Send email to sowmik-sec@gmail.com"
        >
          sowmik-sec@gmail.com
        </a>
      </div>

      {/* Secondary row: résumé + profiles */}
      <div className="mt-10">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <a
            href="/Md.%20Ahsan%20Habib%20Resume.pdf"
            download="Md_Ahsan_Habib_Resume.pdf"
            className="link-draw inline-flex min-h-[44px] items-center text-sm font-medium text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Download Md. Ahsan Habib's résumé in PDF format"
          >
            <span>Download résumé</span>
          </a>

          <a
            href="https://github.com/sowmik-sec"
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw inline-flex min-h-[44px] items-center text-sm font-medium text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Visit Ahsan's GitHub profile (opens in new tab)"
          >
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/md-ahsan-habib-18569b21a/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw inline-flex min-h-[44px] items-center text-sm font-medium text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Connect with Ahsan on LinkedIn (opens in new tab)"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
