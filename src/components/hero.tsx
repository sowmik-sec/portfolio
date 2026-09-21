import type { FC } from "react";
import { ScrollReveal } from "./scroll-reveal";

export const Hero: FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="relative flex flex-col justify-center py-12 sm:py-16 md:py-24 lg:py-28"
    >
      <ScrollReveal className="flex flex-col">
        {/* Quiet identity meta row */}
        <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
          Md. Ahsan Habib · Full Stack Developer · Dhaka, Bangladesh — remote
          worldwide · Open to full-time roles &amp; contracts
        </p>

        {/* Primary headline */}
        <h1
          id="hero-headline"
          className="mt-8 text-display font-semibold text-text-primary sm:mt-10"
        >
          I build fast, scalable web products from idea to production.
        </h1>

        {/* Supporting copy */}
        <p className="mt-8 max-w-2xl text-lead text-text-secondary">
          Full-stack developer at Deadlock Soft. I take products from data
          model to deployed app — SaaS platforms, canvas tools, payment
          systems.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 sm:mt-12">
          {/* Primary CTA */}
          <a
            href="#work"
            className="group inline-flex min-h-[44px] items-center justify-center rounded-md bg-text-primary px-5 py-3 text-sm font-semibold text-background transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>View my work</span>
            <svg
              className="ml-2 h-4 w-4 stroke-current transition-transform duration-200 ease-out group-hover:translate-y-0.5 motion-reduce:transform-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>

          {/* Secondary CTA */}
          <a
            href="/Md.%20Ahsan%20Habib%20Resume.pdf"
            download="Md_Ahsan_Habib_Resume.pdf"
            className="group inline-flex min-h-[44px] items-center justify-center text-sm font-medium text-text-primary underline decoration-border underline-offset-8 transition-colors duration-200 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg
              className="mr-2 h-4 w-4 stroke-current text-text-muted transition-transform duration-200 ease-out group-hover:translate-y-0.5 motion-reduce:transform-none"
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
      </ScrollReveal>
    </section>
  );
};
