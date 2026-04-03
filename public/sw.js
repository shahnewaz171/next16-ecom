const CACHE_NAME = 'commerce-cache-v1';
const PRECACHE_URLS = ['/offline.html'];

/*
  Install means the service worker is being registered for the first time when the user visits the site, or when the service worker file changes (e.g. due to a new deployment). 
  During the install phase, we typically pre-cache critical assets so that the app can work offline immediately after installation.
*/
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
      .catch((error) => console.error('Failed to pre-cache resources:', error))
  );
});

/*
 Fetch event is triggered for every network request made by the page. In this handler, we attempt to fetch the requested resource from the network. 
 If the network request fails (e.g., due to being offline), we catch the error and respond with a cached fallback page (in this case, '/offline'). This allows the app to provide a better user experience even when the user is offline.
*/
self.addEventListener('fetch', (event) => {
  // Only handle navigation requests (i.e., requests for HTML pages). For other types of requests (e.g., for images, CSS, JS), we can let them fail or handle them differently if needed.
  if (event.request.mode !== 'navigate') return;

  event.respondWith(
    fetch(event.request).catch(() =>
      caches
        .match(PRECACHE_URLS[0])
        .catch((error) => console.error('Failed to fetch resource:', error))
    )
  );
});

/*
 Activate event is triggered when the service worker takes control of the page after the user comes back online or navigates to a new page. In this handler, we typically clean up old caches that are no longer needed. 
 We do this by comparing the current cache name with the list of cache names and deleting any caches that don't match the current one. This helps to free up storage space and ensures that the app uses the most up-to-date cached resources.
*/
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.reduce((accumulator, cacheName) => {
            if (cacheName !== CACHE_NAME) {
              accumulator.push(caches.delete(cacheName));
            }
            return accumulator;
          }, [])
        )
      )
      .then(() => self.clients.claim()) // Claim control of all clients immediately after activation
      .catch((error) => console.error('Failed to activate service worker:', error))
  );
});
