/* 
   - File executed before each **test file** and ideal for global configuration like jest-dom and cleanup
 */

import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';

import '@testing-library/jest-dom/vitest';

// This setup file is used to configure the testing environment for Vitest. It includes necessary imports and global configurations that will be applied to all test files. By centralizing this setup, we can ensure consistency across tests and avoid repetitive code in individual test files.
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers for better assertions on DOM nodes
expect.extend(matchers);

afterEach(async () => {
  // Cleanup the DOM after each test to prevent memory leaks and ensure test isolation
  cleanup();

  // Reset all mocks after each test to ensure that tests do not affect each other
  vi.resetAllMocks();
});
