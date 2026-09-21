export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Fabric.js"],
  },
  {
    id: "backend",
    name: "Backend",
    skills: ["Go", "Node.js", "REST APIs", "Server Actions"],
  },
  {
    id: "data-payments",
    name: "Data & Payments",
    skills: ["MongoDB", "Stripe"],
  },
  {
    id: "tools-deployment",
    name: "Tools & Deployment",
    skills: ["Git", "GitHub", "Docker", "Vercel"],
  },
];
