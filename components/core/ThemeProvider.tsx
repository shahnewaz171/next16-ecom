'use client';

import { createContext, use, useSyncExternalStore } from 'react';
import { themeStore } from '@/helpers/theme/themeStore';
import type { ThemeContextType } from '@/types/theme';
import type { Theme } from '@/utils/theme';

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { subscribe, getSnapshot, getServerSnapshot, applyTheme } = themeStore;

  // Subscribe to theme changes that read dom class directly on first render (client-only) and fallback to default theme on the server
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = (next: Theme) => {
    applyTheme(next);
  };

  const toggleTheme = () => {
    applyTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <ThemeContext value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext>;
}

export function useTheme(): ThemeContextType {
  const context = use(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
