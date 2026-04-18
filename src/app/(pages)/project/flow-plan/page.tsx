import ProjectPageShell from "@/components/ProjectPageShell";
import ImageCarousel from "@/components/ImageCarousel";
import flowPlan1 from "@/assets/images/project/flow/plan1.webp";
import flowPlan2 from "@/assets/images/project/flow/plan2.webp";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "flow 플랜 관리 시스템 개발 | SaaS 구독 및 과금 정책",
  description:
    "유연한 SaaS 비즈니스 모델을 지원하는 플랜 관리 시스템입니다. 기존 단일 플랜 구조의 한계를 극복하고 다양한 요금제를 생성할 수 있는 시스템을 구축했습니다. 플랜별 기능 제한, 사용자 권한 매칭, 구독 관리, 자동 결제, 플랜 변경 이력 추적 기능을 통해 고객 맞춤형 서비스를 제공하고 유연한 정책 변경이 가능합니다.",
  keywords: [
    "flow 플랜",
    "SaaS 요금제",
    "구독 관리",
    "과금 정책",
    "플랜 매칭",
    "기능 제한",
    "자동 결제",
    "Java",
    "PostgreSQL",
    "사용자 권한",
    "정책 변경",
    "구독 모델",
  ],
  path: "/project/flow-plan",
});

const images = [
  { src: flowPlan1, alt: "flow 플랜 선택 화면 - 요금제별 기능 비교" },
  { src: flowPlan2, alt: "flow 플랜 관리 어드민 - 플랜별 기능 매칭" },
];

export default function FlowPlanProjectPage() {
  return (
    <ProjectPageShell
      title="플랜"
      tags={["Java", "JavaScript", "PostgreSQL", "jQuery", "Jex Framework"]}
      period="2022.11.30 - 2023.01.06"
      company="마드라스체크(주) · SaaS 개발부"
    >
      <ImageCarousel images={images} />
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 배경</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              기존 협업툴 flow에는 유료와 무료로 구분되는 단일 플랜 구조만
              존재했습니다. 새로운 요금제가 생기더라도{" "}
              <strong className="text-foreground">
                요금제별 기능 제한을 동적으로 적용할 수 없는 구조적 한계
              </strong>
              가 있었고, 다양한 고객의 니즈에 맞춘 유연한 서비스 제공이
              어려웠습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">해결 방안</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              다양한 요금제를 생성하고 관리할 수 있는 플랜 시스템을
              구축했습니다.
              <strong className="text-foreground">
                {" "}
                플랜별로 제공되는 기능을 매칭
              </strong>
              하여 고객 맞춤형 서비스를 제공하고, 정책 변경이 필요할 때 유연하게
              대응할 수 있는 구조를 만들었습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong className="text-foreground">Java & Jex Framework:</strong>{" "}
              플랜 관리 및 결제 연동 API 개발
            </li>
            <li>
              <strong className="text-foreground">PostgreSQL:</strong> 플랜별
              사용자 권한 및 제약 조건 관리
            </li>
            <li>
              <strong className="text-foreground">구독 시스템:</strong> 구독
              관리, 자동 결제, 플랜 변경 이력 추적
            </li>
            <li>
              <strong className="text-foreground">Frontend UI:</strong> jQuery
              기반 플랜 선택 및 업그레이드 UI 구현
            </li>
        </ul>
      </div>
    </ProjectPageShell>
  );
}
