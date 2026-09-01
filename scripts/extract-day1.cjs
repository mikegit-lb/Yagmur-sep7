const fs = require('fs');
const { normalizeQuestionList } = require('./day-data-builder.cjs');

const html = fs.readFileSync('gun-1.html', 'utf8');

// Match EXAM_DATABASE
const examMatch = html.match(/window\.EXAM_DATABASE\s*=\s*JSON\.parse\(decodeB64Unicode\("([^"]+)"\)\)/);
// Match TARGET_VOCABULARY_15
const vocabMatch = html.match(/window\.TARGET_VOCABULARY_15\s*=\s*JSON\.parse\(decodeB64Unicode\("([^"]+)"\)\)/);

if (examMatch && vocabMatch) {
  const dbDecoded = Buffer.from(examMatch[1], 'base64').toString('utf8');
  const vocabDecoded = Buffer.from(vocabMatch[1], 'base64').toString('utf8');
  
  const data = JSON.parse(dbDecoded);
  const vocab = JSON.parse(vocabDecoded);

  console.log('Day 1 Data:');
  for (const k of Object.keys(data)) {
    data[k] = normalizeQuestionList(data[k]);
    console.log(`- ${k}: ${data[k].length} normalized questions`);
  }
  console.log(`- vocab: ${vocab.length} items`);

  fs.writeFileSync('scripts/day1-database.json', JSON.stringify({ database: data, vocab }, null, 2), 'utf8');
  console.log('Updated scripts/day1-database.json successfully.');
} else {
  console.error('Could not match base64 database or vocab in gun-1.html');
}
