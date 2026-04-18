"use client";

import { useState } from "react";
import Image from "next/image";
import { skills, type Skill } from "@/lib/data/skills";
import { Badge } from "@/components/ui/badge";

const priorityConfig: Record<
  Skill["priority"],
  { border: string; badge: string; label: string }
> = {
  high: {
    border: "border-blue-500",
    badge: "bg-blue-500 hover:bg-blue-600",
    label: "Primarily Used",
  },
  medium: {
    border: "border-yellow-400",
    badge: "bg-yellow-400 hover:bg-yellow-500",
    label: "Frequently Used",
  },
  low: {
    border: "border-gray-300",
    badge: "bg-gray-300 hover:bg-gray-400",
    label: "Rarely Used",
  },
};

export default function SkillStack() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const selectedSkillData = skills.find((skill) => skill.id === selectedSkill);

  return (
    <div>
      <div className="grid grid-cols-6 md:grid-cols-8 gap-3 mb-4">
        {skills.map((skill) => {
          const isSelected = selectedSkill === skill.id;
          const borderClass = isSelected
            ? "border-green-500 border-[3px]"
            : `${priorityConfig[skill.priority].border} border-2`;
          return (
            <button
              key={skill.id}
              onClick={() => setSelectedSkill(isSelected ? null : skill.id)}
              className={`relative aspect-square rounded-full overflow-hidden transition-all hover:scale-105 shadow-lg ${borderClass} ${
                !skill.imageUrl
                  ? "flex items-center justify-center bg-background"
                  : ""
              }`}
              aria-label={skill.name}
            >
              {skill.imageUrl ? (
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  fill
                  sizes="(max-width: 768px) 16vw, 96px"
                  className="object-cover"
                />
              ) : (
                <span>{skill.name}</span>
              )}
            </button>
          );
        })}
      </div>

      {selectedSkillData && (
        <div className="border rounded-lg p-4 bg-card">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">{selectedSkillData.name}</h3>
            <Badge className={priorityConfig[selectedSkillData.priority].badge}>
              {priorityConfig[selectedSkillData.priority].label}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {selectedSkillData.description}
          </p>
        </div>
      )}
    </div>
  );
}
