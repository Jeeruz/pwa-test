const CACHE_NAME = 'xmas-v1';
const ASSETS = [
  '/pwa-test/',
  '/pwa-test/index.html',
  '/pwa-test/manifest.json'
];

// Cache the necessary files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Offline support: Network first, fallback to cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
