import { Badge } from '@/components/ui/badge';

export default function FlowCalendarProjectPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">플로우 캘린더 개발</h1>
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
            Flow 협업툴의 캘린더 기능을 개발하여 팀 일정 관리와 협업 효율성을 향상시켰습니다.
            개인 및 팀 일정을 통합 관리하고, 실시간 동기화를 통해 원활한 협업 환경을 제공합니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기술 스택</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Java 기반 RESTful API 설계 및 개발</li>
            <li>PostgreSQL을 활용한 일정 데이터 관리 및 최적화</li>
            <li>jQuery 기반 동적 UI 인터랙션 구현</li>
            <li>캘린더 라이브러리를 활용한 직관적인 일정 관리 인터페이스</li>
            <li>Jex Framework 기반 엔터프라이즈 아키텍처 구현</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
