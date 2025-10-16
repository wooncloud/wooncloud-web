import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 업무·간트차트 프로젝트',
  description:
    '협업툴 flow의 업무 관리 및 간트차트 기능 리뉴얼 프로젝트입니다. Preact 기반으로 전면 리뉴얼하여 성능과 사용자 경험을 개선했습니다.',
  keywords: [
    'flow 업무',
    '간트차트',
    'Preact',
    '협업툴',
    'Java',
    'PostgreSQL',
    '프로젝트 관리',
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
