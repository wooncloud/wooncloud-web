'use client';

import { Badge } from '@/components/ui/badge';
import flowTask from '@/assets/images/project/flow/task.webp';
import flowGantt from '@/assets/images/project/flow/gantt.webp';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';

export default function FlowTaskProjectPage() {
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
    { src: flowTask, alt: 'flowTask' },
    { src: flowGantt, alt: 'flowGantt' },
  ];
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">업무, 간트차트 리뉴얼 개발</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>Preact</Badge>
          <Badge>Java</Badge>
          <Badge>JavaScript</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>jQuery</Badge>
          <Badge>Jex Framework</Badge>
          <Badge>WebSocket</Badge>
          <Badge>Dnd Kit</Badge>
          <Badge>Artillery</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">2025.03.21 - 현재</p>
          <p className="text-muted-foreground">마드라스체크(주) · SaaS 개발부</p>
        </div>
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
          <h3 className="text-lg font-semibold">프로젝트 배경</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              협업툴 flow의 사용자들은 제조, 유통, 서비스 등 다양한 업종에서 활동하며, 각 업종마다 고유한 업무 프로세스를 가지고 있습니다.
              그러나 기존 업무 시스템은 고정된 상태 값, 단일 하위업무, 제한적인 컬럼 구조로 인해 사용자들이 불편함을 느끼고 있었습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">문제 해결</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              이러한 한계를 극복하기 위해 <strong className="text-foreground">커스텀 컬럼, 다중 하위업무, 커스텀 상태 관리</strong> 등 유연한 구조를 지원하는 업무 시스템으로 전면 리뉴얼했습니다.
              동시에 jQuery 기반 레거시 코드를 Preact로 마이그레이션하여 성능과 유지보수성을 크게 개선했습니다.
            </p>
            <p>
              서비스의 핵심 기능인만큼 대규모 코드 변경과 데이터 마이그레이션 작업은 높은 리스크를 동반했지만,
              체계적인 테스트와 단계적 배포를 통해 <strong className="text-foreground">장애 없이 성공적으로 오픈</strong>했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">프로젝트 성과</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              리뉴얼 이후 사용자들은 각자의 업종과 조직에 최적화된 방식으로 업무를 관리할 수 있게 되었으며,
              이는 <strong className="text-foreground">상위 플랜으로의 업셀링 증가</strong>로 직접적인 비즈니스 성과를 창출했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li><strong className="text-foreground">Preact + Signal:</strong> React 대비 가벼운 번들 크기와 효율적인 상태 관리로 프론트엔드 성능 최적화</li>
            <li><strong className="text-foreground">Java & Jex Framework:</strong> 안정적인 백엔드 API 개발 및 PostgreSQL 기반 복잡한 데이터 쿼리 처리</li>
            <li><strong className="text-foreground">Dnd Kit:</strong> 직관적인 드래그 앤 드롭 인터페이스로 업무 관리 UX 개선</li>
            <li><strong className="text-foreground">모듈 패키지화:</strong> NPM 패키지로 배포하여 웹뷰 및 다른 애플리케이션에서 재사용 가능한 구조 구축</li>
            <li><strong className="text-foreground">WebSocket 실시간 동기화:</strong> 프로젝트 설정 변경사항을 실시간으로 모든 사용자에게 반영</li>
            <li><strong className="text-foreground">Artillery 부하 테스트:</strong> 대규모 트래픽 환경에서의 시스템 안정성 검증</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
