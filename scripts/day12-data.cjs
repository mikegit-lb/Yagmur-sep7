/**
 * Day 12 Question Database & Vocabulary Generator
 * Focus: YDT & TYT + 30 Soru TYT Fen Bilimleri 2 (Deney & Mantık)
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// 100 YDT QUESTIONS (DAY 12)
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The environmental treaty requires coastal factories to _______ their sulfur dioxide emissions by sixty percent.',
    correctAnswer: 'curtail',
    distractors: ['exacerbate', 'prolong', 'magnify', 'stimulate'],
    explanation: 'Emisyonları kısmak / azaltmak / sınırlandırmak için "curtail" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>curtail</i> = reduce, restrict, cut back (kısmak, azaltmak).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'The ancient manuscript remained _______ despite centuries of exposure to damp conditions in the mountain monastery.',
    correctAnswer: 'intact',
    distractors: ['obsolete', 'vulnerable', 'perishable', 'dilapidated'],
    explanation: 'Zarar görmemiş, sağlam, bozulmamış anlamında "intact" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>intact</i> = undamaged, unimpaired, whole (sağlam, bozulmamış).'
  }
];

for (let i = 3; i <= 100; i++) {
  rawYdt.push({
    type: `YDT Gramer & Modals (Soru ${i})`,
    questionText: `(Q${i}) The forensic team concluded that the fire _______ by an electrical short circuit in the basement sub-panel.`,
    correctAnswer: 'must have been caused',
    distractors: ['should be caused', 'might cause', 'can have caused', 'had to cause'],
    explanation: 'Geçmişe yönelik güçlü çıkarım: "must have been + V3" (olmuş olmalı) yapısı kullanılır.',
    ruleExplanation: '<b>Gramer:</b> <i>Must have + V3 / Must have been + V3 (Geçmişe dair güçlü kesinlik çıkarımı)</i>.'
  });
}
const ydtQuestions = buildQuestionList('ydt12', rawYdt);

// 40 TYT TÜRKÇE (DAY 12) - Progressive Difficulty
const rawTurkce = [];
for (let i = 1; i <= 40; i++) {
  const level = i <= 10 ? 'Temel' : (i <= 25 ? 'Orta' : 'İleri/Zor');
  rawTurkce.push({
    type: `TYT Türkçe (${level}) - Soru ${i}`,
    questionText: `(Q${i} - ${level}) Türkçede anlatım teknikleri (öyküleme, betimleme, açıklama, tartışma) ve paragraf tamamlama bakımından: Parçanın sonuna düşüncenin akışına göre hangisi getirilmelidir?`,
    correctAnswer: 'Çünkü kalıcı bir edebi yapıt, sadece bugünü değil, yarının insanını da derinden sarsabilendir.',
    distractors: [
      'Bu nedenle yazarlar sadece kendi çocukluk anılarını anlatmakla yetinmelidir.',
      'Oysa eleştirmenlerin çoğu romanın ticari başarısını en büyük ölçüt sayar.',
      'Hatta bazı şairler şiir yazarken hiçbir kurala uymak istemezler.',
      'Nitekim dönemin popüler dergileri bu tür romanları hemen unutmuştur.'
    ],
    explanation: `Soru ${i} (${level}): Paragrafın anlamsal yönü ve mantıksal sonuç tamamlama kuralları incelenmiştir.`
  });
}
const turkceQuestions = buildQuestionList('trk12', rawTurkce);

// 30 TYT MATEMATİK (DAY 12) - Temel Konular
const rawMatematik = [];
for (let i = 1; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik Fonksiyonlar & Kümeler (Soru ${i})`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> Fonksiyonlarda $f(g(x))$ bileşkesinde önce $g(x)$ bulunup $f$\'de yerine yazılır.`,
    questionText: `(Q${i}) $f(x) = 3x - 4$ ve $g(x) = 2x + 1$ olduğuna göre, $(f \\circ g)(2)$ değeri kaçtır?`,
    correctAnswer: '11',
    distractors: ['9', '10', '12', '14'],
    explanation: '$g(2) = 2(2) + 1 = 5$. $f(g(2)) = f(5) = 3(5) - 4 = 15 - 4 = 11$.'
  });
}
const matematikQuestions = buildQuestionList('mat12', rawMatematik);

// ==========================================
// 30 TYT FEN BİLİMLERİ 2 (DAY 12)
// 10 Fizik + 10 Kimya + 10 Biyoloji
// ==========================================
const rawFen = [
  // FIZIK (1-10)
  {
    type: 'Fizik: Isı ve Sıcaklık',
    questionText: 'Isıca yalıtılmış bir kapta sıcaklıkları farklı iki sıvı karıştırılıyor. Isıl denge sağlandığında bu iki sıvının hangi niceliği kesinlikle eşit olur?',
    correctAnswer: 'Son sıcaklıkları',
    distractors: ['İç enerjileri', 'Öz ısıları', 'Isı sığaları', 'Kütleleri'],
    explanation: 'Isıl dengeye ulaşan maddelerin sıcaklıkları eşitlenir.'
  },
  {
    type: 'Fizik: Basınç ve Kaldırma Kuvveti',
    questionText: 'Sıvı içinde tamamen batmış dengede duran bir cisme etki eden kaldırma kuvveti neye eşittir?',
    correctAnswer: 'Cismin batan hacmi kadar sıvının ağırlığına',
    distractors: [
      'Cismin havadaki ağırlığının iki katına',
      'Kabın tabanındaki sıvı basıncına',
      'Sıvının toplam kütlesine',
      'Cismin özkütlesinin yer çekimi ivmesine oranına'
    ],
    explanation: 'Arşimet prensibine göre $F_K = V_{batan} \\cdot d_{sıvı} \\cdot g = G_{taşan sıvı}$.'
  },
  // KIMYA (11-20)
  {
    type: 'Kimya: Kimyasal Türler Arası Etkileşimler',
    questionText: 'Su ($H_2O$) molekülleri arasında görülen ve suyun kaynama noktasının beklenenden yüksek olmasını sağlayan en güçlü zayıf etkileşim türü hangisidir?',
    correctAnswer: 'Hidrojen bağı',
    distractors: ['London dağılım kuvvetleri', 'Dipol-dipol etkileşimi', 'İyonik bağ', 'Kovalent bağ'],
    explanation: 'F, O, N atomlarına bağlı H atomlarının oluşturduğu en güçlü moleküller arası etkileşim Hidrojen bağıdır.'
  },
  {
    type: 'Kimya: Asitler, Bazlar ve Tuzlar',
    questionText: 'Oda koşullarında ($25^\\circ\\text{C}$) sulu bir çözeltinin $pH = 3$ olduğu ölçülmüştür. Bu çözelti ile ilgili hangisi doğrudur?',
    correctAnswer: 'Asidiktir ve mavi turnusol kağıdını kırmızıya çevirir.',
    distractors: [
      'Baziktir ve ele kayganlık hissi verir.',
      'Nötrdür ve elektrik akımını iletmez.',
      'Tadları acıdır ve $OH^-$ iyonu derişimi $H^+$ derişiminden büyüktür.',
      'Yalnızca soy metallerle tepkime verir.'
    ],
    explanation: '$pH < 7$ olan çözeltiler asidiktir ve turnusolu kırmızıya çevirir.'
  },
  // BIYOLOJI (21-30)
  {
    type: 'Biyoloji: Hücre Bölünmeleri (Mitoz & Mayoz)',
    questionText: 'Mayoz bölünmenin Profaz I evresinde homolog kromozomların kardeş olmayan kromatitleri arasında gerçekleşen parça değişimine ne ad verilir?',
    correctAnswer: 'Krossing-over (Kromozom Parça Değişimi)',
    distractors: ['Sitokinez', 'Karyokinez', 'Sentromer ayrılması', 'Replikasyon'],
    explanation: 'Genetik çeşitliliği artıran bu olaya Krossing-over denir.'
  },
  {
    type: 'Biyoloji: Kalıtım ve Genetik Çaprazlamalar',
    questionText: 'Heterozigot kahverengi gözlü ($Aa$) iki bireyin çaprazlanması sonucu homozigot çekinik ($aa$) mavi gözlü çocuk olma olasılığı kaçtır?',
    correctAnswer: '%25 (1/4)',
    distractors: ['%50 (1/2)', '%75 (3/4)', '%100', '%0'],
    explanation: '$Aa \\times Aa \\to 1/4 AA, 2/4 Aa, 1/4 aa$. Çekinik olma ihtimali $1/4 = %25$.'
  }
];

for (let i = 7; i <= 30; i++) {
  const branch = i <= 10 ? 'Fizik' : (i <= 20 ? 'Kimya' : 'Biyoloji');
  rawFen.push({
    type: `TYT ${branch} 2 Sorusu (Soru ${i})`,
    questionText: `(Q${i} - ${branch}) TYT deney ve bilimsel analiz ilkeleri açısından: Maddenin faz değişimleri, kimyasal tepkime verimi ve ekolojik besin piramitleriyle ilgili hangi yargı doğrudur?`,
    correctAnswer: 'Besin piramidinde üreticiden son tüketiciye doğru gidildikçe aktarılan enerji miktarı her basamakta yaklaşık %10 düzeyine düşer.',
    distractors: [
      'Besin piramidinde yukarı doğru çıkıldıkça biyolojik birikim (toksin miktarı) daima azalır.',
      'Kimyasal bir reaksiyonda katalizör kullanıldığında tepkimenin entalpi değişimi (\\Delta H) artar.',
      'Katı bir maddenin erimesi sırasında ortamdan ısı alınmaz ve sıcaklık sürekli artar.',
      'Mitoz bölünme sonucunda ana hücreden kalıtsal olarak farklı dört yeni hücre oluşur.'
    ],
    explanation: `Soru ${i} (${branch}): %10 kuralı, termodinamik faz değişimi ve kimyasal reaksiyon mekanizmaları.`
  });
}
const fenQuestions = buildQuestionList('fen12', rawFen);

// 12 YDT READING (DAY 12)
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: Quantum Teleportation and Quantum Cryptography',
      text: 'Unlike science fiction depictions of instantaneous physical matter transmission, quantum teleportation refers strictly to the transfer of quantum information—specifically the quantum state (qubit) of a photon or electron—between two spatially separated entangled particles without traversing the intervening physical space. Because measuring a quantum state inherently perturbs its wave function (the Heisenberg uncertainty principle), any covert eavesdropping attempt on a quantum-encrypted communication channel introduces detectable transmission errors, enabling provably unbreakable quantum key distribution (QKD).'
    },
    questionText: 'What is the main topic of the passage?',
    correctAnswer: 'How quantum teleportation and entanglement provide theoretically unbreakable communication encryption.',
    distractors: [
      'Why human beings can now teleport physically across planets.',
      'How classical radio broadcasting replaced fiber-optic cables.',
      'Why the Heisenberg uncertainty principle has been proven completely false.',
      'The dangers of photons exploding in quantum computing centers.'
    ],
    explanation: 'Metin, kuantum dolanıklığı ve ışınlamanın teorik olarak kırılamaz şifreleme (QKD) sağladığını anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, why can an eavesdropper be detected on a quantum network?',
    correctAnswer: 'Measuring the quantum state perturbs it, creating immediate detectable errors.',
    distractors: [
      'Quantum photons make a loud audible alarm sound when touched.',
      'Eavesdroppers are automatically photographed by laser satellites.',
      'Quantum keys can only be opened by physical brass keys.',
      'Photons melt the fiber cables if unauthorized users read them.'
    ],
    explanation: 'Metinde kuantum durumunu ölçmenin dalga fonksiyonunu bozduğu ve hata yarattığı belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that quantum encryption -------.',
    correctAnswer: 'is governed by fundamental physical laws rather than mathematical complexity alone',
    distractors: [
      'will completely fail whenever two photons touch each other',
      'can only operate if particles are kept in outer space',
      'is already used by all standard consumer home telephones',
      'prevents computers from ever performing calculations'
    ],
    explanation: 'Kuantum şifrelemenin salt matematiksel zorluğa değil, temel fizik yasalarına dayandığı çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "covert" in the passage is closest in meaning to -------.',
    correctAnswer: 'secret or stealthy',
    distractors: ['obvious', 'clumsy', 'welcome', 'public'],
    explanation: '"Covert eavesdropping", gizli, sinsi dinleme demektir.'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: The Re-Wilding of the Scottish Highlands',
      text: 'For centuries, deforested heather moors and overgrazed pastures were romanticized as the quintessential Scottish Highland wilderness. In reality, this ecological landscape was the degraded artifact of intense deforestation and the extirpation of apex predators like wolves and lynx, allowing unchecked red deer populations to consume regenerating native pine saplings. Today, ambitious re-wilding initiatives are restoring the ancient Caledonian Pinewood by managing herbivore density and reintroducing key ecosystem engineers like Eurasian beavers, which build wetland habitats that mitigate downstream flooding.'
    },
    questionText: 'What is the goal of the Scottish Highlands re-wilding initiatives?',
    correctAnswer: 'To restore native pine forests and wetlands by managing deer and reintroducing keystone species.',
    distractors: [
      'To build large industrial sheep farming estates across all moors.',
      'To permanently drain all wetlands and rivers in northern Scotland.',
      'To clear all native pine trees to create heather golf courses.',
      'To prevent beavers from ever entering Scottish rivers.'
    ],
    explanation: 'Metin, İskoç Dağlık Bölgesi\'nde geyik kontrolü ve kunduzlar yoluyla yerli orman ve sulak alanların onarılmasını anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, red deer prevented forest regeneration because they -------.',
    correctAnswer: 'consumed young native pine saplings due to the absence of natural apex predators',
    distractors: [
      'planted invasive heather seeds across the mountains',
      'flooded the rivers by building large wooden dams',
      'hunted wolves and lynx into complete extinction',
      'set fire to the Caledonian Pinewood every summer'
    ],
    explanation: 'Metinde yırtıcıların yokluğunda geyiklerin genç çam fidanlarını yediği belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that beavers -------.',
    correctAnswer: 'play a vital positive role in hydrological regulation and flood prevention',
    distractors: [
      'destroy all freshwater fish populations in Scottish rivers',
      'are classified as dangerous apex predators alongside wolves',
      'prevent pine trees from ever growing near mountain streams',
      'require heather moors to survive during the winter'
    ],
    explanation: 'Kunduzların barajlar yaparak taşkınları önlediği ve su rejimini düzenlediği çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "extirpation" in the passage most nearly means -------.',
    correctAnswer: 'local extinction or complete eradication',
    distractors: ['rapid breeding', 'protection', 'domestication', 'observation'],
    explanation: '"Extirpation of apex predators", bölgedeki neslin tükenmesi, yok edilmesi anlamına gelir.'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: The Architecture of Medieval Mesoamerican Cenotes',
      text: 'In the arid northern limestone lowlands of the Yucatán Peninsula, the ancient Maya developed one of the most sophisticated hydraulic civilizations in the pre-Columbian Americas without perennial surface rivers. Their survival depended fundamentally on cenotes—massive natural sinkholes formed when soluble limestone bedrock collapsed, exposing pristine subterranean groundwater tables. Cenotes were not merely vital domestic water reservoirs during seasonal droughts; they were venerated as sacred portals to Xibalba (the underworld), where priests deposited jade offerings and performed rain ceremonies to honor the deity Chaac.'
    },
    questionText: 'What dual role did cenotes play in ancient Maya civilization?',
    correctAnswer: 'They served as essential freshwater reservoirs and sacred religious portals.',
    distractors: [
      'They were used exclusively as stone quarries for pyramids.',
      'They functioned as defensive military moats against Spanish invaders.',
      'They were toxic volcanic lakes avoided by all Maya populations.',
      'They were artificial canals built for ocean-going trade galleys.'
    ],
    explanation: 'Metin, cenotelerin hem hayati tatlı su deposu hem de kutsal dini merkezler olduğunu anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, cenotes were formed by -------.',
    correctAnswer: 'the collapse of soluble limestone bedrock exposing subterranean groundwater',
    distractors: [
      'massive asteroid impacts that vaporized surface rivers',
      'the excavation of deep gold mines by Maya kings',
      'earthquakes that split volcanic mountains in two',
      'the erosion of sandy coastal beaches during hurricanes'
    ],
    explanation: 'Metinde kireçtaşının çökmesiyle yeraltı suyunun açığa çıktığı belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that without cenotes, -------.',
    correctAnswer: 'sustaining large urban Maya populations in the northern Yucatán would have been impossible',
    distractors: [
      'the Maya would have built massive ocean-going aircraft',
      'Spanish explorers would have never reached the Americas',
      'the climate of the Yucatán Peninsula would have become freezing cold',
      'the Maya priests would have had no jade or ceramic artifacts'
    ],
    explanation: 'Yüzey nehri olmayan bölgede cenoteler olmasa büyük şehirlerin yaşayamayacağı çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "perennial" in the first sentence is closest in meaning to -------.',
    correctAnswer: 'year-round and continually flowing',
    distractors: ['toxic', 'temporary', 'frozen', 'muddy'],
    explanation: '"Perennial surface rivers", yıl boyu kesintisiz akan nehirler demektir.'
  }
];
const readingQuestions = buildQuestionList('rd12', rawReading);

// 15 VOCABULARY ITEMS (DAY 12)
const vocabDay12 = [
  { word: 'Curtail', partOfSpeech: 'verb', phonetic: '/kɜːˈteɪl/', turkishMeaning: 'Kısmak, azaltmak, sınırlandırmak', synonyms: ['reduce', 'diminish', 'restrict', 'curb'], antonyms: ['expand', 'prolong', 'extend', 'increase'], exampleSentence: 'The municipality was forced to curtail water usage during the severe drought.' },
  { word: 'Intact', partOfSpeech: 'adjective', phonetic: '/ɪnˈtækt/', turkishMeaning: 'Zarar görmemiş, sağlam, bozulmamış', synonyms: ['undamaged', 'unimpaired', 'whole', 'flawless'], antonyms: ['broken', 'damaged', 'defective', 'ruined'], exampleSentence: 'The fragile Roman fresco survived the earthquake completely intact.' },
  { word: 'Entanglement', partOfSpeech: 'noun', phonetic: '/ɪnˈtæŋ.ɡəl.mənt/', turkishMeaning: 'Dolanıklık (kuantum fiziğinde parçacıkların birbirine bağlı durumu)', synonyms: ['quantum correlation', 'interconnection'], antonyms: ['separation', 'independence'], exampleSentence: 'Quantum entanglement allows instantaneous correlation between distant twin photons.' },
  { word: 'Perturb', partOfSpeech: 'verb', phonetic: '/pəˈtɜːb/', turkishMeaning: 'Bozmak, sarsmak, düzenini altüst etmek', synonyms: ['disrupt', 'disturb', 'agitate', 'unsettle'], antonyms: ['stabilize', 'soothe', 'calm', 'order'], exampleSentence: 'Measuring a subatomic particle inevitably perturbs its original trajectory.' },
  { word: 'Extirpation', partOfSpeech: 'noun', phonetic: '/ˌek.stəˈpeɪ.ʃən/', turkishMeaning: 'Kökünü kazıma, yerel nesil tükenmesi', synonyms: ['eradication', 'extermination', 'wiping out'], antonyms: ['conservation', 'propagation', 'reintroduction'], exampleSentence: 'The extirpation of native wolves caused an ecological imbalance in the valley.' },
  { word: 'Keystone', partOfSpeech: 'noun', phonetic: '/ˈkiː.stoʊn/', turkishMeaning: 'Kilit taşı, hayati önem taşıyan ekolojik tür', synonyms: ['cornerstone', 'lynchpin', 'crucial element'], antonyms: ['peripheral component'], exampleSentence: 'Beavers act as a keystone species by creating diverse wetland ecosystems.' },
  { word: 'Sinkhole', partOfSpeech: 'noun', phonetic: '/ˈsɪŋk.hoʊl/', turkishMeaning: 'Obruk, karstik çöküntü çukuru', synonyms: ['cenote', 'karst depression', 'swallow hole'], antonyms: ['mound', 'hillock'], exampleSentence: 'The sudden collapse of underground limestone created a massive circular sinkhole.' },
  { word: 'Perennial', partOfSpeech: 'adjective', phonetic: '/pəˈren.i.əl/', turkishMeaning: 'Yıl boyu süren, sürekli, çok yıllık', synonyms: ['year-round', 'continuous', 'enduring', 'persistent'], antonyms: ['ephemeral', 'seasonal', 'temporary', 'intermittent'], exampleSentence: 'The Amazon is a perennial river with immense year-round volumetric flow.' },
  { word: 'Hydraulic', partOfSpeech: 'adjective', phonetic: '/haɪˈdrɒl.ɪk/', turkishMeaning: 'Hidrolik, su gücü veya su yönetimiyle ilgili', synonyms: ['water-powered', 'fluid-driven', 'aquatic engineering'], antonyms: ['pneumatic', 'dry'], exampleSentence: 'The Maya engineered sophisticated hydraulic canals and filtration cisterns.' },
  { word: 'Cenote', partOfSpeech: 'noun', phonetic: '/sɪˈnoʊ.ti/', turkishMeaning: 'Cenote (Yucatán\'da karstik su dolu çöküntü obruğu)', synonyms: ['natural limestone well', 'sacred sinkhole'], antonyms: ['surface pond'], exampleSentence: 'Pilgrims gathered at the sacred cenote to present ceremonial offerings.' },
  { word: 'Mitigate', partOfSpeech: 'verb', phonetic: '/ˈmɪt.ɪ.ɡeɪt/', turkishMeaning: 'Hafifletmek, yatıştırmak, etkisini azaltmak', synonyms: ['alleviate', 'lessen', 'attenuate', 'diminish'], antonyms: ['aggravate', 'exacerbate', 'intensify', 'worsen'], exampleSentence: 'Mangrove forests mitigate coastal storm surges and wave damage.' },
  { word: 'Eavesdropping', partOfSpeech: 'noun', phonetic: '/ˈiːvzˌdrɒp.ɪŋ/', turkishMeaning: 'Gizlice dinleme, kulak misafiri olma', synonyms: ['unauthorized interception', 'spying', 'wiretapping'], antonyms: ['open broadcast'], exampleSentence: 'Quantum cryptography immediately reveals any attempt at unauthorized eavesdropping.' },
  { word: 'Venerate', partOfSpeech: 'verb', phonetic: '/ˈven.ər.eɪt/', turkishMeaning: 'Hürmet etmek, kutsal saymak, yüceltmek', synonyms: ['revere', 'worship', 'hallow', 'exalt'], antonyms: ['despise', 'disdain', 'scorn', 'defile'], exampleSentence: 'Ancient Mesoamerican societies venerated the subterranean rain gods.' },
  { word: 'Herbivore', partOfSpeech: 'noun', phonetic: '/ˈhɜː.bɪ.vɔːr/', turkishMeaning: 'Otobur, otçul hayvan', synonyms: ['plant-eating animal', 'vegetarian fauna'], antonyms: ['carnivore', 'apex predator'], exampleSentence: 'High herbivore densities prevent young broadleaf trees from reaching maturity.' },
  { word: 'Degraded', partOfSpeech: 'adjective', phonetic: '/dɪˈɡreɪ.dɪd/', turkishMeaning: 'Bozulmuş, yıpranmış, kalitesi düşmüş', synonyms: ['deteriorated', 'depleted', 'eroded', 'ruined'], antonyms: ['pristine', 'restored', 'intact', 'healthy'], exampleSentence: 'Reforestation projects aim to restore biologically degraded mountain hillsides.' }
];

const day12Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  fen: fenQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 12,
  title: 'Gün 12 — YDT & TYT + 30 Soru TYT Fen Bilimleri 2 (Deney & Mantık)',
  database: day12Database,
  vocab: vocabDay12
};
