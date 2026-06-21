'use client';

import { motion } from 'framer-motion';
import { useGitHub } from '@/hooks/useGitHub';
import { GITHUB_USERNAME } from '@/lib/constants';
import { formatCount } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Star, GitFork, ExternalLink, Calendar, Loader2, AlertCircle } from 'lucide-react';

export default function GitHubPanel() {
  const { repos, loading, error, totalStars, totalForks, languages } = useGitHub();

  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-8">
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <span className="text-blue">➜</span>
        <span>~/portfolio/github.md</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">GitHub</h1>
          <p className="text-sm text-text-secondary mt-1">
            Open source contributions and projects.
          </p>
        </div>
        <Button variant="outline" className="gap-2" asChild>
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
            <Globe className="h-4 w-4" />
            View Profile
          </a>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Repositories', value: repos.length, icon: Globe },
          { label: 'Total Stars', value: totalStars, icon: Star },
          { label: 'Total Forks', value: totalForks, icon: GitFork },
          { label: 'Languages', value: languages.length, icon: ExternalLink },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-3 p-4">
              <stat.icon className="h-5 w-5 text-accent shrink-0" />
              <div>
                <div className="text-lg font-bold text-text-primary">{formatCount(stat.value)}</div>
                <div className="text-xs text-text-muted">{stat.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Repositories */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-accent mr-2" />
          <span className="text-sm text-text-muted">Fetching repositories...</span>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-12 text-text-muted">
          <AlertCircle className="h-8 w-8 text-red mb-2" />
          <p className="text-sm">Failed to load repositories</p>
          <p className="text-xs mt-1">{error}</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {repos.slice(0, 10).map((repo, i) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded border border-border-primary bg-bg-secondary hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors truncate">
                      {repo.name}
                    </h3>
                    <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                      {repo.description || 'No description provided.'}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      {repo.language && (
                        <span className="flex items-center gap-1 text-[10px] text-text-muted">
                          <span className="h-2 w-2 rounded-full bg-accent" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-[10px] text-text-muted">
                        <Star className="h-3 w-3" /> {formatCount(repo.stargazers_count)}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-text-muted">
                        <GitFork className="h-3 w-3" /> {formatCount(repo.forks_count)}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-text-muted">
                        <Calendar className="h-3 w-3" /> Updated {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {repo.topics.slice(0, 5).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-[9px]">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <ExternalLink className="h-4 w-4 text-text-muted shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
