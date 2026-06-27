import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import logo from "@/assets/images/logo.webp";

export default function Profile() {
  return (
    <div className="text-center">
      <Link href="/" className="flex justify-center">
        <Avatar className="h-[5rem] w-[5rem] border">
          <AvatarImage src={logo.src} alt="logo" />
          <AvatarFallback>LOGO</AvatarFallback>
        </Avatar>
      </Link>
      <div className="mt-5">
        <h1 className="font-bold text-xl">운구름</h1>
        <p>wooncloud</p>
        <p className="mt-2 text-sm font-medium text-foreground">
          경력 8년+ 풀스택 개발자 · VR부터 엔터프라이즈 SaaS까지
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          협업툴 flow(마드라스체크) 개발
        </p>
        <div className="mt-3 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <span
              className="h-1.5 w-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            새로운 기회에 열려 있습니다
          </span>
        </div>
      </div>
    </div>
  );
}
