import type { FC } from "react";
import { ScrollReveal } from "./scroll-reveal";

export const Hero: FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="relative flex flex-col justify-center py-12 sm:py-16 md:py-24 lg:py-28"
    >
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
        {/* Dominant editorial column (Headline, Narrative, Actions) */}
        <ScrollReveal className="flex flex-col lg:col-span-8">
          {/* Subtle identity / role kicker */}
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10 dark:ring-emerald-500/20"
              aria-hidden="true"
            />
            <p className="font-mono text-xs tracking-wider uppercase text-text-muted sm:text-sm">
              Md. Ahsan Habib · Full Stack Developer
            </p>
          </div>

          {/* Primary headline */}
          <h1
            id="hero-headline"
            className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]"
          >
            I build fast, scalable web products from idea to production.
          </h1>

          {/* Supporting copy */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
            Full-stack engineer specializing in SaaS platforms, complex
            interactive web applications, and resilient backend architecture.
            Translating ambitious ideas into robust, deployed software.
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
            {/* Primary CTA */}
            <a
              href="#work"
              className="group inline-flex min-h-[44px] items-center justify-center rounded-md bg-text-primary px-5 py-3 text-sm font-semibold text-background shadow-xs transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
              className="group inline-flex min-h-[44px] items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary shadow-2xs transition-all duration-200 hover:bg-surface-elevated hover:border-border/90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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

        {/* Subtle, non-competing asymmetric visual element */}
        <ScrollReveal
          delay={80}
          className="flex flex-col justify-between rounded-xl border border-border/70 bg-surface/60 p-6 backdrop-blur-xs transition-colors duration-200 hover:border-border lg:col-span-4 lg:mt-3"
          aria-hidden="true"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="font-mono text-xs font-medium text-text-muted">
                System Focus
              </span>
              <span className="font-mono text-[11px] text-accent">
                Production Ready
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-text-secondary sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="font-mono text-[11px] text-text-muted">01</span>
                <span>Full-Stack &amp; SaaS Architectures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-[11px] text-text-muted">02</span>
                <span>Interactive Canvas &amp; Web Engines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-[11px] text-text-muted">03</span>
                <span>APIs, Payments &amp; Cloud Infrastructure</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 border-t border-border/60 pt-4">
            <div className="flex items-center justify-between text-xs text-text-muted">
              <span>Location</span>
              <span className="font-medium text-text-primary">
                Dhaka · Remote Worldwide
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
