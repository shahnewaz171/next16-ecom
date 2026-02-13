import { AlertCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

interface FieldErrorProps {
  message?: string;
  className?: string;
}

const FieldError = ({ message, className }: FieldErrorProps) => {
  if (!message) return null;

  return (
    <p className={cn('text-sm text-destructive flex items-center gap-1 mt-2', className)}>
      <AlertCircle className="h-3 w-3" />
      {message}
    </p>
  );
};

export default FieldError;
