import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: '동물병원 예약 시스템 프로젝트',
  description:
    'Spring Framework 기반 동물병원 예약 시스템 개발 프로젝트입니다. 사용자, 병원 관계자, 관리자를 위한 통합 예약/결제/진료 관리 시스템을 구축했습니다.',
  keywords: [
    '동물병원',
    '예약 시스템',
    'Spring Framework',
    'Java',
    'MyBatis',
    '프로젝트',
  ],
  path: '/project/animalcare',
});

export default function AnimalCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
