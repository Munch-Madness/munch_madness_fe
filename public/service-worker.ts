const MunchMadnessCache: string = 'MunchMadnessCache'
const files: string[] = ['/', '/index.html', '/App.tsx', '/index.tsx']

self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(MunchMadnessCache).then((cache: any) => {
      return cache.addAll(files)
    })
  )
})

self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request).then((response: any) => {
      if (response) {
        return response
      } 
      return fetch(event.request)
      .then((response: any) => {
        const responseClone = response.clone()
        caches.open(MunchMadnessCache).then((cache: any) => {
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