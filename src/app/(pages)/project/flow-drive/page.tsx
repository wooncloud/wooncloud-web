import ProjectPageShell from "@/components/ProjectPageShell";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "flow 드라이브 개발 | 엔터프라이즈 파일관리·문서 미리보기·전문검색 SaaS",
  description:
    "협업툴 flow에 통합되는 엔터프라이즈 파일 관리 제품(드라이브)을 약 1개월간 풀스택 개발 주도한 프로젝트입니다. 모든 문서·동영상을 브라우저에서 미리보고 검색하는 경험을, 외부 시스템 무변경 제약 속에서 어댑터 기반 아키텍처로 설계해 미리보기·검색·버전관리·임베드까지 안정적으로 통합했습니다.",
  keywords: [
    "flow 드라이브",
    "엔터프라이즈 파일관리",
    "파일 미리보기",
    "Synap 뷰어",
    "동영상 트랜스코딩",
    "PostgreSQL 전문검색",
    "pg_trgm",
    "파일 버전관리",
    "임베드 SDK",
    "멀티테넌시",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "AWS S3",
    "Redis",
    "BullMQ",
  ],
  path: "/project/flow-drive",
});

export default function FlowDriveProjectPage() {
  return (
    <ProjectPageShell
      title="플로우 드라이브 개발"
      tags={[
        "TypeScript",
        "React",
        "Vite",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redis",
        "AWS S3",
        "BullMQ",
      ]}
      period="2026.05.27 - 2026.06.25"
      company="마드라스체크(주) · SaaS 개발부 · 풀스택 개발 주도"
    >
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">프로젝트 배경</h3>
        <div className="text-muted-foreground space-y-3">
          <p>
            이미 운영 중인 협업툴 flow에{" "}
            <strong className="text-foreground">
              엔터프라이즈 파일 관리 제품(드라이브)
            </strong>
            을 통합하는 프로젝트입니다. 워크스페이스 파일 첨부·미리보기, 외부
            페이지 임베드용 파일 선택(File Picker) SDK, 정책 기반 권한,
            한·영·일·스페인어 다국어를 목표로 했습니다.
          </p>
          <p>
            가장 큰 제약은 기능이 아니라 정책이었습니다 —{" "}
            <strong className="text-foreground">
              기존 레거시 백엔드(WAS)는 한 줄도 변경하지 않고
            </strong>{" "}
            게이트웨이 호출과 postMessage 프로토콜로만 통합해야 했습니다. 이
            제약이 모든 통합 지점을 명시적인 계약으로 만들도록 강제했고, 결과적으로
            결합도가 낮은 설계로 이어졌습니다.
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">주요 기능 구현</h3>
        <div className="text-muted-foreground space-y-3">
          <p>
            <strong className="text-foreground">미리보기 통일.</strong> 포맷마다
            제각각이던 클라이언트 렌더러를 외부 문서 변환 뷰어(Synap)로 통일하고,
            변환·조회 실패 시 네이티브 폴백을 두었습니다. 모바일 웹뷰에서 원본
            저장(long-press)을 차단해야 하는 보안 요구가 이 선택을 이끌었습니다.
          </p>
          <p>
            <strong className="text-foreground">동영상 재생.</strong> 아이폰
            HEVC/.MOV처럼 브라우저가 디코드하지 못하는 코덱은 ffprobe로 판별해
            비호환 파일만 H.264로 서버 트랜스코딩하고, 첫 프레임을 포스터로 추출해
            그리드 썸네일까지 복구했습니다.
          </p>
          <p>
            <strong className="text-foreground">썸네일 사전 생성.</strong>{" "}
            모바일에서 무겁던 office·PDF 썸네일을 클라이언트 풀파싱에서 서버 사전
            생성(동영상 poster와 평행한 BullMQ 워커)으로 옮겨 목록과 함께 즉시
            뜨도록 구현하고, 미설정 환경에서는 클라이언트 렌더로 폴백하게 했습니다.
          </p>
          <p>
            <strong className="text-foreground">전문 검색.</strong> 별도 검색
            엔진 없이 PostgreSQL 전문검색(FTS)과 trigram(pg_trgm) 하이브리드로
            한국어 부분 검색까지 지원하고, 접근 권한은 RECURSIVE CTE로 일괄
            필터링했습니다.
          </p>
          <p>
            <strong className="text-foreground">파일 버전관리.</strong> 최신본과
            과거 버전을 분리하는 head/history 모델로, 기존 읽기 경로 코드를 바꾸지
            않고 버전 히스토리를 구현해 회귀 위험을 제거했습니다.
          </p>
          <p>
            <strong className="text-foreground">임베드 SDK.</strong> postMessage
            프로토콜과 티켓 기반 SSO로 외부 페이지에 파일 선택기(File Picker)와
            파일함을 임베드하고, 내 드라이브와 동일한 멀티셀렉·드래그 이동·일괄
            작업 UX를 그대로 제공했습니다.
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">프로젝트 성과</h3>
        <div className="text-muted-foreground space-y-3">
          <p>
            <strong className="text-foreground">약 1개월</strong>이라는 짧은
            기간에 미리보기·검색·버전관리·임베드·멀티테넌시를 아우르는 제품을
            풀스택으로 구축하며, 속도만큼이나 안정성을 중요하게 다뤘습니다.
          </p>
          <p>
            핵심은 스토리지(로컬↔S3)·검색·큐를 어댑터로 격리해 의존성 하나가
            빠져도 동기 폴백·클라이언트 렌더 폴백으로{" "}
            <strong className="text-foreground">graceful하게 동작</strong>하도록
            설계한 것입니다. 덕분에 외부 시스템(WAS) 무변경 제약 속에서도 기능을
            점진적으로 통합하고 기능 플래그로 안전하게 롤아웃할 수 있었습니다.
          </p>
          <p>
            운영 측면에서는 사용자 오류 제보를 분류·재현·수정까지 잇는 처리
            파이프라인을 구축해 피드백 루프를 자동화했습니다.
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li>
            <strong className="text-foreground">TypeScript 풀스택:</strong> 프론트
            React 18 + Vite, 백엔드 Node.js + Express를 빌드 산출물 없이 네이티브
            type-stripping으로 직접 실행
          </li>
          <li>
            <strong className="text-foreground">데이터:</strong> PostgreSQL 단일
            풀 + raw SQL 레포 레이어(ORM 미사용), GENERATED tsvector·GIN 인덱스
            기반 검색
          </li>
          <li>
            <strong className="text-foreground">스토리지:</strong> AWS S3(presigned
            URL) ↔ 로컬 디스크 자동 분기 어댑터
          </li>
          <li>
            <strong className="text-foreground">비동기 처리:</strong> Redis +
            BullMQ 기반 텍스트 추출·동영상 트랜스코딩·썸네일 생성 워커(미가용 시
            동기 폴백)
          </li>
          <li>
            <strong className="text-foreground">보안·운영:</strong> 정책 기반 권한,
            멀티테넌시, 전수 감사 로깅, 환경별 어댑터 구성
          </li>
        </ul>
      </div>
    </ProjectPageShell>
  );
}
