import type { FileItem, Tab } from './types';

export const PORTFOLIO_NAME = 'portfolio';
export const PORTFOLIO_VERSION = '1.0.0';
export const AUTHOR_NAME = 'Your Name';
export const AUTHOR_ROLE = 'Full-Stack Developer';
export const AUTHOR_EMAIL = 'hello@yourname.dev';
export const AUTHOR_LOCATION = 'San Francisco, CA';
export const AUTHOR_PRONOUNS = 'he/him';
export const GITHUB_USERNAME = 'yourusername';

export const BRANCH_NAME = 'main';
export const LANGUAGE_MODE = 'TypeScript';

export const FILE_TREE: FileItem[] = [
  {
    name: 'Portfolio',
    path: 'portfolio',
    type: 'folder',
    children: [
      { name: 'home.tsx', path: 'home.tsx', type: 'file', icon: 'file-type-react' },
      { name: 'about.tsx', path: 'about.tsx', type: 'file', icon: 'file-type-react' },
      { name: 'projects.json', path: 'projects.json', type: 'file', icon: 'file-type-json' },
      { name: 'skills.ts', path: 'skills.ts', type: 'file', icon: 'file-type-typescript' },
      { name: 'experience.ts', path: 'experience.ts', type: 'file', icon: 'file-type-typescript' },
      { name: 'achievements.md', path: 'achievements.md', type: 'file', icon: 'file-type-markdown' },
      { name: 'resume.pdf', path: 'resume.pdf', type: 'file', icon: 'file-type-pdf' },
      { name: 'contact.tsx', path: 'contact.tsx', type: 'file', icon: 'file-type-react' },
      { name: 'github.md', path: 'github.md', type: 'file', icon: 'file-type-markdown' },
      { name: 'README.md', path: 'readme.md', type: 'file', icon: 'file-type-markdown' },
    ],
  },
];

export const DEFAULT_TABS: Tab[] = [
  { id: 'readme.md', name: 'README.md', path: 'readme.md' },
];

export const COMMANDS = [
  { name: 'help', description: 'List all available commands' },
  { name: 'about', description: 'About me' },
  { name: 'skills', description: 'List my technical skills' },
  { name: 'projects', description: 'Show my projects' },
  { name: 'github', description: 'GitHub profile stats' },
  { name: 'contact', description: 'Contact information' },
  { name: 'resume', description: 'Download my resume' },
  { name: 'clear', description: 'Clear the terminal' },
  { name: 'theme', description: 'Change theme: theme <name>' },
  { name: 'whoami', description: 'Display current user' },
  { name: 'education', description: 'Show my education' },
  { name: 'experience', description: 'Show work experience' },
  { name: 'banner', description: 'Display ASCII banner' },
  { name: 'date', description: 'Show current date and time' },
  { name: 'repo', description: 'GitHub repository stats' },
];

export const ACTIVITY_BAR_ITEMS = [
  { id: 'explorer', icon: 'FileText', label: 'Explorer' },
  { id: 'search', icon: 'Search', label: 'Search' },
  { id: 'source-control', icon: 'GitBranch', label: 'Source Control' },
  { id: 'projects', icon: 'FolderKanban', label: 'Projects' },
  { id: 'skills', icon: 'Zap', label: 'Skills' },
  { id: 'github', icon: 'Globe', label: 'GitHub' },
  { id: 'contact', icon: 'Mail', label: 'Contact' },
  { id: 'settings', icon: 'Settings', label: 'Settings' },
];

export const THEME_NAMES = [
  'vs-dark',
  'dracula',
  'monokai',
  'one-dark-pro',
  'github-dark',
  'github-light',
  'nord',
  'solarized-dark',
  'tokyo-night',
  'material-dark',
];

export const EMOJIS = ['🚀', '💻', '🔥', '⚡', '🎯', '🧠', '🎨', '📱', '🌐', '🤖'];
