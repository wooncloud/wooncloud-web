import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CertificationCardProps {
  title: string;
  description?: string;
  date: string;
}

export default function CertificationCard({
  title,
  description,
  date,
}: CertificationCardProps) {
  return (
    <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {description && (
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">취득일</span>
          <span className="font-medium">{date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
