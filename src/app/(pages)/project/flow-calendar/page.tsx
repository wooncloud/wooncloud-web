import { Badge } from '@/components/ui/badge';
import flowCalendar from '@/assets/images/project/flow/calendar.webp';
import Image from 'next/image';

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
          <Badge>FullCalendar</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">2024.12.01 - 2025.03.21</p>
          <p className="text-muted-foreground">마드라스체크(주) · SaaS 개발부</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image src={flowCalendar} alt="flowCalendar" width={1000} height={1000} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 배경</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              기존 flow 캘린더는 각 프로젝트에 종속되어 있어, 사용자가 일정을 확인하거나 수정하려면 해당 프로젝트에 직접 접근해야 하는 구조적 한계가 있었습니다.
              이는 <strong className="text-foreground">일정이 여러 프로젝트에 분산</strong>되어 있을 때 전체 스케줄 파악이 어렵고, 업무 효율성을 저하시키는 주요 원인이었습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기능</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              이를 해결하기 위해 <strong className="text-foreground">개인 캘린더와 프로젝트 캘린더를 통합</strong>한 새로운 캘린더 시스템을 설계하고 개발했습니다.
              Google Calendar, Notion Calendar와 유사한 UX를 제공하며, 개인 캘린더 생성, 팀원과의 공유, 참여자 초대 등의 협업 기능을 구현했습니다.
            </p>
            <p>
              타임존 지원, 반복일정(RRULE 표준), 알림 설정 등 실무에 필수적인 기능들을 제공했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">성능 최적화</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              수십 개의 캘린더를 구독하고 방대한 일정 데이터를 다루는 환경에서도 원활한 사용 경험을 제공하기 위해
              <strong className="text-foreground"> 백엔드 병렬 스레드 처리, 페이징, 쿼리 최적화</strong>를 적용했습니다.
              또한 Indexed DB를 활용한 클라이언트 캐싱으로 데이터 조회 속도를 대폭 향상시켰으며, 모바일 웹뷰 최적화를 통해 크로스 플랫폼 지원을 완성했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li><strong className="text-foreground">Java & Jex Framework:</strong> 병렬 스레드 처리 및 대용량 일정 데이터 핸들링을 위한 백엔드 아키텍처 설계</li>
            <li><strong className="text-foreground">PostgreSQL 최적화:</strong> 복잡한 일정 쿼리 및 RRULE 처리를 위한 데이터베이스 스키마 설계 및 인덱싱</li>
            <li><strong className="text-foreground">FullCalendar Library:</strong> 직관적인 일정 관리 UI 및 드래그 앤 드롭 기반 일정 조정 기능</li>
            <li><strong className="text-foreground">Indexed DB 캐싱:</strong> 클라이언트 사이드 데이터 캐싱으로 반복 조회 성능 향상</li>
            <li><strong className="text-foreground">모바일 웹뷰 최적화:</strong> 반응형 디자인 및 터치 인터랙션 지원</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
