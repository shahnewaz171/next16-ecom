import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import TagLoader from '@/components/ui/TagLoader';
import { cn } from '@/utils/cn';

const inputVariants = cva(
  'flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'border-input',
        search: 'border-input pl-10 pr-4',
        ghost: 'border-transparent bg-transparent'
      },
      inputSize: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base'
      }
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md'
    }
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type, icon, isLoading, ...props }, ref) => {
    if (icon) {
      return (
        <div className="relative">
          <div className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground">
            {isLoading ? <TagLoader /> : icon}
          </div>
          <input
            type={type}
            className={cn(inputVariants({ variant: 'search', inputSize }), className)}
            ref={ref}
            {...props}
          />
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, inputSize }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
