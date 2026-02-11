import { createPortal } from 'react-dom';
import { AnimatePresence, MotionDiv } from '@/components/ui/Motion';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import useEscapeKey from '@/hooks/useEscapeKey';
import withHydrationBridge from '@/hooks/withHydrationBridge';

const Drawer = ({
  isOpen,
  onClose,
  children
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };

  // Lock body scroll while drawer is open
  useBodyScrollLock(isOpen);

  // Close on Escape key
  useEscapeKey(handler);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          className="fixed inset-0 z-9999"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <MotionDiv
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-in panel – anchored to right edge */}
          <MotionDiv
            className="absolute inset-y-0 right-0 w-full max-w-md"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          >
            {children}
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default withHydrationBridge(Drawer);
