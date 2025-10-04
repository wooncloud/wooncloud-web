import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getLinksByGroup } from '@/lib/data/links';
import Link from 'next/link';
import CertificationCard from '@/components/CertificationCard';

export default function Home() {
  const groupedLinks = getLinksByGroup();

  return (
    <div className="space-y-6">
      {Object.entries(groupedLinks).map(([groupId, group]) => (
        <Card key={groupId} className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-center text-base font-medium text-muted-foreground">
              {group.name}
            </CardTitle>
            <Separator className="mt-2 bg-border/50" />
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            {group.links.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] bg-background/80 hover:bg-background border border-border/50 hover:border-border"
                    variant="outline"
                    aria-label={link.ariaLabel}
                  >
                    <IconComponent size={18} className="mr-2" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </Button>
                </Link>
              );
            })}
          </CardContent>
        </Card>
      ))}

      <div>
        {/* 나에 대해서 */}
      </div>
      <div>
        {/* 기술 스택 */}
      </div>
      <div>
        {/* 경력 */}
      </div>
      <div>
        {/* 프로젝트 */}
      </div>
      <div>
        {/* 그 외 활동 */}
        <div className="space-y-3">
          {/* 자격증 */}
          <CertificationCard
            title="정보처리기사"
            date="2021.06.03"
          />
          <CertificationCard
            title="SQLD"
            date="2021.06.03"
          />
          <CertificationCard
            title="GTQ1급"
            description="GTQ그래픽기술자격 1급"
            date="2013.02.15"
          />
        </div>
      </div>
      <div>
        <Link href="/contact">
          <Button
            className="w-full transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] bg-background/80 hover:bg-background border border-border/50 hover:border-border"
            variant="outline"
          >
            <span className="text-sm font-medium">Contact</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
