'use client';

import dynamic from 'next/dynamic';
import { useKeyboard } from '@/hooks/useKeyboard';
import { TitleBar } from '@/components/layout/TitleBar';
import { ActivityBar } from '@/components/layout/ActivityBar';
import { Sidebar } from '@/components/layout/Sidebar';
import { Editor } from '@/components/layout/Editor';
import { TerminalPanel } from '@/components/layout/TerminalPanel';
import { StatusBar } from '@/components/layout/StatusBar';

const SettingsPanel = dynamic(() =>
  import('@/components/settings/SettingsPanel').then((m) => ({ default: m.SettingsPanel })),
);
const CommandPalette = dynamic(() =>
  import('@/components/command-palette/CommandPalette').then((m) => ({ default: m.CommandPalette })),
);
const Toaster = dynamic(() =>
  import('@/components/ui/sonner').then((m) => ({ default: m.Toaster })),
);

export default function Home() {
  useKeyboard();

  return (
    <div className="flex h-screen w-screen flex-col bg-bg-primary overflow-hidden">
      {/* Title Bar */}
      <TitleBar />

      {/* Main Workspace */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar />

        {/* Sidebar */}
        <Sidebar />

        {/* Settings Panel */}
        <SettingsPanel />

        {/* Editor + Terminal */}
        <div className="flex flex-1 flex-col overflow-hidden min-w-0">
          <Editor />
          <TerminalPanel />
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar />

      {/* Overlays */}
      <CommandPalette />
      <Toaster />
    </div>
  );
}
