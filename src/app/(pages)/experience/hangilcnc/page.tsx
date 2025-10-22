import Link from 'next/link';
import Image from 'next/image';
import hangil from '@/assets/images/experience/hangil.webp';

export default function HangilCncExperiencePage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">한길씨앤씨</h1>
      <Image src={hangil} alt="한길씨앤씨" />
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">유니티 클라이언트 개발자</h2>
          <p className="text-muted-foreground">2017.11.01. - 2019.03.09.</p>
          <p className="text-muted-foreground">
            VR 시뮬레이션 &amp; 유니티를 이용한 시뮬레이션 개발을 담당하며 실감형 콘텐츠 제작 경험을 쌓았습니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 업무</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>텔레프레젠스 소셜 VR 프로젝트에서 내부 콘텐츠 개발 및 인터랙션 UI 설계와 구현</li>
            <li>블랙이글스 체험형 VR 시뮬레이션 구축, 어트랙션 하드웨어 연동 및 편대 편집 툴 개발</li>
            <li>경운대학교 세스나 경량항공기 정비 훈련 VR 시뮬레이션의 핵심 정비 절차 콘텐츠 제작</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">관련 프로젝트</h3>
          <ul className="space-y-1 text-muted-foreground list-disc pl-6">
            <li>
              <Link className="underline-offset-4 hover:underline" href="/project/telepresence">
                텔레프레젠스 소셜 VR
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/project/blackeagles">
                블랙이글스 - 어트랙션 체험 VR 시뮬레이션
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/project/cessna">
                경운대학교 세스나 경량항공기 정비 훈련 시뮬레이션
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
