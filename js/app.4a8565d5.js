(function(n){function e(e){for(var c,r,a=e[0],d=e[1],i=e[2],h=0,f=[];h<a.length;h++)r=a[h],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&f.push(u[r][0]),u[r]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(n[c]=d[c]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],c=!0,r=1;r<t.length;r++){var a=t[r];0!==u[a]&&(c=!1)}c&&(o.splice(e--,1),n=d(d.s=t[0]))}return n}var c={},r={app:0},u={app:0},o=[];function a(n){return d.p+"js/"+({}[n]||n)+"."+{"chunk-08f37a46":"7c4120d2","chunk-29b10b56":"353da1a3","chunk-2d0bdcec":"ab027919","chunk-2d0e2114":"ba74d8d0","chunk-2d208eb5":"7c58ddc4","chunk-2d2102cc":"acde1589","chunk-2d21a3d2":"57514e50","chunk-2d2223a4":"4f7079f9","chunk-2d222708":"6a12b1c1","chunk-2d22d746":"f7e29f72","chunk-328f5dbd":"85c935f2","chunk-32a973ac":"c5ad82e5","chunk-58a7c134":"068974ae","chunk-728e6142":"9056e19f"}[n]+".js"}function d(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(n){var e=[],t={"chunk-32a973ac":1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=new Promise((function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-08f37a46":"31d6cfe0","chunk-29b10b56":"31d6cfe0","chunk-2d0bdcec":"31d6cfe0","chunk-2d0e2114":"31d6cfe0","chunk-2d208eb5":"31d6cfe0","chunk-2d2102cc":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d2223a4":"31d6cfe0","chunk-2d222708":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-328f5dbd":"31d6cfe0","chunk-32a973ac":"71163b5e","chunk-58a7c134":"31d6cfe0","chunk-728e6142":"31d6cfe0"}[n]+".css",u=d.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var i=o[a],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===c||h===u))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){i=f[a],h=i.getAttribute("data-href");if(h===c||h===u)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||u,o=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[n],l.parentNode.removeChild(l),t(o)},l.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[n]=0})));var c=u[n];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise((function(e,t){c=u[n]=[e,t]}));e.push(c[2]=o);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.src=a(n);var f=new Error;i=function(e){h.onerror=h.onload=null,clearTimeout(l);var t=u[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+n+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,t[1](f)}u[n]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(e)},d.m=n,d.c=c,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)d.d(t,c,function(e){return n[e]}.bind(null,c));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="",d.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var l=h;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=t("bc3a"),u=t.n(r),o=t("a7fe"),a=t.n(o),d=t("9062"),i=t.n(d),h=(t("e40d"),function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),f=[],l={name:"App",data:function(){return{}}},p=l,s=(t("5c0b"),t("2877")),b=Object(s["a"])(p,h,f,!1,null,null,null),m=b.exports,k=(t("d3b7"),t("8c4f"));c["a"].use(k["a"]);var v=[{path:"/",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))},children:[{path:"",name:"首頁",component:function(){return t.e("chunk-32a973ac").then(t.bind(null,"d504"))}},{path:"/about",name:"關於我們",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}},{path:"/products",name:"產品列表",component:function(){return t.e("chunk-08f37a46").then(t.bind(null,"e6dc"))}},{path:"/product/:id",name:"產品頁面",component:function(){return t.e("chunk-328f5dbd").then(t.bind(null,"d2f1"))}},{path:"/cart",name:"購物車",component:function(){return t.e("chunk-2d2102cc").then(t.bind(null,"b789"))}},{path:"/order",name:"購物車結帳",component:function(){return t.e("chunk-2d222708").then(t.bind(null,"cf2a"))}},{path:"/checkout",name:"購物車結帳完成",component:function(){return t.e("chunk-2d0e2114").then(t.bind(null,"7cb4"))}}]},{path:"/login",name:"登入頁",component:function(){return t.e("chunk-29b10b56").then(t.bind(null,"a55b"))}},{path:"/admin",name:"管理頁面",component:function(){return t.e("chunk-58a7c134").then(t.bind(null,"5c3a"))},children:[{path:"products",name:"管理產品列表",component:function(){return t.e("chunk-728e6142").then(t.bind(null,"6d09"))}},{path:"coupons",name:"管理優惠券",component:function(){return t.e("chunk-2d0bdcec").then(t.bind(null,"2e25"))}},{path:"order",name:"訂單列表",component:function(){return t.e("chunk-2d208eb5").then(t.bind(null,"a79b"))}},{path:"storages",name:"圖片儲存列表",component:function(){return t.e("chunk-2d2223a4").then(t.bind(null,"ce5a"))}}]}],g=new k["a"]({routes:v}),y=g;c["a"].config.productionTip=!1,c["a"].component("Loading",i.a),c["a"].use(a.a,u.a),new c["a"]({router:y,render:function(n){return n(m)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";var c=t("9c0c"),r=t.n(c);r.a},"9c0c":function(n,e,t){}});
//# sourceMappingURL=app.4a8565d5.js.map