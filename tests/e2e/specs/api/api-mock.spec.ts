import { expect } from '@playwright/test';
import { test } from '@/tests/e2e/fixtures';
import { mockApiError, mockApiRoute } from '@/tests/e2e/requests/api-mock';

/**
 * Demonstrates mock API usage in Playwright tests.
 *
 * This app primarily uses server-side data fetching (RSC), so client-side
 * API mocking opportunities are limited. These tests show how to use
 * the mocking utilities for any client-side fetch calls or future API routes.
 */

test.describe('API Mocking Examples', () => {
  test('should handle mocked API response', async ({ page }) => {
    // Mock any client-side fetch to /api/* pattern
    await mockApiRoute(page, '**/api/products*', {
      products: [{ id: '1', name: 'Mock Product', price: 9.99, category: 'Test' }],
      totalProducts: 1,
      totalPages: 1,
      currentPage: 1
    });

    await page.goto('/');
    await expect(page).toHaveTitle(/Commerce/);
  });

  test('should handle API error gracefully', async ({ page }) => {
    // Mock an API endpoint to return 500
    await mockApiError(page, '**/api/checkout*', 500, 'Server error');

    await page.goto('/');
    // App should still load without crashing
    await expect(page.getByRole('heading', { name: 'Welcome to Commerce' })).toBeVisible();
  });
});
