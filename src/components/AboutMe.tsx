import Image from "next/image";
import me1 from "@/assets/images/aboutme/am1.webp";

export default function AboutMe() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
      <div className="md:h-full">
        <Image
          src={me1}
          alt="me1"
          className="w-full h-auto md:h-full md:object-cover md:object-left"
        />
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p className="text-base font-semibold text-foreground">
          VR/게임 클라이언트에서 출발해 엔터프라이즈 웹과 대형 SaaS까지 넓혀온
          경력 8년+ 풀스택 개발자 우성호입니다.
        </p>
        <div className="space-y-3">
          <p>
            현재는 협업툴{" "}
            <strong className="font-semibold text-foreground">
              flow(마드라스체크)
            </strong>
            에서 React·TypeScript 프론트엔드부터 Java·Node.js 백엔드, PostgreSQL
            데이터 계층까지 아우르며 업무·캘린더·파일 드라이브·AI/LLM·파일보안 등
            제품 전반을 개발하고 있습니다.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Unity·VR 시뮬레이션 → ASP.NET 기반 PMIS·ERP → 대형 협업 SaaS(flow)
            </strong>
            로 이어지며 실감형·엔터프라이즈·SaaS를 모두 경험했고, 그 폭이 새로운
            도메인을 빠르게 이해하고 사업성까지 함께 보는 시야로 이어졌습니다.
          </p>
          <p>
            복잡한 기능을 정리하고 동일 기능을 더 나은 품질로 마이그레이션하는
            과정에서도{" "}
            <strong className="font-semibold text-foreground">
              우선순위를 명확히 하여 끝까지 마무리
            </strong>
            합니다. 새로운 기술은 먼저 실험해 보고 경험을 정리해 팀에 공유하며,
            팀의 생산성을 높이는 도구와 모니터링 환경을 직접 만드는{" "}
            <strong className="font-semibold text-foreground">
              학습형 개발자
            </strong>
            입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
