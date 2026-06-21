'use client';

import { useState, useEffect } from 'react';
import type { GitHubRepo } from '@/lib/types';
import { GITHUB_USERNAME } from '@/lib/constants';

export function useGitHub() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`,
          { next: { revalidate: 3600 } },
        );
        if (!res.ok) throw new Error('Failed to fetch repos');
        const data: GitHubRepo[] = await res.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
  const totalForks = repos.reduce((acc, r) => acc + r.forks_count, 0);
  const languages = [...new Set(repos.map((r) => r.language).filter(Boolean))];

  return { repos, loading, error, totalStars, totalForks, languages };
}
