'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { FILE_TREE } from '@/lib/constants';
import type { FileItem, Tab } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  ChevronRight,
  ChevronDown,
  File,
  FileJson,
  FileText,
  Type,
  BookOpen,
  FileSpreadsheet,
} from 'lucide-react';

const fileIconMap: Record<string, React.ElementType> = {
  'file-type-react': File,
  'file-type-json': FileJson,
  'file-type-typescript': Type,
  'file-type-markdown': BookOpen,
  'file-type-pdf': FileText,
};

function FileIcon({ item }: { item: FileItem }) {
  if (item.type === 'folder') return null;
  const Icon = item.icon ? fileIconMap[item.icon] : File;
  return <Icon className="h-4 w-4 shrink-0 text-blue" />;
}

function FileTreeItem({
  item,
  depth = 0,
  onFileClick,
}: {
  item: FileItem;
  depth?: number;
  onFileClick: (item: FileItem) => void;
}) {
  const [expanded, setExpanded] = useState(true);
  const { openTabs, activeTabId } = useStore();
  const isActive = activeTabId === item.path;
  const isOpen = openTabs.some((t) => t.id === item.path);

  if (item.type === 'folder') {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            'flex w-full items-center gap-1 py-1 px-2 text-xs hover:bg-bg-hover transition-colors',
            'text-text-secondary',
          )}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          aria-label={`Toggle ${item.name}`}
        >
          {expanded ? <ChevronDown className="h-3.5 w-3.5 shrink-0" /> : <ChevronRight className="h-3.5 w-3.5 shrink-0" />}
          <span className="text-[11px] font-medium">{item.name}</span>
        </button>
        {expanded && item.children?.map((child) => (
          <FileTreeItem key={child.path} item={child} depth={depth + 1} onFileClick={onFileClick} />
        ))}
      </div>
    );
  }

  return (
    <button
      onClick={() => onFileClick(item)}
      className={cn(
        'flex w-full items-center gap-1.5 py-1 px-2 text-xs transition-colors',
        'hover:bg-bg-hover',
        isActive
          ? 'bg-bg-active text-text-primary'
          : isOpen
          ? 'text-text-primary'
          : 'text-text-secondary',
      )}
      style={{ paddingLeft: `${depth * 16 + 20}px` }}
      aria-label={`Open ${item.name}`}
      aria-current={isActive ? 'true' : undefined}
    >
      <FileIcon item={item} />
      <span className="truncate">{item.name}</span>
    </button>
  );
}

export function Sidebar() {
  const { openFile, sidebarVisible, activeSidebar, searchQuery } = useStore();

  const handleFileClick = (item: FileItem) => {
    const tab: Tab = { id: item.path, name: item.name, path: item.path };
    openFile(tab);
  };

  const sidebarTitle = activeSidebar === 'search' ? 'Search' : 'Explorer';

  if (!sidebarVisible) return null;

  return (
    <div
      className="flex h-full w-[260px] flex-col border-r border-border-primary bg-bg-sidebar shrink-0 animate-slide-in"
      role="complementary"
      aria-label={sidebarTitle}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border-primary">
        <span className="text-[11px] font-medium uppercase tracking-wider text-text-secondary">
          {sidebarTitle}
        </span>
        <span className="text-[10px] text-text-muted">...</span>
      </div>

      {/* File Tree */}
      <div className="flex-1 overflow-y-auto py-1">
        {FILE_TREE.map((item) => (
          <FileTreeItem key={item.path} item={item} onFileClick={handleFileClick} />
        ))}
      </div>

      {/* Outline / Filter */}
      <div className="border-t border-border-primary px-4 py-1.5">
        <div className="flex items-center gap-2 text-[10px] text-text-muted">
          <span>0 files</span>
          {searchQuery && <span>· Filtered</span>}
        </div>
      </div>
    </div>
  );
}
