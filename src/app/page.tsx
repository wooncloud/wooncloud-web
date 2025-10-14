import { Button } from '@/components/ui/button';
import { links } from '@/lib/data/links';
import Link from 'next/link';
import CertificationCard from '@/components/CertificationCard';
import EducationCard from '@/components/EducationCard';
import Profile from "@/components/Profile";
import SkillStack from '@/components/SkillStack';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Project from '@/components/Project';
import ToyProjectCard from '@/components/ToyProjectCard';
import FloatingButton from '@/components/FloatingButton';
import Notice from '@/components/Notice';

export default function Home() {
  return (
    <div className="pb-6 px-4">
      <div className="py-4">
        <Profile />
      </div>
      <div className="py-4">
        {links.map((link) => {
          const IconComponent = link.icon;
          return (
            <div key={link.id} className="my-2">
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
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
        <Link href="/contact">
          <Button className="w-full">
            <span className="text-sm font-medium">Contact</span>
          </Button>
        </Link>
      </div>

      <div id="about-me" className="pt-2 pb-6 mb-6">
        {/* 나에 대해서 */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">About Me</h2>
          <hr />
          <AboutMe />
        </div>
      </div>

      <div id="skill-stack" className="pt-2 pb-6 mb-6">
        {/* 기술스택 */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Skill Stack</h2>
          <hr />
          <SkillStack />
        </div>
      </div>

      <div id="experience" className="pt-2 pb-6 mb-6">
        {/* 경력 */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Experience</h2>
          <hr />
          <Experience />
        </div>
      </div>

      <div id="project" className="pt-2 pb-6 mb-6">
        {/* 프로젝트 */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Project</h2>
          <hr />
          <Project />
        </div>
      </div>

      <div id="activities" className="py-4">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Activities</h2>
          <hr />
          <div className="py-3 flex flex-col gap-4">
            <h4 className="text-lg font-bold">Certification</h4>
            <div className="space-y-3">
              <CertificationCard title="정보처리기사" date="2021.06.03" />
              <CertificationCard title="SQLD" date="2021.06.03" />
              <CertificationCard title="GTQ1급" description="GTQ그래픽기술자격 1급" date="2013.02.15" />
            </div>
          </div>
          <div className="py-3 flex flex-col gap-4">
            <h4 className="text-lg font-bold">Education</h4>
            <div className="space-y-3">
              <EducationCard title="동국대학교 경주" startDate="2011.03" endDate="2018.02" description="컴퓨터공학과" />
              <EducationCard title="구디아카데미" startDate="2021.02" endDate="2021.08" description="응용SW기반 빅데이터UI전문가 과정" />
            </div>
          </div>
          <div className="py-3 flex flex-col gap-4">
            <h4 className="text-lg font-bold">Toy Project</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <ToyProjectCard title="⏰ 타임핏 : TimeFit" link="https://github.com/wooncloud/timefit" />
              <ToyProjectCard title="📦 Svelte Chrome Extension Boilerplate" link="https://github.com/wooncloud/Svelte-Chrome-Extension-Boilerplate" />
              <ToyProjectCard title="🛠️ flow Devkit;" link="#" />
              <ToyProjectCard title="🧩 Scouter Binder" link="https://chromewebstore.google.com/detail/scouter-query-binder/chelfblbcigbofbajjkphnofejcodkdd" />
              <ToyProjectCard title="🔢 flow decoder" link="https://chromewebstore.google.com/detail/flow-dev-decoder/kfgfejijehnpojjphgnnomkpoeompejb?pli=1" />
              <ToyProjectCard title="🔠 char analyzer" link="https://wooncloud.github.io/char_analyzer/" />
              <ToyProjectCard title="💪 cheeract" link="https://cheeract.vercel.app" />
              <ToyProjectCard title="🔮 소서린스 : Sorcerinth" link="#" />
              <ToyProjectCard title="♠️ 스카드 : SCAD" link="#" />
              <ToyProjectCard title="🚀 카드보드 VR 우주선 게임" link="#" />
            </div>
          </div>
        </div>
      </div>
      <FloatingButton />
      <Notice />
    </div>
  );
}