'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, ExternalLink, Star, GitFork, Filter } from 'lucide-react';
import { formatCount } from '@/lib/utils';

export default function ProjectsPanel() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-8">
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <span className="text-yellow">➜</span>
        <span>~/portfolio/projects.json</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Projects</h1>
        <div className="flex items-center gap-1 text-xs text-text-muted">
          <Filter className="h-3 w-3" />
          <span>{filteredProjects.length} of {projects.length}</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 text-xs rounded-full border transition-colors
              ${activeCategory === cat
                ? 'bg-accent text-white border-accent'
                : 'border-border-primary text-text-secondary hover:bg-bg-hover'
              }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <AnimatePresence mode="popLayout">
        <div className="grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
            >
              <Card className="h-full group hover:border-accent/50 transition-colors">
                {/* Project Image */}
                <div className="relative h-40 bg-bg-tertiary overflow-hidden rounded-t">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl opacity-20">{'</>'}</div>
                  </div>
                  {project.featured && (
                    <Badge variant="default" className="absolute top-2 right-2 text-[10px]">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pb-2">
                  <p className="text-xs text-text-secondary line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[9px]">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[10px] text-text-muted bg-bg-tertiary px-1.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] text-text-muted">+{project.techStack.length - 4}</span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" /> {formatCount(project.stars)}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" /> {formatCount(project.forks)}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
                        <Globe className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
