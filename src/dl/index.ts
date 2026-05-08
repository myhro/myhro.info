import { Hono } from 'hono';

import { PUBLIC_BUCKET_URL } from '../constants';

const app = new Hono();

app.get('/*', async (c) => {
  const path = new URL(c.req.url).pathname.replace(/^\/dl\//, '');
  const target = new URL(path, `${PUBLIC_BUCKET_URL}/`);

  const response = await fetch(target);
  if (response.status === 404) {
    return c.text('Not Found', 404);
  }

  const headers = new Headers(response.headers);
  const contentType = headers.get('content-type');
  const isText = contentType?.toLowerCase().startsWith('text/') === true;
  const hasCharset = contentType?.toLowerCase().includes('charset=') === true;

  if (isText && !hasCharset) {
    headers.set('Content-Type', `${contentType}; charset=utf-8`);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});

export default app;
