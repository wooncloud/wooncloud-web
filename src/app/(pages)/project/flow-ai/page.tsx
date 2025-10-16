import { Badge } from '@/components/ui/badge';
import flowAi1 from '@/assets/images/project/flow/ai1.webp';
import flowAi2 from '@/assets/images/project/flow/ai2.webp';
import Image from 'next/image';

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
          <p className="text-muted-foreground">마드라스체크(주) · SaaS 개발부</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image src={flowAi1} alt="flowAi1" width={1000} height={1000} />
          <Image src={flowAi2} alt="flowAi2" width={1000} height={1000} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            <p>협업툴 플로우에서 AI를 이용하여 기능 고도화를 진행했습니다.</p>
            <p>AI를 활용한 업무 검색 및 프로젝트 템플릿 생성 등 Function Calling과 디테일한 퓨샷 프롬프팅을 통해 구현했습니다.</p>
            <p>OpenAI API를 활용한 LLM 서버를 Node.js, Express로 개발하고, 기존 Java 백엔드인 flow WAS 서버와 데이터 통신을 구현했습니다.</p>
            <p>사용자의 AI 사용 로그를 PostgreSQL에 저장하여 분석 및 활용함으로서 AI 서비스의 품질을 향상시키고 있습니다.</p>
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기술 스택</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>OpenAI API를 활용한 퓨샷 프롬프팅 개발</li>
            <li>Node.js와 Express를 이용한 LLM AI 서버 개발</li>
            <li>Java 백엔드와 Node.js AI 서버 간 데이터 통신 구현</li>
            <li>프론트엔드와의 실시간 AI 응답 처리 구현</li>
            <li>PostgreSQL을 활용한 AI 사용 로그 관리</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
