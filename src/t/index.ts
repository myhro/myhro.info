import { Hono } from 'hono';

import { PUBLIC_BUCKET_URL } from '../constants';

const app = new Hono();

app.get('/:slug', async (c) => {
  const target = new URL(
    `tools/${c.req.param('slug')}.html`,
    `${PUBLIC_BUCKET_URL}/`,
  );
  const response = await fetch(target);
  if (response.status === 404) {
    return c.text('Not Found', 404);
  }

  return new Response(response.body, {
    headers: { 'Content-Type': 'text/html' },
  });
});

export default app;
