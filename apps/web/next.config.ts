import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@jxp/ui', '@jxp/graphql-client'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

export default nextConfig;
