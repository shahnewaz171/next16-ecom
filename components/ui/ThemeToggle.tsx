'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/core/ThemeProvider';
import { cn } from '@/utils/cn';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme = 'dark', toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-full',
        'bg-secondary hover:bg-accent transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      aria-label="Toggle theme"
      type="button"
    >
      <div>
        {isDark ? (
          <Moon className="h-5 w-5 text-primary" />
        ) : (
          <Sun className="h-5 w-5 text-primary" />
        )}
      </div>
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
