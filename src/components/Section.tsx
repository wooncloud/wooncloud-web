interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  children,
  className = "pt-2 pb-6 mb-6",
}: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} className={className} aria-labelledby={headingId}>
      <div className="space-y-3">
        <h2 id={headingId} className="text-2xl font-bold">
          {title}
        </h2>
        <hr />
        {children}
      </div>
    </section>
  );
}
