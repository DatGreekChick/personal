const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
]
    , CACHE_NAME = 'my-site-cache-v1'

self.addEventListener('install', evt => {
  // Perform install steps
  evt.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request)
      .then(res => {
        // Cache hit - return response
        if (res) return response

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        const fetchRequest = evt.request.clone()

        return fetch(fetchRequest)
          .then(res => {
            // Check if we received a valid response
            if(!res || res.status !== 200 || res.type !== 'basic') {
              return res
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = response.clone()

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(evt.request, responseToCache)
              })

            return res
          }
        )
    }))
})