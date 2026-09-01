/**
 * ============================================================
 * YKS 6 GÜNLÜK SINAV MERKEZİ - ORTAK JAVASCRIPT UTILITIES
 * shared-utils.js
 * ============================================================
 * 
 * Bu dosya tüm gün dosyaları (gun-1.html ... gun-6.html) tarafından
 * paylaşılan ortak fonksiyonları içerir:
 * - localStorage yönetimi
 * - Timer motoru
 * - PDF/Print motoru
 * - Tema yönetimi
 * - Bildirim sistemi
 * - Yardımcı fonksiyonlar
 * ============================================================
 */

// ============================================================
// NAMESPACE & GLOBAL STATE
// ============================================================
window.YKS = window.YKS || {};

YKS.State = {
  currentDay: 1,
  currentSubject: null,
  testMode: false,
  testStartTime: null,
  testPausedTime: 0,
  timerInterval: null,
  timeRemaining: 0,
  studentAnswers: {},
  flaggedQuestions: {},
  mistakeNotes: {},
  learnedArchived: {},
  testCompleted: {},
  vocabProgress: {},
  kanbanData: { toTeach: [], processing: [], review: [] },
  settings: {
    darkMode: false,
    audioEnabled: false,
    autoSave: true,
    soundEffects: true
  }
};

