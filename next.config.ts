import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: '/home/nitish/Downloads/vscd/vscd-portfolio',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

export default nextConfig;
