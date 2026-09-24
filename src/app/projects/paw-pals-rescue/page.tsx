import type { Metadata } from "next";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { PawPalsRescueVisual } from "@/components/case-study/visual-diagrams";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahsanhabib.dev";

export const metadata: Metadata = {
  title: "Paw Pals Rescue Case Study",
  description:
    "Engineering case study for Paw Pals Rescue Client: a pet donation and animal adoption platform built with React, Tailwind CSS, TanStack Query, and Firebase Authentication.",
  alternates: {
    canonical: "/projects/paw-pals-rescue",
  },
  openGraph: {
    type: "article",
    url: "/projects/paw-pals-rescue",
    title: "Paw Pals Rescue Case Study — Md. Ahsan Habib",
    description:
      "Deep dive into the verified codebase of Paw Pals Rescue client: adoption directory, pet detail view, application/filter forms, donation campaigns, and TanStack Query state caching.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Paw Pals Rescue Engineering Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paw Pals Rescue Case Study — Md. Ahsan Habib",
    description:
      "Deep dive into the verified codebase of Paw Pals Rescue client: adoption directory, pet detail view, application/filter forms, and donation campaigns.",
    images: ["/opengraph-image"],
  },
};

export default function PawPalsRescueCaseStudyPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Paw Pals Rescue Engineering Case Study",
    description:
      "Deep dive into the verified codebase of Paw Pals Rescue client: adoption directory, pet detail view, application/filter forms, donation campaigns, and TanStack Query state caching.",
    author: {
      "@type": "Person",
      name: "Md. Ahsan Habib",
      url: siteUrl,
    },
    url: `${siteUrl}/projects/paw-pals-rescue`,
    about: [
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "Firebase Auth",
      "Animal Adoption Platform",
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
        title="Paw Pals Rescue"
        tagline="An animal rescue, adoption, and pet healthcare fundraising client built with React, TanStack Query, Tailwind CSS, and Firebase Authentication."
        category="Open Source Web Client"
        status="In Development"
        role="Frontend Engineer"
        timeline="Open Source Codebase"
        techStack={[
          "React",
          "Tailwind CSS",
          "TanStack Query",
          "Firebase Auth",
          "Stripe",
          "Axios",
          "Node.js",
          "MongoDB",
        ]}
        repoLink={{
          label: "sowmik-sec / paw-pals-rescue-client",
          url: "https://github.com/sowmik-sec/paw-pals-rescue-client",
        }}
      />

      {/* Application Interface Visual Preview */}
      <div className="mt-10 sm:mt-12">
        <PawPalsRescueVisual />
      </div>

      {/* Main Case Study Sections */}
      <div className="mt-12 space-y-12 sm:space-y-16">
        {/* Section 1: Overview & Verified Project Purpose */}
        <CaseStudySection
          id="project-overview"
          badge="Scope"
          title="Connecting Rescues, Adopters &amp; Healthcare Donors"
          subtitle="Documenting only confirmed capabilities verified directly from the open-source repository."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              <strong>Paw Pals Rescue</strong> is a client application designed to streamline pet adoption workflows, rescue shelter onboarding, and medical donation campaigns for vulnerable animals.
            </p>
            <p>
              The platform addresses three core workflows: enabling prospective owners to discover pets available for adoption, facilitating formal adoption requests with status tracking, and running crowdfunded medical care campaigns integrated with Stripe.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xs border border-border bg-surface p-4">
              <h3 className="text-sm font-semibold text-text-primary">
                Adoption Directory
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Filterable directory powered by <code className="font-mono">GET /pets</code> with verified status indicators (Available vs. Adopted).
              </p>
            </div>
            <div className="rounded-xs border border-border bg-surface p-4">
              <h3 className="text-sm font-semibold text-text-primary">
                Adoption Workflow
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Detailed animal profiles with direct adoption inquiry forms and status transition endpoints (<code className="font-mono">PATCH /make-adopted/:id</code>).
              </p>
            </div>
            <div className="rounded-xs border border-border bg-surface p-4">
              <h3 className="text-sm font-semibold text-text-primary">
                Donation Campaigns
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Verified crowdfunding campaigns for pet surgeries and nutrition, with donor statistics and user donation ledgers.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 2: Verified Feature — Adoption Directory & Filtering */}
        <CaseStudySection
          id="adoption-directory"
          badge="Feature"
          title="Adoption Directory &amp; Status Filtering"
          subtitle="Browsing available rescues with responsive filters and real-time state caching."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              Verified from the repository&apos;s client router and API endpoints, the adoption directory serves as the primary gateway for prospective adopters:
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xs border border-border bg-surface-elevated p-5">
              <h3 className="text-base font-semibold text-text-primary">
                1. Status-Based Pet Filtering (`GET /pets`)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                The client fetches pet records and enables users to filter between available rescues and animals whose adoptions have finalized. Clean visual badges prevent users from submitting inquiries on animals that have already found permanent homes.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface-elevated p-5">
              <h3 className="text-base font-semibold text-text-primary">
                2. Responsive Pet Card Grid
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Pet profiles present vital information at a glance: rescue name, breed, age, vaccination condition, shelter location, and preview photography hosted via Cloudinary.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface-elevated p-5">
              <h3 className="text-base font-semibold text-text-primary">
                3. Server-State Caching with TanStack Query
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Pet lists are cached in memory using TanStack Query. Navigating back and forth between search filters and pet profiles avoids duplicate network requests, providing snappy client-side navigation without unnecessary API overhead.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 3: Verified Feature — Pet Detail View & Adoption Workflow */}
        <CaseStudySection
          id="adoption-workflow"
          badge="Feature"
          title="Pet Detail View &amp; Adoption Request Lifecycle"
          subtitle="Submitting formal adoption inquiries and tracking application status."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              When an adopter selects an animal, the application loads the comprehensive pet detail view:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xs border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-text-primary">
                In-Depth Animal Biography
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Displays complete medical history, temperament, behavioral compatibility (with children and other pets), and specific shelter care requirements.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-text-primary">
                Adoption Request Submission
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Authenticated users can submit a formal adoption inquiry through a validated modal form, capturing household details, contact phone, and living arrangements.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-text-primary">
                Status Tracking Workflow
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Adopters can check the status of their pending adoption inquiries directly in their user dashboard.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-text-primary">
                Marking As Adopted (`PATCH /make-adopted/:id`)
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Shelter managers or rescue caretakers can mark a pet as officially adopted with a single click, instantly updating the pet status across the entire directory.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 4: Verified Feature — Donation Campaigns */}
        <CaseStudySection
          id="donation-campaigns"
          badge="Feature"
          title="Pet Donation Campaigns &amp; Personal Ledger"
          subtitle="Crowdfunding veterinary care, surgery, and food supplies via Stripe."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              Shelter animals frequently require emergency surgery, special diets, or ongoing medication. The platform includes dedicated campaign fundraising modules:
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xs border border-border bg-surface-elevated p-5">
              <h3 className="text-base font-semibold text-text-primary">
                Campaign Discovery (`GET /all-donations`)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Users can browse active fundraising appeals, showing target funding goals, currently raised amounts, and countdown deadlines.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface-elevated p-5">
              <h3 className="text-base font-semibold text-text-primary">
                Stripe Contribution Engine
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Donors can contribute funds toward specific pet campaigns using Stripe payment elements, supporting multiple contributions toward a single appeal.
              </p>
            </div>

            <div className="rounded-xs border border-border bg-surface-elevated p-5">
              <h3 className="text-base font-semibold text-text-primary">
                Personal Donation History (`GET /my-donations`)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Authenticated donors have access to a personal contribution history ledger, detailing total amounts contributed, campaign beneficiaries, and timestamps.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 5: Frontend Architecture & Client State */}
        <CaseStudySection
          id="client-architecture"
          badge="Codebase Design"
          title="Frontend Architecture &amp; Client State Management"
          subtitle="Separating authentication, remote API synchronization, and responsive styling."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              The client architecture is organized around modern React best practices verified in the repository:
            </p>
            <ul className="list-inside list-disc space-y-2 text-sm text-text-secondary sm:text-base">
              <li>
                <strong>Firebase Authentication:</strong> Secure user onboarding with email/password authentication, persistent auth tokens, and route protection for donation management and adoption forms.
              </li>
              <li>
                <strong>TanStack Query (React Query):</strong> Handles asynchronous data fetching, automatic background refetching, and cache invalidation when pets or campaigns are updated.
              </li>
              <li>
                <strong>Axios HTTP Client:</strong> Configured with base URL environment variables (<code className="font-mono text-xs">VITE_API_BASE_URL</code>) and automatic auth header injection.
              </li>
              <li>
                <strong>Cloudinary Asset Pipeline:</strong> Handles user-uploaded pet imagery with cloud optimization, resizing, and responsive delivery.
              </li>
            </ul>
          </div>
        </CaseStudySection>

        {/* Section 6: Verified Tech Stack & Repository Links */}
        <CaseStudySection
          id="tech-stack"
          badge="Specifications"
          title="Technology Stack &amp; Repository Details"
          subtitle="All technologies and packages directly confirmed from the project repository."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xs border border-border bg-surface p-4">
              <span className="text-[13px] font-medium text-text-muted">Frontend UI</span>
              <p className="mt-1 font-semibold text-text-primary">React &amp; Tailwind</p>
              <p className="text-sm text-text-muted">Component-driven architecture</p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-4">
              <span className="text-[13px] font-medium text-text-muted">Data Fetching</span>
              <p className="mt-1 font-semibold text-text-primary">TanStack Query + Axios</p>
              <p className="text-sm text-text-muted">Cached asynchronous data layer</p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-4">
              <span className="text-[13px] font-medium text-text-muted">Authentication</span>
              <p className="mt-1 font-semibold text-text-primary">Firebase Auth</p>
              <p className="text-sm text-text-muted">Secure user sessions</p>
            </div>

            <div className="rounded-xs border border-border bg-surface p-4">
              <span className="text-[13px] font-medium text-text-muted">Backend &amp; DB</span>
              <p className="mt-1 font-semibold text-text-primary">Node.js + Express + MongoDB</p>
              <p className="text-sm text-text-muted">REST API &amp; data persistence</p>
            </div>
          </div>

          <div className="mt-6 rounded-xs border border-border bg-surface-elevated p-5">
            <h3 className="text-sm font-semibold text-text-primary">Verified Code Highlights</h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              All architectural points, API endpoints, and features documented in this case study are strictly validated against the public GitHub repository at{" "}
              <a
                href="https://github.com/sowmik-sec/paw-pals-rescue-client"
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw font-medium text-text-primary"
              >
                sowmik-sec/paw-pals-rescue-client
              </a>
              . No speculative or unverified features have been introduced.
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
