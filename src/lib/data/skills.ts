export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "DevOps & Tools";

export type SkillType = "lang" | "fw" | "etc";
export type SkillPriority = "high" | "medium" | "low";

export const skillCategories: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "DevOps & Tools",
];

const priorityOrder: Record<SkillPriority, number> = {
  high: 0,
  medium: 1,
  low: 2,
};

const typeOrder: Record<SkillType, number> = {
  lang: 0,
  fw: 1,
  etc: 2,
};

export interface Skill {
  id: string;
  name: string;
  imageUrl: string;
  priority: SkillPriority;
  category: SkillCategory;
  type: SkillType;
  color: string;
}

const raw: Skill[] = [
  // Languages
  {
    id: "javascript",
    name: "JavaScript",
    imageUrl: "/skills/js.svg",
    priority: "high",
    category: "Languages",
    type: "lang",
    color: "#F7DF1E",
  },
  {
    id: "typescript",
    name: "TypeScript",
    imageUrl: "/skills/ts.svg",
    priority: "high",
    category: "Languages",
    type: "lang",
    color: "#3178C6",
  },
  {
    id: "java",
    name: "Java",
    imageUrl: "/skills/java.svg",
    priority: "high",
    category: "Languages",
    type: "lang",
    color: "#007396",
  },
  {
    id: "html5",
    name: "HTML5",
    imageUrl: "/skills/html5.svg",
    priority: "medium",
    category: "Languages",
    type: "lang",
    color: "#E34F26",
  },
  {
    id: "css3",
    name: "CSS3",
    imageUrl: "/skills/css.svg",
    priority: "medium",
    category: "Languages",
    type: "lang",
    color: "#1572B6",
  },

  // Frontend
  {
    id: "react",
    name: "React",
    imageUrl: "/skills/react.svg",
    priority: "high",
    category: "Frontend",
    type: "fw",
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    name: "Next.js",
    imageUrl: "/skills/nextjs.svg",
    priority: "high",
    category: "Frontend",
    type: "fw",
    color: "#000000",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    imageUrl: "/skills/tailwindcss.svg",
    priority: "high",
    category: "Frontend",
    type: "etc",
    color: "#06B6D4",
  },
  {
    id: "zustand",
    name: "Zustand",
    imageUrl: "/skills/redux.svg",
    priority: "high",
    category: "Frontend",
    type: "etc",
    color: "#764ABC",
  },
  {
    id: "react-query",
    name: "React Query",
    imageUrl: "/skills/reactquery.svg",
    priority: "high",
    category: "Frontend",
    type: "etc",
    color: "#FF4154",
  },
  {
    id: "preact",
    name: "Preact",
    imageUrl: "/skills/preact.svg",
    priority: "medium",
    category: "Frontend",
    type: "fw",
    color: "#673AB8",
  },
  {
    id: "svelte",
    name: "Svelte",
    imageUrl: "/skills/svelte.svg",
    priority: "medium",
    category: "Frontend",
    type: "fw",
    color: "#FF3E00",
  },
  {
    id: "sveltekit",
    name: "SvelteKit",
    imageUrl: "/skills/svelte.svg",
    priority: "medium",
    category: "Frontend",
    type: "fw",
    color: "#FF3E00",
  },
  {
    id: "jquery",
    name: "jQuery",
    imageUrl: "/skills/jquery.svg",
    priority: "medium",
    category: "Frontend",
    type: "etc",
    color: "#0769AD",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    imageUrl: "/skills/bootstrap.svg",
    priority: "low",
    category: "Frontend",
    type: "etc",
    color: "#7952B3",
  },

  // Backend
  {
    id: "nestjs",
    name: "NestJS",
    imageUrl: "/skills/nestjs.svg",
    priority: "high",
    category: "Backend",
    type: "fw",
    color: "#E0234E",
  },
  {
    id: "nodejs",
    name: "Node.js",
    imageUrl: "/skills/nodejs.svg",
    priority: "high",
    category: "Backend",
    type: "etc",
    color: "#339933",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    imageUrl: "/skills/postgresql.svg",
    priority: "high",
    category: "Backend",
    type: "etc",
    color: "#4169E1",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    imageUrl: "/skills/mongodb.svg",
    priority: "medium",
    category: "Backend",
    type: "etc",
    color: "#47A248",
  },
  {
    id: "express",
    name: "Express",
    imageUrl: "/skills/express.svg",
    priority: "medium",
    category: "Backend",
    type: "fw",
    color: "#000000",
  },
  {
    id: "spring",
    name: "Spring",
    imageUrl: "/skills/spring.svg",
    priority: "low",
    category: "Backend",
    type: "fw",
    color: "#6DB33F",
  },
  {
    id: "springboot",
    name: "Spring Boot",
    imageUrl: "/skills/springboot.svg",
    priority: "low",
    category: "Backend",
    type: "fw",
    color: "#6DB33F",
  },

  // DevOps & Tools
  {
    id: "git",
    name: "Git",
    imageUrl: "/skills/git.svg",
    priority: "high",
    category: "DevOps & Tools",
    type: "etc",
    color: "#F05032",
  },
  {
    id: "github",
    name: "GitHub",
    imageUrl: "/skills/github.svg",
    priority: "high",
    category: "DevOps & Tools",
    type: "etc",
    color: "#181717",
  },
  {
    id: "vercel",
    name: "Vercel",
    imageUrl: "/skills/vercel.svg",
    priority: "medium",
    category: "DevOps & Tools",
    type: "etc",
    color: "#000000",
  },
  {
    id: "vite",
    name: "Vite",
    imageUrl: "/skills/vite.svg",
    priority: "medium",
    category: "DevOps & Tools",
    type: "etc",
    color: "#646CFF",
  },
  {
    id: "pnpm",
    name: "pnpm",
    imageUrl: "/skills/pnpm.svg",
    priority: "medium",
    category: "DevOps & Tools",
    type: "etc",
    color: "#F69220",
  },
  {
    id: "docker",
    name: "Docker",
    imageUrl: "/skills/docker.svg",
    priority: "low",
    category: "DevOps & Tools",
    type: "etc",
    color: "#2496ED",
  },
  {
    id: "aws",
    name: "AWS",
    imageUrl: "/skills/aws.svg",
    priority: "low",
    category: "DevOps & Tools",
    type: "etc",
    color: "#232F3E",
  },
  {
    id: "rollup",
    name: "Rollup",
    imageUrl: "/skills/rollupdotjs.svg",
    priority: "low",
    category: "DevOps & Tools",
    type: "etc",
    color: "#EC4A3F",
  },
  {
    id: "eslint",
    name: "ESLint",
    imageUrl: "/skills/eslint.svg",
    priority: "low",
    category: "DevOps & Tools",
    type: "etc",
    color: "#4B32C3",
  },
  {
    id: "prettier",
    name: "Prettier",
    imageUrl: "/skills/prettier.svg",
    priority: "low",
    category: "DevOps & Tools",
    type: "etc",
    color: "#F7B93E",
  },
];

export const skills: Skill[] = [...raw].sort((a, b) => {
  const p = priorityOrder[a.priority] - priorityOrder[b.priority];
  if (p !== 0) return p;
  return typeOrder[a.type] - typeOrder[b.type];
});

export const skillsByCategory: Record<SkillCategory, Skill[]> =
  skillCategories.reduce(
    (acc, category) => {
      acc[category] = skills.filter((s) => s.category === category);
      return acc;
    },
    {} as Record<SkillCategory, Skill[]>,
  );
