'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/data/achievements';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, Code, Brain, Lightbulb, BadgeCheck, type LucideIcon } from 'lucide-react';

const typeIcons: Record<string, LucideIcon> = {
  award: Trophy,
  certification: BadgeCheck,
  ranking: Code,
  competition: Brain,
};

const typeVariants: Record<string, 'default' | 'success' | 'warning' | 'secondary'> = {
  award: 'default',
  certification: 'success',
  ranking: 'warning',
  competition: 'secondary',
};

export default function AchievementsPanel() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-8">
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <span className="text-accent">➜</span>
        <span>~/portfolio/achievements.md</span>
      </div>

      <h1 className="text-2xl font-bold text-text-primary mb-2">Achievements</h1>
      <p className="text-sm text-text-secondary mb-6">
        Awards, certifications, rankings, and competitive programming highlights.
      </p>

      <div className="grid gap-3">
        {achievements.map((achievement, i) => {
          const Icon = typeIcons[achievement.type] || Award;
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              className="flex items-start gap-3 p-4 rounded border border-border-primary bg-bg-secondary hover:border-accent/30 transition-colors"
            >
              <div className="mt-0.5">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-text-primary">{achievement.title}</h3>
                  <Badge variant={typeVariants[achievement.type] || 'secondary'} className="shrink-0 text-[10px] capitalize">
                    {achievement.type}
                  </Badge>
                </div>
                <p className="text-xs text-text-secondary mt-1">{achievement.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] text-text-muted">{new Date(achievement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
                  {achievement.url && (
                    <a
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-accent hover:underline"
                    >
                      View details →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
