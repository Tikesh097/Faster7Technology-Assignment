self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Basic network-first approach with offline fallback (very simple)
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});