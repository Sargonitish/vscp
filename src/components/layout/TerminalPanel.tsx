'use client';

import { useState, useRef, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { useTerminal } from '@/hooks/useTerminal';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, X, Terminal as TerminalIcon, Plus } from 'lucide-react';

export function TerminalPanel() {
  const { terminalLines, terminalVisible, toggleTerminal } = useStore();
  const { processCommand } = useTerminal();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalLines]);

  useEffect(() => {
    if (terminalVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [terminalVisible]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    processCommand(trimmed);
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx !== -1) {
        const newIdx = historyIdx + 1;
        if (newIdx >= history.length) {
          setHistoryIdx(-1);
          setInput('');
        } else {
          setHistoryIdx(newIdx);
          setInput(history[newIdx]);
        }
      }
    }
  };

  if (!terminalVisible) {
    return (
      <button
        onClick={toggleTerminal}
        className="flex items-center gap-1.5 px-3 py-1 text-xs text-text-muted bg-bg-terminal border-t border-border-primary hover:bg-bg-hover transition-colors shrink-0"
        aria-label="Open terminal"
      >
        <TerminalIcon className="h-3.5 w-3.5" />
        <span>Terminal</span>
        <ChevronUpIcon className="h-3 w-3 ml-1" />
      </button>
    );
  }

  return (
    <div
      className="flex flex-col border-t border-border-primary bg-bg-terminal shrink-0"
      style={{ height: '200px' }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-3 py-1 border-b border-border-primary bg-bg-secondary">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs font-medium text-text-secondary">TERMINAL</span>
          <span className="text-[10px] text-text-muted">bash</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-0.5 text-text-muted hover:text-text-primary transition-colors" aria-label="New terminal">
            <Plus className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={toggleTerminal}
            className="p-0.5 text-text-muted hover:text-text-primary transition-colors"
            aria-label="Close terminal"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output */}
      <ScrollArea className="flex-1 p-2">
        <div ref={scrollRef}>
          <AnimatePresence>
            {terminalLines.map((line) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-xs leading-5 font-mono whitespace-pre-wrap ${
                  line.type === 'input'
                    ? 'text-text-primary'
                    : line.type === 'error'
                    ? 'text-red'
                    : line.type === 'system'
                    ? 'text-text-muted italic'
                    : 'text-text-secondary'
                }`}
              >
                {line.content}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ScrollArea>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="flex items-center gap-1 px-2 pb-2">
        <span className="text-xs text-accent font-mono">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-xs text-text-primary font-mono outline-none border-none placeholder:text-text-muted"
          placeholder="Type a command..."
          aria-label="Terminal input"
          spellCheck={false}
          autoComplete="off"
        />
      </form>
    </div>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
