import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import { cn } from '@/utils/cn';

const cardVariants = cva(
  'rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'border-border',
        elevated: 'border-border shadow-md hover:shadow-lg',
        ghost: 'border-transparent shadow-none',
        gradient: 'border-transparent bg-gradient-to-br from-primary/10 to-accent/10'
      },
      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6'
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1',
        scale: 'hover:scale-[1.02]',
        glow: 'hover:ring-2 hover:ring-primary/20'
      }
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: 'none'
    }
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

export function Card({ className, variant, padding, hover, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant, padding, hover }), className)} {...props} />;
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col space-y-1.5', className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-muted-foreground', className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('pt-0', className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-center pt-0', className)} {...props} />;
}
