import { adjs } from './adjs';
import { nouns } from './nouns';

function randint(n) {
  return Math.floor(Math.random() * n);
}

export async function onRequestGet() {
  const a = adjs[randint(adjs.length)];
  const n = nouns[randint(nouns.length)];
  const r = randint(9999 - 1000 + 1) + 1000;
  const body = [a, n, r].join('-');
  return new Response(`${body}\n`);
}
