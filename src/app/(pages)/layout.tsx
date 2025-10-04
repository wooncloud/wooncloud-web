'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Extract page name from pathname
  const lastSegment = pathname.split('/').filter(Boolean).pop() || '';
  const pageName = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            aria-label="Back"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="flex-1 text-center text-lg font-semibold pr-10">
            {pageName}
          </h1>
        </div>
      </header>
      <main className="px-4">{children}</main>
    </div>
  );
}
