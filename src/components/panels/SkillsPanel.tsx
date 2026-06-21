'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Monitor,
  Server,
  Smartphone,
  Database,
  Cloud,
  Brain,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Smartphone,
  Database,
  Cloud,
  Brain,
  Wrench,
};

export default function SkillsPanel() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const currentCategory = skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];

  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-8">
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <span className="text-pink">➜</span>
        <span>~/portfolio/skills.ts</span>
      </div>

      <h1 className="text-2xl font-bold text-text-primary mb-6">Skills & Technologies</h1>

      {/* Category Tabs */}
      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-6">
        <TabsList className="w-full flex-wrap h-auto gap-1 bg-transparent p-0">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Monitor;
            return (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 data-[state=active]:bg-accent data-[state=active]:text-white rounded-full"
              >
                <Icon className="h-3.5 w-3.5" />
                {cat.title}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>

      {/* Skills Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
        >
          <div className="grid gap-3">
            {currentCategory.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="p-3 rounded border border-border-primary bg-bg-secondary"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-[10px]">
                      {skill.years} {skill.years === 1 ? 'year' : 'years'}
                    </Badge>
                    <span className="text-xs text-accent font-semibold w-8 text-right">{skill.level}%</span>
                  </div>
                </div>
                <Progress value={skill.level} className="h-1.5" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
