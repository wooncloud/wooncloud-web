import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 플랜 프로젝트',
  description:
    '협업툴 flow의 요금제 및 플랜 관리 시스템 개발 프로젝트입니다. 다양한 요금제 옵션과 결제 시스템 통합을 통해 원활한 구독 관리 환경을 구축했습니다.',
  keywords: [
    'flow 플랜',
    '요금제',
    '구독 관리',
    '협업툴',
    'Java',
    'PostgreSQL',
    '결제',
  ],
  path: '/project/flow-plan',
});

export default function FlowPlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
