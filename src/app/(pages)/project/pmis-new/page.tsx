import { Badge } from '@/components/ui/badge';
import pmis2 from '@/assets/images/project/pmis-new/pmis2.webp';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PmisNewDevelopmentPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">PMIS 건설사업관리시스템 신규 개발</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>C#</Badge>
          <Badge>ASP.NET MVC</Badge>
          <Badge>MS-SQL</Badge>
          <Badge>JavaScript</Badge>
          <Badge variant="outline">jQuery</Badge>
          <Badge variant="outline">Infragistics</Badge>
        </div>
        <p className="text-muted-foreground">2020.04 - 2020.11</p>
        <div className="flex flex-col gap-4">
          <Image src={pmis2} alt="pmis2" width={1000} height={1000} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            차세대 PMIS 시스템 구축을 위해 기존 서비스를 분석하고 요구사항 및 데이터 구조를 재정의하며 UI/UX 방향성을 수립한 프로젝트입니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">담당 역할</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <span className="font-medium text-foreground">프론트엔드</span> — UI/UX와 레이아웃 디자인 컨셉 설계, Bootstrap4 기반 테마 커스터마이징
            </li>
            <li>
              <span className="font-medium text-foreground">백엔드</span> — 기존 시스템 분석, 요구사항 정의, 데이터베이스 테이블 정의서 작성
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기여</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>레거시 시스템을 정밀 분석해 신규 PMIS 구축을 위한 기능 요구사항과 사용자 플로우를 정리</li>
            <li>부트스트랩4 기반 유료 CSS 프레임워크를 커스터마이징해 현업 친화적인 UI 가이드라인 수립</li>
            <li>데이터베이스 테이블을 재설계하고 정의서를 작성해 향후 개발 단계의 기준을 마련</li>
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
