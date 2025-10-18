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
          <p className="text-muted-foreground">2021.10.12 - 현재</p>
          <p className="text-muted-foreground">마드라스체크(주) · SaaS 개발부</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image src={flowMain} alt="flowMain" width={1000} height={1000} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              협업툴 flow의 지속적인 운영과 개선을 담당하며 서비스의 안정성과 사용자 만족도를 높이는 역할을 수행했습니다.
            </p>
            <p>
              AWS SES 이메일 시스템, 퇴사자 관리 어드민, flow partner 시스템, 알림·댓글 필터, Google Analytics 사용자 분석, 
              실시간 모니터링 구축 등 <strong className="text-foreground">다양한 부가 기능을 개발</strong>했습니다.
            </p>
            <p>
              Scouter, Datadog, Grafana를 활용한 모니터링으로 빠른 장애 대응 체계를 구축하고,
              PostgreSQL 쿼리 최적화를 통해 서비스 성능을 지속적으로 개선했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 업무</h3>
          <ul className="space-y-3 text-muted-foreground list-disc pl-6">
            <li>
              <span className="font-medium text-foreground">이메일 시스템:</span> AWS SES를 활용한 이메일 발송 시스템 개발
              <span className="block text-sm mt-1 opacity-70">2022. 07. 18 - 2022. 07. 27</span>
            </li>
            <li>
              <span className="font-medium text-foreground">퇴사자 관리:</span> 관리자가 퇴사자의 데이터를 관리할 수 있는 어드민 시스템 개발
              <span className="block text-sm mt-1 opacity-70">2023. 07. 13 - 2023. 08. 07</span>
            </li>
            <li>
              <span className="font-medium text-foreground">파트너 시스템 개발:</span> 플로우를 홍보하는 flow partner 시스템 개발
              <span className="block text-sm mt-1 opacity-70">2024. 07. 25 - 2024. 08. 23</span>
            </li>
            <li>
              <span className="font-medium text-foreground">알림 개선:</span> 알림 필터 개발
              <span className="block text-sm mt-1 opacity-70">2024. 05. 16 - 2024. 05. 24</span>
            </li>
            <li>
              <span className="font-medium text-foreground">댓글 필터:</span> 댓글 필터 개발
              <span className="block text-sm mt-1 opacity-70">2024. 04. 29 - 2024. 05. 14</span>
            </li>
            <li>
              <span className="font-medium text-foreground">유지보수:</span> 버그 수정, 성능 개선, 코드 리팩토링, 기술 부채 해소
              <span className="block text-sm mt-1 opacity-70">지속적인 유지보수</span>
            </li>
            <li>
              <span className="font-medium text-foreground">모니터링:</span> 사내 모니터링 화면 구축 및 스카우터, 데이터독, 그라파나 등 모니터링 도구를 활용한 지속적인 서비스 모니터링을 통한 빠른 장애 대응
              <span className="block text-sm mt-1 opacity-70">지속적인 유지보수</span>
            </li>
            <li>
              <span className="font-medium text-foreground">사용자 분석:</span> 서비스 내 GA 구축, GA를 통한 사용자 분석 및 통계 시스템 개발
              <span className="block text-sm mt-1 opacity-70">2024. 07. 03 - 2024. 07. 24</span>
            </li>
            <li>
              <span className="font-medium text-foreground">데이터베이스:</span> PostgreSQL 쿼리 최적화 및 데이터베이스 성능 튜닝
              <span className="block text-sm mt-1 opacity-70">지속적인 유지보수</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
