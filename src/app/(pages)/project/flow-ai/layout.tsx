import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'flow AI/LLM 서버 개발 | OpenAI Function Calling & Node.js',
  description:
    'OpenAI GPT-4 기반 협업 지능화 시스템입니다. Function Calling과 Few-shot Prompting으로 업무 검색 및 프로젝트 템플릿 자동 생성을 구현했습니다. Node.js + Express로 독립적인 LLM 서버를 구축하고 Java 백엔드와 연동하여 실시간 AI 응답을 제공합니다. PostgreSQL 기반 사용자 인터랙션 로그 분석으로 AI 품질을 지속적으로 개선하고 있습니다.',
  keywords: [
    'flow AI',
    'OpenAI GPT-4',
    'Function Calling',
    'Few-shot Prompting',
    'LLM 서버',
    'Node.js',
    'Express',
    'AI 업무 검색',
    '템플릿 생성',
    'Java 연동',
    'PostgreSQL',
    'AI 로그 분석',
    '협업 AI',
    'SaaS AI',
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
