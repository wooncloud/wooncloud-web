import { Button } from "@/components/ui/button";
import { links } from "@/lib/data/links";
import Link from "next/link";
import Image from "next/image";
import CertificationCard from "@/components/CertificationCard";
import EducationCard from "@/components/EducationCard";
import Profile from "@/components/Profile";
import SkillStack from "@/components/SkillStack";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import FloatingButton from "@/components/FloatingButton";
import Section from "@/components/Section";
import {
  UserRound,
  Wrench,
  Briefcase,
  FolderGit2,
  Sparkles,
  Award,
  GraduationCap,
} from "lucide-react";

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

export default function Home() {
  return (
    <div className="p-6 px-4">
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
                  {IconComponent ? (
                    <IconComponent size={18} className="mr-2" />
                  ) : link.iconSrc ? (
                    <Image
                      src={link.iconSrc}
                      alt=""
                      width={18}
                      height={18}
                      className="mr-2 dark:invert"
                    />
                  ) : null}
                  <span className="text-sm font-medium">{link.label}</span>
                </Button>
              </Link>
            </div>
          );
        })}
        <Link href="/contact">
          <Button className="w-full" aria-label="Contact 페이지로 이동">
            <Image
              src="/resources/mail.svg"
              alt=""
              width={18}
              height={18}
              className="mr-2 invert dark:invert-0"
            />
            <span className="text-sm font-medium">Contact</span>
          </Button>
        </Link>
      </nav>

      <Section id="about-me" title="About Me" icon={UserRound}>
        <AboutMe />
      </Section>

      <Section id="skill-stack" title="Skill Stack" icon={Wrench}>
        <SkillStack />
      </Section>

      <Section id="experience" title="Experience" icon={Briefcase}>
        <Experience />
      </Section>

      <Section id="project" title="Project" icon={FolderGit2}>
        <Project />
      </Section>

      <Section
        id="activities"
        title="Activities"
        icon={Sparkles}
        className="py-4"
      >
        <article className="py-3 flex flex-col gap-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Award className="h-5 w-5" aria-hidden="true" />
            Certification
          </h3>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} {...cert} />
            ))}
          </div>
        </article>
        <article className="py-3 flex flex-col gap-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
            Education
          </h3>
          <div className="space-y-3">
            {education.map((edu) => (
              <EducationCard key={edu.title} {...edu} />
            ))}
          </div>
        </article>
      </Section>

      <FloatingButton />
    </div>
  );
}
