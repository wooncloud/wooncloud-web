import Link from 'next/link';
import Image from 'next/image';
import recruit1 from '@/assets/images/project/recruit/gdrs.webp';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function RecruitProjectPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">채용 시스템 개발</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>Java 11</Badge>
          <Badge>Spring Framework 4.3</Badge>
          <Badge>Apache Tomcat 8.5</Badge>
          <Badge>Oracle Database 11g</Badge>
          <Badge>MyBatis</Badge>
          <Badge>jQuery</Badge>
          <Badge>SweetAlert2</Badge>
          <Badge>Spring Security</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">2021.06.09 - 2021.07.01</p>
          <p className="text-muted-foreground">구디아카데미 · 개발 및 프로젝트 매니저 · 2인 협업</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image src={recruit1} alt="채용 시스템 화면 1" width={1200} height={675} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            채용 공고 작성부터 지원서 접수, 전형 결과 통보까지 전 과정을 관리할 수 있는 Spring 기반 채용 시스템을 2인 팀으로
            개발했습니다. 공고·지원서 모듈과 공통 서비스, 화면 구조, 형상·DB 관리 등 전반을 맡으며 PM으로 프로젝트를 주도했습니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">담당 역할</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>채용 공고 및 지원서 관리 모듈 설계·구현, 데이터 모델 정의</li>
            <li>공통 모듈 개발, 화면 구조 설계, 형상 관리 및 배포 프로세스 운영</li>
            <li>Spring Security 기반 인증/인가, OAuth 연동, 메일링 시스템 구축</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">업무 범위</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>관리자: 공고 작성·공개 여부 관리, 지원서 열람, 전형 단계 설정 및 결과 통보 기능 구현</li>
            <li>지원자: 공개된 공고 조회, 지원서 작성, 진행 현황 확인 등 셀프 서비스 흐름 구성</li>
            <li>Filter/AOP/Interceptor를 활용한 로그, 예외, 트랜잭션, 권한 처리를 통한 CCC 구현</li>
            <li>MyBatis Dynamic Query와 OCP 구조로 확장성 있는 데이터 접근 계층 설계</li>
            <li>jQuery Ajax, SweetAlert2 등으로 비동기 UI 제작 및 사용자 피드백 향상</li>
            <li>Notion, GitHub를 활용한 요구/이슈 관리와 협업 문화 정착</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 문서</h3>
          <div className="flex flex-wrap gap-2">
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://github.com/wooncloud/RecruitSystem"
              target="_blank"
              rel="noreferrer"
            >
              GitHub 레포지토리
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              href="https://docs.google.com/spreadsheets/d/1TL6tcw55ejTB-Z5TIbEg-FtgyHEJx2ul3L0grO86sDA/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              테이블 정의 및 쿼리 테스트
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
