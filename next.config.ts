import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  transpilePackages: [],
  experimental: {
    optimizePackageImports: []
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
