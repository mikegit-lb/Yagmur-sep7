const fs = require('fs');

const day1 = JSON.parse(fs.readFileSync('scripts/day1-database.json', 'utf8'));
const day2 = require('./day2-data.cjs');
const day3 = require('./day3-data.cjs');
const day4 = require('./day4-data.cjs');
const day5 = require('./day5-data.cjs');
const day6 = require('./day6-data.cjs');

const allDays = [
  { day: 1, title: 'Gün 1 — Temel Değerlendirme & Teşhis', database: day1.database, vocab: day1.vocab },
  day2,
  day3,
  day4,
  day5,
  day6
];

console.log('=== VALIDATION SUITE: ALL 6 DAYS ===\n');

let allPassed = true;

allDays.forEach(d => {
  console.log(`--- Checking Day ${d.day}: ${d.title} ---`);
  const db = d.database;
  const subjects = ['ydt', 'turkce', 'matematik', 'reading'];
  let totalQs = 0;

  subjects.forEach(subj => {
    const list = db[subj];
    if (!list || !Array.isArray(list)) {
      console.error(`❌ [Day ${d.day}] Subject '${subj}' missing or not an array!`);
      allPassed = false;
      return;
    }

    const count = list.length;
    totalQs += count;

    // Check expected counts
    const expected = subj === 'ydt' ? 100 : (subj === 'turkce' ? 40 : (subj === 'matematik' ? 30 : 12));
    if (count !== expected) {
      console.error(`❌ [Day ${d.day}] ${subj} question count mismatch: got ${count}, expected ${expected}`);
      allPassed = false;
    }

    // Check non-consecutive rule
    let consecutiveCount = 0;
    const distribution = { A: 0, B: 0, C: 0, D: 0, E: 0 };

    for (let i = 0; i < list.length; i++) {
      const q = list[i];
      const ans = q.correctAnswer;
      distribution[ans] = (distribution[ans] || 0) + 1;

      if (i > 0 && ans === list[i - 1].correctAnswer) {
        console.error(`❌ [Day ${d.day}] [${subj}] Consecutive identical answer at Q${i+1} (${ans}) and Q${i} (${list[i-1].correctAnswer})`);
        consecutiveCount++;
        allPassed = false;
      }

      // Check options
      if (!q.options || q.options.length !== 5) {
        console.error(`❌ [Day ${d.day}] [${subj}] Q${i+1} does not have exactly 5 options!`);
        allPassed = false;
      }

      const matchOpt = q.options.find(o => o.key === ans);
      if (!matchOpt || !matchOpt.text) {
        console.error(`❌ [Day ${d.day}] [${subj}] Q${i+1} correct option text missing for key '${ans}'!`);
        allPassed = false;
      }
    }

    console.log(`  ✓ ${subj.padEnd(10)}: ${count} questions | Consecutive same: ${consecutiveCount} | Distribution:`, distribution);
  });

  if (totalQs !== 182) {
    console.error(`❌ [Day ${d.day}] Total questions = ${totalQs}, expected 182!`);
    allPassed = false;
  } else {
    console.log(`  ✓ Total Questions: ${totalQs} (100 YDT + 40 Türkçe + 30 Mat + 12 Reading)`);
  }

  if (!d.vocab || d.vocab.length !== 15) {
    console.error(`❌ [Day ${d.day}] Vocab count = ${d.vocab ? d.vocab.length : 0}, expected 15!`);
    allPassed = false;
  } else {
    console.log(`  ✓ Vocab Words: ${d.vocab.length} items`);
  }
  console.log('');
});

if (allPassed) {
  console.log('🎉 ALL 6 DAYS PASSED ALL INVARIANT CHECKS (182 Qs each, 0 consecutive identical answers)!');
} else {
  console.error('❌ Validation failures detected.');
  process.exit(1);
}
