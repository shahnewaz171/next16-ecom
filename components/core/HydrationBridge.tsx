/**
 *   - Used as a wrapper in JSX: <HydrationBridge>{children}</HydrationBridge>
 *   - Its children are evaluated before HydrationBridge decides to render them, so any logic inside children runs immediately during render (even on the server).
 *   - Only controls what is returned to the DOM, not when its children are evaluated.
 */

'use client';

import { type ReactNode, useEffect, useState } from 'react';

const HydrationBridge = ({ children }: { children: ReactNode }) => {
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return children;
};

export default HydrationBridge;
