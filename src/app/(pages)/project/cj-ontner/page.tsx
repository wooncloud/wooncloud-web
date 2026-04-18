import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "CJ 온트너 (CJ Onstyle Partner) 플로우 커스텀 | 엔터프라이즈 커머스 플랫폼",
  description:
    "CJ ENM 커머스의 엔터프라이즈 사업을 위한 플로우 커스텀 플랫폼 프로젝트입니다. 개발비 2억 원 이상 · 연간 운영 계약 4천만 원 규모로 진행되었으며, CJ와 인플루언서, 팔로워, 사업자 간 소통을 위한 파트너스 플랫폼을 구축했습니다. 서버 개발 및 PL로 참여하여 Artillery 부하 테스트 기반 병목 개선과 백오피스 자체 구축 등 운영 전반을 주도했습니다.",
  keywords: [
    "CJ 온트너",
    "CJ Onstyle Partner",
    "CJ ENM",
    "엔터프라이즈 SaaS",
    "인플루언서 플랫폼",
    "플로우 커스텀",
    "부하 테스트",
    "Artillery",
    "PL",
    "백오피스",
    "Next.js",
    "SvelteKit",
    "MongoDB",
    "PostgreSQL",
    "Node.js",
    "Express",
  ],
  path: "/project/cj-ontner",
});

export default function CjOntnerProjectPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">
        CJ 온트너 (CJ Onstyle Partner) 플로우 커스텀
      </h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>Java</Badge>
          <Badge>JavaScript</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>MongoDB</Badge>
          <Badge>jQuery</Badge>
          <Badge>Jex Framework</Badge>
          <Badge>Node.js</Badge>
          <Badge>Express</Badge>
          <Badge>SvelteKit</Badge>
          <Badge>Next.js</Badge>
          <Badge variant="secondary">Artillery</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">~ 2026.04.21</p>
          <p className="text-muted-foreground">
            마드라스체크(주) · SaaS 개발부 · 서버 개발 / PL
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              CJ ENM 커머스의 엔터프라이즈급 사업을 위해 기존 플로우(flow)를
              커스텀하여{" "}
              <strong className="text-foreground">
                CJ 온트너(CJ Onstyle Partner) 전용 플랫폼
              </strong>
              으로 구축한 프로젝트입니다. 개발비{" "}
              <strong className="text-foreground">2억 원 이상</strong>, 연간
              운영 계약 <strong className="text-foreground">4천만 원</strong>{" "}
              규모로 진행되었으며, 유입되는 인플루언서와 팔로워가 늘어날수록
              수익이 확장되는 구조의 사업 모델입니다.
            </p>
            <p>
              CJ와 인플루언서, 인플루언서와 팔로워, 사업자와 인플루언서 간의{" "}
              <strong className="text-foreground">
                커뮤니케이션 및 사업 협의
              </strong>
              를 위한 파트너스 플랫폼 역할을 하도록 플로우를 확장했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">담당 역할</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <span className="font-medium text-foreground">
                서버 · 프론트엔드 풀스택 개발
              </span>{" "}
              — 온트너 도메인 전반의 백엔드 API와 프론트엔드 화면을 함께 설계·
              구현하여 일관된 사용자 경험 제공
            </li>
            <li>
              <span className="font-medium text-foreground">
                PL (Project Lead)
              </span>{" "}
              — 양사 담당자와의 직접 미팅을 통한 요구사항 정의, 일정 조율,
              리스크 관리 등 프로젝트 전반을 리딩
            </li>
            <li>
              <span className="font-medium text-foreground">
                운영 백오피스 구축
              </span>{" "}
              — 온트너 사업 관리용 백오피스를 Next.js 기반으로 직접 설계·개발
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 업무</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong className="text-foreground">
                온트너 플랫폼 연동 API 개발
              </strong>{" "}
              — CJ 온트너 플랫폼과 플로우를 연결하는 인터페이스 설계 및 구현.
              회원 인증, 프로필 동기화, 이벤트 웹훅 등 양방향 데이터 흐름 구성
            </li>
            <li>
              <strong className="text-foreground">
                온트너 회원 전용 프로젝트/채팅방 구현
              </strong>{" "}
              — CJ와 인플루언서, 팔로워, 사업자 간 소통 목적에 맞춰 전용 프로젝트
              공간과 실시간 채팅방을 커스텀 구현하여 사용자 유형별 맞춤 협업 환경
              제공
            </li>
            <li>
              <strong className="text-foreground">
                온트너 모바일 앱 연동 API 개발
              </strong>{" "}
              — 온트너 앱 클라이언트 개발을 지원하기 위한 전용 REST API 설계·
              문서화 및 OAuth 기반 인증 플로우 구축
            </li>
            <li>
              <strong className="text-foreground">
                개인정보 보호 커스텀 개발
              </strong>{" "}
              — 인플루언서와 팔로워 간 상호작용 과정에서 발생할 수 있는 개인정보
              유출을 방지하기 위해 식별자 마스킹, 권한별 노출 정책, 데이터 접근
              제어 등 보안 레이어 커스텀 구현
            </li>
            <li>
              <strong className="text-foreground">
                운영 백오피스 자체 구축
              </strong>{" "}
              — Next.js 기반 관리자 시스템을 직접 설계·개발하여 회원, 프로젝트,
              콘텐츠, 사업자 현황을 통합 관리할 수 있는 운영 환경 마련
            </li>
            <li>
              <strong className="text-foreground">
                대규모 트래픽 대비 성능 개선
              </strong>{" "}
              — 인플루언서 유입으로 발생할 수 있는 트래픽 스파이크에 대응하기
              위해 Artillery로 시나리오 기반 부하 테스트를 수행하고, 병목이 되는
              쿼리·API를 식별해 인덱스·캐싱·로직 개선을 통한 응답 안정화
            </li>
            <li>
              <strong className="text-foreground">양사 간 협의 리딩</strong> —
              CJ ENM과 마드라스체크 사이의 요구사항·일정·기술 협의를 주도하여
              엔터프라이즈 계약에 걸맞은 품질과 속도를 확보
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong className="text-foreground">Java & Jex Framework:</strong>{" "}
              플로우 커스텀 확장을 위한 백엔드 API 개발
            </li>
            <li>
              <strong className="text-foreground">Node.js & Express:</strong>{" "}
              온트너 도메인 전용 서비스 레이어 구축
            </li>
            <li>
              <strong className="text-foreground">SvelteKit:</strong>{" "}
              인플루언서·파트너용 프런트엔드 화면 개발
            </li>
            <li>
              <strong className="text-foreground">Next.js:</strong> 온트너 사업
              운영을 위한 관리자 백오피스 구현
            </li>
            <li>
              <strong className="text-foreground">PostgreSQL & MongoDB:</strong>{" "}
              관계형 데이터와 비정형 커뮤니케이션 데이터를 목적에 맞게 분리 저장
            </li>
            <li>
              <strong className="text-foreground">Artillery:</strong> 시나리오
              기반 부하 테스트로 병목 지점 도출 및 개선
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
