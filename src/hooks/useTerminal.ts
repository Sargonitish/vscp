'use client';

import { useCallback } from 'react';
import { useStore } from '@/store/useStore';
import { AUTHOR_NAME, AUTHOR_ROLE, AUTHOR_EMAIL, GITHUB_USERNAME, THEME_NAMES } from '@/lib/constants';
import { themes } from '@/themes/themes';

export function useTerminal() {
  const { addTerminalLine, clearTerminal, settings, updateSettings } = useStore();

  const processCommand = useCallback(
    (input: string) => {
      const trimmed = input.trim().toLowerCase();
      const args = trimmed.split(/\s+/);
      const cmd = args[0];

      addTerminalLine({ content: `$ ${input}`, type: 'input' });

      switch (cmd) {
        case 'help':
          addTerminalLine({
            content: [
              'Available commands:',
              '  help       - Show this help message',
              '  about      - About me',
              '  skills     - List technical skills',
              '  projects   - Show projects',
              '  github     - GitHub profile stats',
              '  contact    - Contact information',
              '  resume     - Download resume',
              '  clear      - Clear terminal',
              '  theme      - Change theme: theme <name>',
              '  whoami     - Display current user',
              '  education  - Show education',
              '  experience - Show work experience',
              '  banner     - Display ASCII art',
              '  date       - Current date/time',
            ].join('\n'),
            type: 'output',
          });
          break;

        case 'about':
          addTerminalLine({
            content: `${AUTHOR_NAME} - ${AUTHOR_ROLE}\nPassionate about building exceptional digital experiences. Full-stack engineer with expertise in modern web technologies. Open-source contributor and lifelong learner.`,
            type: 'output',
          });
          break;

        case 'skills':
          addTerminalLine({
            content: [
              'Technical Skills:',
              '  Frontend:  React, Next.js, TypeScript, Tailwind CSS',
              '  Backend:   Node.js, Python, Go, PostgreSQL',
              '  Mobile:    React Native, Flutter',
              '  Cloud:     AWS, GCP, Docker, Kubernetes',
              '  AI/ML:     TensorFlow, PyTorch, LangChain',
              '  Tools:     Git, VS Code, Figma, Linux',
            ].join('\n'),
            type: 'output',
          });
          break;

        case 'projects':
          addTerminalLine({
            content: 'Projects: 12+ open-source and commercial projects.\nOpen the projects panel or visit my GitHub for details.',
            type: 'output',
          });
          break;

        case 'github':
          addTerminalLine({
            content: `GitHub: github.com/${GITHUB_USERNAME}\nRepos: 50+ · Stars: 2.3k+ · Forks: 600+\nOpen the GitHub panel for detailed stats.`,
            type: 'output',
          });
          break;

        case 'contact':
          addTerminalLine({
            content: `Email:  ${AUTHOR_EMAIL}\nGitHub: github.com/${GITHUB_USERNAME}\nTwitter: @${GITHUB_USERNAME}\nLinkedIn: linkedin.com/in/${GITHUB_USERNAME}`,
            type: 'output',
          });
          break;

        case 'resume':
          addTerminalLine({
            content: 'Opening resume... Download link: /resume.pdf',
            type: 'output',
          });
          break;

        case 'clear':
          clearTerminal();
          break;

        case 'theme':
          if (args[1]) {
            const themeExists = themes.find((t) => t.id === args[1]);
            if (themeExists) {
              updateSettings({ theme: args[1] });
              addTerminalLine({
                content: `Theme changed to: ${themeExists.name}`,
                type: 'output',
              });
            } else {
              addTerminalLine({
                content: `Theme "${args[1]}" not found. Available themes: ${THEME_NAMES.join(', ')}`,
                type: 'error',
              });
            }
          } else {
            addTerminalLine({
              content: `Current theme: ${settings.theme}\nAvailable themes: ${THEME_NAMES.join(', ')}`,
              type: 'output',
            });
          }
          break;

        case 'whoami':
          addTerminalLine({
            content: `${AUTHOR_NAME}\nRole: ${AUTHOR_ROLE}\nLocation: San Francisco, CA\nPronouns: he/him`,
            type: 'output',
          });
          break;

        case 'education':
          addTerminalLine({
            content: [
              'Education:',
              '  B.S. Computer Science - University of Technology (2020-2024)',
              '  GPA: 3.9/4.0 · Dean\'s List · Research Assistant',
            ].join('\n'),
            type: 'output',
          });
          break;

        case 'experience':
          addTerminalLine({
            content: [
              'Experience:',
              '  Software Engineer @ Tech Corp (2024-Present)',
              '  Full-Stack Intern @ StartupXYZ (2023)',
              '  Open Source Contributor (2022-Present)',
              '  Freelance Web Developer (2021-2023)',
            ].join('\n'),
            type: 'output',
          });
          break;

        case 'banner':
          addTerminalLine({
            content: [
              '  ╔══════════════════════════════╗',
              '  ║  ██╗  ██╗███████╗██╗  ██╗  ║',
              '  ║  ╚██╗██╔╝╚══██╔══╝██║  ██║  ║',
              '  ║   ╚███╔╝    ██║   ███████║  ║',
              '  ║   ██╔██╗    ██║   ╚════██║  ║',
              '  ║  ██╔╝ ██╗   ██║        ██║  ║',
              '  ║  ╚═╝  ╚═╝   ╚═╝        ╚═╝  ║',
              '  ╚══════════════════════════════╝',
              `  ${AUTHOR_NAME} · ${AUTHOR_ROLE}`,
              '  "Building the future, one commit at a time."',
            ].join('\n'),
            type: 'output',
          });
          break;

        case 'date':
          addTerminalLine({
            content: new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              timeZoneName: 'short',
            }),
            type: 'output',
          });
          break;

        case 'repo':
          addTerminalLine({
            content: `GitHub Stats for ${GITHUB_USERNAME}:\n  Public Repos: 50+\n  Total Stars: 2.3k\n  Total Forks: 600+\n  Contributions: 4,500+ (last year)`,
            type: 'output',
          });
          break;

        case '':
          break;

        default:
          addTerminalLine({
            content: `Command not found: ${cmd}. Type "help" for available commands.`,
            type: 'error',
          });
      }
    },
    [addTerminalLine, clearTerminal, settings.theme, updateSettings],
  );

  return { processCommand, clearTerminal };
}
