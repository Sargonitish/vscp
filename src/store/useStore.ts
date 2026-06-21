'use client';

import { create } from 'zustand';
import type { Tab, TerminalLine, Settings } from '@/lib/types';
import { generateId } from '@/lib/utils';

interface AppState {
  activeSidebar: string | null;
  sidebarVisible: boolean;
  openTabs: Tab[];
  activeTabId: string | null;
  terminalLines: TerminalLine[];
  terminalVisible: boolean;
  settings: Settings;
  commandPaletteOpen: boolean;
  searchQuery: string;
  setActiveSidebar: (id: string | null) => void;
  toggleSidebar: () => void;
  openFile: (tab: Tab) => void;
  closeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
  addTerminalLine: (line: Omit<TerminalLine, 'id'>) => void;
  clearTerminal: () => void;
  toggleTerminal: () => void;
  updateSettings: (partial: Partial<Settings>) => void;
  toggleCommandPalette: () => void;
  setSearchQuery: (q: string) => void;
}

const defaultSettings: Settings = {
  theme: 'vs-dark',
  fontSize: 14,
  terminalFontSize: 13,
  animationsEnabled: true,
  sidebarVisible: true,
  terminalVisible: true,
};

export const useStore = create<AppState>((set) => ({
  activeSidebar: 'explorer',
  sidebarVisible: true,
  openTabs: [],
  activeTabId: null,
  terminalLines: [
    {
      id: generateId(),
      content: 'Welcome to Portfolio Terminal v1.0.0',
      type: 'system',
    },
    {
      id: generateId(),
      content: 'Type "help" to see available commands.',
      type: 'system',
    },
  ],
  terminalVisible: true,
  settings: defaultSettings,
  commandPaletteOpen: false,
  searchQuery: '',

  setActiveSidebar: (id) =>
    set((state) => ({
      activeSidebar: state.activeSidebar === id ? null : id,
      sidebarVisible: state.activeSidebar !== id || !state.sidebarVisible,
    })),

  toggleSidebar: () =>
    set((state) => ({ sidebarVisible: !state.sidebarVisible })),

  openFile: (tab) =>
    set((state) => {
      const exists = state.openTabs.find((t) => t.id === tab.id);
      if (exists) {
        return { activeTabId: tab.id };
      }
      return {
        openTabs: [...state.openTabs, tab],
        activeTabId: tab.id,
        activeSidebar: null,
      };
    }),

  closeTab: (id) =>
    set((state) => {
      const newTabs = state.openTabs.filter((t) => t.id !== id);
      let newActiveId = state.activeTabId;
      if (state.activeTabId === id) {
        const idx = state.openTabs.findIndex((t) => t.id === id);
        newActiveId = newTabs[Math.min(idx, newTabs.length - 1)]?.id ?? null;
      }
      return { openTabs: newTabs, activeTabId: newActiveId };
    }),

  setActiveTab: (id) => set({ activeTabId: id }),

  addTerminalLine: (line) =>
    set((state) => ({
      terminalLines: [
        ...state.terminalLines,
        { ...line, id: generateId() },
      ],
    })),

  clearTerminal: () => set({ terminalLines: [] }),

  toggleTerminal: () =>
    set((state) => ({ terminalVisible: !state.terminalVisible })),

  updateSettings: (partial) =>
    set((state) => ({
      settings: { ...state.settings, ...partial },
    })),

  toggleCommandPalette: () =>
    set((state) => ({ commandPaletteOpen: !state.commandPaletteOpen })),

  setSearchQuery: (q) => set({ searchQuery: q }),
}));
