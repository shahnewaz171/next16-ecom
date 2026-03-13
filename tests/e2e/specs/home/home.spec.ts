import { expect } from '@playwright/test';
import { test } from '@/tests/e2e/fixtures';

test.describe('Home Page', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('should display hero section with correct content', async ({ homePage }) => {
    await expect(homePage.heroHeading()).toBeVisible();
    await expect(homePage.heroDescription()).toBeVisible();
    await expect(homePage.shopNowButton()).toBeVisible();
  });

  test('should display featured products section', async ({ homePage }) => {
    await expect(homePage.featuredHeading()).toBeVisible();
    const cards = homePage.productCards();
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeGreaterThan(0);
  });

  test('should display shop by category section', async ({ homePage }) => {
    await expect(homePage.categoryHeading()).toBeVisible();
  });

  test('should navigate to products page via Shop Now button', async ({ homePage, page }) => {
    await homePage.shopNowButton().click();
    await expect(page).toHaveURL(/\/products/);
  });

  test('should have correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Commerce/);
  });
});
