import type { EventContext } from '@cloudflare/workers-types';

export async function onRequestGet({
  params,
}: EventContext<unknown, string, unknown>) {
  const target = `https://pub-5f2914f703904c419629da4d1ac2436f.r2.dev/tools/${params.slug}.html`;
  const response = await fetch(target);
  if (response.status === 404) {
    return new Response('Not Found', { status: 404 });
  }

  const content = await response.text();
  return new Response(content, {
    headers: { 'Content-Type': 'text/html' },
  });
}
