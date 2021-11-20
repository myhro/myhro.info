export async function onRequestGet({ request }) {
  const country = request.headers.get('cf-ipcountry');
  const ip = request.headers.get('cf-connecting-ip');
  const ua = request.headers.get('user-agent');
  const body = [ua, ip, country];
  return new Response(body.join('\n\n') + '\n');
}
