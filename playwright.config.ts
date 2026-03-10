import path from 'node:path';
import { defineConfig, devices } from '@playwright/test';

// ─── Environment ───────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
const baseURL = process.env.BASE_URL || `http://localhost:${PORT}`;
const isCI = !!process.env.CI;
const slowMo = process.env.SLOW_MO ? Number.parseInt(process.env.SLOW_MO, 10) : 0;
const startLocalServer = PORT === 3000;

// ─── Auth state file ───────────────────────────────────────────────
const authFile = path.resolve(__dirname, 'e2e/.auth/user.json');

export default defineConfig({
  testDir: './e2e/specs',
  outputDir: './e2e/.results',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,

  reporter: isCI
    ? [['html', { outputFolder: 'playwright-report/html', open: 'never' }], ['list']]
    : [['html', { outputFolder: 'playwright-report/html', open: 'on-failure' }]],

  use: {
    baseURL,
    headless: isCI,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    testIdAttribute: 'data-test-id',
    launchOptions: slowMo ? { slowMo } : undefined
  },

  projects: [
    {
      name: 'auth-setup',
      testDir: './e2e/setup',
      testMatch: 'auth.setup.ts'
    },
    {
      name: 'chromium',
      testIgnore: /auth/,
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'auth-chromium',
      testMatch: /auth/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: authFile
      },
      dependencies: ['auth-setup']
    }

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  webServer: startLocalServer
    ? {
        command: 'pnpm run dev',
        url: baseURL,
        reuseExistingServer: !isCI,
        timeout: 120 * 1000
      }
    : undefined
});
