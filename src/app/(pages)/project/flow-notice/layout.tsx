import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 공지·배너 프로젝트',
  description:
    '협업툴 flow의 공지사항 및 배너 관리 시스템 개발 프로젝트입니다. 효과적인 정보 전달을 위한 공지사항 작성/게시 기능과 배너 관리 기능을 구현했습니다.',
  keywords: [
    'flow 공지',
    '배너 관리',
    '협업툴',
    'Java',
    'PostgreSQL',
    'jQuery',
    '공지사항',
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
