importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Zum precachen wenn mehrere Komponenten vorhanden sind!
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerRoute(
    /.*/,
    new workbox.strategies.CacheFirst()
);