import { Badge } from '@/components/ui/badge';

export default function FlowAiProjectPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">플로우 AI / LLM 서버 개발</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>OpenAI</Badge>
          <Badge>Node.js</Badge>
          <Badge>Express</Badge>
          <Badge>Java</Badge>
          <Badge>JavaScript</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>jQuery</Badge>
          <Badge>Jex Framework</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">마드라스체크(주) · Flow SaaS 협업툴</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            Flow 협업툴에 AI 기능을 통합하여 사용자 경험을 혁신했습니다.
            OpenAI API를 활용한 LLM 서버를 Node.js로 구축하고, 기존 Java 백엔드와의 효율적인 통합을 구현했습니다.
            자연어 처리를 통한 스마트한 업무 지원 기능을 제공합니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기술 스택</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>OpenAI API를 활용한 LLM 기반 AI 기능 구현</li>
            <li>Node.js와 Express를 이용한 AI 서버 개발</li>
            <li>Java 백엔드와 Node.js AI 서버 간 효율적인 통신 아키텍처 설계</li>
            <li>PostgreSQL을 활용한 AI 학습 데이터 및 사용자 컨텍스트 관리</li>
            <li>프론트엔드와의 실시간 AI 응답 처리 구현</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
