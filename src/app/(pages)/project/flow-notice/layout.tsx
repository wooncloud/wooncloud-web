import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 공지·배너 관리 시스템 | 타겟팅 & 다국어 지원',
  description:
    '글로벌 SaaS를 위한 정교한 공지사항 및 배너 관리 시스템입니다. 환경, 플랜, 기업, 사용자 유형별 타겟팅과 국가별 다국어 콘텐츠 지원으로 맞춤형 정보 전달이 가능합니다. 타임존 기반 예약 게시 기능으로 각국 사용자에게 최적의 시간에 공지를 노출하여 중요한 업데이트와 이벤트를 효율적으로 전달합니다.',
  keywords: [
    'flow 공지',
    '배너 관리',
    '타겟팅',
    '다국어 지원',
    '타임존',
    '예약 게시',
    'Java',
    'PostgreSQL',
    '공지사항 시스템',
    'SaaS 마케팅',
    '사용자 세분화',
  ],
  path: '/project/flow-notice',
});

export default function FlowNoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
