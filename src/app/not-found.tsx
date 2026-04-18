import Link from "next/link";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "페이지를 찾을 수 없습니다",
  description: "요청하신 페이지가 존재하지 않습니다.",
  path: "/404",
});

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <p className="text-7xl font-bold tracking-tight text-muted-foreground">
          404
        </p>
        <h1 className="text-2xl font-bold">페이지를 찾을 수 없습니다</h1>
        <p className="text-muted-foreground">
          요청하신 페이지가 이동되었거나 존재하지 않습니다.
        </p>
      </div>
      <div className="flex gap-2">
        <Link href="/">
          <Button>홈으로 이동</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">문의하기</Button>
        </Link>
      </div>
    </div>
  );
}
