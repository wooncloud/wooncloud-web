export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  path: string;
}

export const experiences: Experience[] = [
  {
    id: 'madrascheck',
    company: '마드라스체크(주)',
    position: 'SaaS 서비스 풀스택 개발자',
    period: '2021.10.12. - 현재',
    description: '협업툴 플로우 SaaS 서비스 기능 개발 및 유지보수.',
    path: '/experience/madrascheck'
  },
  {
    id: 'Itm Corporation',
    company: '(주) 아이티엠건축사사무소 (itm Corporation)',
    position: '관리팀 / 솔루션 웹 개발자',
    period: '2019.03.15. - 2020.11.20.',
    description: 'ASP.NET을 이용한 PMIS 시스템 및 ERP 시스템 개발. 유지보수 및 기능 추가.',
    path: '/experience/itmcorp'
  },
  {
    id: 'hangil C&C',
    company: '한길씨앤씨(주) (Hangil C&C)',
    position: '유니티 클라이언트 개발자',
    period: '2017.11.01. - 2019.03.09.',
    description: 'VR 시뮬레이션 & 유니티를 이용한 시뮬레이션 개발.',
    path: '/experience/hangilcnc'
  }
];
