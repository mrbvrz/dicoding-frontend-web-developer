if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const d=e=>s(e,r),a={module:{uri:r},exports:c,require:d};i[r]=Promise.all(n.map((e=>a[e]||d(e)))).then((e=>(o(...e),c)))}}define(["./workbox-3dc2bb2b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"6c0c3dfd74f832e6c487.jpg",revision:null},{url:"app.bundle.js",revision:"aceb7191831e5577d93300d2cdf4e5af"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest.json",revision:"b577d06bc3ed7d0fe0eb5943ea864a2c"},{url:"images/heros/hero-image_2.jpg",revision:"2c2e0054afd34c94b4377e990e08d629"},{url:"images/icons/icon-192x192.png",revision:"d8bba664732146d300435f4a9adf0f0d"},{url:"images/icons/icon-256x256.png",revision:"28a76b0a7db4867b281cb2a0ecdc8ef8"},{url:"images/icons/icon-384x384.png",revision:"b66ad3b408ba193e8a7ba2d5bee8585a"},{url:"images/icons/icon-512x512.png",revision:"8e07e77ef8b5dd78d5d3f8122d74f573"},{url:"images/logo/resto-logo.png",revision:"7eac8bc3101bb39f88588bf3d45da837"},{url:"images/placeholder.svg",revision:"4ddfe411638fcd577d048157cf940423"},{url:"images/undraw_missed_chances_k-3-cq.svg",revision:"be3c3770221402eb708fb2ced1c07810"},{url:"index.html",revision:"ff2c4f9e3116687230eee367ac71224e"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"tastelab-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map