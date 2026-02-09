import type { ReactNode } from 'react';
import { Toaster } from 'sonner';

const NotificationProvider = ({ children }: { children: ReactNode }) => (
  <>
    {children}

    <Toaster position="top-right" richColors closeButton duration={10000} />
  </>
);

export default NotificationProvider;
