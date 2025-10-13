'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ListTree, ArrowUp } from 'lucide-react';

const sections = [
  { id: 'about-me', label: 'About Me' },
  { id: 'skill-stack', label: 'Skill Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Project' },
  { id: 'activities', label: 'Activities' },
];

export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <div className="fixed z-10 bottom-4 right-4">
      <div className='flex flex-col gap-2'>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" className="rounded-full" aria-label="목차 열기">
              <ListTree />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="mt-6">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left"
                      onClick={() => scrollToSection(section.id)}
                    >
                      <h1 className="text-xl font-bold">{section.label}</h1>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>

        <Button
          size="icon"
          className="rounded-full"
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
        >
          <ArrowUp />
        </Button>
      </div>
    </div>
  );
}
