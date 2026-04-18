import ProjectPageShell from "@/components/ProjectPageShell";
import flowMaster from "@/assets/images/project/flow/master.webp";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "flow 마스터어드민 통합 개발 | CX팀 지원 시스템",
  description:
    "분산된 2개의 마스터어드민을 하나로 통합한 SaaS 운영 플랫폼입니다. 고객 및 기업 관리에 중점을 둔 CX팀 지원 시스템으로, 전체 시스템 모니터링, 사용자/조직 관리, 고객 지원, 시스템 설정 등 핵심 관리 기능을 제공합니다. 운영 효율성을 높이고 고객 응대 품질을 향상시켰습니다.",
  keywords: [
    "flow 마스터어드민",
    "CX 시스템",
    "고객 관리",
    "기업 관리",
    "관리자 시스템",
    "SaaS 운영",
    "Java",
    "PostgreSQL",
    "시스템 통합",
    "고객 지원",
  ],
  path: "/project/flow-master",
});

export default function FlowMasterProjectPage() {
  return (
    <ProjectPageShell
      title="마스터어드민"
      tags={["Java", "JavaScript", "PostgreSQL", "jQuery", "Jex Framework"]}
      period="2022.11.07 - 2022.11.29"
      company="마드라스체크(주) · SaaS 개발부"
    >
      <div className="flex flex-col gap-4">
        <Image src={flowMaster} alt="flowMaster" width={1000} height={1000} />
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">프로젝트 배경</h3>
        <div className="text-muted-foreground space-y-3">
          <p>
            협업툴 flow에는 각자 다른 기능을 가진 마스터어드민 2개가 분산되어
            운영되고 있었습니다. 관리자들이 시스템 관리를 위해 여러 어드민을
            오가야 하는 불편함이 있었고, 특히{" "}
            <strong className="text-foreground">
              CX팀의 고객 지원 업무 효율성이 저하
            </strong>
            되는 문제가 발생했습니다.
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">해결 방안</h3>
        <div className="text-muted-foreground space-y-3">
          <p>
            분산된 2개의 마스터어드민을 하나로 통합하고, 기존 기능을 모두
            유지하면서
            <strong className="text-foreground">
              {" "}
              고객 및 기업 관리 기능을 중점적으로 강화
            </strong>
            했습니다. CX팀과 고객 대응팀이 원활하게 고객 지원을 할 수 있는 통합
            관리 시스템을 구축했습니다.
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li>
            <strong className="text-foreground">Java & Jex Framework:</strong>{" "}
            통합 마스터 어드민 백엔드 API 개발
          </li>
          <li>
            <strong className="text-foreground">PostgreSQL 쿼리:</strong> 시스템
            전반의 데이터 및 고객·기업 정보 관리
          </li>
          <li>
            <strong className="text-foreground">Frontend UI:</strong> JavaScript,
            jQuery 기반 관리자 대시보드 및 통계 UI 구현
          </li>
        </ul>
      </div>
    </ProjectPageShell>
  );
}
