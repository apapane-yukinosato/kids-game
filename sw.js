/* こどもゲームズ：オフラインでも遊べるようにする Service Worker
   ゲームを追加・更新したら VERSION を上げ、新しいページを PRECACHE に足す。 */
const VERSION='kids-v4';
const PRECACHE=['./','index.html','manifest.webmanifest','icon-180.png','icon-512.png','tacchi/','tacchi/index.html'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(VERSION).then(c=>Promise.all(PRECACHE.map(u=>c.add(new Request(u,{cache:'reload'})).catch(()=>{})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
// まずキャッシュから出す（すぐ開く・オフラインでも動く）。同時に裏で最新を取ってきて、次回から使う。
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url); if(!/^https?:$/.test(url.protocol)) return;
  e.respondWith((async()=>{
    const cache=await caches.open(VERSION);
    const hit=await cache.match(req,{ignoreSearch:true});
    const net=fetch(req).then(res=>{ if(res&&(res.ok||res.type==='opaque')) cache.put(req,res.clone()); return res; }).catch(()=>null);
    if(hit){ e.waitUntil(net); return hit; }
    const res=await net; if(res) return res;
    if(req.mode==='navigate'){ const home=await cache.match('index.html'); if(home) return home; }
    return new Response('オフラインです',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
  })());
});
