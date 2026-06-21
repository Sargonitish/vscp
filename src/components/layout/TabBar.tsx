'use client';

import { useStore } from '@/store/useStore';
import { cn } from '@/lib/utils';
import { X, File, FileJson, Type, BookOpen, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  'home.tsx': File,
  'about.tsx': File,
  'contact.tsx': File,
  'projects.json': FileJson,
  'skills.ts': Type,
  'experience.ts': Type,
  'achievements.md': BookOpen,
  'resume.pdf': FileText,
  'github.md': BookOpen,
  'readme.md': BookOpen,
};

const tabColors: Record<string, string> = {
  'home.tsx': 'border-t-blue',
  'about.tsx': 'border-t-green',
  'projects.json': 'border-t-yellow',
  'skills.ts': 'border-t-pink',
  'experience.ts': 'border-t-orange',
  'achievements.md': 'border-t-accent',
  'resume.pdf': 'border-t-red',
  'contact.tsx': 'border-t-green',
  'github.md': 'border-t-blue',
  'readme.md': 'border-t-accent',
};

export function TabBar() {
  const { openTabs, activeTabId, setActiveTab, closeTab } = useStore();

  return (
    <div
      className="flex h-[35px] items-stretch border-b border-border-primary bg-bg-primary overflow-x-auto shrink-0"
      role="tablist"
      aria-label="Open tabs"
    >
      <AnimatePresence mode="popLayout">
        {openTabs.map((tab) => {
          const Icon = iconMap[tab.name] || File;
          const isActive = activeTabId === tab.id;
          return (
            <motion.div
              key={tab.id}
              layout
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.15 }}
              className={cn(
                'group flex items-center gap-1.5 px-3 py-1.5 text-xs cursor-pointer border-r border-border-primary shrink-0',
                'transition-colors',
                isActive
                  ? `bg-bg-editor text-text-primary border-t-2 ${tabColors[tab.name] || 'border-t-accent'}`
                  : 'bg-bg-primary text-text-muted border-t-2 border-t-transparent hover:bg-bg-hover hover:text-text-secondary',
              )}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={isActive}
              aria-label={tab.name}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate max-w-[120px]">{tab.name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab.id);
                }}
                className="ml-0.5 rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-bg-active transition-opacity"
                aria-label={`Close ${tab.name}`}
              >
                <X className="h-3 w-3" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
