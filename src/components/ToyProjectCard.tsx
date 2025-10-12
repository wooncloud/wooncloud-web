import Link from 'next/link';

export interface ToyProjectCardProps {
  title: string;
  link: string;
}

export default function ToyProjectCard({ title, link }: ToyProjectCardProps) {
  return (
    <Link
      href={link}
      className="block rounded-lg border border-border/60 bg-card p-2 transition hover:border-primary hover:shadow-md"
    >
      <span className="text-base font-semibold text-foreground">{title}</span>
    </Link>
  );
}
