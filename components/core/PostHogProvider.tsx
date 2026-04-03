'use client';

import { PostHogProvider as PHProvider } from '@posthog/react';
import posthog from 'posthog-js';
import { POSTHOG_HOST, POSTHOG_KEY } from '@/utils/env';

posthog.init(POSTHOG_KEY, {
  api_host: POSTHOG_HOST,
  defaults: '2026-01-30'
});

const PostHogProvider = ({ children }: { children: React.ReactNode }) => (
  <PHProvider client={posthog}>{children}</PHProvider>
);

export default PostHogProvider;
