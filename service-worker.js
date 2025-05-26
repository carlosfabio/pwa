self.addEventListener('install', event => {
  console.log('Service Worker instalado.');
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
