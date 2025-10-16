import { Badge } from '@/components/ui/badge';
import flowTask from '@/assets/images/project/flow/task.webp';
import flowGantt from '@/assets/images/project/flow/gantt.webp';
import Image from 'next/image';

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
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">마드라스체크(주) · SaaS 개발부</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image src={flowTask} alt="flowTask" width={1000} height={1000} />
          <Image src={flowGantt} alt="flowGantt" width={1000} height={1000} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            Flow 협업툴의 업무 관리 및 간트차트 기능을 Preact 기반으로 전면 리뉴얼하여 성능과 사용자 경험을 개선했습니다.
            복잡한 프로젝트 일정 관리와 실시간 협업 기능을 지원하며, Java 백엔드와의 효율적인 데이터 통신을 구현했습니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기술 스택</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Preact를 활용한 경량 컴포넌트 기반 프론트엔드 개발</li>
            <li>Java 기반 백엔드 API 개발 및 PostgreSQL 데이터베이스 설계</li>
            <li>간트차트 라이브러리를 활용한 시각적 프로젝트 일정 관리</li>
            <li>jQuery 기반 레거시 코드와의 통합 및 마이그레이션</li>
            <li>Jex Framework 기반 엔터프라이즈 아키텍처 구현</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
