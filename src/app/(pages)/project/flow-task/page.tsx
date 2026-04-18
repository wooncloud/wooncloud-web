import { Badge } from "@/components/ui/badge";
import ImageCarousel from "@/components/ImageCarousel";
import flowTask from "@/assets/images/project/flow/task.webp";
import flowGantt from "@/assets/images/project/flow/gantt.webp";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "flow 업무·간트차트 리뉴얼 프로젝트 | Preact 기반 SaaS 개발",
  description:
    "협업툴 flow의 업무 관리 시스템을 Preact로 전면 리뉴얼한 프로젝트입니다. 커스텀 컬럼, 다중 하위업무, 커스텀 상태 관리 등 유연한 기능을 제공하여 다양한 업종의 업무 프로세스를 지원합니다. WebSocket 실시간 동기화와 Dnd Kit 기반 직관적인 UX로 생산성을 향상시켰습니다.",
  keywords: [
    "flow 업무관리",
    "간트차트",
    "Preact",
    "SaaS",
    "협업툴",
    "프로젝트 관리 시스템",
    "WebSocket",
    "실시간 동기화",
    "Dnd Kit",
    "Signal 상태관리",
    "Java",
    "PostgreSQL",
    "커스텀 워크플로우",
    "업무 자동화",
    "NPM 패키지",
  ],
  path: "/project/flow-task",
});

const images = [
  { src: flowTask, alt: "flow 업무 대시보드 - 커스텀 컬럼과 다중 하위업무" },
  { src: flowGantt, alt: "flow 간트차트 - 프로젝트 일정 시각화" },
];

export default function FlowTaskProjectPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">업무, 간트차트 리뉴얼 개발</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>Preact</Badge>
          <Badge>Java</Badge>
          <Badge>JavaScript</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>jQuery</Badge>
          <Badge>Jex Framework</Badge>
          <Badge>WebSocket</Badge>
          <Badge>Dnd Kit</Badge>
          <Badge>Artillery</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">2025.03.21 - 현재</p>
          <p className="text-muted-foreground">
            마드라스체크(주) · SaaS 개발부
          </p>
        </div>
        <ImageCarousel images={images} />
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 배경</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              협업툴 flow의 사용자들은 제조, 유통, 서비스 등 다양한 업종에서
              활동하며, 각 업종마다 고유한 업무 프로세스를 가지고 있습니다.
              그러나 기존 업무 시스템은 고정된 상태 값, 단일 하위업무, 제한적인
              컬럼 구조로 인해 사용자들이 불편함을 느끼고 있었습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">문제 해결</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              이러한 한계를 극복하기 위해{" "}
              <strong className="text-foreground">
                커스텀 컬럼, 다중 하위업무, 커스텀 상태 관리
              </strong>{" "}
              등 유연한 구조를 지원하는 업무 시스템으로 전면 리뉴얼했습니다.
              동시에 jQuery 기반 레거시 코드를 Preact로 마이그레이션하여 성능과
              유지보수성을 크게 개선했습니다.
            </p>
            <p>
              서비스의 핵심 기능인만큼 대규모 코드 변경과 데이터 마이그레이션
              작업은 높은 리스크를 동반했지만, 체계적인 테스트와 단계적 배포를
              통해{" "}
              <strong className="text-foreground">
                장애 없이 성공적으로 오픈
              </strong>
              했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 성과</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              리뉴얼 이후 사용자들은 각자의 업종과 조직에 최적화된 방식으로
              업무를 관리할 수 있게 되었으며, 이는{" "}
              <strong className="text-foreground">
                상위 플랜으로의 업셀링 증가
              </strong>
              로 직접적인 비즈니스 성과를 창출했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong className="text-foreground">Preact + Signal:</strong>{" "}
              React 대비 가벼운 번들 크기와 효율적인 상태 관리로 프론트엔드 성능
              최적화
            </li>
            <li>
              <strong className="text-foreground">Java & Jex Framework:</strong>{" "}
              안정적인 백엔드 API 개발 및 PostgreSQL 기반 복잡한 데이터 쿼리
              처리
            </li>
            <li>
              <strong className="text-foreground">Dnd Kit:</strong> 직관적인
              드래그 앤 드롭 인터페이스로 업무 관리 UX 개선
            </li>
            <li>
              <strong className="text-foreground">모듈 패키지화:</strong> NPM
              패키지로 배포하여 웹뷰 및 다른 애플리케이션에서 재사용 가능한 구조
              구축
            </li>
            <li>
              <strong className="text-foreground">
                WebSocket 실시간 동기화:
              </strong>{" "}
              프로젝트 설정 변경사항을 실시간으로 모든 사용자에게 반영
            </li>
            <li>
              <strong className="text-foreground">
                Artillery 부하 테스트:
              </strong>{" "}
              대규모 트래픽 환경에서의 시스템 안정성 검증
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
