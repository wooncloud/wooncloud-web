import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: '블랙이글스 VR 시뮬레이션 프로젝트',
  description:
    'Unity 기반 블랙이글스 어트랙션 체험 VR 시뮬레이션 프로젝트입니다. Sym4d 하드웨어를 연동하여 현실감 있는 비행 체험을 구현했습니다.',
  keywords: [
    '블랙이글스',
    'VR',
    'Unity',
    '시뮬레이션',
    'Sym4d',
    '어트랙션',
    '프로젝트',
  ],
  path: '/project/blackeagles',
});

export default function BlackEaglesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
