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
    localPatterns: [
      {
        pathname: '/assets/**'
      }
    ]
  },
  experimental: {
    optimizePackageImports: [],
    turbopackFileSystemCacheForDev: true
  },
  compiler: {
    removeConsole: {
      exclude: ['error']
    }

    // executes after production build compilation completes.
    // runAfterProductionCompile: async ({ projectDir, distDir }) => {
    // }
  }
};

export default nextConfig;
