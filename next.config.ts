import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: 'export',
    basePath: '/vscp',
    assetPrefix: '/vscp/',
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
