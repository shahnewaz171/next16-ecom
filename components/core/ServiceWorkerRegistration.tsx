'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    window.addEventListener('load', registerSW);
    // window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('load', registerSW);
      // window.removeEventListener('online', handleOnline);
    };
  }, []);

  return null;
}

async function registerSW() {
  try {
    await navigator.serviceWorker.register('/sw.js');
  } catch (error) {
    console.error('SW registration failed:', error);
  }
}

// async function handleOnline() {
//   try {
//     const registration = await navigator.serviceWorker.ready;
//     registration.active?.postMessage({ type: 'SW_UPDATE' });
//   } catch (error) {
//     console.error('Failed to notify service worker of online status:', error);
//   }
// }
