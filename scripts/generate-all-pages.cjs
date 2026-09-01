const fs = require('fs');
const path = require('path');

const day1 = JSON.parse(fs.readFileSync('scripts/day1-database.json', 'utf8'));
const day2 = require('./day2-data.cjs');
const day3 = require('./day3-data.cjs');
const day4 = require('./day4-data.cjs');
const day5 = require('./day5-data.cjs');
const day6 = require('./day6-data.cjs');
const day7 = require('./day7-data.cjs');
const day8 = require('./day8-data.cjs');
const day9 = require('./day9-data.cjs');
const day10 = require('./day10-data.cjs');
const day11 = require('./day11-data.cjs');
const day12 = require('./day12-data.cjs');
const day13 = require('./day13-data.cjs');
const day14 = require('./day14-data.cjs');

const daysData = [
  {
    day: 1,
    fileName: 'gun-1.html',
    title: 'Gün 1 — Temel Değerlendirme & Teşhis',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 182 Soru & 15 Hedef Kelime',
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
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 182 Soru & 15 Hedef Kelime',
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
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 182 Soru & 15 Hedef Kelime',
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
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 182 Soru & 15 Hedef Kelime',
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
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 182 Soru & 15 Hedef Kelime',
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
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 182 Soru & 15 Hedef Kelime',
    themeBadge: '6. GÜN: BÜYÜK SINAV SİMÜLASYONU & FİNAL',
    planDescription: 'Gerçek sınav saatlerine ve kurallarına tam uyumlu tam kapsamlı maraton denemesi. Optik odaklanma ve sınav stratejisi provası.',
    planSchedule: [
      { time: '10:15 - 12:30', title: '🇹🇷📐 TYT Türkçe & Matematik Maratonu', desc: '70 soru tam süre kontrolü ile çözülür.' },
      { time: '14:00 - 16:00', title: '🇬🇧 YDT İngilizce & Reading Büyük Deneme', desc: '100 soru + 12 reading sorusu ardışık çözülür.' },
      { time: '16:15 - 17:00', title: '🧠 15 Büyük Final Kelimesi', desc: '6 günün en kritik kelime havuzunun Leitner kutu tekrarı.' },
      { time: '17:00 - 18:00', title: '📊 Büyük Karne & 6 Günlük Hata Defteri Değerlendirmesi', desc: 'Toplam netler, başarı grafiği ve eksik kalan son noktaların analizi.' }
    ],
    database: day6.database,
    vocab: day6.vocab
  },
  {
    day: 7,
    fileName: 'gun-7.html',
    title: 'Gün 7 — TYT Matematik & YDT Cümlecik Güçlendirme',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 182 Soru & 15 Hedef Kelime',
    themeBadge: '7. GÜN: TYT MATEMATİK & YDT CÜMLECİK GÜÇLENDİRME',
    planDescription: 'Temel kavramlar, işlem önceliği ve basamak analizi ile YDT İngilizce cümle tamamlama ve bağlaç sorularını pekiştirin.',
    planSchedule: [
      { time: '09:00 - 11:00', title: '🇬🇧 100 YDT Gramer & Cümlecikler', desc: 'No sooner than, hardly when, bağlaçlar ve zaman uyumu.' },
      { time: '11:15 - 12:00', title: '🇹🇷 40 TYT Türkçe Kademeli Soru Çözümü', desc: 'Sözcükte anlamdan karma dil bilgisi ve paragrafa.' },
      { time: '13:00 - 13:50', title: '📐 30 TYT Matematik Temel Sayılar', desc: 'İşlem sırası, basamak analizi ve bölünebilme.' },
      { time: '14:00 - 14:30', title: '📚 3 YDT Reading Pasajı', desc: 'Grafen, Ağaç Mantar Ağları ve İskenderiye Kütüphanesi.' },
      { time: '15:00 - 15:30', title: '🧠 15 Kritik Hedef Kelime', desc: 'Substitute, Perplexing, Unanimously flashcard çalışması.' },
      { time: '16:00 - 17:00', title: '🎯 Hata Defteri & PDF Analiz Kitapçığı', desc: 'Hata yapılan soru tipleri ve tekrar notları.' }
    ],
    database: day7.database,
    vocab: day7.vocab
  },
  {
    day: 8,
    fileName: 'gun-8.html',
    title: 'Gün 8 — YDT & TYT + 30 Soru TYT Fen Bilimleri (Fizik, Kimya, Biyoloji)',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 30 Fen + 12 Reading • 212 Soru & 15 Hedef Kelime',
    themeBadge: '8. GÜN: YDT & TYT + 30 TYT FEN BİLİMLERİ',
    planDescription: 'YDT ve TYT temel derslerin yanı sıra 30 soruluk Fizik, Kimya ve Biyoloji denemesi ile fen netlerinizi zirveye taşıyın.',
    planSchedule: [
      { time: '09:00 - 11:00', title: '🇬🇧 100 YDT İleri Soru Bankası', desc: 'Devrik conditional yapılar ve clause analizleri.' },
      { time: '11:15 - 12:00', title: '🔬 30 TYT Fen Bilimleri Denemesi', desc: '10 Fizik + 10 Kimya + 10 Biyoloji soru çözümü ve detaylı açıklamalar.' },
      { time: '13:00 - 13:45', title: '🇹🇷 40 TYT Türkçe Denemesi', desc: 'Paragraf analizleri ve karma dil bilgisi soruları.' },
      { time: '14:00 - 14:50', title: '📐 30 TYT Matematik Temel İnşa', desc: 'Mutlak değer eşitsizlikleri ve rasyonel sayılar.' },
      { time: '15:00 - 15:30', title: '🧠 15 Yeni Kelime', desc: 'Dispatch, Exquisite, Bottleneck, Synaptic flashcardları.' },
      { time: '16:00 - 17:00', title: '🎯 Fen & Genel Hata Defteri Analizi', desc: 'Fen bilimleri ve genel soru yanlışlarının analizi.' }
    ],
    database: day8.database,
    vocab: day8.vocab
  },
  {
    day: 9,
    fileName: 'gun-9.html',
    title: 'Gün 9 — TYT Türkçe Sözcük Türleri & Paragraf Çıkarımları',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 182 Soru & 15 Hedef Kelime',
    themeBadge: '9. GÜN: TYT TÜRKÇE SÖZCÜK TÜRLERİ & PARAGRAF',
    planDescription: 'Sıfat, zamir, zarf, edat ve fiilimsileri kusursuzlaştırın; paragrafta yardımcı düşünce ve çıkarım sorularında hız kazanın.',
    planSchedule: [
      { time: '09:00 - 09:45', title: '🇹🇷 40 TYT Türkçe Sözcük Türleri & Paragraf', desc: 'Tamamı kademeli zorlaşan 40 soru.' },
      { time: '10:00 - 12:00', title: '🇬🇧 100 YDT Gramer & Okuma Sorusu', desc: 'Only after devrik yapıları ve anlam bütünlüğü.' },
      { time: '13:00 - 13:50', title: '📐 30 TYT Matematik Üslü & Köklü Sayılar', desc: 'Üs kuralları, kök dışına çıkarma ve denklemler.' },
      { time: '14:00 - 14:30', title: '📚 3 YDT Reading Pasajı', desc: 'Epigenetik, Tarımsal Ormancılık ve Rosetta Taşı.' },
      { time: '15:00 - 15:30', title: '🧠 15 Hedef Kelime', desc: 'Purify, Arid, Burgeoning, Monoculture ezberi.' },
      { time: '16:00 - 17:00', title: '🎯 Türkçe Odaklı Hata Defteri İncelemesi', desc: 'Sözcük türü ve paragraf analiz notları.' }
    ],
    database: day9.database,
    vocab: day9.vocab
  },
  {
    day: 10,
    fileName: 'gun-10.html',
    title: 'Gün 10 — YDT & TYT + 30 Soru TYT Sosyal Bilimler (Tarih, Coğrafya, Felsefe, Din)',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 30 Sosyal + 12 Reading • 212 Soru & 15 Hedef Kelime',
    themeBadge: '10. GÜN: YDT & TYT + 30 TYT SOSYAL BİLİMLER',
    planDescription: 'Tarih, Coğrafya, Felsefe ve Din Kültürü derslerinden oluşan 30 soruluk çözümlü TYT Sosyal Bilimler denemesi ile netlerinizi sabitleyin.',
    planSchedule: [
      { time: '09:00 - 11:00', title: '🇬🇧 100 YDT İngilizce Soru Bankası', desc: 'Bağlaçlar, prepositionlar ve çeviri soruları.' },
      { time: '11:15 - 12:00', title: '🏛️ 30 TYT Sosyal Bilimler Denemesi', desc: '10 Tarih + 10 Coğrafya + 5 Felsefe + 5 Din Kültürü çözümü.' },
      { time: '13:00 - 13:45', title: '🇹🇷 40 TYT Türkçe Denemesi', desc: 'Anlatım bozuklukları ve akışı bozan cümleler.' },
      { time: '14:00 - 14:50', title: '📐 30 TYT Matematik Oran-Orantı & Problemler', desc: 'İşçi, havuz ve yaş problemleri.' },
      { time: '15:00 - 15:30', title: '🧠 15 Yeni Kelime', desc: 'Safeguard, Comprehensive, Dissipation, Syncretism.' },
      { time: '16:00 - 17:00', title: '🎯 Sosyal Bilimler Hata Defteri Tekrarı', desc: 'Tarih ve coğrafya kavram notları.' }
    ],
    database: day10.database,
    vocab: day10.vocab
  },
  {
    day: 11,
    fileName: 'gun-11.html',
    title: 'Gün 11 — TYT Matematik Problemler & Geometri İleri Analiz',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 182 Soru & 15 Hedef Kelime',
    themeBadge: '11. GÜN: TYT MATEMATİK PROBLEMLER & GEOMETRİ',
    planDescription: 'Hız problemleri, yüzde-kar-zarar hesapları ve üçgende açılar/alan konularında modelleme hızınızı artırın.',
    planSchedule: [
      { time: '09:00 - 09:50', title: '📐 30 TYT Matematik & Geometri Odak Sınavı', desc: 'Hareket, karışım ve özel üçgen soruları.' },
      { time: '10:05 - 12:05', title: '🇬🇧 100 YDT Relative Clauses & Çeviri', desc: 'Preposition + which/whom ve noun clauses.' },
      { time: '13:00 - 13:45', title: '🇹🇷 40 TYT Türkçe Cümle Türleri & Ana Fikir', desc: 'Cümle analizi ve ana düşünce soruları.' },
      { time: '14:00 - 14:30', title: '📚 3 YDT Reading Pasajı', desc: 'CRISPR Baz Düzenleme, Gotik Katedraller ve Polinezya Denizciliği.' },
      { time: '15:00 - 15:30', title: '🧠 15 Hedef Kelime', desc: 'Recalibrate, Profound, Cleave, Buttress kartları.' },
      { time: '16:00 - 17:00', title: '🎯 Matematik Çözüm Notları & Hata Defteri', desc: 'Problem modelleme ipuçları tekrarı.' }
    ],
    database: day11.database,
    vocab: day11.vocab
  },
  {
    day: 12,
    fileName: 'gun-12.html',
    title: 'Gün 12 — YDT & TYT + 30 Soru TYT Fen Bilimleri 2 (Deney & Mantık)',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 30 Fen + 12 Reading • 212 Soru & 15 Hedef Kelime',
    themeBadge: '12. GÜN: YDT & TYT + 30 TYT FEN BİLİMLERİ 2',
    planDescription: 'Isı-sıcaklık, kaldırma kuvveti, kimyasal bağlar, asit-baz ve hücre bölünmeleri/kalıtım konularında 30 soruluk tam çözümlü deney denemesi.',
    planSchedule: [
      { time: '09:00 - 11:00', title: '🇬🇧 100 YDT Modals & Çıkarım Soruları', desc: 'Must have V3, should have V3 ve restatement.' },
      { time: '11:15 - 12:00', title: '🔬 30 TYT Fen Bilimleri 2 Denemesi', desc: '10 Fizik + 10 Kimya + 10 Biyoloji deney/mantık soruları.' },
      { time: '13:00 - 13:45', title: '🇹🇷 40 TYT Türkçe Paragraf Tamamlama', desc: 'Sonuç cümleleri ve anlatım teknikleri.' },
      { time: '14:00 - 14:50', title: '📐 30 TYT Matematik Fonksiyonlar & Kümeler', desc: 'Bileşke fonksiyon, ters fonksiyon ve Venn şemaları.' },
      { time: '15:00 - 15:30', title: '🧠 15 Yeni Kelime', desc: 'Curtail, Intact, Entanglement, Perturb ezberi.' },
      { time: '16:00 - 17:00', title: '🎯 Fen 2 & Hata Defteri Raporu', desc: 'Deney soruları analiz kitapçığı çıktısı.' }
    ],
    database: day12.database,
    vocab: day12.vocab
  },
  {
    day: 13,
    fileName: 'gun-13.html',
    title: 'Gün 13 — YDT Reading Akademik Metinler & Çeviri Ustalığı',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 12 Reading • 182 Soru & 15 Hedef Kelime',
    themeBadge: '13. GÜN: YDT READING & AKADEMİK ÇEVİRİ',
    planDescription: 'C1/C2 düzeyindeki akademik makaleleri hızlı okuma, bağlamdan anlam çıkarma ve İngilizce-Türkçe karşılıklı çeviride hız kazanma.',
    planSchedule: [
      { time: '09:00 - 09:40', title: '📚 YDT Reading Akademik Pasajlar', desc: 'Sentetik Elmas (CVD), Derin Deniz Biyolüminesansı ve Teotihuacan.' },
      { time: '10:00 - 12:00', title: '🇬🇧 100 YDT Çeviri ve Cümle Tamamlama', desc: 'Notwithstanding ve zıtlık bağlaçları.' },
      { time: '13:00 - 13:45', title: '🇹🇷 40 TYT Türkçe Paragrafı İkiye Bölme', desc: 'Düşünce ekseni değişimi ve anlatım ilkeleri.' },
      { time: '14:00 - 14:50', title: '📐 30 TYT Matematik Mantık & Kümeler', desc: 'Kümelerde birleşim/kesişim ve mantık önermeleri.' },
      { time: '15:00 - 15:30', title: '🧠 15 Akademik Kelime', desc: 'Synthesize, Lucid, Precipitate, Bioluminescence.' },
      { time: '16:00 - 17:00', title: '🎯 Reading & Çeviri Hata Defteri İncelemesi', desc: 'Akademik metin notları ve kelime tekrarı.' }
    ],
    database: day13.database,
    vocab: day13.vocab
  },
  {
    day: 14,
    fileName: 'gun-14.html',
    title: 'Gün 14 — Büyük Kamp Finali + 30 Soru TYT Sosyal Bilimler 2',
    subtitle: '100 YDT + 40 Türkçe + 30 Matematik + 30 Sosyal + 12 Reading • 212 Soru & 15 Hedef Kelime',
    themeBadge: '14. GÜN: 14 GÜNLÜK KAMP BÜYÜK FİNALİ',
    planDescription: '14 günlük hızlandırılmış kampın büyük finali! 30 soruluk TYT Sosyal Bilimler 2 denemesi, 100 YDT, 40 Türkçe ve 30 Matematik ile büyük genel karne.',
    planSchedule: [
      { time: '09:00 - 11:00', title: '🇬🇧 100 YDT Büyük Final Denemesi', desc: 'Tüm gramer ve beceri soru tiplerini içeren tam prova.' },
      { time: '11:15 - 12:00', title: '🏛️ 30 TYT Sosyal Bilimler 2 Denemesi', desc: 'Osmanlı, Atatürk İlkeleri, Doğal Afetler, Nüfus ve Ahlak Felsefesi.' },
      { time: '13:00 - 13:45', title: '🇹🇷 40 TYT Türkçe Genel Deneme', desc: 'Kademeli zorlukta tam kapsamlı 40 soru.' },
      { time: '14:00 - 14:50', title: '📐 30 TYT Matematik Permütasyon & Olasılık', desc: 'Kombinasyon, olasılık ve modelleme.' },
      { time: '15:00 - 15:30', title: '🧠 15 Büyük Final Kelimesi', desc: 'Stabilize, Momentous, Benign, Neuroplasticity.' },
      { time: '16:00 - 17:30', title: '📊 14 Günlük Büyük Karne & Genel Hata Defteri', desc: 'Tüm kampın genel başarı istatistikleri ve nihai sınav raporu.' }
    ],
    database: day14.database,
    vocab: day14.vocab
  }
];

