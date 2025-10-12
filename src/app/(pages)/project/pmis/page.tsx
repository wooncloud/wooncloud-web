import { Badge } from '@/components/ui/badge';
import pmis1 from '@/assets/images/project/pmis/pmis1.webp';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PmisMaintenancePage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">PMIS 건설사업관리시스템 유지보수</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>C#</Badge>
          <Badge>ASP.NET WebForms</Badge>
          <Badge>MS-SQL</Badge>
          <Badge>JavaScript</Badge>
          <Badge variant="outline">ASP</Badge>
          <Badge variant="outline">Visual Basic</Badge>
          <Badge variant="outline">jQuery</Badge>
          <Badge variant="outline">Infragistics</Badge>
        </div>
        <p className="text-muted-foreground">2019.03 - 2020.11</p>
        <div className="flex flex-col gap-4">
          <Image src={pmis1} alt="pmis1" width={1000} height={1000} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            기존 PMIS 건설사업관리 시스템의 안정성과 사용성을 향상시키기 위해 관리자 및 공문 모듈을 재구축하고 UI를 현대화한 유지보수 프로젝트입니다.
          </p>
          <p className="text-muted-foreground">
            건축사·시공사·발주처 등 여러 이해관계자가 사용하는 사업 관리 플랫폼으로, 프로젝트 개설부터 인력 투입, 전자결재, 공문 발행,
            다양한 업무 문서 양식을 제공하는 통합 시스템입니다. 사용자 역할별 권한과 결재 프로세스가 촘촘히 얽혀 있어 기능 간 안정성이
            무엇보다 중요한 환경이었습니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">담당 역할</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <span className="font-medium text-foreground">백엔드</span> — 관리자 시스템 기능, 공문 결재 프로세스, 휴가원·인사명령 처리 로직 재개발
            </li>
            <li>
              <span className="font-medium text-foreground">프론트엔드</span> — 관리자 UI, 휴가원 및 인사명령 화면 개편, 레거시 플래시 제거
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">업무 범위</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>
              잦은 오류와 하드코딩으로 서버가 불안정했던 기존 코드를 리팩토링하고 예외 처리를 보강해 다운타임을 크게 줄였습니다. 부족했던
              관리자 기능을 확장해 사용자 요청에 유연하게 대응할 수 있게 하였으며, 공문 결재 흐름을 휴가원·인사명령 등 실제 업무 절차에 맞게
              재설계했습니다.
            </p>
            <p>
              플래시로 구현되었던 UI는 Canvas 기반으로 교체해 보안과 호환성 문제를 해결했고, 재물관리 등 부가 시스템을 추가 개발해 운영 효율을
              높였습니다. 또한 자동화 도구와 FAQ 페이지를 도입해 반복 문의를 줄이고 고객 대응 시간을 단축했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기여</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>상시 발생하던 오류를 제거하고 FAQ·자동화 기능을 도입해 문의 대응 시간을 절감</li>
            <li>공문·로그·서명·인감·팝업·설문 등 관리자 페이지를 구축하여 운영 업무 효율화</li>
            <li>공문 시스템을 재설계해 휴가원·인사명령 처리 프로세스와 화면을 사용자 중심으로 개선</li>
            <li>플래시 기반 요소를 canvas 애니메이션으로 대체하고 재물관리 등 부가 시스템을 추가 개발</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">참고 링크</h3>
          <div className="flex flex-wrap gap-2">
            <Link 
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://www.itm.co.kr/upload/main/icis.mp4" 
              target="_blank" 
              rel="noreferrer">
              참고 시연 영상
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
