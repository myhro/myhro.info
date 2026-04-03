import { Hono } from 'hono';

import { debian, ubuntu } from './sources';

const app = new Hono();

app.get('/:dist', (c) => {
  const arch = c.req.query('arch') ?? '';
  const country = c.req.query('country') ?? '';
  let body = '';

  switch (c.req.param('dist')) {
    case 'debian':
      body = debian(c.req.query('release') ?? 'trixie');
      break;
    case 'ubuntu':
      body = ubuntu(c.req.query('release') ?? 'jammy', arch, country);
      break;
    default:
      return c.text(`Unknown distribution: ${c.req.param('dist')}`, 404);
  }

  return c.text(`${body}\n`);
});

export default app;
