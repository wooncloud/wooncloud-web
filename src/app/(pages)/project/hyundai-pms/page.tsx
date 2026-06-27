import ProjectPageShell from "@/components/ProjectPageShell";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "현대자동차 PMS 개발 | 엔터프라이즈 프로젝트 관리 시스템",
  description:
    "현대자동차와 마드라스체크가 함께 추진하는 엔터프라이즈 PMS 구축 프로젝트입니다. 향후 마드라스체크의 PMS 사업 확장을 이끌 대형 전략 프로젝트이며, TypeScript · Next.js · NestJS · PostgreSQL 기반으로 개발 중입니다.",
  keywords: [
    "현대자동차",
    "현대차",
    "PMS",
    "프로젝트 관리 시스템",
    "엔터프라이즈",
    "TypeScript",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "pnpm",
  ],
  path: "/project/hyundai-pms",
});

export default function HyundaiPmsProjectPage() {
  return (
    <ProjectPageShell
      title="현대자동차 PMS 개발"
      tags={["TypeScript", "Next.js", "NestJS", "PostgreSQL", "pnpm"]}
      period="진행 중"
      company="마드라스체크(주) · SaaS 개발부 · 개발 참여"
    >
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              현대자동차와 마드라스체크가 함께 추진하는{" "}
              <strong className="text-foreground">
                엔터프라이즈 PMS(Project Management System)
              </strong>{" "}
              구축 프로젝트입니다. 향후 마드라스체크의 PMS 사업 확장을 이끌{" "}
              <strong className="text-foreground">
                대형 엔터프라이즈 전략 프로젝트
              </strong>
              의 시작점입니다.
            </p>
            <p>
              개발 참여 인원으로 합류하여 TypeScript와 Next.js 기반의 프론트엔드,
              NestJS 기반의 백엔드, PostgreSQL 데이터 계층을 아우르는 풀스택
              개발에 기여하고 있습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기술</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong className="text-foreground">TypeScript:</strong> 프론트엔드
              ·백엔드 전반의 타입 안정성 확보
            </li>
            <li>
              <strong className="text-foreground">Next.js:</strong> 엔터프라이즈
              환경에 적합한 SSR 기반 UI 구축
            </li>
            <li>
              <strong className="text-foreground">NestJS:</strong> 모듈화된
              아키텍처로 유지보수성 높은 백엔드 API 설계
            </li>
            <li>
              <strong className="text-foreground">PostgreSQL:</strong> 관계형
              데이터 설계 및 트랜잭션 기반 비즈니스 로직 지원
            </li>
            <li>
              <strong className="text-foreground">pnpm:</strong> 모노레포 친화적
              패키지 매니저로 의존성 효율화
            </li>
          </ul>
        </div>
    </ProjectPageShell>
  );
}
