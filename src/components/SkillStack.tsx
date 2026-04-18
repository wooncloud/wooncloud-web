import { skillsByCategory, skillCategories } from "@/lib/data/skills";
import TechBadge from "@/components/TechBadge";

export default function SkillStack() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-4 sm:gap-x-6">
      {skillCategories.map((category) => {
        const items = skillsByCategory[category];
        if (items.length === 0) return null;
        return (
          <div
            key={category}
            className="col-span-2 grid grid-cols-subgrid items-center border-b pb-4 last:border-b-0"
          >
            <div className="text-sm font-semibold text-muted-foreground">
              {category}
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <TechBadge key={skill.id} name={skill.name} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
