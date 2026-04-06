const CACHE='bg-noise-v1';
const ASSETS=[
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.svg',
  '/icon-512.svg',
  '/sounds/rain.mp3',
  '/sounds/thunderstorm.mp3',
  '/sounds/ocean.mp3',
  '/sounds/wind.mp3',
  '/sounds/stream.mp3',
  '/sounds/crickets.mp3',
  '/sounds/campfire.mp3',
  '/sounds/fan.mp3',
  '/sounds/airplane.mp3',
  '/sounds/train.mp3',
  '/sounds/laundromat.mp3',
  '/sounds/purr.mp3',
  '/sounds/keyboard.mp3'
];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>
    Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});
