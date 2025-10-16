import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: '텔레프레젠스 소셜 VR 프로젝트',
  description:
    'Unity 기반 텔레프레젠스 소셜 VR 프로젝트입니다. 국가과제형 프로젝트에 참여하여 내부 콘텐츠와 인터랙션 UI를 구축하며 핵심 사용자 경험을 설계했습니다.',
  keywords: [
    '텔레프레젠스',
    'VR',
    'Unity',
    '소셜 VR',
    'VIVE',
    '프로젝트',
  ],
  path: '/project/telepresence',
});

export default function TelepresenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
