const fs = require('fs');

const html = fs.readFileSync('gun-1.html', 'utf8');

// Find TARGET_VOCABULARY_15 in gun-1.html
const idx = html.indexOf('TARGET_VOCABULARY_15');
console.log('Index of TARGET_VOCABULARY_15:', idx);
if (idx !== -1) {
  const snippet = html.substring(idx, idx + 2000);
  console.log('Snippet:\n', snippet.substring(0, 500));
}
