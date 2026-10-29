// Mínimo para que Android ofrezca "Instalar app". No guarda nada: todo va siempre a internet.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
