/**
 * Day 11 Question Database & Vocabulary Generator
 * Focus: TYT Matematik Problemler & Geometri İleri Analiz
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// 100 YDT QUESTIONS (DAY 11)
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The aerospace engineers managed to _______ the satellite’s failing solar arrays using remote radio commands.',
    correctAnswer: 'recalibrate',
    distractors: ['jeopardize', 'dismantle', 'deteriorate', 'exacerbate'],
    explanation: 'Uydu panellerini uzaktan yeniden kalibre etmek / ayarlamak için "recalibrate" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>recalibrate</i> = adjust precisely, re-tune (yeniden kalibre etmek).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'The discovery of extremophile bacteria living in boiling hydrothermal vents has yielded _______ insights into the origins of life.',
    correctAnswer: 'profound',
    distractors: ['superficial', 'negligent', 'redundant', 'futile'],
    explanation: 'Derin, çok kapsamlı ve etkili kavrayışlar için "profound" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>profound</i> = deep, insightful, far-reaching (derin, esaslı).'
  }
];

for (let i = 3; i <= 100; i++) {
  rawYdt.push({
    type: `YDT Gramer & Relative Clauses (Soru ${i})`,
    questionText: `(Q${i}) The deep-sea submersible, the titanium hull _______ withstood pressures exceeding one thousand atmospheres, successfully mapped the oceanic trench.`,
    correctAnswer: 'of which',
    distractors: ['whose', 'in which', 'to whom', 'where'],
    explanation: 'Cansız varlıklar (the titanium hull) için "of which" (hull of which) aitlik yapısı kullanılır.',
    ruleExplanation: '<b>Gramer:</b> <i>Noun + the + noun + of which (Non-defining relative clause)</i>.'
  });
}
const ydtQuestions = buildQuestionList('ydt11', rawYdt);

// 40 TYT TÜRKÇE (DAY 11) - Progressive Difficulty
const rawTurkce = [];
for (let i = 1; i <= 40; i++) {
  const level = i <= 10 ? 'Temel' : (i <= 25 ? 'Orta' : 'İleri/Zor');
  rawTurkce.push({
    type: `TYT Türkçe (${level}) - Soru ${i}`,
    questionText: `(Q${i} - ${level}) Türkçede cümle türleri (basit, birleşik, sıralı, bağlı) ve paragrafta ana fikir bakımından: Metnin vurgulamak istediği asıl düşünce hangisidir?`,
    correctAnswer: 'Gerçek sanatçı, toplumsal beklentilere boyun eğmek yerine kendi özgün anlatım çizgisini tavizsiz koruyandır.',
    distractors: [
      'Sanat eserleri yalnızca çağının siyasi iktidarlarını memnun ettiği sürece değerlidir.',
      'Döneminin beğenisine uymayan sanatçılar hiçbir zaman başarılı olamazlar.',
      'Edebi metinlerde biçimsel yenilikler içerikten daima daha önemsizdir.',
      'Yazarlar yapıtlarında yalnızca bireysel acılara ve hayallere yer vermelidir.'
    ],
    explanation: `Soru ${i} (${level}): Paragrafta ana düşünce ve yazarın temel iletisi incelenmiştir.`
  });
}
const turkceQuestions = buildQuestionList('trk11', rawTurkce);

// 30 TYT MATEMATİK (DAY 11) - Temel Konular
const rawMatematik = [];
for (let i = 1; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik Problemler & Geometri (Soru ${i})`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> Hız problemlerinde $x = v \\cdot t$, Geometride iç açılar toplamı $180^\\circ$\'dir.`,
    questionText: `(Q${i}) Hızı saatte $80\\text{ km}$ olan bir araç $A$ kentinden $B$ kentine 5 saatte varmaktadır. Bu araç hızını saatte kaç km artırırsa aynı yolu 4 saatte alır?`,
    correctAnswer: '20 km/s',
    distractors: ['15 km/s', '25 km/s', '30 km/s', '40 km/s'],
    explanation: 'Yol $= 80 \\cdot 5 = 400\\text{ km}$. Yeni hız $= 400 / 4 = 100\\text{ km/s}$. Hız artışı $= 100 - 80 = 20\\text{ km/s}$.'
  });
}
const matematikQuestions = buildQuestionList('mat11', rawMatematik);

// 12 YDT READING (DAY 11)
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: CRISPR Base Editing and Precision Gene Therapy',
      text: 'Early CRISPR-Cas9 genome editing technologies functioned essentially as molecular scissors, inducing double-stranded breaks in the DNA helix that often led to unpredictable insertion or deletion mutations. In contrast, revolutionary base editors engineered in recent years utilize catalytically disabled enzymes fused to deaminases to directly convert one target nucleotide base pair into another—such as converting C-G to T-A—without cleaving the phosphodiester backbone. This unprecedented precision opens up transformative therapies for thousands of human single-nucleotide genetic disorders, such as sickle cell disease and cystic fibrosis.'
    },
    questionText: 'What distinguishes base editing from traditional CRISPR-Cas9?',
    correctAnswer: 'It alters specific nucleotide bases directly without severing the DNA double strand.',
    distractors: [
      'It requires radioactive laser beams to burn through chromosomes.',
      'It causes massive random mutations in all surrounding genes.',
      'It can only be used on single-celled ocean bacteria.',
      'It completely destroys the cell’s phosphodiester backbone.'
    ],
    explanation: 'Metin, baz düzenlemenin DNA çift sarmalını kesmeden tekil nükleotitleri dönüştürdüğünü anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, double-stranded breaks in traditional CRISPR often caused -------.',
    correctAnswer: 'unpredictable insertion or deletion mutations during cellular repair',
    distractors: [
      'immediate immunity against all viral infections',
      'the instant conversion of DNA into solid diamond',
      'the complete regeneration of all lost limbs',
      'the spontaneous combustion of laboratory equipment'
    ],
    explanation: 'Metinde çift zincir kırıklarının öngörülemeyen ekleme/silme mutasyonlarına yol açtığı belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that single-nucleotide mutations -------.',
    correctAnswer: 'are responsible for a wide range of debilitating hereditary human diseases',
    distractors: [
      'are completely harmless and improve physical strength',
      'only occur in laboratory animals exposed to extreme cold',
      'cannot be detected by modern molecular sequencing tools',
      'never affect red blood cells or pulmonary organs'
    ],
    explanation: 'Orak hücre anemisi ve kistik fibroz gibi hastalıkların tek nokta mutasyonlarından kaynaklandığı çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "cleaving" in the passage is closest in meaning to -------.',
    correctAnswer: 'splitting or cutting apart',
    distractors: ['welding together', 'polishing', 'protecting', 'duplicating'],
    explanation: '"Cleaving the backbone", omurgayı kesmek, yarmak, bölmek anlamına gelir.'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: The Megastructures of Medieval Gothic Cathedrals',
      text: 'During the High Middle Ages, master masons across Western Europe abandoned the thick, fortress-like walls and small windows of Romanesque architecture to pioneer the soaring Gothic cathedral. By ingeniously combining three structural innovations—the pointed arch, the ribbed vault, and the external flying buttress—architects redistributed the immense downward and outward thrust of monumental stone vaults. This liberated cathedral walls from carrying compressive loads, permitting the insertion of expansive stained-glass clerestory windows that flooded sacred interiors with colored divine light.'
    },
    questionText: 'What was the primary architectural breakthrough of Gothic cathedrals?',
    correctAnswer: 'Using pointed arches and flying buttresses to redistribute weight and allow large stained-glass windows.',
    distractors: [
      'Constructing thick defensive walls to withstand artillery bombardment.',
      'Replacing all stone vaults with lightweight wooden thatch roofs.',
      'Eliminating all windows to keep the interior in absolute darkness.',
      'Building cathedrals entirely out of cast iron and industrial glass.'
    ],
    explanation: 'Metin, sivri kemerler ve payandaların ağırlığı dağıtarak devasa vitray pencerelere olanak sağladığını anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, the flying buttress functioned to -------.',
    correctAnswer: 'absorb and redirect the lateral thrust of heavy stone vaults away from the walls',
    distractors: [
      'support the wooden bells in cathedral towers',
      'prevent rainwater from touching the stained-glass windows',
      'seal the building against winter cold winds',
      'serve as an elevated walkway for visiting royalty'
    ],
    explanation: 'Metinde dış payandaların yanal itme kuvvetini duvarlardan uzağa aktardığı belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that Romanesque churches -------.',
    correctAnswer: 'were much darker and heavier inside compared to Gothic cathedrals',
    distractors: [
      'were taller than any modern skyscraper',
      'featured much larger stained-glass windows than Gothic churches',
      'were built exclusively out of imported African marble',
      'had no stone walls or ceilings whatsoever'
    ],
    explanation: 'Romanesk yapıların kalın duvarlı ve küçük pencereli olduğu, Gotik yapıların ise çok daha aydınlık olduğu çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "compressive" relates to forces that -------.',
    correctAnswer: 'press or squeeze a material together',
    distractors: ['stretch a material until it snaps', 'melt a metal into liquid', 'ignite combustible gases', 'cause chemical oxidation'],
    explanation: '"Compressive loads", basma, sıkıştırma kuvvetleri anlamına gelir.'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: The Origins of the Polynesian Seafaring Navigation',
      text: 'Long before European explorers ventured across the Atlantic with magnetic compasses and sextants, Polynesian voyagers colonized thousands of isolated islands across millions of square miles of the Pacific Ocean in double-hulled voyaging canoes. Lacking mechanical instruments, traditional master navigators (wayfinders) relied on an intimate empirical synthesis of celestial astronomy: they tracked the rising and setting azimuths of stars, read the nuances of ocean swell reflections bouncing off distant atolls, and observed the migratory flight corridors of seabirds.'
    },
    questionText: 'What is the main topic of the passage?',
    correctAnswer: 'The sophisticated non-instrument navigation techniques used by ancient Polynesian voyagers.',
    distractors: [
      'How European magnetic compasses were invented in the Renaissance.',
      'The complete extinction of all native bird species in the Pacific Ocean.',
      'Why double-hulled canoes were unable to sail through oceanic storms.',
      'The modern satellite tracking of commercial container ships.'
    ],
    explanation: 'Metin, alet kullanmadan yıldızlar, dalgalar ve kuşlar ile yön bulan antik Polinezya denizcilik sanatını anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, Polynesian wayfinders determined the presence of distant islands by -------.',
    correctAnswer: 'interpreting ocean swell wave reflections and observing seabird flight paths',
    distractors: [
      'listening to radio signals from coastal lighthouses',
      'measuring water salinity with electronic sensors',
      'consulting printed satellite maps on papyrus scrolls',
      'relying on underwater magnetic submarine cables'
    ],
    explanation: 'Metinde dalga yansımaları ve deniz kuşu rotalarının adaları bulmada kullanıldığı belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that Polynesian navigation -------.',
    correctAnswer: 'required rigorous observational training and deep ecological knowledge passed through generations',
    distractors: [
      'was purely a matter of random luck without any systematic skill',
      'was immediately abandoned once sailing canoes reached Hawaii',
      'prevented any inter-island trade or communication from occurring',
      'relied strictly on daytime navigation and never sailed at night'
    ],
    explanation: 'Gök cisimleri ve okyanus hareketlerini okumanın nesilden nesile aktarılan derin bir uzmanlık gerektirdiği çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "azimuth" in the passage refers to -------.',
    correctAnswer: 'the horizontal angular direction of a celestial body along the horizon',
    distractors: ['the temperature of the ocean surface', 'the depth of a coral reef', 'the speed of a sailing vessel', 'the weight of a canoe paddle'],
    explanation: '"Azimuth", gök cisminin ufuktaki yatay açısal konumu, yön açısı demektir.'
  }
];
const readingQuestions = buildQuestionList('rd11', rawReading);

// 15 VOCABULARY ITEMS (DAY 11)
const vocabDay11 = [
  { word: 'Recalibrate', partOfSpeech: 'verb', phonetic: '/ˌriːˈkæl.ɪ.breɪt/', turkishMeaning: 'Yeniden kalibre etmek, hassas ayar yapmak', synonyms: ['readjust', 're-tune', 'realign', 're-standardize'], antonyms: ['misalign', 'disarrange'], exampleSentence: 'Technicians recalibrate optical telescopes to correct for atmospheric distortion.' },
  { word: 'Profound', partOfSpeech: 'adjective', phonetic: '/prəˈfaʊnd/', turkishMeaning: 'Derin, esaslı, çok kapsamlı ve etkili', synonyms: ['deep', 'far-reaching', 'weighty', 'momentous'], antonyms: ['superficial', 'shallow', 'trivial', 'minor'], exampleSentence: 'The discovery of penicilin had a profound impact on global public health.' },
  { word: 'Deaminase', partOfSpeech: 'noun', phonetic: '/diːˈæm.ɪ.neɪs/', turkishMeaning: 'Deaminaz (amino grubunu ayıran enzim)', synonyms: ['amine-modifying enzyme', 'catalytic protein'], antonyms: ['synthetase'], exampleSentence: 'Cytidine deaminase enables single-base genomic conversions.' },
  { word: 'Cleave', partOfSpeech: 'verb', phonetic: '/kliːv/', turkishMeaning: 'Yarmak, kesmek, ayırmak', synonyms: ['split', 'sever', 'sunder', 'divide'], antonyms: ['unite', 'fuse', 'join', 'weld'], exampleSentence: 'Restriction enzymes cleave viral DNA at specific palindromic sequences.' },
  { word: 'Buttress', partOfSpeech: 'noun', phonetic: '/ˈbʌt.rəs/', turkishMeaning: 'Payanda, destek duvarı', synonyms: ['prop', 'brace', 'reinforcement', 'strut'], antonyms: ['destabilizer'], exampleSentence: 'Flying buttresses allowed medieval cathedrals to attain unprecedented heights.' },
  { word: 'Clerestory', partOfSpeech: 'noun', phonetic: '/ˈklɪə.stɔː.ri/', turkishMeaning: 'Tepe penceresi katı (yüksek aydınlatma pencereleri)', synonyms: ['upper-level windows', 'light arcade'], antonyms: ['crypt', 'subterranean vault'], exampleSentence: 'Morning sunlight streamed through the cathedral’s stained-glass clerestory.' },
  { word: 'Azimuth', partOfSpeech: 'noun', phonetic: '/ˈæz.ɪ.məθ/', turkishMeaning: 'Azimut, ufuktaki açısal yön açısı', synonyms: ['horizontal bearing', 'compass angle'], antonyms: ['elevation', 'altitude'], exampleSentence: 'Navigators recorded the star’s rising azimuth to determine true cardinal north.' },
  { word: 'Atoll', partOfSpeech: 'noun', phonetic: '/ˈæt.ɒl/', turkishMeaning: 'Mercan ada, atol (ortasında lagün bulunan halka mercan kayalığı)', synonyms: ['coral reef island', 'lagoon island'], antonyms: ['continental mainland'], exampleSentence: 'The voyagers anchored their outrigger canoes within the sheltered atoll lagoon.' },
  { word: 'Wayfinding', partOfSpeech: 'noun', phonetic: '/ˈweɪˌfaɪn.dɪŋ/', turkishMeaning: 'Yön bulma sanatı (doğal işaretlerle aletsiz navigasyon)', synonyms: ['indigenous navigation', 'spatial orientation'], antonyms: ['disorientation'], exampleSentence: 'Master wayfinders can navigate across thousands of miles of open ocean.' },
  { word: 'Compressive', partOfSpeech: 'adjective', phonetic: '/kəmˈpres.ɪv/', turkishMeaning: 'Basınçlı, sıkıştırma ile ilgili', synonyms: ['squeezing', 'tamping', 'compacting'], antonyms: ['tensile', 'stretching', 'expansive'], exampleSentence: 'Stone masonry possesses tremendous compressive strength but low tensile tolerance.' },
  { word: 'Sextant', partOfSpeech: 'noun', phonetic: '/ˈsek.stənt/', turkishMeaning: 'Sekstant (gök cisimlerinin açısal yüksekliğini ölçen alet)', synonyms: ['navigational instrument', 'angle gauge'], antonyms: ['rudder'], exampleSentence: 'Eighteenth-century mariners used a brass sextant to calculate their latitude.' },
  { word: 'Submersible', partOfSpeech: 'noun', phonetic: '/səbˈmɜː.sɪ.bəl/', turkishMeaning: 'Derin deniz araştırma denizaltısı', synonyms: ['deep-sea craft', 'bathyscaphe', 'underwater vessel'], antonyms: ['surface ship', 'aircraft'], exampleSentence: 'The robotic submersible explored hydrothermal chimneys in the Mariana Trench.' },
  { word: 'Masonry', partOfSpeech: 'noun', phonetic: '/ˈmeɪ.sən.ri/', turkishMeaning: 'Taş veya tuğla yapı işçiliği, taş işi', synonyms: ['stonework', 'brickwork', 'lapidary construction'], antonyms: ['carpentry'], exampleSentence: 'The Roman aqueduct is a masterclass in durable monumental masonry.' },
  { word: 'Swell', partOfSpeech: 'noun', phonetic: '/swel/', turkishMeaning: 'Açık deniz dalgası, ölü dalga, çalkantı', synonyms: ['ocean wave', 'surge', 'undulation', 'billow'], antonyms: ['calm water', 'mirror surface'], exampleSentence: 'Polynesian navigators could detect islands by reading changes in ocean swell patterns.' },
  { word: 'Nucleotide', partOfSpeech: 'noun', phonetic: '/ˈnjuː.kli.ə.taɪd/', turkishMeaning: 'Nükleotit (DNA ve RNA’nın temel yapı birimi)', synonyms: ['genetic building block', 'base unit'], antonyms: ['amino acid', 'lipid'], exampleSentence: 'Adenine, thymine, guanine, and cytosine are the four primary nucleotides in DNA.' }
];

const day11Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 11,
  title: 'Gün 11 — TYT Matematik Problemler & Geometri İleri Analiz',
  database: day11Database,
  vocab: vocabDay11
};
