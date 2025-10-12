import { Button } from '@/components/ui/button';
import { links } from '@/lib/data/links';
import Link from 'next/link';
import CertificationCard from '@/components/CertificationCard';
import Profile from "@/components/Profile";
import SkillStack from '@/components/SkillStack';

export default function Home() {
  return (
    <div className="py-6">
      <div className="py-6">
        <Profile />
      </div>
      <div className="my-4">
        {links.map((link) => {
          const IconComponent = link.icon;
          return (
            <div className="my-2">
              <Link key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full"
                  variant="outline"
                  aria-label={link.ariaLabel}
                >
                  <IconComponent size={18} className="mr-2" />
                  <span className="text-sm font-medium">{link.label}</span>
                </Button>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="my-4">
        {/* 나에 대해서 */}
      </div>
      <div className="my-4">
        {/* 기술 스택 */}
      </div>
      <div className="my-4">
        {/* 경력 */}
      </div>
      <div className="my-4">
        {/* 프로젝트 */}
      </div>
      <div className="my-4">
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
      <div className="my-4">
        <Link href="/contact">
          <Button className="w-full">
            <span className="text-sm font-medium">Contact</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
