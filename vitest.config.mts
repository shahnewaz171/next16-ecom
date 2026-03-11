/*
  - coverage thresholds: the coverage threshold defines the minimum percentage of code coverage we tests must achieve. If the coverage drops below these values, the test run will fail.
  - Statements: executed instructions
  - Functions: called functions
  - Branches: conditional paths tested
  - Lines: executed lines
*/

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    exclude: ['**\/node_modules/**', '**\/.git/**', 'e2e/**'],
    coverage: {
      // include: ['components/ui/**/*.{ts,tsx}', 'features/**/*.{ts,tsx}'],
      thresholds: {
        branches: 80, 
        functions: 80, 
        lines: 80, 
        statements: -10 
      }
    }
  }
});