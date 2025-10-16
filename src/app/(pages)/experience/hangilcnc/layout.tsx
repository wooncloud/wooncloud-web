import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: '한길씨앤씨 경력',
  description:
    '한길씨앤씨에서 유니티 클라이언트 개발자로 근무하며 VR 시뮬레이션 개발을 담당했습니다. 텔레프레젠스, 블랙이글스, 세스나 정비 훈련 시뮬레이션 등 다양한 VR 콘텐츠 제작 경험을 쌓았습니다.',
  keywords: [
    '한길씨앤씨',
    'Unity',
    'VR',
    '시뮬레이션',
    '유니티',
    '경력',
    '텔레프레젠스',
    '블랙이글스',
  ],
  path: '/experience/hangilcnc',
});

export default function HangilCncLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
