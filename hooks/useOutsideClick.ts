import { useEffect, useEffectEvent } from 'react';

const MOUSE_UP = 'mouseup';

const useOutsideClick = (
  handleClose: (event: MouseEvent) => void,
  ref: React.RefObject<HTMLElement>
) => {
  const handleClick = useEffectEvent((event: MouseEvent) => {
    if (ref?.current?.contains && !ref.current.contains(event.target as Node)) {
      handleClose(event);
    }
  });

  useEffect(() => {
    document.addEventListener(MOUSE_UP, handleClick);

    return () => {
      document.removeEventListener(MOUSE_UP, handleClick);
    };
  }, []);
};

export default useOutsideClick;
