import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface EducationCardProps {
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
}

export default function EducationCard({
  title,
  description,
  startDate,
  endDate,
}: EducationCardProps) {
  return (
    <Card className="border">
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
          <span className="text-muted-foreground">기간</span>
          <span className="font-medium">{startDate} - {endDate}</span>
        </div>
      </CardContent>
    </Card>
  );
}
