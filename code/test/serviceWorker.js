const staticDevCoffee = "dev-coffee-site-v1";
const assets = ["/", "/index.html", "/css/style.css", "/js/script.js"];
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then((cache) => {
            cache.addAll(assets);
        })
    );
});
// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});
