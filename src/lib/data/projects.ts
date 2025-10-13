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
    title: '업무, 간트차트 리뉴얼 개발',
    period: '',
    description: '',
    tags: ['Preact', 'Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-task'
  },
  {
    id: 'flow-calendar',
    title: '플로우 캘린더 개발',
    period: '',
    description: '',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-calendar'
  },
  {
    id: 'flow-ai',
    title: '플로우 AI / LLM 서버 개발',
    period: '',
    description: '',
    tags: ['OpenAI', 'node.js', 'express', 'Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-ai'
  },
  {
    id: 'flow-security',
    title: '파일보안 / 로그인 보안',
    period: '',
    description: '',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-security'
  },
  {
    id: 'flow-plan',
    title: '플랜',
    period: '',
    description: '',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-plan'
  },
  {
    id: 'flow-notice',
    title: '공지, 배너',
    period: '',
    description: '',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-notice'
  },
  {
    id: 'flow-master',
    title: '마스터어드민',
    period: '',
    description: '',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-master'
  },
  {
    id: 'flow-qa',
    title: '플로우 전반적인 유지보수',
    period: '2021.10.12 - 현재',
    description: '어드민, 파트너 시스템, 웹소켓, SES 이메일 기능, 모니터링 세팅 등 플로우 전반적인 유지보수',
    tags: ['Java', 'javascript', 'PostgreSQL', 'jQuery', 'Jex Framework'],
    path: '/project/flow-qa'
  },
  {
    id: 'animalcare',
    title: '동물병원 예약 시스템',
    period: '2021.07.02 - 2021.08.06',
    description:
      '5인 팀으로 사용자·병원·관리자 유스케이스를 설계해 예약, 진료, 결제 전 과정을 통합 관리할 수 있는 동물병원 예약 시스템을 Spring 기반으로 구축했습니다.',
    tags: ['Java', 'Spring Framework', 'Oracle DB', 'MyBatis', 'jQuery'],
    path: '/project/animalcare'
  },
  {
    id: 'recruit',
    title: '채용 시스템 개발',
    period: '2021.06.09 - 2021.07.01',
    description:
      '2인 협업으로 채용 공고 작성부터 지원서 관리, 전형 결과 통보까지 자동화한 Spring 기반 채용 시스템을 구축했습니다.',
    tags: ['Java', 'Spring Framework', 'MyBatis', 'jQuery', 'Spring Security'],
    path: '/project/recruit'
  },
  {
    id: 'erp',
    title: 'ERP 시스템 개발 (회사 내부 인트라넷)',
    period: '2019.05 - 2019.10',
    description:
      '사내 인트라넷 ERP 시스템을 구축하며 인사·프로젝트·경력 관리 기능의 백엔드 REST API와 데이터 가공 로직을 구현하고, Infragistics 기반 UI와 문서 출력 흐름을 설계했습니다.',
    tags: ['C#', 'ASP.NET WebForms', 'MS-SQL', 'javaScript', 'jQuery', 'Infragistics'],
    path: '/project/erp'
  },
  {
    id: 'pmis',
    title: 'PMIS 건설사업관리시스템 유지보수',
    period: '2019.03 - 2020.11',
    description:
      '오류가 빈번한 PMIS 건설사업관리 시스템을 안정화하고 관리자 공문·서명 관리 등 핵심 모듈을 재개발했으며, 플래시 요소를 제거하고 canvas 기반 UI로 교체했습니다.',
    tags: ['C#', 'ASP.NET WebForms', 'MS-SQL', 'ASP', 'Visual Basic', 'javaScript', 'jQuery', 'Infragistics'],
    path: '/project/pmis'
  },
  {
    id: 'pmis-new',
    title: 'PMIS 건설사업관리시스템 신규 개발',
    period: '2020.04 - 2020.11',
    description:
      '차세대 PMIS 시스템을 위해 기존 서비스를 분석하고 요구사항·테이블 정의서를 작성했으며, Bootstrap4 기반 유료 CSS 프레임워크를 현업 UI/UX에 맞게 변형해 적용했습니다.',
    tags: ['C#', 'ASP.NET MVC', 'MS-SQL', 'javaScript', 'jQuery', 'Infragistics'],
    path: '/project/pmis-new'
  },
  {
    id: 'telepresence',
    title: '텔레프레젠스 소셜 VR',
    period: '2017.11 - 2018.12 (1년 2개월)',
    description:
      '국가과제형 텔레프레젠스 소셜 VR 프로젝트에 참여하여 내부 콘텐츠와 인터랙션 UI를 개발하고, VR 컨트롤러와 헤드셋의 위치·각도 정보를 활용한 알고리즘을 구현해 특허를 출원했습니다.',
    tags: ['Unity', 'C#', '.NET', 'VIVE VR'],
    path: '/project/telepresence'
  },
  {
    id: 'blackeagles',
    title: '블랙이글스 - 어트랙션 체험 VR 시뮬레이션',
    period: '2018.05 - 2018.10 (6개월)',
    description:
      'Sym4d 어트랙션 하드웨어와 연동한 VR 시뮬레이션을 구축하고 편대 편집 툴, 콘텐츠, 하드웨어 연동을 포함한 전반을 담당했으며 Bing 맵 데이터를 활용한 지형 구현과 전국 시연·발표를 수행했습니다.',
    tags: ['C#', 'Unity', '.NET', 'VIVE VR', 'Sym4d'],
    path: '/project/blackeagles'
  },
  {
    id: 'cessna',
    title: '경운대학교 세스나 경량항공기 정비 훈련 시뮬레이션',
    period: '2018.10 - 2018.12 (3개월)',
    description:
      '경운대학교 경량 항공기 정비 훈련용 VR 시뮬레이션에서 60개 이상의 정비 절차 중 일부를 구현하며 콘텐츠 개발을 담당했습니다.',
    tags: ['C#', 'Unity', '.NET', 'VIVE VR'],
    path: '/project/cessna'
  },
];
