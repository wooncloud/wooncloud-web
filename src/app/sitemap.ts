import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wooncloud.com';
  const lastModified = new Date();

  // 기본 페이지들
  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // 경력 페이지들
  const experiences = [
    'madrascheck',
    'itmcorp',
    'hangilcnc',
  ];

  experiences.forEach((exp) => {
    routes.push({
      url: `${baseUrl}/experience/${exp}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    });
  });

  // 프로젝트 페이지들
  const projects = [
    'animalcare',
    'recruit',
    'erp',
    'pmis',
    'pmis-new',
    'telepresence',
    'blackeagles',
    'cessna',
    'flow-ai',
    'flow-calendar',
    'flow-notice',
    'flow-plan',
    'flow-master',
    'flow-security',
    'flow-task',
    'flow-qa',
  ];

  projects.forEach((project) => {
    routes.push({
      url: `${baseUrl}/project/${project}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    });
  });

  return routes;
}
