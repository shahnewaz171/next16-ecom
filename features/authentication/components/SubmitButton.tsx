'use client';

import { ArrowRight } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import Button from '@/components/ui/Button';

interface SubmitButtonProps {
  label: string;
  loadingText?: string;
}

const SubmitButton = ({ label, loadingText }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="gradient"
      size="lg"
      className="w-full"
      loading={pending}
      icon={<ArrowRight className="h-5 w-5" />}
      disabled={pending}
      iconPosition="right"
      loadingPosition="right"
    >
      {pending ? loadingText || label : label}
    </Button>
  );
};

export default SubmitButton;
