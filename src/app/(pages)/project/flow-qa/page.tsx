import { Badge } from '@/components/ui/badge';
import flowMain from '@/assets/images/project/flow/main.webp';
import Image from 'next/image';

export default function FlowQaProjectPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">그 외 어드민, 파트너 시스템, 웹소켓 및 플로우 전반적인 유지보수</h1>
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
          <Image src={flowMain} alt="flowMain" width={1000} height={1000} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            협업툴 flow의 다양한 부가 기능과 시스템 전반의 유지보수를 담당했습니다.
            어드민 시스템, 파트너 관리 시스템, 실시간 웹소켓 통신 등의 개발 및 개선을 수행하고,
            버그 수정, 성능 최적화, 기능 개선을 통해 서비스의 안정성과 사용자 만족도를 높였습니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 업무</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>어드민 시스템: 운영 관리 기능 개발 및 UI/UX 개선</li>
            <li>파트너 시스템: 파트너사 관리 및 연동 API 개발</li>
            <li>웹소켓: 실시간 알림, 메시징, 협업 기능을 위한 웹소켓 서버 구축 및 최적화</li>
            <li>유지보수: 버그 수정, 성능 개선, 코드 리팩토링, 기술 부채 해소</li>
            <li>PostgreSQL 쿼리 최적화 및 데이터베이스 성능 튜닝</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
