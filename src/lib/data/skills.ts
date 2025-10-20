export interface Skill {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export const skills: Skill[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    imageUrl: '/skills/js.svg',
    description: '가장 주로 사용하고 있으며 프론트엔드와 백엔드 모두에서 활용하고 있습니다. 레거시 프로젝트에서 주로 사용하고 있으며, ES6+ 문법을 활용한 모던 JavaScript 개발에 익숙합니다.',
    priority: 'high'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    imageUrl: '/skills/ts.svg',
    description: '주로 사용하고 있는 언어로서 React, Preact, Next.js 프로젝트에서 주로 사용하고 있습니다. 레거시 프로젝트 외 꼭 타입스크립트를 사용하고 있으며, 많은 레거시 프로젝트에 타입스크립트로 마이그레이션하고 있습니다.',
    priority: 'high'
  },
  {
    id: 'preact',
    name: 'Preact',
    imageUrl: '/skills/preact.svg',
    description: '마드라스체크에서 주로 사용하고 있는 react 기반의 경량 프론트엔드 프레임워크이며, 이 프레임워크로 플로우의 업무, 간트차트 등 많은 프론트엔드 부분을 개발하고 있습니다.',
    priority: 'high'
  },
  {
    id: 'react',
    name: 'React',
    imageUrl: '/skills/react.svg',
    description: 'Next.js를 활용한 프론트엔드 개발에 주로 사용하고 있는 프레임워크입니다.',
    priority: 'high'
  },
  {
    id: 'zustand',
    name: 'Zustand',
    imageUrl: '/skills/zustand.webp',
    description: '현재 주로 사용하고 있는 리액트 상태 관리 라이브러리 입니다.',
    priority: 'high'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    imageUrl: '/skills/nextjs.svg',
    description: 'SSR, SSG가 필요한 프로젝트에서 현재 주로 사용하고 있으며, 경력에서 사용한 경험은 없지만 많은 개인 프로젝트에서 사용하고 있습니다. SEO 개선 경험이 있습니다.',
    priority: 'high'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    imageUrl: '/skills/nodejs.svg',
    description: 'Express를 활용한 백엔드 API 개발 경험이 있습니다. 현재 마드라스체크에서 flow LLM 서버와 소켓서버, 배치서버 등 다양하게 사용하고 있으며, RESTful API 설계와 구현에 익숙합니다.',
    priority: 'medium'
  },
  {
    id: 'svelte',
    name: 'Svelte & SvelteKit',
    imageUrl: '/skills/svelte.svg',
    description: 'SvelteKit을 활용한 풀스택 개발 경험이 있으며, 많은 토이프로젝트에서 사용하고 있습니다.',
    priority: 'medium'
  },
  {
    id: 'java',
    name: 'Java',
    imageUrl: '/skills/java.svg',
    description: `
      마드라스체크에서 플로우 백엔드 개발에 주로 사용하며, 사내 독자적인 프레임워크인 jex Framework와 함께 사용하고 있습니다.
      그리고 Spring Framework와 Spring Boot를 활용한 백엔드 개발 경험이 있습니다.
    `,
    priority: 'high'
  },
  {
    id: 'spring',
    name: 'Spring',
    imageUrl: '/skills/spring.svg',
    description: 'Spring Framework 및 Spring Boot를 활용한 백엔드 개발 경험이 있습니다.',
    priority: 'medium'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    imageUrl: '/skills/postgresql.svg',
    description: '현재 주로 사용하고 있는 관계형 데이터베이스이며 RDB 설계 및 최적화 경험이 있습니다. 복잡한 쿼리 작성과 인덱싱을 통한 성능 개선에 능숙합니다.',
    priority: 'high'
  },
  {
    id: 'csharp',
    name: 'C#',
    imageUrl: '/skills/csharp.svg',
    description: '.NET 프레임워크를 활용한 애플리케이션 개발 경험이 있습니다. 아이티엠건축사사무소에서 ASP.NET을 활용한 웹 서버 개발에 사용과, 한길씨앤씨에서 유니티 개발에 사용한 경험이 있습니다.',
    priority: 'low'
  },
  {
    id: 'aspnet',
    name: 'ASP.NET',
    imageUrl: '/skills/aspnet.webp',
    description: 'ASP.NET Core를 활용한 웹 API 및 웹 애플리케이션 개발 경험이 있습니다. 아이티엠건축사사무소에서 ASP.NET을 활용한 웹 서버 개발 경험이 있습니다.',
    priority: 'low'
  },
  {
    id: 'jquery',
    name: 'jQuery',
    imageUrl: '/skills/jquery.svg',
    description: '마드라스체크의 플로우와 아이티엠건축사사무소에서 레거시 프로젝트 유지보수에 사용하고 있습니다.',
    priority: 'medium'
  }
];
