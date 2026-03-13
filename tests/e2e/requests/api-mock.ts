import type { Page, Route } from '@playwright/test';

/**
 * API mocking utilities for Playwright tests.
 *
 * This app uses server-side data fetching (RSC) so most data doesn't
 * come through client-side API calls. These helpers are useful for
 * scenarios where client-side fetch/XHR is intercepted, or for
 * future API integration tests.
 *
 * @see https://playwright.dev/docs/mock
 * @see https://playwright.dev/docs/api/class-page#page-route
 */

type MockOptions = {
  status?: number;
  headers?: Record<string, string>;
  delay?: number;
};

/**
 * Mock a specific API route with a JSON response.
 *
 * @example
 * ```ts
 * await mockApiRoute(page, '/api/products', { products: [] });
 * ```
 */
export async function mockApiRoute(
  page: Page,
  urlPattern: string | RegExp,
  body: unknown,
  options: MockOptions = {}
) {
  const { status = 200, headers = {}, delay } = options;

  await page.route(urlPattern, async (route: Route) => {
    if (delay) await new Promise((r) => setTimeout(r, delay));

    await route.fulfill({
      status,
      contentType: 'application/json',
      headers,
      body: JSON.stringify(body)
    });
  });
}

/**
 * Mock a route to return an error response.
 *
 * @example
 * ```ts
 * await mockApiError(page, '/api/checkout', 500, 'Internal server error');
 * ```
 */
export async function mockApiError(
  page: Page,
  urlPattern: string | RegExp,
  status = 500,
  message = 'Internal Server Error'
) {
  await mockApiRoute(page, urlPattern, { error: message }, { status });
}

/**
 * Abort requests matching a pattern (useful for blocking analytics, etc.).
 *
 * @example
 * ```ts
 * await abortRequests(page, /google-analytics/);
 * ```
 */
export async function abortRequests(page: Page, urlPattern: string | RegExp) {
  await page.route(urlPattern, (route: Route) => route.abort());
}
