'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    window.addEventListener('load', registerSW);
    return () => window.removeEventListener('load', registerSW);
  }, []);

  return null;
}

async function registerSW() {
  try {
    navigator.serviceWorker.register('/sw.js');
  } catch (error) {
    console.error('SW registration failed:', error);
  }
}
