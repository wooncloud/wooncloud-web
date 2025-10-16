import { Metadata } from 'next';

const SITE_URL = 'https://wooncloud.com';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path,
}: PageMetadata): Metadata {
  const fullTitle = `${title} | 운구름`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      '운구름',
      'wooncloud',
      '풀스택 개발자',
      'flow',
      ...keywords,
    ],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description,
      siteName: '운구름 | wooncloud',
      locale: 'ko_KR',
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}
