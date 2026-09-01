/**
 * Helper utility for generating questions with strictly non-consecutive correct answer keys.
 */

const KEYS = ['A', 'B', 'C', 'D', 'E'];

/**
 * Builds a balanced sequence of keys of length N where no two consecutive keys are equal.
 * Target distribution: ~N/5 for each key A, B, C, D, E.
 */
function generateNonConsecutiveKeySequence(count) {
  const sequence = [];
  const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };

  for (let i = 0; i < count; i++) {
    const prevKey = i > 0 ? sequence[i - 1] : null;
    
    // Eligible keys are those different from prevKey
    let eligible = KEYS.filter(k => k !== prevKey);
    
    // Sort eligible by current count ascending to balance distribution
    eligible.sort((a, b) => {
      if (counts[a] !== counts[b]) return counts[a] - counts[b];
      // Deterministic tie-breaker
      return KEYS.indexOf(a) - KEYS.indexOf(b);
    });

    const chosen = eligible[0];
    sequence.push(chosen);
    counts[chosen]++;
  }

  return sequence;
}

/**
 * Places the correct answer at targetKey and distributes distractors across the remaining 4 keys.
 */
function formatOptionsWithTargetKey(targetKey, correctAnswerText, distractorTexts) {
  const options = [];
  let distractorIdx = 0;

  for (const key of KEYS) {
    if (key === targetKey) {
      options.push({ key, text: correctAnswerText });
    } else {
      options.push({ key, text: distractorTexts[distractorIdx++] || `Seçenek ${key}` });
    }
  }

  return options;
}

/**
 * Creates a normalized question object with guaranteed non-consecutive targetKey.
 */
function createQuestion(id, type, questionText, correctAnswerText, distractorTexts, explanation, targetKey, extra = {}) {
  const options = formatOptionsWithTargetKey(targetKey, correctAnswerText, distractorTexts);
  return {
    id,
    type,
    questionText,
    options,
    correctAnswer: targetKey,
    explanation,
    ...extra
  };
}

/**
 * Processes an array of raw question definitions and assigns non-consecutive keys.
 */
function buildQuestionList(prefix, rawQuestions) {
  const keys = generateNonConsecutiveKeySequence(rawQuestions.length);
  return rawQuestions.map((q, idx) => {
    const id = q.id || `${prefix}-${idx + 1}`;
    const targetKey = keys[idx];
    const extra = {};
    if (q.ruleExplanation) extra.ruleExplanation = q.ruleExplanation;
    if (q.lectureNote) extra.lectureNote = q.lectureNote;
    if (q.passage) extra.passage = q.passage;
    if (q.type) extra.type = q.type;

    return createQuestion(
      id,
      q.type || 'Genel',
      q.questionText,
      q.correctAnswer,
      q.distractors,
      q.explanation,
      targetKey,
      extra
    );
  });
}

module.exports = {
  KEYS,
  generateNonConsecutiveKeySequence,
  formatOptionsWithTargetKey,
  createQuestion,
  buildQuestionList
};
