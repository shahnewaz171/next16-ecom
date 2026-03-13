import { expect } from '@playwright/test';
import { test } from '@/tests/e2e/fixtures';

test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('should display login form elements', async ({ loginPage }) => {
    await expect(loginPage.heading()).toBeVisible();
    await expect(loginPage.subtitle()).toBeVisible();
    await expect(loginPage.emailInput()).toBeVisible();
    await expect(loginPage.passwordInput()).toBeVisible();
    await expect(loginPage.signInButton()).toBeVisible();
  });

  test('should have pre-filled demo credentials', async ({ loginPage }) => {
    await expect(loginPage.emailInput()).toHaveValue('john.doe@example.com');
    await expect(loginPage.passwordInput()).toHaveValue('password123');
  });

  test('should display social links', async ({ loginPage }) => {
    await expect(loginPage.signUpLink()).toBeVisible();
    await expect(loginPage.forgotPasswordLink()).toBeVisible();
  });

  test('should submit login form and redirect', async ({ loginPage, page }) => {
    await loginPage.signIn();
    // After login, user should be redirected away from the login page
    await expect(page).not.toHaveURL('/login', { timeout: 10_000 });
  });
});
