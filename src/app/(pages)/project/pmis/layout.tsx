import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'PMIS 유지보수 프로젝트',
  description:
    'ASP.NET 기반 PMIS 건설사업관리시스템 유지보수 프로젝트입니다. 관리자 및 공문 모듈을 재구축하고 UI를 현대화하여 안정성과 사용성을 향상시켰습니다.',
  keywords: [
    'PMIS',
    '건설사업관리',
    'ASP.NET',
    'C#',
    '유지보수',
    '프로젝트',
  ],
  path: '/project/pmis',
});

export default function PmisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
