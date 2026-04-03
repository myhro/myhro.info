import { Hono } from 'hono';

import { PUBLIC_BUCKET_URL } from '../constants';

const app = new Hono();

app.get('/*', async (c) => {
  const path = new URL(c.req.url).pathname.replace(/^\/dl\//, '');
  const target = new URL(path, `${PUBLIC_BUCKET_URL}/`);
  const response = await fetch(target, { method: 'HEAD' });
  if (response.status === 404) {
    return c.text('Not Found', 404);
  }

  return fetch(target);
});

export default app;
