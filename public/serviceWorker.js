const CACHE_NAME = 'v1'
const urlsToCache = [
  '.',
  '/assets/styles/contact.css',
  '/assets/img/CreamLogo.png',
  '/client/styles/GlobalStyles.js',
  '/client/styles/home.js',
  '/client/styles/button.js',
  '/client/styles/nav.js',
  '/client/styles/footer.js',
  '/client/styles/about.js',
  '/client/styles/work.js',
  '/client/styles/articles.js',
  '/client/styles/contact.js',
  'main.bundle.js',
  'index.html',
  'https://fonts.googleapis.com/css?family=Open+Sans:300,800',
]

// https://stackoverflow.com/a/70863551
const containsChromeExtension = ({ url }) =>
  url.startsWith('chrome-extension') ||
  url.includes('extension') ||
  url.startsWith('http')

self.addEventListener('install', evt => {
  // Perform install steps
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache')
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', evt => {
  if (containsChromeExtension(evt.request)) {
    return;
  }

  evt.respondWith(
    caches.match(evt.request).then(res => {
      // Cache hit - return response
      if (res) return res

      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      const fetchRequest = evt.request.clone()

      return fetch(fetchRequest).then(res => {
        // Check if we received a valid response
        if (!res || res.status !== 200 || res.type !== 'basic') {
          return res
        }

        // IMPORTANT: Clone the response. A response is a stream and because we
        // want the browser to consume the response as well as the cache
        // consuming the response, we need to clone it so we have two streams.
        const responseToCache = res.clone()

        caches.open(CACHE_NAME).then(cache => {
          cache.put(evt.request, responseToCache)
        })

        return res
      })
    })
  )
})
