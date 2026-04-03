import { Hono } from 'hono';

import { PUBLIC_BUCKET_URL } from '../constants';

const app = new Hono();

app.get('/:slug', async (c) => {
  const target = new URL(
    `urls/${c.req.param('slug')}.txt`,
    `${PUBLIC_BUCKET_URL}/`,
  );
  const response = await fetch(target);
  if (response.status === 404) {
    return c.text('Not Found', 404);
  }

  const url = await response.text();
  return c.redirect(url.trim(), 301);
});

export default app;
