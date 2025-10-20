"use client";

import { useState } from 'react';
import { skills } from '@/lib/data/skills';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function SkillStack() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillClick = (skillId: string) => {
    setSelectedSkill(selectedSkill === skillId ? null : skillId);
  };

  const selectedSkillData = skills.find(skill => skill.id === selectedSkill);

  const getPriorityBorderClass = (priority: string, isSelected: boolean) => {
    if (isSelected) {
      return 'border-green-500 border-[3px]';
    }
    switch (priority) {
      case 'high':
        return 'border-blue-500 border-2';
      case 'medium':
        return 'border-yellow-400 border-2';
      case 'low':
        return 'border-gray-300 border-2';
      default:
        return 'border-border border-2';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Primarily Used</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-400 hover:bg-yellow-500">Frequently Used</Badge>;
      case 'low':
        return <Badge className="bg-gray-300 hover:bg-gray-400">Rarely Used</Badge>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-6 md:grid-cols-8 gap-3 mb-4">
        {skills.map((skill) => (
          <button
            key={skill.id}
            onClick={() => handleSkillClick(skill.id)}
            className={`relative aspect-square rounded-full overflow-hidden transition-all hover:scale-105 shadow-lg ${
              getPriorityBorderClass(skill.priority, selectedSkill === skill.id)
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
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">{selectedSkillData.name}</h3>
            {getPriorityBadge(selectedSkillData.priority)}
          </div>
          <p className="text-sm text-muted-foreground">{selectedSkillData.description}</p>
        </div>
      )}
    </div>
  );
}
