import { useEffect, useEffectEvent } from 'react';

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keyup';

const useEscapeKey = (handleClose: (event: KeyboardEvent) => void) => {
  const handleEscKey = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === KEY_NAME_ESC) {
      handleClose(event);
    }
  });

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, []);
};

export default useEscapeKey;
