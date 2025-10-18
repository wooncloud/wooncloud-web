import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 서비스 운영 및 개선 | SaaS 안정성 & 성능 최적화',
  description:
    'flow SaaS 서비스의 지속적인 운영 및 개선을 담당한 프로젝트입니다. AWS SES 이메일 시스템, 퇴사자 관리 어드민, flow partner 시스템, 알림/댓글 필터, Google Analytics 사용자 분석, 실시간 모니터링 구축 등 다양한 기능을 개발했습니다. Scouter, Datadog, Grafana 기반 모니터링으로 장애를 빠르게 감지하고 PostgreSQL 쿼리 최적화로 서비스 안정성과 성능을 지속적으로 향상시켰습니다.',
  keywords: [
    'flow 유지보수',
    'SaaS 운영',
    '서비스 안정성',
    'AWS SES',
    '이메일 시스템',
    '파트너 시스템',
    'Google Analytics',
    '사용자 분석',
    '모니터링',
    'Scouter',
    'Datadog',
    'Grafana',
    'PostgreSQL 최적화',
    '성능 개선',
    '장애 대응',
    'Java',
    'WebSocket',
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
