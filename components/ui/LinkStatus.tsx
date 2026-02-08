'use client';

import { LoaderCircle } from 'lucide-react';
import { useLinkStatus } from 'next/link';
import type React from 'react';
import { cn } from '@/utils/cn';

type Props = {
  rootClassName?: string;
  className?: string;
  size?: number;
  variant?: 'spinner' | 'background';
  children?: React.ReactNode;
};

const LinkStatus = ({
  rootClassName,
  className,
  size = 18,
  variant = 'spinner',
  children
}: Props) => {
  const { pending } = useLinkStatus();

  if (variant === 'spinner') {
    if (pending) {
      return (
        <div className={cn('flex items-center gap-2', rootClassName)}>
          {children}
          <div className={cn('text-muted-foreground h-fit w-fit animate-spin', className)}>
            <LoaderCircle aria-hidden="true" size={size} />
          </div>
        </div>
      );
    }
    return children;
  }

  if (variant === 'background') {
    return (
      <div
        className={cn(pending && 'text-muted-foreground bg-muted dark:bg-muted-dark', className)}
      >
        {children}
      </div>
    );
  }
};

export default LinkStatus;
