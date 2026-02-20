'use client';

import { createPortal } from 'react-dom';
import { AnimatePresence, MotionDiv } from '@/components/ui/Motion';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import useEscapeKey from '@/hooks/useEscapeKey';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

const Modal = ({ ref, isOpen, onClose, children }: ModalProps) => {
  // Lock body scroll while drawer is open
  useBodyScrollLock(isOpen);

  const handler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };

  // Close on Escape key
  useEscapeKey(handler);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <MotionDiv
        ref={ref}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <MotionDiv
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Modal Panel */}
        <MotionDiv
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background shadow-2xl"
          initial={{ y: 64, scale: 0.98 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 64, scale: 0.98 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        >
          {children}
        </MotionDiv>
      </MotionDiv>
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
