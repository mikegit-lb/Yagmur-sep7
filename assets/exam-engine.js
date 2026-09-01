/**
 * ============================================================
 * YKS 6 GÜNLÜK SINAV MERKEZİ - EXAM ENGINE
 * exam-engine.js
 * ============================================================
 * Sınav motoru: soru render, cevap kaydetme, net hesaplama,
 * hata defteri, bayrak sistemi, navigasyon pill'leri
 * ============================================================
 */

window.YKS = window.YKS || {};

YKS.Exam = {
  currentSubject: null,
  currentQuestions: [],
  currentDay: 1,
  chartInstance: null,

  // ============================================================
  // INITIALIZATION
  // ============================================================
  init: (day, subject, questionsData) => {
    YKS.Exam.currentDay = day;
    YKS.Exam.currentSubject = subject;
    YKS.Exam.currentQuestions = questionsData[subject] || [];
    
    YKS.Storage.loadDayData(day);
    YKS.Exam.renderQuestions();
    YKS.Exam.renderPills();
    YKS.Exam.updateScorecard();
  },

  // ============================================================
  // QUESTION RENDERING
  // ============================================================
  renderQuestions: () => {
    const container = document.getElementById(`questions-container-${YKS.Exam.currentSubject}`);
    if (!container) return;

    const questions = YKS.Exam.currentQuestions;
    if (!questions || !questions.length) {
      container.innerHTML = '<p class="text-slate-400 text-center py-8">Bu bölüm için soru bulunamadı.</p>';
      return;
    }

    let html = '';
    questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const selected = (YKS.State.studentAnswers[YKS.Exam.currentSubject] && YKS.State.studentAnswers[YKS.Exam.currentSubject][q.id]) || null;
      const isDone = YKS.State.testCompleted[YKS.Exam.currentSubject];
      const isFlagged = YKS.State.flaggedQuestions[q.id] || false;

      let ruleButtonHtml = '';
      let ruleBoxHtml = '';
      if (q.ruleExplanation) {
        ruleButtonHtml = `
          <button onclick="YKS.Exam.toggleRule('${q.id}')" id="rule-btn-${q.id}" class="text-xs font-bold px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-sm transition flex items-center space-x-1.5 active:scale-95">
            <i class="fa-solid fa-graduation-cap text-amber-300"></i>
            <span>Gramer Kuralı & İpucu (TR)</span>
          </button>`;
        ruleBoxHtml = `
          <div id="rule-box-${q.id}" class="hidden p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/50 border border-sky-300 dark:border-sky-800 text-xs sm:text-sm text-slate-800 dark:text-sky-100 leading-relaxed shadow-sm transition-all duration-300">
            <div class="flex items-center justify-between text-xs font-black text-sky-700 dark:text-sky-300 mb-2 border-b border-sky-200 dark:border-sky-800/60 pb-1.5">
              <span class="flex items-center space-x-1.5"><i class="fa-solid fa-book-bookmark text-amber-500"></i> <span>TÜRKÇE GRAMER KURALI & SORU ÇÖZÜM REHBERİ</span></span>
              <button onclick="YKS.Exam.toggleRule('${q.id}')" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="space-y-1.5">${q.ruleExplanation}</div>
          </div>`;
      }

      let lectureNoteHtml = '';
      if (q.lectureNote) {
        lectureNoteHtml = `<div class="bg-amber-50/90 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed mb-3">${q.lectureNote}</div>`;
      }

      let passageHtml = '';
      if (q.passage) {
        passageHtml = `
          <div class="bg-slate-100 dark:bg-slate-900/90 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            <div class="flex items-center justify-between font-bold text-xs text-indigo-600 dark:text-indigo-400 mb-2">
              <span><i class="fa-solid fa-file-lines mr-1"></i> ${q.passage.title}</span>
              <span class="text-[10px] bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded text-indigo-700 dark:text-indigo-300">Okuma Parçası</span>
            </div>
            <div class="passage-body select-text">${q.passage.text}</div>
          </div>`;
      }

      let optionsHtml = '';
      q.options.forEach(opt => {
        let optBorder = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900';
        let optIcon = `<span class="w-7 h-7 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center font-bold text-xs text-slate-600 dark:text-slate-400 mr-3">${opt.key}</span>`;

        if (isDone) {
          if (opt.key === q.correctAnswer) {
            optBorder = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-bold';
            optIcon = `<span class="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mr-3"><i class="fa-solid fa-check"></i></span>`;
          } else if (selected === opt.key && selected !== q.correctAnswer) {
            optBorder = 'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 font-bold';
            optIcon = `<span class="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-xs mr-3"><i class="fa-solid fa-xmark"></i></span>`;
          }
        } else {
          if (selected === opt.key) {
            optBorder = 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 font-bold ring-2 ring-sky-500/20';
            optIcon = `<span class="w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs mr-3">${opt.key}</span>`;
          }
        }

        optionsHtml += `
          <label onclick="YKS.Exam.selectAnswer('${YKS.Exam.currentSubject}', '${q.id}', '${opt.key}')" class="option-label ${optBorder} p-3 sm:p-3.5 rounded-xl border flex items-start cursor-pointer transition select-none">
            ${optIcon}
            <div class="text-xs sm:text-sm pt-0.5 flex-grow">${opt.text}</div>
          </label>`;
      });

      let explanationHtml = '';
      if (isDone) {
        const isCorrect = (selected === q.correctAnswer);
        explanationHtml = `
          <div class="mt-4 p-4 rounded-xl ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/40' : 'bg-rose-50 dark:bg-rose-950/40 border border-rose-500/40'} text-xs space-y-2">
            <div class="flex items-center justify-between font-bold">
              <span class="${isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'} flex items-center">
                <i class="fa-solid ${isCorrect ? 'fa-circle-check text-emerald-500' : 'fa-circle-xmark text-rose-500'} mr-1.5 text-base"></i>
                ${isCorrect ? 'Tebrikler, Doğru Yanıt!' : `Yanlış! Doğru Seçenek: (${q.correctAnswer})`}
              </span>
              <span class="text-slate-500 dark:text-slate-400 font-mono">ÖSYM Çözüm Analizi</span>
            </div>
            <div class="text-slate-700 dark:text-slate-300 leading-relaxed pt-1 border-t border-slate-200 dark:border-slate-800">${q.explanation}</div>
          </div>`;
      }

      html += `
        <div id="q-card-${q.id}" class="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm scroll-mt-24 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-3">
            <div class="flex items-center space-x-2">
              <span class="w-8 h-8 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 flex items-center justify-center font-black text-xs font-mono">${qNum}</span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">${q.type}</span>
              ${q.difficulty ? `<span class="text-[10px] font-bold px-2 py-0.5 rounded ${q.difficulty >= 4 ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300' : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'}">${'⭐'.repeat(q.difficulty)}</span>` : ''}
            </div>
            <div class="flex items-center space-x-2 no-print">
              ${ruleButtonHtml}
              <button onclick="YKS.Exam.toggleFlag('${q.id}', '${YKS.Exam.currentSubject}')" class="text-xs px-2.5 py-1 rounded-lg border transition ${isFlagged ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-300' : 'text-slate-400 hover:text-amber-500 border-transparent hover:border-slate-300'}" title="İşaretle">
                <i class="fa-solid fa-bookmark mr-1"></i> ${isFlagged ? 'İşaretli' : 'İşaretle'}
              </button>
            </div>
          </div>
          ${ruleBoxHtml}
          ${lectureNoteHtml}
          ${passageHtml}
          <div class="text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-medium leading-relaxed select-text">${q.questionText}</div>
          <div class="grid grid-cols-1 gap-2.5 pt-2">${optionsHtml}</div>
          ${explanationHtml}
        </div>`;
    });

    container.innerHTML = html;

    // Render math if KaTeX is available
    if (window.renderMathInElement) {
      try {
        renderMathInElement(container, {
          delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
          throwOnError: false
        });
      } catch (err) { /* KaTeX not loaded */ }
    }
  },

  // ============================================================
  // ANSWER SELECTION
  // ============================================================
  selectAnswer: (subject, qId, answerKey) => {
    if (YKS.State.testCompleted[subject]) return; // Can't change after completion

    if (!YKS.State.studentAnswers[subject]) YKS.State.studentAnswers[subject] = {};
    YKS.State.studentAnswers[subject][qId] = answerKey;

    YKS.Storage.saveDayData(YKS.Exam.currentDay);
    YKS.Exam.renderQuestions();
    YKS.Exam.renderPills();
    YKS.Exam.updateScorecard();
  },

  // ============================================================
  // FLAG TOGGLE
  // ============================================================
  toggleFlag: (qId, subject) => {
    YKS.State.flaggedQuestions[qId] = !YKS.State.flaggedQuestions[qId];
    YKS.Storage.saveDayData(YKS.Exam.currentDay);
    YKS.Exam.renderQuestions();
    YKS.Exam.renderPills();
  },

  // ============================================================
  // RULE BOX TOGGLE
  // ============================================================
  toggleRule: (qId) => {
    const box = document.getElementById(`rule-box-${qId}`);
    const btn = document.getElementById(`rule-btn-${qId}`);
    if (box) {
      box.classList.toggle('hidden');
      if (btn) {
        const isHidden = box.classList.contains('hidden');
        btn.classList.toggle('ring-2', !isHidden);
        btn.classList.toggle('ring-amber-400', !isHidden);
      }
    }
  },

  // ============================================================
  // NAVIGATION PILLS
  // ============================================================
  renderPills: () => {
    const pillsContainer = document.getElementById(`nav-pills-${YKS.Exam.currentSubject}`);
    if (!pillsContainer) return;

    const questions = YKS.Exam.currentQuestions;
    const answers = YKS.State.studentAnswers[YKS.Exam.currentSubject] || {};
    const isDone = YKS.State.testCompleted[YKS.Exam.currentSubject];

    let html = '';
    questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const answered = answers[q.id];
      const isFlagged = YKS.State.flaggedQuestions[q.id];
      
      let pillClass = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition cursor-pointer ';
      let pillColor = 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700';
      
      if (isDone) {
        if (answered === q.correctAnswer) {
          pillColor = 'bg-emerald-500 text-white';
        } else if (answered && answered !== q.correctAnswer) {
          pillColor = 'bg-rose-500 text-white';
        } else {
          pillColor = 'bg-slate-300 dark:bg-slate-700 text-slate-500';
        }
      } else if (answered) {
        pillColor = 'bg-sky-500 text-white';
      }
      
      if (isFlagged) {
        pillColor += ' ring-2 ring-amber-400';
      }

      html += `<button onclick="YKS.Exam.scrollToQuestion('${q.id}')" class="${pillClass}${pillColor}" title="Soru ${qNum}">${qNum}</button>`;
    });

    pillsContainer.innerHTML = html;
  },

  scrollToQuestion: (qId) => {
    const card = document.getElementById(`q-card-${qId}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      card.classList.add('ring-2', 'ring-sky-400');
      setTimeout(() => card.classList.remove('ring-2', 'ring-sky-400'), 1500);
    }
  },

  // ============================================================
  // FINISH TEST
  // ============================================================
  finishTest: (subject) => {
    const questions = YKS.Exam.currentQuestions;
    const answers = YKS.State.studentAnswers[subject] || {};
    
    let answered = 0;
    let blank = 0;
    questions.forEach(q => {
      if (answers[q.id]) answered++;
      else blank++;
    });

    if (blank > 0) {
      YKS.UI.confirm(`${blank} soru boş bırakılmış. Yine de testi bitirmek istiyor musunuz?`).then(result => {
        if (result.action === true) {
          YKS.Exam.completeTest(subject);
        }
      });
    } else {
      YKS.Exam.completeTest(subject);
    }
  },

  completeTest: (subject) => {
    YKS.State.testCompleted[subject] = true;
    YKS.Storage.saveDayData(YKS.Exam.currentDay);
    YKS.Exam.renderQuestions();
    YKS.Exam.renderPills();
    YKS.Exam.updateScorecard();
    YKS.Exam.autoAddToHataDefteri(subject);
    
    // Confetti
    if (typeof confetti !== 'undefined') {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
    
    YKS.UI.toast(`${subject.toUpperCase()} testi tamamlandı! Net hesaplandı.`, 'success', 4000);
    
    // Log the result
    const result = YKS.Exam.calculateNet(subject);
    YKS.Storage.addDailyLog({
      day: YKS.Exam.currentDay,
      subject,
      ...result,
      timestamp: Date.now()
    });
  },

  // ============================================================
  // NET CALCULATION
  // ============================================================
  calculateNet: (subject) => {
    const questions = YKS.Exam.currentQuestions;
    const answers = YKS.State.studentAnswers[subject] || {};
    
    let correct = 0;
    let wrong = 0;
    let blank = 0;
    
    questions.forEach(q => {
      if (!answers[q.id]) {
        blank++;
      } else if (answers[q.id] === q.correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    });
    
    const net = correct - (wrong / 4);
    const accuracy = questions.length > 0 ? ((correct / questions.length) * 100).toFixed(1) : 0;
    
    return { correct, wrong, blank, net: Math.max(0, net), accuracy, total: questions.length };
  },

  // ============================================================
  // SCORECARD UPDATE
  // ============================================================
  updateScorecard: () => {
    const subjects = ['ydt', 'turkce', 'matematik', 'reading'];
    let totalNet = 0;
    let totalQuestions = 0;
    
    subjects.forEach(subject => {
      const result = YKS.Exam.calculateNet(subject);
      const netEl = document.getElementById(`score-${subject}-net`);
      const dEl = document.getElementById(`score-${subject}-d`);
      const yEl = document.getElementById(`score-${subject}-y`);
      const bEl = document.getElementById(`score-${subject}-b`);
      const statusEl = document.getElementById(`score-${subject}-status`);
      
      if (netEl) netEl.textContent = result.net.toFixed(2);
      if (dEl) dEl.textContent = `D: ${result.correct}`;
      if (yEl) yEl.textContent = `Y: ${result.wrong}`;
      if (bEl) bEl.textContent = `B: ${result.blank}`;
      if (statusEl) {
        if (YKS.State.testCompleted[subject]) {
          statusEl.textContent = 'Tamamlandı';
          statusEl.className = 'text-[10px] px-2 py-0.5 rounded font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300';
        } else if (result.correct > 0 || result.wrong > 0) {
          statusEl.textContent = 'Devam Ediyor';
          statusEl.className = 'text-[10px] px-2 py-0.5 rounded font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300';
        }
      }
      
      totalNet += result.net;
      totalQuestions += result.total;
    });
    
    const totalNetEl = document.getElementById('score-total-net');
    if (totalNetEl) totalNetEl.textContent = totalNet.toFixed(2);
    
    const accuracyEl = document.getElementById('score-accuracy');
    if (accuracyEl && totalQuestions > 0) {
      const totalCorrect = subjects.reduce((sum, s) => sum + YKS.Exam.calculateNet(s).correct, 0);
      accuracyEl.textContent = `Doğruluk: %${((totalCorrect / totalQuestions) * 100).toFixed(1)}`;
    }
    
    // Update progress bar
    const progressBar = document.getElementById('bar-total-net');
    if (progressBar && totalQuestions > 0) {
      progressBar.style.width = `${Math.min(100, (totalNet / totalQuestions) * 100)}%`;
    }
  },

  // ============================================================
  // HATA DEFTERI (MISTAKE NOTEBOOK)
  // ============================================================
  autoAddToHataDefteri: (subject) => {
    const questions = YKS.Exam.currentQuestions;
    const answers = YKS.State.studentAnswers[subject] || {};
    
    questions.forEach(q => {
      const userAnswer = answers[q.id];
      const isWrong = userAnswer && userAnswer !== q.correctAnswer;
      const isBlank = !userAnswer;
      
      if ((isWrong || isBlank) && !YKS.State.mistakeNotes[q.id]) {
        YKS.State.mistakeNotes[q.id] = {
          subject,
          questionId: q.id,
          type: q.type,
          questionText: q.questionText,
          correctAnswer: q.correctAnswer,
          userAnswer: userAnswer || 'Boş',
          explanation: q.explanation,
          ruleExplanation: q.ruleExplanation || '',
          status: isWrong ? 'wrong' : 'blank',
          dateAdded: new Date().toISOString(),
          note: ''
        };
      }
    });
    
    YKS.Storage.saveDayData(YKS.Exam.currentDay);
    YKS.Exam.renderHataDefteri();
  },

  renderHataDefteri: () => {
    const container = document.getElementById('hata-defteri-list');
    if (!container) return;

    const mistakes = Object.values(YKS.State.mistakeNotes).filter(m => 
      m.status !== 'learned'
    );
    
    const totalBadge = document.getElementById('hataTotalBadge');
    if (totalBadge) totalBadge.textContent = `${mistakes.length} Soru Kayıtlı`;

    // Category tags
    const categoryTags = document.getElementById('hata-category-tags');
    if (categoryTags) {
      const categories = {};
      mistakes.forEach(m => {
        if (!categories[m.type]) categories[m.type] = 0;
        categories[m.type]++;
      });
      
      if (Object.keys(categories).length === 0) {
        categoryTags.innerHTML = '<span class="text-xs text-slate-400 italic">Henüz kaydedilmiş bir hata bulunmuyor.</span>';
      } else {
        categoryTags.innerHTML = Object.entries(categories).map(([type, count]) => 
          `<span class="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">${type} (${count})</span>`
        ).join('');
      }
    }

    if (mistakes.length === 0) {
      container.innerHTML = '<div class="glass-card rounded-2xl p-8 text-center text-slate-400"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl mb-3"></i><p class="font-bold">Henüz hata kaydı yok!</p><p class="text-xs mt-1">Test çözdükçe yanlış ve boş sorular buraya otomatik kaydedilir.</p></div>';
      return;
    }

    let html = '';
    mistakes.forEach(m => {
      const isWrong = m.status === 'wrong';
      const statusColor = isWrong ? 'rose' : 'amber';
      const statusText = isWrong ? 'Yanlış' : 'Boş';
      
      html += `
        <div class="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-${statusColor}-100 dark:bg-${statusColor}-950 text-${statusColor}-700 dark:text-${statusColor}-300">${statusText}</span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">${m.type}</span>
              <span class="text-[10px] text-slate-400">${m.subject.toUpperCase()}</span>
            </div>
            <div class="flex items-center space-x-2 no-print">
              <button onclick="YKS.Exam.toggleMistakeNote('${m.questionId}')" class="text-xs px-2.5 py-1 rounded-lg text-slate-400 hover:text-sky-500 border border-transparent hover:border-slate-300"><i class="fa-solid fa-pen mr-1"></i>Not</button>
              <button onclick="YKS.Exam.markAsLearned('${m.questionId}')" class="text-xs px-2.5 py-1 rounded-lg text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 border border-emerald-300 dark:border-emerald-800"><i class="fa-solid fa-check mr-1"></i>Öğrendim</button>
            </div>
          </div>
          <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${m.questionText}</div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="bg-rose-50 dark:bg-rose-950/30 rounded-lg p-3">
              <span class="font-bold text-rose-600 dark:text-rose-400 block mb-1">Senin Cevabın:</span>
              <span class="text-slate-700 dark:text-slate-300">${m.userAnswer}</span>
            </div>
            <div class="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-3">
              <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Doğru Cevap:</span>
              <span class="text-slate-700 dark:text-slate-300">${m.correctAnswer}</span>
            </div>
          </div>
          <div class="bg-sky-50 dark:bg-sky-950/30 rounded-lg p-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <span class="font-bold text-sky-600 dark:text-sky-400 block mb-1"><i class="fa-solid fa-lightbulb mr-1"></i>Çözüm:</span>
            ${m.explanation}
          </div>
          ${m.ruleExplanation ? `<div class="bg-indigo-50 dark:bg-indigo-950/30 rounded-lg p-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed"><span class="font-bold text-indigo-600 dark:text-indigo-400 block mb-1"><i class="fa-solid fa-book mr-1"></i>Kural:</span>${m.ruleExplanation}</div>` : ''}
          <div id="note-area-${m.questionId}" class="hidden">
            <textarea class="input" placeholder="Bu soru için notunuzu yazın..." rows="3" oninput="YKS.Exam.saveMistakeNote('${m.questionId}', this.value)">${m.note || ''}</textarea>
          </div>
        </div>`;
    });

    container.innerHTML = html;
  },

  toggleMistakeNote: (qId) => {
    const area = document.getElementById(`note-area-${qId}`);
    if (area) area.classList.toggle('hidden');
  },

  saveMistakeNote: (qId, value) => {
    if (YKS.State.mistakeNotes[qId]) {
      YKS.State.mistakeNotes[qId].note = value;
      YKS.Storage.saveDayData(YKS.Exam.currentDay);
    }
  },

  markAsLearned: (qId) => {
    if (YKS.State.mistakeNotes[qId]) {
      YKS.State.mistakeNotes[qId].status = 'learned';
      YKS.State.learnedArchived[qId] = true;
      YKS.Storage.saveDayData(YKS.Exam.currentDay);
      YKS.Exam.renderHataDefteri();
      YKS.UI.toast('Soru "Öğrenilenler" arşivine taşındı', 'success');
    }
  },

  // ============================================================
  // TAB SWITCHING
  // ============================================================
  switchTab: (tabId) => {
    const tabs = ['plan', 'hata-defteri', 'ydt', 'turkce', 'matematik', 'reading', 'vocab', 'analiz'];
    tabs.forEach(t => {
      const content = document.getElementById(`tab-content-${t}`);
      const btn = document.getElementById(`tab-btn-${t}`);
      if (content && btn) {
        if (t === tabId) {
          content.classList.remove('hidden');
          btn.className = btn.className.replace(/text-slate-300 hover:text-white hover:bg-white\/10/g, '');
          if (t === 'hata-defteri') {
            btn.classList.add('bg-rose-600', 'text-white', 'shadow-md');
          } else {
            btn.classList.add('bg-sky-600', 'text-white', 'shadow-md');
          }
        } else {
          content.classList.add('hidden');
          btn.className = btn.className.replace(/bg-sky-600|bg-rose-600|text-white|shadow-md/g, '');
          btn.classList.add('text-slate-300', 'hover:text-white', 'hover:bg-white/10');
        }
      }
    });

    if (tabId === 'hata-defteri') {
      YKS.Exam.renderHataDefteri();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (['ydt', 'turkce', 'matematik', 'reading'].includes(tabId)) {
      YKS.Exam.currentSubject = tabId;
      YKS.Exam.renderQuestions();
      YKS.Exam.renderPills();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (tabId === 'analiz') {
      YKS.Exam.updateScorecard();
      setTimeout(() => YKS.Exam.updateChart(), 100);
    }
  },

  // ============================================================
  // CHART
  // ============================================================
  updateChart: () => {
    const canvas = document.getElementById('scoreChart');
    if (!canvas || typeof Chart === 'undefined') return;

    const subjects = ['ydt', 'turkce', 'matematik', 'reading'];
    const labels = ['YDT İngilizce', 'TYT Türkçe', 'TYT Matematik', 'YDT Reading'];
    const nets = subjects.map(s => YKS.Exam.calculateNet(s).net);
    const totals = subjects.map(s => YKS.Exam.calculateNet(s).total);

    if (YKS.Exam.chartInstance) {
      YKS.Exam.chartInstance.destroy();
    }

    YKS.Exam.chartInstance = new Chart(canvas, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Net',
          data: nets,
          backgroundColor: ['rgba(14, 165, 233, 0.7)', 'rgba(16, 185, 129, 0.7)', 'rgba(245, 158, 11, 0.7)', 'rgba(20, 184, 166, 0.7)'],
          borderColor: ['rgb(14, 165, 233)', 'rgb(16, 185, 129)', 'rgb(245, 158, 11)', 'rgb(20, 184, 166)'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `Net: ${ctx.parsed.y.toFixed(2)} / ${totals[ctx.dataIndex]}`
            }
          }
        },
        scales: {
          y: { beginAtZero: true, max: Math.max(...totals, 10) }
        }
      }
    });
  },

  // ============================================================
  // RESET TEST
  // ============================================================
  resetTest: (subject) => {
    YKS.UI.confirm(`${subject.toUpperCase()} testini sıfırlamak istediğinize emin misiniz? Tüm cevaplar silinecek.`).then(result => {
      if (result.action === true) {
        YKS.State.studentAnswers[subject] = {};
        YKS.State.testCompleted[subject] = false;
        YKS.Storage.saveDayData(YKS.Exam.currentDay);
        YKS.Exam.renderQuestions();
        YKS.Exam.renderPills();
        YKS.Exam.updateScorecard();
        YKS.UI.toast(`${subject.toUpperCase()} testi sıfırlandı`, 'info');
      }
    });
  }
};

console.log('✅ YKS Exam Engine Yüklendi');
