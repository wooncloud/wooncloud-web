import { Button } from "@/components/ui/button";
import { links } from "@/lib/data/links";
import Link from "next/link";
import CertificationCard from "@/components/CertificationCard";
import EducationCard from "@/components/EducationCard";
import Profile from "@/components/Profile";
import SkillStack from "@/components/SkillStack";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import ToyProjectCard from "@/components/ToyProjectCard";
import FloatingButton from "@/components/FloatingButton";
import Section from "@/components/Section";

const certifications = [
  { title: "정보처리기사", date: "2021.06.03" },
  { title: "SQLD", date: "2021.06.25" },
  {
    title: "GTQ1급",
    description: "GTQ그래픽기술자격 1급",
    date: "2013.02.15",
  },
];

const education = [
  {
    title: "동국대학교 경주",
    startDate: "2011.03",
    endDate: "2018.02",
    description: "컴퓨터공학과",
  },
  {
    title: "구디아카데미",
    startDate: "2021.02",
    endDate: "2021.08",
    description: "응용SW기반 빅데이터UI전문가 과정",
  },
];

const toyProjects = [
  {
    title: "⏰ 타임핏 : TimeFit",
    link: "https://github.com/wooncloud/timefit",
  },
  {
    title: "📦 Svelte Chrome Extension Boilerplate",
    link: "https://github.com/wooncloud/Svelte-Chrome-Extension-Boilerplate",
  },
  { title: "🛠️ flow Devkit;", link: "#" },
  {
    title: "🧩 Scouter Binder",
    link: "https://chromewebstore.google.com/detail/scouter-query-binder/chelfblbcigbofbajjkphnofejcodkdd",
  },
  {
    title: "🔢 flow decoder",
    link: "https://chromewebstore.google.com/detail/flow-dev-decoder/kfgfejijehnpojjphgnnomkpoeompejb?pli=1",
  },
  { title: "🏞️ WebP Converter", link: "https://github.com/wooncloud/towebp" },
  {
    title: "🔠 char analyzer",
    link: "https://wooncloud.github.io/char_analyzer/",
  },
  { title: "💪 cheeract", link: "https://cheeract.vercel.app" },
  { title: "🔮 소서린스 : Sorcerinth", link: "#" },
  { title: "♠️ 스카드 : SCAD", link: "#" },
  { title: "🚀 카드보드 VR 우주선 게임", link: "#" },
];

export default function Home() {
  return (
    <div className="pb-6 px-4">
      <header className="py-4">
        <Profile />
      </header>

      <nav className="py-4" aria-label="소셜 링크">
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
      </nav>

      <Section id="about-me" title="About Me">
        <AboutMe />
      </Section>

      <Section id="skill-stack" title="Skill Stack">
        <SkillStack />
      </Section>

      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      <Section id="project" title="Project">
        <Project />
      </Section>

      <Section id="activities" title="Activities" className="py-4">
        <article className="py-3 flex flex-col gap-4">
          <h3 className="text-lg font-bold">Certification</h3>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} {...cert} />
            ))}
          </div>
        </article>
        <article className="py-3 flex flex-col gap-4">
          <h3 className="text-lg font-bold">Education</h3>
          <div className="space-y-3">
            {education.map((edu) => (
              <EducationCard key={edu.title} {...edu} />
            ))}
          </div>
        </article>
        <article className="py-3 flex flex-col gap-4">
          <h3 className="text-lg font-bold">Toy Project</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {toyProjects.map((proj) => (
              <ToyProjectCard key={proj.title} {...proj} />
            ))}
          </div>
        </article>
      </Section>

      <FloatingButton />
    </div>
  );
}
