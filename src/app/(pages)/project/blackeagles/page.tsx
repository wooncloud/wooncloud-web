'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import be1 from '@/assets/images/project/be/be1.webp';
import be2 from '@/assets/images/project/be/be2.webp';
import be3 from '@/assets/images/project/be/be3.webp';
import be4 from '@/assets/images/project/be/be4.webp';
import be5 from '@/assets/images/project/be/be5.webp';
import be6 from '@/assets/images/project/be/be6.webp';
import be7 from '@/assets/images/project/be/be7.webp';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';

export default function BlackEaglesVRSimulationPage() {
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
    { src: be1, alt: '블랙이글스 VR 시뮬레이션 화면 1' },
    { src: be2, alt: '블랙이글스 VR 시뮬레이션 화면 2' },
    { src: be3, alt: '블랙이글스 VR 시뮬레이션 화면 3' },
    { src: be4, alt: '블랙이글스 VR 시뮬레이션 화면 4' },
    { src: be5, alt: '블랙이글스 VR 시뮬레이션 화면 5' },
    { src: be6, alt: '블랙이글스 VR 시뮬레이션 화면 6' },
    { src: be7, alt: '블랙이글스 VR 시뮬레이션 화면 7' },
  ];
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">블랙이글스 - 어트랙션 체험 VR 시뮬레이션</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>C#</Badge>
          <Badge>Unity</Badge>
          <Badge>.NET</Badge>
          <Badge variant="secondary">VIVE VR</Badge>
          <Badge variant="secondary">Visual Studio</Badge>
          <Badge variant="secondary">Sym4d</Badge>
        </div>
        <p className="text-muted-foreground">2018.05 - 2018.10 (6개월)</p>
        <div className="w-full aspect-video">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/jw37Vd0hMY8?si=yU3C2ofM2oEdXsBe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
            Sym4d 어트랙션 하드웨어를 연동한 블랙이글스 체험형 VR 시뮬레이션을 구축하며 하드웨어 제어부터 콘텐츠 제작까지 전반을 이끈 프로젝트입니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">담당 역할</h3>
          <p className="text-muted-foreground">
            프로젝트 구축, 편집 툴 개발, 콘텐츠 개발, 하드웨어 연동 개발, 프로그램 시연 및 발표
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기여</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>어트랙션 하드웨어를 시뮬레이션과 동기화해 현실감 있는 비행 체험 구현</li>
            <li>Sym4d 하드웨어 SDK를 활용해 항공기 움직임과 플랫폼 모션을 정밀하게 매핑</li>
            <li>Bing 맵 데이터와 위성 이미지를 결합해 실제 지형과 지표를 모사한 환경 제작</li>
            <li>항공기 편대 편집 툴과 항로 편집 에셋을 활용해 제작 효율과 연출의 유연성 확보</li>
            <li>프로젝트 완료 후 전국 투어 시연과 발표를 통해 고객 체험 프로그램 운영</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
