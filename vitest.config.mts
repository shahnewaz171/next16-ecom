/*
  - coverage thresholds: the coverage threshold defines the minimum percentage of code coverage we tests must achieve. If the coverage drops below these values, the test run will fail.
*/

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: false,
    fileParallelism: true,

    setupFiles: ['./tests/vitest.setup.ts', './tests/msw.setup.ts'],
    // globalSetup: ['./tests/vitest.global.setup.ts'],

    // Defines which files will be considered tests (unit and integration)
    include: ['components/**/*.{spec,test}.{ts,tsx}', 'features/**/*.{spec,test}.{ts,tsx}', 'tests/integration/**/*.{spec,test}.{ts,tsx}', 'hooks/**/*.{spec,test}.{ts,tsx}'],
    // exclude: ['**\/node_modules/**', '**\/.git/**', 'e2e/**'],

    coverage: {
      reportsDirectory: 'coverage',

      include: ['components/ui/**/*.{ts,tsx}', 'features/**/*.{ts,tsx}', 'tests/integration/**/*.{ts,tsx}'],
      exclude: [
        // Ignore type definitions
        '**/types/**',
        "**/*.d.ts",
        "**/*.type.{ts,tsx}",
        "**/*.types.{ts,tsx}",
        "**/*.interface.{ts,tsx}",

        // Ignore layout.tsx
        '**/layout.{ts,tsx}',

        // Ignore mocks and test utilities
        '**/*.mock.{ts,tsx}',
        '**/*.mocks.{ts,tsx}',
        '**/mocks/**',
        '**/__mocks__/**',
        '**/__tests__/**',
        '**/__test-utils__/**',
        '**/*.test-util.ts',
      ],

      thresholds: {
        // conditional paths tested
        branches: 80, 

        // called functions
        functions: 80, 

        // executed lines
        lines: 80, 

        // executed instructions
        statements: 80
      }
    }
  }
});