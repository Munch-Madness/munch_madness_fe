const MunchMadnessCache = 'MunchMadnessCache'
const files = ['/', '/index.html', '/App.tsx', '/index.tsx']

const self = this
self.addEventListener('install', (event ) => {
  event.waitUntil(
    caches.open(MunchMadnessCache).then((cache ) => {
      return cache.addAll(files)
    })
  )
})

self.addEventListener('fetch', (event ) => {
  event.respondWith(
    caches.match(event.request).then((response ) => {
      if (response) {
        return response
      } 
      return fetch(event.request)
      .then((response ) => {
        const responseClone = response.clone()
        caches.open(MunchMadnessCache).then((cache ) => {
          cache.put(event.request, responseClone)
        })
        return response
      })
    })
  )
})

self.addEventListener('activate', () => {
  caches.keys().then(keys => {
    keys.map(key => {
      if (key !== MunchMadnessCache) {
        caches.delete(key)
      }
    })
  })
})