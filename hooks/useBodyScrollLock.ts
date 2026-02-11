import { useEffect } from 'react';

const useBodyScrollLock = (active: boolean) => {
  useEffect(() => {
    if (!active) return;

    const initialOverflow = document.body.style.overflow;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;

    return () => {
      document.body.style.overflow = initialOverflow;
      document.body.style.width = '';
    };
  }, [active]);
};

export default useBodyScrollLock;
