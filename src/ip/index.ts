import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  const country = c.req.header('cf-ipcountry');
  const ip = c.req.header('cf-connecting-ip');
  const userAgent = c.req.header('user-agent');
  const body = [userAgent, ip, country].join('\n\n');

  return c.text(`${body}\n`);
});

export default app;
