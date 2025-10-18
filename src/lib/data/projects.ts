export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  path: string;
}

export const projects: Project[] = [
  {
    id: 'flow-task',
    title: '📋 업무, 간트차트 리뉴얼 개발',
    period: '2025.03.21 - 현재',
    description: '커스텀 컬럼, 다중 하위업무, 커스텀 상태 관리 등을 지원하는 업무 시스템을 Preact 기반으로 리뉴얼하여 업종별 맞춤 프로젝트 관리 제공',
    tags: ['Preact', 'Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-task'
  },
  {
    id: 'flow-calendar',
    title: '📅 플로우 캘린더 개발',
    period: '2024.12.01 - 2025.03.21',
    description: '개인 및 프로젝트 캘린더를 통합하고 구글 캘린더 연동, 타임존, 반복일정 등을 지원하는 통합 캘린더 시스템 개발',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-calendar'
  },
  {
    id: 'flow-ai',
    title: '🤖 플로우 AI / LLM 서버 개발',
    period: '2024.01.22 - 2024.04.05',
    description: 'OpenAI API와 Function Calling을 활용한 업무 검색 및 프로젝트 템플릿 생성 AI 기능 개발 및 Node.js 기반 LLM 서버 구축',
    tags: ['OpenAI', 'node.js', 'express', 'Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-ai'
  },
  {
    id: 'flow-security',
    title: '🔒 파일보안 / 로그인 보안 개발',
    period: '2023.01.25 - 2023.04.19',
    description: '환경별 다운로드 정책, IP 화이트리스트, 로그인 보안 등 철저한 로깅을 통한 기업 데이터 보안 체계 구축',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-security'
  },
  {
    id: 'flow-plan',
    title: '💳 요금 정책 및 플랜 관리 시스템 개발',
    period: '2022.11.30 - 2023.01.06',
    description: '다양한 요금제 생성 및 플랜별 기능 제한 매칭 시스템 개발로 유연한 정책 변경 및 고객 맞춤 서비스 제공',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-plan'
  },
  {
    id: 'flow-notice',
    title: '📢 공지, 배너 관리 시스템 개발',
    period: '2021.11.10 - 2022.01.05',
    description: '타겟팅, 다국어 지원, 타임존 기반 예약 게시를 통한 공지사항 및 배너 관리 시스템 개발',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-notice'
  },
  {
    id: 'flow-master',
    title: '⚙️ 마스터어드민 고도화',
    period: '2022.11.07 - 2022.11.29',
    description: '분산된 2개의 마스터어드민을 통합하고 고객 및 기업 관리에 중점을 둔 CX팀 지원 시스템 개발',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-master'
  },
  {
    id: 'flow-qa',
    title: '🔧 플로우 전반적인 유지보수 및 개선',
    period: '2021.10.12 - 현재',
    description: 'SES 이메일, 퇴사자 관리, 파트너 시스템, 알림/댓글 필터, GA 사용자 분석, 모니터링 구축 등 서비스 안정성 및 성능 개선',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-qa'
  },
  {
    id: 'animalcare',
    title: '🐾 동물병원 예약 시스템',
    period: '2021.07.02 - 2021.08.06',
    description: '사용자·병원·관리자 유스케이스 기반 예약, 결제, 진료 관리 통합 시스템 개발 및 PM 수행',
    tags: ['Java', 'Spring Framework', 'Oracle DB', 'MyBatis', 'jQuery'],
    path: '/project/animalcare'
  },
  {
    id: 'recruit',
    title: '👥 채용 시스템 개발',
    period: '2021.06.09 - 2021.07.01',
    description: '채용 공고 작성부터 지원서 관리, 전형 결과 통보까지 자동화한 Spring 기반 채용 시스템 개발 및 PM 수행',
    tags: ['Java', 'Spring Framework', 'MyBatis', 'jQuery', 'Spring Security'],
    path: '/project/recruit'
  },
  {
    id: 'erp',
    title: '🏢 ERP 시스템 개발 (회사 내부 인트라넷)',
    period: '2019.05 - 2019.10',
    description: '인사·프로젝트·경력 관리 REST API 개발 및 Infragistics 기반 UI, 문서 출력 시스템 구축',
    tags: ['C#', 'ASP.NET WebForms', 'MS-SQL', 'javaScript', 'jQuery', 'Infragistics'],
    path: '/project/erp'
  },
  {
    id: 'pmis',
    title: '🏗️ PMIS 건설사업관리시스템 유지보수',
    period: '2019.03 - 2020.11',
    description: '시스템 안정화 및 관리자 공문·서명 모듈 재개발, 플래시 제거 후 Canvas 기반 UI로 전환',
    tags: ['C#', 'ASP.NET WebForms', 'MS-SQL', 'ASP', 'Visual Basic', 'javaScript', 'jQuery', 'Infragistics'],
    path: '/project/pmis'
  },
  {
    id: 'pmis-new',
    title: '🏗️ PMIS 건설사업관리시스템 신규 개발',
    period: '2020.04 - 2020.11',
    description: '차세대 PMIS 시스템 분석 및 요구사항·테이블 정의서 작성, Bootstrap4 기반 현업 맞춤 UI/UX 설계',
    tags: ['C#', 'ASP.NET MVC', 'MS-SQL', 'javaScript', 'jQuery', 'Infragistics'],
    path: '/project/pmis-new'
  },
  {
    id: 'telepresence',
    title: '🥽 텔레프레젠스 소셜 VR',
    period: '2017.11 - 2018.12 (1년 2개월)',
    description: '국가과제 소셜 VR 내부 콘텐츠 및 인터랙션 UI 개발, VR 기기 위치·각도 기반 알고리즘 구현 및 특허 출원',
    tags: ['Unity', 'C#', '.NET', 'VIVE VR'],
    path: '/project/telepresence'
  },
  {
    id: 'blackeagles',
    title: '✈️ 블랙이글스 - 어트랙션 체험 VR 시뮬레이션',
    period: '2018.05 - 2018.10 (6개월)',
    description: 'Sym4d 어트랙션 연동 VR 시뮬레이션 개발, 편대 편집 툴 및 Bing 맵 기반 지형 구현, 전국 시연 수행',
    tags: ['C#', 'Unity', '.NET', 'VIVE VR', 'Sym4d'],
    path: '/project/blackeagles'
  },
  {
    id: 'cessna',
    title: '✈️ 경운대학교 세스나 경량항공기 정비 훈련 시뮬레이션',
    period: '2018.10 - 2018.12 (3개월)',
    description: '경량 항공기 정비 훈련용 VR 시뮬레이션 콘텐츠 개발 및 60개 이상 정비 절차 구현',
    tags: ['C#', 'Unity', '.NET', 'VIVE VR'],
    path: '/project/cessna'
  },
];
