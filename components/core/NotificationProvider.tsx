import type { ReactNode } from 'react';
import { Toaster } from 'sonner';

const NotificationProvider = ({ children }: { children: ReactNode }) => (
  <>
    {children}

    <Toaster position="bottom-left" richColors closeButton duration={10000} />
  </>
);

export default NotificationProvider;
