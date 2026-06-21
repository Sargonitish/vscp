'use client';

import { useStore } from '@/store/useStore';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Palette, Type, Terminal, Activity, Sparkles } from 'lucide-react';

export function SettingsPanel() {
  const { sidebarVisible, activeSidebar, setActiveSidebar, settings, updateSettings } = useStore();
  const { themeList, setTheme } = useTheme();

  const isOpen = activeSidebar === 'settings' && sidebarVisible;

  if (!isOpen) return null;

  return (
    <div className="flex h-full w-[300px] flex-col border-r border-border-primary bg-bg-sidebar shrink-0 animate-slide-in">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border-primary">
        <span className="text-[11px] font-medium uppercase tracking-wider text-text-secondary">
          SETTINGS
        </span>
        <button
          onClick={() => setActiveSidebar(null)}
          className="p-0.5 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Close settings"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Theme */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Palette className="h-4 w-4 text-accent" />
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">Theme</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {themeList.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setTheme(theme.id)}
                  className={`flex items-center gap-2 p-2 rounded text-xs border transition-colors ${
                    settings.theme === theme.id
                      ? 'border-accent bg-accent/10 text-accent'
                      : 'border-border-primary text-text-secondary hover:bg-bg-hover'
                  }`}
                >
                  <span
                    className="h-3 w-3 rounded-full border border-border-secondary shrink-0"
                    style={{ backgroundColor: theme.colors['--accent'] }}
                  />
                  <span className="truncate">{theme.name}</span>
                </button>
              ))}
            </div>
          </section>

          <Separator />

          {/* Font Size */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Type className="h-4 w-4 text-accent" />
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">Font Size</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-text-muted mb-1">
                  <span>Editor</span>
                  <span>{settings.fontSize}px</span>
                </div>
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={([v]) => updateSettings({ fontSize: v })}
                  min={12}
                  max={24}
                  step={1}
                />
              </div>
              <div>
                <div className="flex justify-between text-xs text-text-muted mb-1">
                  <span>Terminal</span>
                  <span>{settings.terminalFontSize}px</span>
                </div>
                <Slider
                  value={[settings.terminalFontSize]}
                  onValueChange={([v]) => updateSettings({ terminalFontSize: v })}
                  min={10}
                  max={20}
                  step={1}
                />
              </div>
            </div>
          </section>

          <Separator />

          {/* Terminal */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="h-4 w-4 text-accent" />
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">Terminal</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">Show Terminal</span>
                <Switch
                  checked={settings.terminalVisible}
                  onCheckedChange={(v) => updateSettings({ terminalVisible: v })}
                />
              </div>
            </div>
          </section>

          <Separator />

          {/* Animations */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Activity className="h-4 w-4 text-accent" />
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">Animations</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-text-muted" />
                  <span className="text-xs text-text-secondary">Enable Animations</span>
                </div>
                <Switch
                  checked={settings.animationsEnabled}
                  onCheckedChange={(v) => updateSettings({ animationsEnabled: v })}
                />
              </div>
            </div>
          </section>

          <Separator />

          {/* Sidebar */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="h-4 w-4 text-accent" />
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">Sidebar</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">Show Sidebar</span>
                <Switch
                  checked={settings.sidebarVisible}
                  onCheckedChange={(v) => updateSettings({ sidebarVisible: v })}
                />
              </div>
            </div>
          </section>

          <Separator />

          {/* Editor Info */}
          <div className="text-[10px] text-text-muted text-center">
            <p>Portfolio v1.0.0</p>
            <p>{settings.theme === 'github-light' ? 'Light' : 'Dark'} Mode</p>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
