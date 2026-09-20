export function SkillbentoArchitectureVisual() {
  return (
    <div
      className="group relative w-full overflow-hidden rounded-xl border border-border/80 bg-surface shadow-md transition-all duration-300 hover:border-border hover:shadow-lg dark:bg-[#111317]"
      aria-label="Skillbento Multi-Tenant System Architecture Diagram"
    >
      {/* Chrome Header */}
      <div className="flex h-11 items-center justify-between border-b border-border/70 bg-surface-elevated/70 px-4 text-xs">
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

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-text-primary">
            Multi-Tenant Platform Blueprint
          </span>
          <span className="rounded-full bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-amber-600 dark:text-amber-400">
            In Development
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span>Go + MongoDB</span>
        </div>
      </div>

      {/* Diagram Canvas */}
      <div className="p-5 sm:p-8">
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Layer 1: Ingestion & Routing */}
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                01. Client &amp; Edge Ingress
              </span>
              <span className="font-mono text-[10px] text-accent">Subdomain / Custom Domain Routing</span>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-surface-elevated/60 p-3 text-center transition-all duration-150 hover:border-border/90 hover:bg-surface-elevated">
                <p className="font-mono text-xs font-semibold text-text-primary">tenant-a.skillbento.com</p>
                <p className="text-[11px] text-text-secondary">Creator A Academy</p>
              </div>
              <div className="rounded-lg border border-border bg-surface-elevated/60 p-3 text-center transition-all duration-150 hover:border-border/90 hover:bg-surface-elevated">
                <p className="font-mono text-xs font-semibold text-text-primary">tenant-b.skillbento.com</p>
                <p className="text-[11px] text-text-secondary">Engineering Hub</p>
              </div>
              <div className="rounded-lg border border-border bg-surface-elevated/60 p-3 text-center transition-all duration-150 hover:border-border/90 hover:bg-surface-elevated">
                <p className="font-mono text-xs font-semibold text-text-primary">academy.customdomain.org</p>
                <p className="text-[11px] text-text-secondary">CNAME Custom Host</p>
              </div>
            </div>
          </div>

          {/* Connection arrow */}
          <div className="flex justify-center text-text-muted">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Layer 2: Go Gateway & Tenant Isolation Middleware */}
          <div className="rounded-lg border border-accent/40 bg-accent/5 p-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <div>
                <span className="font-mono text-xs font-bold text-accent">
                  02. High-Performance Go Service Gateway
                </span>
                <p className="text-xs text-text-secondary">
                  Microsecond request dispatch, concurrent Goroutine pipelines &amp; strict tenant boundary enforcement
                </p>
              </div>
              <span className="rounded bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-accent">
                Tenant Context Middleware
              </span>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-2 font-mono text-[11px] sm:grid-cols-3">
              <div className="rounded border border-border/80 bg-surface p-2 text-center text-text-primary">
                Tenant ID Extraction
              </div>
              <div className="rounded border border-border/80 bg-surface p-2 text-center text-text-primary">
                Scoped JWT Claims
              </div>
              <div className="rounded border border-border/80 bg-surface p-2 text-center text-text-primary">
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

          {/* Layer 3: Modular Domain Core */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
              03. Proposed Modular Domain Services
            </span>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {[
                { title: "Courses", desc: "Curriculums & progress" },
                { title: "Community", desc: "Forums & discussions" },
                { title: "Events", desc: "Workshops & webinars" },
                { title: "Appointments", desc: "1-on-1 availability" },
                { title: "Payments", desc: "Multi-tenant checkout" },
              ].map((mod) => (
                <div
                  key={mod.title}
                  className="rounded-lg border border-border bg-surface p-2.5 text-center"
                >
                  <p className="font-mono text-xs font-bold text-text-primary">{mod.title}</p>
                  <p className="mt-0.5 text-[10px] text-text-muted">{mod.desc}</p>
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

          {/* Layer 4: Data Layer */}
          <div className="rounded-lg border border-border bg-surface-elevated/50 p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-text-primary">
                04. MongoDB Multi-Tenant Storage Layer
              </span>
              <span className="font-mono text-[10px] text-text-muted">
                Compound Indexes: &#123; tenant_id, entity_id &#125;
              </span>
            </div>
            <p className="mt-1 text-xs text-text-secondary">
              Logical tenant-scoped partitioning ensuring no cross-tenant query execution.
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
      className="group relative w-full overflow-hidden rounded-xl border border-border/80 bg-surface shadow-md transition-all duration-300 hover:border-border hover:shadow-lg dark:bg-[#111317]"
      aria-label="Paw Pals Rescue Client Application Mockup"
    >
      {/* Chrome Header */}
      <div className="flex h-11 items-center justify-between border-b border-border/70 bg-surface-elevated/70 px-4 text-xs">
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

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-text-primary">
            Verified Adoption &amp; Campaign Client
          </span>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
            Open Source
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>React + TanStack Query</span>
        </div>
      </div>

      {/* Main Interface Content */}
      <div className="p-4 sm:p-6 md:p-8">
        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-text-primary">Status Filter:</span>
            <div className="flex rounded-md border border-border bg-surface-elevated p-0.5 text-xs">
              <span className="rounded bg-surface px-2.5 py-1 font-semibold text-text-primary shadow-2xs">
                Available
              </span>
              <span className="px-2.5 py-1 text-text-muted hover:text-text-primary">
                Adopted
              </span>
              <span className="px-2.5 py-1 text-text-muted hover:text-text-primary">
                All
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-text-muted">
            <span>Verified API:</span>
            <span className="rounded bg-surface-elevated px-2 py-0.5 text-accent">GET /pets</span>
          </div>
        </div>

        {/* Mock Pet Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Available Pet */}
          <div className="group/pet flex flex-col justify-between rounded-lg border border-border bg-surface p-4 shadow-xs transition-all duration-200 hover:border-border/90 hover:shadow-sm">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-text-primary">Milo</h4>
                  <p className="text-xs text-text-muted">Golden Retriever · 2 yrs</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                  Available
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                Friendly, vaccinated, good with children and other pets. Rescued from shelter transfer.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
              <span className="font-mono text-[11px] text-text-muted">ID: #pet-104</span>
              <span className="rounded bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent transition-all duration-150 group-hover/pet:bg-accent group-hover/pet:text-accent-foreground">
                Adopt Milo →
              </span>
            </div>
          </div>

          {/* Card 2: Adopted Pet */}
          <div className="flex flex-col justify-between rounded-lg border border-border/60 bg-surface-elevated/40 p-4 opacity-80">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-text-primary">Luna</h4>
                  <p className="text-xs text-text-muted">Domestic Shorthair · 1 yr</p>
                </div>
                <span className="rounded-full bg-surface-muted px-2 py-0.5 text-[10px] font-medium text-text-muted">
                  Adopted
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                Successfully placed with a loving family. Adoption inquiry process completed.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
              <span className="font-mono text-[11px] text-text-muted">PATCH /make-adopted</span>
              <span className="text-xs font-medium text-text-muted">Found a Home ✓</span>
            </div>
          </div>

          {/* Card 3: Donation Campaign */}
          <div className="flex flex-col justify-between rounded-lg border border-accent/30 bg-accent/5 p-4 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-text-primary">Surgery Relief Fund</h4>
                  <p className="text-xs text-accent font-medium">Healthcare Campaign</p>
                </div>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                  Active Appeal
                </span>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-text-secondary">Funded</span>
                  <span className="font-semibold text-text-primary">Stripe Integrated</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div className="h-full w-3/4 rounded-full bg-accent" />
                </div>
              </div>
              <p className="mt-2 text-xs text-text-secondary">
                Supplies emergency surgical care and antibiotics for injured rescues.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
              <span className="font-mono text-[11px] text-text-muted">GET /donation-campaign</span>
              <span className="rounded bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                Donate via Stripe
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
