const fs = require('fs');
const path = require('path');

const day1 = JSON.parse(fs.readFileSync('scripts/day1-database.json', 'utf8'));
const day2 = require('./day2-data.cjs');
const day3 = require('./day3-data.cjs');
const day4 = require('./day4-data.cjs');
const day5 = require('./day5-data.cjs');
const day6 = require('./day6-data.cjs');

const daysData = [
  {
    day: 1,
    fileName: 'gun-1.html',
    title: 'Gün 1 — Temel Değerlendirme & Teşhis',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 15 Hedef Kelime',
    themeBadge: '1. GÜN: TEMEL DEĞERLENDİRME & TEŞHİS',
    planDescription: 'Sınav maratonunun ilk gününde tüm derslerdeki mevcut net seviyenizi teşhis edin, eksik konu başlıklarını belirleyin ve akıllı hata defterinizi oluşturun.',
    planSchedule: [
      { time: '09:00 - 11:00', title: '🇬🇧 100 YDT İngilizce Denemesi', desc: '100 özgün soru, süre tutarak çözün. Tense, Modal, Bağlaç ve Cümle Tamamlama analizi.' },
      { time: '11:15 - 12:00', title: '🇹🇷 40 TYT Türkçe Denemesi', desc: 'Paragrafta anlam, ana düşünce ve karma dil bilgisi kurallarını test edin.' },
      { time: '13:00 - 13:50', title: '📐 30 TYT Matematik Denemesi', desc: 'Temel kavramlar, basamak analizi, mutlak değer, problemler ve temel geometri.' },
      { time: '14:00 - 14:30', title: '📚 3 Ekstra Reading Pasajı', desc: 'Nörobilim, Arktik Jeopolitiği ve Antik Ticaret metinleri üzerinde 12 ileri düzey soru.' },
      { time: '15:00 - 15:30', title: '🧠 15 Kritik Hedef Kelime', desc: 'Leitner 5 kutu sistemi ve sesli telaffuz ile C1/C2 akademik kelime ezberi.' },
      { time: '16:00 - 17:00', title: '🎯 Hata Defteri & PDF Raporu', desc: 'Yanlış ve boş sorularınızı analiz edin, notlar ekleyin ve kişisel hata kitapçığınızı indirin.' }
    ],
    database: day1.database,
    vocab: day1.vocab
  },
  {
    day: 2,
    fileName: 'gun-2-ydt-ingilizce.html',
    title: 'Gün 2 — YDT İngilizce Derinlemesine & Gramer Ustalığı',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 15 Hedef Kelime',
    themeBadge: '2. GÜN: YDT İNGİLİZCE & GRAMER USTALIĞI',
    planDescription: 'YDT İngilizce gramerinde en çok hata yapılan Inversion, Reduced Clauses, Mixed Conditionals ve Preposition kalıplarını kusursuzlaştırın.',
    planSchedule: [
      { time: '09:00 - 11:00', title: '🇬🇧 100 YDT İleri Gramer & Cümlecikler', desc: 'Devrik yapılar, kısaltmalar, zaman uyumu ve bağlaç soruları.' },
      { time: '11:15 - 12:00', title: '🇹🇷 40 TYT Türkçe Paragraf & Ses/Yazım', desc: 'Metin akışı, ses olayları, yazım ve noktalama pekiştirme.' },
      { time: '13:00 - 13:50', title: '📐 30 TYT Matematik Mantık & Problemler', desc: 'Sayı basamakları, mutlak değer eşitsizlikleri ve hareket problemleri.' },
      { time: '14:00 - 14:30', title: '📚 3 İleri YDT Reading Pasajı', desc: 'Nöroplastisite, Arktik erimesi ve Algoritmik hesap verebilirlik metinleri.' },
      { time: '15:00 - 15:30', title: '🧠 15 Yeni Akademik Kelime', desc: 'Disrupt, Impeccable, Escalation, Corroborate, Avert flashcard çalışması.' },
      { time: '16:00 - 17:00', title: '🎯 Hata Defteri & Detaylı Analiz', desc: 'Gramer çözüm ipuçları ve konu anlatım notları ile hata defteri tekrarı.' }
    ],
    database: day2.database,
    vocab: day2.vocab
  },
  {
    day: 3,
    fileName: 'gun-3-tyt-turkce.html',
    title: 'Gün 3 — TYT Türkçe & Paragraf Mastery',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 15 Hedef Kelime',
    themeBadge: '3. GÜN: TYT TÜRKÇE & PARAGRAF HIZI',
    planDescription: 'Türkçe paragraf sorularında okuma hızınızı ve odaklanma sürenizi optimize edin. Fiilimsiler, cümle ögeleri ve anlatım bozukluklarını sıfır hataya indirin.',
    planSchedule: [
      { time: '09:00 - 09:45', title: '🇹🇷 40 TYT Türkçe Hız ve Odak Denemesi', desc: 'Kronometre ile 45 dakikada 40 soruluk tam paragraf ve dil bilgisi simülasyonu.' },
      { time: '10:00 - 12:00', title: '🇬🇧 100 YDT Çeviri, Diyalog & Cümle Tamamlama', desc: 'Anlam bütünlüğü ve bağlamsal çıkarım soruları.' },
      { time: '13:00 - 13:50', title: '📐 30 TYT Matematik Çarpanlara Ayırma & Yaş Problemleri', desc: 'Özdeşlikler, eşitsizlikler ve yeni nesil mantık problemleri.' },
      { time: '14:00 - 14:30', title: '📚 3 YDT Reading Pasajı', desc: 'Derin Deniz Ekosistemleri, Rönesans Perspektifi ve Bilişsel Dilbilim.' },
      { time: '15:00 - 15:30', title: '🧠 15 Hedef Kelime', desc: 'Curtail, Inhospitable, Ambiguity, Colossal, Preclude kartları.' },
      { time: '16:00 - 17:00', title: '🎯 Türkçe & YDT Hata Defteri İncelemesi', desc: 'Yanlış yapılan paragraf soru köklerini etiketleyin ve PDF olarak kaydedin.' }
    ],
    database: day3.database,
    vocab: day3.vocab
  },
  {
    day: 4,
    fileName: 'gun-4-tyt-matematik.html',
    title: 'Gün 4 — TYT Matematik Temel İnşa & Formülsüz Mantık',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 15 Hedef Kelime',
    themeBadge: '4. GÜN: TYT MATEMATİK & HIZ STRATEJİLERİ',
    planDescription: 'Temel matematikte işlem hatasını sıfırlayın, problem çözümünde formülsüz modelleme yöntemlerini öğrenin ve geometride özel üçgenleri pekiştirin.',
    planSchedule: [
      { time: '09:00 - 09:50', title: '📐 30 TYT Matematik Odak Denemesi', desc: '50 dakikalık sürede yeni nesil problemler ve geometri soruları.' },
      { time: '10:05 - 12:05', title: '🇬🇧 100 YDT İngilizce Kapsamlı Soru Bankası', desc: 'Tüm gramer konuları, bağlaçlar ve restatement soruları.' },
      { time: '13:00 - 13:45', title: '🇹🇷 40 TYT Türkçe Paragraf & Sözcük Türleri', desc: 'Söz öbekleri, kesin yargı ve ek eylemler.' },
      { time: '14:00 - 14:30', title: '📚 3 YDT Reading Pasajı', desc: 'Kuantum Hesaplama, İpek Yolu ve Kentsel Yabanlaştırma.' },
      { time: '15:00 - 15:30', title: '🧠 15 Hedef Kelime', desc: 'Diminish, Phenomenal, Scarcity, Finite, Superposition.' },
      { time: '16:00 - 17:00', title: '🎯 Matematik Çözüm İpuçları & Hata Defteri', desc: 'Matematik ders notları ve pratik çözüm formülleri tekrarı.' }
    ],
    database: day4.database,
    vocab: day4.vocab
  },
  {
    day: 5,
    fileName: 'gun-5-ydt-reading.html',
    title: 'Gün 5 — YDT Reading Masterclass & Metin Analizi',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 15 Hedef Kelime',
    themeBadge: '5. GÜN: YDT READING & AKADEMİK METİN ANALİZİ',
    planDescription: 'Uzun ve karmaşık akademik İngilizce metinleri hızlı çözümleme teknikleri, ana fikir çıkarma, yazarın tutumu ve bağlamdan kelime anlamı bulma.',
    planSchedule: [
      { time: '09:00 - 09:40', title: '📚 YDT Reading Masterclass Pasajları', desc: 'Mikrobiyom, Uzay Hukuku ve Dijital Dilbilim pasajları.' },
      { time: '10:00 - 12:00', title: '🇬🇧 100 YDT Gramer ve Okuma Sorusu', desc: 'Okuma odaklı cümle tamamlama ve restatement soruları.' },
      { time: '13:00 - 13:45', title: '🇹🇷 40 TYT Türkçe Paragrafta Anlatım Biçimleri', desc: 'Tartışmacı ve açıklayıcı anlatım, çoklu paragraf soruları.' },
      { time: '14:00 - 14:50', title: '📐 30 TYT Matematik Oran-Orantı & Problemler', desc: 'İşçi-havuz, karışım ve çemberde çevre/alan.' },
      { time: '15:00 - 15:30', title: '🧠 15 Akademik Kelime Ezberi', desc: 'Unravel, Peculiar, Depletion, Symbiotic, Appropriation.' },
      { time: '16:00 - 17:00', title: '🎯 Hata Defteri & İleri Düzey Kelime PDF’i', desc: 'Okuma yanlışları analizi ve hafıza pekiştirme.' }
    ],
    database: day5.database,
    vocab: day5.vocab
  },
  {
    day: 6,
    fileName: 'gun-6-simulasyon.html',
    title: 'Gün 6 — Tam Deneme Simülasyonu & Gerçek Sınav Provası',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 15 Hedef Kelime',
    themeBadge: '6. GÜN: TAM SINAV SİMÜLASYONU & FİNAL',
    planDescription: 'Gerçek ÖSYM sınav koşullarında tam süre, optik odaklanma ve sınav stratejisi provası. Tüm eksiklerin final hata defteri ile kapatılması.',
    planSchedule: [
      { time: '09:00 - 11:00', title: '🇬🇧 100 YDT Büyük Sınav Simülasyonu', desc: '120 dakika kesintisiz gerçek YDT deneme provası.' },
      { time: '11:15 - 12:00', title: '🇹🇷 40 TYT Türkçe Final Denemesi', desc: '45 dakika süre sınırlı tam TYT Türkçe sınavı.' },
      { time: '13:00 - 13:50', title: '📐 30 TYT Matematik Final Denemesi', desc: '50 dakika süre sınırlı tam TYT Matematik sınavı.' },
      { time: '14:00 - 14:30', title: '📚 3 Final Reading Pasajı', desc: 'Süper Şebekeler, Dürtme Teorisi ve Arkeogenetik.' },
      { time: '15:00 - 15:30', title: '🧠 15 Final Hedef Kelime', desc: 'Deploy, Dependable, Proliferation, Heuristics, Conundrum.' },
      { time: '16:00 - 17:30', title: '🎯 6 Günlük Büyük Karne & Hata Kitapçığı', desc: 'Genel gelişim grafiğinizi inceleyin, tüm 6 günün hata özetini PDF indirin.' }
    ],
    database: day6.database,
    vocab: day6.vocab
  }
];

