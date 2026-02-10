import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  transpilePackages: [],
  typedRoutes: true,
  turbopack: {
    debugIds: true
  },
  images: {
    maximumRedirects: 3,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ],
    localPatterns: [
      {
        pathname: '/assets/**'
      }
    ]
  },
  experimental: {
    optimizePackageImports: [],
    turbopackFileSystemCacheForDev: true
    // authInterrupts: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false

    // executes after production build compilation completes.
    // runAfterProductionCompile: async ({ projectDir, distDir }) => {
    // }
  }
};

export default nextConfig;
