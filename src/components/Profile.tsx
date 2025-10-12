import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import logo from '@/assets/images/logo.png';

export default function Header() {
  return (
    <header className="text-center py-4">
      <div className="mt-4">
        <a href="/" className="flex justify-center">
          <Avatar className="h-[5rem] w-[5rem] border">
            <AvatarImage src={logo.src} alt="logo" />
            <AvatarFallback>LOGO</AvatarFallback>
          </Avatar>
        </a>
        <div className="mt-5">
          <h1 className="font-bold text-xl">운구름</h1>
          <p>wooncloud</p>
        </div>
      </div>
    </header>
  );
}
