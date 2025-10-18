'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import tele1 from '@/assets/images/project/tele/tele1.webp';
import tele2 from '@/assets/images/project/tele/tele2.webp';
import tele3 from '@/assets/images/project/tele/tele3.webp';
import tele4 from '@/assets/images/project/tele/tele4.webp';
import tele5 from '@/assets/images/project/tele/tele5.webp';
import tele6 from '@/assets/images/project/tele/tele6.webp';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';

export default function TelepresenceSocialVRPage() {
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
    { src: tele1, alt: '텔레프레젠스 소셜 VR 시연 화면 1' },
    { src: tele2, alt: '텔레프레젠스 소셜 VR 시연 화면 2' },
    { src: tele3, alt: '텔레프레젠스 소셜 VR 시연 화면 3' },
    { src: tele4, alt: '텔레프레젠스 소셜 VR 시연 화면 4' },
    { src: tele5, alt: '텔레프레젠스 소셜 VR 시연 화면 5' },
    { src: tele6, alt: '텔레프레젠스 소셜 VR 시연 화면 6' },
  ];
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">텔레프레젠스 소셜 VR</h1>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>Unity</Badge>
          <Badge>C#</Badge>
          <Badge>.NET</Badge>
          <Badge>Visual Studio</Badge>
          <Badge>VIVE VR</Badge>
        </div>
        <p className="text-muted-foreground">2017.11 - 2018.12 (1년 2개월)</p>
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
            국가과제형 텔레프레젠스 소셜 VR 프로젝트에 참여해 내부 콘텐츠와 인터랙션 UI를 구축하며 핵심 사용자 경험을 설계했습니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">담당 역할</h3>
          <p className="text-muted-foreground">내부 콘텐츠 개발 및 인터랙션 UI 개발</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 기여</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>프로젝트 참여를 위해 채용되어 초기 프로토타입부터 운영 협업까지 전 과정에 기여</li>
            <li>사용자 행동 기반으로 반응하는 인터랙션 UI 설계 및 구현</li>
            <li>VR 컨트롤러와 헤드셋의 위치·각도 데이터를 활용한 상호작용 알고리즘 개발 및 특허 출원</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
