import type { EventContext } from '@cloudflare/workers-types';

export async function onRequestGet({
  request,
}: EventContext<unknown, string, unknown>) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/dl\//, '');
  const target = `https://pub-5f2914f703904c419629da4d1ac2436f.r2.dev/${path}`;

  const response = await fetch(target, { method: 'HEAD' });
  if (response.status === 404) {
    return new Response('Not Found', { status: 404 });
  }

  return fetch(target);
}
