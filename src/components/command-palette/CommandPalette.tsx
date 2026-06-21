'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useStore } from '@/store/useStore';
import { COMMANDS } from '@/lib/constants';
import { FileText, Search as SearchIcon, Command, ArrowRight } from 'lucide-react';

export function CommandPalette() {
  const { commandPaletteOpen, toggleCommandPalette, openFile } = useStore();
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = COMMANDS.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase()),
  );

  const executeCommand = useCallback(
    (name: string) => {
      if (name === 'help' || name === 'about' || name === 'skills' || name === 'whoami') {
        // These would be terminal commands - for now open relevant panels
        const tabMap: Record<string, string> = {
          about: 'about.tsx',
          skills: 'skills.ts',
          projects: 'projects.json',
          contact: 'contact.tsx',
          experience: 'experience.ts',
          github: 'github.md',
          resume: 'resume.pdf',
        };
        const file = tabMap[name];
        if (file) {
          openFile({ id: file, name: file, path: file });
        }
      }
      toggleCommandPalette();
      setQuery('');
    },
    [openFile, toggleCommandPalette],
  );

  useEffect(() => {
    if (commandPaletteOpen) {
      setQuery('');
      setSelectedIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [commandPaletteOpen]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIdx((prev) => Math.min(prev + 1, filteredCommands.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIdx((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && filteredCommands[selectedIdx]) {
      e.preventDefault();
      executeCommand(filteredCommands[selectedIdx].name);
    } else if (e.key === 'Escape') {
      toggleCommandPalette();
    }
  };

  if (!commandPaletteOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/50"
      onClick={(e) => {
        if (e.target === e.currentTarget) toggleCommandPalette();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div className="w-full max-w-lg rounded-lg border border-border-primary bg-bg-secondary shadow-2xl overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border-primary">
          <Command className="h-4 w-4 text-text-muted shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command..."
            className="flex-1 bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted"
            aria-label="Command search"
          />
          <kbd className="hidden md:inline-flex h-5 items-center rounded border border-border-secondary bg-bg-primary px-1.5 text-[10px] text-text-muted">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-72 overflow-y-auto py-1" role="listbox">
          {filteredCommands.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-text-muted">
              No commands found
            </div>
          ) : (
            filteredCommands.map((cmd, i) => (
              <button
                key={cmd.name}
                onClick={() => executeCommand(cmd.name)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                  i === selectedIdx
                    ? 'bg-bg-active text-text-primary'
                    : 'text-text-secondary hover:bg-bg-hover'
                }`}
                role="option"
                aria-selected={i === selectedIdx}
              >
                <ArrowRight className="h-3.5 w-3.5 text-text-muted shrink-0" />
                <span className="font-medium">{cmd.name}</span>
                <span className="text-xs text-text-muted ml-auto truncate max-w-[200px]">
                  {cmd.description}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
