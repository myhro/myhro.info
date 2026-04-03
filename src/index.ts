import { Hono } from 'hono';

import dl from './dl';
import heroku from './heroku';
import ip from './ip';
import sl from './sl';
import t from './t';
import u from './u';

type Bindings = {
  ASSETS: {
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  };
};

const app = new Hono<{ Bindings: Bindings }>();

app.route('/dl', dl);
app.route('/heroku', heroku);
app.route('/ip', ip);
app.route('/sl', sl);
app.route('/t', t);
app.route('/u', u);

app.notFound((c) => c.env.ASSETS.fetch(c.req.raw));

export default app;
