import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { experiences } from '@/lib/data/experiences';

export default function Experience() {
  return (
    <div className="flex flex-col space-y-2">
      {experiences.map((exp) => (
        <Link key={exp.id} href={exp.path}>
          <Card className="border hover:border-primary/50 transition-colors cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">{exp.company}</CardTitle>
              <div className="text-sm text-muted-foreground">{exp.position}</div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">기간</span>
                <span className="font-medium">{exp.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
