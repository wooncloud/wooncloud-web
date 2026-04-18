import { Github, Rss } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Link {
  id: string;
  url: string;
  icon?: LucideIcon;
  iconSrc?: string;
  label: string;
  ariaLabel: string;
}

export const links: Link[] = [
  {
    id: "blog",
    url: "https://wooncloud.tistory.com",
    icon: Rss,
    label: "블로그 (blog)",
    ariaLabel: "운구름의 개발 블로그로 이동",
  },
  {
    id: "github",
    url: "https://github.com/wooncloud",
    icon: Github,
    label: "깃허브 (github)",
    ariaLabel: "운구름의 GitHub 프로필로 이동",
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/wooncloud/",
    iconSrc: "/resources/linkedin.svg",
    label: "링크드인 (linkedin)",
    ariaLabel: "운구름의 LinkedIn 프로필로 이동",
  },
];
