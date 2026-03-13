import { expect } from '@playwright/test';
import { test } from '@/tests/e2e/fixtures';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display all navbar elements', async ({ navbar }) => {
    await expect(navbar.logo()).toBeVisible();
    await expect(navbar.searchBox()).toBeVisible();
    await expect(navbar.themeToggle()).toBeVisible();
    await expect(navbar.productsLink()).toBeVisible();
    await expect(navbar.aboutLink()).toBeVisible();
    await expect(navbar.signInLink()).toBeVisible();
  });

  test('should navigate to products page', async ({ navbar, page }) => {
    await navbar.navigateToProducts();
    await expect(page).toHaveURL(/\/products/);
    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
  });

  test('should navigate to about page', async ({ navbar, page }) => {
    await navbar.navigateToAbout();
    await expect(page).toHaveURL('/about');
  });

  test('should navigate home via logo', async ({ navbar, page }) => {
    await page.goto('/products');
    await navbar.navigateHome();
    await expect(page).toHaveURL('/');
  });

  test('should navigate to login page', async ({ navbar, page }) => {
    await navbar.signInLink().click();
    await expect(page).toHaveURL('/login');
    await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
  });
});

test.describe('Footer', () => {
  test('should display footer with categories and links', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    await expect(footer).toBeVisible();
    await expect(footer.getByRole('heading', { name: 'Categories' })).toBeVisible();
    await expect(footer.getByRole('heading', { name: 'Shop' })).toBeVisible();
    await expect(footer.getByRole('heading', { name: 'Company' })).toBeVisible();
    await expect(footer.getByText('© 2026 Commerce')).toBeVisible();
  });
});
