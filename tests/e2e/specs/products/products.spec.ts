import { expect } from '@playwright/test';
import { test } from '@/e2e/fixtures';

test.describe('Products Page', () => {
  test.beforeEach(async ({ productsPage }) => {
    await productsPage.goto();
  });

  test('should display page heading and description', async ({ productsPage }) => {
    await expect(productsPage.heading()).toBeVisible();
    await expect(productsPage.description()).toBeVisible();
  });

  test('should display product cards', async ({ productsPage }) => {
    const cards = productsPage.productCards();
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeGreaterThan(0);
  });

  test('should filter products by category', async ({ productsPage, page }) => {
    await productsPage.filterByCategory('Audio');
    await expect(page).toHaveURL(/category=Audio/);
  });

  test('should sort products', async ({ productsPage, page }) => {
    await productsPage.sortBy('Price: Low');
    await expect(page).toHaveURL(/sort=price-low/);
  });

  test('should navigate to product detail when clicking a product card', async ({
    productsPage,
    page
  }) => {
    const firstCard = productsPage.productCards().first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/product\/\d+/);
  });
});
