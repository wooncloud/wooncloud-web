import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 유지보수 프로젝트',
  description:
    '협업툴 flow의 다양한 부가 기능과 시스템 전반의 유지보수를 담당했습니다. 어드민 시스템, 파트너 관리, 웹소켓 통신, 버그 수정, 성능 최적화 등을 수행했습니다.',
  keywords: [
    'flow 유지보수',
    '어드민',
    '파트너 시스템',
    '웹소켓',
    '협업툴',
    'Java',
    'PostgreSQL',
  ],
  path: '/project/flow-qa',
});

export default function FlowQaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
