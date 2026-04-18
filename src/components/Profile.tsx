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
        <p className="mt-2 text-sm text-muted-foreground">
          협업툴 flow / 마드라스체크 SaaS 풀스택 개발자
        </p>
      </div>
    </div>
  );
}
