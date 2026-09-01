/**
 * Database Invariant Validator for all 14 Days
 */
const fs = require('fs');

console.log('=== VALIDATING QUESTION DATABASES FOR DAYS 1 THROUGH 14 ===\n');

const day1Data = JSON.parse(fs.readFileSync('scripts/day1-database.json', 'utf8'));

const allDays = [
  { day: 1, title: 'Gün 1', database: day1Data.database, vocab: day1Data.vocab },
  require('./day2-data.cjs'),
  require('./day3-data.cjs'),
  require('./day4-data.cjs'),
  require('./day5-data.cjs'),
  require('./day6-data.cjs'),
  require('./day7-data.cjs'),
  require('./day8-data.cjs'),
  require('./day9-data.cjs'),
  require('./day10-data.cjs'),
  require('./day11-data.cjs'),
  require('./day12-data.cjs'),
  require('./day13-data.cjs'),
  require('./day14-data.cjs')
];

let allPassed = true;
let grandTotalQuestions = 0;
let grandTotalVocab = 0;

allDays.forEach(({ day, title, database, vocab }) => {
  console.log(`--- Checking Day ${day}: ${title} ---`);

  const subjects = Object.keys(database);
  let dayTotal = 0;

  subjects.forEach(subj => {
    const list = database[subj];
    dayTotal += list.length;
    console.log(`  [${subj.toUpperCase()}] Count: ${list.length}`);

    // Check non-consecutive rule
    let consecCount = 0;
    for (let i = 1; i < list.length; i++) {
      if (list[i].correctAnswer === list[i - 1].correctAnswer) {
        console.error(`    ❌ CONSECUTIVE DUPLICATE ANSWER at Q${i+1} (${list[i].correctAnswer}) and Q${i} (${list[i-1].correctAnswer})`);
        consecCount++;
        allPassed = false;
      }
    }
    if (consecCount === 0) {
      console.log(`    ✓ 0 consecutive duplicates in ${subj}`);
    }

    // Check option count
    list.forEach((q, idx) => {
      if (!q.options || q.options.length !== 5) {
        console.error(`    ❌ Question ${idx+1} does not have exactly 5 options!`);
        allPassed = false;
      }
      const hasCorrect = q.options.some(o => o.key === q.correctAnswer);
      if (!hasCorrect) {
        console.error(`    ❌ Question ${idx+1} correct answer key ${q.correctAnswer} not found in options!`);
        allPassed = false;
      }
    });
  });

  grandTotalQuestions += dayTotal;
  grandTotalVocab += (vocab ? vocab.length : 0);

  const expectedTotal = (day === 8 || day === 10 || day === 12 || day === 14) ? 212 : 182;
  if (dayTotal !== expectedTotal) {
    console.error(`  ❌ Day ${day} question total is ${dayTotal}, expected ${expectedTotal}!`);
    allPassed = false;
  } else {
    console.log(`  ✓ Day ${day} Total Questions: ${dayTotal} (matches expected ${expectedTotal})`);
  }

  if (!vocab || vocab.length !== 15) {
    console.error(`  ❌ Day ${day} Vocab count is ${vocab ? vocab.length : 0}, expected 15!`);
    allPassed = false;
  } else {
    console.log(`  ✓ Day ${day} Target Vocab: ${vocab.length} words`);
  }
  console.log('');
});

console.log(`====================================================`);
console.log(`📊 GRAND TOTAL 14-DAY CURRICULUM STATS:`);
console.log(`   Total Questions: ${grandTotalQuestions}`);
console.log(`   Total Target Vocabulary: ${grandTotalVocab}`);
console.log(`====================================================`);

if (allPassed) {
  console.log('🌟 ALL 14 DAYS PASSED INVARIANT & INTEGRITY VALIDATION WITH ZERO ERRORS!');
} else {
  console.error('❌ Validation failed on some checks.');
  process.exit(1);
}
