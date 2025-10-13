import { Badge } from '@/components/ui/badge';

export default function FlowPlanProjectPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">플랜</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
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
            Flow 협업툴의 요금제 및 플랜 관리 시스템을 개발했습니다.
            다양한 요금제 옵션과 사용자 권한 관리를 통해 고객의 니즈에 맞는 유연한 서비스를 제공하고,
            결제 시스템과의 통합을 통해 원활한 구독 관리 환경을 구축했습니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기술 스택</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Java 기반 플랜 관리 및 결제 연동 API 개발</li>
            <li>PostgreSQL을 활용한 플랜별 사용자 권한 및 제약 관리</li>
            <li>jQuery 기반 플랜 선택 및 업그레이드 UI 구현</li>
            <li>구독 관리, 자동 결제, 플랜 변경 이력 추적 시스템</li>
            <li>Jex Framework 기반 엔터프라이즈 아키텍처 구현</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
