'use client';

import { useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

export default function Notice() {
  useEffect(() => {
    console.log("현재 이 사이트는 개발중입니다.");
    toast("현재 이 사이트는 개발중입니다.")
  }, []);

  return <Toaster position="top-center" />;
}
