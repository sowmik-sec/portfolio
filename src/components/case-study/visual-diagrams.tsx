export function SkillbentoArchitectureVisual() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-border bg-surface dark:bg-[#111317]"
      aria-label="Skillbento Multi-Tenant System Architecture Diagram"
    >
      {/* Window chrome */}
      <div className="flex h-11 items-center justify-between border-b border-border/70 px-4">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EC6A5E]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F5BF4F]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#62C554]/80" />
          </div>
          <span className="ml-2 hidden font-mono text-[11px] text-text-muted sm:inline-block">
            skillbento / architecture-preview
          </span>
        </div>

        <span className="font-mono text-[11px] text-text-muted">Go + MongoDB</span>
      </div>

      {/* Diagram */}
      <div className="p-5 sm:p-8">
        <div className="mx-auto max-w-3xl space-y-5">
          {/* Tier 1: Ingress */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
              01 · Client &amp; Edge Ingress
            </p>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="rounded-lg bg-surface-elevated p-3 text-center">
                <p className="font-mono text-[11px] font-medium text-text-primary">
                  tenant-a.skillbento.com
                </p>
                <p className="text-[11px] text-text-muted">Creator A Academy</p>
              </div>
              <div className="rounded-lg bg-surface-elevated p-3 text-center">
                <p className="font-mono text-[11px] font-medium text-text-primary">
                  tenant-b.skillbento.com
                </p>
                <p className="text-[11px] text-text-muted">Engineering Hub</p>
              </div>
              <div className="rounded-lg bg-surface-elevated p-3 text-center">
                <p className="font-mono text-[11px] font-medium text-text-primary">
                  academy.customdomain.org
                </p>
                <p className="text-[11px] text-text-muted">CNAME Custom Host</p>
              </div>
            </div>
          </div>

          {/* Connection arrow */}
          <div className="flex justify-center text-text-muted">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Tier 2: Go gateway — the one accent moment */}
          <div className="rounded-lg border-l-2 border-accent bg-surface-elevated p-4">
            <p className="font-mono text-[11px] font-semibold text-accent">
              02 · Go Service Gateway
            </p>
            <p className="mt-1 text-[11px] text-text-secondary sm:text-xs">
              Concurrent Goroutine pipelines dispatch every request through strict tenant
              boundary enforcement
            </p>
            <div className="mt-3 grid grid-cols-1 gap-2 font-mono text-[11px] sm:grid-cols-3">
              <div className="rounded bg-surface p-2 text-center text-text-primary">
                Tenant ID Extraction
              </div>
              <div className="rounded bg-surface p-2 text-center text-text-primary">
                Scoped JWT Claims
              </div>
              <div className="rounded bg-surface p-2 text-center text-text-primary">
                Zero-Leakage Filter Injection
              </div>
            </div>
          </div>

          {/* Connection arrow */}
          <div className="flex justify-center text-text-muted">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Tier 3: Domain modules */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
              03 · Proposed Domain Services
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {[
                { title: "Courses", desc: "Curriculums & progress" },
                { title: "Community", desc: "Forums & discussions" },
                { title: "Events", desc: "Workshops & webinars" },
                { title: "Appointments", desc: "1-on-1 availability" },
                { title: "Payments", desc: "Multi-tenant checkout" },
              ].map((mod) => (
                <div key={mod.title} className="rounded-lg bg-surface-elevated p-2.5 text-center">
                  <p className="font-mono text-xs font-medium text-text-primary">{mod.title}</p>
                  <p className="mt-0.5 text-[11px] text-text-muted">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connection arrow */}
          <div className="flex justify-center text-text-muted">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Tier 4: Data layer */}
          <div className="rounded-lg bg-surface-elevated p-4">
            <p className="font-mono text-xs font-medium text-text-primary">
              04 · MongoDB Multi-Tenant Storage
            </p>
            <p className="mt-1 text-[11px] text-text-secondary sm:text-xs">
              Logical tenant-scoped partitioning ensures no cross-tenant query execution
            </p>
            <p className="mt-1 font-mono text-[11px] text-text-muted">
              Compound indexes: {"{ tenant_id, entity_id }"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PawPalsRescueVisual() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-border bg-surface dark:bg-[#111317]"
      aria-label="Paw Pals Rescue Client Application Mockup"
    >
      {/* Window chrome */}
      <div className="flex h-11 items-center justify-between border-b border-border/70 px-4">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EC6A5E]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F5BF4F]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#62C554]/80" />
          </div>
          <span className="ml-2 hidden font-mono text-[11px] text-text-muted sm:inline-block">
            paw-pals-rescue-client / adoption-hub
          </span>
        </div>

        <span className="font-mono text-[11px] text-text-muted">React + TanStack Query</span>
      </div>

      {/* Interface */}
      <div className="p-4 sm:p-6 md:p-8">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-text-muted">Status filter:</span>
            <div className="flex rounded-md border border-border p-0.5 text-[11px]">
              <span className="rounded bg-surface-muted px-2.5 py-1 font-medium text-text-primary">
                Available
              </span>
              <span className="px-2.5 py-1 text-text-muted">Adopted</span>
              <span className="px-2.5 py-1 text-text-muted">All</span>
            </div>
          </div>

          <span className="font-mono text-[11px] text-text-muted">
            Verified API: <span className="text-accent">GET /pets</span>
          </span>
        </div>

        {/* Pet cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Available pet */}
          <div className="flex flex-col justify-between rounded-lg border border-border bg-surface p-4">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-text-primary">Milo</h4>
                  <p className="text-[11px] text-text-muted">Golden Retriever · 2 yrs</p>
                </div>
                <span className="font-mono text-[11px] text-text-secondary">Available</span>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-text-secondary sm:text-xs">
                Friendly, vaccinated, good with children and other pets. Rescued from a shelter
                transfer.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
              <span className="font-mono text-[11px] text-text-muted">ID: #pet-104</span>
              <span className="text-xs font-medium text-text-primary underline underline-offset-2">
                Adopt Milo →
              </span>
            </div>
          </div>

          {/* Card 2: Adopted pet */}
          <div className="flex flex-col justify-between rounded-lg border border-border/60 bg-surface p-4 opacity-75">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-text-primary">Luna</h4>
                  <p className="text-[11px] text-text-muted">Domestic Shorthair · 1 yr</p>
                </div>
                <span className="font-mono text-[11px] text-text-muted">Adopted</span>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-text-secondary sm:text-xs">
                Successfully placed with a loving family. Adoption inquiry process completed.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
              <span className="font-mono text-[11px] text-text-muted">PATCH /make-adopted</span>
              <span className="text-[11px] text-text-muted">Found a home ✓</span>
            </div>
          </div>

          {/* Card 3: Donation campaign — the one accent moment */}
          <div className="flex flex-col justify-between rounded-lg border border-border bg-surface p-4 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-text-primary">Surgery Relief Fund</h4>
                  <p className="text-[11px] text-text-muted">Healthcare campaign</p>
                </div>
                <span className="font-mono text-[11px] text-text-secondary">Active appeal</span>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex justify-between font-mono text-[11px]">
                  <span className="text-text-muted">Funded</span>
                  <span className="text-text-primary">Stripe integrated</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div className="h-full w-3/4 rounded-full bg-accent" />
                </div>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-text-secondary sm:text-xs">
                Supplies emergency surgical care and antibiotics for injured rescues.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
              <span className="font-mono text-[11px] text-text-muted">GET /donation-campaign</span>
              <span className="rounded bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                Donate via Stripe
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
