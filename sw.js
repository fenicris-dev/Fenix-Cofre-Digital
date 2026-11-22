const CACHE='fenix-cofre-v1.4';
const ASSETS=['./','./index.html','./manifest.json','./icone/Fenix_Icone_192.png','./icone/Fenix_Icone_512.png','./icone/Fenix_Icone_Maskable_192.png','./icone/Fenix_Icone_Maskable_512.png','./icone/Fenix_Icone_Apple_180.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
