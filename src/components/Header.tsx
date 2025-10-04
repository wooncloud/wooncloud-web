"use client";

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Share2 } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import logo from '@/assets/images/logo.png';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  async function copySiteLinkToClipboard() {
    const siteLink = window.location.href;
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = siteLink;
    tempInput.select();

    try {
      const success = document.execCommand('copy');
      if (!success && navigator.clipboard) {
        await navigator.clipboard.writeText(siteLink);
      }
      alert('링크가 복사 되었습니다.');
    } catch (error) {
      console.error('Failed to copy link: ', error);
      alert('링크 복사에 실패했습니다.');
    } finally {
      document.body.removeChild(tempInput);
    }
  }

  return (
    <header className="text-center py-4">
      <div className="flex">
        <div className="flex-none">
          <Button onClick={copySiteLinkToClipboard} variant="outline" size="icon">
            <Share2 />
          </Button>
        </div>
        <div className="grow"></div>
        <div className="flex-none">
          <Button onClick={toggleTheme} variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <a href="/" className="flex justify-center">
          <Avatar className="h-[5rem] w-[5rem]">
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
