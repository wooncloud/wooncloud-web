import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 보안 프로젝트',
  description:
    '협업툴 flow의 보안 체계 강화 프로젝트입니다. 파일 암호화, 접근 권한 관리, 다단계 인증 등을 통해 기업 데이터를 안전하게 보호하고 신뢰할 수 있는 협업 환경을 제공합니다.',
  keywords: [
    'flow 보안',
    '파일 보안',
    '로그인 보안',
    '암호화',
    '협업툴',
    'Java',
    '보안',
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
