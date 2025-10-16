import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: '세스나 정비 훈련 시뮬레이션 프로젝트',
  description:
    'Unity 기반 경운대학교 세스나 경량항공기 정비 훈련 시뮬레이션 프로젝트입니다. 실제 정비 절차를 VR 환경으로 전환하여 학습 효율을 높였습니다.',
  keywords: [
    '세스나',
    'VR',
    'Unity',
    '시뮬레이션',
    '정비 훈련',
    '경운대학교',
    '프로젝트',
  ],
  path: '/project/cessna',
});

export default function CessnaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
