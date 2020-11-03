const FILE_TO_CACHE = [
    '/',
    "/manifest.json",
    "/images/icon/apple-icon-180x180.png",
    "/images/icon/favicon-32x32.png",
    "/images/icon/favicon-16x16.png",
    "/images/icon/apple-icon-144x144.png",
    '/nav.html',
    "/index.html",
    "/pages/home.html",
    "/pages/about.html",
    "/pages/awards.html",
    "/pages/cast.html",
    "/pages/seasons.html",
    "/images/awards.jpg",
    "/images/cast.jpg",
    "/images/char.jpeg",
    "/images/finale.jpg",
    "/images/got.jpeg",
    "/images/got1.jpg",
    "/images/got2.jpg",
    "/images/got3.jpg",
    "/images/got4.jpg",
    "/images/got5.jpg",
    "/images/got6.jpg",
    "/images/got7.jpg",
    "/images/got8.jpg",
    "/images/logo.png",
    "/images/war.jpg",
    "/images/about.jpg",
    "/images/me.jpg",
    "/images/actor/carice-van-houten.jpg",
    "/images/actor/emilia-clarke.jpg",
    "/images/actor/john-bradley.jpg",
    "/images/actor/kit-harington.jpg",
    "/images/actor/lena-headey.jpg",
    "/images/actor/maisie-williams.jpg",
    "/images/actor/natalie-dormer.jpg",
    "/images/actor/nikolaj-coster-waldau.jpg",
    "/images/actor/peter-dinklage.jpg",
    "/images/actor/sophie-turner.jpg",
    "/css/aos.css",
    "/css/materialize.min.css",
    "/css/style.css",
    "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap",
    "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lqDY.woff2",
    "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qPK7lqDY.woff2",
    "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNK7lqDY.woff2",
    "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qO67lqDY.woff2",
    "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qN67lqDY.woff2",
    "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lqDY.woff2",
    "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
    "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,500&display=swap",
    "https://fonts.gstatic.com/s/ebgaramond/v14/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7eOQL9wU6i1gmFJbvw.woff2",
    "https://fonts.gstatic.com/s/ebgaramond/v14/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7eOQL95U6i1gmFJbvw.woff2",
    "https://fonts.gstatic.com/s/ebgaramond/v14/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7eOQL9xU6i1gmFJbvw.woff2",
    "https://fonts.gstatic.com/s/ebgaramond/v14/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7eOQL9-U6i1gmFJbvw.woff2",
    "https://fonts.gstatic.com/s/ebgaramond/v14/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7eOQL9yU6i1gmFJbvw.woff2",
    "https://fonts.gstatic.com/s/ebgaramond/v14/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7eOQL9zU6i1gmFJbvw.woff2",
    "https://fonts.gstatic.com/s/ebgaramond/v14/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7eOQL99U6i1gmFJ.woff2",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
    "/js/aos.js",
    "/js/jquery-3.5.1.min.js",
    "/js/materialize.min.js",
    "/js/pace.min.js",
    "/js/script.js",
    "https://kit.fontawesome.com/454848ce4c.js",
    "https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css",
    "https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css",
    "https://kit-free.fontawesome.com/releases/latest/css/free.min.css",
    "https://kit-free.fontawesome.com/releases/latest/webfonts/free-fa-solid-900.ttf",
    "https://kit-free.fontawesome.com/releases/latest/webfonts/free-fa-brands-400.ttf",
    "https://kit-free.fontawesome.com/releases/latest/webfonts/free-fa-solid-900.woff",
    "https://kit-free.fontawesome.com/releases/latest/webfonts/free-fa-brands-400.woff",
    "https://kit-free.fontawesome.com/releases/latest/webfonts/free-fa-brands-400.woff2",
    "https://kit-free.fontawesome.com/releases/latest/webfonts/free-fa-solid-900.woff2"
];

const CACHE_NAME = 'got-pwa';

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(FILE_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches
            .match(event.request, { cacheName: CACHE_NAME })
            .then(function (response) {
                if (response) {
                    console.log("ServiceWorker: Use assets from cache: ", response.url);
                    return response;
                }
                console.log(
                    "ServiceWorker: Load assets from the server: ", event.request.url
                );
                return fetch(event.request);
            })
    );
});

