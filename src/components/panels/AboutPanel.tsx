'use client';

import { motion } from 'framer-motion';
import { educationList, interests, timeline } from '@/data/education';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, GraduationCap, Heart, Clock } from 'lucide-react';

export default function AboutPanel() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-8">
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <span className="text-green">➜</span>
        <span>~/portfolio/about.tsx</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-text-primary mb-2">About Me</h1>
        <p className="text-sm text-text-secondary leading-relaxed">
          I&apos;m a full-stack developer with 5+ years of experience building modern web applications.
          I specialize in React, Next.js, and Node.js, with a growing passion for AI/ML.
          When I&apos;m not coding, you&apos;ll find me contributing to open source, writing technical articles,
          or exploring the latest in tech.
        </p>
      </motion.div>

      <Separator className="my-6" />

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-semibold text-text-primary">Education</h2>
        </div>
        <div className="space-y-4">
          {educationList.map((edu) => (
            <div key={edu.id} className="p-4 rounded border border-border-primary bg-bg-secondary">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{edu.degree}</h3>
                  <p className="text-xs text-text-muted">{edu.institution} · {edu.location}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Calendar className="h-3 w-3 text-text-muted" />
                    <span className="text-xs text-text-muted">{edu.startYear} - {edu.endYear}</span>
                  </div>
                </div>
                <Badge variant="success" className="shrink-0 text-[10px]">{edu.highlights[0]}</Badge>
              </div>
              <p className="text-xs text-text-secondary mt-2">{edu.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {edu.highlights.slice(1).map((h) => (
                  <Badge key={h} variant="secondary" className="text-[10px]">{h}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <Separator className="my-6" />

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-semibold text-text-primary">My Journey</h2>
        </div>
        <div className="relative pl-6 border-l-2 border-border-secondary">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="relative mb-4 last:mb-0"
            >
              <div className="absolute -left-[25px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-bg-primary" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-accent">{item.year}</span>
                <span className="text-xs text-text-primary">{item.event}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Separator className="my-6" />

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Heart className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-semibold text-text-primary">Interests</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <Badge key={interest.label} variant="outline" className="text-xs py-1 px-3">
              {interest.emoji} {interest.label}
            </Badge>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
