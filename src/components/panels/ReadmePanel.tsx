'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  AUTHOR_NAME,
  AUTHOR_ROLE,
  AUTHOR_EMAIL,
  GITHUB_USERNAME,
  AUTHOR_LOCATION,
} from '@/lib/constants';
import {
  Globe,
  Mail,
  X,
  MapPin,
  Users,
  BookOpen,
  Target,
  Smile,
  Code,
  Star,
  Zap,
} from 'lucide-react';

export default function ReadmePanel() {
  const lines = [
    { text: '# Hello, I\'m Your Name! 👋', type: 'h1' },
    { text: '', type: 'empty' },
    { text: '**Full-Stack Developer** | **Open Source Enthusiast** | **AI/ML Explorer**', type: 'bold' },
    { text: '', type: 'empty' },
    { text: `📍 ${AUTHOR_LOCATION}`, type: 'text' },
    { text: `📧 ${AUTHOR_EMAIL}`, type: 'text' },
    { text: `🔗 [github.com/${GITHUB_USERNAME}](https://github.com/${GITHUB_USERNAME})`, type: 'link' },
    { text: '', type: 'empty' },
    { text: '---', type: 'hr' },
    { text: '', type: 'empty' },
  ];

  const skills = [
    { category: 'Frontend', items: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion' },
    { category: 'Backend', items: 'Node.js, Python, Go, PostgreSQL, Redis, GraphQL' },
    { category: 'Mobile', items: 'React Native, Flutter, Expo' },
    { category: 'Cloud/DevOps', items: 'AWS, Docker, Kubernetes, Terraform, CI/CD' },
    { category: 'AI/ML', items: 'TensorFlow, PyTorch, LangChain, OpenAI' },
    { category: 'Tools', items: 'Git, VS Code, Figma, Linux, Postman' },
  ];

  const goals = [
    'Contribute more to open source projects',
    'Build and ship an AI-powered SaaS product',
    'Write technical articles and share knowledge',
    'Speak at conferences and meetups',
    'Mentor aspiring developers',
  ];

  const funFacts = [
    'I can solve a Rubik\'s cube in under 2 minutes',
    'I\'ve visited 15 countries and counting',
    'My first program was a Tic-Tac-Toe game in Python',
    'I have a collection of 50+ mechanical keyboards',
    'I run a small newsletter on system design',
  ];

  return (
    <div className="mx-auto max-4xl px-4 md:px-8 py-4 md:py-8">
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <span className="text-accent">➜</span>
        <span>~/portfolio/README.md</span>
      </div>

      {/* Header - GitHub-style README header */}
      <div className="flex items-center gap-4 mb-8 p-4 rounded border border-border-primary bg-bg-secondary">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-bg-tertiary text-2xl font-bold text-accent">
          YN
        </div>
        <div>
          <h1 className="text-xl font-bold text-text-primary">{AUTHOR_NAME}</h1>
          <p className="text-sm text-text-muted">{AUTHOR_ROLE}</p>
          <div className="flex items-center gap-3 mt-1 text-xs text-text-muted">
            <span className="flex items-center gap-1"><Users className="h-3 w-3" /> Followers: 500+</span>
            <span className="flex items-center gap-1"><Star className="h-3 w-3" /> Stars: 2.3k+</span>
            <span className="flex items-center gap-1"><Code className="h-3 w-3" /> Repos: 50+</span>
          </div>
        </div>
      </div>

      {/* README Content */}
      <div className="space-y-8">
        {/* Introduction */}
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-4 w-4 text-accent" />
            <h2 className="text-lg font-semibold text-text-primary">Introduction</h2>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">
            Hey there! I&apos;m a passionate full-stack developer who loves building things that live on the internet.
            I enjoy creating elegant, performant applications and contributing to the developer community.
            When I&apos;m not coding, I&apos;m probably reading about distributed systems, tinkering with new tech,
            or planning my next travel adventure.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline" className="text-[10px]">💻 Full-Stack</Badge>
            <Badge variant="outline" className="text-[10px]">⚡ Performance</Badge>
            <Badge variant="outline" className="text-[10px]">🤖 AI/ML</Badge>
            <Badge variant="outline" className="text-[10px]">🌍 Open Source</Badge>
          </div>
        </motion.section>

        <Separator />

        {/* Skills */}
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-4 w-4 text-accent" />
            <h2 className="text-lg font-semibold text-text-primary">Skills & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            {skills.map((skill) => (
              <div key={skill.category} className="p-3 rounded border border-border-primary bg-bg-secondary">
                <h3 className="text-xs font-semibold text-accent mb-1">{skill.category}</h3>
                <p className="text-xs text-text-secondary">{skill.items}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <Separator />

        {/* Current Goals */}
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-4 w-4 text-accent" />
            <h2 className="text-lg font-semibold text-text-primary">Current Goals</h2>
          </div>
          <ul className="space-y-2">
            {goals.map((goal, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-accent mt-0.5">◆</span>
                {goal}
              </li>
            ))}
          </ul>
        </motion.section>

        <Separator />

        {/* Fun Facts */}
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center gap-2 mb-3">
            <Smile className="h-4 w-4 text-accent" />
            <h2 className="text-lg font-semibold text-text-primary">Fun Facts</h2>
          </div>
          <ul className="space-y-2">
            {funFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-accent mt-0.5">◆</span>
                {fact}
              </li>
            ))}
          </ul>
        </motion.section>

        <Separator />

        {/* Contact */}
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <div className="flex items-center gap-2 mb-3">
            <Mail className="h-4 w-4 text-accent" />
            <h2 className="text-lg font-semibold text-text-primary">Let&apos;s Connect</h2>
          </div>
          <p className="text-sm text-text-secondary mb-3">
            I&apos;m always open to interesting conversations, collaboration opportunities, or just a friendly chat. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${AUTHOR_EMAIL}`} className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors">
              <Globe className="h-4 w-4" /> GitHub
            </a>
            <a href={`https://linkedin.com/in/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors">
              <Globe className="h-4 w-4" /> LinkedIn
            </a>
            <a href={`https://twitter.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors">
              <X className="h-4 w-4" /> Twitter
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
