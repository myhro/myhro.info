addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  let url = 'https://myhro.info/';
  return Response.redirect(url, 302);
}
