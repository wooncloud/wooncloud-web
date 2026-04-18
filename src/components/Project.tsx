import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "@/components/TechBadge";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

export default function Project() {
  return (
    <div className="flex flex-col space-y-2">
      {projects.map((project) => {
        const Icon = project.icon;
        return (
          <Link key={project.id} href={project.path}>
            <Card className="border hover:border-primary/50 transition-colors cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{project.title}</span>
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {project.period}
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <TechBadge key={tagIndex} name={tag} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
