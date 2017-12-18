const CACHE_NAME = 'static-cache';
// const urlsToCache = [
//   '.',
//   'index.html',
//   'bootstrap.min.css',
//   'bundle.min.js',
//   'main.min.js',
// ];
const urlsToCache = [
  '.',
  'index.html',
  'bootstrap.css',
  'bundle.js',
  'main.js',
];

this.addEventListener('install', (event) => {
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

this.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request)
    .then(response =>
      response || fetchAndCache(event.request)));
});
