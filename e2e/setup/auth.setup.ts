import path from 'node:path';
import { expect, test as setup } from '@playwright/test';

/**
 * Playwright recommended authentication setup.
 *
 * This runs once before all authenticated tests and saves the browser
 * storage state (cookies + localStorage) to a JSON file. Subsequent
 * tests that depend on the `auth-setup` project load this file via
 * `storageState` instead of logging in again.
 *
 * @see https://playwright.dev/docs/auth
 */

const authFile = path.resolve(__dirname, '../.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Navigate to login page
  await page.goto('/login');

  // The demo app has pre-filled credentials — just click Sign In
  await page.getByRole('main').getByRole('button', { name: 'Sign In' }).click();

  // Wait for redirect to profile (or wherever the app sends after login)
  await expect(page).not.toHaveURL('/login', { timeout: 15_000 });

  // Persist the authenticated state for reuse by other tests
  await page.context().storageState({ path: authFile });
});
