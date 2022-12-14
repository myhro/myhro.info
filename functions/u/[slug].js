export async function onRequestGet({ params }) {
  const target = `https://pub-5f2914f703904c419629da4d1ac2436f.r2.dev/urls/${params.slug}.txt`;
  const response = await fetch(target);
  if (response.status === 404) {
    return new Response('Not Found', { status: 404 });
  }

  const url = await response.text();
  return Response.redirect(url.trim(), 301);
}
