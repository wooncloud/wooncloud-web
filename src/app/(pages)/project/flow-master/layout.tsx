import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 마스터어드민 통합 개발 | CX팀 지원 시스템',
  description:
    '분산된 2개의 마스터어드민을 하나로 통합한 SaaS 운영 플랫폼입니다. 고객 및 기업 관리에 중점을 둔 CX팀 지원 시스템으로, 전체 시스템 모니터링, 사용자/조직 관리, 고객 지원, 시스템 설정 등 핵심 관리 기능을 제공합니다. 운영 효율성을 높이고 고객 응대 품질을 향상시켰습니다.',
  keywords: [
    'flow 마스터어드민',
    'CX 시스템',
    '고객 관리',
    '기업 관리',
    '관리자 시스템',
    'SaaS 운영',
    'Java',
    'PostgreSQL',
    '시스템 통합',
    '고객 지원',
  ],
  path: '/project/flow-master',
});

export default function FlowMasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
