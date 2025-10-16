import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 캘린더 프로젝트',
  description:
    '협업툴 flow의 캘린더 기능 개발 프로젝트입니다. 개인 및 팀 일정을 통합 관리하고, 실시간 동기화를 통해 원활한 협업 환경을 제공합니다.',
  keywords: [
    'flow 캘린더',
    '일정 관리',
    '협업툴',
    'Java',
    'PostgreSQL',
    'jQuery',
    '캘린더',
  ],
  path: '/project/flow-calendar',
});

export default function FlowCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
