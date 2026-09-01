const fs = require('fs');

const html = fs.readFileSync('gun-1.html', 'utf8');
const match = html.match(/window\.EXAM_DATABASE\s*=\s*JSON\.parse\(decodeB64Unicode\("([^"]+)"\)\)/);

if (match) {
  const b64 = match[1];
  const decoded = Buffer.from(b64, 'base64').toString('utf8');
  const data = JSON.parse(decoded);
  console.log('Day 1 subjects and counts:');
  for (const k of Object.keys(data)) {
    console.log(`- ${k}: ${data[k].length}`);
    const answers = data[k].map(q => q.correctAnswer);
    let consecutive = 0;
    for (let i = 1; i < answers.length; i++) {
      if (answers[i] === answers[i-1]) consecutive++;
    }
    console.log(`  Answers sample: ${answers.slice(0, 10).join(', ')}... (consecutive identical: ${consecutive})`);
  }

  // Also extract TARGET_VOCABULARY_15
  const vocabMatch = html.match(/window\.TARGET_VOCABULARY_15\s*=\s*(\[[^;]+\]);/);
  if (vocabMatch) {
    console.log('Found TARGET_VOCABULARY_15');
  }

  // Save Day 1 raw data
  fs.writeFileSync('scripts/day1-raw.json', JSON.stringify(data, null, 2), 'utf8');
  console.log('Saved scripts/day1-raw.json');
} else {
  console.log('Could not find EXAM_DATABASE in gun-1.html');
}
