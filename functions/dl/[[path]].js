export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/dl\//, '');
  const target = `https://pub-5f2914f703904c419629da4d1ac2436f.r2.dev/${path}`;
  return fetch(target);
}
