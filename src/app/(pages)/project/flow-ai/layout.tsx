import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow AI - LLM 서버 프로젝트',
  description:
    'flow SaaS 서비스의 AI 기능을 담당하는 LLM 서버 프로젝트입니다. Node.js, TypeScript, OpenAI API를 활용하여 실시간 AI 응답 처리 시스템을 구축했습니다.',
  keywords: [
    'flow AI',
    'LLM',
    'OpenAI',
    'AI 서버',
    'Node.js',
    'TypeScript',
    '인공지능',
    'GPT',
  ],
  path: '/project/flow-ai',
});

export default function flowAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
