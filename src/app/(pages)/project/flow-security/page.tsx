import { Badge } from '@/components/ui/badge';
import flowSecurity1 from '@/assets/images/project/flow/security1.webp';
import Image from 'next/image';

export default function FlowSecurityProjectPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">파일보안 / 로그인 보안</h1>
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
          <Image src={flowSecurity1} alt="flowSecurity1" width={1000} height={1000} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            협업툴 flow의 보안 체계를 강화하여 파일 보안과 로그인 보안 기능을 구현했습니다.
            파일 암호화, 접근 권한 관리, 다단계 인증 등을 통해 기업 데이터를 안전하게 보호하고,
            보안 취약점을 최소화하여 신뢰할 수 있는 협업 환경을 제공합니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기술 스택</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Java 기반 파일 암호화 및 복호화 시스템 구현</li>
            <li>로그인 보안 강화: 다단계 인증, 세션 관리, IP 화이트리스트</li>
            <li>PostgreSQL을 활용한 사용자 권한 및 접근 로그 관리</li>
            <li>파일 다운로드/업로드 시 보안 검증 및 바이러스 스캔 통합</li>
            <li>보안 정책 관리 대시보드 및 이상 행위 탐지 시스템</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
