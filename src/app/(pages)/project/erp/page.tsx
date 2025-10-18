'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import itmERP1 from '@/assets/images/project/erp/itmerp1.webp';
import itmERP2 from '@/assets/images/project/erp/itmerp2.webp';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';

export default function ErpIntranetSystemPage() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const images = [
    { src: itmERP1, alt: 'itmERP1' },
    { src: itmERP2, alt: 'itmERP2' },
  ];
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">ERP 시스템 개발 (회사 내부 인트라넷)</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>C#</Badge>
          <Badge>ASP.NET WebForms</Badge>
          <Badge>MS-SQL</Badge>
          <Badge>JavaScript</Badge>
          <Badge variant="outline">Visual Studio</Badge>
          <Badge variant="outline">jQuery</Badge>
          <Badge variant="outline">Infragistics</Badge>
        </div>
        <p className="text-muted-foreground">2019.05 - 2019.10</p>
        <div className="space-y-2">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <div className="text-center text-sm text-muted-foreground">
            ({current} / {count})
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            사내 인사·프로젝트·경력 관리를 통합하는 ERP 인트라넷 시스템을 구축하며 백엔드와 프론트엔드 전반을 담당했습니다.
          </p>
          <p className="text-muted-foreground">
            기존 MS Access 기반으로 운영되던 내부 시스템의 제약과 불편을 해결하기 위해 착수한 프로젝트로, PM 1명과 개발자
            2명으로 구성된 팀에서 백엔드와 프론트엔드를 모두 책임졌습니다. 인사·프로젝트·경력 관리 전반의 업무 흐름을 재정비하고,
            REST API부터 화면 설계까지 일관된 구조를 마련했습니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">담당 역할</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <span className="font-medium text-foreground">백엔드</span> — 인사관리, 프로젝트, 경력관리 컨트롤러 개발과 복잡한 쿼리 작성, REST
              API, 파일 업로드 및 엑셀 데이터 추출 기능 구현
            </li>
            <li>
              <span className="font-medium text-foreground">프론트엔드</span> — UI 컨셉 설계, HTML/CSS 템플릿 구축, Infragistics 데이터 바인딩과
              시각화, 각종 증명서 출력 문서화 작업 수행
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">업무 범위</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>
              인사관리 모듈에서는 인사명령, 휴가, 인사 정보 관리 등 인사팀 업무를 자동화했고, 프로젝트 관리 모듈은 진행/발주/완료
              상태와 투입 인력·기간·비용을 추적할 수 있도록 구성했습니다. 경력 관리 모듈은 기술자 현황과 발주 대응 자료를 즉시
              확인할 수 있게 데이터를 중앙화했습니다.
            </p>
            <p>
              복잡한 데이터를 다루기 위해 컨트롤러와 쿼리를 직접 작성하고 저장 프로시저를 설계해 일괄 처리와 조건 검색을 구현했으며,
              각 화면에는 CRUD, Validation, 파일 업로드, 페이징, 엑셀·PDF 추출 기능을 제공했습니다.
            </p>
            <p>
              또한 D3.js 기반 그래프로 KPI를 시각화하고, 퍼블리셔 없이 전체 레이아웃과 디자인 컨셉을 정의해 사용자 경험을 개선했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기여</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>ASP.NET WebForms 기반 컨트롤러와 저장 프로시저를 통해 대량 데이터 입력·삭제 및 조건 검색 기능 지원</li>
            <li>사내 디자인 가이드에 맞춘 HTML/CSS 레이아웃과 재사용 가능한 컴포넌트 템플릿 설계</li>
            <li>Infragistics 프레임워크와 외부 API를 활용해 표·그래프 등 업무 데이터를 직관적으로 시각화</li>
            <li>문서 업로드/다운로드와 엑셀 추출 파이프라인을 구축해 인사·프로젝트 관리 효율 극대화</li>
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
