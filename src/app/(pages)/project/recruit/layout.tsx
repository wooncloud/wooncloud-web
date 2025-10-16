import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: '채용 시스템 프로젝트',
  description:
    'Spring Framework 기반 채용 시스템 개발 프로젝트입니다. 채용 공고 작성부터 지원서 접수, 전형 결과 통보까지 전 과정을 관리할 수 있는 시스템을 구축했습니다.',
  keywords: [
    '채용 시스템',
    'Spring Framework',
    'Java',
    'Spring Security',
    '프로젝트',
  ],
  path: '/project/recruit',
});

export default function RecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
