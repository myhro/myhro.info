export async function onRequestGet({ request }) {
  let url = new URL(request.url);
  let path = url.pathname.replace(/^\/dl/, '');
  let target = 'https://myhro-info-dl.s3.amazonaws.com' + path;
  return fetch(target);
}
