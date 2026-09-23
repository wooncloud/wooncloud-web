const BLOG_URL = "https://blog.wooncloud.com";
const FEED_URL = `${BLOG_URL}/feed.xml`;

export interface BlogPost {
  title: string;
  url: string;
  date: string;
}

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
};

function decode(text: string): string {
  return text.replace(/&(amp|lt|gt|quot|#39|apos);/g, (m) => ENTITIES[m]);
}

function tag(item: string, name: string): string {
  return item.match(new RegExp(`<${name}>([^<]*)</${name}>`))?.[1].trim() ?? "";
}

/**
 * 블로그 RSS 에서 최근 글을 읽는다. 서버에서 렌더해 개별 글 링크가 HTML 에 그대로
 * 실리게 한다(검색엔진이 블로그 글을 발견하는 경로). 하루 단위 ISR.
 * 블로그가 응답하지 않으면 빈 배열 — 섹션만 빠지고 페이지는 멀쩡하다.
 */
export async function getRecentPosts(limit = 6): Promise<BlogPost[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 86400 } });
    if (!res.ok) return [];
    const xml = await res.text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .map(([, item]) => ({
        title: decode(tag(item, "title")),
        url: tag(item, "link"),
        date: new Date(tag(item, "pubDate"))
          .toISOString()
          .slice(0, 10)
          .replaceAll("-", "."),
      }))
      .filter((post) => post.title && post.url.startsWith(`${BLOG_URL}/`))
      .slice(0, limit);
  } catch {
    return [];
  }
}

export const BLOG_POSTS_URL = `${BLOG_URL}/posts`;
