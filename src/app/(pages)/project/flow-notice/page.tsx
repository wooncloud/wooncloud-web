import { Badge } from "@/components/ui/badge";
import ImageCarousel from "@/components/ImageCarousel";
import flowNotice1 from "@/assets/images/project/flow/notice1.webp";
import flowNotice2 from "@/assets/images/project/flow/notice2.webp";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "flow 공지·배너 관리 시스템 | 타겟팅 & 다국어 지원",
  description:
    "글로벌 SaaS를 위한 정교한 공지사항 및 배너 관리 시스템입니다. 환경, 플랜, 기업, 사용자 유형별 타겟팅과 국가별 다국어 콘텐츠 지원으로 맞춤형 정보 전달이 가능합니다. 타임존 기반 예약 게시 기능으로 각국 사용자에게 최적의 시간에 공지를 노출하여 중요한 업데이트와 이벤트를 효율적으로 전달합니다.",
  keywords: [
    "flow 공지",
    "배너 관리",
    "타겟팅",
    "다국어 지원",
    "타임존",
    "예약 게시",
    "Java",
    "PostgreSQL",
    "공지사항 시스템",
    "SaaS 마케팅",
    "사용자 세분화",
  ],
  path: "/project/flow-notice",
});

const images = [
  { src: flowNotice1, alt: "flowNotice1" },
  { src: flowNotice2, alt: "flowNotice2" },
];

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
          <p className="text-muted-foreground">2021.11.10 - 2022.01.05</p>
          <p className="text-muted-foreground">
            마드라스체크(주) · SaaS 개발부
          </p>
        </div>
        <ImageCarousel images={images} />
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 배경</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              flow 운영에 중요한 업데이트와 이벤트를 효율적으로 전달하기
              위해서는
              <strong className="text-foreground">
                {" "}
                사용자 세분화와 다국어 지원이 가능한 공지 시스템
              </strong>
              이 필요했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기능</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">정교한 타겟팅:</strong> 환경,
              플랜, 기업, 사용자 유형 등 다양한 조건으로 공지 대상을 세분화할 수
              있습니다.
            </p>
            <p>
              <strong className="text-foreground">다국어 콘텐츠:</strong>{" "}
              국가별로 다른 공지 이미지와 텍스트를 작성하여 현지화된 정보를
              제공합니다.
            </p>
            <p>
              <strong className="text-foreground">타임존 기반 예약:</strong> 각
              국가의 타임존에 맞춰 예약된 시간에 공지를 자동으로 게시합니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong className="text-foreground">Java & Jex Framework:</strong>{" "}
              공지사항 및 배너 관리 API 개발
            </li>
            <li>
              <strong className="text-foreground">PostgreSQL:</strong> 공지
              데이터, 노출 이력, 타겟팅 조건 관리
            </li>
            <li>
              <strong className="text-foreground">Frontend UI:</strong> jQuery
              기반 동적 배너 및 공지사항 표시 UI 구현
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
