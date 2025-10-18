import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 업무·간트차트 리뉴얼 프로젝트 | Preact 기반 SaaS 개발',
  description:
    '협업툴 flow의 업무 관리 시스템을 Preact로 전면 리뉴얼한 프로젝트입니다. 커스텀 컬럼, 다중 하위업무, 커스텀 상태 관리 등 유연한 기능을 제공하여 다양한 업종의 업무 프로세스를 지원합니다. WebSocket 실시간 동기화와 Dnd Kit 기반 직관적인 UX로 생산성을 향상시켰습니다.',
  keywords: [
    'flow 업무관리',
    '간트차트',
    'Preact',
    'SaaS',
    '협업툴',
    '프로젝트 관리 시스템',
    'WebSocket',
    '실시간 동기화',
    'Dnd Kit',
    'Signal 상태관리',
    'Java',
    'PostgreSQL',
    '커스텀 워크플로우',
    '업무 자동화',
    'NPM 패키지',
  ],
  path: '/project/flow-task',
});

export default function FlowTaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
