import Link from 'next/link';
import Image from 'next/image';
import itm from '@/assets/images/experience/itm.webp';

export default function ItmCorpExperiencePage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">itm Corporation</h1>
      <Image src={itm} alt="itm Corporation" />
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">관리팀 / 솔루션 웹 개발자</h2>
          <p className="text-muted-foreground">2019.03.15. - 2020.11.20.</p>
          <p className="text-muted-foreground">
            ASP.NET 기반 PMIS 및 ERP 시스템의 신규 개발과 유지보수를 담당하며, 백엔드·프론트엔드 전반을 개발했습니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 업무</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>사내 ERP 시스템 개발 - 인사관리, 사업관리, 경력관리 등</li>
            <li>PMIS 건설사업관리 시스템 유지보수 및 어드민 페이지 개발</li>
            <li>이전 구버전 PMIS에서 UI 현대화 작업 및 크로스 플랫폼을 위한 PMIS 신규 개발</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">관련 프로젝트</h3>
          <ul className="space-y-1 text-muted-foreground list-disc pl-6">
            <li>
              <Link className="underline-offset-4 hover:underline" href="/project/erp">
                사내 ERP 시스템 개발
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/project/pmis">
                PMIS 건설사업관리시스템 유지보수
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/project/pmis-new">
                PMIS 건설사업관리시스템 신규 개발
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
