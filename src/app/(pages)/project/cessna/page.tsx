'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import ses1 from '@/assets/images/project/ses/ses1.webp';
import ses2 from '@/assets/images/project/ses/ses2.webp';
import ses3 from '@/assets/images/project/ses/ses3.webp';
import ses4 from '@/assets/images/project/ses/ses4.webp';
import ses5 from '@/assets/images/project/ses/ses5.webp';
import ses6 from '@/assets/images/project/ses/ses6.webp';
import ses7 from '@/assets/images/project/ses/ses7.webp';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';

export default function KyungwoonCessnaMaintenanceSimPage() {
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
    { src: ses1, alt: '세스나 정비 훈련 시뮬레이션 장면 1' },
    { src: ses2, alt: '세스나 정비 훈련 시뮬레이션 장면 2' },
    { src: ses3, alt: '세스나 정비 훈련 시뮬레이션 장면 3' },
    { src: ses4, alt: '세스나 정비 훈련 시뮬레이션 장면 4' },
    { src: ses5, alt: '세스나 정비 훈련 시뮬레이션 장면 5' },
    { src: ses6, alt: '세스나 정비 훈련 시뮬레이션 장면 6' },
    { src: ses7, alt: '세스나 정비 훈련 시뮬레이션 장면 7' },
  ];
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">경운대학교 세스나 경량항공기 정비 훈련 시뮬레이션</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>C#</Badge>
          <Badge>Unity</Badge>
          <Badge>.NET</Badge>
          <Badge variant="secondary">Visual Studio</Badge>
          <Badge variant="secondary">VIVE VR</Badge>
        </div>
        <p className="text-muted-foreground">2018.10 - 2018.12 (3개월)</p>
        <div className="w-full aspect-video">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/J5uD6_XIzyw?si=YeN-pNUKCgvaZCXJ&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
          <h3 className="text-lg font-semibold">프로젝트 개요</h3>
          <p className="text-muted-foreground">
            경운대학교의 세스나 경량항공기 정비 훈련 과정을 가상현실로 전환해 학습 효율을 높이는 시뮬레이션 개발 프로젝트입니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">담당 역할</h3>
          <p className="text-muted-foreground">콘텐츠 개발</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기여</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>세스나 경량항공기 정비 훈련 시나리오를 VR 환경에 맞춰 재구성하고 구현</li>
            <li>60개 이상의 정비 절차 중 핵심 과정을 선별해 인터랙티브 학습 콘텐츠로 제작</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
