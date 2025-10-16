import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'PMIS 신규 개발 프로젝트',
  description:
    'ASP.NET MVC 기반 차세대 PMIS 건설사업관리시스템 신규 개발 프로젝트입니다. 기존 시스템을 분석하고 요구사항 및 데이터 구조를 재정의하며 UI/UX 방향성을 수립했습니다.',
  keywords: [
    'PMIS',
    '건설사업관리',
    'ASP.NET MVC',
    'C#',
    '신규 개발',
    '프로젝트',
  ],
  path: '/project/pmis-new',
});

export default function PmisNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
