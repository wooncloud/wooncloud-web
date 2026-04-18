import TechBadge from "@/components/TechBadge";

interface ProjectPageShellProps {
  title: string;
  tags?: string[];
  period?: string;
  company?: string;
  children: React.ReactNode;
}

export default function ProjectPageShell({
  title,
  tags,
  period,
  company,
  children,
}: ProjectPageShellProps) {
  const hasMeta = Boolean(period || company);
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="space-y-4">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <TechBadge key={i} name={tag} />
            ))}
          </div>
        )}
        {hasMeta && (
          <div className={company ? "space-y-1" : undefined}>
            {period && <p className="text-muted-foreground">{period}</p>}
            {company && <p className="text-muted-foreground">{company}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
