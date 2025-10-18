'use client';

import { Badge } from '@/components/ui/badge';
import flowPlan1 from '@/assets/images/project/flow/plan1.webp';
import flowPlan2 from '@/assets/images/project/flow/plan2.webp';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';

export default function FlowPlanProjectPage() {
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
    { src: flowPlan1, alt: 'flowPlan1' },
    { src: flowPlan2, alt: 'flowPlan2' },
  ];
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">플랜</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>Java</Badge>
          <Badge>JavaScript</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>jQuery</Badge>
          <Badge>Jex Framework</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">2022.11.30 - 2023.01.06</p>
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
              기존 협업툴 flow에는 유료와 무료로 구분되는 단일 플랜 구조만 존재했습니다.
              새로운 요금제가 생기더라도 <strong className="text-foreground">요금제별 기능 제한을 동적으로 적용할 수 없는 구조적 한계</strong>가 있었고,
              다양한 고객의 니즈에 맞춘 유연한 서비스 제공이 어려웠습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">해결 방안</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              다양한 요금제를 생성하고 관리할 수 있는 플랜 시스템을 구축했습니다.
              <strong className="text-foreground"> 플랜별로 제공되는 기능을 매칭</strong>하여 고객 맞춤형 서비스를 제공하고,
              정책 변경이 필요할 때 유연하게 대응할 수 있는 구조를 만들었습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li><strong className="text-foreground">Java & Jex Framework:</strong> 플랜 관리 및 결제 연동 API 개발</li>
            <li><strong className="text-foreground">PostgreSQL:</strong> 플랜별 사용자 권한 및 제약 조건 관리</li>
            <li><strong className="text-foreground">구독 시스템:</strong> 구독 관리, 자동 결제, 플랜 변경 이력 추적</li>
            <li><strong className="text-foreground">Frontend UI:</strong> jQuery 기반 플랜 선택 및 업그레이드 UI 구현</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
