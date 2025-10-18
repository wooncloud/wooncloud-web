import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 파일·로그인 보안 개발 | B2B SaaS 보안 정책',
  description:
    '협업툴 flow의 파일 보안 및 로그인 보안 시스템 개발 프로젝트입니다. PC와 모바일 환경별로 파일 다운로드 정책을 설정하고 IP 화이트리스트, 사용자 화이트리스트를 통한 접근 제어를 구현했습니다. 로그인 보안 정책 설정과 관리자 변경 이력, 파일 다운로드 이력 등 감사 로그를 통해 보안사고 대응 체계를 구축했습니다.',
  keywords: [
    'flow 보안',
    '파일 보안',
    '로그인 보안',
    'IP 화이트리스트',
    '접근 제어',
    '다운로드 정책',
    '감사 로그',
    'B2B SaaS',
    'Java',
    'PostgreSQL',
    'Security Filter',
    '정보 보안',
  ],
  path: '/project/flow-security',
});

export default function FlowSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
