// Replace and retire the service worker used by older Gatsby deployments.
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith('gatsby-plugin-offline-')) {
        await caches.delete(key);
      }
    }
    await self.registration.unregister();
  })());
});
