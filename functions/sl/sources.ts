export function debian(release: string) {
  const mainSources = [
    'Types: deb',
    'URIs: https://deb.debian.org/debian/',
    `Suites: ${release} ${release}-updates`,
    'Components: main contrib non-free non-free-firmware',
    'Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg',
  ].join('\n');

  const securitySources = [
    'Types: deb',
    'URIs: https://deb.debian.org/debian-security/',
    `Suites: ${release}-security`,
    'Components: main contrib non-free non-free-firmware',
    'Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg',
  ].join('\n');

  return `${mainSources}\n\n${securitySources}`;
}

export function ubuntu(release: string, arch: string, country: string) {
  const sources = [
    'deb http://{URI}/ {RELEASE} main restricted universe multiverse',
    'deb http://{URI}/ {RELEASE}-updates main restricted universe multiverse',
    'deb http://{URI}/ {RELEASE}-security main restricted universe multiverse',
  ];

  let uri = 'archive.ubuntu.com/ubuntu';
  if (arch === 'arm64') {
    uri = 'ports.ubuntu.com/ubuntu-ports';
  }

  if (country !== '') {
    uri = `${country}.${uri}`;
  }

  return sources
    .map((source) => source.replace('{URI}', uri).replace('{RELEASE}', release))
    .join('\n');
}
