'use client';

import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/utils/cn';

const THEME_KEY = 'theme';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  return localStorage.getItem(THEME_KEY) || 'dark';
};

export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState(() => getInitialTheme());

  const toggleTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';
    const themeColor = updatedTheme === 'dark' ? '#212737' : '#fdfdfd';

    const root = document.documentElement;
    root.setAttribute('data-theme', updatedTheme);
    root.style.colorScheme = updatedTheme;
    localStorage.setItem(THEME_KEY, updatedTheme);

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    themeColorMeta?.setAttribute('content', themeColor);

    setTheme(updatedTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-full',
        'bg-secondary hover:bg-accent transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun size={20} className="hidden dark:block text-primary" />
      <Moon size={20} className="block dark:hidden text-primary" />
    </button>
  );
}

export function ThemeToggleSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative inline-flex h-10 w-10 animate-pulse items-center justify-center rounded-full',
        'bg-secondary',
        className
      )}
    />
  );
}
