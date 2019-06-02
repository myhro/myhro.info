addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  const adjs = [
    "aged", "ancient", "autumn", "billowing", "bitter", "black", "blue", "bold",
    "broken", "cold", "cool", "crimson", "damp", "dark", "dawn", "delicate",
    "divine", "dry", "empty", "falling", "floral", "fragrant", "frosty", "green",
    "hidden", "holy", "icy", "late", "lingering", "little", "lively", "long",
    "misty", "morning", "muddy", "nameless", "old", "patient", "polished", "proud",
    "purple", "quiet", "red", "restless", "rough", "shy", "silent", "small",
    "snowy", "solitary", "sparkling", "spring", "still", "summer", "throbbing",
    "twilight", "wandering", "weathered", "white", "wild", "winter", "wispy",
    "withered", "young",
  ];
  const nouns = [
    "bird", "breeze", "brook", "bush", "butterfly", "cherry", "cloud", "darkness",
    "dawn", "dew", "dream", "dust", "feather", "field", "fire", "firefly",
    "flower", "fog", "forest", "frog", "frost", "glade", "glitter", "grass",
    "haze", "hill", "lake", "leaf", "meadow", "moon", "morning", "mountain",
    "night", "paper", "pine", "pond", "rain", "resonance", "river", "sea",
    "shadow", "shape", "silence", "sky", "smoke", "snow", "snowflake", "sound",
    "star", "sun", "sun", "sunset", "surf", "thunder", "tree", "violet", "voice",
    "water", "water", "waterfall", "wave", "wildflower", "wind", "wood",
  ];

  const a = adjs[randint(adjs.length)];
  const n = nouns[randint(nouns.length)];
  const r = randint(9999 - 1000 + 1) + 1000;
  const body = [a, n, r];

  return new Response(body.join('-') + '\n');
}

function randint(n) {
  return Math.floor(Math.random() * n);
}
