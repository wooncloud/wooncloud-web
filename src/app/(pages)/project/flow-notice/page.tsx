import { Badge } from '@/components/ui/badge';
import flowNotice1 from '@/assets/images/project/flow/notice1.webp';
import flowNotice2 from '@/assets/images/project/flow/notice2.webp';
import Image from 'next/image';

export default function FlowNoticeProjectPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">공지, 배너</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>Java</Badge>
          <Badge>JavaScript</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>jQuery</Badge>
          <Badge>Jex Framework</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">마드라스체크(주) · SaaS 개발부</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image src={flowNotice1} alt="flowNotice1" width={1000} height={1000} />
          <Image src={flowNotice2} alt="flowNotice2" width={1000} height={1000} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            Flow 협업툴의 공지사항 및 배너 관리 시스템을 개발했습니다.
            효과적인 정보 전달을 위한 공지사항 작성/게시 기능과 배너 관리 기능을 구현하여,
            중요한 업데이트와 이벤트를 사용자에게 효율적으로 전달할 수 있는 환경을 구축했습니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기술 스택</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Java 기반 공지사항 및 배너 관리 API 개발</li>
            <li>PostgreSQL을 활용한 공지 데이터 및 노출 이력 관리</li>
            <li>jQuery 기반 동적 배너 및 공지사항 표시 UI 구현</li>
            <li>타겟팅 기능: 사용자 그룹별 맞춤 공지 및 배너 노출</li>
            <li>공지사항 에디터 및 미디어 첨부 기능 구현</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
