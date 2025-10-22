import Image from 'next/image';
import Link from 'next/link';
import madrascheck from '@/assets/images/experience/madrascheck.webp';
import flow1 from '@/assets/images/experience/flow.webp';
import flow2 from '@/assets/images/experience/flow2.webp';
import { Card, CardContent } from '@/components/ui/card';

export default function MadrasCheckExperiencePage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">마드라스체크</h1>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <Image src={madrascheck} alt="마드라스체크" height={50} />
        <Image src={flow1} alt="플로우 화면 1" height={50} />
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">SaaS 서비스 풀스택 개발자</h2>
          <p className="text-muted-foreground">2021.10.12. - 현재</p>
          <p className="text-muted-foreground">
            협업툴 플로우(flow) SaaS 서비스의 기능 개발과 모니터링 및 장애 대응 등 안정적인 운영을 담당하며 제품 가치 향상에 기여하고 있습니다.
          </p>
          <p className="text-muted-foreground">
            업무, 캘린더, 파일·로그인 보안, AI/LLM 서버, 웹소켓 기반 실시간 처리, 마스터 어드민, 공지·배너, 플랜, 각종 어드민과 파트너 시스템 등 서비스 전반을 책임지고 있습니다.
          </p>
        </div>
        <Image src={flow2} alt="플로우 화면 2" />
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">주요 업무</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>플로우 SaaS 서비스의 신규 기능 개발 및 기존 모듈 개선</li>
            <li>운영 환경에서 이슈 대응 및 서비스 성능·안정성 모니터링</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">담당 및 참여 프로젝트</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/project/flow-task" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">📋</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          업무, 간트차트 리뉴얼 개발
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">2025.03.21 - 현재</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      커스텀 컬럼, 다중 하위업무, 커스텀 상태 관리 등을 지원하는 업무 시스템을 Preact 기반으로 리뉴얼
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/project/flow-calendar" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">📅</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          플로우 캘린더 개발
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">2024.12.01 - 2025.03.21</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      개인 및 프로젝트 캘린더를 통합하고 구글 캘린더 연동, 타임존, 반복일정 등을 지원하는 통합 캘린더 시스템 개발
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/project/flow-ai" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">🤖</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          플로우 AI / LLM 서버 개발
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">2024.01.22 - 2024.04.05</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      OpenAI API와 Function Calling을 활용한 업무 검색 및 프로젝트 템플릿 생성 AI 기능 개발 및 Node.js 기반 LLM 서버 구축
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/project/flow-security" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">🔒</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          파일보안 / 로그인 보안 개발
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">2023.01.25 - 2023.04.19</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      환경별 다운로드 정책, IP 화이트리스트, 로그인 보안 등 철저한 로깅을 통한 기업 데이터 보안 체계 구축
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/project/flow-plan" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">💳</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          요금 정책 및 플랜 관리 시스템 개발
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">2022.11.30 - 2023.01.06</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      다양한 요금제 생성 및 플랜별 기능 제한 매칭 시스템 개발로 유연한 정책 변경 및 고객 맞춤 서비스 제공
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/project/flow-master" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">⚙️</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          마스터어드민 고도화
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">2022.11.07 - 2022.11.29</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      분산된 2개의 마스터어드민을 통합하고 고객 및 기업 관리에 중점을 둔 CX팀 지원 시스템 개발
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/project/flow-notice" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">📢</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          공지, 배너 관리 시스템 개발
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">2021.11.10 - 2022.01.05</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      타겟팅, 다국어 지원, 타임존 기반 예약 게시를 통한 공지사항 및 배너 관리 시스템 개발
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/project/flow-qa" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">🔧</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          플로우 전반적인 유지보수 및 개선
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">2021.10.12 - 현재</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      SES 이메일, 퇴사자 관리, 파트너 시스템, 알림/댓글 필터, GA 사용자 분석, 모니터링 구축 등 서비스 안정성 및 성능 개선
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
