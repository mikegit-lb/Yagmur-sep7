/**
 * ============================================================
 * YKS 6 GÜNLÜK SINAV MERKEZİ - VOCAB ENGINE
 * vocab-engine.js
 * ============================================================
 * Leitner 5-Kutu SRS (Spaced Repetition System)
 * Web Speech API telaffuz
 * İlerleme takibi, streak, due cards
 * ============================================================
 */

window.YKS = window.YKS || {};

YKS.Vocab = {
  currentDeck: [],
  currentCardIndex: 0,
  sessionStats: { correct: 0, wrong: 0, total: 0 },
  speechSynthesis: null,
  currentUtterance: null,

  // ============================================================
  // INITIALIZATION
  // ============================================================
  init: (vocabData) => {
    YKS.Vocab.currentDeck = vocabData || [];
    YKS.Vocab.sessionStats = { correct: 0, wrong: 0, total: 0 };
    YKS.Vocab.currentCardIndex = 0;
    YKS.Storage.loadVocab();
    
    // Initialize Speech API
    if ('speechSynthesis' in window) {
      YKS.Vocab.speechSynthesis = window.speechSynthesis;
    }
  },

  // ============================================================
  // LEITNER BOX ALGORITHM
  // ============================================================
  addCard: (wordData, startBox = 1) => {
    YKS.Storage.loadVocab();
    
    // Check if word already exists
    const existing = YKS.Vocab.findCardByWord(wordData.word);
    if (existing) {
      YKS.UI.toast(`"${wordData.word}" zaten ekli (Kutu ${existing.box})`, 'info');
      return false;
    }
    
    const card = {
      id: YKS.Utils.uid('vocab'),
      word: wordData.word,
      partOfSpeech: wordData.partOfSpeech,
      phonetic: wordData.phonetic,
      turkishMeaning: wordData.turkishMeaning,
      synonyms: wordData.synonyms || [],
      antonyms: wordData.antonyms || [],
      exampleSentence: wordData.exampleSentence,
      box: startBox,
      dateAdded: new Date().toISOString(),
      nextReviewDate: YKS.Vocab.calculateNextReview(startBox),
      reviewHistory: [],
      totalReviews: 0,
      correctStreak: 0
    };
    
    YKS.State.vocabProgress.boxes[startBox].push(card);
    YKS.Storage.saveVocab();
    YKS.UI.toast(`"${card.word}" Kutusuna eklendi`, 'success');
    return card;
  },

  findCardByWord: (word) => {
    for (let box = 1; box <= 5; box++) {
      const found = YKS.State.vocabProgress.boxes[box].find(c => c.word === word);
      if (found) return { ...found, box };
    }
    return null;
  },

  removeCard: (cardId) => {
    for (let box = 1; box <= 5; box++) {
      const idx = YKS.State.vocabProgress.boxes[box].findIndex(c => c.id === cardId);
      if (idx !== -1) {
        YKS.State.vocabProgress.boxes[box].splice(idx, 1);
        YKS.Storage.saveVocab();
        return true;
      }
    }
    return false;
  },

  // Mark card as known (correct) - promote to next box
  markCorrect: (cardId) => {
    let card = null;
    let currentBox = 0;
    
    for (let box = 1; box <= 5; box++) {
      const found = YKS.State.vocabProgress.boxes[box].find(c => c.id === cardId);
      if (found) {
        card = found;
        currentBox = box;
        break;
      }
    }
    
    if (!card) return;
    
    // Remove from current box
    YKS.State.vocabProgress.boxes[currentBox] = YKS.State.vocabProgress.boxes[currentBox].filter(c => c.id !== cardId);
    
    // Promote to next box (max 5)
    const newBox = Math.min(5, currentBox + 1);
    card.box = newBox;
    card.correctStreak = (card.correctStreak || 0) + 1;
    card.totalReviews = (card.totalReviews || 0) + 1;
    card.nextReviewDate = YKS.Vocab.calculateNextReview(newBox);
    card.reviewHistory.push({ date: new Date().toISOString(), result: 'correct', fromBox: currentBox, toBox: newBox });
    
    YKS.State.vocabProgress.boxes[newBox].push(card);
    YKS.State.vocabProgress.totalReviews = (YKS.State.vocabProgress.totalReviews || 0) + 1;
    YKS.Storage.saveVocab();
    
    YKS.Vocab.sessionStats.correct++;
  },

  // Mark card as not known - reset to box 1
  markWrong: (cardId) => {
    let card = null;
    let currentBox = 0;
    
    for (let box = 1; box <= 5; box++) {
      const found = YKS.State.vocabProgress.boxes[box].find(c => c.id === cardId);
      if (found) {
        card = found;
        currentBox = box;
        break;
      }
    }
    
    if (!card) return;
    
    // Remove from current box
    YKS.State.vocabProgress.boxes[currentBox] = YKS.State.vocabProgress.boxes[currentBox].filter(c => c.id !== cardId);
    
    // Reset to box 1
    card.box = 1;
    card.correctStreak = 0;
    card.totalReviews = (card.totalReviews || 0) + 1;
    card.nextReviewDate = YKS.Vocab.calculateNextReview(1);
    card.reviewHistory.push({ date: new Date().toISOString(), result: 'wrong', fromBox: currentBox, toBox: 1 });
    
    YKS.State.vocabProgress.boxes[1].push(card);
    YKS.State.vocabProgress.totalReviews = (YKS.State.vocabProgress.totalReviews || 0) + 1;
    YKS.Storage.saveVocab();
    
    YKS.Vocab.sessionStats.wrong++;
  },

  // Calculate next review date based on Leitner intervals
  calculateNextReview: (box) => {
    const now = new Date();
    const intervals = {
      1: 1,    // 1 day
      2: 2,    // 2 days
      3: 4,    // 4 days
      4: 7,    // 1 week
      5: 14    // 2 weeks
    };
    const days = intervals[box] || 1;
    const nextDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
    return nextDate.toISOString();
  },

  // Get due cards (need review today)
  getDueCards: () => {
    const now = new Date();
    const dueCards = [];
    
    for (let box = 1; box <= 5; box++) {
      YKS.State.vocabProgress.boxes[box].forEach(card => {
        if (new Date(card.nextReviewDate) <= now) {
          dueCards.push({ ...card, box });
        }
      });
    }
    
    return dueCards;
  },

  // Get random cards from all boxes for review session
  getReviewSession: (count = 15) => {
    const dueCards = YKS.Vocab.getDueCards();
    if (dueCards.length >= count) {
      return YKS.Utils.shuffle(dueCards).slice(0, count);
    }
    
    // If not enough due, fill with random cards from all boxes
    const allCards = [];
    for (let box = 1; box <= 5; box++) {
      YKS.State.vocabProgress.boxes[box].forEach(card => {
        allCards.push({ ...card, box });
      });
    }
    
    return YKS.Utils.shuffle(allCards).slice(0, count);
  },

  // ============================================================
  // PROGRESS & STATS
  // ============================================================
  getStats: () => {
    const stats = {
      totalCards: 0,
      boxDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      mastered: 0, // Box 5
      learning: 0, // Boxes 2-4
      new: 0,      // Box 1
      dueToday: 0,
      streak: YKS.State.vocabProgress.streak || 0,
      totalReviews: YKS.State.vocabProgress.totalReviews || 0,
      accuracy: 0
    };
    
    let totalCorrect = 0;
    
    for (let box = 1; box <= 5; box++) {
      const count = YKS.State.vocabProgress.boxes[box].length;
      stats.boxDistribution[box] = count;
      stats.totalCards += count;
      if (box === 5) stats.mastered = count;
      else if (box >= 2) stats.learning += count;
      else stats.new += count;
    }
    
    stats.dueToday = YKS.Vocab.getDueCards().length;
    
    if (YKS.Vocab.sessionStats.total > 0) {
      stats.accuracy = ((YKS.Vocab.sessionStats.correct / YKS.Vocab.sessionStats.total) * 100).toFixed(1);
    }
    
    return stats;
  },

  // ============================================================
  // FLASHCARD RENDERING
  // ============================================================
  renderFlashcard: (containerId, card) => {
    const container = document.getElementById(containerId);
    if (!container || !card) return;
    
    const boxColors = {
      1: { bg: 'from-rose-500 to-pink-600', text: 'Yeni Öğrenilen', icon: 'fa-seedling' },
      2: { bg: 'from-orange-500 to-amber-600', text: 'Öğreniliyor', icon: 'fa-fire' },
      3: { bg: 'from-yellow-500 to-orange-500', text: 'Pekişiyor', icon: 'fa-sun' },
      4: { bg: 'from-emerald-500 to-teal-600', text: 'Güçlü', icon: 'fa-star' },
      5: { bg: 'from-sky-500 to-indigo-600', text: 'Ustalaştı', icon: 'fa-crown' }
    };
    
    const boxStyle = boxColors[card.box] || boxColors[1];
    
    container.innerHTML = `
      <div class="flashcard h-80" onclick="this.classList.toggle('flipped')">
        <div class="flashcard-inner relative h-full w-full">
          <div class="flashcard-front absolute inset-0 glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${boxStyle.bg} text-white">${boxStyle.text}</span>
              <button onclick="event.stopPropagation(); YKS.Vocab.speak('${card.word}')" class="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center transition active:scale-95" title="Telaffuz">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center text-center">
              <h3 class="text-3xl font-black text-slate-900 dark:text-white mb-2">${card.word}</h3>
              <p class="text-sm text-slate-500 font-mono">${card.phonetic || ''}</p>
              <p class="text-xs text-slate-400 mt-1">${card.partOfSpeech || ''}</p>
            </div>
            <p class="text-xs text-center text-slate-400 mt-4"><i class="fa-solid fa-hand-pointer mr-1"></i>Çevirmek için tıkla</p>
          </div>
          <div class="flashcard-back absolute inset-0 glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-xl font-bold text-slate-900 dark:text-white">${card.word}</h4>
              <span class="text-xs text-slate-500">${card.partOfSpeech || ''}</span>
            </div>
            <div class="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
              <div class="bg-indigo-50 dark:bg-indigo-950/40 rounded-lg p-3">
                <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">🇹🇷 Türkçe Karşılığı</span>
                <p class="text-sm text-slate-700 dark:text-slate-200">${card.turkishMeaning || ''}</p>
              </div>
              ${card.exampleSentence ? `<div class="bg-sky-50 dark:bg-sky-950/40 rounded-lg p-3">
                <span class="text-xs font-bold text-sky-600 dark:text-sky-400 block mb-1">📝 Örnek Cümle</span>
                <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">${card.exampleSentence}</p>
              </div>` : ''}
              ${card.synonyms && card.synonyms.length ? `<div class="bg-emerald-50 dark:bg-emerald-950/40 rounded-lg p-3">
                <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">✅ Eş Anlamlılar</span>
                <p class="text-xs text-slate-700 dark:text-slate-200">${card.synonyms.join(', ')}</p>
              </div>` : ''}
              ${card.antonyms && card.antonyms.length ? `<div class="bg-rose-50 dark:bg-rose-950/40 rounded-lg p-3">
                <span class="text-xs font-bold text-rose-600 dark:text-rose-400 block mb-1">❌ Zıt Anlamlılar</span>
                <p class="text-xs text-slate-700 dark:text-slate-200">${card.antonyms.join(', ')}</p>
              </div>` : ''}
            </div>
            <div class="flex space-x-2 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <button onclick="event.stopPropagation(); YKS.Vocab.handleReview('${card.id}', false)" class="flex-1 btn btn-rose text-xs">
                <i class="fa-solid fa-xmark mr-1"></i>Bilemedim (→ Kutu 1)
              </button>
              <button onclick="event.stopPropagation(); YKS.Vocab.handleReview('${card.id}', true)" class="flex-1 btn btn-emerald text-xs">
                <i class="fa-solid fa-check mr-1"></i>Biliyorum (→ Kutu ${Math.min(5, card.box + 1)})
              </button>
            </div>
          </div>
        </div>
      </div>`;
  },

  // Handle review action
  handleReview: (cardId, known) => {
    if (known) {
      YKS.Vocab.markCorrect(cardId);
      YKS.UI.toast('Doğru! Kutu ilerletildi', 'success', 2000);
    } else {
      YKS.Vocab.markWrong(cardId);
      YKS.UI.toast('Kutu 1\'e geri dönüldü, tekrar çalış', 'warning', 2000);
    }
    
    YKS.Vocab.sessionStats.total++;
    YKS.Vocab.renderNextCard();
  },

  renderNextCard: () => {
    YKS.Vocab.currentCardIndex++;
    if (YKS.Vocab.currentCardIndex >= YKS.Vocab.currentDeck.length) {
      YKS.Vocab.endSession();
      return;
    }
    
    const card = YKS.Vocab.currentDeck[YKS.Vocab.currentCardIndex];
    YKS.Vocab.renderFlashcard('current-flashcard-container', card);
    YKS.Vocab.updateSessionUI();
  },

  startSession: (vocabData, count = 15) => {
    YKS.Vocab.currentDeck = YKS.Vocab.getReviewSession(count);
    if (YKS.Vocab.currentDeck.length === 0 && vocabData && vocabData.length > 0) {
      // If no cards in progress, add all from vocab data
      vocabData.forEach(v => {
        if (!YKS.Vocab.findCardByWord(v.word)) {
          YKS.Vocab.addCard(v, 1);
        }
      });
      YKS.Vocab.currentDeck = YKS.Vocab.getReviewSession(count);
    }
    
    YKS.Vocab.currentCardIndex = 0;
    YKS.Vocab.sessionStats = { correct: 0, wrong: 0, total: 0 };
    
    if (YKS.Vocab.currentDeck.length === 0) {
      YKS.UI.toast('Çalışılacak kelime bulunamadı', 'warning');
      return false;
    }
    
    YKS.Vocab.renderFlashcard('current-flashcard-container', YKS.Vocab.currentDeck[0]);
    YKS.Vocab.updateSessionUI();
    return true;
  },

  updateSessionUI: () => {
    const progressEl = document.getElementById('session-progress');
    if (progressEl) {
      progressEl.textContent = `${YKS.Vocab.currentCardIndex + 1} / ${YKS.Vocab.currentDeck.length}`;
    }
    
    const statsEl = document.getElementById('session-stats');
    if (statsEl) {
      const acc = YKS.Vocab.sessionStats.total > 0 
        ? ((YKS.Vocab.sessionStats.correct / YKS.Vocab.sessionStats.total) * 100).toFixed(0)
        : 0;
      statsEl.innerHTML = `
        <span class="text-emerald-400">✓ ${YKS.Vocab.sessionStats.correct}</span>
        <span class="text-rose-400">✗ ${YKS.Vocab.sessionStats.wrong}</span>
        <span class="text-sky-400">%${acc}</span>`;
    }
  },

  endSession: () => {
    // Update streak
    const today = new Date().toDateString();
    const lastReview = YKS.State.vocabProgress.lastReview ? new Date(YKS.State.vocabProgress.lastReview).toDateString() : null;
    
    if (lastReview !== today) {
      if (lastReview && new Date(today).getTime() - new Date(lastReview).getTime() === 86400000) {
        YKS.State.vocabProgress.streak = (YKS.State.vocabProgress.streak || 0) + 1;
      } else {
        YKS.State.vocabProgress.streak = 1;
      }
      YKS.State.vocabProgress.lastReview = new Date().toISOString();
      YKS.Storage.saveVocab();
    }
    
    if (typeof confetti !== 'undefined') {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    }
    
    YKS.UI.showModal('🎉 Seans Tamamlandı!', `
      <div class="space-y-3 text-center">
        <p class="text-2xl font-black text-emerald-500">${YKS.Vocab.sessionStats.correct} / ${YKS.Vocab.sessionStats.total}</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">doğru cevap</p>
        <div class="grid grid-cols-3 gap-3 mt-4">
          <div class="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-3">
            <p class="text-2xl font-black text-emerald-600">${YKS.Vocab.sessionStats.correct}</p>
            <p class="text-xs text-slate-500">Doğru</p>
          </div>
          <div class="bg-rose-50 dark:bg-rose-950/30 rounded-lg p-3">
            <p class="text-2xl font-black text-rose-600">${YKS.Vocab.sessionStats.wrong}</p>
            <p class="text-xs text-slate-500">Yanlış</p>
          </div>
          <div class="bg-sky-50 dark:bg-sky-950/30 rounded-lg p-3">
            <p class="text-2xl font-black text-sky-600">${YKS.Vocab.sessionStats.total > 0 ? Math.round((YKS.Vocab.sessionStats.correct / YKS.Vocab.sessionStats.total) * 100) : 0}%</p>
            <p class="text-xs text-slate-500">Başarı</p>
          </div>
        </div>
        <p class="text-xs text-amber-600 mt-3">🔥 Seri: ${YKS.State.vocabProgress.streak || 0} gün</p>
      </div>
    `, [
      { label: 'Yeniden Başla', class: 'btn-secondary', value: 'restart', icon: 'fa-solid fa-rotate' },
      { label: 'Kapat', class: 'btn-primary', value: 'close', icon: 'fa-solid fa-check' }
    ]);
    
    YKS.Vocab.renderStats();
  },

  // ============================================================
  // SPEECH SYNTHESIS
  // ============================================================
  speak: (text, lang = 'en-US') => {
    if (!YKS.Vocab.speechSynthesis) {
      YKS.UI.toast('Tarayıcınız ses sentezini desteklemiyor', 'warning');
      return;
    }
    
    // Cancel any current speech
    YKS.Vocab.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Try to find English voice
    const voices = YKS.Vocab.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en')) || voices[0];
    if (englishVoice) utterance.voice = englishVoice;
    
    YKS.Vocab.currentUtterance = utterance;
    YKS.Vocab.speechSynthesis.speak(utterance);
  },

  // ============================================================
  // STATS RENDERING
  // ============================================================
  renderStats: () => {
    const stats = YKS.Vocab.getStats();
    
    // Total cards
    const totalEl = document.getElementById('vocab-total-count');
    if (totalEl) totalEl.textContent = stats.totalCards;
    
    // Mastered
    const masteredEl = document.getElementById('vocab-mastered-count');
    if (masteredEl) masteredEl.textContent = stats.mastered;
    
    // Learning
    const learningEl = document.getElementById('vocab-learning-count');
    if (learningEl) learningEl.textContent = stats.learning;
    
    // New
    const newEl = document.getElementById('vocab-new-count');
    if (newEl) newEl.textContent = stats.new;
    
    // Due today
    const dueEl = document.getElementById('vocab-due-count');
    if (dueEl) dueEl.textContent = stats.dueToday;
    
    // Streak
    const streakEl = document.getElementById('vocab-streak-count');
    if (streakEl) streakEl.textContent = `${stats.streak} gün`;
    
    // Box distribution bars
    for (let box = 1; box <= 5; box++) {
      const barEl = document.getElementById(`vocab-box-${box}-bar`);
      const countEl = document.getElementById(`vocab-box-${box}-count`);
      if (countEl) countEl.textContent = stats.boxDistribution[box];
      if (barEl && stats.totalCards > 0) {
        const pct = (stats.boxDistribution[box] / stats.totalCards) * 100;
        barEl.style.width = `${pct}%`;
      }
    }
    
    // Render box cards list
    YKS.Vocab.renderBoxLists();
  },

  renderBoxLists: () => {
    for (let box = 1; box <= 5; box++) {
      const listEl = document.getElementById(`vocab-box-${box}-list`);
      if (!listEl) continue;
      
      const cards = YKS.State.vocabProgress.boxes[box];
      if (cards.length === 0) {
        listEl.innerHTML = '<p class="text-xs text-slate-400 italic text-center py-4">Bu kutuda kelime yok</p>';
        continue;
      }
      
      listEl.innerHTML = cards.map(card => `
        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <div class="flex-1 min-w-0">
            <p class="text-sm font-bold text-slate-900 dark:text-white truncate">${card.word}</p>
            <p class="text-xs text-slate-500 truncate">${card.turkishMeaning || ''}</p>
          </div>
          <div class="flex items-center space-x-1">
            <button onclick="YKS.Vocab.speak('${card.word}')" class="w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xs hover:bg-sky-200" title="Telaffuz">
              <i class="fa-solid fa-volume-high"></i>
            </button>
            <button onclick="YKS.Vocab.removeCard('${card.id}'); YKS.Vocab.renderStats();" class="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xs hover:bg-rose-200" title="Sil">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      `).join('');
    }
  }
};

console.log('✅ YKS Vocab Engine (Leitner SRS) Yüklendi');
