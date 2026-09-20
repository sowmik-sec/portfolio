import type { FC } from "react";
import Image from "next/image";

export const About: FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative border-t border-border/70 py-16 sm:py-24 md:py-32"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-2 border-b border-border/70 pb-6 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Profile &amp; Background
          </span>
          <h2
            id="about-title"
            className="mt-1 text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl md:text-4xl"
          >
            About Ahsan
          </h2>
        </div>
        <p className="font-mono text-xs text-text-muted">
          Full Stack Developer &amp; Systems Builder
        </p>
      </div>

      {/* Main Editorial Content Container */}
      <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Modest Professional Headshot */}
        <div className="flex flex-col items-center sm:items-start lg:col-span-4">
          <div className="group relative w-48 sm:w-56 overflow-hidden rounded-2xl border border-border/80 bg-[#F3F4F6] shadow-xs transition-colors hover:border-border dark:bg-[#1A1D24]">
            {/* Note: Can be replaced with actual photo in public/images/headshot.jpg */}
            <Image
              src="/images/headshot.svg"
              alt="Md. Ahsan Habib — Full Stack Developer"
              width={240}
              height={240}
              className="aspect-square h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
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
        </div>

        {/* Right Column: Editorial Narrative & Capabilities */}
        <div className="space-y-6 lg:col-span-8">
          <div className="space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              I am a <strong className="font-semibold text-text-primary">Full Stack Developer</strong> dedicated to turning product ideas into resilient, production-ready web applications and SaaS platforms. My engineering approach balances visual craft with architectural rigor—delivering software that is fast, maintainable, and dependable under load.
            </p>
            <p>
              Over the course of shipping applications like <strong className="text-text-primary">Pixoree</strong> (a browser-based graphic canvas engine built on Fabric.js) and <strong className="text-text-primary">Children of the Ummah</strong> (an international donation platform handling multi-currency Stripe checkouts), I have developed a deep appreciation for the entire product lifecycle: from data modeling and distributed backend services to responsive, accessible client interfaces.
            </p>
            <p>
              Currently, I engineer production web applications at <strong className="font-semibold text-text-primary">Deadlock Soft</strong>, working with Next.js, TypeScript, Go, Tailwind, and MongoDB to deliver scalable client systems.
            </p>
          </div>

          {/* Social / External Links */}
          <div className="pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/sowmik-sec"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-xs font-semibold text-text-primary shadow-2xs transition-colors hover:border-text-primary/30 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm"
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
                <span className="font-mono text-[10px] text-text-muted">@sowmik-sec</span>
              </a>

              <a
                href="https://www.linkedin.com/in/md-ahsan-habib-18569b21a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-xs font-semibold text-text-primary shadow-2xs transition-colors hover:border-text-primary/30 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm"
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
                <span className="font-mono text-[10px] text-text-muted">md-ahsan-habib</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
