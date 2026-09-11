import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig: NextConfig = {
  output: isGithubPages ? 'export' : undefined,
  basePath: isGithubPages ? '/JSX-Studio' : '',
  assetPrefix: isGithubPages ? '/JSX-Studio/' : '',
  transpilePackages: ['@jxp/ui', '@jxp/graphql-client'],
  trailingSlash: true,
  images: {
    unoptimized: true,
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
