import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AnimalCareProjectPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">동물병원 예약 시스템</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>Java 11</Badge>
          <Badge>Spring Framework 4.3</Badge>
          <Badge>Apache Tomcat 8.5</Badge>
          <Badge>Oracle Database 11g</Badge>
          <Badge>MyBatis</Badge>
          <Badge>jQuery</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">2021.07.02 - 2021.08.06</p>
          <p className="text-muted-foreground">구디아카데미 · 개발 및 프로젝트 매니저 · 5인 협업</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            사용자·병원 관계자·관리자 3가지 유스케이스를 설계해 예약, 결제, 진료 관리까지 통합 제공하는 동물병원 예약 시스템을
            Spring Framework 기반으로 구축했습니다. 프로젝트 설계와 공통 모듈, 화면 구조, 형상·데이터베이스 관리를 총괄하며 PM 역할을
            수행했습니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">담당 역할</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>시스템 아키텍처 설계, 공통 모듈 및 화면 레이아웃 템플릿 구축</li>
            <li>로그인·회원 관리, 권한 처리, 예약/결제 흐름 등 핵심 비즈니스 로직 개발</li>
            <li>형상 관리, DB 스키마 설계와 운영, 협업 도구(Slack/Notion/GitHub) 운영</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">업무 범위</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              사용자: 반려동물 등록, 병원 예약 및 결제, 진료 결과 확인 등 케어 전 과정을 관리할 수 있도록 유스케이스 설계
            </li>
            <li>
              병원 관계자: 일정·예약 관리와 만족도 설문 분석을 통해 서비스 니즈를 파악할 수 있는 관리 화면 구현
            </li>
            <li>
              관리자: 병원·회원·컨텐츠 관리 기능과 모니터링 대시보드를 제공해 운영 효율 향상
            </li>
            <li>
              Filter/AOP/Interceptor를 활용해 로그, 예외 처리, 트랜잭션, 권한 등 공통 관심사를 모듈화
            </li>
            <li>
              Oracle DB와 MyBatis 기반으로 Dynamic Query, OCP 구조를 적용해 확장 가능한 데이터 계층 구현
            </li>
            <li>
              jQuery Ajax, SweetAlert2, Toast Editor, Calendar, Billboard.js, I&apos;mport, Kakao Map/주소, jTree 등 라이브러리를
              활용한 사용자 친화적 UI/UX 구현
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 문서</h3>
          <div className="flex flex-wrap gap-2">
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://docs.google.com/presentation/d/1JmCzvVMhP2Tbe_ICLakQBPeML2yS50rIDLIBc2zuRFw/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              프로젝트 발표 PPT
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://github.com/wooncloud/animalcare"
              target="_blank"
              rel="noreferrer"
            >
              GitHub 레포지토리
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://www.notion.so/f3d6b610bbdb40d49bdc3c608baf243e?pvs=21"
              target="_blank"
              rel="noreferrer"
            >
              프로젝트 아키텍처
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://www.notion.so/5ee91a6edaa24bfe90a20bac364bae11?pvs=21"
              target="_blank"
              rel="noreferrer"
            >
              개발 표준 정의서
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://docs.google.com/document/d/16124ZbV_380DrzetiUFVqnpBuYltu99G4pPFp4hzY64/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              요구분석서
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://docs.google.com/presentation/d/12vmyEEe1XwouCh1yZLkd-SMYTABBWUimrJWy76MZuP0/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              시나리오 작성
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://docs.google.com/presentation/d/15gKnlrKf_TG0kc2E9nzRu1hApr6HXll6k1XOJubkxHc/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              UI/UX 문서
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://docs.google.com/spreadsheets/d/1-1IxanJA8WPOOMKxqml67BidmpgE9G0OQNzdDUbndiM/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              FBS / WBS
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://www.notion.so/0a6b3c1f3a384721ab6c1e0e6c025e33?pvs=21"
              target="_blank"
              rel="noreferrer"
            >
              ERD
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
