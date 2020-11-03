const CACHE_NAME = "gotpwa";
var urlsToCache = [
    "/",
    "/nav.html",
    "/index.html",
    "/pages/home.html",
    "/pages/about.html",
    "/pages/awards.html",
    "/pages/cast.html",
    "/images/cast.jpg",
    "/images/got.jpg",
    "/images/got1.jpg",
    "/images/got2.jpg",
    "/images/got3.jpg",
    "/images/got4.jpg",
    "/images/got5.jpg",
    "/images/got6.jpg",
    "/images/got7.jpg",
    "/images/got8.jpg",
    "/images/logo.png",
    "/pages/seasons.html",
    "/css/materialize.min.css",
    "/css/style.css",
    "/js/materialize.min.js",
    "/js/nav.js"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches
            .match(event.request, { cacheName: CACHE_NAME })
            .then(function (response) {
                if (response) {
                    console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
                    return response;
                }

                console.log(
                    "ServiceWorker: Memuat aset dari server: ",
                    event.request.url
                );
                return fetch(event.request);
            })
    );
});