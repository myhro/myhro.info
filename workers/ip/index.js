addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  const country = request.headers.get('cf-ipcountry');
  const ip = request.headers.get('cf-connecting-ip');
  const ua = request.headers.get('user-agent');
  const body = [ua, ip, country];

  return new Response(body.join('\n\n') + '\n');
}
