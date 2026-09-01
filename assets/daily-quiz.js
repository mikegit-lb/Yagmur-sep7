/*
 * Gün 2–6 soru çözüm arayüzü.
 * Soru içerikleri data/question-banks.js içindeki özgün pratik bankalarından gelir.
 */
(function () {
  'use strict';

  var root = document.getElementById('daily-question-practice');
  if (!root || !window.YKS_QUESTION_BANKS) return;

  var day = Number(document.body.dataset.day || root.dataset.day);
  var bank = window.YKS_QUESTION_BANKS['day' + day];
  if (!bank) return;

  var storageKey = 'yks-6gun-question-state-' + day;
  var pageSize = 20;
  var page = 0;
  var filter = 'all';
  var state = loadState();

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || { answers: {}, finished: false };
    } catch (error) {
      return { answers: {}, finished: false };
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function filteredQuestions() {
    if (filter === 'all') return bank.questions;
    return bank.questions.filter(function (item) {
      return (item.tags || []).indexOf(filter) !== -1 || item.type === filter;
    });
  }

  function score() {
    var correct = 0;
    var wrong = 0;
    var answered = 0;
    bank.questions.forEach(function (item) {
      var answer = state.answers[item.id];
      if (!answer) return;
      answered += 1;
      if (answer === item.correctAnswer) correct += 1;
      else wrong += 1;
    });
    return {
      correct: correct,
      wrong: wrong,
      answered: answered,
      blank: bank.questions.length - answered,
      net: Math.max(0, correct - wrong / 4)
    };
  }

  function render() {
    var list = filteredQuestions();
    var totalPages = Math.max(1, Math.ceil(list.length / pageSize));
    page = Math.min(page, totalPages - 1);
    var visible = list.slice(page * pageSize, (page + 1) * pageSize);
    var result = score();
    var categoryOptions = [];
    bank.questions.forEach(function (item) {
      if (categoryOptions.indexOf(item.type) === -1) categoryOptions.push(item.type);
    });

    root.innerHTML =
      '<div class="rounded-2xl border border-sky-800/60 bg-slate-900/80 p-5 md:p-6 shadow-xl">' +
        '<div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">' +
          '<div><div class="flex flex-wrap items-center gap-2">' +
            '<span class="rounded-full bg-sky-500/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-sky-300">Aktif soru bankası</span>' +
            '<span class="text-xs text-slate-400">' + escapeHtml(bank.note || 'Özgün pratik içeriği') + '</span>' +
          '</div><h2 class="mt-2 text-xl font-extrabold text-white">Soru Çözüm Alanı — ' + bank.totalQuestions + ' Soru</h2>' +
          '<p class="mt-1 text-sm text-slate-400">Cevaplar cihazında saklanır. “Testi Bitir” sonrasında doğru cevap ve açıklamalar görünür.</p></div>' +
          '<div class="grid grid-cols-3 gap-2 text-center text-xs">' +
            '<div class="rounded-xl bg-slate-800 px-3 py-2"><div class="text-lg font-black text-sky-300">' + result.answered + '</div><div class="text-slate-400">Cevap</div></div>' +
            '<div class="rounded-xl bg-slate-800 px-3 py-2"><div class="text-lg font-black text-emerald-300">' + result.correct + '</div><div class="text-slate-400">Doğru</div></div>' +
            '<div class="rounded-xl bg-slate-800 px-3 py-2"><div class="text-lg font-black text-amber-300">' + result.net.toFixed(2) + '</div><div class="text-slate-400">Net</div></div>' +
          '</div>' +
        '</div>' +
        '<div class="mt-5 grid min-w-0 grid-cols-1 gap-3 md:grid-cols-[1fr_auto_auto_auto]">' +
          '<label class="flex min-w-0 items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-300"><span class="whitespace-nowrap text-xs font-bold text-slate-500">Filtre</span>' +
            '<select id="daily-quiz-filter" class="min-w-0 max-w-full flex-1 bg-transparent text-sm text-white outline-none"><option value="all">Tüm sorular (' + bank.totalQuestions + ')</option>' +
              categoryOptions.map(function (category) { return '<option value="' + escapeHtml(category) + '">' + escapeHtml(category) + '</option>'; }).join('') +
            '</select></label>' +
          '<button id="daily-quiz-finish" class="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-extrabold text-white hover:bg-emerald-500">Testi Bitir</button>' +
          '<button id="daily-quiz-export" class="rounded-xl border border-slate-600 px-4 py-2 text-sm font-bold text-slate-200 hover:bg-slate-800">Yanıtları İndir</button>' +
          '<button id="daily-quiz-reset" class="rounded-xl border border-rose-800 px-4 py-2 text-sm font-bold text-rose-300 hover:bg-rose-950/50">Sıfırla</button>' +
        '</div>' +
        '<div class="mt-4 h-2 overflow-hidden rounded-full bg-slate-800"><div class="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" style="width:' + Math.round((result.answered / bank.totalQuestions) * 100) + '%"></div></div>' +
        '<div class="mt-2 flex items-center justify-between text-xs text-slate-500"><span>' + result.answered + '/' + bank.totalQuestions + ' cevaplandı · ' + result.blank + ' boş</span><span>' + (state.finished ? 'Sonuç modu açık' : 'Çözüm modu') + ' · Sayfa ' + (page + 1) + '/' + totalPages + '</span></div>' +
        '<div class="mt-6 space-y-4">' + visible.map(renderQuestion).join('') + '</div>' +
        '<div class="mt-6 flex items-center justify-between gap-3 border-t border-slate-800 pt-4">' +
          '<button id="daily-quiz-prev" class="rounded-xl border border-slate-700 px-4 py-2 text-sm font-bold text-slate-300 disabled:cursor-not-allowed disabled:opacity-40" ' + (page === 0 ? 'disabled' : '') + '>← Önceki</button>' +
          '<span class="text-xs text-slate-500">' + (list.length ? page * pageSize + 1 : 0) + '–' + Math.min((page + 1) * pageSize, list.length) + ' / ' + list.length + '</span>' +
          '<button id="daily-quiz-next" class="rounded-xl border border-slate-700 px-4 py-2 text-sm font-bold text-slate-300 disabled:cursor-not-allowed disabled:opacity-40" ' + (page >= totalPages - 1 ? 'disabled' : '') + '>Sonraki →</button>' +
        '</div>' +
      '</div>';

    var selector = document.getElementById('daily-quiz-filter');
    selector.value = filter;
    selector.addEventListener('change', function (event) {
      filter = event.target.value;
      page = 0;
      render();
    });
    document.getElementById('daily-quiz-finish').addEventListener('click', finish);
    document.getElementById('daily-quiz-export').addEventListener('click', exportAnswers);
    document.getElementById('daily-quiz-reset').addEventListener('click', reset);
    document.getElementById('daily-quiz-prev').addEventListener('click', function () { page -= 1; render(); });
    document.getElementById('daily-quiz-next').addEventListener('click', function () { page += 1; render(); });
    root.querySelectorAll('.daily-answer-option').forEach(function (button) {
      button.addEventListener('click', function () {
        if (state.finished) return;
        state.answers[button.dataset.questionId] = button.dataset.answerKey;
        saveState();
        render();
      });
    });
  }

  function renderQuestion(item) {
    var selected = state.answers[item.id];
    var isCorrect = selected === item.correctAnswer;
    var optionHtml = item.options.map(function (option) {
      var chosen = selected === option.key;
      var correct = state.finished && option.key === item.correctAnswer;
      var wrong = state.finished && chosen && !isCorrect;
      var colour = correct ? 'border-emerald-500 bg-emerald-950/50 text-emerald-100' : wrong ? 'border-rose-500 bg-rose-950/50 text-rose-100' : chosen ? 'border-sky-500 bg-sky-950/50 text-sky-100' : 'border-slate-700 bg-slate-950/40 text-slate-300 hover:border-sky-600';
      return '<button type="button" data-question-id="' + item.id + '" data-answer-key="' + option.key + '" class="daily-answer-option flex w-full items-start gap-3 rounded-xl border p-3 text-left text-sm transition ' + colour + (state.finished ? ' cursor-default' : '') + '">' +
        '<span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current text-xs font-black">' + option.key + '</span>' +
        '<span class="pt-1">' + escapeHtml(option.text) + '</span></button>';
    }).join('');

    var reviewHtml = state.finished ?
      '<div class="mt-4 rounded-xl border ' + (isCorrect ? 'border-emerald-800 bg-emerald-950/30' : 'border-rose-800 bg-rose-950/30') + ' p-4 text-sm">' +
        '<div class="font-extrabold ' + (isCorrect ? 'text-emerald-300' : 'text-rose-300') + '">' + (selected ? (isCorrect ? 'Doğru' : 'Yanlış') : 'Boş') + ' · Doğru cevap: ' + item.correctAnswer + '</div>' +
        '<div class="mt-2 leading-relaxed text-slate-300">' + (item.explanation || '') + '</div>' +
        (item.ruleExplanation ? '<div class="mt-3 border-t border-slate-700 pt-3 text-sky-200">' + item.ruleExplanation + '</div>' : '') +
      '</div>' : '';

    var passage = item.passage ?
      '<div class="mb-4 rounded-xl border border-indigo-800/60 bg-indigo-950/30 p-4 text-sm leading-relaxed text-slate-300"><div class="mb-2 text-xs font-black uppercase tracking-wider text-indigo-300">' + escapeHtml(item.passage.title) + '</div>' + escapeHtml(item.passage.text) + '</div>' : '';
    return '<article class="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-5">' +
      '<div class="flex flex-wrap items-center justify-between gap-2"><div class="flex items-center gap-2"><span class="rounded-lg bg-slate-100 px-2 py-1 text-xs font-black text-slate-900">' + escapeHtml(item.id) + '</span><span class="text-xs font-bold text-slate-400">' + escapeHtml(item.type) + '</span></div><span class="text-xs text-amber-300">' + '★'.repeat(item.difficulty || 3) + '</span></div>' +
      '<div class="mt-4 text-base font-bold leading-relaxed text-white">' + escapeHtml(item.questionText) + '</div>' + passage +
      '<div class="mt-4 grid gap-2">' + optionHtml + '</div>' + reviewHtml +
    '</article>';
  }

  function finish() {
    var result = score();
    if (result.answered < bank.totalQuestions && !window.confirm(result.blank + ' soru boş. Testi yine de bitirmek istiyor musun?')) return;
    state.finished = true;
    saveState();
    render();
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function reset() {
    if (!window.confirm('Bu günün tüm cevapları ve sonucu silinsin mi?')) return;
    state = { answers: {}, finished: false };
    page = 0;
    saveState();
    render();
  }

  function exportAnswers() {
    var payload = { day: bank.day, subject: bank.subject, exportedAt: new Date().toISOString(), result: score(), answers: state.answers };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'yks-6gun-gun-' + day + '-yanitlar.json';
    link.click();
    URL.revokeObjectURL(link.href);
  }

  render();
})();
