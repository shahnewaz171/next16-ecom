import { expect } from '@playwright/test';
import { test } from '@/e2e/fixtures';

/**
 * Authenticated tests — these use the storageState saved by auth.setup.ts
 * so they start already logged in without repeating the login flow.
 *
 * File name contains "auth" so the `auth-chromium` project picks it up
 * and injects the saved storageState automatically.
 */

test.describe('Profile (authenticated)', () => {
  test('should display profile page for authenticated user', async ({ profilePage }) => {
    await profilePage.goto();

    await expect(profilePage.premiumBadge()).toBeVisible();
    await expect(profilePage.editProfileButton()).toBeVisible();
    // LogoutButton uses `h-0` link-style variant — check it's attached
    await expect(profilePage.logoutButton()).toBeAttached();
  });

  test('should show user information', async ({ profilePage }) => {
    await profilePage.goto();

    // Profile heading (user name) should be visible
    await expect(profilePage.heading()).toBeVisible();
    // At least one element with an @ symbol (email) should exist
    await expect(profilePage.userEmail()).toBeVisible();
  });

  test('should access cart page when authenticated', async ({ page }) => {
    await page.goto('/cart');
    // Should not redirect to login
    await expect(page).toHaveURL(/\/cart/);
  });

  test('should redirect to login when not authenticated', async ({ browser }) => {
    // Create a fresh context without storageState to simulate unauthenticated user
    const context = await browser.newContext({ storageState: undefined });
    const page = await context.newPage();

    await page.goto('/profile');

    // Middleware should redirect to login
    await expect(page).toHaveURL(/\/login/);
    await context.close();
  });
});
