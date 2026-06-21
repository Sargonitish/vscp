'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { BRANCH_NAME, LANGUAGE_MODE, PORTFOLIO_VERSION, GITHUB_USERNAME } from '@/lib/constants';
import {
  GitBranch,
  CheckCircle2,
  XCircle,
  BookOpen,
  Radio,
  type LucideIcon,
} from 'lucide-react';

function useTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function StatusBarItem({
  icon: Icon,
  label,
  onClick,
  active,
}: {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 px-2 py-0.5 text-[12px] transition-colors hover:bg-white/10
        ${active ? 'bg-white/10' : ''}`}
      aria-label={label}
    >
      <Icon className="h-3 w-3" />
      <span className="hidden sm:inline truncate max-w-[120px]">{label}</span>
    </button>
  );
}

export function StatusBar() {
  const time = useTime();
  const { toggleTerminal, terminalVisible } = useStore();

  return (
    <div
      className="flex h-[22px] items-center justify-between bg-bg-status px-2 text-[12px] text-white shrink-0 select-none"
      role="status"
      aria-label="Status Bar"
    >
      {/* Left */}
      <div className="flex items-center gap-0.5">
        <StatusBarItem icon={GitBranch} label={BRANCH_NAME} />
        <StatusBarItem icon={CheckCircle2} label="Ready" />
        <span className="hidden lg:block">
          <StatusBarItem icon={BookOpen} label="Ln 1, Col 1" />
        </span>
        <span className="hidden xl:block">
          <StatusBarItem icon={Radio} label={LANGUAGE_MODE} />
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-0.5">
        <StatusBarItem
          icon={terminalVisible ? XCircle : Radio}
          label="Terminal"
          onClick={toggleTerminal}
          active={terminalVisible}
        />
        <span className="hidden md:block">
          <StatusBarItem icon={CheckCircle2} label={`v${PORTFOLIO_VERSION}`} />
        </span>
        <span className="hidden lg:block">
          <StatusBarItem icon={CheckCircle2} label={`@${GITHUB_USERNAME}`} />
        </span>
        <div className="px-2 text-[12px] opacity-80">{time}</div>
      </div>
    </div>
  );
}
