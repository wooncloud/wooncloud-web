'use client';

import { useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import type { ExternalToast } from 'sonner';

interface NoticeProps {
  message: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
  icon?: React.ReactNode;
  duration?: number;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function Notice({
  message,
  position = 'top-center',
  icon,
  duration = 4000,
  description,
  action,
}: NoticeProps) {
  useEffect(() => {
    const options: ExternalToast = {
      duration,
      icon,
      description,
      action: action ? {
        label: action.label,
        onClick: action.onClick,
      } : undefined,
    };

    toast(message, options);
  }, [message, duration, icon, description, action]);

  return <Toaster position={position} />;
}
