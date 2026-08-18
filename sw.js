// Service worker mínimo: no cachea nada (la app siempre necesita
// datos frescos de tu Google Sheet), solo existe para que Android
// permita instalarla como app.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", (e) => {
  // Passthrough: deja que todas las peticiones vayan directo a la red.
});
