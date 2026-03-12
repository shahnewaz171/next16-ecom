import { type RenderOptions, render } from '@testing-library/react';
import type { ReactElement } from 'react';
import { CartProvider } from '@/store/context/CartContext';

const customProductCartRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: CartProvider, ...options });

export * from '@testing-library/react';

export { customProductCartRender as render };
