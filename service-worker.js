self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('push', (event) => {
  console.info('push', event);

  const message = event.data ? event.data.text() : 'NG';

  event.waitUntil(
      self.registration.showNotification('Push Notification Title', {
          body: message,
          icon: '',
          tag: 'push-notification-tag'
      })
  );
});