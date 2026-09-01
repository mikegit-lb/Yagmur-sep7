const fs = require('fs');

const filesToCheck = [
  { file: 'gun-1.html', expectedDay: 1 },
  { file: 'gun-2-ydt-ingilizce.html', expectedDay: 2 },
  { file: 'gun-3-tyt-turkce.html', expectedDay: 3 },
  { file: 'gun-4-tyt-matematik.html', expectedDay: 4 },
  { file: 'gun-5-ydt-reading.html', expectedDay: 5 },
  { file: 'gun-6-simulasyon.html', expectedDay: 6 },
  { file: 'sinav_merkezi.html', expectedDay: 1 }
];

console.log('=== END-TO-END VERIFICATION OF ALL HTML FILES ===\n');

let allOk = true;

filesToCheck.forEach(({ file, expectedDay }) => {
  console.log(`Checking ${file}...`);
  if (!fs.existsSync(file)) {
    console.error(`❌ File ${file} does not exist!`);
    allOk = false;
    return;
  }

  const html = fs.readFileSync(file, 'utf8');
  const sizeKb = (html.length / 1024).toFixed(1);

  // Check 8 tabs
  const requiredTabs = [
    'tab-content-plan',
    'tab-content-hata-defteri',
    'tab-content-ydt',
    'tab-content-turkce',
    'tab-content-matematik',
    'tab-content-reading',
    'tab-content-vocab',
    'tab-content-analiz'
  ];

  requiredTabs.forEach(t => {
    if (!html.includes(`id="${t}"`)) {
      console.error(`❌ ${file} is missing tab section '${t}'!`);
      allOk = false;
    }
  });

  // Check base64 database & vocab
  const dbMatch = html.match(/window\.EXAM_DATABASE\s*=\s*JSON\.parse\(decodeB64Unicode\("([^"]+)"\)\)/);
  const vocabMatch = html.match(/window\.TARGET_VOCABULARY_15\s*=\s*JSON\.parse\(decodeB64Unicode\("([^"]+)"\)\)/);

  if (!dbMatch) {
    console.error(`❌ ${file} missing base64 EXAM_DATABASE!`);
    allOk = false;
    return;
  }
  if (!vocabMatch) {
    console.error(`❌ ${file} missing base64 TARGET_VOCABULARY_15!`);
    allOk = false;
    return;
  }

  const dbDecoded = Buffer.from(dbMatch[1], 'base64').toString('utf8');
  const vocabDecoded = Buffer.from(vocabMatch[1], 'base64').toString('utf8');

  const data = JSON.parse(dbDecoded);
  const vocab = JSON.parse(vocabDecoded);

  const ydtCount = data.ydt ? data.ydt.length : 0;
  const trkCount = data.turkce ? data.turkce.length : 0;
  const matCount = data.matematik ? data.matematik.length : 0;
  const rdCount = data.reading ? data.reading.length : 0;
  const total = ydtCount + trkCount + matCount + rdCount;

  if (ydtCount !== 100 || trkCount !== 40 || matCount !== 30 || rdCount !== 12 || total !== 182) {
    console.error(`❌ ${file} question counts invalid: YDT=${ydtCount}, Türkçe=${trkCount}, Matematik=${matCount}, Reading=${rdCount} (Total=${total})`);
    allOk = false;
  }

  // Check non-consecutive rule
  ['ydt', 'turkce', 'matematik', 'reading'].forEach(subj => {
    const list = data[subj] || [];
    for (let i = 1; i < list.length; i++) {
      if (list[i].correctAnswer === list[i - 1].correctAnswer) {
        console.error(`❌ ${file} [${subj}] CONSECUTIVE DUPLICATE ANSWER at Q${i+1} (${list[i].correctAnswer}) and Q${i} (${list[i-1].correctAnswer})!`);
        allOk = false;
      }
    }
  });

  if (vocab.length !== 15) {
    console.error(`❌ ${file} vocab count is ${vocab.length}, expected 15!`);
    allOk = false;
  }

  console.log(`  ✓ ${file} (${sizeKb} KB): 8 tabs present, 182 questions (100 YDT + 40 Tr + 30 Mat + 12 Rd), 15 vocab words, 0 consecutive duplicate answers.`);
});

console.log('\nChecking index.html...');
const indexHtml = fs.readFileSync('index.html', 'utf8');
filesToCheck.forEach(({ file }) => {
  if (!indexHtml.includes(file)) {
    console.error(`❌ index.html does not link to ${file}!`);
    allOk = false;
  }
});
console.log('  ✓ index.html links to all day files.');

if (allOk) {
  console.log('\n🌟 ALL FILES ARE 100% VERIFIED AND PRODUCTION READY!');
} else {
  console.error('\n❌ Verification errors occurred.');
  process.exit(1);
}
