"use client";

import { useState } from 'react';
import { skills } from '@/lib/data/skills';
import Image from 'next/image';

export default function SkillStack() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillClick = (skillId: string) => {
    setSelectedSkill(selectedSkill === skillId ? null : skillId);
  };

  const selectedSkillData = skills.find(skill => skill.id === selectedSkill);

  return (
    <div>
      <div className="grid grid-cols-6 md:grid-cols-8 gap-3 mb-4">
        {skills.map((skill) => (
          <button
            key={skill.id}
            onClick={() => handleSkillClick(skill.id)}
            className={`relative aspect-square rounded-full overflow-hidden border-2 transition-all ${
              selectedSkill === skill.id
                ? 'border-primary scale-105'
                : 'border-border hover:border-primary/50 hover:scale-105'
            } ${!skill.imageUrl ? 'flex items-center justify-center bg-background' : ''}`}
            aria-label={skill.name}
          >
            {skill.imageUrl ? (
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                fill
                className="object-cover"
              />
            ) : (
              <span>{skill.name}</span>
            )}
          </button>
        ))}
      </div>

      {selectedSkillData && (
        <div className="border rounded-lg p-4 bg-card">
          <h3 className="font-semibold text-lg mb-2">{selectedSkillData.name}</h3>
          <p className="text-sm text-muted-foreground">{selectedSkillData.description}</p>
        </div>
      )}
    </div>
  );
}
