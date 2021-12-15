importScripts("/precache-manifest.c8c28455878ef8bbab8c8cc2b12ece3b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");



workbox.precaching.precacheAndRoute(self.__precacheManifest);

// Catch routing errors, like if the user is offline
workbox.routing.setCatchHandler(async ({ event }) => {
  // Return the precached offline page if a document is being requested
  if (event.request.destination === 'document') {
    return matchPrecache('/public/offline.html');
  }

  return Response.error();
});

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg|jfif)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    })
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
