'use client';

import { motion } from 'framer-motion';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { AUTHOR_NAME, AUTHOR_ROLE, GITHUB_USERNAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Download, Globe, Mail, ArrowRight, MapPin } from 'lucide-react';

const roles = [
  'Full-Stack Developer',
  'UI/UX Enthusiast',
  'Open Source Contributor',
  'Problem Solver',
];

const typingText = `${roles.join(' | ')}`;

function HeroSection() {
  const { displayText } = useTypingAnimation({
    text: typingText,
    speed: 40,
    delay: 500,
  });

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-8 md:py-12">
      <div className="relative shrink-0">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent to-pink blur-md opacity-60 animate-pulse-glow" />
        <Avatar className="h-28 w-28 md:h-36 md:w-36 border-2 border-border-primary">
          <AvatarFallback className="text-3xl bg-bg-tertiary">
            {AUTHOR_NAME.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 mb-2">
          <Badge variant="success" className="text-[10px]">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
            </span>
            Available for work
          </Badge>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2">
          {AUTHOR_NAME}
        </h1>
        <div className="flex items-center gap-2 text-text-muted mb-1">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">San Francisco, CA</span>
        </div>
        <div className="h-8 md:h-10 mb-4">
          <span className="text-lg md:text-xl text-accent">
            {displayText}
            <span className="animate-blink text-accent">|</span>
          </span>
        </div>
        <p className="text-sm md:text-base text-text-secondary mb-6 max-w-xl">
          Building exceptional digital experiences with modern web technologies.
          Passionate about open source, AI/ML, and creating products that make a difference.
        </p>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="outline" className="gap-2">
            <Globe className="h-4 w-4" />
            GitHub
          </Button>
          <Button variant="ghost" size="icon" aria-label="LinkedIn">
            <Globe className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Email">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function QuickStats() {
  const stats = [
    { value: '5+', label: 'Years Coding' },
    { value: '50+', label: 'Projects' },
    { value: '2.3k+', label: 'GitHub Stars' },
    { value: '4.5k+', label: 'Contributions' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="text-center p-4 rounded border border-border-primary bg-bg-secondary"
        >
          <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
          <div className="text-xs text-text-muted mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

function FeaturedProjectsPreview() {
  const projects = [
    { title: 'AI Chat Application', tech: 'React, Python, OpenAI', stars: 567 },
    { title: 'E-Commerce Platform', tech: 'Next.js, PostgreSQL, Stripe', stars: 342 },
    { title: 'React Form Library', tech: 'TypeScript, React, Zod', stars: 891 },
  ];

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-text-primary">Featured Projects</h2>
        <Button variant="ghost" size="sm" className="text-xs gap-1">
          View all <ArrowRight className="h-3 w-3" />
        </Button>
      </div>
      <div className="grid gap-3">
        {projects.map((p) => (
          <div key={p.title} className="flex items-center justify-between p-3 rounded border border-border-primary bg-bg-secondary hover:bg-bg-hover transition-colors">
            <div>
              <div className="text-sm text-text-primary">{p.title}</div>
              <div className="text-xs text-text-muted">{p.tech}</div>
            </div>
            <Badge variant="secondary" className="text-[10px]">⭐ {p.stars}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePanel() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-8">
      <div className="mb-4">
        <div className="flex items-center gap-2 text-xs text-text-muted mb-1">
          <span className="text-blue">➜</span>
          <span>~/portfolio</span>
          <span className="text-text-muted">(main)</span>
        </div>
        <span className="text-xs text-text-muted">{'// Welcome to my portfolio. Feel free to explore!'}</span>
      </div>

      <HeroSection />
      <QuickStats />
      <FeaturedProjectsPreview />
    </div>
  );
}