function encodeB64Unicode(data) {
  const jsonStr = typeof data === 'string' ? data : JSON.stringify(data);
  return Buffer.from(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode('0x' + p1);
  }), 'binary').toString('base64');
}

function generateHtmlForDay(dayConfig) {
  const day = dayConfig.day;
  const dbB64 = encodeB64Unicode(dayConfig.database);
  const vocabB64 = encodeB64Unicode(dayConfig.vocab);

  const scheduleHtml = dayConfig.planSchedule.map(s => `
    <div class="glass-card rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 space-y-1.5 transition hover:shadow-md">
        <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-sky-800">${s.time}</span>
            <span class="text-[11px] font-bold text-slate-400">Hedef: %100 Başarı</span>
        </div>
        <h4 class="font-black text-sm sm:text-base text-slate-900 dark:text-white">${s.title}</h4>
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${s.desc}</p>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="tr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YKS & YDT Sınav Merkezi • ${dayConfig.title}</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#f0f7ff', 100: '#e0effe', 200: '#bae0fd', 300: '#7cc6fc', 400: '#38a8f8',
                            500: '#0e8ce9', 600: '#026fc7', 700: '#0358a1', 800: '#074b84', 900: '#0c3f6e', 950: '#082849',
                        },
                        modadil: {
                            50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185',
                            500: '#e11d48', 600: '#be123c', 700: '#9f1239', 800: '#881337', 900: '#4c0519'
                        }
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- Canvas Confetti -->
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
    <!-- html2pdf.js for instant PDF download -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <!-- KaTeX for Math formatting -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .glass-card {
            background: rgba(255, 255, 255, 0.96);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(226, 232, 240, 0.9);
        }
        .dark .glass-card {
            background: rgba(15, 23, 42, 0.96);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(51, 65, 85, 0.65);
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.04); border-radius: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(225, 29, 72, 0.35); border-radius: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(225, 29, 72, 0.7); }
        .flashcard-inner {
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
        }
        .flashcard.flipped .flashcard-inner { transform: rotateY(180deg); }
        .flashcard-front, .flashcard-back {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }
        .flashcard-back { transform: rotateY(180deg); }
        .option-label:hover { border-color: #0284c7; background-color: rgba(2, 132, 199, 0.04); }
        .dark .option-label:hover { border-color: #38bdf8; background-color: rgba(2, 132, 199, 0.12); }
        
        @media print {
            .no-print, header, footer, .tab-btn, .hata-subj-btn, .hata-stat-btn, button, #focusAudioBtn, #printMenuDropdown {
                display: none !important;
            }
            body {
                background: #ffffff !important;
                color: #000000 !important;
                font-size: 11pt !important;
            }
            main {
                max-width: 100% !important;
                padding: 0 !important;
                margin: 0 !important;
            }
            body.print-mode-all section {
                display: block !important;
                visibility: visible !important;
                page-break-after: always;
            }
            body:not(.print-mode-all) section:not(.hidden) {
                display: block !important;
                visibility: visible !important;
            }
            .glass-card {
                background: #ffffff !important;
                border: 1px solid #cbd5e1 !important;
                box-shadow: none !important;
                break-inside: avoid;
                page-break-inside: avoid;
                margin-bottom: 1.25rem !important;
                padding: 1.25rem !important;
            }
            textarea {
                border: 1px solid #cbd5e1 !important;
                background: #f8fafc !important;
                color: #000000 !important;
                height: auto !important;
            }
            .print-header {
                display: block !important;
                border-bottom: 2px solid #334155;
                padding-bottom: 8px;
                margin-bottom: 16px;
            }
        }
    </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-200">

    <!-- TOP HEADER -->
    <header class="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg no-print">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Brand Title & Home Link -->
                <div class="flex items-center space-x-3">
                    <a href="index.html" class="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-rose-500 flex items-center justify-center text-white font-black text-xl shadow-md hover:scale-105 transition" title="Ana Panele Dön">
                        🎯
                    </a>
                    <div>
                        <div class="flex items-center space-x-2">
                            <a href="index.html" class="text-base sm:text-lg font-black tracking-tight text-white hover:text-sky-400 transition">YKS & YDT Sınav Merkezi</a>
                            <span class="px-2 py-0.5 text-[10px] font-black bg-rose-600/90 text-white rounded-full uppercase tracking-wider">Gün ${day} / 6</span>
                        </div>
                        <p class="text-[11px] text-slate-400 font-medium hidden sm:block">100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 182 Soru & Hata Defteri</p>
                    </div>
                </div>

                <!-- Action Utilities -->
                <div class="flex items-center space-x-2 sm:space-x-3">
                    <!-- Global Multi-Section Print & PDF Menu Button -->
                    <div class="relative inline-block text-left">
                        <button onclick="togglePrintMenu()" id="printMenuBtn" class="bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md transition flex items-center space-x-1.5 active:scale-95">
                            <i class="fa-solid fa-print text-amber-300"></i>
                            <span>Yazdır / PDF</span>
                            <i class="fa-solid fa-chevron-down text-[10px] ml-0.5"></i>
                        </button>
                        <!-- Print Dropdown Menu -->
                        <div id="printMenuDropdown" class="hidden absolute right-0 mt-2 w-64 rounded-2xl shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 z-50 text-xs space-y-1">
                            <div class="px-3 py-1.5 text-[10px] font-black text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                                🖨️ Yazdırma & PDF Seçenekleri
                            </div>
                            <button onclick="printActiveSection(); togglePrintMenu();" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold flex items-center space-x-2">
                                <i class="fa-solid fa-file-lines text-sky-500"></i>
                                <span>Şu Anki Sekmeyi Yazdır</span>
                            </button>
                            <button onclick="downloadActiveSectionPDF(); togglePrintMenu();" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold flex items-center space-x-2">
                                <i class="fa-solid fa-file-pdf text-rose-500"></i>
                                <span>Şu Anki Sekmeyi PDF İndir</span>
                            </button>
                            <button onclick="printMasterExamBooklet(); togglePrintMenu();" class="w-full text-left px-3 py-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 font-black flex items-center space-x-2 border-t border-slate-100 dark:border-slate-800 mt-1">
                                <i class="fa-solid fa-book-open text-amber-500"></i>
                                <span>Tüm Sınavı Kitapçık Olarak Yazdır (182 Soru)</span>
                            </button>
                            <button onclick="downloadHataDefteriPDF(); togglePrintMenu();" class="w-full text-left px-3 py-2 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/50 text-rose-700 dark:text-rose-300 font-bold flex items-center space-x-2">
                                <i class="fa-solid fa-book-bookmark text-rose-500"></i>
                                <span>Hata Defterini PDF Al</span>
                            </button>
                        </div>
                    </div>

                    <!-- Rain / Focus Audio Generator -->
                    <button onclick="toggleFocusAudio()" id="focusAudioBtn" class="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-3 py-2 rounded-xl border border-slate-700 transition flex items-center shadow-sm">
                        <i id="audioIcon" class="fa-solid fa-cloud-rain mr-1.5 text-cyan-300"></i>
                        <span id="audioText" class="hidden sm:inline">Odak Sesi</span>
                    </button>

                    <!-- Theme Toggle -->
                    <button onclick="toggleDarkMode()" class="text-white hover:text-amber-300 transition p-2 rounded-lg hover:bg-white/10" title="Karanlık/Aydınlık Tema">
                        <i id="themeIcon" class="fa-solid fa-moon text-base"></i>
                    </button>
                </div>
            </div>

            <!-- SUBJECT TABS NAVIGATION (8 TABS) -->
            <div class="flex space-x-1 sm:space-x-2 overflow-x-auto custom-scrollbar pt-1 pb-2 border-t border-slate-700/40">
                <button onclick="switchTab('plan')" id="tab-btn-plan" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap bg-sky-600 text-white shadow-md">
                    <i class="fa-solid fa-calendar-check text-amber-300"></i>
                    <span>${day}. Gün Programı</span>
                </button>

                <button onclick="switchTab('hata-defteri')" id="tab-btn-hata-defteri" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-book-bookmark text-rose-400"></i>
                    <span>Hata Defteri</span>
                    <span id="badge-hata-count" class="bg-rose-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-black">0 Soru</span>
                </button>

                <button onclick="switchTab('ydt')" id="tab-btn-ydt" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-earth-americas text-sky-400"></i>
                    <span>YDT İngilizce (100)</span>
                </button>

                <button onclick="switchTab('turkce')" id="tab-btn-turkce" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-feather text-emerald-400"></i>
                    <span>TYT Türkçe (40)</span>
                </button>

                <button onclick="switchTab('matematik')" id="tab-btn-matematik" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-square-root-variable text-amber-400"></i>
                    <span>TYT Matematik (30)</span>
                </button>

                <button onclick="switchTab('reading')" id="tab-btn-reading" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-book-open text-teal-400"></i>
                    <span>3 Reading Pasajı (12)</span>
                </button>

                <button onclick="switchTab('vocab')" id="tab-btn-vocab" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-brain text-pink-400"></i>
                    <span>15 Hedef Kelime</span>
                </button>

                <button onclick="switchTab('analiz')" id="tab-btn-analiz" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-chart-pie text-violet-400"></i>
                    <span>Karne & Analiz</span>
                </button>
            </div>
        </div>
    </header>

    <!-- MAIN CONTENT CONTAINER -->
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <!-- ======================================================== -->
        <!-- TAB 0: 📅 GÜNLÜK ÇALIŞMA PLANI & STRATEJİ                -->
        <!-- ======================================================== -->
        <section id="tab-content-plan" class="space-y-6">
            <!-- Hero Banner -->
            <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden">
                <div class="relative z-10 max-w-3xl space-y-3">
                    <span class="px-3 py-1 rounded-full text-xs font-black bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 uppercase tracking-wider inline-block">
                        ${dayConfig.themeBadge}
                    </span>
                    <h2 class="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        ${dayConfig.title}
                    </h2>
                    <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        ${dayConfig.planDescription}
                    </p>
                    <div class="pt-2 flex flex-wrap items-center gap-3">
                        <button onclick="switchTab('ydt')" class="bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2">
                            <i class="fa-solid fa-play"></i> <span>YDT İngilizce Testine Başla (100 Soru)</span>
                        </button>
                        <button onclick="switchTab('hata-defteri')" class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 transition flex items-center space-x-2">
                            <i class="fa-solid fa-book-bookmark text-rose-500"></i> <span>Hata Defterini İncele</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Daily Schedule Grid -->
            <div class="space-y-3">
                <h3 class="text-lg font-black text-slate-900 dark:text-white flex items-center space-x-2">
                    <i class="fa-solid fa-clock text-sky-500"></i> <span>${day}. Gün Zaman Çizelgesi & Soru Dağılımı (182 Soru)</span>
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${scheduleHtml}
                </div>
            </div>
        </section>

        <!-- ======================================================== -->
        <!-- TAB 1: 🎯 AKILLI HATA DEFTERİ (ERROR LOG LAB)            -->
        <!-- ======================================================== -->
        <section id="tab-content-hata-defteri" class="hidden space-y-6">
            <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md">
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <div class="flex items-center space-x-3">
                        <div class="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xl font-black">🎯</div>
                        <div>
                            <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">Akıllı Hata Defteri & Yanlış Analiz Paneli</h2>
                            <p class="text-xs text-slate-500 dark:text-slate-400">Yanlış yaptığınız veya boş bıraktığınız tüm sorular burada toplanır, konu eksiklerinizi gösterir</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 no-print">
                        <button onclick="downloadHataDefteriPDF()" id="pdfDownloadBtn" class="bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition flex items-center space-x-1.5 active:scale-95">
                            <i class="fa-solid fa-file-pdf"></i> <span>Hata Defterini PDF Olarak İndir</span>
                        </button>
                    </div>
                </div>

                <!-- Filters -->
                <div class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 no-print">
                    <div class="flex flex-wrap items-center gap-1.5">
                        <button onclick="filterHataSubject('all')" id="hata-filter-all" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 transition">Tümü</button>
                        <button onclick="filterHataSubject('ydt')" id="hata-filter-ydt" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition">🇬🇧 YDT İngilizce</button>
                        <button onclick="filterHataSubject('turkce')" id="hata-filter-turkce" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition">🇹🇷 TYT Türkçe</button>
                        <button onclick="filterHataSubject('matematik')" id="hata-filter-matematik" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition">📐 TYT Matematik</button>
                        <button onclick="filterHataSubject('reading')" id="hata-filter-reading" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition">📚 YDT Reading</button>
                    </div>

                    <div class="flex items-center space-x-2">
                        <button onclick="filterHataStatus('all')" id="hata-stat-all" class="hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 text-white transition">Tüm Hatalar</button>
                        <button onclick="filterHataStatus('wrong')" id="hata-stat-wrong" class="hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition">Sadece Yanlışlar</button>
                        <button onclick="filterHataStatus('blank')" id="hata-stat-blank" class="hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition">Boş Bırakılanlar</button>
                        <button onclick="filterHataStatus('learned')" id="hata-stat-learned" class="hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition">Öğrenilenler (Arşiv)</button>
                    </div>
                </div>
            </div>

            <!-- Category Summary Tags -->
            <div class="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
                <div class="flex items-center space-x-2 text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                    <i class="fa-solid fa-tags text-rose-500"></i>
                    <span>Tespit Edilen Soru Tipi Eksikleri:</span>
                </div>
                <div id="hata-category-tags" class="flex flex-wrap gap-2"></div>
            </div>

            <!-- Mistake Question Cards List -->
            <div id="hata-defteri-list" class="space-y-4"></div>
        </section>

        <!-- ======================================================== -->
        <!-- TAB 2: 🇬🇧 100 YDT İNGİLİZCE                             -->
        <!-- ======================================================== -->
        <section id="tab-content-ydt" class="hidden space-y-6">
            <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl font-black">🇬🇧</div>
                    <div>
                        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">YDT İngilizce Soru Bankası (100 Soru)</h2>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Tenses, Modals, Conditionals, Inversion, Clauses, Cümle Tamamlama, Çeviri, Diyalog & Restatement</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2 no-print">
                    <div id="timer-ydt" class="px-3.5 py-1.5 rounded-xl font-mono font-bold text-xs bg-slate-900 text-sky-400 border border-slate-700 shadow-inner flex items-center space-x-1.5">
                        <i class="fa-solid fa-stopwatch text-sky-400"></i> <span id="timer-display-ydt">120:00</span>
                    </div>
                    <button onclick="printActiveSection()" class="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-700 transition flex items-center space-x-1.5 shadow-sm">
                        <i class="fa-solid fa-print text-sky-400"></i> <span>Yazdır</span>
                    </button>
                    <button onclick="downloadActiveSectionPDF()" class="bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm transition flex items-center space-x-1.5">
                        <i class="fa-solid fa-file-pdf"></i> <span>PDF İndir</span>
                    </button>
                </div>
            </div>

            <!-- Navigator -->
            <div class="glass-card rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex items-center space-x-2 overflow-x-auto custom-scrollbar no-print">
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2 whitespace-nowrap">Soru Gezgini:</span>
                <div id="nav-pills-ydt" class="flex space-x-1.5"></div>
            </div>

            <div id="questions-container-ydt" class="space-y-6"></div>

            <div class="flex justify-end pt-4 no-print">
                <button onclick="finishTest('ydt')" class="bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition flex items-center space-x-2">
                    <i class="fa-solid fa-check-double"></i> <span>YDT Testini Tamamla ve Değerlendir</span>
                </button>
            </div>
        </section>

        <!-- ======================================================== -->
        <!-- TAB 3: 🇹🇷 40 TYT TÜRKÇE                                 -->
        <!-- ======================================================== -->
        <section id="tab-content-turkce" class="hidden space-y-6">
            <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl font-black">🇹🇷</div>
                    <div>
                        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">TYT Türkçe Soru Bankası (40 Soru)</h2>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Sözcükte/Cümlede Anlam, Karma Dil Bilgisi, Ses/Yazım/Noktalama, Paragraf Yapısı & Ana Düşünce</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2 no-print">
                    <div id="timer-turkce" class="px-3.5 py-1.5 rounded-xl font-mono font-bold text-xs bg-slate-900 text-emerald-400 border border-slate-700 shadow-inner flex items-center space-x-1.5">
                        <i class="fa-solid fa-stopwatch text-emerald-400"></i> <span id="timer-display-turkce">45:00</span>
                    </div>
                    <button onclick="printActiveSection()" class="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-700 transition flex items-center space-x-1.5 shadow-sm">
                        <i class="fa-solid fa-print text-emerald-400"></i> <span>Yazdır</span>
                    </button>
                    <button onclick="downloadActiveSectionPDF()" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm transition flex items-center space-x-1.5">
                        <i class="fa-solid fa-file-pdf"></i> <span>PDF İndir</span>
                    </button>
                </div>
            </div>

            <!-- Navigator -->
            <div class="glass-card rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex items-center space-x-2 overflow-x-auto custom-scrollbar no-print">
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2 whitespace-nowrap">Soru Gezgini:</span>
                <div id="nav-pills-turkce" class="flex space-x-1.5"></div>
            </div>

            <div id="questions-container-turkce" class="space-y-6"></div>

            <div class="flex justify-end pt-4 no-print">
                <button onclick="finishTest('turkce')" class="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition flex items-center space-x-2">
                    <i class="fa-solid fa-check-double"></i> <span>Türkçe Testini Tamamla ve Değerlendir</span>
                </button>
            </div>
        </section>

        <!-- ======================================================== -->
        <!-- TAB 4: 📐 30 TYT MATEMATİK                               -->
        <!-- ======================================================== -->
        <section id="tab-content-matematik" class="hidden space-y-6">
            <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl font-black">📐</div>
                    <div>
                        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">TYT Matematik Soru Bankası (30 Soru)</h2>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Temel Kavramlar, Sayı Basamakları, Mutlak Değer, Problemler & Temel Geometri (Ders Notlu)</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2 no-print">
                    <div id="timer-matematik" class="px-3.5 py-1.5 rounded-xl font-mono font-bold text-xs bg-slate-900 text-amber-400 border border-slate-700 shadow-inner flex items-center space-x-1.5">
                        <i class="fa-solid fa-stopwatch text-amber-400"></i> <span id="timer-display-matematik">50:00</span>
                    </div>
                    <button onclick="printActiveSection()" class="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-700 transition flex items-center space-x-1.5 shadow-sm">
                        <i class="fa-solid fa-print text-amber-400"></i> <span>Yazdır</span>
                    </button>
                    <button onclick="downloadActiveSectionPDF()" class="bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm transition flex items-center space-x-1.5">
                        <i class="fa-solid fa-file-pdf"></i> <span>PDF İndir</span>
                    </button>
                </div>
            </div>

            <!-- Navigator -->
            <div class="glass-card rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex items-center space-x-2 overflow-x-auto custom-scrollbar no-print">
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2 whitespace-nowrap">Soru Gezgini:</span>
                <div id="nav-pills-matematik" class="flex space-x-1.5"></div>
            </div>

            <div id="questions-container-matematik" class="space-y-6"></div>

            <div class="flex justify-end pt-4 no-print">
                <button onclick="finishTest('matematik')" class="bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition flex items-center space-x-2">
                    <i class="fa-solid fa-check-double"></i> <span>Matematik Testini Tamamla ve Değerlendir</span>
                </button>
            </div>
        </section>

        <!-- ======================================================== -->
        <!-- TAB 5: 📚 3 EKSTRA YDT READING PASAJI (12 SORU)          -->
        <!-- ======================================================== -->
        <section id="tab-content-reading" class="hidden space-y-6">
            <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xl font-black">📚</div>
                    <div>
                        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">YDT Reading Masterclass (3 İleri Düzey Pasaj)</h2>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Ekstra 12 Soru: Ana Fikir, Detay, Çıkarım & Bağlamdan Kelime Anlamı</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2 no-print">
                    <button onclick="printActiveSection()" class="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-700 transition flex items-center space-x-1.5 shadow-sm">
                        <i class="fa-solid fa-print text-teal-400"></i> <span>Yazdır</span>
                    </button>
                    <button onclick="downloadActiveSectionPDF()" class="bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm transition flex items-center space-x-1.5">
                        <i class="fa-solid fa-file-pdf"></i> <span>PDF İndir</span>
                    </button>
                </div>
            </div>

            <!-- Navigator -->
            <div class="glass-card rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex items-center space-x-2 overflow-x-auto custom-scrollbar no-print">
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2 whitespace-nowrap">Reading Soruları:</span>
                <div id="nav-pills-reading" class="flex space-x-1.5"></div>
            </div>

            <div id="questions-container-reading" class="space-y-6"></div>

            <div class="flex justify-end pt-4 no-print">
                <button onclick="finishTest('reading')" class="bg-teal-600 hover:bg-teal-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition flex items-center space-x-2">
                    <i class="fa-solid fa-check-double"></i> <span>Reading Testini Tamamla</span>
                </button>
            </div>
        </section>

        <!-- ======================================================== -->
        <!-- TAB 6: 🧠 15 HEDEF KELİME (VOCABULARY LAB)               -->
        <!-- ======================================================== -->
        <section id="tab-content-vocab" class="hidden space-y-6">
            <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md">
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <div class="flex items-center space-x-3">
                        <div class="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center text-xl font-black">🧠</div>
                        <div>
                            <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">15 Kritik Hedef Kelime (Must-Excel Vocab)</h2>
                            <p class="text-xs text-slate-500 dark:text-slate-400">YDT ve YDS'de en sık çıkan, seçeneklerde belirleyici olan 15 akademik kelime</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 no-print">
                        <button onclick="printActiveSection()" class="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-700 transition flex items-center space-x-1.5 shadow-sm">
                            <i class="fa-solid fa-print text-pink-400"></i> <span>Kelimeleri Yazdır</span>
                        </button>
                        <button onclick="downloadActiveSectionPDF()" class="bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm transition flex items-center space-x-1.5">
                            <i class="fa-solid fa-file-pdf"></i> <span>PDF İndir</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- 15 Vocab Flashcards Grid -->
            <div id="vocab-cards-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </section>

        <!-- ======================================================== -->
        <!-- TAB 7: 📊 KARNE & GENEL İSTATİSTİKLER                    -->
        <!-- ======================================================== -->
        <section id="tab-content-analiz" class="hidden space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <!-- Total Net Card -->
                <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Toplam Net (182 Soru)</span>
                        <span class="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-sm font-bold">🎯</span>
                    </div>
                    <div class="flex items-baseline space-x-2">
                        <span id="score-total-net" class="text-4xl font-black text-slate-900 dark:text-white">0.00</span>
                        <span class="text-xs text-slate-400 font-bold">/ 170 Net</span>
                    </div>
                    <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div id="bar-total-net" class="bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-500" style="width: 0%"></div>
                    </div>
                    <p id="score-accuracy" class="text-xs text-slate-500 font-medium">Doğruluk oranı hesaplanıyor...</p>
                </div>

                <!-- Subject 1: YDT -->
                <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">🇬🇧 YDT İngilizce</span>
                        <span id="score-ydt-status" class="text-[10px] px-2 py-0.5 rounded font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">Bekliyor</span>
                    </div>
                    <div class="flex items-baseline space-x-2">
                        <span id="score-ydt-net" class="text-3xl font-black text-slate-900 dark:text-white">0.00</span>
                        <span class="text-xs text-slate-400 font-bold">/ 100 Net</span>
                    </div>
                    <div class="flex justify-between text-[11px] text-slate-500 font-mono">
                        <span id="score-ydt-d">D: 0</span>
                        <span id="score-ydt-y">Y: 0</span>
                        <span id="score-ydt-b">B: 100</span>
                    </div>
                </div>

                <!-- Subject 2: Türkçe -->
                <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🇹🇷 TYT Türkçe</span>
                        <span id="score-turkce-status" class="text-[10px] px-2 py-0.5 rounded font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">Bekliyor</span>
                    </div>
                    <div class="flex items-baseline space-x-2">
                        <span id="score-turkce-net" class="text-3xl font-black text-slate-900 dark:text-white">0.00</span>
                        <span class="text-xs text-slate-400 font-bold">/ 40 Net</span>
                    </div>
                    <div class="flex justify-between text-[11px] text-slate-500 font-mono">
                        <span id="score-turkce-d">D: 0</span>
                        <span id="score-turkce-y">Y: 0</span>
                        <span id="score-turkce-b">B: 40</span>
                    </div>
                </div>

                <!-- Subject 3: Matematik -->
                <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">📐 TYT Matematik</span>
                        <span id="score-matematik-status" class="text-[10px] px-2 py-0.5 rounded font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">Bekliyor</span>
                    </div>
                    <div class="flex items-baseline space-x-2">
                        <span id="score-matematik-net" class="text-3xl font-black text-slate-900 dark:text-white">0.00</span>
                        <span class="text-xs text-slate-400 font-bold">/ 30 Net</span>
                    </div>
                    <div class="flex justify-between text-[11px] text-slate-500 font-mono">
                        <span id="score-matematik-d">D: 0</span>
                        <span id="score-matematik-y">Y: 0</span>
                        <span id="score-matematik-b">B: 30</span>
                    </div>
                </div>
            </div>

            <!-- Graphic & Diagnostic Report -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 lg:col-span-1 flex flex-col justify-between">
                    <div>
                        <h3 class="font-extrabold text-base text-slate-900 dark:text-white mb-1">Ders Dağılım Grafiği</h3>
                        <p class="text-xs text-slate-400 mb-4">170 soru üzerindeki net başarı oranınız</p>
                        <div class="relative h-64 w-full">
                            <canvas id="scoreChart"></canvas>
                        </div>
                    </div>
                    <div class="text-center pt-3 border-t border-slate-100 dark:border-slate-800/80">
                        <span class="text-[11px] text-slate-400 font-semibold">Hedef: Her gün +5 Net Artışı</span>
                    </div>
                </div>

                <div class="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 lg:col-span-2 space-y-4">
                    <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                        <div>
                            <h3 class="font-extrabold text-base text-slate-900 dark:text-white">🎯 Yapay Zeka Koçluk & Teşhis Raporu</h3>
                            <p class="text-xs text-slate-400">Çözüm sonuçlarınıza göre otomatik kişiselleştirilen analiz</p>
                        </div>
                        <span class="px-3 py-1 rounded-full text-xs font-black bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                            ${day}. Gün Değerlendirmesi
                        </span>
                    </div>

                    <div id="diagnostic-report-text" class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-3 leading-relaxed">
                        <p>Henüz testleri tamamlamadınız. Testleri bitirdiğinizde netleriniz, yanlış yaptığınız soru tipleri ve kişisel çalışma önerileriniz burada detaylı bir şekilde raporlanacaktır.</p>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <!-- FOOTER -->
    <footer class="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 py-6 text-center text-xs text-slate-500 no-print">
        <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>YKS & YDT Sınav Merkezi • 6 Günlük Hızlandırılmış Kamp Programı</span>
            <div class="flex items-center space-x-3">
                <a href="index.html" class="hover:text-sky-500 font-bold transition">Ana Panel</a>
                <span>•</span>
                <a href="gun-1.html" class="hover:text-sky-500 transition">Gün 1</a>
                <a href="gun-2-ydt-ingilizce.html" class="hover:text-sky-500 transition">Gün 2</a>
                <a href="gun-3-tyt-turkce.html" class="hover:text-sky-500 transition">Gün 3</a>
                <a href="gun-4-tyt-matematik.html" class="hover:text-sky-500 transition">Gün 4</a>
                <a href="gun-5-ydt-reading.html" class="hover:text-sky-500 transition">Gün 5</a>
                <a href="gun-6-simulasyon.html" class="hover:text-sky-500 transition">Gün 6</a>
            </div>
        </div>
    </footer>

    <!-- SELF-HYDRATING ZERO-DEPENDENCY DATA ENGINE -->
    <script>
        (function() {
            try {
                function decodeB64Unicode(str) {
                    return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
                        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                    }).join(''));
                }
                window.EXAM_DATABASE = JSON.parse(decodeB64Unicode("${dbB64}"));
                window.TARGET_VOCABULARY_15 = JSON.parse(decodeB64Unicode("${vocabB64}"));
                console.log('✅ Day ${day} Database Hydrated: 182 Questions, 15 Vocabulary Words.');
            } catch(e) {
                console.error('Data hydration error on Day ${day}:', e);
            }
        })();
    </script>

    <!-- MAIN INTERACTIVE SPA SCRIPT -->
    <script>
        // State variables with isolated day-specific keys
        const DAY_NUM = ${day};
        const LS_PREFIX = 'yks_day' + DAY_NUM + '_';

        let studentAnswers = { ydt: {}, turkce: {}, matematik: {}, reading: {} };
        let testCompleted = { ydt: false, turkce: false, matematik: false, reading: false };
        let flaggedQuestions = {};
        let studentMistakeNotes = {};
        let learnedArchivedQuestions = {};
        let vocabBoxState = {};

        let currentActiveTab = 'plan';
        let currentHataSubject = 'all';
        let currentHataStatus = 'all';
        let scoreChartInstance = null;

        // Web Audio focus sound
        let audioCtx = null;
        let noiseNode = null;
        let isAudioPlaying = false;

        document.addEventListener('DOMContentLoaded', () => {
            loadSavedState();
            renderAllQuestions();
            renderHataDefteri();
            renderVocabCards();
            initChart();
            updateScoresAndKarne();

            // Auto-render KaTeX math
            if (window.renderMathInElement) {
                try {
                    renderMathInElement(document.body, {
                        delimiters: [
                            { left: '$$', right: '$$', display: true },
                            { left: '$', right: '$', display: false }
                        ],
                        throwOnError: false
                    });
                } catch(e) { console.warn('KaTeX render note:', e); }
            }
        });

        function loadSavedState() {
            try {
                const ans = localStorage.getItem(LS_PREFIX + 'student_answers');
                if (ans) studentAnswers = JSON.parse(ans);
                const comp = localStorage.getItem(LS_PREFIX + 'test_completed');
                if (comp) testCompleted = JSON.parse(comp);
                const flag = localStorage.getItem(LS_PREFIX + 'flagged_q');
                if (flag) flaggedQuestions = JSON.parse(flag);
                const notes = localStorage.getItem(LS_PREFIX + 'hata_defteri_notes');
                if (notes) studentMistakeNotes = JSON.parse(notes);
                const arch = localStorage.getItem(LS_PREFIX + 'hata_defteri_archived');
                if (arch) learnedArchivedQuestions = JSON.parse(arch);
            } catch(e) {
                console.warn('Storage load note:', e);
            }
        }

        function saveState() {
            try {
                localStorage.setItem(LS_PREFIX + 'student_answers', JSON.stringify(studentAnswers));
                localStorage.setItem(LS_PREFIX + 'test_completed', JSON.stringify(testCompleted));
                localStorage.setItem(LS_PREFIX + 'flagged_q', JSON.stringify(flaggedQuestions));
                localStorage.setItem(LS_PREFIX + 'hata_defteri_notes', JSON.stringify(studentMistakeNotes));
                localStorage.setItem(LS_PREFIX + 'hata_defteri_archived', JSON.stringify(learnedArchivedQuestions));
            } catch(e) {
                console.warn('Storage save note:', e);
            }
        }

        function switchTab(tabId) {
            currentActiveTab = tabId;
            const sections = document.querySelectorAll('main > section');
            sections.forEach(s => s.classList.add('hidden'));

            const targetSection = document.getElementById('tab-content-' + tabId);
            if (targetSection) targetSection.classList.remove('hidden');

            const tabButtons = document.querySelectorAll('.tab-btn');
            tabButtons.forEach(btn => {
                btn.className = 'tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10';
            });

            const activeBtn = document.getElementById('tab-btn-' + tabId);
            if (activeBtn) {
                activeBtn.className = 'tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap bg-sky-600 text-white shadow-md';
            }

            if (tabId === 'hata-defteri') renderHataDefteri();
            if (tabId === 'analiz') {
                updateScoresAndKarne();
                updateChart();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            const icon = document.getElementById('themeIcon');
            if (icon) {
                icon.className = isDark ? 'fa-solid fa-sun text-base text-amber-300' : 'fa-solid fa-moon text-base text-white';
            }
            updateChart();
        }

        // Initialize Theme from localStorage
        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            const icon = document.getElementById('themeIcon');
            if (icon) icon.className = 'fa-solid fa-sun text-base text-amber-300';
        }

        function togglePrintMenu() {
            const menu = document.getElementById('printMenuDropdown');
            if (menu) menu.classList.toggle('hidden');
        }

        function printActiveSection() {
            window.print();
        }

        function downloadActiveSectionPDF() {
            const activeSec = document.querySelector('main > section:not(.hidden)');
            if (!activeSec) return;
            const opt = {
                margin: [10, 10, 10, 10],
                filename: 'YKS_YDT_Gun_' + DAY_NUM + '_' + currentActiveTab + '.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, logging: false },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            if (typeof html2pdf !== 'undefined') {
                html2pdf().set(opt).from(activeSec).save();
            } else {
                window.print();
            }
        }

        function printMasterExamBooklet() {
            document.body.classList.add('print-mode-all');
            window.print();
            setTimeout(() => { document.body.classList.remove('print-mode-all'); }, 1000);
        }

        // Web Audio Focus Noise Generator
        function toggleFocusAudio() {
            const btn = document.getElementById('focusAudioBtn');
            const icon = document.getElementById('audioIcon');
            if (!isAudioPlaying) {
                try {
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    audioCtx = new AudioContext();
                    const bufferSize = audioCtx.sampleRate * 2;
                    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
                    const output = noiseBuffer.getChannelData(0);
                    let lastOut = 0.0;
                    for (let i = 0; i < bufferSize; i++) {
                        const white = Math.random() * 2 - 1;
                        output[i] = (lastOut + (0.02 * white)) / 1.02;
                        lastOut = output[i];
                        output[i] *= 3.5;
                    }
                    noiseNode = audioCtx.createBufferSource();
                    noiseNode.buffer = noiseBuffer;
                    noiseNode.loop = true;

                    const filter = audioCtx.createBiquadFilter();
                    filter.type = 'lowpass';
                    filter.frequency.value = 800;

                    const gainNode = audioCtx.createGain();
                    gainNode.gain.value = 0.15;

                    noiseNode.connect(filter);
                    filter.connect(gainNode);
                    gainNode.connect(audioCtx.destination);
                    noiseNode.start(0);

                    isAudioPlaying = true;
                    if (icon) icon.className = 'fa-solid fa-volume-high mr-1.5 text-emerald-400 fa-beat';
                    if (btn) btn.classList.add('ring-2', 'ring-emerald-400');
                } catch(e) {
                    console.warn('Web Audio error:', e);
                }
            } else {
                if (noiseNode) {
                    try { noiseNode.stop(); noiseNode.disconnect(); } catch(e){}
                }
                if (audioCtx) {
                    try { audioCtx.close(); } catch(e){}
                }
                isAudioPlaying = false;
                if (icon) icon.className = 'fa-solid fa-cloud-rain mr-1.5 text-cyan-300';
                if (btn) btn.classList.remove('ring-2', 'ring-emerald-400');
            }
        }

        // =========================================================
        // QUESTION RENDERING & QUIZ ENGINE
        // =========================================================
        function renderAllQuestions() {
            const db = window.EXAM_DATABASE;
            if (!db) return;
            renderSubjectQuestions('ydt', db.ydt);
            renderSubjectQuestions('turkce', db.turkce);
            renderSubjectQuestions('matematik', db.matematik);
            renderSubjectQuestions('reading', db.reading);
        }

        function renderSubjectQuestions(subj, questions) {
            const container = document.getElementById('questions-container-' + subj);
            const navContainer = document.getElementById('nav-pills-' + subj);
            if (!container || !questions) return;

            let html = '';
            let navHtml = '';

            let currentPassageId = null;

            questions.forEach((q, idx) => {
                const qNum = idx + 1;
                const selectedAns = studentAnswers[subj] && studentAnswers[subj][q.id];
                const isFinished = testCompleted[subj];
                const isFlagged = flaggedQuestions[q.id];

                // Passage block for reading questions
                if (q.passage && q.passage.title !== currentPassageId) {
                    currentPassageId = q.passage.title;
                    html += \`
                        <div class="glass-card rounded-2xl p-6 border border-teal-200 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/20 space-y-3">
                            <h3 class="font-extrabold text-base text-teal-800 dark:text-teal-300 flex items-center space-x-2">
                                <i class="fa-solid fa-book-open"></i> <span>\${q.passage.title}</span>
                            </h3>
                            <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif whitespace-pre-line select-text border-t border-teal-100 dark:border-teal-900/40 pt-3">
                                \${q.passage.text}
                            </div>
                        </div>
                    \`;
                }

                // Question Card
                html += \`
                    <div id="q-card-\${q.id}" class="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm transition">
                        <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3">
                            <div class="flex items-center space-x-2">
                                <span class="w-8 h-8 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 flex items-center justify-center font-black text-xs font-mono">
                                    \${qNum}
                                </span>
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                    🏷️ \${q.type}
                                </span>
                            </div>
                            <div class="flex items-center space-x-2 no-print">
                                <button onclick="toggleFlagQuestion('\${subj}', '\${q.id}')" class="text-xs p-2 rounded-lg transition \${isFlagged ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/50' : 'text-slate-400 hover:text-amber-500'}">
                                    <i class="fa-solid fa-bookmark"></i>
                                </button>
                                \${q.ruleExplanation ? \`
                                    <button onclick="toggleRuleBox('\${q.id}')" class="text-xs px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-bold border border-sky-200 dark:border-sky-800 hover:bg-sky-100 transition">
                                        <i class="fa-solid fa-graduation-cap mr-1"></i> Kural
                                    </button>
                                \` : ''}
                                \${q.lectureNote ? \`
                                    <button onclick="toggleRuleBox('\${q.id}')" class="text-xs px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 font-bold border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition">
                                        <i class="fa-solid fa-lightbulb mr-1"></i> İpucu
                                    </button>
                                \` : ''}
                            </div>
                        </div>

                        <!-- Rule/Tip dropdown box -->
                        \${q.ruleExplanation ? \`
                            <div id="rule-box-\${q.id}" class="hidden p-3.5 rounded-xl bg-sky-50/90 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs text-sky-950 dark:text-sky-200 space-y-1">
                                <div class="font-black text-sky-700 dark:text-sky-300 flex items-center space-x-1.5 mb-1">
                                    <i class="fa-solid fa-graduation-cap"></i> <span>Gramer Kuralı & Çözüm Formülü:</span>
                                </div>
                                \${q.ruleExplanation}
                            </div>
                        \` : ''}
                        \${q.lectureNote ? \`
                            <div id="rule-box-\${q.id}" class="hidden p-3.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-200 space-y-1">
                                <div class="font-black text-amber-700 dark:text-amber-300 flex items-center space-x-1.5 mb-1">
                                    <i class="fa-solid fa-lightbulb"></i> <span>Konu Anlatımı & Pratik Kural:</span>
                                </div>
                                \${q.lectureNote}
                            </div>
                        \` : ''}

                        <!-- Question Text -->
                        <div class="text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-medium leading-relaxed select-text">
                            \${q.questionText}
                        </div>

                        <!-- Options List -->
                        <div class="space-y-2 pt-1">
                            \${q.options.map(opt => {
                                let optClass = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300';
                                if (isFinished) {
                                    if (opt.key === q.correctAnswer) {
                                        optClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-bold';
                                    } else if (selectedAns === opt.key && selectedAns !== q.correctAnswer) {
                                        optClass = 'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 font-bold';
                                    }
                                } else if (selectedAns === opt.key) {
                                    optClass = 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 font-bold';
                                }

                                return \`
                                    <label class="option-label flex items-center p-3 rounded-xl border \${optClass} cursor-pointer transition select-none" onclick="selectAnswer('\${subj}', '\${q.id}', '\${opt.key}')">
                                        <input type="radio" name="radio-\${q.id}" value="\${opt.key}" \${selectedAns === opt.key ? 'checked' : ''} \${isFinished ? 'disabled' : ''} class="hidden">
                                        <span class="w-6 h-6 rounded-full \${selectedAns === opt.key ? 'bg-sky-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'} font-bold text-xs flex items-center justify-center mr-3 font-mono">
                                            \${opt.key}
                                        </span>
                                        <span class="text-xs sm:text-sm">\${opt.text}</span>
                                    </label>
                                \`;
                            }).join('')}
                        </div>

                        <!-- Solution Box (Shown after completion) -->
                        \${isFinished ? \`
                            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1 leading-relaxed">
                                <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">📖 ÖSYM Sınav Çözümü:</strong>
                                \${q.explanation}
                            </div>
                        \` : ''}
                    </div>
                \`;

                // Nav pill
                let pillBg = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400';
                if (isFinished) {
                    if (selectedAns === q.correctAnswer) pillBg = 'bg-emerald-600 text-white';
                    else if (selectedAns) pillBg = 'bg-rose-600 text-white';
                    else pillBg = 'bg-slate-400 text-white';
                } else if (selectedAns) {
                    pillBg = 'bg-sky-600 text-white';
                }

                navHtml += \`
                    <button onclick="scrollToQuestion('\${q.id}')" id="nav-pill-\${q.id}" class="w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center transition \${pillBg} \${isFlagged ? 'ring-2 ring-amber-400' : ''}">
                        \${qNum}
                    </button>
                \`;
            });

            container.innerHTML = html;
            if (navContainer) navContainer.innerHTML = navHtml;
        }

        function selectAnswer(subj, qId, key) {
            if (testCompleted[subj]) return;
            if (!studentAnswers[subj]) studentAnswers[subj] = {};
            studentAnswers[subj][qId] = key;
            saveState();

            const db = window.EXAM_DATABASE;
            if (db && db[subj]) {
                renderSubjectQuestions(subj, db[subj]);
            }
            renderHataDefteri();
            updateScoresAndKarne();
        }

        function toggleFlagQuestion(subj, qId) {
            flaggedQuestions[qId] = !flaggedQuestions[qId];
            saveState();
            const db = window.EXAM_DATABASE;
            if (db && db[subj]) {
                renderSubjectQuestions(subj, db[subj]);
            }
        }

        function toggleRuleBox(qId) {
            const el = document.getElementById('rule-box-' + qId);
            if (el) el.classList.toggle('hidden');
        }

        function scrollToQuestion(qId) {
            const card = document.getElementById('q-card-' + qId);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('ring-2', 'ring-sky-500');
                setTimeout(() => { card.classList.remove('ring-2', 'ring-sky-500'); }, 1500);
            }
        }

        function finishTest(subj) {
            testCompleted[subj] = true;
            saveState();

            const db = window.EXAM_DATABASE;
            if (db && db[subj]) {
                renderSubjectQuestions(subj, db[subj]);
            }
            renderHataDefteri();
            updateScoresAndKarne();

            // Confetti
            if (typeof confetti !== 'undefined') {
                confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
            }

            switchTab('analiz');
        }

        // =========================================================
        // HATA DEFTERİ ENGINE
        // =========================================================
        function filterHataSubject(subj) {
            currentHataSubject = subj;
            document.querySelectorAll('.hata-subj-btn').forEach(btn => {
                btn.className = 'hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition';
            });
            const activeBtn = document.getElementById('hata-filter-' + subj);
            if (activeBtn) {
                activeBtn.className = 'hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 transition';
            }
            renderHataDefteri();
        }

        function filterHataStatus(stat) {
            currentHataStatus = stat;
            document.querySelectorAll('.hata-stat-btn').forEach(btn => {
                btn.className = 'hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition';
            });
            const activeBtn = document.getElementById('hata-stat-' + stat);
            if (activeBtn) {
                activeBtn.className = 'hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 text-white transition';
            }
            renderHataDefteri();
        }

        function saveStudentMistakeNote(qId, text) {
            studentMistakeNotes[qId] = text;
            saveState();
        }

        function toggleLearnedArchived(qId) {
            learnedArchivedQuestions[qId] = !learnedArchivedQuestions[qId];
            saveState();
            renderHataDefteri();
        }

        function retryQuestionInHata(subj, qId) {
            if (studentAnswers[subj]) {
                delete studentAnswers[subj][qId];
                testCompleted[subj] = false;
                saveState();
            }
            switchTab(subj);
            setTimeout(() => { scrollToQuestion(qId); }, 200);
        }

        function renderHataDefteri() {
            const container = document.getElementById('hata-defteri-list');
            const tagsContainer = document.getElementById('hata-category-tags');
            const badgeHataHeader = document.getElementById('badge-hata-count');
            const db = window.EXAM_DATABASE;
            if (!container || !db) return;

            let totalMistakesCount = 0;
            let filteredList = [];
            let questionTypeCounts = {};

            const subjects = ['ydt', 'turkce', 'matematik', 'reading'];
            subjects.forEach(subj => {
                const questions = db[subj] || [];
                const subjLabel = subj === 'ydt' ? '🇬🇧 YDT İngilizce' : (subj === 'turkce' ? '🇹🇷 TYT Türkçe' : (subj === 'matematik' ? '📐 TYT Matematik' : '📚 YDT Reading'));

                questions.forEach((q, idx) => {
                    const ans = studentAnswers[subj] && studentAnswers[subj][q.id];
                    const isWrong = ans && ans !== q.correctAnswer;
                    const isBlank = !ans && testCompleted[subj];
                    const isLearned = learnedArchivedQuestions[q.id] || false;

                    if (isWrong || isBlank) {
                        totalMistakesCount++;
                        const catKey = q.type || 'Genel Soru';
                        questionTypeCounts[catKey] = (questionTypeCounts[catKey] || 0) + 1;

                        let matchSubj = (currentHataSubject === 'all' || currentHataSubject === subj);
                        let matchStatus = true;
                        if (currentHataStatus === 'wrong' && !isWrong) matchStatus = false;
                        if (currentHataStatus === 'blank' && !isBlank) matchStatus = false;
                        if (currentHataStatus === 'learned' && !isLearned) matchStatus = false;
                        if (currentHataStatus !== 'learned' && isLearned) matchStatus = false;

                        if (matchSubj && matchStatus) {
                            filteredList.push({
                                subject: subj,
                                subjLabel,
                                qNum: idx + 1,
                                question: q,
                                studentAnswer: ans,
                                isWrong,
                                isBlank,
                                isLearned
                            });
                        }
                    }
                });
            });

            if (badgeHataHeader) badgeHataHeader.innerText = totalMistakesCount + ' Soru';

            // Render category tags
            if (tagsContainer) {
                const entries = Object.entries(questionTypeCounts);
                if (entries.length === 0) {
                    tagsContainer.innerHTML = '<span class="text-xs text-slate-400 italic">Henüz kaydedilmiş hata bulunmuyor. Testi çözdüğünüzde hatalarınız otomatik olarak burada analiz edilecektir.</span>';
                } else {
                    tagsContainer.innerHTML = entries.sort((a,b) => b[1]-a[1]).map(([type, cnt]) => \`
                        <span class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800">
                            <span>\${type}</span>
                            <span class="bg-rose-600 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-mono font-black">\${cnt}</span>
                        </span>
                    \`).join('');
                }
            }

            // Render cards
            if (filteredList.length === 0) {
                container.innerHTML = \`
                    <div class="glass-card rounded-2xl p-10 text-center space-y-3 border border-slate-200 dark:border-slate-800">
                        <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center text-2xl shadow-sm">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <h3 class="font-extrabold text-base text-slate-900 dark:text-white">Seçilen Filtrede Kayıtlı Hata Bulunmuyor!</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                            \${totalMistakesCount === 0 ? 'Tebrikler! Henüz kaydedilmiş bir yanlışınız yok. Testleri çözmeye başladığınızda hatalarınız otomatik olarak burada toplanacaktır.' : 'Bu filtre kriterine uyan hata yok. Filtreleri değiştirerek diğer derslerdeki hatalarınızı inceleyebilirsiniz.'}
                        </p>
                    </div>
                \`;
            } else {
                container.innerHTML = filteredList.map(item => {
                    const q = item.question;
                    const note = studentMistakeNotes[q.id] || '';

                    return \`
                        <div class="glass-card rounded-2xl p-5 sm:p-6 border \${item.isWrong ? 'border-rose-300 dark:border-rose-900/60' : 'border-amber-300 dark:border-amber-900/60'} shadow-sm space-y-4">
                            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                                <div class="flex items-center space-x-2">
                                    <span class="w-8 h-8 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 flex items-center justify-center font-black text-xs font-mono">
                                        \${item.qNum}
                                    </span>
                                    <div>
                                        <span class="font-black text-xs text-slate-900 dark:text-white mr-2">\${item.subjLabel}</span>
                                        <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                            🏷️ \${q.type}
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-2 text-xs">
                                    <span class="px-2.5 py-1 rounded-lg font-bold \${item.isWrong ? 'bg-rose-600 text-white' : 'bg-amber-500 text-slate-900'}">
                                        \${item.isWrong ? \`Cevabınız: (\${item.studentAnswer}) ❌\` : 'Boş Bırakıldı ⚠️'}
                                    </span>
                                    <span class="px-2.5 py-1 rounded-lg font-bold bg-emerald-600 text-white">
                                        Doğru: (\${q.correctAnswer}) ✅
                                    </span>
                                </div>
                            </div>

                            <div class="text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-medium leading-relaxed select-text">
                                \${q.questionText}
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                \${q.options.map(opt => \`
                                    <div class="p-2.5 rounded-xl border \${opt.key === q.correctAnswer ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold' : (opt.key === item.studentAnswer ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-bold' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400')} flex items-center">
                                        <span class="w-5 h-5 rounded-full \${opt.key === q.correctAnswer ? 'bg-emerald-600 text-white' : (opt.key === item.studentAnswer ? 'bg-rose-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400')} font-bold text-[10px] flex items-center justify-center mr-2">\${opt.key}</span>
                                        <span class="truncate">\${opt.text}</span>
                                    </div>
                                \`).join('')}
                            </div>

                            \${q.ruleExplanation ? \`
                                <div class="p-3.5 rounded-xl bg-sky-50/90 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs text-sky-950 dark:text-sky-200">
                                    <strong class="text-sky-700 dark:text-sky-300 block mb-1">🎓 Gramer Kuralı:</strong>
                                    \${q.ruleExplanation}
                                </div>
                            \` : ''}
                            \${q.lectureNote ? \`
                                <div class="p-3.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-200">
                                    <strong class="text-amber-700 dark:text-amber-300 block mb-1">💡 Konu Notu & İpucu:</strong>
                                    \${q.lectureNote}
                                </div>
                            \` : ''}

                            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">📖 ÖSYM Sınav Çözümü & Analiz:</strong>
                                \${q.explanation}
                            </div>

                            <div class="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                                <label class="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center">
                                    <i class="fa-solid fa-pen-to-square text-indigo-500 mr-1.5"></i> Bu Soru İçin Özel Notunuz / Tekrar Etmeme Stratejiniz:
                                </label>
                                <textarea onchange="saveStudentMistakeNote('\${q.id}', this.value)" placeholder="Örn: Bu soruda bağlacın zıtlık bildirdiğini gözden kaçırdım, bir dahakine 'however/while' köklerine dikkat edeceğim..." class="w-full text-xs p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-rose-500 focus:outline-none custom-scrollbar" rows="2">\${note}</textarea>
                            </div>

                            <div class="flex flex-wrap items-center justify-between gap-2 pt-1 no-print">
                                <button onclick="retryQuestionInHata('\${item.subject}', '\${q.id}')" class="text-xs font-bold px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white shadow-sm transition flex items-center space-x-1.5">
                                    <i class="fa-solid fa-rotate-right"></i> <span>Bu Soruyu Yeniden Çöz</span>
                                </button>
                                <button onclick="toggleLearnedArchived('\${q.id}')" class="text-xs font-bold px-3.5 py-2 rounded-xl border transition flex items-center space-x-1.5 \${item.isLearned ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600'}">
                                    <i class="fa-solid \${item.isLearned ? 'fa-circle-check' : 'fa-check'}"></i>
                                    <span>\${item.isLearned ? '✅ Öğrenildi (Arşivde)' : 'Öğrendim Olarak İşaretle'}</span>
                                </button>
                            </div>
                        </div>
                    \`;
                }).join('');
            }
        }

        function downloadHataDefteriPDF() {
            switchTab('hata-defteri');
            const listEl = document.getElementById('hata-defteri-list');
            const countBadge = document.getElementById('badge-hata-count');

            if (!listEl || (countBadge && countBadge.innerText.startsWith('0'))) {
                alert('Hata Defterinizde henüz kayıtlı bir soru bulunmuyor. Test çözüp yanlış yaptığınızda veya boş bıraktığınızda sorular buraya kaydedilir ve PDF olarak indirilebilir.');
                return;
            }

            const btn = document.getElementById('pdfDownloadBtn');
            const originalHtml = btn ? btn.innerHTML : '';
            if (btn) btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-amber-300 mr-1.5"></i> PDF Hazırlanıyor...';

            const printWrapper = document.createElement('div');
            printWrapper.style.padding = '25px';
            printWrapper.style.backgroundColor = '#ffffff';
            printWrapper.style.color = '#0f172a';
            printWrapper.style.fontFamily = 'Plus Jakarta Sans, sans-serif';

            const now = new Date();
            const dateStr = now.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });

            printWrapper.innerHTML = \`
                <div style="border-bottom: 3px solid #e11d48; padding-bottom: 15px; margin-bottom: 25px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <h1 style="font-size: 24px; font-weight: 900; color: #881337; margin: 0 0 4px 0;">🎯 YKS & YDT Akıllı Hata Defteri</h1>
                            <p style="font-size: 13px; color: #475569; margin: 0; font-weight: 600;">\${DAY_NUM}. Gün Bireysel Hata Analiz, Soru Tipleri & Çözüm Kitapçığı</p>
                        </div>
                        <div style="text-align: right; font-size: 11px; color: #64748b;">
                            <span>Tarih: \${dateStr}</span><br>
                            <span style="font-weight: bold; color: #e11d48;">Toplam Kayıt: \${countBadge ? countBadge.innerText : ''}</span>
                        </div>
                    </div>
                </div>
                <div>\${listEl.innerHTML}</div>
            \`;

            const printBtns = printWrapper.querySelectorAll('button, .no-print');
            printBtns.forEach(b => b.remove());

            const opt = {
                margin: [10, 10, 10, 10],
                filename: 'YKS_YDT_Gun_' + DAY_NUM + '_Akilli_Hata_Defteri.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, logging: false },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            if (typeof html2pdf !== 'undefined') {
                html2pdf().set(opt).from(printWrapper).save().then(() => {
                    if (btn) btn.innerHTML = originalHtml;
                }).catch(err => {
                    console.error('PDF error:', err);
                    window.print();
                    if (btn) btn.innerHTML = originalHtml;
                });
            } else {
                window.print();
                if (btn) btn.innerHTML = originalHtml;
            }
        }

        // =========================================================
        // VOCABULARY LEITNER FLASHCARDS
        // =========================================================
        function renderVocabCards() {
            const container = document.getElementById('vocab-cards-grid');
            const list = window.TARGET_VOCABULARY_15;
            if (!container || !list) return;

            container.innerHTML = list.map((v, idx) => \`
                <div class="flashcard cursor-pointer group perspective p-1" onclick="this.classList.toggle('flipped')">
                    <div class="flashcard-inner relative w-full h-56 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex flex-col justify-between">
                        <div class="flashcard-front absolute inset-0 p-5 flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl">
                            <div class="flex items-center justify-between">
                                <span class="w-7 h-7 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 font-mono font-bold text-xs flex items-center justify-center">\${idx + 1}</span>
                                <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">\${v.partOfSpeech}</span>
                                <button onclick="event.stopPropagation(); speakWord('\${v.word}')" class="text-slate-400 hover:text-pink-500 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition no-print" title="Sesli Dinle">
                                    <i class="fa-solid fa-volume-high"></i>
                                </button>
                            </div>
                            <div class="text-center py-2">
                                <h3 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight">\${v.word}</h3>
                                <p class="text-xs text-slate-400 font-mono mt-0.5">\${v.phonetic}</p>
                            </div>
                            <div class="text-center text-xs text-pink-600 dark:text-pink-400 font-semibold flex items-center justify-center space-x-1 no-print">
                                <i class="fa-solid fa-rotate mr-1"></i> <span>Tıkla ve Anlamını Gör</span>
                            </div>
                        </div>

                        <div class="flashcard-back absolute inset-0 p-5 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl border border-pink-500/40">
                            <div>
                                <div class="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
                                    <span class="font-black text-pink-300 text-sm">\${v.word}</span>
                                    <span class="text-xs text-emerald-400 font-bold">\${v.turkishMeaning}</span>
                                </div>
                                <p class="text-[11px] text-slate-300 leading-snug mb-2"><b>Synonyms:</b> \${v.synonyms.join(', ')}</p>
                                <p class="text-[11px] text-slate-300 leading-snug mb-2"><b>Antonyms:</b> \${v.antonyms.join(', ')}</p>
                            </div>
                            <div class="bg-black/30 p-2.5 rounded-lg border border-white/10 text-[11px] text-slate-200 italic leading-relaxed">
                                "\${v.exampleSentence}"
                            </div>
                        </div>
                    </div>
                </div>
            \`).join('');
        }

        function speakWord(word) {
            if ('speechSynthesis' in window) {
                const utter = new SpeechSynthesisUtterance(word);
                utter.lang = 'en-US';
                utter.rate = 0.9;
                window.speechSynthesis.speak(utter);
            }
        }

        // =========================================================
        // SCORING, ANALYTICS & DIAGNOSTICS
        // =========================================================
        function calculateSubjectScore(subj) {
            const db = window.EXAM_DATABASE;
            if (!db || !db[subj]) return { correct: 0, wrong: 0, blank: 0, net: 0, total: 0 };
            const questions = db[subj];
            let correct = 0, wrong = 0, blank = 0;

            questions.forEach(q => {
                const ans = studentAnswers[subj] && studentAnswers[subj][q.id];
                if (!ans) blank++;
                else if (ans === q.correctAnswer) correct++;
                else wrong++;
            });

            const net = Math.max(0, correct - (wrong / 4));
            return { correct, wrong, blank, net: Number(net.toFixed(2)), total: questions.length };
        }

        function updateScoresAndKarne() {
            const ydt = calculateSubjectScore('ydt');
            const tr = calculateSubjectScore('turkce');
            const mat = calculateSubjectScore('matematik');
            const rd = calculateSubjectScore('reading');

            const totalNet = Number((ydt.net + tr.net + mat.net).toFixed(2));
            const totalQuestions = ydt.total + tr.total + mat.total;
            const totalCorrect = ydt.correct + tr.correct + mat.correct;
            const totalWrong = ydt.wrong + tr.wrong + mat.wrong;

            // Update Total
            const totalNetEl = document.getElementById('score-total-net');
            const totalBarEl = document.getElementById('bar-total-net');
            const accEl = document.getElementById('score-accuracy');

            if (totalNetEl) totalNetEl.innerText = totalNet.toFixed(2);
            if (totalBarEl) totalBarEl.style.width = Math.min(100, (totalNet / 170) * 100) + '%';
            if (accEl) {
                const answered = totalCorrect + totalWrong;
                const rate = answered > 0 ? ((totalCorrect / answered) * 100).toFixed(1) : 0;
                accEl.innerText = 'Cevaplanan ' + answered + ' soruda Doğruluk Oranı: %' + rate;
            }

            // Update Subjects
            updateSubjectCard('ydt', ydt);
            updateSubjectCard('turkce', tr);
            updateSubjectCard('matematik', mat);

            // Update Diagnostic text
            const reportEl = document.getElementById('diagnostic-report-text');
            if (reportEl) {
                let diagnostic = '';
                if (!testCompleted.ydt && !testCompleted.turkce && !testCompleted.matematik) {
                    diagnostic = '<p class="text-slate-400 italic">Testlerinizi tamamladığınızda detaylı net analiziniz ve soru tipi eksikleriniz burada görüntülenecektir.</p>';
                } else {
                    diagnostic = \`
                        <div class="space-y-3">
                            <div class="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs">
                                <strong>🎯 ${day}. Gün Genel Durum:</strong> Toplam 170 soru üzerinden <b>\${totalNet.toFixed(2)} Net</b> elde ettiniz. (Doğru: \${totalCorrect}, Yanlış: \${totalWrong}).
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                                <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800">
                                    <b>🇬🇧 YDT İngilizce:</b> \${ydt.net} Net (\${ydt.correct}D / \${ydt.wrong}Y)
                                </div>
                                <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                                    <b>🇹🇷 TYT Türkçe:</b> \${tr.net} Net (\${tr.correct}D / \${tr.wrong}Y)
                                </div>
                                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                                    <b>📐 TYT Matematik:</b> \${mat.net} Net (\${mat.correct}D / \${mat.wrong}Y)
                                </div>
                            </div>
                            <p class="text-xs text-slate-600 dark:text-slate-400">
                                💡 <b>Koçluk Tavsiyesi:</b> Yanlış yaptığınız soruları Hata Defteri sekmesinden konu etiketlerine göre inceleyin ve sınava kadar haftalık tekrar yapmayı unutmayın!
                            </p>
                        </div>
                    \`;
                }
                reportEl.innerHTML = diagnostic;
            }
        }

        function updateSubjectCard(subj, data) {
            const netEl = document.getElementById('score-' + subj + '-net');
            const dEl = document.getElementById('score-' + subj + '-d');
            const yEl = document.getElementById('score-' + subj + '-y');
            const bEl = document.getElementById('score-' + subj + '-b');
            const statEl = document.getElementById('score-' + subj + '-status');

            if (netEl) netEl.innerText = data.net.toFixed(2);
            if (dEl) dEl.innerText = 'D: ' + data.correct;
            if (yEl) yEl.innerText = 'Y: ' + data.wrong;
            if (bEl) bEl.innerText = 'B: ' + data.blank;
            if (statEl) {
                if (testCompleted[subj]) {
                    statEl.innerText = 'Tamamlandı ✅';
                    statEl.className = 'text-[10px] px-2 py-0.5 rounded font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400';
                } else {
                    statEl.innerText = 'Devam Ediyor';
                    statEl.className = 'text-[10px] px-2 py-0.5 rounded font-bold bg-slate-100 dark:bg-slate-800 text-slate-500';
                }
            }
        }

        function initChart() {
            try {
                const ctx = document.getElementById('scoreChart');
                if (!ctx || typeof Chart === 'undefined') return;

                const isDark = document.documentElement.classList.contains('dark');
                const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)';
                const textColor = isDark ? '#94a3b8' : '#64748b';

                scoreChartInstance = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['YDT İngilizce (100)', 'TYT Türkçe (40)', 'TYT Mat (30)'],
                        datasets: [
                            {
                                label: 'Net Sayısı',
                                data: [0, 0, 0],
                                backgroundColor: ['#0ea5e9', '#10b981', '#f59e0b'],
                                borderRadius: 8
                            },
                            {
                                label: 'Maksimum Soru',
                                data: [100, 40, 30],
                                backgroundColor: isDark ? '#334155' : '#e2e8f0',
                                borderRadius: 8
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: { beginAtZero: true, max: 105, grid: { color: gridColor }, ticks: { color: textColor } },
                            x: { grid: { display: false }, ticks: { color: textColor } }
                        },
                        plugins: { legend: { labels: { color: textColor } } }
                    }
                });
            } catch(e) {
                console.warn('Chart init skipped:', e);
            }
        }

        function updateChart() {
            try {
                if (!scoreChartInstance) return;
                const ydt = calculateSubjectScore('ydt');
                const tr = calculateSubjectScore('turkce');
                const mat = calculateSubjectScore('matematik');
                scoreChartInstance.data.datasets[0].data = [ydt.net, tr.net, mat.net];
                scoreChartInstance.update();
            } catch(e) {
                console.warn('Chart update skipped:', e);
            }
        }
    </script>
</body>
</html>`;
}

console.log('=== GENERATING ALL 6 DAY HTML PAGES ===\n');

daysData.forEach(d => {
  const content = generateHtmlForDay(d);
  fs.writeFileSync(d.fileName, content, 'utf8');
  console.log(`✓ Generated ${d.fileName} (${(content.length / 1024).toFixed(1)} KB)`);
});

// Also create / update sinav_merkezi.html as identical to gun-1.html for compatibility
fs.writeFileSync('sinav_merkezi.html', generateHtmlForDay(daysData[0]), 'utf8');
console.log('✓ Updated sinav_merkezi.html as master Day 1 mirror');

console.log('\n🎉 ALL HTML FILES SUCCESSFULLY GENERATED!');
