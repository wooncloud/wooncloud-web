'use client';

import { Badge } from '@/components/ui/badge';
import flowNotice1 from '@/assets/images/project/flow/notice1.webp';
import flowNotice2 from '@/assets/images/project/flow/notice2.webp';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';

export default function FlowNoticeProjectPage() {
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
    { src: flowNotice1, alt: 'flowNotice1' },
    { src: flowNotice2, alt: 'flowNotice2' },
  ];
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
              flow 운영에 중요한 업데이트와 이벤트를 효율적으로 전달하기 위해서는
              <strong className="text-foreground"> 사용자 세분화와 다국어 지원이 가능한 공지 시스템</strong>이 필요했습니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기능</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">정교한 타겟팅:</strong> 환경, 플랜, 기업, 사용자 유형 등 다양한 조건으로 공지 대상을 세분화할 수 있습니다.
            </p>
            <p>
              <strong className="text-foreground">다국어 콘텐츠:</strong> 국가별로 다른 공지 이미지와 텍스트를 작성하여 현지화된 정보를 제공합니다.
            </p>
            <p>
              <strong className="text-foreground">타임존 기반 예약:</strong> 각 국가의 타임존에 맞춰 예약된 시간에 공지를 자동으로 게시합니다.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">핵심 기술 및 구현</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li><strong className="text-foreground">Java & Jex Framework:</strong> 공지사항 및 배너 관리 API 개발</li>
            <li><strong className="text-foreground">PostgreSQL:</strong> 공지 데이터, 노출 이력, 타겟팅 조건 관리</li>
            <li><strong className="text-foreground">Frontend UI:</strong> jQuery 기반 동적 배너 및 공지사항 표시 UI 구현</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
