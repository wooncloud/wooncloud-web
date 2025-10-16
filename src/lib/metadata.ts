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
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: '운구름 | wooncloud',
      locale: 'ko_KR',
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}
