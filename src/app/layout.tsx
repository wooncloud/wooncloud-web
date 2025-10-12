import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://wooncloud.com";
const SEO_TITLE = "운구름 | Flow SaaS 풀스택 개발자";
const SEO_DESCRIPTION =
  "Flow 협업툴을 개발하는 풀스택 개발자 운구름의 포트폴리오. JavaScript·TypeScript·Java 기반 SaaS 프로젝트, 경력, 기술 스택, 토이 프로젝트와 연락처 정보를 확인하세요.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "운구름",
  alternateName: "운구름",
  url: SITE_URL,
  sameAs: ["https://wooncloud.tistory.com", "https://github.com/wooncloud"],
  jobTitle: "SaaS Full-Stack Developer",
  worksFor: [
    {
      "@type": "Organization",
      name: "마드라스체크(주)"
    }
  ],
  knowsAbout: [
    "SaaS",
    "협업툴",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "Spring"
  ],
  knowsLanguage: ["ko", "en"],
  description: SEO_DESCRIPTION
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: "%s | 운구름"
  },
  description: SEO_DESCRIPTION,
  keywords: [
    "운구름",
    "wooncloud",
    "풀스택 개발자",
    "Flow",
    "플로우",
    "SaaS",
    "웹 개발 포트폴리오",
    "JavaScript",
    "TypeScript",
    "Java",
    "React",
    "Next.js",
    "Node.js",
    "Spring",
    "웹 서버 개발",
    "경력 소개",
    "프로젝트"
  ],
  authors: [
    { name: "운구름", url: SITE_URL }
  ],
  creator: "운구름",
  publisher: "운구름",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    siteName: "운구름 | wooncloud",
    locale: "ko_KR"
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION
  },
  category: "technology"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1003422907558705"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="flex flex-col min-h-screen w-full max-w-[700px] mx-auto px-4">
          <main className="transform-gpu will-change-transform">
            {children}
          </main>
        </div>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZMDV15DWKY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZMDV15DWKY');
          `}
        </Script>
      </body>
    </html>
  );
}
