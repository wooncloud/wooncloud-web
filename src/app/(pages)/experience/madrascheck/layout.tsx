import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: '마드라스체크 경력',
  description:
    '마드라스체크에서 SaaS 풀스택 개발자로 근무하며 협업툴 플로우(flow) 개발을 담당하고 있습니다. 업무 모듈, 캘린더, AI/LLM 서버, 보안 기능 등을 개발했습니다.',
  keywords: [
    '마드라스체크',
    'flow',
    '플로우',
    'SaaS',
    '협업툴',
    '경력',
    '풀스택 개발자',
    'AI',
    'LLM',
  ],
  path: '/experience/madrascheck',
});

export default function MadrasCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
