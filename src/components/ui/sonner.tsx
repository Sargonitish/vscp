'use client';

import { Toaster as SonnerToaster } from 'sonner';
import { useStore } from '@/store/useStore';

export function Toaster() {
  const { settings } = useStore();
  const theme = settings.theme === 'github-light' ? 'light' : 'dark';

  return (
    <SonnerToaster
      theme={theme}
      position="bottom-right"
      toastOptions={{
        style: {
          background: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-primary)',
          fontFamily: 'var(--font-mono)',
        },
      }}
    />
  );
}
