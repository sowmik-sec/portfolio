export interface WorkExperience {
  role: string;
  company: string;
  timeline: string;
  location?: string;
  focus: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  graduationYear: string;
  cgpa: string;
  details?: string;
}

export const CURRENT_ROLE: WorkExperience = {
  role: "Full Stack Developer",
  company: "Deadlock Soft",
  timeline: "July 2025 – Present",
  focus: "Engineering production web applications and resilient client systems from architecture to deployment.",
  technologies: ["Next.js", "TypeScript", "Go", "Tailwind", "MongoDB"],
};

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    degree: "B.Sc. Engineering — Computer Science & Engineering",
    institution: "Sylhet Engineering College",
    graduationYear: "Graduated: 2022",
    cgpa: "3.47 / 4.00",
    details: "Rigorous engineering foundation in data structures, algorithms, systems design, and software engineering principles.",
  },
];
