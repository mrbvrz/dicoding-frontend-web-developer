(()=>{var n={756:(n,e,t)=>{"use strict";t.d(e,{Z:()=>p});var i=t(537),r=t.n(i),o=t(645),a=t.n(o),s=t(667),c=t.n(s),A=new URL(t(541),t.b),l=a()(r());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap);"]),l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap);"]);var u=c()(A);l.push([n.id,`html {\n  scroll-behavior: smooth;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "Karla", sans-serif;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #dde6ed;\n}\n\n.container {\n  max-width: 1200px;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.skip-to-content {\n  position: absolute;\n  z-index: 100;\n  color: white;\n  left: 0;\n  top: -100px;\n  padding: 8px;\n  background-color: rgb(39 55 77);\n  text-decoration: none;\n}\n\n.skip-to-content:focus {\n  top: 100px;\n  left: 40px;\n}\n\nheader {\n  display: flex;\n  position: fixed;\n  align-items: center;\n  top: 0;\n  z-index: 99;\n  width: 100%;\n  height: 80px;\n  background-color: #27374d;\n  box-shadow: 0px 34px 40px 0px rgba(0, 0, 0, 0.1),\n    0px 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n\nheader .nav-inner {\n  /* width: 50%; */\n  margin-right: auto;\n}\n\nheader .nav-title {\n  font-weight: 300;\n  font-size: 30px;\n  margin-left: 30px;\n  display: inline-block;\n  color: white;\n  font-style: italic;\n  min-height: 44px;\n}\n\nheader .nav-title-bold {\n  font-weight: 800;\n}\n\nheader .nav-menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nheader .mobile-menu {\n  font-size: 44px;\n  min-width: 44px;\n  text-decoration: none;\n  margin-right: 30px;\n  color: white;\n}\n\nheader .mobile-menu .menu-icon {\n  font-size: 32px;\n  display: block;\n  min-height: 44px;\n  min-weight: 44px;\n}\n\nnav {\n  width: 100%;\n  margin-right: auto;\n  color: white;\n  display: flex;\n}\n\nnav .nav-list {\n  width: 100%;\n  padding: 0;\n  text-align: right;\n  margin: 0;\n  margin-right: 30px;\n}\n\nnav .nav-list li {\n  list-style-type: none;\n}\n\nnav .nav-list .nav-item {\n  display: inline-block;\n  box-sizing: border-box;\n  line-height: 38px;\n  text-align: center;\n}\n\nnav .nav-list .nav-item a {\n  display: inline-block;\n  padding-right: 32px;\n  text-decoration: none;\n  color: white;\n  min-height: 44px;\n  font-size: 18px;\n}\n\nnav .nav-list .nav-item .last {\n  padding-right: 0;\n}\n\nnav .nav-list .nav-item a:hover {\n  font-weight: bold;\n}\n\n.hero .hero-image {\n  min-height: 700px;\n  background-image: url(${u});\n  background-position-x: center;\n  background-position-y: center;\n  background-size: cover;\n  filter: brightness(75%);\n}\n\n.hero .hero-image .img-overlay {\n  width: 100vw;\n  height: 700px;\n  background: #526d82;\n  opacity: 0.7;\n  position: absolute;\n}\n\n.hero .hero-description {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  margin-top: -400px;\n  background-color: transparent;\n  color: white;\n}\n\n.hero .hero-description h1 {\n  font-size: 46px;\n  font-family: "Lora", serif;\n  font-weight: 400;\n  font-style: italic;\n}\n\n.hero .hero-description .hero-description-bold {\n  font-weight: 900;\n  text-decoration: underline;\n}\n\n.hero .hero-description p {\n  font-size: 18px;\n  margin-top: 10px;\n  margin-top: 6px;\n}\n\n.hero .hero-description .btn-hero-section {\n  margin-top: 34px;\n}\n\n.hero .hero-description .btn-hero-section .btn-hero {\n  width: 23%;\n  cursor: pointer;\n  margin-left: auto;\n  padding: 16px;\n  border-radius: 6px;\n  background-color: #9db2bf;\n  color: white;\n  border: 0px;\n  font-weight: 500;\n  font-size: 16px;\n  text-decoration: none;\n}\n\n.hero .hero-description .btn-hero-section .btn-hero:hover {\n  background-color: #27374d;\n}\n\n.content-section {\n  background-color: transparent;\n  margin-bottom: 20px;\n}\n\n.content-section .content-section-label {\n  padding: 54px 0 36px 0;\n  font-size: 28px;\n  text-align: center;\n}\n\n.content-section .content-card-section {\n  width: 100%;\n  display: grid;\n  grid-column-gap: 26px;\n  grid-row-gap: 30px;\n  border-radius: 10px;\n}\n\n.content-section .card-item {\n  border-radius: 10px;\n  box-shadow: 0px 4.3px 17.9px rgba(0, 0, 0, 0.003),\n    0px 12px 30.4px rgba(0, 0, 0, 0.005), 0px 28.9px 39.8px rgba(0, 0, 0, 0.007),\n    0px 96px 77px rgba(0, 0, 0, 0.01);\n  background-color: #fffdfa;\n  transform: translate3D(0, 0, 0);\n  transition: all 1s;\n}\n\n.content-section .card-item:hover {\n  box-shadow: 0px 4.3px 19.7px rgba(0, 0, 0, 0.01),\n    0px 12px 33.5px rgba(0, 0, 0, 0.015), 0px 28.9px 44px rgba(0, 0, 0, 0.02),\n    0px 96px 85px rgba(0, 0, 0, 0.03);\n  transform: translate3D(0, -5px, 0);\n  transition: all 1s;\n}\n\n.content-section .card-item .card-image {\n  width: 100%;\n  height: 250px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  transition: all 0.5s;\n}\n\n.content-section .card-item .card-item-rating {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  padding: 1rem;\n  background-color: #27374d;\n  color: white;\n  font-size: 14px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.content-section .card-item .card-info {\n  padding: 10px 20px 20px 20px;\n}\n\n.content-section .card-item .card-name {\n  color: rgb(39 55 77);\n  cursor: pointer;\n  font-family: "Lora", serif;\n  font-size: 22px;\n  min-height: 44px;\n}\n\n.content-section .card-item .card-name:hover {\n  text-decoration: underline;\n}\n\n.content-section .card-item .card-area {\n  font-size: 16px;\n  font-weight: 400;\n  color: #526d82;\n  margin-top: 4px;\n}\n\n.content-section .card-item .small-icon {\n  font-size: 14px;\n}\n\n.content-section .card-item .card-description {\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\nfooter {\n  width: 100%;\n  padding: 40px;\n  background-color: #9db2bf;\n  text-align: center;\n  color: white;\n  margin-top: 60px;\n}\n\nfooter a {\n  display: inline-block;\n  color: white;\n  text-decoration: none;\n  min-height: 44px;\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}\n\n@media screen and (max-width: 550px) {\n  nav {\n    background-color: #27374d;\n    width: 100%;\n    position: absolute;\n    right: 0;\n    -webkit-transform: translateY(-200px);\n    transform: translateY(-200px);\n    transition: transform 0.4s ease-out;\n    padding: 30px 0;\n  }\n\n  .mobile-menu-transform {\n    -webkit-transform: translateY(70px);\n    transform: translateY(70px);\n    top: 0;\n  }\n\n  nav .nav-list .nav-item {\n    display: list-item;\n    z-index: 9;\n    width: 100%;\n    text-align: center;\n    color: black;\n  }\n\n  nav li a {\n    font-size: 18px;\n    text-decoration: none;\n    color: black;\n    padding: 10px;\n  }\n\n  nav .nav-list .nav-item a {\n    padding-right: 0;\n  }\n\n  .hero .hero-description h1 {\n    font-size: 36px;\n  }\n\n  .hero .hero-description p {\n    font-size: 16px;\n  }\n}\n\n@media screen and (min-width: 550px) {\n  header .mobile-menu {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 700px) {\n  .hero .hero-description h2 {\n    font-size: 24px;\n  }\n\n  .content-section .content-card-section {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .content-section .content-card-section {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n}\n`,"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");\n@import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "Karla", sans-serif;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #dde6ed;\n}\n\n.container {\n  max-width: 1200px;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.skip-to-content {\n  position: absolute;\n  z-index: 100;\n  color: white;\n  left: 0;\n  top: -100px;\n  padding: 8px;\n  background-color: rgb(39 55 77);\n  text-decoration: none;\n}\n\n.skip-to-content:focus {\n  top: 100px;\n  left: 40px;\n}\n\nheader {\n  display: flex;\n  position: fixed;\n  align-items: center;\n  top: 0;\n  z-index: 99;\n  width: 100%;\n  height: 80px;\n  background-color: #27374d;\n  box-shadow: 0px 34px 40px 0px rgba(0, 0, 0, 0.1),\n    0px 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n\nheader .nav-inner {\n  /* width: 50%; */\n  margin-right: auto;\n}\n\nheader .nav-title {\n  font-weight: 300;\n  font-size: 30px;\n  margin-left: 30px;\n  display: inline-block;\n  color: white;\n  font-style: italic;\n  min-height: 44px;\n}\n\nheader .nav-title-bold {\n  font-weight: 800;\n}\n\nheader .nav-menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nheader .mobile-menu {\n  font-size: 44px;\n  min-width: 44px;\n  text-decoration: none;\n  margin-right: 30px;\n  color: white;\n}\n\nheader .mobile-menu .menu-icon {\n  font-size: 32px;\n  display: block;\n  min-height: 44px;\n  min-weight: 44px;\n}\n\nnav {\n  width: 100%;\n  margin-right: auto;\n  color: white;\n  display: flex;\n}\n\nnav .nav-list {\n  width: 100%;\n  padding: 0;\n  text-align: right;\n  margin: 0;\n  margin-right: 30px;\n}\n\nnav .nav-list li {\n  list-style-type: none;\n}\n\nnav .nav-list .nav-item {\n  display: inline-block;\n  box-sizing: border-box;\n  line-height: 38px;\n  text-align: center;\n}\n\nnav .nav-list .nav-item a {\n  display: inline-block;\n  padding-right: 32px;\n  text-decoration: none;\n  color: white;\n  min-height: 44px;\n  font-size: 18px;\n}\n\nnav .nav-list .nav-item .last {\n  padding-right: 0;\n}\n\nnav .nav-list .nav-item a:hover {\n  font-weight: bold;\n}\n\n.hero .hero-image {\n  min-height: 700px;\n  background-image: url("/src/public/images/heros/hero-image_2.jpg");\n  background-position-x: center;\n  background-position-y: center;\n  background-size: cover;\n  filter: brightness(75%);\n}\n\n.hero .hero-image .img-overlay {\n  width: 100vw;\n  height: 700px;\n  background: #526d82;\n  opacity: 0.7;\n  position: absolute;\n}\n\n.hero .hero-description {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  margin-top: -400px;\n  background-color: transparent;\n  color: white;\n}\n\n.hero .hero-description h1 {\n  font-size: 46px;\n  font-family: "Lora", serif;\n  font-weight: 400;\n  font-style: italic;\n}\n\n.hero .hero-description .hero-description-bold {\n  font-weight: 900;\n  text-decoration: underline;\n}\n\n.hero .hero-description p {\n  font-size: 18px;\n  margin-top: 10px;\n  margin-top: 6px;\n}\n\n.hero .hero-description .btn-hero-section {\n  margin-top: 34px;\n}\n\n.hero .hero-description .btn-hero-section .btn-hero {\n  width: 23%;\n  cursor: pointer;\n  margin-left: auto;\n  padding: 16px;\n  border-radius: 6px;\n  background-color: #9db2bf;\n  color: white;\n  border: 0px;\n  font-weight: 500;\n  font-size: 16px;\n  text-decoration: none;\n}\n\n.hero .hero-description .btn-hero-section .btn-hero:hover {\n  background-color: #27374d;\n}\n\n.content-section {\n  background-color: transparent;\n  margin-bottom: 20px;\n}\n\n.content-section .content-section-label {\n  padding: 54px 0 36px 0;\n  font-size: 28px;\n  text-align: center;\n}\n\n.content-section .content-card-section {\n  width: 100%;\n  display: grid;\n  grid-column-gap: 26px;\n  grid-row-gap: 30px;\n  border-radius: 10px;\n}\n\n.content-section .card-item {\n  border-radius: 10px;\n  box-shadow: 0px 4.3px 17.9px rgba(0, 0, 0, 0.003),\n    0px 12px 30.4px rgba(0, 0, 0, 0.005), 0px 28.9px 39.8px rgba(0, 0, 0, 0.007),\n    0px 96px 77px rgba(0, 0, 0, 0.01);\n  background-color: #fffdfa;\n  transform: translate3D(0, 0, 0);\n  transition: all 1s;\n}\n\n.content-section .card-item:hover {\n  box-shadow: 0px 4.3px 19.7px rgba(0, 0, 0, 0.01),\n    0px 12px 33.5px rgba(0, 0, 0, 0.015), 0px 28.9px 44px rgba(0, 0, 0, 0.02),\n    0px 96px 85px rgba(0, 0, 0, 0.03);\n  transform: translate3D(0, -5px, 0);\n  transition: all 1s;\n}\n\n.content-section .card-item .card-image {\n  width: 100%;\n  height: 250px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  transition: all 0.5s;\n}\n\n.content-section .card-item .card-item-rating {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  padding: 1rem;\n  background-color: #27374d;\n  color: white;\n  font-size: 14px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.content-section .card-item .card-info {\n  padding: 10px 20px 20px 20px;\n}\n\n.content-section .card-item .card-name {\n  color: rgb(39 55 77);\n  cursor: pointer;\n  font-family: "Lora", serif;\n  font-size: 22px;\n  min-height: 44px;\n}\n\n.content-section .card-item .card-name:hover {\n  text-decoration: underline;\n}\n\n.content-section .card-item .card-area {\n  font-size: 16px;\n  font-weight: 400;\n  color: #526d82;\n  margin-top: 4px;\n}\n\n.content-section .card-item .small-icon {\n  font-size: 14px;\n}\n\n.content-section .card-item .card-description {\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\nfooter {\n  width: 100%;\n  padding: 40px;\n  background-color: #9db2bf;\n  text-align: center;\n  color: white;\n  margin-top: 60px;\n}\n\nfooter a {\n  display: inline-block;\n  color: white;\n  text-decoration: none;\n  min-height: 44px;\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}\n\n@media screen and (max-width: 550px) {\n  nav {\n    background-color: #27374d;\n    width: 100%;\n    position: absolute;\n    right: 0;\n    -webkit-transform: translateY(-200px);\n    transform: translateY(-200px);\n    transition: transform 0.4s ease-out;\n    padding: 30px 0;\n  }\n\n  .mobile-menu-transform {\n    -webkit-transform: translateY(70px);\n    transform: translateY(70px);\n    top: 0;\n  }\n\n  nav .nav-list .nav-item {\n    display: list-item;\n    z-index: 9;\n    width: 100%;\n    text-align: center;\n    color: black;\n  }\n\n  nav li a {\n    font-size: 18px;\n    text-decoration: none;\n    color: black;\n    padding: 10px;\n  }\n\n  nav .nav-list .nav-item a {\n    padding-right: 0;\n  }\n\n  .hero .hero-description h1 {\n    font-size: 36px;\n  }\n\n  .hero .hero-description p {\n    font-size: 16px;\n  }\n}\n\n@media screen and (min-width: 550px) {\n  header .mobile-menu {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 700px) {\n  .hero .hero-description h2 {\n    font-size: 24px;\n  }\n\n  .content-section .content-card-section {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .content-section .content-card-section {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n}\n'],sourceRoot:""}]);const p=l},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var A=0;A<n.length;A++){var l=[].concat(n[A]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),o="/*# ".concat(r," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},666:n=>{var e=function(n){"use strict";var e,t=Object.prototype,i=t.hasOwnProperty,r=Object.defineProperty||function(n,e,t){n[e]=t.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function A(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{A({},"")}catch(n){A=function(n,e,t){return n[e]=t}}function l(n,e,t,i){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),s=new I(i||[]);return r(a,"_invoke",{value:k(n,t,s)}),a}function u(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=l;var p="suspendedStart",d="suspendedYield",m="executing",h="completed",g={};function f(){}function x(){}function E(){}var B={};A(B,a,(function(){return this}));var C=Object.getPrototypeOf,v=C&&C(C(L([])));v&&v!==t&&i.call(v,a)&&(B=v);var b=E.prototype=f.prototype=Object.create(B);function y(n){["next","throw","return"].forEach((function(e){A(n,e,(function(n){return this._invoke(e,n)}))}))}function w(n,e){function t(r,o,a,s){var c=u(n[r],n,o);if("throw"!==c.type){var A=c.arg,l=A.value;return l&&"object"==typeof l&&i.call(l,"__await")?e.resolve(l.__await).then((function(n){t("next",n,a,s)}),(function(n){t("throw",n,a,s)})):e.resolve(l).then((function(n){A.value=n,a(A)}),(function(n){return t("throw",n,a,s)}))}s(c.arg)}var o;r(this,"_invoke",{value:function(n,i){function r(){return new e((function(e,r){t(n,i,e,r)}))}return o=o?o.then(r,r):r()}})}function k(n,e,t){var i=p;return function(r,o){if(i===m)throw new Error("Generator is already running");if(i===h){if("throw"===r)throw o;return Y()}for(t.method=r,t.arg=o;;){var a=t.delegate;if(a){var s=q(a,t);if(s){if(s===g)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(i===p)throw i=h,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);i=m;var c=u(n,e,t);if("normal"===c.type){if(i=t.done?h:d,c.arg===g)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(i=h,t.method="throw",t.arg=c.arg)}}}function q(n,t){var i=t.method,r=n.iterator[i];if(r===e)return t.delegate=null,"throw"===i&&n.iterator.return&&(t.method="return",t.arg=e,q(n,t),"throw"===t.method)||"return"!==i&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+i+"' method")),g;var o=u(r,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,g;var a=o.arg;return a?a.done?(t[n.resultName]=a.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,g):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function z(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function j(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function I(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(z,this),this.reset(!0)}function L(n){if(n){var t=n[a];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,o=function t(){for(;++r<n.length;)if(i.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=e,t.done=!0,t};return o.next=o}}return{next:Y}}function Y(){return{value:e,done:!0}}return x.prototype=E,r(b,"constructor",{value:E,configurable:!0}),r(E,"constructor",{value:x,configurable:!0}),x.displayName=A(E,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,E):(n.__proto__=E,A(n,c,"GeneratorFunction")),n.prototype=Object.create(b),n},n.awrap=function(n){return{__await:n}},y(w.prototype),A(w.prototype,s,(function(){return this})),n.AsyncIterator=w,n.async=function(e,t,i,r,o){void 0===o&&(o=Promise);var a=new w(l(e,t,i,r),o);return n.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},y(b),A(b,c,"Generator"),A(b,a,(function(){return this})),A(b,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var e=Object(n),t=[];for(var i in e)t.push(i);return t.reverse(),function n(){for(;t.length;){var i=t.pop();if(i in e)return n.value=i,n.done=!1,n}return n.done=!0,n}},n.values=L,I.prototype={constructor:I,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!n)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(i,r){return s.type="throw",s.arg=n,t.next=i,r&&(t.method="next",t.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),A=i.call(a,"finallyLoc");if(c&&A){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!A)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=n,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),g},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),j(t),g}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var i=t.completion;if("throw"===i.type){var r=i.arg;j(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,i){return this.delegate={iterator:L(n),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=e),g}},n}(n.exports);try{regeneratorRuntime=e}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],A=i.base?c[0]+i.base:c[0],l=o[A]||0,u="".concat(A," ").concat(l);o[A]=l+1;var p=t(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var m=r(d,i);i.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=i(n,r),A=0;A<o.length;A++){var l=t(o[A]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},541:(n,e,t)=>{"use strict";n.exports=t.p+"bd6b63650298f334a08b.jpg"}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!n;)n=i[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";t(666);var n=t(379),e=t.n(n),i=t(795),r=t.n(i),o=t(569),a=t.n(o),s=t(565),c=t.n(s),A=t(216),l=t.n(A),u=t(589),p=t.n(u),d=t(756),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(d.Z,m),d.Z&&d.Z.locals&&d.Z.locals;const h=JSON.parse('{"restaurants":[{"id":"6c7bqjgi84kcowlqdz","name":"Bring Your Phone Cafe","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/41","city":"Medan","rating":4.6},{"id":"ljx8i0qu2uckcowlqdz","name":"Run The Gun","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/07","city":"Bali","rating":4.6},{"id":"fe8bbxoazddkcowlqdz","name":"Pangsit Express","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/29","city":"Ternate","rating":4.8},{"id":"ik1zljmlf68kcowlqdz","name":"Ducky Duck","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/38","city":"Malang","rating":4.7},{"id":"9jpuzkm6n6jkcowlqdz","name":"Kafein","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/40","city":"Bali","rating":3.8},{"id":"cpl5jpsnuqkkcowlqdz","name":"Makan mudah","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/08","city":"Malang","rating":4.6},{"id":"iqtf9hmdzvbkcowlqdz","name":"Saya Suka","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/32","city":"Surabaya","rating":3.6},{"id":"8i06gqcc2dpkcowlqdz","name":"Gigitan Cepat","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/45","city":"Aceh","rating":4},{"id":"wf5o19xhxxkcowlqdz","name":"Fairy Cafe","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/04","city":"Malang","rating":3.9}]}');console.log("Hello Coders! :)"),console.log(h);var g,f=document.querySelector(".mobile-menu"),x=document.querySelector(".hero"),E=document.querySelector("main"),B=document.querySelector(".nav");f.addEventListener("click",(function(n){B.classList.toggle("mobile-menu-transform"),n.stopPropagation()})),x.addEventListener("click",(function(){B.classList.remove("mobile-menu-transform")})),E.addEventListener("click",(function(){B.classList.remove("mobile-menu-transform")})),g="",h.restaurants.forEach((function(n,e){g+='\n            <div tabindex="0" class="card-item">\n                <img tabindex="0" class="card-image" src="'.concat(n.pictureId,'" alt="').concat(n.name,'">\n                <span tabindex="-1" class="card-item-rating"><i class="fa-solid fa-star"></i> ').concat(n.rating,'</span>\n                <div class="card-info">\n                    <h2 tabindex="0" class="card-name">').concat(n.name,'</h2>\n                    <h3 tabindex="0" class="card-area"><i class="small-icon fa-solid fa-location-dot"></i> ').concat(n.city,'</h3>\n                    <h3 tabindex="0" class="card-description">').concat(n.description,"</h3>\n                </div>\n            </div>\n        ")})),document.getElementById("card-list").innerHTML=g})()})();
//# sourceMappingURL=app.bundle.js.map