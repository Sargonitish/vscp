export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  tags: string[];
  stars: number;
  forks: number;
  featured: boolean;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  years: number;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type: 'internship' | 'freelance' | 'full-time' | 'open-source' | 'leadership';
  logo?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  description: string;
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'certification' | 'ranking' | 'competition';
  icon: string;
  url?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

export interface Tab {
  id: string;
  name: string;
  path: string;
  icon?: string;
}

export interface TerminalLine {
  id: string;
  content: string;
  type: 'input' | 'output' | 'error' | 'system';
}

export interface Theme {
  id: string;
  name: string;
  type: 'dark' | 'light';
  colors: Record<string, string>;
}

export interface FileItem {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileItem[];
  icon?: string;
}

export interface Settings {
  theme: string;
  fontSize: number;
  terminalFontSize: number;
  animationsEnabled: boolean;
  sidebarVisible: boolean;
  terminalVisible: boolean;
}
