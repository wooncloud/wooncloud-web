import ProjectPageShell from "@/components/ProjectPageShell";
import ImageCarousel from "@/components/ImageCarousel";
import flowAi1 from "@/assets/images/project/flow/ai1.webp";
import flowAi2 from "@/assets/images/project/flow/ai2.webp";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "flow AI/LLM 서버 개발 | OpenAI Function Calling & Node.js",
  description:
    "OpenAI GPT-4 기반 협업 지능화 시스템입니다. Function Calling과 Few-shot Prompting으로 업무 검색 및 프로젝트 템플릿 자동 생성을 구현했습니다. Node.js + Express로 독립적인 LLM 서버를 구축하고 Java 백엔드와 연동하여 실시간 AI 응답을 제공합니다. PostgreSQL 기반 사용자 인터랙션 로그 분석으로 AI 품질을 지속적으로 개선하고 있습니다.",
  keywords: [
    "flow AI",
    "OpenAI GPT-4",
    "Function Calling",
    "Few-shot Prompting",
    "LLM 서버",
    "Node.js",
    "Express",
    "AI 업무 검색",
    "템플릿 생성",
    "Java 연동",
    "PostgreSQL",
    "AI 로그 분석",
    "협업 AI",
    "SaaS AI",
  ],
  path: "/project/flow-ai",
});

const images = [
  { src: flowAi1, alt: "flow AI 업무 검색 - 자연어 입력으로 업무 필터링" },
  { src: flowAi2, alt: "flow AI 프로젝트 템플릿 자동 생성 화면" },
];

export default function FlowAiProjectPage() {
  return (
    <ProjectPageShell
      title="플로우 AI / LLM 서버 개발"
      tags={[
        "OpenAI",
        "Node.js",
        "Express",
        "Java",
        "JavaScript",
        "PostgreSQL",
        "jQuery",
        "Jex Framework",
      ]}
      period="2024.01.22 - 2024.04.05"
      company="마드라스체크(주) · SaaS 개발부"
    >
      <ImageCarousel images={images} />
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 배경</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              협업툴 flow의 사용자들이 업무 검색, 프로젝트 구조 설계 등에서
              <strong className="text-foreground">
                {" "}
                AI의 창작과 생산성을 활용한 지원
              </strong>
              을 받을 수 있도록 AI 기능을 개발했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기능</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">AI 업무 검색:</strong> OpenAI
              API(GPT-4 → GPT-4o)와 Function Calling, Structured Output을
              활용하여 자연어로 업무를 검색하고 필터링할 수 있습니다.
            </p>
            <p>
              <strong className="text-foreground">
                프로젝트 템플릿 자동 생성:
              </strong>{" "}
              Few-shot Prompting 기법으로 사용자 요구사항에 맞는 프로젝트 구조를
              자동으로 생성합니다.
            </p>
            <p>
              <strong className="text-foreground">중간 LLM 서버:</strong>{" "}
              Node.js + Express로 OpenAI API를 받아 flow WAS로 전달하는 중간
              서버를 구축하여 유연한 확장이 가능한 아키텍처를 구성했습니다.
            </p>
            <p>
              사용자의 AI 사용 로그를 PostgreSQL에 저장하고 분석하여 AI 응답
              품질을 지속적으로 개선하고 있습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong className="text-foreground">OpenAI API:</strong> GPT-4,
              GPT-4o를 활용한 Function Calling, Structured Output, Few-shot
              Prompting 구현
            </li>
            <li>
              <strong className="text-foreground">Node.js & Express:</strong>{" "}
              OpenAI API와 flow WAS 간 중간 서버 역할 수행
            </li>
            <li>
              <strong className="text-foreground">Java 연동:</strong> flow WAS
              백엔드와 Node.js AI 서버 간 RESTful API 통신
            </li>
            <li>
              <strong className="text-foreground">PostgreSQL:</strong> AI 사용
              로그 저장 및 인터랙션 데이터 분석
            </li>
            <li>
              <strong className="text-foreground">Frontend Integration:</strong>{" "}
              jQuery 기반 실시간 AI 응답 처리 및 스트리밍 UI
            </li>
        </ul>
      </div>
    </ProjectPageShell>
  );
}
