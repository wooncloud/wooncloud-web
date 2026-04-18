import { LucideIcon } from "lucide-react";

interface SectionProps {
  id: string;
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  icon: Icon,
  children,
  className = "pt-2 pb-6 mb-6",
}: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} className={className} aria-labelledby={headingId}>
      <div className="space-y-3">
        <h2
          id={headingId}
          className="text-2xl font-bold flex items-center gap-2"
        >
          {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
          {title}
        </h2>
        <hr />
        {children}
      </div>
    </section>
  );
}
