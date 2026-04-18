import Image from "next/image";
import { skillsByCategory, skillCategories } from "@/lib/data/skills";
import { getContrastTextColor } from "@/lib/utils";

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
              {items.map((skill) => {
                const fg = getContrastTextColor(skill.color);
                return (
                  <span
                    key={skill.id}
                    className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium"
                    style={{ backgroundColor: skill.color, color: fg }}
                  >
                    <span
                      className={`relative inline-block h-4 w-4 shrink-0 ${
                        fg === "#ffffff"
                          ? "[filter:brightness(0)_invert(1)]"
                          : ""
                      }`}
                    >
                      <Image
                        src={skill.imageUrl}
                        alt=""
                        fill
                        sizes="16px"
                        className="object-contain"
                      />
                    </span>
                    <span>{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
