import { Badge } from '@/components/ui/badge';
import flowMaster from '@/assets/images/project/flow/master.webp';
import Image from 'next/image';

export default function FlowMasterProjectPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">마스터어드민</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
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
          <Image src={flowMaster} alt="flowMaster" width={1000} height={1000} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            Flow 협업툴의 마스터 관리자 시스템을 개발했습니다.
            전체 시스템 모니터링, 사용자 관리, 조직 관리, 시스템 설정 등 핵심 관리 기능을 제공하여
            서비스 운영의 효율성을 높이고 안정적인 서비스 제공을 지원합니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기술 스택</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Java 기반 마스터 어드민 백엔드 API 개발</li>
            <li>PostgreSQL을 활용한 시스템 전반의 데이터 관리 및 분석</li>
            <li>jQuery 기반 관리자 대시보드 및 통계 UI 구현</li>
            <li>사용자/조직 관리, 권한 설정, 시스템 모니터링 기능</li>
            <li>로그 분석, 통계 리포트, 시스템 설정 관리 기능 구현</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
