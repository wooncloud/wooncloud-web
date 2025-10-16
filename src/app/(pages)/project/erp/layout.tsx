import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'ERP 시스템 프로젝트',
  description:
    'ASP.NET 기반 회사 내부 ERP 인트라넷 시스템 개발 프로젝트입니다. 인사, 프로젝트, 경력 관리를 통합하는 시스템을 구축했습니다.',
  keywords: [
    'ERP',
    '인트라넷',
    'ASP.NET',
    'C#',
    'MS-SQL',
    '프로젝트',
    '인사관리',
  ],
  path: '/project/erp',
});

export default function ErpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
