'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import { Briefcase, MapPin, Calendar, Award } from 'lucide-react';

const typeColors: Record<string, 'default' | 'secondary' | 'success' | 'warning'> = {
  'full-time': 'default',
  internship: 'secondary',
  freelance: 'warning',
  'open-source': 'success',
  leadership: 'default',
};

export default function ExperiencePanel() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-8">
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <span className="text-orange">➜</span>
        <span>~/portfolio/experience.ts</span>
      </div>

      <h1 className="text-2xl font-bold text-text-primary mb-2">Experience</h1>
      <p className="text-sm text-text-secondary mb-6">
        Professional journey, internships, freelance work, and open-source contributions.
      </p>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-4 rounded border border-border-primary bg-bg-secondary hover:border-accent/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Briefcase className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{exp.role}</h3>
                  <p className="text-xs text-text-muted">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="flex items-center gap-1 text-[11px] text-text-muted">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-text-muted">
                      <Calendar className="h-3 w-3" />
                      {formatDate(exp.startDate)} - {exp.endDate === 'Present' ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                </div>
              </div>
              <Badge variant={typeColors[exp.type] || 'secondary'} className="shrink-0 text-[10px] capitalize">
                {exp.type.replace('-', ' ')}
              </Badge>
            </div>

            <p className="text-xs text-text-secondary mb-3 ml-7">{exp.description}</p>

            <div className="ml-7 space-y-1.5">
              {exp.achievements.map((achievement, j) => (
                <div key={j} className="flex items-start gap-2">
                  <Award className="h-3 w-3 text-accent mt-0.5 shrink-0" />
                  <span className="text-[11px] text-text-secondary">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
