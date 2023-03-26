import type { EventContext } from '@cloudflare/workers-types';

export async function onRequestGet({
  request,
}: EventContext<unknown, string, unknown>) {
  const country = request.headers.get('cf-ipcountry');
  const ip = request.headers.get('cf-connecting-ip');
  const ua = request.headers.get('user-agent');
  const body = [ua, ip, country].join('\n\n');
  return new Response(`${body}\n`);
}
