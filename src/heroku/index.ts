import { Hono } from 'hono';

import { adjs } from './adjs';
import { nouns } from './nouns';

const app = new Hono();

function randint(n: number) {
  return Math.floor(Math.random() * n);
}

app.get('/', (c) => {
  const adjective = adjs[randint(adjs.length)];
  const noun = nouns[randint(nouns.length)];
  const suffix = randint(9999 - 1000 + 1) + 1000;
  const body = [adjective, noun, suffix].join('-');

  return c.text(`${body}\n`);
});

export default app;
