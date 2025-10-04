import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "운구름 | wooncloud homepage",
  description: "운구름(wooncloud) - Korean developer's homepage. Blog, GitHub, Instagram and social links.",
  keywords: ["wooncloud", "운구름", "developer", "개발자", "blog", "github", "instagram", "블로그", "깃허브", "인스타"],
  authors: [{ name: "운구름 (wooncloud)" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://wooncloud.com/"
  },
  openGraph: {
    type: "website",
    url: "https://wooncloud.com/",
    title: "운구름 | wooncloud homepage",
    description: "운구름(wooncloud) - Korean developer's homepage. Blog, GitHub, Instagram and social links.",
    siteName: "운구름",
    locale: "ko_KR"
  },
  twitter: {
    card: "summary",
    title: "운구름 | wooncloud homepage",
    description: "운구름(wooncloud) - Korean developer's homepage. Blog, GitHub, Instagram and social links."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "운구름",
              "alternateName": "wooncloud",
              "url": "https://wooncloud.com",
              "sameAs": [
                "https://wooncloud.tistory.com",
                "https://github.com/wooncloud",
                "https://instagram.com/_wooncloud"
              ],
              "jobTitle": "Developer",
              "description": "Korean developer's homepage with links to blog, GitHub, and social media."
            })
          }}
        />
        
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1003422907558705"
          crossOrigin="anonymous"
        />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZMDV15DWKY" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZMDV15DWKY');
            `
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen w-full max-w-[700px] mx-auto px-4">
            <Header />
            <main className="transform-gpu will-change-transform">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