// Helper to encode Unicode string to base64
function utf8ToBase64(str) {
  return Buffer.from(str, 'utf8').toString('base64');
}

// Generate an HTML string for a specific day
function generateDayHtml(dayConfig) {
  const { day, title, subtitle, themeBadge, planDescription, planSchedule, database, vocab } = dayConfig;

  const dbJson = JSON.stringify(database);
  const vocabJson = JSON.stringify(vocab);
  const dbB64 = utf8ToBase64(dbJson);
  const vocabB64 = utf8ToBase64(vocabJson);

  const hasFen = !!database.fen;
  const hasSosyal = !!database.sosyal;

  const totalQuestions = (database.ydt?.length || 0) + 
                         (database.turkce?.length || 0) + 
                         (database.matematik?.length || 0) + 
                         (database.fen?.length || 0) + 
                         (database.sosyal?.length || 0) + 
                         (database.reading?.length || 0);

  return `<!DOCTYPE html>
<html lang="tr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} • YKS & YDT Sınav Merkezi</title>
    
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

    <!-- KaTeX for Math Formatting -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

    <!-- Chart.js for Performance Visuals -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <!-- HTML2PDF for Clean Export -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

    <!-- Canvas Confetti -->
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .glass-card {
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(226, 232, 240, 0.8);
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
                            <span class="px-2 py-0.5 text-[10px] font-black bg-rose-600/90 text-white rounded-full uppercase tracking-wider">Gün ${day} / 14</span>
                        </div>
                        <p class="text-[11px] text-slate-400 font-medium hidden sm:block">${subtitle}</p>
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
                                <span>Tüm Sınavı Kitapçık Olarak Yazdır (${totalQuestions} Soru)</span>
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

            <!-- SUBJECT TABS NAVIGATION -->
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
                    <i class="fa-solid fa-calculator text-amber-400"></i>
                    <span>TYT Matematik (30)</span>
                </button>

                ${hasFen ? `
                <button onclick="switchTab('fen')" id="tab-btn-fen" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-atom text-emerald-400"></i>
                    <span>TYT Fen (30)</span>
                </button>
                ` : ''}

                ${hasSosyal ? `
                <button onclick="switchTab('sosyal')" id="tab-btn-sosyal" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-landmark text-amber-400"></i>
                    <span>TYT Sosyal (30)</span>
                </button>
                ` : ''}

                <button onclick="switchTab('reading')" id="tab-btn-reading" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-book-open-reader text-teal-400"></i>
                    <span>Reading (12)</span>
                </button>

                <button onclick="switchTab('vocab')" id="tab-btn-vocab" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-brain text-pink-400"></i>
                    <span>15 Kelime Lab</span>
                </button>

                <button onclick="switchTab('analiz')" id="tab-btn-analiz" class="tab-btn px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center space-x-2 whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10">
                    <i class="fa-solid fa-chart-pie text-violet-400"></i>
                    <span>Karne & Analiz</span>
                </button>
            </div>
        </div>
    </header>

    <!-- MAIN CONTAINER -->
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">

        <!-- ========================================================= -->
        <!-- TAB 1: 📅 GÜNLÜK ÇALIŞMA PLANI & STRATEJİ                   -->
        <!-- ========================================================= -->
        <section id="tab-content-plan" class="space-y-6">
            <!-- Hero Plan Card -->
            <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div class="space-y-3">
                        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                            <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                            <span>${themeBadge}</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                            ${title}
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                            ${planDescription}
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <button onclick="switchTab('ydt')" class="px-5 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-600/30 transition flex items-center justify-center space-x-2">
                            <i class="fa-solid fa-play"></i> <span>YDT Denemesini Başlat</span>
                        </button>
                        <button onclick="downloadActiveSectionPDF()" class="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 transition flex items-center justify-center space-x-2">
                            <i class="fa-solid fa-download"></i> <span>Programı İndir</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Detailed Schedule Timeline -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${planSchedule.map(item => `
                <div class="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition">
                    <div class="flex items-center justify-between text-xs font-mono font-bold text-sky-600 dark:text-sky-400 mb-2">
                        <span><i class="fa-regular fa-clock mr-1"></i> ${item.time}</span>
                    </div>
                    <h3 class="text-sm font-black text-slate-900 dark:text-white mb-1.5">${item.title}</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${item.desc}</p>
                </div>
                `).join('')}
            </div>
        </section>

        <!-- ========================================================= -->
        <!-- TAB 2: 🎯 AKILLI HATA DEFTERİ (MISTAKE LOG & NOTEBOOK)     -->
        <!-- ========================================================= -->
        <section id="tab-content-hata-defteri" class="hidden space-y-6">
            <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div>
                        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center space-x-2">
                            <span class="text-rose-600 dark:text-rose-500">🎯</span>
                            <span>Akıllı Hata Defteri & Özel Notlar</span>
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Bu alanda ${day}. gün testlerinde yanlış yaptığınız veya boş bıraktığınız sorular otomatik olarak listelenir.
                        </p>
                    </div>
                    <button onclick="downloadHataDefteriPDF()" id="pdfDownloadBtn" class="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2 no-print">
                        <i class="fa-solid fa-file-pdf"></i>
                        <span>Hata Defterini PDF Olarak İndir</span>
                    </button>
                </div>

                <!-- Subject & Status Filter Pills -->
                <div class="space-y-3 no-print">
                    <div class="flex flex-wrap gap-2 items-center">
                        <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2">Ders:</span>
                        <button onclick="filterHataSubject('all')" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 text-white transition" data-subj="all">Tümü</button>
                        <button onclick="filterHataSubject('ydt')" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition" data-subj="ydt">YDT İngilizce</button>
                        <button onclick="filterHataSubject('turkce')" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition" data-subj="turkce">TYT Türkçe</button>
                        <button onclick="filterHataSubject('matematik')" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition" data-subj="matematik">TYT Matematik</button>
                        ${hasFen ? `<button onclick="filterHataSubject('fen')" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition" data-subj="fen">TYT Fen</button>` : ''}
                        ${hasSosyal ? `<button onclick="filterHataSubject('sosyal')" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition" data-subj="sosyal">TYT Sosyal</button>` : ''}
                        <button onclick="filterHataSubject('reading')" class="hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition" data-subj="reading">Reading</button>
                    </div>

                    <div class="flex flex-wrap gap-2 items-center">
                        <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2">Durum:</span>
                        <button onclick="filterHataStatus('all')" class="hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 transition" data-stat="all">Tümü</button>
                        <button onclick="filterHataStatus('wrong')" class="hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition" data-stat="wrong">Yanlışlar ❌</button>
                        <button onclick="filterHataStatus('blank')" class="hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-600 hover:text-white transition" data-stat="blank">Boş Bırakılanlar ⚠️</button>
                        <button onclick="filterHataStatus('learned')" class="hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition" data-stat="learned">Öğrenilenler (Arşiv) ✅</button>
                    </div>
                </div>

                <!-- Dynamic Mistake Cards Container -->
                <div id="hata-defteri-list" class="space-y-4">
                    <!-- Populated dynamically by JS -->
                </div>
            </div>
        </section>

        <!-- ========================================================= -->
        <!-- TAB 3: 🇬🇧 100 YDT İNGİLİZCE SORU BANKASI                    -->
        <!-- ========================================================= -->
        <section id="tab-content-ydt" class="hidden space-y-6">
            <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <!-- Subject Header & Timer -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div>
                        <span class="px-3 py-1 rounded-full text-xs font-black bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 uppercase tracking-wider">
                            🇬🇧 YDT İngilizce • 100 Soru
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                            ${day}. Gün YDT İngilizce Soru Seti
                        </h2>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div id="timer-ydt" class="font-mono text-sm sm:text-base font-black px-3.5 py-1.5 rounded-xl bg-slate-900 text-white border border-slate-700 shadow-inner flex items-center space-x-1.5">
                            <i class="fa-regular fa-clock text-amber-400"></i>
                            <span id="timer-ydt-display">00:00</span>
                        </div>
                        <button onclick="finishTest('ydt')" id="finish-btn-ydt" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition flex items-center space-x-1.5">
                            <i class="fa-solid fa-check-double"></i>
                            <span>Testi Tamamla</span>
                        </button>
                    </div>
                </div>

                <!-- Soru Gezgini (Navigator Pills) -->
                <div class="no-print p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                        <span><i class="fa-solid fa-compass text-sky-500 mr-1"></i> Soru Gezgini (100 Soru)</span>
                        <span id="ydt-progress-badge" class="text-sky-600 dark:text-sky-400">0 / 100 Cevaplandı</span>
                    </div>
                    <div id="nav-pills-ydt" class="flex flex-wrap gap-1 max-h-28 overflow-y-auto custom-scrollbar p-1">
                        <!-- Populated by JS -->
                    </div>
                </div>

                <!-- Questions Container -->
                <div id="questions-container-ydt" class="space-y-6">
                    <!-- Populated by JS -->
                </div>
            </div>
        </section>

        <!-- ========================================================= -->
        <!-- TAB 4: 🇹🇷 40 TYT TÜRKÇE SORU BANKASI                       -->
        <!-- ========================================================= -->
        <section id="tab-content-turkce" class="hidden space-y-6">
            <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <!-- Subject Header & Timer -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div>
                        <span class="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                            🇹🇷 TYT Türkçe • 40 Soru (Kademeli Zorluk)
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                            ${day}. Gün TYT Türkçe Soru Seti
                        </h2>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div id="timer-turkce" class="font-mono text-sm sm:text-base font-black px-3.5 py-1.5 rounded-xl bg-slate-900 text-white border border-slate-700 shadow-inner flex items-center space-x-1.5">
                            <i class="fa-regular fa-clock text-amber-400"></i>
                            <span id="timer-turkce-display">00:00</span>
                        </div>
                        <button onclick="finishTest('turkce')" id="finish-btn-turkce" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition flex items-center space-x-1.5">
                            <i class="fa-solid fa-check-double"></i>
                            <span>Testi Tamamla</span>
                        </button>
                    </div>
                </div>

                <!-- Soru Gezgini -->
                <div class="no-print p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                        <span><i class="fa-solid fa-compass text-emerald-500 mr-1"></i> Soru Gezgini (40 Soru)</span>
                        <span id="turkce-progress-badge" class="text-emerald-600 dark:text-emerald-400">0 / 40 Cevaplandı</span>
                    </div>
                    <div id="nav-pills-turkce" class="flex flex-wrap gap-1 max-h-28 overflow-y-auto custom-scrollbar p-1">
                        <!-- Populated by JS -->
                    </div>
                </div>

                <!-- Questions Container -->
                <div id="questions-container-turkce" class="space-y-6">
                    <!-- Populated by JS -->
                </div>
            </div>
        </section>

        <!-- ========================================================= -->
        <!-- TAB 5: 📐 30 TYT MATEMATİK SORU BANKASI                    -->
        <!-- ========================================================= -->
        <section id="tab-content-matematik" class="hidden space-y-6">
            <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <!-- Subject Header & Timer -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div>
                        <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 uppercase tracking-wider">
                            📐 TYT Matematik • 30 Soru (Temel Konular & Formülsüz Mantık)
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                            ${day}. Gün TYT Matematik Soru Seti
                        </h2>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div id="timer-matematik" class="font-mono text-sm sm:text-base font-black px-3.5 py-1.5 rounded-xl bg-slate-900 text-white border border-slate-700 shadow-inner flex items-center space-x-1.5">
                            <i class="fa-regular fa-clock text-amber-400"></i>
                            <span id="timer-matematik-display">00:00</span>
                        </div>
                        <button onclick="finishTest('matematik')" id="finish-btn-matematik" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition flex items-center space-x-1.5">
                            <i class="fa-solid fa-check-double"></i>
                            <span>Testi Tamamla</span>
                        </button>
                    </div>
                </div>

                <!-- Soru Gezgini -->
                <div class="no-print p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                        <span><i class="fa-solid fa-compass text-amber-500 mr-1"></i> Soru Gezgini (30 Soru)</span>
                        <span id="matematik-progress-badge" class="text-amber-600 dark:text-amber-400">0 / 30 Cevaplandı</span>
                    </div>
                    <div id="nav-pills-matematik" class="flex flex-wrap gap-1 max-h-28 overflow-y-auto custom-scrollbar p-1">
                        <!-- Populated by JS -->
                    </div>
                </div>

                <!-- Questions Container -->
                <div id="questions-container-matematik" class="space-y-6">
                    <!-- Populated by JS -->
                </div>
            </div>
        </section>

        ${hasFen ? `
        <!-- ========================================================= -->
        <!-- EXTRA TAB: 🔬 30 TYT FEN BİLİMLERİ SORU BANKASI            -->
        <!-- ========================================================= -->
        <section id="tab-content-fen" class="hidden space-y-6">
            <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <!-- Subject Header & Timer -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div>
                        <span class="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                            🔬 TYT Fen Bilimleri • 30 Soru (Fizik, Kimya, Biyoloji)
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                            ${day}. Gün TYT Fen Bilimleri Soru Seti & Çözümleri
                        </h2>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div id="timer-fen" class="font-mono text-sm sm:text-base font-black px-3.5 py-1.5 rounded-xl bg-slate-900 text-white border border-slate-700 shadow-inner flex items-center space-x-1.5">
                            <i class="fa-regular fa-clock text-amber-400"></i>
                            <span id="timer-fen-display">00:00</span>
                        </div>
                        <button onclick="finishTest('fen')" id="finish-btn-fen" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition flex items-center space-x-1.5">
                            <i class="fa-solid fa-check-double"></i>
                            <span>Testi Tamamla</span>
                        </button>
                    </div>
                </div>

                <!-- Soru Gezgini -->
                <div class="no-print p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                        <span><i class="fa-solid fa-compass text-emerald-500 mr-1"></i> Soru Gezgini (30 Soru)</span>
                        <span id="fen-progress-badge" class="text-emerald-600 dark:text-emerald-400">0 / 30 Cevaplandı</span>
                    </div>
                    <div id="nav-pills-fen" class="flex flex-wrap gap-1 max-h-28 overflow-y-auto custom-scrollbar p-1">
                        <!-- Populated by JS -->
                    </div>
                </div>

                <!-- Questions Container -->
                <div id="questions-container-fen" class="space-y-6">
                    <!-- Populated by JS -->
                </div>
            </div>
        </section>
        ` : ''}

        ${hasSosyal ? `
        <!-- ========================================================= -->
        <!-- EXTRA TAB: 🏛️ 30 TYT SOSYAL BİLİMLER SORU BANKASI         -->
        <!-- ========================================================= -->
        <section id="tab-content-sosyal" class="hidden space-y-6">
            <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <!-- Subject Header & Timer -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div>
                        <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 uppercase tracking-wider">
                            🏛️ TYT Sosyal Bilimler • 30 Soru (Tarih, Coğrafya, Felsefe, Din)
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                            ${day}. Gün TYT Sosyal Bilimler Soru Seti & Çözümleri
                        </h2>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div id="timer-sosyal" class="font-mono text-sm sm:text-base font-black px-3.5 py-1.5 rounded-xl bg-slate-900 text-white border border-slate-700 shadow-inner flex items-center space-x-1.5">
                            <i class="fa-regular fa-clock text-amber-400"></i>
                            <span id="timer-sosyal-display">00:00</span>
                        </div>
                        <button onclick="finishTest('sosyal')" id="finish-btn-sosyal" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition flex items-center space-x-1.5">
                            <i class="fa-solid fa-check-double"></i>
                            <span>Testi Tamamla</span>
                        </button>
                    </div>
                </div>

                <!-- Soru Gezgini -->
                <div class="no-print p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                        <span><i class="fa-solid fa-compass text-amber-500 mr-1"></i> Soru Gezgini (30 Soru)</span>
                        <span id="sosyal-progress-badge" class="text-amber-600 dark:text-amber-400">0 / 30 Cevaplandı</span>
                    </div>
                    <div id="nav-pills-sosyal" class="flex flex-wrap gap-1 max-h-28 overflow-y-auto custom-scrollbar p-1">
                        <!-- Populated by JS -->
                    </div>
                </div>

                <!-- Questions Container -->
                <div id="questions-container-sosyal" class="space-y-6">
                    <!-- Populated by JS -->
                </div>
            </div>
        </section>
        ` : ''}

        <!-- ========================================================= -->
        <!-- TAB 6: 📚 3 EKSTRA YDT READING PASAJI (12 SORU)           -->
        <!-- ========================================================= -->
        <section id="tab-content-reading" class="hidden space-y-6">
            <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <!-- Subject Header & Timer -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div>
                        <span class="px-3 py-1 rounded-full text-xs font-black bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 uppercase tracking-wider">
                            📚 YDT Reading Masterclass • 3 Pasaj & 12 Soru
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                            ${day}. Gün Akademik Okuma Metinleri
                        </h2>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div id="timer-reading" class="font-mono text-sm sm:text-base font-black px-3.5 py-1.5 rounded-xl bg-slate-900 text-white border border-slate-700 shadow-inner flex items-center space-x-1.5">
                            <i class="fa-regular fa-clock text-amber-400"></i>
                            <span id="timer-reading-display">00:00</span>
                        </div>
                        <button onclick="finishTest('reading')" id="finish-btn-reading" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition flex items-center space-x-1.5">
                            <i class="fa-solid fa-check-double"></i>
                            <span>Testi Tamamla</span>
                        </button>
                    </div>
                </div>

                <!-- Questions Container -->
                <div id="questions-container-reading" class="space-y-8">
                    <!-- Populated by JS -->
                </div>
            </div>
        </section>

        <!-- ========================================================= -->
        <!-- TAB 7: 🧠 15 HEDEF KELİME LEITNER FLASHCARD LAB             -->
        <!-- ========================================================= -->
        <section id="tab-content-vocab" class="hidden space-y-6">
            <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div>
                        <span class="px-3 py-1 rounded-full text-xs font-black bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 uppercase tracking-wider">
                            🧠 Leitner 5 Kutu Kelime Hafıza Sistemi
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                            ${day}. Gün Kritik 15 Hedef Kelime
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Kartların üzerine tıklayarak Türkçe anlamlarını, eş ve zıt anlamlarını görün. Hoparlör simgesiyle doğru Amerikan İngilizcesi telaffuzunu dinleyin.
                        </p>
                    </div>
                </div>

                <!-- 15 Vocabulary Cards Grid -->
                <div id="vocab-cards-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <!-- Populated by JS -->
                </div>
            </div>
        </section>

        <!-- ========================================================= -->
        <!-- TAB 8: 📊 KARNE, BAŞARI GRAFİĞİ & KOÇLUK ANALİZİ           -->
        <!-- ========================================================= -->
        <section id="tab-content-analiz" class="hidden space-y-6">
            <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
                <div>
                    <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center space-x-2">
                        <span class="text-violet-600 dark:text-violet-400">📊</span>
                        <span>${day}. Gün Performans Karnesi & Analiz</span>
                    </h2>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Tüm testleri tamamladıktan sonra güncel doğru, yanlış ve net skorlarınız ($Net = D - Y/4$) otomatik hesaplanır.
                    </p>
                </div>

                <!-- Net Summary Scorecards -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="p-5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800">
                        <span class="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-1">🇬🇧 YDT Net</span>
                        <div id="score-ydt-net" class="text-2xl sm:text-3xl font-black text-sky-900 dark:text-white">0.00</div>
                        <p id="score-ydt-detail" class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">100 Soru • 0 D / 0 Y</p>
                    </div>

                    <div class="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                        <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">🇹🇷 TYT Türkçe Net</span>
                        <div id="score-turkce-net" class="text-2xl sm:text-3xl font-black text-emerald-900 dark:text-white">0.00</div>
                        <p id="score-turkce-detail" class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">40 Soru • 0 D / 0 Y</p>
                    </div>

                    <div class="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                        <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">📐 TYT Mat Net</span>
                        <div id="score-matematik-net" class="text-2xl sm:text-3xl font-black text-amber-900 dark:text-white">0.00</div>
                        <p id="score-matematik-detail" class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">30 Soru • 0 D / 0 Y</p>
                    </div>

                    <div class="p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
                        <span class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block mb-1">🎯 Günlük Toplam Net</span>
                        <div id="score-total-net" class="text-2xl sm:text-3xl font-black text-rose-900 dark:text-white">0.00</div>
                        <p id="score-total-detail" class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">${totalQuestions} Soru • 0 D / 0 Y</p>
                    </div>
                </div>

                <!-- Visual Chart & AI Diagnostic Feedback -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 class="text-sm font-black text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                            <i class="fa-solid fa-chart-simple text-sky-500"></i>
                            <span>Ders Bazlı Net Dağılım Grafiği</span>
                        </h3>
                        <div class="h-64 relative">
                            <canvas id="scoreChart"></canvas>
                        </div>
                    </div>

                    <div class="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="flex items-center space-x-2 text-xs font-black text-amber-400 uppercase tracking-wider">
                                <i class="fa-solid fa-wand-magic-sparkles"></i>
                                <span>Yapay Zeka Teşhis & Koçluk Raporu</span>
                            </div>
                            <h3 class="text-base sm:text-lg font-black tracking-tight" id="coach-headline">
                                Henüz Test Tamamlanmadı
                            </h3>
                            <p class="text-xs text-slate-300 leading-relaxed" id="coach-body">
                                Testleri tamamladığınızda net oranınız ve Hata Defterinizdeki eksik konu dağılımına göre kişiye özel strateji önerileri burada listelenecektir.
                            </p>
                        </div>
                        <div class="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                            <span>Sistem: YKS Hızlandırılmış Kamp Motoru</span>
                            <button onclick="downloadActiveSectionPDF()" class="text-sky-400 hover:text-sky-300 font-bold flex items-center space-x-1">
                                <i class="fa-solid fa-file-pdf mr-1"></i> <span>Karneyi İndir</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <!-- FOOTER -->
    <footer class="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-6 text-center text-xs text-slate-500 no-print">
        <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>© 2026 YKS & YDT Sınav Merkezi • Gün ${day} (${totalQuestions} Soru & 15 Hedef Kelime)</span>
            <div class="flex items-center space-x-2">
                <a href="index.html" class="text-sky-600 dark:text-sky-400 hover:underline font-bold">Ana Panele Dön</a>
                <span>•</span>
                <a href="sinav_merkezi.html" class="text-slate-600 dark:text-slate-400 hover:underline">Master Sınav Merkezi</a>
            </div>
        </div>
    </footer>

    <!-- EMBEDDED BASE64 ENCODED EXAM DATABASE & VOCABULARY -->
    <script>
        function decodeB64Unicode(str) {
            return decodeURIComponent(atob(str).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        }

        const DAY_NUM = ${day};
        window.EXAM_DATABASE = JSON.parse(decodeB64Unicode("${dbB64}"));
        window.TARGET_VOCABULARY_15 = JSON.parse(decodeB64Unicode("${vocabB64}"));

        // =========================================================
        // ISOLATED STATE MANAGEMENT (DAY SPECIFIC LOCAL STORAGE)
        // =========================================================
        const STORAGE_PREFIX = 'yks_day' + DAY_NUM + '_';

        let activeTab = 'plan';
        let studentAnswers = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'student_answers')) || {
            ydt: {}, turkce: {}, matematik: {}, reading: {}${hasFen ? ', fen: {}' : ''}${hasSosyal ? ', sosyal: {}' : ''}
        };
        let testCompleted = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'test_completed')) || {
            ydt: false, turkce: false, matematik: false, reading: false${hasFen ? ', fen: false' : ''}${hasSosyal ? ', sosyal: false' : ''}
        };
        let flaggedQuestions = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'flagged_q')) || {};
        let studentMistakeNotes = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'hata_defteri_notes')) || {};
        let learnedArchivedQuestions = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'hata_defteri_archived')) || {};

        let currentHataSubject = 'all';
        let currentHataStatus = 'all';

        let timers = {
            ydt: { seconds: 0, interval: null },
            turkce: { seconds: 0, interval: null },
            matematik: { seconds: 0, interval: null },
            ${hasFen ? 'fen: { seconds: 0, interval: null },' : ''}
            ${hasSosyal ? 'sosyal: { seconds: 0, interval: null },' : ''}
            reading: { seconds: 0, interval: null }
        };

        let scoreChartInstance = null;
        let isAudioPlaying = false;
        let audioContext = null;
        let rainNoiseNode = null;

        // =========================================================
        // INITIALIZATION
        // =========================================================
        document.addEventListener('DOMContentLoaded', () => {
            initDarkMode();
            renderAllQuestions();
            renderNavPills();
            renderVocabCards();
            renderHataDefteri();
            updateScoresAndKarne();
            initTimers();

            // Render KaTeX Math formulas
            if (typeof renderMathInElement !== 'undefined') {
                renderMathInElement(document.body, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '$', right: '$', display: false }
                    ],
                    throwOnError: false
                });
            }
        });

        // =========================================================
        // TAB SWITCHING
        // =========================================================
        function switchTab(tabId) {
            activeTab = tabId;

            // Hide all tab sections
            document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));

            // Show active section
            const targetSec = document.getElementById('tab-content-' + tabId);
            if (targetSec) targetSec.classList.remove('hidden');

            // Reset tab button states
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-sky-600', 'text-white', 'shadow-md');
                btn.classList.add('text-slate-300', 'hover:text-white', 'hover:bg-white/10');
            });

            // Highlight active button
            const activeBtn = document.getElementById('tab-btn-' + tabId);
            if (activeBtn) {
                activeBtn.classList.remove('text-slate-300', 'hover:text-white', 'hover:bg-white/10');
                activeBtn.classList.add('bg-sky-600', 'text-white', 'shadow-md');
            }

            if (tabId === 'hata-defteri') {
                renderHataDefteri();
            } else if (tabId === 'analiz') {
                updateScoresAndKarne();
                updateChart();
            }

            // Scroll to top of content smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // =========================================================
        // DARK MODE TOGGLE
        // =========================================================
        function initDarkMode() {
            const isDark = localStorage.getItem('yks_theme_dark') === 'true' || 
                           (!localStorage.getItem('yks_theme_dark') && window.matchMedia('(prefers-color-scheme: dark)').matches);
            if (isDark) {
                document.documentElement.classList.add('dark');
                updateThemeIcon(true);
            } else {
                document.documentElement.classList.remove('dark');
                updateThemeIcon(false);
            }
        }

        function toggleDarkMode() {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('yks_theme_dark', isDark);
            updateThemeIcon(isDark);
            if (scoreChartInstance) updateChart();
        }

        function updateThemeIcon(isDark) {
            const icon = document.getElementById('themeIcon');
            if (!icon) return;
            icon.className = isDark ? 'fa-solid fa-sun text-amber-300 text-base' : 'fa-solid fa-moon text-slate-300 text-base';
        }

        // =========================================================
        // WEB AUDIO FOCUS SOUND GENERATOR (LOW-PASS RAIN NOISE)
        // =========================================================
        function toggleFocusAudio() {
            const btn = document.getElementById('focusAudioBtn');
            const icon = document.getElementById('audioIcon');
            const text = document.getElementById('audioText');

            if (!isAudioPlaying) {
                try {
                    const AudioCtx = window.AudioContext || window.webkitAudioContext;
                    audioContext = new AudioCtx();

                    // Generate pink/brown noise
                    const bufferSize = audioContext.sampleRate * 2;
                    const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
                    const output = noiseBuffer.getChannelData(0);
                    let lastOut = 0.0;
                    for (let i = 0; i < bufferSize; i++) {
                        const white = Math.random() * 2 - 1;
                        output[i] = (lastOut + (0.02 * white)) / 1.02;
                        lastOut = output[i];
                        output[i] *= 3.5;
                    }

                    const whiteNoise = audioContext.createBufferSource();
                    whiteNoise.buffer = noiseBuffer;
                    whiteNoise.loop = true;

                    // Lowpass filter for soothing rain sound
                    const filter = audioContext.createBiquadFilter();
                    filter.type = 'lowpass';
                    filter.frequency.setValueAtTime(450, audioContext.currentTime);

                    const gainNode = audioContext.createGain();
                    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);

                    whiteNoise.connect(filter);
                    filter.connect(gainNode);
                    gainNode.connect(audioContext.destination);

                    whiteNoise.start(0);
                    rainNoiseNode = { source: whiteNoise, context: audioContext };

                    isAudioPlaying = true;
                    if (btn) btn.classList.add('bg-cyan-600', 'text-white', 'border-cyan-500');
                    if (icon) icon.className = 'fa-solid fa-volume-high mr-1.5 text-cyan-200 animate-pulse';
                    if (text) text.innerText = 'Odak Açık';
                } catch (e) {
                    console.error('Web Audio error:', e);
                }
            } else {
                if (rainNoiseNode) {
                    rainNoiseNode.source.stop();
                    rainNoiseNode.context.close();
                    rainNoiseNode = null;
                }
                isAudioPlaying = false;
                if (btn) btn.classList.remove('bg-cyan-600', 'text-white', 'border-cyan-500');
                if (icon) icon.className = 'fa-solid fa-cloud-rain mr-1.5 text-cyan-300';
                if (text) text.innerText = 'Odak Sesi';
            }
        }

        // =========================================================
        // MULTI-SECTION PRINT & PDF ENGINE
        // =========================================================
        function togglePrintMenu() {
            const dropdown = document.getElementById('printMenuDropdown');
            if (dropdown) dropdown.classList.toggle('hidden');
        }

        window.addEventListener('click', (e) => {
            const dropdown = document.getElementById('printMenuDropdown');
            const btn = document.getElementById('printMenuBtn');
            if (dropdown && btn && !btn.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });

        function printActiveSection() {
            document.body.classList.remove('print-mode-all');
            window.print();
        }

        function printMasterExamBooklet() {
            document.body.classList.add('print-mode-all');
            window.print();
            setTimeout(() => {
                document.body.classList.remove('print-mode-all');
            }, 1500);
        }

        function downloadActiveSectionPDF() {
            const sec = document.getElementById('tab-content-' + activeTab);
            if (!sec) return;

            const opt = {
                margin: [10, 10, 10, 10],
                filename: 'YKS_YDT_Gun_' + DAY_NUM + '_' + activeTab + '.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, logging: false },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            if (typeof html2pdf !== 'undefined') {
                html2pdf().set(opt).from(sec).save();
            } else {
                window.print();
            }
        }

        // =========================================================
        // TIMERS LOGIC
        // =========================================================
        function initTimers() {
            const subjs = ['ydt', 'turkce', 'matematik'${hasFen ? ", 'fen'" : ''}${hasSosyal ? ", 'sosyal'" : ''}, 'reading'];
            subjs.forEach(subj => {
                if (testCompleted[subj]) {
                    const display = document.getElementById('timer-' + subj + '-display');
                    if (display) display.innerText = 'Tamamlandı';
                    return;
                }
                timers[subj].interval = setInterval(() => {
                    if (activeTab === subj && !testCompleted[subj]) {
                        timers[subj].seconds++;
                        const mins = String(Math.floor(timers[subj].seconds / 60)).padStart(2, '0');
                        const secs = String(timers[subj].seconds % 60).padStart(2, '0');
                        const display = document.getElementById('timer-' + subj + '-display');
                        if (display) display.innerText = mins + ':' + secs;
                    }
                }, 1000);
            });
        }

        // =========================================================
        // QUESTION RENDERING & INTERACTIONS
        // =========================================================
        function renderAllQuestions() {
            renderSubjectQuestions('ydt');
            renderSubjectQuestions('turkce');
            renderSubjectQuestions('matematik');
            ${hasFen ? "renderSubjectQuestions('fen');" : ''}
            ${hasSosyal ? "renderSubjectQuestions('sosyal');" : ''}
            renderReadingPassages();
        }

        function renderSubjectQuestions(subj) {
            const container = document.getElementById('questions-container-' + subj);
            const db = window.EXAM_DATABASE;
            if (!container || !db || !db[subj]) return;

            const questions = db[subj];
            const isCompleted = testCompleted[subj];

            container.innerHTML = questions.map((q, idx) => {
                const selectedKey = studentAnswers[subj] ? studentAnswers[subj][q.id] : undefined;
                const isFlagged = !!flaggedQuestions[q.id];

                return \`
                    <div id="q-card-\${q.id}" class="p-5 sm:p-6 rounded-2xl border transition-all duration-200 \${isFlagged ? 'border-amber-400 dark:border-amber-500 shadow-md' : 'border-slate-200 dark:border-slate-800'} bg-white dark:bg-slate-900 space-y-4">
                        <!-- Card Header -->
                        <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                            <div class="flex items-center space-x-2.5">
                                <span class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-xs flex items-center justify-center font-mono">
                                    \${idx + 1}
                                </span>
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                                    \${q.type}
                                </span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button onclick="toggleFlagQuestion('\${subj}', '\${q.id}')" class="text-slate-400 hover:text-amber-500 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Soruyu Bayrakla">
                                    <i class="fa-\${isFlagged ? 'solid' : 'regular'} fa-bookmark \${isFlagged ? 'text-amber-500' : ''}"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Question Text -->
                        <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed select-text">
                            \${q.questionText}
                        </div>

                        <!-- 5 Options (A, B, C, D, E) -->
                        <div class="grid grid-cols-1 gap-2.5 pt-1">
                            \${q.options.map(opt => {
                                const isSelected = selectedKey === opt.key;
                                let optionClasses = 'border-slate-200 dark:border-slate-800 hover:border-sky-400 bg-white dark:bg-slate-900/50';
                                
                                if (isCompleted) {
                                    if (opt.key === q.correctAnswer) {
                                        optionClasses = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold';
                                    } else if (isSelected && opt.key !== q.correctAnswer) {
                                        optionClasses = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-bold';
                                    } else {
                                        optionClasses = 'border-slate-200 dark:border-slate-800 opacity-60';
                                    }
                                } else if (isSelected) {
                                    optionClasses = 'border-sky-500 bg-sky-50 dark:bg-sky-950/40 ring-2 ring-sky-500/20';
                                }

                                return \`
                                    <label class="option-label p-3 rounded-xl border \${optionClasses} flex items-center space-x-3 cursor-pointer transition text-xs select-none">
                                        <input type="radio" name="q_\${q.id}" value="\${opt.key}" \${isSelected ? 'checked' : ''} \${isCompleted ? 'disabled' : ''} onchange="selectAnswer('\${subj}', '\${q.id}', '\${opt.key}')" class="w-4 h-4 text-sky-600 focus:ring-sky-500">
                                        <span class="font-black text-slate-500 dark:text-slate-400 font-mono w-5">\${opt.key})</span>
                                        <span class="text-slate-700 dark:text-slate-200 flex-grow">\${opt.text}</span>
                                    </label>
                                \`;
                            }).join('')}
                        </div>

                        <!-- Solution Box (Shown ONLY when test completed) -->
                        \${isCompleted ? \`
                            <div class="space-y-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                                \${q.ruleExplanation ? \`
                                    <div class="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-200">
                                        <strong class="text-sky-700 dark:text-sky-400 block mb-1">🎓 Gramer Kuralı:</strong>
                                        \${q.ruleExplanation}
                                    </div>
                                \` : ''}
                                \${q.lectureNote ? \`
                                    <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200">
                                        <strong class="text-amber-700 dark:text-amber-400 block mb-1">💡 Matematik Konu Notu:</strong>
                                        \${q.lectureNote}
                                    </div>
                                \` : ''}
                                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                    <div class="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold mb-1">
                                        <i class="fa-solid fa-graduation-cap"></i>
                                        <span>ÖSYM Sınav Çözümü & Doğru Cevap: (\${q.correctAnswer})</span>
                                    </div>
                                    <p>\${q.explanation}</p>
                                </div>
                            </div>
                        \` : ''}
                    </div>
                \`;
            }).join('');
        }

        function renderReadingPassages() {
            const container = document.getElementById('questions-container-reading');
            const db = window.EXAM_DATABASE;
            if (!container || !db || !db.reading) return;

            const questions = db.reading;
            const isCompleted = testCompleted.reading;

            // Group into sets of 4 questions per passage
            const passagesMap = [];
            for (let i = 0; i < questions.length; i += 4) {
                const chunk = questions.slice(i, i + 4);
                passagesMap.push({
                    passage: chunk[0].passage || { title: 'Akademik Okuma Metni ' + (passagesMap.length + 1), text: '...' },
                    questions: chunk,
                    startIndex: i
                });
            }

            container.innerHTML = passagesMap.map((pGroup, pIdx) => \`
                <div class="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
                    <!-- Passage Box -->
                    <div class="p-5 rounded-2xl bg-teal-50/80 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/60 space-y-2">
                        <div class="flex items-center justify-between text-xs font-black text-teal-700 dark:text-teal-400">
                            <span><i class="fa-solid fa-book-open mr-1.5"></i> \${pGroup.passage.title}</span>
                            <span class="text-[10px] uppercase tracking-wider bg-teal-500/10 px-2.5 py-0.5 rounded-full">Akademik Metin \${pIdx + 1}</span>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed select-text font-serif italic">
                            \${pGroup.passage.text}
                        </p>
                    </div>

                    <!-- Questions for this Passage -->
                    <div class="space-y-4">
                        \${pGroup.questions.map((q, qIdx) => {
                            const globalIndex = pGroup.startIndex + qIdx;
                            const selectedKey = studentAnswers.reading ? studentAnswers.reading[q.id] : undefined;
                            const isFlagged = !!flaggedQuestions[q.id];

                            return \`
                                <div id="q-card-\${q.id}" class="p-4 sm:p-5 rounded-2xl border \${isFlagged ? 'border-amber-400 dark:border-amber-500' : 'border-slate-200 dark:border-slate-800'} bg-white dark:bg-slate-900 space-y-3">
                                    <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                                        <span class="text-xs font-black text-slate-900 dark:text-white font-mono">
                                            Soru \${globalIndex + 1}
                                        </span>
                                        <button onclick="toggleFlagQuestion('reading', '\${q.id}')" class="text-slate-400 hover:text-amber-500 p-1 rounded">
                                            <i class="fa-\${isFlagged ? 'solid' : 'regular'} fa-bookmark \${isFlagged ? 'text-amber-500' : ''}"></i>
                                        </button>
                                    </div>

                                    <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium">
                                        \${q.questionText}
                                    </div>

                                    <div class="grid grid-cols-1 gap-2">
                                        \${q.options.map(opt => {
                                            const isSelected = selectedKey === opt.key;
                                            let optStyle = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50';
                                            if (isCompleted) {
                                                if (opt.key === q.correctAnswer) optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold';
                                                else if (isSelected) optStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-bold';
                                                else optStyle = 'border-slate-200 dark:border-slate-800 opacity-60';
                                            } else if (isSelected) {
                                                optStyle = 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 ring-2 ring-teal-500/20';
                                            }

                                            return \`
                                                <label class="option-label p-2.5 rounded-xl border \${optStyle} flex items-center space-x-2.5 cursor-pointer text-xs">
                                                    <input type="radio" name="q_\${q.id}" value="\${opt.key}" \${isSelected ? 'checked' : ''} \${isCompleted ? 'disabled' : ''} onchange="selectAnswer('reading', '\${q.id}', '\${opt.key}')" class="w-3.5 h-3.5 text-teal-600">
                                                    <span class="font-mono font-bold text-slate-500 dark:text-slate-400">\${opt.key})</span>
                                                    <span class="text-slate-700 dark:text-slate-200 flex-grow">\${opt.text}</span>
                                                </label>
                                            \`;
                                        }).join('')}
                                    </div>

                                    \${isCompleted ? \`
                                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                                            <b class="text-teal-600 dark:text-teal-400">Doğru Cevap: (\${q.correctAnswer})</b> • \${q.explanation}
                                        </div>
                                    \` : ''}
                                </div>
                            \`;
                        }).join('')}
                    </div>
                </div>
            \`).join('');
        }

        function renderNavPills() {
            const subjs = ['ydt', 'turkce', 'matematik'${hasFen ? ", 'fen'" : ''}${hasSosyal ? ", 'sosyal'" : ''}];
            const db = window.EXAM_DATABASE;
            if (!db) return;

            subjs.forEach(subj => {
                const container = document.getElementById('nav-pills-' + subj);
                const questions = db[subj];
                if (!container || !questions) return;

                let answeredCount = 0;
                container.innerHTML = questions.map((q, idx) => {
                    const isAnswered = !!(studentAnswers[subj] && studentAnswers[subj][q.id]);
                    const isFlagged = !!flaggedQuestions[q.id];
                    if (isAnswered) answeredCount++;

                    let pillClass = 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                    if (testCompleted[subj]) {
                        const isCorrect = studentAnswers[subj][q.id] === q.correctAnswer;
                        pillClass = isCorrect ? 'bg-emerald-600 text-white font-bold' : (isAnswered ? 'bg-rose-600 text-white font-bold' : 'bg-amber-500 text-slate-900 font-bold');
                    } else if (isAnswered) {
                        pillClass = 'bg-sky-600 text-white font-bold';
                    }

                    return \`
                        <button onclick="scrollToQuestion('\${q.id}')" class="w-7 h-7 rounded-lg text-xs font-mono font-bold \${pillClass} \${isFlagged ? 'ring-2 ring-amber-400' : ''} transition hover:scale-105" title="Soru \${idx + 1}">
                            \${idx + 1}
                        </button>
                    \`;
                }).join('');

                const badge = document.getElementById(subj + '-progress-badge');
                if (badge) badge.innerText = answeredCount + ' / ' + questions.length + ' Cevaplandı';
            });
        }

        function selectAnswer(subj, qId, key) {
            if (testCompleted[subj]) return;
            if (!studentAnswers[subj]) studentAnswers[subj] = {};
            studentAnswers[subj][qId] = key;
            localStorage.setItem(STORAGE_PREFIX + 'student_answers', JSON.stringify(studentAnswers));

            renderNavPills();
            renderHataDefteri();
            updateScoresAndKarne();

            // Highlight card locally
            const card = document.getElementById('q-card-' + qId);
            if (card) {
                card.querySelectorAll('.option-label').forEach(label => {
                    const radio = label.querySelector('input');
                    if (radio && radio.value === key) {
                        label.classList.add('border-sky-500', 'bg-sky-50', 'dark:bg-sky-950/40', 'ring-2', 'ring-sky-500/20');
                    } else {
                        label.classList.remove('border-sky-500', 'bg-sky-50', 'dark:bg-sky-950/40', 'ring-2', 'ring-sky-500/20');
                    }
                });
            }
        }

        function toggleFlagQuestion(subj, qId) {
            flaggedQuestions[qId] = !flaggedQuestions[qId];
            localStorage.setItem(STORAGE_PREFIX + 'flagged_q', JSON.stringify(flaggedQuestions));
            renderSubjectQuestions(subj);
            renderNavPills();
        }

        function toggleRuleBox(qId) {
            const box = document.getElementById('rule-box-' + qId);
            if (box) box.classList.toggle('hidden');
        }

        function scrollToQuestion(qId) {
            const card = document.getElementById('q-card-' + qId);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('ring-4', 'ring-sky-400');
                setTimeout(() => card.classList.remove('ring-4', 'ring-sky-400'), 1200);
            }
        }

        function finishTest(subj) {
            if (testCompleted[subj]) return;

            const db = window.EXAM_DATABASE;
            if (!db || !db[subj]) return;

            testCompleted[subj] = true;
            localStorage.setItem(STORAGE_PREFIX + 'test_completed', JSON.stringify(testCompleted));

            // Stop timer
            if (timers[subj] && timers[subj].interval) {
                clearInterval(timers[subj].interval);
                const display = document.getElementById('timer-' + subj + '-display');
                if (display) display.innerText = 'Tamamlandı';
            }

            // Confetti
            if (typeof confetti === 'function') {
                confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
            }

            renderAllQuestions();
            renderNavPills();
            renderHataDefteri();
            updateScoresAndKarne();

            const finishBtn = document.getElementById('finish-btn-' + subj);
            if (finishBtn) {
                finishBtn.className = 'px-4 py-2 rounded-xl bg-slate-700 text-slate-300 font-bold text-xs cursor-not-allowed';
                finishBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Tamamlandı</span>';
            }
        }

        // =========================================================
        // HATA DEFTERİ (SMART MISTAKE ENGINE)
        // =========================================================
        function filterHataSubject(subj) {
            currentHataSubject = subj;
            document.querySelectorAll('.hata-subj-btn').forEach(b => {
                if (b.getAttribute('data-subj') === subj) {
                    b.className = 'hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 text-white transition';
                } else {
                    b.className = 'hata-subj-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition';
                }
            });
            renderHataDefteri();
        }

        function filterHataStatus(stat) {
            currentHataStatus = stat;
            document.querySelectorAll('.hata-stat-btn').forEach(b => {
                if (b.getAttribute('data-stat') === stat) {
                    b.className = 'hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 transition';
                } else {
                    b.className = 'hata-stat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition';
                }
            });
            renderHataDefteri();
        }

        function saveStudentMistakeNote(qId, note) {
            studentMistakeNotes[qId] = note;
            localStorage.setItem(STORAGE_PREFIX + 'hata_defteri_notes', JSON.stringify(studentMistakeNotes));
        }

        function toggleLearnedArchived(qId) {
            learnedArchivedQuestions[qId] = !learnedArchivedQuestions[qId];
            localStorage.setItem(STORAGE_PREFIX + 'hata_defteri_archived', JSON.stringify(learnedArchivedQuestions));
            renderHataDefteri();
        }

        function retryQuestionInHata(subj, qId) {
            if (studentAnswers[subj]) {
                delete studentAnswers[subj][qId];
                localStorage.setItem(STORAGE_PREFIX + 'student_answers', JSON.stringify(studentAnswers));
            }
            testCompleted[subj] = false;
            localStorage.setItem(STORAGE_PREFIX + 'test_completed', JSON.stringify(testCompleted));

            switchTab(subj);
            renderSubjectQuestions(subj);
            renderNavPills();
            scrollToQuestion(qId);
        }

        function renderHataDefteri() {
            const listEl = document.getElementById('hata-defteri-list');
            const countBadge = document.getElementById('badge-hata-count');
            const db = window.EXAM_DATABASE;
            if (!listEl || !db) return;

            const allSubjs = [
                { key: 'ydt', label: 'YDT İngilizce' },
                { key: 'turkce', label: 'TYT Türkçe' },
                { key: 'matematik', label: 'TYT Matematik' },
                ${hasFen ? "{ key: 'fen', label: 'TYT Fen' }," : ''}
                ${hasSosyal ? "{ key: 'sosyal', label: 'TYT Sosyal' }," : ''}
                { key: 'reading', label: 'Reading' }
            ];

            const mistakes = [];

            allSubjs.forEach(sObj => {
                const questions = db[sObj.key] || [];
                questions.forEach((q, idx) => {
                    const ans = studentAnswers[sObj.key] ? studentAnswers[sObj.key][q.id] : undefined;
                    const isLearned = !!learnedArchivedQuestions[q.id];
                    const isWrong = ans !== undefined && ans !== q.correctAnswer;
                    const isBlank = ans === undefined;

                    if (isWrong || isBlank || isLearned) {
                        mistakes.push({
                            subject: sObj.key,
                            subjLabel: sObj.label,
                            qNum: idx + 1,
                            question: q,
                            studentAnswer: ans,
                            isWrong,
                            isBlank,
                            isLearned
                        });
                    }
                });
            });

            // Update badge count
            if (countBadge) countBadge.innerText = mistakes.length + ' Soru';

            // Filter mistakes
            let filtered = mistakes;
            if (currentHataSubject !== 'all') {
                filtered = filtered.filter(m => m.subject === currentHataSubject);
            }
            if (currentHataStatus === 'wrong') {
                filtered = filtered.filter(m => m.isWrong && !m.isLearned);
            } else if (currentHataStatus === 'blank') {
                filtered = filtered.filter(m => m.isBlank && !m.isLearned);
            } else if (currentHataStatus === 'learned') {
                filtered = filtered.filter(m => m.isLearned);
            }

            if (filtered.length === 0) {
                listEl.innerHTML = \`
                    <div class="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-500">
                        <i class="fa-solid fa-circle-check text-emerald-500 text-3xl mb-2"></i>
                        <p class="font-bold text-sm text-slate-800 dark:text-slate-200">Harika! Bu filtrede listelenecek soru bulunamadı.</p>
                        <p class="text-xs text-slate-400 mt-1">Testleri çözerken yanlış yaptığınız veya boş bıraktığınız sorular burada arşivlenir.</p>
                    </div>
                \`;
            } else {
                listEl.innerHTML = filtered.map(item => {
                    const q = item.question;
                    const note = studentMistakeNotes[q.id] || '';

                    return \`
                        <div class="p-5 sm:p-6 rounded-2xl border \${item.isLearned ? 'border-emerald-500/60 bg-emerald-50/20 dark:bg-emerald-950/20' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'} space-y-4">
                            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                                <div class="flex items-center space-x-2">
                                    <span class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-xs flex items-center justify-center font-mono">
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
                const ans = studentAnswers[subj] ? studentAnswers[subj][q.id] : undefined;
                if (!ans) blank++;
                else if (ans === q.correctAnswer) correct++;
                else wrong++;
            });

            const net = Math.max(0, correct - (wrong / 4));
            return { correct, wrong, blank, net: Number(net.toFixed(2)), total: questions.length };
        }

        function updateScoresAndKarne() {
            const ydtScore = calculateSubjectScore('ydt');
            const turkceScore = calculateSubjectScore('turkce');
            const matScore = calculateSubjectScore('matematik');
            const rdScore = calculateSubjectScore('reading');
            ${hasFen ? "const fenScore = calculateSubjectScore('fen');" : ''}
            ${hasSosyal ? "const sosScore = calculateSubjectScore('sosyal');" : ''}

            const totalCorrect = ydtScore.correct + turkceScore.correct + matScore.correct + rdScore.correct ${hasFen ? '+ fenScore.correct' : ''} ${hasSosyal ? '+ sosScore.correct' : ''};
            const totalWrong = ydtScore.wrong + turkceScore.wrong + matScore.wrong + rdScore.wrong ${hasFen ? '+ fenScore.wrong' : ''} ${hasSosyal ? '+ sosScore.wrong' : ''};
            const totalNet = Number(Math.max(0, totalCorrect - (totalWrong / 4)).toFixed(2));

            // Update UI elements
            const ydtNetEl = document.getElementById('score-ydt-net');
            if (ydtNetEl) {
                ydtNetEl.innerText = ydtScore.net.toFixed(2);
                document.getElementById('score-ydt-detail').innerText = \`\${ydtScore.total} Soru • \${ydtScore.correct} D / \${ydtScore.wrong} Y\`;
            }

            const trkNetEl = document.getElementById('score-turkce-net');
            if (trkNetEl) {
                trkNetEl.innerText = turkceScore.net.toFixed(2);
                document.getElementById('score-turkce-detail').innerText = \`\${turkceScore.total} Soru • \${turkceScore.correct} D / \${turkceScore.wrong} Y\`;
            }

            const matNetEl = document.getElementById('score-matematik-net');
            if (matNetEl) {
                matNetEl.innerText = matScore.net.toFixed(2);
                document.getElementById('score-matematik-detail').innerText = \`\${matScore.total} Soru • \${matScore.correct} D / \${matScore.wrong} Y\`;
            }

            const totNetEl = document.getElementById('score-total-net');
            if (totNetEl) {
                totNetEl.innerText = totalNet.toFixed(2);
                document.getElementById('score-total-detail').innerText = \`\${${totalQuestions}} Soru • \${totalCorrect} D / \${totalWrong} Y\`;
            }

            // Update AI Coach feedback
            const coachHead = document.getElementById('coach-headline');
            const coachBody = document.getElementById('coach-body');
            if (coachHead && coachBody) {
                if (totalCorrect === 0 && totalWrong === 0) {
                    coachHead.innerText = 'Henüz Test Çözümü Başlamadı';
                    coachBody.innerText = '${day}. gün çalışma planındaki testleri çözmeye başladığınızda güçlü ve zayıf konu alanlarınız yapay zeka koçluk modülü tarafından analiz edilecektir.';
                } else if (totalNet > ${totalQuestions * 0.75}) {
                    coachHead.innerText = '🔥 Mükemmel Performans & Yüksek Net!';
                    coachBody.innerText = \`Tebrikler! Toplam \${totalNet} net ile hedef seviyenin üzerindesiniz. Hata Defteri sekmesindeki az sayıdaki soruyu inceleyip 15 hedef kelimeyi tamamlayınız.\`;
                } else if (totalNet > ${totalQuestions * 0.45}) {
                    coachHead.innerText = '⚡ İstikrarlı İlerleme — Odaklanma Gereken Alanlar Var';
                    coachBody.innerText = \`Toplam \${totalNet} net elde ettiniz. Yanlış yaptığınız sorularda 'Gramer Kuralı' ve 'ÖSYM Çözümü' kutularını inceleyerek özel notlarınızı hata defterine kaydedin.\`;
                } else {
                    coachHead.innerText = '🎯 Temel Kavramları Pekiştirme Zamanı';
                    coachBody.innerText = \`Şu an \${totalNet} net seviyesindesiniz. Yanlış ve boş bıraktığınız soruları Hata Defteri sekmesinde 'Bu Soruyu Yeniden Çöz' butonuyla tekrar deneyiniz.\`;
                }
            }
        }

        function updateChart() {
            const ctx = document.getElementById('scoreChart');
            if (!ctx) return;

            const isDark = document.documentElement.classList.contains('dark');
            const textColor = isDark ? '#cbd5e1' : '#475569';
            const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';

            const ydtScore = calculateSubjectScore('ydt');
            const trkScore = calculateSubjectScore('turkce');
            const matScore = calculateSubjectScore('matematik');
            const rdScore = calculateSubjectScore('reading');
            ${hasFen ? "const fenScore = calculateSubjectScore('fen');" : ''}
            ${hasSosyal ? "const sosScore = calculateSubjectScore('sosyal');" : ''}

            const chartLabels = ['YDT İngilizce', 'TYT Türkçe', 'TYT Matematik', ${hasFen ? "'TYT Fen', " : ''}${hasSosyal ? "'TYT Sosyal', " : ''}'Reading'];
            const chartData = [ydtScore.net, trkScore.net, matScore.net, ${hasFen ? "fenScore.net, " : ''}${hasSosyal ? "sosScore.net, " : ''}rdScore.net];

            if (scoreChartInstance) {
                scoreChartInstance.data.labels = chartLabels;
                scoreChartInstance.data.datasets[0].data = chartData;
                scoreChartInstance.options.scales.x.ticks.color = textColor;
                scoreChartInstance.options.scales.y.ticks.color = textColor;
                scoreChartInstance.options.scales.x.grid.color = gridColor;
                scoreChartInstance.options.scales.y.grid.color = gridColor;
                scoreChartInstance.update();
            } else {
                scoreChartInstance = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: chartLabels,
                        datasets: [{
                            label: 'Net Puanı (D - Y/4)',
                            data: chartData,
                            backgroundColor: [
                                'rgba(14, 165, 233, 0.85)',
                                'rgba(16, 185, 129, 0.85)',
                                'rgba(245, 158, 11, 0.85)',
                                ${hasFen ? "'rgba(16, 185, 129, 0.85)', " : ''}
                                ${hasSosyal ? "'rgba(245, 158, 11, 0.85)', " : ''}
                                'rgba(20, 184, 166, 0.85)'
                            ],
                            borderRadius: 8
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } },
                                grid: { color: gridColor }
                            },
                            x: {
                                ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11, weight: 'bold' } },
                                grid: { display: false }
                            }
                        }
                    }
                });
            }
        }
    </script>
</body>
</html>
`;
}

// Write all HTML files
console.log('=== GENERATING ALL 14 DAY HTML PAGES ===\n');

daysData.forEach(dayConfig => {
  const htmlContent = generateDayHtml(dayConfig);
  fs.writeFileSync(dayConfig.fileName, htmlContent, 'utf8');
  const sizeKb = (htmlContent.length / 1024).toFixed(1);
  console.log(`✓ Generated ${dayConfig.fileName} (${sizeKb} KB)`);
});

// Also update sinav_merkezi.html as master Day 1 mirror
const day1Mirror = generateDayHtml(daysData[0]);
fs.writeFileSync('sinav_merkezi.html', day1Mirror, 'utf8');
console.log('✓ Updated sinav_merkezi.html as master Day 1 mirror');

console.log('\n🎉 ALL 14 HTML FILES SUCCESSFULLY GENERATED!\n');
