'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-50vh)] gap-4">
      <h2 className="text-2xl font-semibold">Something went wrong!</h2>
      <Button variant="secondary" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
};

export default ErrorPage;
