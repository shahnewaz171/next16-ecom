import type React from 'react';
import { cn } from '@/utils/cn';

interface InputLabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

const InputLabel = ({ htmlFor, children, className }: InputLabelProps) => (
  <label htmlFor={htmlFor} className={cn('text-sm font-medium', className)}>
    {children}
  </label>
);

export default InputLabel;
