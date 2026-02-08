import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import { cn } from '@/utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground border-border hover:bg-accent',
        success:
          'border-transparent bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/80',
        warning:
          'border-transparent bg-[var(--warning)] text-[var(--warning-foreground)] hover:bg-[var(--warning)]/80',
        info: 'border-transparent bg-[var(--info)] text-[var(--info-foreground)] hover:bg-[var(--info)]/80'
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-2.5 py-0.5',
        lg: 'text-base px-3 py-1'
      },
      clickable: {
        true: 'cursor-pointer hover:scale-105 active:scale-95',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      clickable: false
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, clickable, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size, clickable }), className)} {...props} />;
}
