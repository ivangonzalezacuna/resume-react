self.addEventListener("install", (event) =>
  event.waitUntil(self.skipWaiting()),
);
self.addEventListener("activate", (event) =>
  event.waitUntil(self.clients.claim()),
);
self.addEventListener("fetch", (event) => {
  // Only intercept same-origin navigations so Chrome sees a functional
  // fetch handler (required for PWA install) without risking failures on
  // sub-resource or cross-origin requests that would reject respondWith().
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => {
        // Network failed — return a minimal offline fallback so respondWith
        // never rejects (a rejected respondWith aborts PWA install on Android).
        return new Response(
          "<!DOCTYPE html><html><body><p>Offline</p></body></html>",
          { status: 200, headers: { "Content-Type": "text/html" } },
        );
      }),
    );
  }
});
