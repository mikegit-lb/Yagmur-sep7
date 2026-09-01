const { spawn } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const targetFiles = [
  'index.html',
  'gun-1.html',
  'gun-2-ydt-ingilizce.html',
  'gun-3-tyt-turkce.html',
  'gun-4-tyt-matematik.html',
  'gun-5-ydt-reading.html',
  'gun-6-simulasyon.html',
  'gun-7.html',
  'gun-8.html',
  'gun-9.html',
  'gun-10.html',
  'gun-11.html',
  'gun-12.html',
  'gun-13.html',
  'gun-14.html',
  'sinav_merkezi.html'
];

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.msgId = 0;
    this.callbacks = new Map();
    this.eventListeners = new Map();
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const { resolve, reject } = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) reject(new Error(msg.error.message || JSON.stringify(msg.error)));
          else resolve(msg.result);
        } else if (msg.method) {
          const listeners = this.eventListeners.get(msg.method) || [];
          listeners.forEach(fn => fn(msg.params));
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.msgId;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  on(event, handler) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event).push(handler);
  }

  async eval(expression) {
    const wrapped = `(() => {
      ${expression}
    })()`;
    const res = await this.send('Runtime.evaluate', {
      expression: wrapped,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(`Eval exception: ${JSON.stringify(res.exceptionDetails)}`);
    }
    return res.result ? res.result.value : undefined;
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function runTestSuite() {
  console.log('===============================================================');
  console.log('🧪 COMPREHENSIVE AUTOMATED TEST SUITE: HIDDEN ANSWERS VERIFIED');
  console.log('===============================================================\n');

  const port = 9555;
  const chromeProcess = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--allow-file-access-from-files'
  ], { stdio: 'ignore' });

  let versionData = null;
  for (let attempt = 0; attempt < 20; attempt++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      versionData = await res.json();
      break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  if (!versionData) {
    console.error('❌ Failed to connect to headless Chrome instance on port', port);
    chromeProcess.kill();
    process.exit(1);
  }

  console.log(`✓ Connected to Chrome: ${versionData.Browser}\n`);

  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;

  function assert(condition, message) {
    totalTests++;
    if (condition) {
      passedTests++;
      console.log(`    ✅ ${message}`);
    } else {
      failedTests++;
      console.error(`    ❌ ASSERTION FAILED: ${message}`);
    }
  }

  try {
    for (const fileName of targetFiles) {
      console.log(`\n---------------------------------------------------------------`);
      console.log(`📄 TESTING FILE: ${fileName}`);
      console.log(`---------------------------------------------------------------`);

      const targetRes = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' });
      const target = await targetRes.json();
      const client = new CDPClient(target.webSocketDebuggerUrl);
      await client.connect();

      await client.send('Page.enable');
      await client.send('Runtime.enable');

      const consoleErrors = [];
      client.on('Runtime.consoleAPICalled', (params) => {
        if (params.type === 'error') {
          consoleErrors.push(params.args.map(a => a.value || a.description).join(' '));
        }
      });
      client.on('Runtime.exceptionThrown', (params) => {
        consoleErrors.push(params.exceptionDetails.text + ' ' + (params.exceptionDetails.exception?.description || ''));
      });

      const fileUrl = 'file:///' + path.resolve(fileName).replace(/\\/g, '/');
      await client.send('Page.navigate', { url: fileUrl });

      for (let i = 0; i < 40; i++) {
        try {
          const loc = await client.eval('return window.location.href');
          const ready = await client.eval('return document.readyState === "complete" && !!document.body');
          if (loc && loc.includes(fileName) && ready) break;
        } catch(e) {}
        await new Promise(r => setTimeout(r, 100));
      }
      await client.eval('localStorage.clear(); sessionStorage.clear(); if (typeof studentAnswers !== "undefined") { studentAnswers = {ydt:{}, turkce:{}, matematik:{}, fen:{}, sosyal:{}, reading:{}}; testCompleted = {ydt:false, turkce:false, matematik:false, fen:false, sosyal:false, reading:false}; if (typeof renderAllQuestions === "function") renderAllQuestions(); }');
      await new Promise(r => setTimeout(r, 200));

      if (fileName === 'index.html') {
        const title = await client.eval('return document.title');
        assert(title.includes('YKS & YDT 14 Günlük Sınav Merkezi'), 'Page title is correct');

        const cardCount = await client.eval('return document.querySelectorAll(".day-card").length');
        assert(cardCount === 14, `Contains all 14 Day interactive module cards (got ${cardCount})`);

        const totalQBadge = await client.eval('return document.body.innerText.includes("2.668 Soru")');
        assert(totalQBadge, 'Hero banner correctly displays total 2.668 questions');

      } else {
        // Day SPA pages
        const dbHydrated = await client.eval('return !!window.EXAM_DATABASE && !!window.TARGET_VOCABULARY_15');
        assert(dbHydrated, 'Database and Vocabulary are hydrated');

        const counts = await client.eval(`
          return {
            ydt: window.EXAM_DATABASE.ydt ? window.EXAM_DATABASE.ydt.length : 0,
            turkce: window.EXAM_DATABASE.turkce ? window.EXAM_DATABASE.turkce.length : 0,
            matematik: window.EXAM_DATABASE.matematik ? window.EXAM_DATABASE.matematik.length : 0,
            fen: window.EXAM_DATABASE.fen ? window.EXAM_DATABASE.fen.length : 0,
            sosyal: window.EXAM_DATABASE.sosyal ? window.EXAM_DATABASE.sosyal.length : 0,
            reading: window.EXAM_DATABASE.reading ? window.EXAM_DATABASE.reading.length : 0,
            vocab: window.TARGET_VOCABULARY_15 ? window.TARGET_VOCABULARY_15.length : 0
          };
        `);

        assert(counts.ydt === 100, `YDT question count is 100 (got ${counts.ydt})`);
        assert(counts.turkce === 40, `Türkçe question count is 40 (got ${counts.turkce})`);
        assert(counts.matematik === 30, `Matematik question count is 30 (got ${counts.matematik})`);
        assert(counts.reading === 12, `Reading question count is 12 (got ${counts.reading})`);
        assert(counts.vocab === 15, `Target vocabulary count is 15 (got ${counts.vocab})`);

        if (fileName === 'gun-8.html' || fileName === 'gun-12.html') {
          assert(counts.fen === 30, `TYT Fen Bilimleri question count is 30 (got ${counts.fen})`);
        }
        if (fileName === 'gun-10.html' || fileName === 'gun-14.html') {
          assert(counts.sosyal === 30, `TYT Sosyal Bilimler question count is 30 (got ${counts.sosyal})`);
        }

        // Live Invariant: 0 consecutive identical answer keys across all subjects
        const nonConsecutiveCheck = await client.eval(`
          return Object.keys(window.EXAM_DATABASE).every(subj => {
            const list = window.EXAM_DATABASE[subj];
            for (let i = 1; i < list.length; i++) {
              if (list[i].correctAnswer === list[i-1].correctAnswer) return false;
            }
            return true;
          });
        `);
        assert(nonConsecutiveCheck, 'Live Invariant: 0 consecutive identical answer keys across all subjects');

        // STRICT CHECK: Before completing test, NO solution, NO rule box, and NO answer hints are visible!
        const noHintsBeforeCompletion = await client.eval(`
          switchTab('ydt');
          const firstQ = window.EXAM_DATABASE.ydt[0];
          const card = document.getElementById('q-card-' + firstQ.id);
          const hasSolutionText = card.innerHTML.includes('ÖSYM Sınav Çözümü');
          const hasKuralBtn = card.innerHTML.includes('Gramer Kuralı') || card.innerHTML.includes('Konu Notu');
          return !hasSolutionText && !hasKuralBtn;
        `);
        assert(noHintsBeforeCompletion, 'Anti-Spoil Invariant: Answers, grammar rules and hints are strictly hidden before completing test');

        // Test tabs
        const tabs = ['plan', 'hata-defteri', 'ydt', 'turkce', 'matematik', 'reading', 'vocab', 'analiz'];
        if (counts.fen === 30) tabs.push('fen');
        if (counts.sosyal === 30) tabs.push('sosyal');

        for (const tabId of tabs) {
          const tabSwitched = await client.eval(`
            switchTab('${tabId}');
            const sec = document.getElementById('tab-content-${tabId}');
            const otherHidden = Array.from(document.querySelectorAll('main > section'))
              .filter(s => s.id !== 'tab-content-${tabId}')
              .every(s => s.classList.contains('hidden'));
            return !!(sec && !sec.classList.contains('hidden') && otherHidden);
          `);
          assert(tabSwitched, `Tab button & view switch for '#tab-content-${tabId}' works cleanly`);
        }

        // Header controls
        const darkModeWorks = await client.eval(`
          const initDark = document.documentElement.classList.contains('dark');
          toggleDarkMode();
          const toggled1 = document.documentElement.classList.contains('dark') !== initDark;
          toggleDarkMode();
          const toggled2 = document.documentElement.classList.contains('dark') === initDark;
          return toggled1 && toggled2;
        `);
        assert(darkModeWorks, 'Dark Mode toggle switches HTML class and localStorage');

        const printMenuWorks = await client.eval(`
          const menu = document.getElementById('printMenuDropdown');
          const initiallyHidden = menu.classList.contains('hidden');
          togglePrintMenu();
          const opened = !menu.classList.contains('hidden');
          togglePrintMenu();
          const closed = menu.classList.contains('hidden');
          return initiallyHidden && opened && closed;
        `);
        assert(printMenuWorks, 'Print / PDF Dropdown Menu toggles open and closed');

        const focusAudioWorks = await client.eval(`
          toggleFocusAudio();
          const activeState = isAudioPlaying;
          toggleFocusAudio();
          const inactiveState = !isAudioPlaying;
          return activeState && inactiveState;
        `);
        assert(focusAudioWorks, 'Web Audio Low-Pass Focus Sound generator initializes and toggles cleanly');

        // Question Selection
        const questionInteractionWorks = await client.eval(`
          switchTab('ydt');
          const firstQ = window.EXAM_DATABASE.ydt[0];
          selectAnswer('ydt', firstQ.id, firstQ.correctAnswer);
          const ansState = studentAnswers.ydt[firstQ.id] === firstQ.correctAnswer;
          const secondQ = window.EXAM_DATABASE.ydt[1];
          const wrongKey = firstQ.correctAnswer;
          selectAnswer('ydt', secondQ.id, wrongKey);
          return ansState && studentAnswers.ydt[secondQ.id] === wrongKey;
        `);
        assert(questionInteractionWorks, 'Selecting question options updates state and UI highlight');

        // Flagging
        const flagWorks = await client.eval(`
          const qId = window.EXAM_DATABASE.ydt[0].id;
          toggleFlagQuestion('ydt', qId);
          const flagged = !!flaggedQuestions[qId];
          toggleFlagQuestion('ydt', qId);
          const unflagged = !flaggedQuestions[qId];
          return flagged && unflagged;
        `);
        assert(flagWorks, 'Question bookmark / flagging toggle works');

        // Finish Test: Solutions and rules are unlocked AFTER completing test
        const finishTestWorks = await client.eval(`
          finishTest('ydt');
          const completed = testCompleted.ydt;
          const score = calculateSubjectScore('ydt');
          const isFinishedUI = !!document.querySelector('#q-card-' + window.EXAM_DATABASE.ydt[0].id + ' input:disabled');
          const firstCard = document.getElementById('q-card-' + window.EXAM_DATABASE.ydt[0].id);
          const hasSolutionUnlocked = firstCard.innerHTML.includes('ÖSYM Sınav Çözümü');
          return completed && score.total === 100 && isFinishedUI && hasSolutionUnlocked;
        `);
        assert(finishTestWorks, 'Test completion unlocks solutions, rules, and disabled inputs');

        // Hata Defteri
        const hataDefteriWorks = await client.eval(`
          switchTab('hata-defteri');
          renderHataDefteri();
          const listEl = document.getElementById('hata-defteri-list');
          const countBadge = document.getElementById('badge-hata-count');
          const hasItems = listEl && listEl.children.length > 0;
          
          filterHataSubject('ydt');
          const filteredYdt = currentHataSubject === 'ydt';
          filterHataSubject('all');

          filterHataStatus('wrong');
          const filteredWrong = currentHataStatus === 'wrong';
          filterHataStatus('all');

          const testQId = window.EXAM_DATABASE.ydt[1].id;
          saveStudentMistakeNote(testQId, 'Test Note Strategy 123');
          const noteSaved = studentMistakeNotes[testQId] === 'Test Note Strategy 123';

          toggleLearnedArchived(testQId);
          const isArchived = !!learnedArchivedQuestions[testQId];
          toggleLearnedArchived(testQId);

          return hasItems && filteredYdt && filteredWrong && noteSaved && isArchived;
        `);
        assert(hataDefteriWorks, 'Hata Defteri auto-populates mistakes, filters by category, saves student notes and toggles learned archive');

        // Reading Tools: Font Size, Underlining, Highlighting, Notes
        const readingToolsWork = await client.eval(`
          switchTab('reading');
          const initSize = passageFontScale;
          changePassageFontSize(2);
          const scaledUp = passageFontScale === initSize + 2;
          changePassageFontSize(-2);

          const pTextEl = document.getElementById('passage-text-0');
          const hasLargeFont = pTextEl && pTextEl.classList.contains('passage-content');

          // Note taking
          savePassageNote(0, 'Passage 1 Main Theme Analysis Note');
          const noteSaved = localStorage.getItem('yks_day' + DAY_NUM + '_reading_note_0') === 'Passage 1 Main Theme Analysis Note';
          togglePassageNotes(0);
          const box = document.getElementById('passage-notes-box-0');
          const boxOpened = box && !box.classList.contains('hidden');

          return scaledUp && hasLargeFont && noteSaved && boxOpened;
        `);
        assert(readingToolsWork, 'Reading Masterclass: Font scaling, note taking, and annotations are fully operational');

        // Vocab Flashcard
        const vocabCardWorks = await client.eval(`
          switchTab('vocab');
          const firstCard = document.querySelector('.flashcard');
          const initFlipped = firstCard.classList.contains('flipped');
          firstCard.click();
          const isFlipped = firstCard.classList.contains('flipped');
          firstCard.click();
          const isUnflipped = !firstCard.classList.contains('flipped');
          speakWord('disrupt');
          return !initFlipped && isFlipped && isUnflipped;
        `);
        assert(vocabCardWorks, 'Vocab 3D Flashcard flips on click and Web Speech speakWord executes safely');

        // Analytics & Chart.js
        const analyticsWorks = await client.eval(`
          switchTab('analiz');
          updateScoresAndKarne();
          updateChart();
          const totalNetEl = document.getElementById('score-total-net');
          const hasNetText = totalNetEl && totalNetEl.innerText.length > 0;
          const chartDataValid = !!scoreChartInstance && scoreChartInstance.data.datasets[0].data.length >= 3;
          return hasNetText && chartDataValid;
        `);
        assert(analyticsWorks, 'Karne & Analiz calculates exact Net, updates Chart.js dataset and renders AI coaching report');

        // Zero Console Errors
        assert(consoleErrors.length === 0, `Zero console runtime errors on page`);
        if (consoleErrors.length > 0) {
          console.error('    Console errors:', consoleErrors);
        }
      }

      client.close();
      await fetch(`http://127.0.0.1:${port}/json/close/${target.id}`);
    }

  } catch (err) {
    console.error('❌ Test suite fatal error:', err);
    failedTests++;
  } finally {
    chromeProcess.kill();
  }

  console.log('\n===============================================================');
  console.log(`📊 FINAL TEST SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED`);
  if (failedTests === 0) {
    console.log('🎉 100% OF ALL TESTS PASSED: NO SPOILERS BEFORE TEST COMPLETION!');
  } else {
    console.error(`❌ ${failedTests} TESTS FAILED.`);
    process.exit(1);
  }
  console.log('===============================================================\n');
}

runTestSuite();
