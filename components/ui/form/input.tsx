import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import type { Ref } from 'react';
import FieldError from '@/components/ui/form/FieldError';
import InputLabel from '@/components/ui/form/InputLabel';
import TagLoader from '@/components/ui/TagLoader';
import { cn } from '@/utils/cn';

const inputVariants = cva(
  'flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'border-input',
        icon: 'border-input pl-10 pr-4',
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
  ref?: Ref<HTMLInputElement> | undefined;
  label?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  error?: boolean;
  helperText?: string;
  passwordToggleRender?: React.ReactNode;
}

export const Input = ({
  ref,
  id,
  label,
  className,
  variant,
  inputSize,
  type,
  icon,
  isLoading,
  error,
  helperText,
  passwordToggleRender,
  ...props
}: InputProps) => (
  <div>
    {label && <InputLabel htmlFor={id}>{label}</InputLabel>}

    <div className="relative">
      {icon && (
        <div className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground">
          {isLoading ? <TagLoader /> : icon}
        </div>
      )}
      <input
        type={type}
        id={id}
        className={cn(inputVariants({ variant, inputSize }), className, {
          'border-destructive': error
        })}
        ref={ref}
        {...props}
      />
      {passwordToggleRender}
    </div>

    <FieldError message={helperText} />
  </div>
);
