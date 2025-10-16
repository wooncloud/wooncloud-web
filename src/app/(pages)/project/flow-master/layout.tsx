import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 마스터어드민 프로젝트',
  description:
    '협업툴 flow의 마스터 관리자 시스템 개발 프로젝트입니다. 전체 시스템 모니터링, 사용자 관리, 조직 관리, 시스템 설정 등 핵심 관리 기능을 제공합니다.',
  keywords: [
    'flow 마스터어드민',
    '관리자 시스템',
    '협업툴',
    'Java',
    'PostgreSQL',
    '시스템 관리',
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
