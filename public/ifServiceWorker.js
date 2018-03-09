if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/serviceWorker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.error('Error registering service worker:', err))
}