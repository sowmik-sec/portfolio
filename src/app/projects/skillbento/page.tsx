import type { Metadata } from "next";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { SkillbentoArchitectureVisual } from "@/components/case-study/visual-diagrams";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahsanhabib.dev";

export const metadata: Metadata = {
  title: "Skillbento System Architecture",
  description:
    "System architecture and engineering design for Skillbento: a multi-tenant learning and community platform in active development with a Go backend and MongoDB.",
  alternates: {
    canonical: "/projects/skillbento",
  },
  openGraph: {
    type: "article",
    url: "/projects/skillbento",
    title: "Skillbento System Architecture — Md. Ahsan Habib",
    description:
      "Architectural deep dive into Skillbento: multi-tenant SaaS isolation, high-performance Go backend services, MongoDB partitioning, and modular learning ecosystem.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Skillbento Multi-Tenant System Architecture Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skillbento System Architecture — Md. Ahsan Habib",
    description:
      "Architectural deep dive into Skillbento: multi-tenant SaaS isolation, high-performance Go backend services, and modular learning ecosystem.",
    images: ["/opengraph-image"],
  },
};

export default function SkillbentoCaseStudyPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Skillbento Multi-Tenant System Architecture Case Study",
    description:
      "Architectural deep dive into Skillbento: multi-tenant SaaS isolation, high-performance Go backend services, MongoDB partitioning, and modular learning ecosystem.",
    author: {
      "@type": "Person",
      name: "Md. Ahsan Habib",
      url: siteUrl,
    },
    url: `${siteUrl}/projects/skillbento`,
    about: [
      "Go (Golang)",
      "MongoDB",
      "Multi-Tenant Architecture",
      "Next.js",
      "TypeScript",
      "SaaS Design",
    ],
  };

  return (
    <article className="py-8 sm:py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdArticle).replace(/</g, "\\u003c"),
        }}
      />
      {/* Back Link / Breadcrumb */}
      <CaseStudyNav backHref="/#work" backLabel="Back to Selected Work" />

      {/* Case Study Header */}
      <CaseStudyHeader
        title="Skillbento"
        tagline="A multi-tenant learning and community platform in active development — Go backend services, MongoDB tenant partitioning, and modular creator services."
        category="Learning &amp; Community SaaS"
        status="In Development"
        role="System Architect &amp; Full Stack Developer"
        timeline="Active System Design &amp; Backend Prototyping"
        techStack={["Go (Golang)", "MongoDB", "Next.js", "TypeScript", "Docker", "Tailwind CSS"]}
      />

      {/* Development Status Notice */}
      <div className="mt-8 border-l-2 border-accent pl-5 sm:pl-6">
        <h2 className="text-sm font-semibold text-text-primary">
          Project Status: Architectural &amp; Backend Development
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-secondary">
          This case study presents the system design, domain modeling, and multi-tenant infrastructure for Skillbento. It represents an in-progress architectural build rather than a finished commercial launch. No live production metrics or user counts are claimed.
        </p>
      </div>

      {/* Architectural System Visual Preview */}
      <div className="mt-10 sm:mt-12">
        <SkillbentoArchitectureVisual />
      </div>

      {/* Main Case Study Sections */}
      <div className="mt-12 space-y-12 sm:space-y-16">
        {/* Section 1: System Context & The Problem Space */}
        <CaseStudySection
          id="architectural-thesis"
          badge="Concept"
          title="The Multi-Tenant Creator Platform Challenge"
          subtitle="Consolidating fragmented learning, community, and scheduling tools into a unified, high-performance platform."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              Educators, technical bootcamps, and digital communities currently assemble their operational stack across disparate SaaS point solutions: one platform for video course hosting, another for forum discussions, a third for calendaring and appointments, and external tools for payments.
            </p>
            <p>
              This fragmentation causes synchronization headaches, redundant user authentication, and high subscription overhead. <strong>Skillbento</strong> is designed as an all-in-one multi-tenant SaaS platform where every creator or institution operates their own isolated, branded academy while sharing a unified, cloud-native backend engine.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xs border border-border bg-surface p-4">
              <h3 className="text-sm font-semibold text-text-primary">
                High Concurrency
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Lightweight Goroutines handling concurrent student requests and live WebSocket event streams with minimal memory overhead.
              </p>
            </div>
            <div className="rounded-xs border border-border bg-surface p-4">
              <h3 className="text-sm font-semibold text-text-primary">
                Strict Tenant Isolation
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Middleware-driven tenant partitioning ensuring absolute zero data leakage across separate organizational accounts.
              </p>
            </div>
            <div className="rounded-xs border border-border bg-surface p-4">
              <h3 className="text-sm font-semibold text-text-primary">
                Domain Modularity
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Decoupled services for Courses, Community, Events, Scheduling, and Billing orchestrated under clean interfaces.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 2: High-Performance Go Backend Engine */}
        <CaseStudySection
          id="go-backend"
          badge="Backend Architecture"
          title="High-Performance Go Backend Services"
          subtitle="Selecting Go for low latency, predictable CPU usage, and high-throughput concurrent I/O."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              While Node.js and Next.js provide an exceptional front-end user experience, a multi-tenant platform handling high-frequency video progress beacons, live forum websockets, and concurrent scheduling locks requires predictable low-latency computation.
            </p>
            <p>
              The core API and business logic are written in <strong>Go (Golang)</strong>:
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xs border border-border bg-surface-elevated p-5">
              <h3 className="text-base font-semibold text-text-primary">
                1. Goroutine-Based Concurrency Model
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Go&apos;s M:N scheduler and lightweight Goroutines (consuming only ~2KB of initial stack space) allow Skillbento to handle thousands of concurrent client connections simultaneously without the memory exhaustion typical of heavy thread-per-request architectures.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface-elevated p-5">
              <h3 className="text-base font-semibold text-text-primary">
                2. Explicit Domain Boundaries &amp; Clean Architecture
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                The codebase follows a Ports &amp; Adapters (Hexagonal) pattern. Domain models and core business rules remain strictly agnostic of database drivers and transport layers, allowing unit testing with in-memory mocks without spin-up delays.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface-elevated p-5">
              <h3 className="text-base font-semibold text-text-primary">
                3. High-Throughput HTTP &amp; Event Routing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                HTTP request routing utilizes lightweight muxing with zero-allocation radix tree matching. Background worker pools asynchronously handle task queuing (e.g., video transcode status checks, webhook dispatching, email notifications) via Go channels.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 3: MongoDB Multi-Tenant Data Modeling */}
        <CaseStudySection
          id="mongodb-modeling"
          badge="Data Design"
          title="MongoDB Multi-Tenant Data Modeling"
          subtitle="Partitioned schemas, flexible document hierarchies, and tenant compound indexes."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              Multi-tenancy models generally choose between separate databases per tenant or a shared database with tenant-scoped collections. For Skillbento, a <strong>shared-database, tenant-partitioned model</strong> in MongoDB was chosen for optimal infrastructure cost and unified schema upgrades:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xs border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-text-primary">
                Compound Indexes for Tenant Isolation
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Every query-intensive collection enforces a leading compound index on <code className="font-mono">&#123; tenant_id: 1, entity_id: 1 &#125;</code>. This guarantees that all queries execute against an isolated index partition, preventing full-collection scans.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-text-primary">
                Polymorphic Course Curriculums
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Lessons require diverse formats: video embeds, rich text articles, interactive code snippets, and download attachments. MongoDB&apos;s schema flexibility allows nested subdocuments without requiring costly relational JOIN operations.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-text-primary">
                Threaded Community Discussion Modeling
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Forum topics use a materialized path tree pattern. Nested replies store parent lineage paths, allowing the backend to fetch an entire threaded tree in a single query while preserving chronological reply ordering.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-text-primary">
                Optimistic Locking for Booking Slots
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Appointment booking slots maintain a version field. Atomic update operations (<code className="font-mono">findOneAndUpdate</code> with version predicates) eliminate race conditions and double-booking bugs during simultaneous user checkouts.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 4: Tenant Isolation & Security Boundary */}
        <CaseStudySection
          id="tenant-isolation"
          badge="Security Infrastructure"
          title="Tenant Isolation &amp; Security Boundary"
          subtitle="Enforcing strict multi-tenant boundaries at the routing, authentication, and database layers."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              In multi-tenant SaaS applications, cross-tenant data leakage is a critical failure mode. Skillbento enforces security invariants at three distinct checkpoints in the request pipeline:
            </p>
            <ul className="list-inside list-disc space-y-2 text-sm text-text-secondary sm:text-base">
              <li>
                <strong>Ingress Resolution:</strong> The Go gateway inspects incoming Host headers or subdomains (e.g. <code className="font-mono text-xs">academy.skillbento.com</code>) and maps them to a validated tenant ID.
              </li>
              <li>
                <strong>Context Injection:</strong> Tenant identity is bound to the Go <code className="font-mono text-xs">context.Context</code> of the incoming request alongside authenticated user JWT claims.
              </li>
              <li>
                <strong>Automatic Repository Scoping:</strong> Data access repositories accept only context-bound queries. Every database query automatically prepends the resolved <code className="font-mono text-xs">tenant_id</code> filter, preventing developers from accidentally omitting tenant criteria in service code.
              </li>
            </ul>
          </div>
        </CaseStudySection>

        {/* Section 5: Proposed Core Modules Architecture */}
        <CaseStudySection
          id="core-modules"
          badge="System Capabilities"
          title="Proposed Core Modules Architecture"
          subtitle="The five foundational pillars of the Skillbento unified ecosystem."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Module 1: Courses */}
            <div className="rounded-xs border border-border bg-surface p-5">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-medium text-text-muted">01</span>
                <h3 className="font-semibold text-text-primary">Course Management</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                Curriculum hierarchy (Modules, Chapters, Lessons), prerequisite gating, video progress tracking beacons, and automated completion certificates.
              </p>
            </div>

            {/* Module 2: Community */}
            <div className="rounded-xs border border-border bg-surface p-5">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-medium text-text-muted">02</span>
                <h3 className="font-semibold text-text-primary">Community Forums</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                Channel-based categorized discussions, threaded comments, markdown rendering, instructor pin badges, and moderation flags.
              </p>
            </div>

            {/* Module 3: Events */}
            <div className="rounded-xs border border-border bg-surface p-5">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-medium text-text-muted">03</span>
                <h3 className="font-semibold text-text-primary">Event Management</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                Live workshop scheduling, attendee registration limits, automated reminder notifications, and calendar invite file generation.
              </p>
            </div>

            {/* Module 4: Appointments */}
            <div className="rounded-xs border border-border bg-surface p-5">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-medium text-text-muted">04</span>
                <h3 className="font-semibold text-text-primary">Appointment Scheduling</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                Creator availability windows, timezone reconciliation between mentor and student, booking buffer periods, and one-on-one session links.
              </p>
            </div>

            {/* Module 5: Payments */}
            <div className="rounded-xs border border-border bg-surface p-5 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-medium text-text-muted">05</span>
                <h3 className="font-semibold text-text-primary">Multi-Tenant Payments &amp; Subscriptions</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                Stripe Connect integration enabling creators to connect custom payout bank accounts, sell tiered recurring memberships, and offer one-time course bundle checkouts with platform application fee distribution.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 6: Tech Stack & System Summary */}
        <CaseStudySection
          id="tech-stack"
          badge="Specifications"
          title="Technology Stack &amp; Development Roadmap"
          subtitle="Designed for scalability, testability, and decoupled deployment."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xs border border-border bg-surface p-4">
              <span className="text-[13px] font-medium text-text-muted">Backend Core</span>
              <p className="mt-1 font-semibold text-text-primary">Go (Golang)</p>
              <p className="text-sm text-text-muted">High-throughput micro-services</p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-4">
              <span className="text-[13px] font-medium text-text-muted">Database</span>
              <p className="mt-1 font-semibold text-text-primary">MongoDB</p>
              <p className="text-sm text-text-muted">Tenant-partitioned collections</p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-4">
              <span className="text-[13px] font-medium text-text-muted">Frontend Client</span>
              <p className="mt-1 font-semibold text-text-primary">Next.js &amp; TypeScript</p>
              <p className="text-sm text-text-muted">RSC-first multi-tenant UI</p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-4">
              <span className="text-[13px] font-medium text-text-muted">Infrastructure</span>
              <p className="mt-1 font-semibold text-text-primary">Docker &amp; Containers</p>
              <p className="text-sm text-text-muted">Reproducible local &amp; cloud stacks</p>
            </div>
          </div>

          <div className="mt-6 rounded-xs border border-border bg-surface-elevated p-5">
            <h3 className="text-sm font-semibold text-text-primary">Architectural Takeaways</h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              Designing Skillbento around Go and MongoDB provides a solid foundation for multi-tenancy. By putting strict boundary middleware and modular service boundaries in place early, the platform avoids the technical debt commonly encountered when scaling multi-tenant SaaS systems.
            </p>
          </div>
        </CaseStudySection>
      </div>

      {/* Footer Navigation Back to Work */}
      <div className="mt-16 border-t border-border pt-8 sm:mt-24">
        <CaseStudyNav backHref="/#work" backLabel="Return to Selected Work" />
      </div>
    </article>
  );
}
