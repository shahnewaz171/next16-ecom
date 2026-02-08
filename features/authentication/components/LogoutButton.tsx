'use client';

import { useTransition } from 'react';
import Button from '@/components/ui/Button';
import { logout } from '@/features/authentication/auth-actions';

const LogoutButton = () => {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    if (isPending) return;

    startTransition(async () => {
      await logout();
    });
  };

  return (
    <Button
      variant="link"
      size="sm"
      className="p-0 h-0 cursor-pointer"
      loading={isPending}
      disabled={isPending}
      loadingPosition="right"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
