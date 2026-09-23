import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS_URL, type BlogPost } from "@/lib/blog";

// 외부 블로그 링크: 새 탭으로 열되 noreferrer 는 빼서 블로그 방문 통계에 유입 경로가 남게 한다.
export default function BlogPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="flex flex-col space-y-2">
      {posts.map((post) => (
        <a
          key={post.url}
          href={post.url}
          target="_blank"
          rel="noopener"
          className="block rounded-lg border border-border/60 bg-card p-3 transition hover:border-primary/50"
        >
          <span className="block text-sm font-semibold text-foreground">
            {post.title}
          </span>
          <time
            dateTime={post.date.replaceAll(".", "-")}
            className="text-xs text-muted-foreground"
          >
            {post.date}
          </time>
        </a>
      ))}
      <a
        href={BLOG_POSTS_URL}
        target="_blank"
        rel="noopener"
        className="self-end inline-flex items-center gap-1 pt-1 text-sm text-muted-foreground hover:text-foreground"
      >
        전체 글 보기
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
