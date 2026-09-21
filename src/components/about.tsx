import type { FC } from "react";
import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";

export const About: FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative border-t border-border/70 py-16 sm:py-24 md:py-32"
    >
      {/* Section Header */}
      <ScrollReveal>
        <h2
          id="about-title"
          className="text-title font-semibold text-text-primary"
        >
          About Ahsan
        </h2>
      </ScrollReveal>

      {/* Main Editorial Content Container */}
      <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Modest Professional Headshot */}
        <ScrollReveal delay={0} className="flex flex-col items-center sm:items-start lg:col-span-4">
          <div className="w-48 sm:w-56 overflow-hidden rounded-lg bg-surface-muted">
            {/* Note: Can be replaced with actual photo in public/images/headshot.jpg */}
            <Image
              src="/images/headshot.svg"
              alt="Md. Ahsan Habib — Full Stack Developer"
              width={240}
              height={240}
              sizes="(max-width: 640px) 192px, 224px"
              loading="lazy"
              className="aspect-square h-auto w-full object-cover"
              priority={false}
            />
          </div>

          <div className="mt-4 flex flex-col items-center text-center sm:items-start sm:text-left">
            <span className="font-mono text-xs font-semibold text-text-primary">
              Md. Ahsan Habib
            </span>
            <span className="font-mono text-[11px] text-text-muted">
              Dhaka, Bangladesh · Remote Worldwide
            </span>
          </div>
        </ScrollReveal>

        {/* Right Column: Editorial Narrative */}
        <ScrollReveal delay={80} className="space-y-6 lg:col-span-8">
          <div className="space-y-4 text-lead text-text-secondary">
            <p>
              I&apos;m a <strong className="font-semibold text-text-primary">Full Stack Developer</strong> who turns product ideas into working web applications and SaaS platforms — software that is fast, maintainable, and dependable under load.
            </p>
            <p>
              Shipping <strong className="text-text-primary">Pixoree</strong> (a browser-based design canvas built on Fabric.js) and <strong className="text-text-primary">Children of the Ummah</strong> (an international donation platform with multi-currency Stripe checkouts) taught me the whole product lifecycle: data modeling, backend services, and responsive, accessible interfaces.
            </p>
            <p>
              Currently at <strong className="font-semibold text-text-primary">Deadlock Soft</strong>, I build production web applications with Next.js, TypeScript, Go, Tailwind, and MongoDB.
            </p>
          </div>

          {/* Social / External Links */}
          <div className="pt-2">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <a
                href="https://github.com/sowmik-sec"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-text-primary underline decoration-border underline-offset-8 transition-colors duration-200 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Visit Ahsan's GitHub profile (opens in new tab)"
              >
                <svg
                  className="h-4 w-4 text-text-muted"
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
                <span className="font-mono text-[11px] text-text-muted">@sowmik-sec</span>
              </a>

              <a
                href="https://www.linkedin.com/in/md-ahsan-habib-18569b21a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-text-primary underline decoration-border underline-offset-8 transition-colors duration-200 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Connect with Ahsan on LinkedIn (opens in new tab)"
              >
                <svg
                  className="h-4 w-4 text-text-muted"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
                <span className="font-mono text-[11px] text-text-muted">md-ahsan-habib</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
