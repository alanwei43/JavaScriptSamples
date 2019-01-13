const CACHES_URLS = [
    "/index.offline.html",
    "/styles/bootstrap.min.css"
];
self.addEventListener("install", function (event) {
    console.log("install");
    event.waitUntil(
        caches.open("sw").then(function (cache) {
            return cache.addAll(CACHES_URLS);
        }));
});
self.addEventListener("activate", function () {
    console.log("activate");
});
self.addEventListener("fetch", function (event) {
    console.log(`fetch: ${event.request.url}`);
    event.respondWith(
        fetch(event.request)
        .catch(function () {
            return caches.match("/index.offline.html");
            caches.match(event.request)
                .then(function (response) {
                    if (event.request.url.include("/index.html")) {
                        console.log("index caches response");
                        return caches.match("/index.offline.html");
                    }
                });
        }));
});