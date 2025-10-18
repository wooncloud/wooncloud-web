import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow 통합 캘린더 개발 프로젝트 | Google Calendar 연동 일정관리',
  description:
    '개인 캘린더와 프로젝트 캘린더를 통합한 협업 일정 관리 시스템입니다. Google Calendar 연동, 타임존 지원, RRULE 기반 반복일정, Indexed DB 캐싱을 통한 성능 최적화로 대규모 일정 데이터를 효율적으로 관리합니다. FullCalendar 기반의 직관적인 UI와 모바일 웹뷰 지원으로 크로스 플랫폼 협업 환경을 제공합니다.',
  keywords: [
    'flow 캘린더',
    '통합 일정관리',
    'Google Calendar 연동',
    'FullCalendar',
    '협업 캘린더',
    'RRULE 반복일정',
    '타임존 지원',
    'Indexed DB',
    '일정 동기화',
    'Java',
    'PostgreSQL',
    '모바일 웹뷰',
    '크로스플랫폼',
    'SaaS 캘린더',
  ],
  path: '/project/flow-calendar',
});

export default function FlowCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
