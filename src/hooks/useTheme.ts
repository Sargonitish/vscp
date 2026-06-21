'use client';

import { useEffect, useCallback } from 'react';
import { useStore } from '@/store/useStore';
import { themes } from '@/themes/themes';

export function useTheme() {
  const { settings, updateSettings } = useStore();

  useEffect(() => {
    const theme = themes.find((t) => t.id === settings.theme) || themes[0];
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.setAttribute('data-theme', theme.id);
    root.setAttribute('data-theme-type', theme.type);
  }, [settings.theme]);

  const setTheme = useCallback(
    (themeId: string) => {
      updateSettings({ theme: themeId });
    },
    [updateSettings],
  );

  const currentTheme = themes.find((t) => t.id === settings.theme) || themes[0];
  const themeList = themes;

  return { theme: currentTheme, themeList, setTheme };
}
