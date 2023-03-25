import type { EventContext } from '@cloudflare/workers-types';
import { debian, ubuntu } from './sources';

export async function onRequestGet({
  params,
  request,
}: EventContext<unknown, string, unknown>) {
  const query = new URL(request.url).searchParams;
  const arch = query.get('arch') || '';
  const country = query.get('country') || '';
  let body = '';
  let release = '';

  switch (params.dist) {
    case 'debian':
      release = query.get('release') || 'bullseye';
      body = debian(release);
      break;
    case 'ubuntu':
      release = query.get('release') || 'jammy';
      body = ubuntu(release, arch, country);
      break;
    default:
      return new Response(`Unknown distribution: ${params.dist}`, {
        status: 404,
      });
  }

  return new Response(`${body}\n`);
}
