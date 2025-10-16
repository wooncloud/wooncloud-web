import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'itm Corporation 경력',
  description:
    'itm Corporation에서 솔루션 웹 개발자로 근무하며 ASP.NET 기반 PMIS 및 ERP 시스템 개발을 담당했습니다. 건설사업관리 시스템과 사내 ERP 인트라넷 개발 경험을 쌓았습니다.',
  keywords: [
    'itm Corporation',
    'PMIS',
    'ERP',
    'ASP.NET',
    '건설사업관리',
    '웹 개발자',
    '경력',
  ],
  path: '/experience/itmcorp',
});

export default function ItmCorpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
