import { afterEach } from 'node:test';
import { setupServer } from 'msw/node';
import { afterAll, beforeAll } from 'vitest';
import { handlers } from '@/tests/__mocks__/handlers';

export const server = setupServer(...handlers);

beforeAll(() => {
  // Start the interception.
  server.listen();
});

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
});

afterAll(() => {
  // Disable request interception and clean up.
  server.close();
});
