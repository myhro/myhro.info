addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  let url = 'https://www.algolia.com/realtime-search-demo/malvados-ec87f464-c56f-419c-8987-8f1c9c9ce47f';
  return Response.redirect(url, 302);
}
