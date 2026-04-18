export interface NavSection {
  id: string;
  label: string;
}

export const navSections: NavSection[] = [
  { id: "about-me", label: "About Me" },
  { id: "skill-stack", label: "Skill Stack" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "activities", label: "Activities" },
];
