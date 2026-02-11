/**
 *   - Used to wrap a component: export default withHydration(MyComponent)
 *   - The wrapped component (and all its logic) is not rendered or evaluated until after hydration (client-side mount).
 *   - Prevents any code inside the wrapped component from running on the server or before hydration, avoiding SSR/hydration mismatches and early side effects.
 */

'use client';

import { type ComponentType, useEffect, useState } from 'react';

const withHydration =
  <P extends object>(WrappedComponent: ComponentType<P>) =>
  (props: P) => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
      setHydrated(true);
    }, []);

    if (!hydrated) return null;

    return <WrappedComponent {...props} />;
  };

export default withHydration;
