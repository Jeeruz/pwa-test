const CACHE_NAME = 'xmas-v1';
const ASSETS = [
  '/pwa-test/',
  '/pwa-test/index.html',
  '/pwa-test/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
