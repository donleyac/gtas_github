"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/gtas_github/index.html","1fc3e9a3ca5c762c3e1b8eaa0592ae7a"],["/gtas_github/static/css/main.30cc7403.css","a52157b64d65c0bc102fc89d9f92d922"],["/gtas_github/static/js/main.81810104.js","7f384285812c17fb00cd8c9761ab512f"],["/gtas_github/static/media/CUSTOMER_SERVICE_250x250.4baaab30.svg","4baaab30bd556c664e6e1a51ecafd170"],["/gtas_github/static/media/GTAS_145x145.1c3450c2.svg","1c3450c2cfa7a5d3f5a64220e6383089"],["/gtas_github/static/media/GTAS_145x145bg.62e74019.svg","62e74019195dd6bb58064ac1e9c40046"],["/gtas_github/static/media/GTAS_COST_BREAKDOWN.cb602273.jpg","cb60227354d040a8117075bb335acb91"],["/gtas_github/static/media/GTAS_EXPLAINER.14a03e39.svg","14a03e3914960abaa35cfb7a4916bd16"],["/gtas_github/static/media/GTAS_TIMELINE.bd24084c.jpg","bd24084c69f860439fd390ea2e75332d"],["/gtas_github/static/media/WCO_LOGOMARK_45x45.7c9b8f36.svg","7c9b8f36a5ee1b6311b4cd4bc1441e48"],["/gtas_github/static/media/WOC_FULL_MARK_370x36.78bd5440.svg","78bd5440a3f556c5dcc8635245eb815c"],["/gtas_github/static/media/diagram.97a619b2.PNG","97a619b2286d8b63e88d43694cea4740"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/gtas_github/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});