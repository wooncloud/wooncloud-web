import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 플랜 관리 시스템 개발 | SaaS 구독 및 과금 정책',
  description:
    '유연한 SaaS 비즈니스 모델을 지원하는 플랜 관리 시스템입니다. 기존 단일 플랜 구조의 한계를 극복하고 다양한 요금제를 생성할 수 있는 시스템을 구축했습니다. 플랜별 기능 제한, 사용자 권한 매칭, 구독 관리, 자동 결제, 플랜 변경 이력 추적 기능을 통해 고객 맞춤형 서비스를 제공하고 유연한 정책 변경이 가능합니다.',
  keywords: [
    'flow 플랜',
    'SaaS 요금제',
    '구독 관리',
    '과금 정책',
    '플랜 매칭',
    '기능 제한',
    '자동 결제',
    'Java',
    'PostgreSQL',
    '사용자 권한',
    '정책 변경',
    '구독 모델',
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
