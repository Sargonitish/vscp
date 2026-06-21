'use client';

import { useStore } from '@/store/useStore';
import { ACTIVITY_BAR_ITEMS } from '@/lib/constants';
import {
  FileText,
  Search,
  GitBranch,
  FolderKanban,
  Zap,
  Globe,
  Mail,
  Settings,
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Search,
  GitBranch,
  FolderKanban,
  Zap,
  Globe,
  Mail,
  Settings,
};

export function ActivityBar() {
  const { activeSidebar, setActiveSidebar, sidebarVisible } = useStore();

  return (
    <TooltipProvider delayDuration={100}>
      <div
        className="flex w-[50px] flex-col items-center border-r border-border-primary bg-bg-activity shrink-0 py-2"
        role="navigation"
        aria-label="Activity Bar"
      >
        <div className="flex flex-col items-center gap-1 flex-1">
          {ACTIVITY_BAR_ITEMS.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = activeSidebar === item.id && sidebarVisible;
            return (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setActiveSidebar(item.id)}
                    className={`relative flex h-[42px] w-[42px] items-center justify-center rounded transition-colors
                      ${isActive
                        ? 'text-text-white before:absolute before:left-0 before:top-1/4 before:h-[50%] before:w-[2px] before:rounded-full before:bg-text-white'
                        : 'text-text-muted hover:text-text-primary'
                      }`}
                    aria-label={item.label}
                    aria-pressed={isActive}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right" className="ml-2 text-xs">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </TooltipProvider>
  );
}
