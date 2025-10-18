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
          <p className="text-muted-foreground">2023.01.25 - 2023.04.19</p>
          <p className="text-muted-foreground">마드라스체크(주) · SaaS 개발부</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image src={flowSecurity1} alt="flowSecurity1" width={1000} height={1000} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 배경</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              B2B SaaS 서비스를 이용하는 기관들로부터 정보 보안 강화에 대한 요구가 있었습니다.
              각 기관마다 자체적인 보안 정책이 있었고, 이를 협업툴에도 적용할 수 있는 기능이 필요했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기능</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">파일 보안</strong>: PC와 모바일 각 환경에서 파일 다운로드, 조회 등에 대한 정책을 설정할 수 있도록 했습니다.
              IP 화이트리스트와 사용자 화이트리스트를 통해 접근 제어를 구현했습니다.
            </p>
            <p>
              <strong className="text-foreground">로그인 보안</strong>: PC와 모바일 환경별로 로그인 정책을 지정할 수 있으며,
              IP 화이트리스트, 사용자 화이트리스트 등을 통해 보안을 강화했습니다.
            </p>
            <p>
              <strong className="text-foreground">감사 로깅</strong>: 관리자 변경 이력과 파일 다운로드 이력 등을 PostgreSQL에 기록하여
              보안사고 발생 시 추적과 대응이 가능한 체계를 구축했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li><strong className="text-foreground">Java Security Filter:</strong> Jex Framework 기반 Servlet Filter를 통한 로그인 보안 검증</li>
            <li><strong className="text-foreground">IP 기반 접근 제어:</strong> 화이트리스트 방식의 IP 필터링 및 환경별 정책 관리</li>
            <li><strong className="text-foreground">PostgreSQL 감사 로그:</strong> 사용자 권한, 파일 다운로드 이력, 관리자 변경 이력 등 접근 로그 기록</li>
            <li><strong className="text-foreground">Frontend UI:</strong> JavaScript, jQuery를 활용한 파일 보안 및 로그인 보안 설정 화면 구현</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
