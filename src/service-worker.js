const CACHE_NAME = 'static-cache';
const urlsToCache = [
  '.',
  'app.min.js',
  'vendor.min.js',
  'bootstrap.min.css',
  'index.html',
  'main.min.css',
];

window.self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache)));
});

function fetchAndCache(url) {
  return fetch(url)
    .then((response) => {
      // Check if we received a valid response
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return caches.open(CACHE_NAME)
        .then((cache) => {
          cache.put(url, response.clone());
          return response;
        });
    })
    .catch((error) => {
      console.log('Request failed:', error);
      // You could return a custom offline 404 page here
    });
}

window.self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request)
    .then(response =>
      response || fetchAndCache(event.request)));
});

window.self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then(cacheNames =>
    Promise.all(cacheNames.filter((cacheName) => {
      // Return true if you want to remove this cache,
      // but remember that caches are shared across
      // the whole origin
    }).map(cacheName => caches.delete(cacheName)))));
});
