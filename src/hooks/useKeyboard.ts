'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';

export function useKeyboard() {
  const toggleCommandPalette = useStore((s) => s.toggleCommandPalette);
  const toggleSidebar = useStore((s) => s.toggleSidebar);
  const toggleTerminal = useStore((s) => s.toggleTerminal);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'p') {
        e.preventDefault();
        toggleCommandPalette();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        toggleSidebar();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        toggleTerminal();
      }
      if (e.key === 'Escape') {
        const cpOpen = useStore.getState().commandPaletteOpen;
        if (cpOpen) toggleCommandPalette();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleCommandPalette, toggleSidebar, toggleTerminal]);
}
