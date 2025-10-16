import Image from 'next/image';
import madrascheck from '@/assets/images/experience/madrascheck.webp';
import flow1 from '@/assets/images/experience/flow.webp';
import flow2 from '@/assets/images/experience/flow2.webp';

export default function MadrasCheckExperiencePage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">마드라스체크</h1>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <Image src={madrascheck} alt="마드라스체크" height={50} />
        <Image src={flow1} alt="플로우 화면 1" height={50} />
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">SaaS 서비스 풀스택 개발자</h2>
          <p className="text-muted-foreground">2021.10.12. - 현재</p>
          <p className="text-muted-foreground">
            협업툴 플로우(flow) SaaS 서비스의 기능 개발과 모니터링 및 장애 대응 등 안정적인 운영을 담당하며 제품 가치 향상에 기여하고 있습니다.
          </p>
          <p className="text-muted-foreground">
            업무, 캘린더, 파일·로그인 보안, AI/LLM 서버, 웹소켓 기반 실시간 처리, 마스터 어드민, 공지·배너, 플랜, 각종 어드민과 파트너 시스템 등 서비스 전반을 책임지고 있습니다.
          </p>
        </div>
        <Image src={flow2} alt="플로우 화면 2" />
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 업무</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>플로우 SaaS 서비스의 신규 기능 기획·개발 및 기존 모듈 개선</li>
            <li>웹·모바일 클라이언트와 백엔드 간 연동 구조 설계 및 API 품질 관리</li>
            <li>운영 환경에서 발견되는 이슈 대응 및 서비스 성능·안정성 모니터링</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">담당 및 참여 프로젝트</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li><span className="font-semibold text-foreground">
              </span> 업무 모듈 및 간트차트 리뉴얼 개발
            </li>
            <li><span className="font-semibold text-foreground">
              </span> 업무 기능 웹소켓 실시간 처리 개발
            </li>
            <li><span className="font-semibold text-foreground">
              </span> 플로우 캘린더 설계 및 주도 개발
            </li>
            <li><span className="font-semibold text-foreground">
              </span> 플로우 AI 및 LLM 서버 개발
            </li>
            <li><span className="font-semibold text-foreground">
              </span> 파일 보안·로그인 보안 개발
            </li>
            <li><span className="font-semibold text-foreground">
              </span> 서비스 플랜 및 과금 정책 개발 및 개선
            </li>
            <li><span className="font-semibold text-foreground">
              </span> 마스터 어드민 운영 도구 개발
            </li>
            <li><span className="font-semibold text-foreground">
              </span> 공지·배너 콘텐츠 관리 기능 구축
            </li>
            <li><span className="font-semibold text-foreground">
              </span> 파트너 시스템, 기타 어드민 등 플로우 전반 유지보수
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