// ============================================================
// LOCALSTORAGE MANAGEMENT
// ============================================================
YKS.Storage = {
  PREFIX: 'yks_6gun_',
  
  // Key generators
  keys: {
    answers: (day) => `${YKS.Storage.PREFIX}day${day}_answers`,
    completed: (day) => `${YKS.Storage.PREFIX}day${day}_completed`,
    flags: (day) => `${YKS.Storage.PREFIX}day${day}_flags`,
    notes: (day) => `${YKS.Storage.PREFIX}day${day}_notes`,
    learned: (day) => `${YKS.Storage.PREFIX}day${day}_learned`,
    vocab: () => `${YKS.Storage.PREFIX}vocab_progress`,
    kanban: () => `${YKS.Storage.PREFIX}kanban`,
    settings: () => `${YKS.Storage.PREFIX}settings`,
    logs: () => `${YKS.Storage.PREFIX}daily_logs`,
    backup: (day) => `${YKS.Storage.PREFIX}day${day}_backup_${Date.now()}`
  },

  // Generic get/set
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.warn(`Storage get error for ${key}:`, e);
      return defaultValue;
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`Storage set error for ${key}:`, e);
      YKS.UI.toast('Veri kaydedilemedi: ' + e.message, 'error');
      return false;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error(`Storage remove error for ${key}:`, e);
      return false;
    }
  },

  // Day-specific data
  loadDayData: (day) => {
    YKS.State.studentAnswers = YKS.Storage.get(YKS.Storage.keys.answers(day), {});
    YKS.State.testCompleted = YKS.Storage.get(YKS.Storage.keys.completed(day), {});
    YKS.State.flaggedQuestions = YKS.Storage.get(YKS.Storage.keys.flags(day), {});
    YKS.State.mistakeNotes = YKS.Storage.get(YKS.Storage.keys.notes(day), {});
    YKS.State.learnedArchived = YKS.Storage.get(YKS.Storage.keys.learned(day), {});
  },

  saveDayData: (day) => {
    YKS.Storage.set(YKS.Storage.keys.answers(day), YKS.State.studentAnswers);
    YKS.Storage.set(YKS.Storage.keys.completed(day), YKS.State.testCompleted);
    YKS.Storage.set(YKS.Storage.keys.flags(day), YKS.State.flaggedQuestions);
    YKS.Storage.set(YKS.Storage.keys.notes(day), YKS.State.mistakeNotes);
    YKS.Storage.set(YKS.Storage.keys.learned(day), YKS.State.learnedArchived);
  },

  // ============================================================
  // ERROR / HATA LOG (Otomatik)
  // ============================================================
  logError: (message, source = 'unknown', details = {}) => {
    const logEntry = {
      timestamp: new Date().toISOString(),
      message,
      source,
      details,
      day: YKS.State.currentDay || null,
      subject: YKS.State.currentSubject || null
    };
    const existing = YKS.Storage.get(YKS.Storage.keys.logs(), []);
    existing.push(logEntry);
    YKS.Storage.set(YKS.Storage.keys.logs(), existing);
    console.error(`[YKS HATA LOG] ${message}`, details);
    return logEntry;
  },

  exportErrorLog: () => {
    const logs = YKS.Storage.get(YKS.Storage.keys.logs(), []);
    const blob = new Blob([JSON.stringify(logs, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `yks-hata-log-${new Date().toISOString().split('T')[0]}.json`;
    a.click(); URL.revokeObjectURL(url);
    return logs.length;
  },

  // Vocab progress (shared across days)
  loadVocab: () => {
    YKS.State.vocabProgress = YKS.Storage.get(YKS.Storage.keys.vocab(), {
      boxes: { 1: [], 2: [], 3: [], 4: [], 5: [] },
      streak: 0,
      lastReview: null,
      totalReviews: 0
    });
  },

  saveVocab: () => {
    YKS.Storage.set(YKS.Storage.keys.vocab(), YKS.State.vocabProgress);
  },

  // Kanban (shared)
  loadKanban: () => {
    YKS.State.kanbanData = YKS.Storage.get(YKS.Storage.keys.kanban(), {
      toTeach: [],
      processing: [],
      review: []
    });
  },

  saveKanban: () => {
    YKS.Storage.set(YKS.Storage.keys.kanban(), YKS.State.kanbanData);
  },

  // Settings
  loadSettings: () => {
    YKS.State.settings = YKS.Storage.get(YKS.Storage.keys.settings(), YKS.State.settings);
    // Apply dark mode on load
    if (YKS.State.settings.darkMode) {
      document.documentElement.classList.add('dark');
    }
  },

  saveSettings: () => {
    YKS.Storage.set(YKS.Storage.keys.settings(), YKS.State.settings);
  },

  // Daily logs
  addDailyLog: (logEntry) => {
    const logs = YKS.Storage.get(YKS.Storage.keys.logs(), []);
    logs.unshift({ ...logEntry, timestamp: Date.now(), id: `log_${Date.now()}` });
    // Keep only last 100 logs
    if (logs.length > 100) logs.length = 100;
    YKS.Storage.set(YKS.Storage.keys.logs(), logs);
  },

  getDailyLogs: () => {
    return YKS.Storage.get(YKS.Storage.keys.logs(), []);
  },

  // Full backup
  createBackup: (day) => {
    const backup = {
      day,
      timestamp: Date.now(),
      date: new Date().toISOString(),
      answers: YKS.State.studentAnswers,
      completed: YKS.State.testCompleted,
      flags: YKS.State.flaggedQuestions,
      notes: YKS.State.mistakeNotes,
      learned: YKS.State.learnedArchived,
      vocab: YKS.State.vocabProgress,
      kanban: YKS.State.kanbanData,
      settings: YKS.State.settings
    };
    const key = YKS.Storage.keys.backup(day);
    YKS.Storage.set(key, backup);
    // Clean old backups (keep last 10)
    YKS.Storage.cleanOldBackups(day);
    return key;
  },

  cleanOldBackups: (day) => {
    const prefix = `${YKS.Storage.PREFIX}day${day}_backup_`;
    const keys = Object.keys(localStorage).filter(k => k.startsWith(prefix));
    keys.sort().reverse(); // newest first
    keys.slice(10).forEach(k => localStorage.removeItem(k));
  },

  // Restore from backup
  restoreBackup: (backupKey) => {
    const backup = YKS.Storage.get(backupKey);
    if (!backup) return false;
    
    YKS.State.studentAnswers = backup.answers || {};
    YKS.State.testCompleted = backup.completed || {};
    YKS.State.flaggedQuestions = backup.flags || {};
    YKS.State.mistakeNotes = backup.notes || {};
    YKS.State.learnedArchived = backup.learned || {};
    YKS.State.vocabProgress = backup.vocab || YKS.State.vocabProgress;
    YKS.State.kanbanData = backup.kanban || YKS.State.kanbanData;
    YKS.State.settings = backup.settings || YKS.State.settings;
    
    // Save restored data
    YKS.Storage.saveDayData(backup.day);
    YKS.Storage.saveVocab();
    YKS.Storage.saveKanban();
    YKS.Storage.saveSettings();
    
    return true;
  },

  // Export all data as JSON file
  exportAll: () => {
    const exportData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      days: {}
    };
    
    for (let day = 1; day <= 6; day++) {
      exportData.days[day] = {
        answers: YKS.Storage.get(YKS.Storage.keys.answers(day), {}),
        completed: YKS.Storage.get(YKS.Storage.keys.completed(day), {}),
        flags: YKS.Storage.get(YKS.Storage.keys.flags(day), {}),
        notes: YKS.Storage.get(YKS.Storage.keys.notes(day), {}),
        learned: YKS.Storage.get(YKS.Storage.keys.learned(day), {})
      };
    }
    
    exportData.vocab = YKS.State.vocabProgress;
    exportData.kanban = YKS.State.kanbanData;
    exportData.settings = YKS.State.settings;
    exportData.logs = YKS.Storage.getDailyLogs();
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `yks_6gun_yedek_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    YKS.UI.toast('Tüm veriler JSON olarak indirildi', 'success');
  },

  // Import from JSON file
  importAll: (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          
          // Validate structure
          if (!data.days || !data.vocab) {
            throw new Error('Geçersiz yedek dosyası formatı');
          }
          
          // Restore day data
          for (let day = 1; day <= 6; day++) {
            if (data.days[day]) {
              YKS.Storage.set(YKS.Storage.keys.answers(day), data.days[day].answers || {});
              YKS.Storage.set(YKS.Storage.keys.completed(day), data.days[day].completed || {});
              YKS.Storage.set(YKS.Storage.keys.flags(day), data.days[day].flags || {});
              YKS.Storage.set(YKS.Storage.keys.notes(day), data.days[day].notes || {});
              YKS.Storage.set(YKS.Storage.keys.learned(day), data.days[day].learned || {});
            }
          }
          
          // Restore shared data
          if (data.vocab) YKS.Storage.set(YKS.Storage.keys.vocab(), data.vocab);
          if (data.kanban) YKS.Storage.set(YKS.Storage.keys.kanban(), data.kanban);
          if (data.settings) YKS.Storage.set(YKS.Storage.keys.settings(), data.settings);
          if (data.logs) YKS.Storage.set(YKS.Storage.keys.logs(), data.logs);
          
          // Reload state
          YKS.Storage.loadSettings();
          YKS.Storage.loadVocab();
          YKS.Storage.loadKanban();
          
          YKS.UI.toast('Yedek başarıyla yüklendi, sayfa yenileniyor...', 'success');
          setTimeout(() => location.reload(), 1500);
          resolve(true);
        } catch (err) {
          console.error('Import error:', err);
          YKS.UI.toast('Yedek yüklenemedi: ' + err.message, 'error');
          reject(err);
        }
      };
      reader.onerror = () => reject(new Error('Dosya okunamadı'));
      reader.readAsText(file);
    });
  }
};

// ============================================================
// TIMER ENGINE
// ============================================================
YKS.Timer = {
  element: null,
  callback: null,
  warningThreshold: 300, // 5 minutes
  dangerThreshold: 60,   // 1 minute

  init: (selector, totalSeconds, onTick, onComplete) => {
    YKS.Timer.element = document.querySelector(selector);
    YKS.Timer.callback = onTick;
    YKS.State.timeRemaining = totalSeconds;
    YKS.Timer.onComplete = onComplete;
    
    YKS.Timer.updateDisplay();
    
    if (YKS.State.timerInterval) {
      clearInterval(YKS.State.timerInterval);
    }
    
    YKS.State.timerInterval = setInterval(() => {
      YKS.State.timeRemaining--;
      YKS.Timer.updateDisplay();
      
      if (YKS.Timer.callback) {
        YKS.Timer.callback(YKS.State.timeRemaining);
      }
      
      if (YKS.State.timeRemaining <= 0) {
        YKS.Timer.stop();
        if (YKS.Timer.onComplete) YKS.Timer.onComplete();
      }
    }, 1000);
  },

  updateDisplay: () => {
    if (!YKS.Timer.element) return;
    
    const mins = Math.floor(YKS.State.timeRemaining / 60);
    const secs = YKS.State.timeRemaining % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    YKS.Timer.element.textContent = timeStr;
    
    // Update classes for warning/danger states
    YKS.Timer.element.classList.remove('warning', 'danger');
    if (YKS.State.timeRemaining <= YKS.Timer.dangerThreshold) {
      YKS.Timer.element.classList.add('danger');
    } else if (YKS.State.timeRemaining <= YKS.Timer.warningThreshold) {
      YKS.Timer.element.classList.add('warning');
    }
  },

  pause: () => {
    if (YKS.State.timerInterval) {
      clearInterval(YKS.State.timerInterval);
      YKS.State.timerInterval = null;
      YKS.State.testPausedTime = Date.now();
    }
  },

  resume: () => {
    if (!YKS.State.timerInterval && YKS.State.timeRemaining > 0) {
      YKS.State.timerInterval = setInterval(() => {
        YKS.State.timeRemaining--;
        YKS.Timer.updateDisplay();
        if (YKS.Timer.callback) YKS.Timer.callback(YKS.State.timeRemaining);
        if (YKS.State.timeRemaining <= 0) {
          YKS.Timer.stop();
          if (YKS.Timer.onComplete) YKS.Timer.onComplete();
        }
      }, 1000);
    }
  },

  stop: () => {
    if (YKS.State.timerInterval) {
      clearInterval(YKS.State.timerInterval);
      YKS.State.timerInterval = null;
    }
  },

  addTime: (seconds) => {
    YKS.State.timeRemaining += seconds;
    YKS.Timer.updateDisplay();
  },

  getRemaining: () => YKS.State.timeRemaining,

  formatTime: (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
};

// ============================================================
// PDF / PRINT ENGINE (using html2pdf.js)
// ============================================================
YKS.PDF = {
  defaultOptions: {
    margin: [8, 8, 8, 8],
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  },

  generateFilename: (day, section) => {
    const names = {
      1: 'Gun1_Degerlendirme',
      2: 'Gun2_YDT_Ingilizce',
      3: 'Gun3_TYT_Turkce',
      4: 'Gun4_TYT_Matematik',
      5: 'Gun5_YDT_Reading',
      6: 'Gun6_Tam_Deneme'
    };
    const sectionNames = {
      exam: 'Sinav_Kitapcigi',
      mistakes: 'Hata_Defteri',
      analysis: 'Analiz_Raporu',
      vocab: 'Kelime_Listesi',
      plan: 'Calisma_Programi',
      full: 'Tam_Sinav_Kitapcigi'
    };
    const base = names[day] || `Gun${day}`;
    const sectionName = sectionNames[section] || section;
    return `YKS_${base}_${sectionName}_${new Date().toISOString().split('T')[0]}.pdf`;
  },

  downloadSection: (day, sectionId, customTitle) => {
    const contentEl = document.getElementById(sectionId);
    if (!contentEl) {
      YKS.UI.toast('Bölüm bulunamadı: ' + sectionId, 'error');
      return;
    }

    const printWrapper = YKS.PDF.createPrintWrapper(contentEl, customTitle || `Gün ${day} - ${sectionId}`);
    
    const fileName = YKS.PDF.generateFilename(day, sectionId.replace('tab-content-', ''));
    const opt = { ...YKS.PDF.defaultOptions, filename: fileName };

    if (typeof html2pdf !== 'undefined') {
      YKS.UI.toast('PDF hazırlanıyor...', 'info');
      html2pdf().set(opt).from(printWrapper).save().then(() => {
        YKS.UI.toast('PDF indirildi: ' + fileName, 'success');
      }).catch(err => {
        console.error('PDF error:', err);
        YKS.UI.toast('PDF hatası, yazdırma açılıyor...', 'warning');
        window.print();
      });
    } else {
      YKS.UI.toast('html2pdf yüklenemedi, yazdırma açılıyor...', 'warning');
      window.print();
    }
  },

  createPrintWrapper: (contentEl, title) => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = '20px';
    wrapper.style.backgroundColor = '#ffffff';
    wrapper.style.color = '#0f172a';
    wrapper.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
    wrapper.style.maxWidth = '210mm';
    wrapper.style.margin = '0 auto';

    const now = new Date();
    const dateStr = now.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });

    wrapper.innerHTML = `
      <div style="border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h1 style="font-size: 20px; font-weight: 900; margin: 0; color: #0f172a;">🎯 YKS & YDT 6 Günlük Sınav Merkezi</h1>
            <p style="font-size: 12px; color: #475569; margin: 2px 0 0 0;">${title}</p>
          </div>
          <div style="text-align: right; font-size: 11px; color: #64748b;">
            <span>Tarih: ${dateStr}</span>
          </div>
        </div>
      </div>
      <div>${contentEl.innerHTML}</div>
    `;

    // Remove non-print elements
    const nonPrints = wrapper.querySelectorAll('.no-print, button, .timer-display, .nav-pills, #focusAudioBtn, #printMenuDropdown, .tab-btn');
    nonPrints.forEach(el => el.remove());

    // Remove hidden elements
    const hidden = wrapper.querySelectorAll('.hidden, [style*="display: none"]');
    hidden.forEach(el => el.remove());

    // Fix option labels for print
    const options = wrapper.querySelectorAll('.option-label');
    options.forEach(opt => {
      opt.style.border = '1px solid #cbd5e1';
      opt.style.background = '#f8fafc';
      opt.style.pageBreakInside = 'avoid';
      opt.style.breakInside = 'avoid';
    });

    // Fix flashcards for print - show both sides
    const flashcards = wrapper.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
      card.style.pageBreakInside = 'avoid';
      card.style.breakInside = 'avoid';
      const back = card.querySelector('.flashcard-back');
      if (back) {
        back.style.display = 'block';
        back.style.transform = 'none';
        back.style.position = 'relative';
        back.style.marginTop = '1rem';
        back.style.paddingTop = '1rem';
        back.style.borderTop = '1px dashed #cbd5e1';
      }
    });

    return wrapper;
  },

  printSection: (sectionId) => {
    const originalHidden = document.querySelectorAll('.hidden:not(.no-print)');
    originalHidden.forEach(el => el.classList.add('print-visible'));
    
    window.print();
    
    setTimeout(() => {
      originalHidden.forEach(el => el.classList.remove('print-visible'));
    }, 1000);
  },

  printAllSections: (day) => {
    document.body.classList.add('print-mode-all');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('print-mode-all');
    }, 1000);
  }
};

// ============================================================
// THEME MANAGEMENT
// ============================================================
YKS.Theme = {
  toggle: () => {
    YKS.State.settings.darkMode = !YKS.State.settings.darkMode;
    document.documentElement.classList.toggle('dark', YKS.State.settings.darkMode);
    YKS.Storage.saveSettings();
    
    // Update theme icon
    const icon = document.getElementById('themeIcon');
    if (icon) {
      icon.className = YKS.State.settings.darkMode ? 'fa-solid fa-sun text-base' : 'fa-solid fa-moon text-base';
    }
    
    YKS.UI.toast(YKS.State.settings.darkMode ? 'Karanlık mod açıldı' : 'Aydınlık mod açıldı', 'info');
  },

  set: (dark) => {
    YKS.State.settings.darkMode = dark;
    document.documentElement.classList.toggle('dark', dark);
    YKS.Storage.saveSettings();
  },

  init: () => {
    YKS.Storage.loadSettings();
    const icon = document.getElementById('themeIcon');
    if (icon) {
      icon.className = YKS.State.settings.darkMode ? 'fa-solid fa-sun text-base' : 'fa-solid fa-moon text-base';
    }
  }
};

// ============================================================
// AUDIO FOCUS ENGINE (WebAudio - Zero Dependencies)
// ============================================================
YKS.Audio = {
  ctx: null,
  rainNode: null,
  whiteNoiseNode: null,
  gainNode: null,
  isPlaying: false,
  currentType: 'rain', // 'rain' | 'whitenoise' | 'off'

  init: () => {
    try {
      YKS.Audio.ctx = new (window.AudioContext || window.webkitAudioContext)();
      YKS.Audio.gainNode = YKS.Audio.ctx.createGain();
      YKS.Audio.gainNode.connect(YKS.Audio.ctx.destination);
      YKS.Audio.gainNode.gain.value = 0.3;
    } catch (e) {
      console.warn('WebAudio not supported:', e);
    }
  },

  createRain: () => {
    if (!YKS.Audio.ctx) return null;
    
    const bufferSize = 4096;
    const noiseBuffer = YKS.Audio.ctx.createBuffer(1, bufferSize, YKS.Audio.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    // Generate pink noise (more natural for rain)
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.11; // Gain compensation
    }
    
    const source = YKS.Audio.ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;
    
    // Add filtering for rain-like sound
    const filter = YKS.Audio.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    filter.Q.value = 1;
    
    // Add subtle modulation for rain variation
    const lfo = YKS.Audio.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.15;
    const lfoGain = YKS.Audio.ctx.createGain();
    lfoGain.gain.value = 200;
    lfo.connect(lfoGain).connect(filter.frequency);
    lfo.start();
    
    source.connect(filter).connect(YKS.Audio.gainNode);
    return { source, filter, lfo, lfoGain };
  },

  createWhiteNoise: () => {
    if (!YKS.Audio.ctx) return null;
    
    const bufferSize = 4096;
    const noiseBuffer = YKS.Audio.ctx.createBuffer(1, bufferSize, YKS.Audio.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.1;
    }
    
    const source = YKS.Audio.ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;
    
    const filter = YKS.Audio.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 100;
    
    source.connect(filter).connect(YKS.Audio.gainNode);
    return { source, filter };
  },

  play: (type = 'rain') => {
    if (!YKS.Audio.ctx) {
      YKS.Audio.init();
    }
    
    // Resume context if suspended (browser policy)
    if (YKS.Audio.ctx.state === 'suspended') {
      YKS.Audio.ctx.resume();
    }
    
    YKS.Audio.stop();
    
    if (type === 'rain') {
      YKS.Audio.rainNode = YKS.Audio.createRain();
      if (YKS.Audio.rainNode) {
        YKS.Audio.rainNode.source.start();
        YKS.Audio.rainNode.lfo.start();
      }
    } else if (type === 'whitenoise') {
      YKS.Audio.whiteNoiseNode = YKS.Audio.createWhiteNoise();
      if (YKS.Audio.whiteNoiseNode) {
        YKS.Audio.whiteNoiseNode.source.start();
      }
    }
    
    YKS.Audio.isPlaying = true;
    YKS.Audio.currentType = type;
    YKS.State.settings.audioEnabled = true;
    YKS.Storage.saveSettings();
    YKS.Audio.updateUI();
  },

  stop: () => {
    if (YKS.Audio.rainNode) {
      try {
        YKS.Audio.rainNode.source.stop();
        YKS.Audio.rainNode.lfo.stop();
      } catch (e) {}
      YKS.Audio.rainNode = null;
    }
    if (YKS.Audio.whiteNoiseNode) {
      try {
        YKS.Audio.whiteNoiseNode.source.stop();
      } catch (e) {}
      YKS.Audio.whiteNoiseNode = null;
    }
    YKS.Audio.isPlaying = false;
    YKS.Audio.currentType = 'off';
    YKS.State.settings.audioEnabled = false;
    YKS.Storage.saveSettings();
    YKS.Audio.updateUI();
  },

  toggle: () => {
    if (YKS.Audio.isPlaying) {
      YKS.Audio.stop();
    } else {
      YKS.Audio.play(YKS.Audio.currentType === 'off' ? 'rain' : YKS.Audio.currentType);
    }
  },

  setVolume: (value) => {
    if (YKS.Audio.gainNode) {
      YKS.Audio.gainNode.gain.value = Math.max(0, Math.min(1, value));
    }
  },

  updateUI: () => {
    const btn = document.getElementById('focusAudioBtn');
    const icon = document.getElementById('audioIcon');
    const text = document.getElementById('audioText');
    
    if (btn && icon && text) {
      if (YKS.Audio.isPlaying) {
        btn.classList.remove('bg-slate-800', 'hover:bg-slate-700');
        btn.classList.add('bg-sky-600', 'hover:bg-sky-500');
        icon.className = YKS.Audio.currentType === 'rain' 
          ? 'fa-solid fa-cloud-rain mr-1.5 text-amber-300' 
          : 'fa-solid fa-wave-square mr-1.5 text-amber-300';
        text.textContent = YKS.Audio.currentType === 'rain' ? 'Yağmur Ses' : 'Beyaz Gürültü';
      } else {
        btn.classList.remove('bg-sky-600', 'hover:bg-sky-500');
        btn.classList.add('bg-slate-800', 'hover:bg-slate-700');
        icon.className = 'fa-solid fa-cloud-rain mr-1.5 text-cyan-300';
        text.textContent = 'Odak Sesi';
      }
    }
  }
};

// ============================================================
// UI HELPERS (Toast, Modal, Loading)
// ============================================================
YKS.UI = {
  toastContainer: null,

  init: () => {
    if (!YKS.UI.toastContainer) {
      YKS.UI.toastContainer = document.createElement('div');
      YKS.UI.toastContainer.className = 'toast-container';
      document.body.appendChild(YKS.UI.toastContainer);
    }
  },

  toast: (message, type = 'info', duration = 3000) => {
    YKS.UI.init();
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
      success: 'fa-solid fa-circle-check',
      error: 'fa-solid fa-circle-xmark',
      warning: 'fa-solid fa-triangle-exclamation',
      info: 'fa-solid fa-circle-info'
    };
    
    toast.innerHTML = `
      <i class="${icons[type] || icons.info}"></i>
      <span>${message}</span>
    `;
    
    YKS.UI.toastContainer.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'slideInRight 0.3s ease-out reverse';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  showModal: (title, content, actions = []) => {
    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      
      const actionButtons = actions.map((action, i) => `
        <button class="btn ${action.class || 'btn-secondary'}" data-action="${i}">
          ${action.icon ? `<i class="${action.icon} mr-2"></i>` : ''}${action.label}
        </button>
      `).join('');
      
      overlay.innerHTML = `
        <div class="modal">
          <div class="modal-header">
            <h3 class="modal-title">${title}</h3>
            <button class="modal-close" data-action="close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="modal-body">${content}</div>
          <div class="modal-footer">${actionButtons}</div>
        </div>
      `;
      
      document.body.appendChild(overlay);
      
      overlay.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
          const action = btn.dataset.action;
          document.body.removeChild(overlay);
          if (action !== 'close' && actions[parseInt(action)]) {
            resolve({ action: actions[parseInt(action)].value, index: parseInt(action) });
          } else {
            resolve({ action: 'close', index: -1 });
          }
        });
      });
      
      // Close on overlay click
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          document.body.removeChild(overlay);
          resolve({ action: 'close', index: -1 });
        }
      });
      
      // Close on Escape
      const escHandler = (e) => {
        if (e.key === 'Escape') {
          document.body.removeChild(overlay);
          document.removeEventListener('keydown', escHandler);
          resolve({ action: 'close', index: -1 });
        }
      };
      document.addEventListener('keydown', escHandler);
    });
  },

  confirm: (message, title = 'Onay') => {
    return YKS.UI.showModal(title, `<p class="text-slate-600 dark:text-slate-300">${message}</p>`, [
      { label: 'İptal', class: 'btn-secondary', value: false },
      { label: 'Onayla', class: 'btn-rose', value: true, icon: 'fa-solid fa-check' }
    ]);
  },

  prompt: (message, title = 'Giriş', defaultValue = '') => {
    return YKS.UI.showModal(title, `
      <p class="text-slate-600 dark:text-slate-300 mb-4">${message}</p>
      <input type="text" id="promptInput" class="input" value="${defaultValue}" placeholder="Cevabınızı yazın...">
    `, [
      { label: 'İptal', class: 'btn-secondary', value: null },
      { label: 'Tamam', class: 'btn-primary', value: 'submit', icon: 'fa-solid fa-check' }
    ]).then(result => {
      if (result.action === 'submit') {
        return document.getElementById('promptInput').value;
      }
      return null;
    });
  },

  loading: (show, message = 'Yükleniyor...') => {
    let loader = document.getElementById('yks-loader');
    if (show) {
      if (!loader) {
        loader = document.createElement('div');
        loader.id = 'yks-loader';
        loader.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50';
        loader.innerHTML = `
          <div class="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center shadow-2xl max-w-sm mx-4">
            <div class="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p class="text-slate-700 dark:text-slate-300 font-medium">${message}</p>
          </div>
        `;
        document.body.appendChild(loader);
      }
      loader.style.display = 'flex';
    } else if (loader) {
      loader.style.display = 'none';
    }
  }
};

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
YKS.Utils = {
  // Generate unique ID
  uid: (prefix = 'id') => `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,

  // Format date for Turkish locale
  formatDate: (date = new Date(), options = {}) => {
    const defaultOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('tr-TR', { ...defaultOptions, ...options });
  },

  // Format time
  formatTime: (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  },

  // Calculate net score (D - Y/4)
  calculateNet: (correct, wrong, total) => {
    const blank = total - correct - wrong;
    const net = correct - (wrong / 4);
    return {
      correct,
      wrong,
      blank,
      net: Math.max(0, net),
      accuracy: total > 0 ? ((correct / total) * 100).toFixed(1) : 0
    };
  },

  // Debounce function
  debounce: (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(null, args), delay);
    };
  },

  // Throttle function
  throttle: (fn, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        fn.apply(null, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Deep clone
  clone: (obj) => JSON.parse(JSON.stringify(obj)),

  // Shuffle array (Fisher-Yates)
  shuffle: (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // Get random items from array
  sample: (array, count) => {
    const shuffled = YKS.Utils.shuffle(array);
    return shuffled.slice(0, count);
  },

  // Group array by key
  groupBy: (array, key) => {
    return array.reduce((groups, item) => {
      const groupKey = typeof key === 'function' ? key(item) : item[key];
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(item);
      return groups;
    }, {});
  },

  // Sort by multiple keys
  sortBy: (array, ...keys) => {
    return [...array].sort((a, b) => {
      for (const key of keys) {
        const [k, dir = 'asc'] = key.split(':');
        const valA = a[k];
        const valB = b[k];
        if (valA < valB) return dir === 'asc' ? -1 : 1;
        if (valA > valB) return dir === 'asc' ? 1 : -1;
      }
      return 0;
    });
  },

  // Capitalize first letter
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),

  // Truncate text
  truncate: (str, length = 100, suffix = '...') => {
    if (str.length <= length) return str;
    return str.slice(0, length).trim() + suffix;
  },

  // Parse query string
  parseQuery: (queryString) => {
    const params = new URLSearchParams(queryString);
    const result = {};
    for (const [key, value] of params) {
      result[key] = value;
    }
    return result;
  },

  // Build query string
  buildQuery: (params) => {
    return new URLSearchParams(params).toString();
  },

  // Copy to clipboard
  copyToClipboard: async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      YKS.UI.toast('Panoya kopyalandı', 'success');
      return true;
    } catch (e) {
      YKS.UI.toast('Kopyalama başarısız', 'error');
      return false;
    }
  },

  // Download text as file
  downloadText: (text, filename, type = 'text/plain') => {
    const blob = new Blob([text], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  },

  // Get URL parameter
  getUrlParam: (name) => {
    return new URLSearchParams(window.location.search).get(name);
  },

  // Set URL parameter without reload
  setUrlParam: (name, value) => {
    const url = new URL(window.location);
    url.searchParams.set(name, value);
    window.history.replaceState({}, '', url);
  }
};

// ============================================================
// EVENT DELEGATION HELPERS
// ============================================================
YKS.Events = {
  // Delegate click events
  delegate: (container, selector, handler) => {
    container.addEventListener('click', (e) => {
      const target = e.target.closest(selector);
      if (target && container.contains(target)) {
        handler.call(target, e, target);
      }
    });
  },

  // Delegate change events
  delegateChange: (container, selector, handler) => {
    container.addEventListener('change', (e) => {
      const target = e.target.closest(selector);
      if (target && container.contains(target)) {
        handler.call(target, e, target);
      }
    });
  },

  // One-time event listener
  once: (element, event, handler) => {
    const wrapped = (e) => {
      element.removeEventListener(event, wrapped);
      handler(e);
    };
    element.addEventListener(event, wrapped);
  }
};

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize core systems
  YKS.Storage.loadSettings();
  YKS.Storage.loadVocab();
  YKS.Storage.loadKanban();
  YKS.Audio.init();
  YKS.UI.init();
  
  // Global keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + S: Save backup
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      const day = YKS.State.currentDay || 1;
      YKS.Storage.createBackup(day);
      YKS.UI.toast('Yedek oluşturuldu', 'success');
    }
    
    // Ctrl/Cmd + Shift + D: Toggle dark mode
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
      e.preventDefault();
      YKS.Theme.toggle();
    }
    
    // Space: Toggle audio (when not in input)
    if (e.key === ' ' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      if (e.target.closest('.option-label')) return; // Don't toggle when clicking options
      e.preventDefault();
      YKS.Audio.toggle();
    }
  });

  // Auto-save on visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && YKS.State.settings.autoSave) {
      const day = YKS.State.currentDay || 1;
      YKS.Storage.saveDayData(day);
      YKS.Storage.saveVocab();
      YKS.Storage.saveKanban();
    }
  });

  // Auto-save before unload
  window.addEventListener('beforeunload', () => {
    if (YKS.State.settings.autoSave) {
      const day = YKS.State.currentDay || 1;
      YKS.Storage.saveDayData(day);
      YKS.Storage.saveVocab();
      YKS.Storage.saveKanban();
    }
  });

  console.log('✅ YKS 6 Günlük Sistem - Shared Utilities Yüklendi');
});

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = YKS;
}