'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { PORTFOLIO_NAME, BRANCH_NAME, AUTHOR_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  GitBranch,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  X,
  Minus,
  Square,
} from 'lucide-react';

export function TitleBar() {
  const { sidebarVisible, toggleSidebar, searchQuery, setSearchQuery } = useStore();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex h-[35px] items-center justify-between border-b border-border-primary bg-bg-title select-none shrink-0"
      role="banner"
      aria-label="Title Bar"
    >
      {/* Left */}
      <div className="flex items-center gap-1 pl-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-text-muted hover:text-text-primary"
          onClick={toggleSidebar}
          aria-label={sidebarVisible ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {sidebarVisible ? <ChevronLeft className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
        </Button>
        <span className="text-xs font-medium text-text-secondary px-2 truncate max-w-[200px]">
          {AUTHOR_NAME} — {PORTFOLIO_NAME}
        </span>
      </div>

      {/* Center */}
      <div className="hidden sm:flex items-center gap-2">
        <div className="relative flex items-center">
          <Search className="absolute left-2 h-3 w-3 text-text-muted" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search files..."
            className="h-6 w-48 rounded bg-bg-tertiary border-border-secondary pl-6 text-xs text-text-secondary placeholder:text-text-muted"
            aria-label="Search files"
          />
          <kbd className="absolute right-2 hidden md:inline-flex h-4 items-center rounded border border-border-secondary bg-bg-primary px-1 text-[10px] text-text-muted">
            Ctrl+P
          </kbd>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1 pr-2">
        <div className="hidden md:flex items-center gap-1 mr-2">
          <GitBranch className="h-3 w-3 text-text-muted" />
          <span className="text-[11px] text-text-muted">{BRANCH_NAME}</span>
        </div>
        <div className="hidden md:flex items-center text-[11px] text-text-muted">
          {currentTime && <span>{currentTime}</span>}
        </div>
        <div className="flex items-center ml-2 gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6 text-text-muted hover:bg-bg-hover">
            <Minus className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-text-muted hover:bg-bg-hover">
            <Square className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-red hover:text-white text-text-muted">
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
