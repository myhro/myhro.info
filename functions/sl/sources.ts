export function debian(release: string) {
  const sources = [
    'deb https://deb.debian.org/debian/ {RELEASE} main contrib non-free',
    'deb https://deb.debian.org/debian/ {RELEASE}-updates main contrib non-free',
    'deb https://deb.debian.org/debian-security/ {RELEASE}-security main contrib non-free',
  ];

  return sources
    .map((source) => {
      const line = source.replace('{RELEASE}', release);
      if (release === 'bookworm') {
        return `${line} non-free-firmware`;
      }
      return line;
    })
    .join('\n');
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
