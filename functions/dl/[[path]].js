export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/dl\//, '');
  const target = `https://myhro-info-dl.s3.amazonaws.com/${path}`;
  return fetch(target);
}
