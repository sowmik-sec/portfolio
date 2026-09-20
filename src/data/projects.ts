export interface SelectedProject {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  technologies: string[];
  liveUrl: string;
  caseStudyUrl: string;
}

export const SELECTED_PROJECTS: SelectedProject[] = [
  {
    id: "pixoree",
    number: "01",
    title: "PIXOREE",
    category: "Interactive design platform",
    description:
      "A browser-based graphic design application engineered for creating certificates, resumes, social media graphics, and marketing assets. Features a direct-manipulation canvas engine with custom object transformations, layer management, undo/redo history, and client-side raster/vector export.",
    capabilities: [
      "Fabric.js canvas engine",
      "Drag-and-drop editing",
      "Layer hierarchy & ordering",
      "Object rotation & scaling",
      "Text & image manipulation",
      "Undo/redo state stack",
      "Client-side image export",
      "Modular responsive toolbars",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Fabric.js", "MongoDB"],
    liveUrl: "https://pixoree.app/",
    caseStudyUrl: "/projects/pixoree",
  },
  {
    id: "children-of-the-ummah",
    number: "02",
    title: "CHILDREN OF THE UMMAH",
    category: "International charity platform",
    description:
      "A production humanitarian donation platform serving donors worldwide with emergency relief, education, and healthcare campaigns. Architected with custom localized multi-currency checkout flows, automated recurring monthly contributions via Stripe, and verified donor reporting.",
    // NOTE: £43,000 / ~7.3M BDT processed metric is pending final user verification for Phase 4.
    // Do NOT display the metric until confirmed as current.
    capabilities: [
      "Multi-currency processing (GBP, USD, EUR)",
      "Custom multi-step donation flows",
      "Recurring subscription donations",
      "Stripe payment integration",
      "Production cloud deployment",
      "Instant receipt generation",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Stripe", "Tailwind CSS"],
    liveUrl: "https://www.childrenoftheummah.org.uk/",
    caseStudyUrl: "/projects/children-of-the-ummah",
  },
];

export interface CurrentlyBuildingProject {
  id: string;
  number: string;
  title: string;
  category: string;
  status: string;
  statusVariant: "warning" | "info" | "success";
  concept: string;
  architectureHighlights: string[];
  coreModules: string[];
  technologies: string[];
  caseStudyUrl: string;
  githubUrl?: string;
  statusNote: string;
}

export const CURRENTLY_BUILDING_PROJECTS: CurrentlyBuildingProject[] = [
  {
    id: "skillbento",
    number: "01",
    title: "SKILLBENTO",
    category: "Multi-tenant learning & community platform",
    status: "In Development",
    statusVariant: "warning",
    concept:
      "A multi-tenant learning and community platform engineered for creator academies, technical bootcamps, and educational hubs. Architected with strict tenant isolation, high-throughput Go backend services, and modular creator services.",
    architectureHighlights: [
      "High-performance Go backend",
      "MongoDB tenant-partitioned collections",
      "Middleware-enforced tenant isolation",
      "Goroutine concurrency model",
    ],
    coreModules: [
      "Course Management",
      "Community Forums",
      "Event Management",
      "Appointment Scheduling",
      "Payments & Subscriptions",
    ],
    technologies: ["Go", "MongoDB", "Next.js", "TypeScript", "Docker"],
    caseStudyUrl: "/projects/skillbento",
    statusNote:
      "Active architectural design & backend prototyping. Strictly focused on systems design; no production launch or user metrics claimed.",
  },
  {
    id: "paw-pals-rescue",
    number: "02",
    title: "PAW PALS RESCUE",
    category: "Pet adoption & rescue platform",
    status: "Client Project · Active Development",
    statusVariant: "info",
    concept:
      "A client platform designed to streamline pet adoption workflows, rescue shelter onboarding, and medical donation campaigns for vulnerable animals. Documented strictly from confirmed codebase features.",
    architectureHighlights: [
      "Filterable adoption directory (GET /pets)",
      "Adoption inquiry workflow & status tracking",
      "Pet detail views with medical & behavioral data",
      "Stripe-integrated veterinary donation appeals",
    ],
    coreModules: [
      "Adoption Listings & Filters",
      "Pet Detail Profiles",
      "Adoption Inquiry Modal",
      "Donation Campaigns Ledger",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "Firebase Auth",
      "Stripe",
    ],
    caseStudyUrl: "/projects/paw-pals-rescue",
    githubUrl: "https://github.com/sowmik-sec/paw-pals-rescue-client",
    statusNote:
      "Client codebase in active development. All documented features are directly verified from the open-source client repository.",
  },
];

