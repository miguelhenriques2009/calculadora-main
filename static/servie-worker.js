self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('calc-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/static/style.css',
        '/static/manifest.json',
        '/static/service-worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
