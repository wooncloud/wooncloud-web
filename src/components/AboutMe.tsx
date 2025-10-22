import Image from 'next/image';
import me1 from '@/assets/images/aboutme/am1.webp';

export default function AboutMe() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
      <div className="md:h-full">
        <Image src={me1} alt="me1" className="w-full h-auto md:h-full md:object-cover md:object-left" />
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p className="text-base font-semibold text-foreground">안녕하세요. 프론트엔드 개발자 우성호입니다.</p>
        <div className="space-y-3">
          <p>
            <strong className="font-semibold text-foreground">사업적 시야와 사용자 중심 사고</strong>를 동시에 챙기며,
            기획·디자인과 긴밀하게 소통해 다양한 의견을 이끌어 내고 서비스의 사업성을 지속적으로 점검합니다.
          </p>
          <p>
            어려운 과제가 주어져도 <strong className="font-semibold text-foreground">우선순위를 명확히 하여 끝까지 마무리</strong>합니다. 복잡한 기능을 정리하고 동일 기능을 더 나은 품질로 마이그레이션하는 과정에서도 포기하지 않습니다.
          </p>
          <p>
            “할 일이 없다”는 상황이 없도록 항상 개선점을 찾고 직접 해결책을 만듭니다. 팀의 생산성을 높이는 도구를 만들고 모니터링
            환경을 구축하며, <strong className="font-semibold text-foreground">동료와 함께 성장하는 문화를 지향</strong>합니다.
          </p>
          <p>
            코드 리뷰와 회의에서도 적극적으로 의견을 나누고 상호 존중을 바탕으로 피드백을 주고받습니다. 새로운 기술과 도구는 먼저
            실험해 보고 경험을 정리해 팀에 공유하는 일을 즐기는 <strong className="font-semibold text-foreground">학습형 개발자</strong>입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
