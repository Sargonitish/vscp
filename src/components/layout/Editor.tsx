'use client';

import React, { Suspense } from 'react';
import { useStore } from '@/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { TabBar } from './TabBar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, FileText } from 'lucide-react';

const HomePanel = React.lazy(() => import('@/components/panels/HomePanel'));
const AboutPanel = React.lazy(() => import('@/components/panels/AboutPanel'));
const ProjectsPanel = React.lazy(() => import('@/components/panels/ProjectsPanel'));
const SkillsPanel = React.lazy(() => import('@/components/panels/SkillsPanel'));
const ExperiencePanel = React.lazy(() => import('@/components/panels/ExperiencePanel'));
const AchievementsPanel = React.lazy(() => import('@/components/panels/AchievementsPanel'));
const ResumePanel = React.lazy(() => import('@/components/panels/ResumePanel'));
const ContactPanel = React.lazy(() => import('@/components/panels/ContactPanel'));
const GitHubPanel = React.lazy(() => import('@/components/panels/GitHubPanel'));
const ReadmePanel = React.lazy(() => import('@/components/panels/ReadmePanel'));

const panelMap: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  'home.tsx': HomePanel,
  'about.tsx': AboutPanel,
  'projects.json': ProjectsPanel,
  'skills.ts': SkillsPanel,
  'experience.ts': ExperiencePanel,
  'achievements.md': AchievementsPanel,
  'resume.pdf': ResumePanel,
  'contact.tsx': ContactPanel,
  'github.md': GitHubPanel,
  'readme.md': ReadmePanel,
};

function LoadingFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-6 w-6 animate-spin text-accent" />
        <span className="text-xs text-text-muted">Loading...</span>
      </div>
    </div>
  );
}

function EmptyEditor() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-text-muted">
        <FileText className="h-16 w-16 opacity-20" />
        <div className="text-center">
          <p className="text-lg font-medium text-text-secondary">No file open</p>
          <p className="text-sm mt-1">Select a file from the explorer to get started</p>
        </div>
        <div className="flex gap-6 mt-4 text-xs">
          <div className="text-center">
            <kbd className="inline-flex h-5 items-center rounded border border-border-secondary bg-bg-tertiary px-1.5 text-[10px]">Ctrl+B</kbd>
            <p className="mt-1 text-text-muted">Toggle sidebar</p>
          </div>
          <div className="text-center">
            <kbd className="inline-flex h-5 items-center rounded border border-border-secondary bg-bg-tertiary px-1.5 text-[10px]">Ctrl+`</kbd>
            <p className="mt-1 text-text-muted">Toggle terminal</p>
          </div>
          <div className="text-center">
            <kbd className="inline-flex h-5 items-center rounded border border-border-secondary bg-bg-tertiary px-1.5 text-[10px]">Ctrl+Shift+P</kbd>
            <p className="mt-1 text-text-muted">Command palette</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Editor() {
  const { openTabs, activeTabId } = useStore();
  const activeTab = openTabs.find((t) => t.id === activeTabId);

  return (
    <div className="flex flex-1 flex-col overflow-hidden bg-bg-editor min-w-0">
      {openTabs.length > 0 && <TabBar />}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <AnimatePresence mode="wait">
            {activeTab ? (
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="h-full"
              >
                <Suspense fallback={<LoadingFallback />}>
                  {(() => {
                    const Panel = panelMap[activeTab.name];
                    return Panel ? <Panel /> : <EmptyEditor />;
                  })()}
                </Suspense>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                <EmptyEditor />
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollArea>
      </div>
    </div>
  );
}
