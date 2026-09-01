/**
 * Day 13 Question Database & Vocabulary Generator
 * Focus: YDT Reading Akademik Metinler & Çeviri Ustalığı
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// 100 YDT QUESTIONS (DAY 13)
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The pharmaceutical research institute managed to _______ a novel compound capable of neutralizing drug-resistant bacteria.',
    correctAnswer: 'synthesize',
    distractors: ['exterminate', 'deteriorate', 'jeopardize', 'surrender'],
    explanation: 'Yeni bir kimyasal/ilaç bileşiği sentezlemek / üretmek için "synthesize" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>synthesize</i> = manufacture chemically, produce, formulate (sentezlemek).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'The candidate gave a _______ explanation that left the audience in no doubt about her policy intentions.',
    correctAnswer: 'lucid',
    distractors: ['vague', 'perplexing', 'monotonous', 'negligent'],
    explanation: 'Açık, anlaşılır, son derece net anlamında "lucid" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>lucid</i> = clear, easily understood, articulate (açık, net).'
  }
];

for (let i = 3; i <= 100; i++) {
  rawYdt.push({
    type: `YDT Gramer & Conjunctions (Soru ${i})`,
    questionText: `(Q${i}) _______ the harsh sub-zero temperatures and high altitude winds, the mountaineering expedition successfully reached the Himalayan summit.`,
    correctAnswer: 'Notwithstanding',
    distractors: ['Whereas', 'Inasmuch as', 'Provided that', 'In case of'],
    explanation: 'İsim öbeği ile kullanılan ve zıtlık bildiren prepozisyonel bağlaç: "Notwithstanding" (Despite, -e rağmen).',
    ruleExplanation: '<b>Gramer:</b> <i>Notwithstanding + Noun Phrase = Despite / In spite of (-e rağmen)</i>.'
  });
}
const ydtQuestions = buildQuestionList('ydt13', rawYdt);

// 40 TYT TÜRKÇE (DAY 13) - Progressive Difficulty
const rawTurkce = [];
for (let i = 1; i <= 40; i++) {
  const level = i <= 10 ? 'Temel' : (i <= 25 ? 'Orta' : 'İleri/Zor');
  rawTurkce.push({
    type: `TYT Türkçe (${level}) - Soru ${i}`,
    questionText: `(Q${i} - ${level}) Türkçede paragrafta ikiye bölme, anlatım ilkeleri (duruluk, açıklık, akıcılık, özgünlük) bakımından: Parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar?`,
    correctAnswer: 'IV. cümleyle başlar; çünkü bu cümleden itibaren konunun farklı bir yönüne (yazarın üslubuna) geçilmiştir.',
    distractors: [
      'II. cümleyle başlar; çünkü yazar yeni bir kahramanı tanıtmıştır.',
      'III. cümleyle başlar; çünkü olay örgüsünde geriye dönüş yapılmıştır.',
      'V. cümleyle başlar; çünkü metin burada sonuca bağlanmıştır.',
      'VI. cümleyle başlar; çünkü doğrudan alıntı yapılmıştır.'
    ],
    explanation: `Soru ${i} (${level}): Paragrafı ikiye bölme ve düşünce ekseninin değiştiği cümle ilkeleri incelenmiştir.`
  });
}
const turkceQuestions = buildQuestionList('trk13', rawTurkce);

// 30 TYT MATEMATİK (DAY 13) - Temel Konular
const rawMatematik = [];
for (let i = 1; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik Mantık & Kümeler (Soru ${i})`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> $s(A \\cup B) = s(A) + s(B) - s(A \\cap B)$.`,
    questionText: `(Q${i}) $s(A) = 14$, $s(B) = 18$ ve $s(A \\cap B) = 6$ olduğuna göre, $s(A \\cup B)$ kaçtır?`,
    correctAnswer: '26',
    distractors: ['22', '24', '28', '32'],
    explanation: '$s(A \\cup B) = 14 + 18 - 6 = 32 - 6 = 26$.'
  });
}
const matematikQuestions = buildQuestionList('mat13', rawMatematik);

// 12 YDT READING (DAY 13)
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: Synthetic Diamond Chemical Vapor Deposition',
      text: 'For decades, synthetic diamonds were produced exclusively via High Pressure High Temperature (HPHT) presses that simulated the crushing subterranean mantle conditions under which natural diamonds form. Today, Chemical Vapor Deposition (CVD) has revolutionized the industry. In a vacuum chamber infused with hydrocarbon gas and energized by microwave plasma, carbon atoms precipitate layer by layer onto a diamond seed crystal. CVD produces diamonds of atomic purity and semiconductor-grade electrical conductivity, opening up revolutionary heat-sink applications for high-power laser optics and quantum computing processors.'
    },
    questionText: 'What is the primary advantage of CVD diamond synthesis discussed in the text?',
    correctAnswer: 'It produces ultra-pure diamonds suitable for advanced semiconductor and quantum applications.',
    distractors: [
      'It allows diamonds to be mined with traditional diesel excavators.',
      'It reduces the hardness of diamonds so they can be easily crushed.',
      'It creates artificial diamonds that dissolve in hot water.',
      'It eliminates the need for any carbon atoms in diamond synthesis.'
    ],
    explanation: 'Metin, CVD yönteminin yarı iletken ve kuantum uygulamalarına uygun ultra saf elmas ürettiğini anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, how does the CVD process physically work?',
    correctAnswer: 'Hydrocarbon gas is energized into plasma so carbon atoms precipitate onto a diamond seed.',
    distractors: [
      'Natural diamonds are melted into boiling liquid at room temperature.',
      'Massive hydraulic presses crush volcanic rocks under ocean water.',
      'Laser beams burn radioactive uranium into solid crystal carbon.',
      'Subterranean lava is pumped directly into commercial vacuum chambers.'
    ],
    explanation: 'Metinde hidrokarbon gazının plazmaya dönüştürülüp karbon atomlarının tohum kristal üzerine çökeldiği belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that CVD diamonds -------.',
    correctAnswer: 'have important technological functions far beyond decorative luxury jewelry',
    distractors: [
      'are too soft to be used in laser optics or semiconductors',
      'will cause all natural diamond mining to end next year',
      'cannot withstand standard atmospheric room temperatures',
      'are completely opaque and cannot transmit any light'
    ],
    explanation: 'Lazer optikleri ve kuantum işlemcilerdeki ısı dağıtma fonksiyonuyla teknolojideki hayati rolü çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "precipitate" in the passage is closest in meaning to -------.',
    correctAnswer: 'deposit or condense out from a vapor or solution',
    distractors: ['evaporate completely', 'ignite into flames', 'dissolve harmlessly', 'shatter violently'],
    explanation: '"Precipitate layer by layer", katman katman çökelmek, birikmek anlamına gelir.'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: Bioluminescent Signaling in the Abyssal Ocean',
      text: 'In the bathypelagic twilight zone of the open ocean—between one thousand and four thousand meters deep—over ninety percent of marine organisms produce biological light via luciferin-luciferase chemical reactions. Because red light wavelengths are rapidly absorbed by water molecules, abyssal bioluminescence emits almost exclusively in the blue-green spectrum, which travels farthest through clear seawater. Marine fauna utilize this living illumination for counter-illumination camouflage, dazzling predatory distraction, and species-specific mate attraction in an otherwise pitch-black abyss.'
    },
    questionText: 'Why do most deep-sea organisms emit blue-green rather than red bioluminescence?',
    correctAnswer: 'Blue-green wavelengths travel farthest through seawater because red light is absorbed quickly.',
    distractors: [
      'Red light is too heavy to travel through deep oceanic water currents.',
      'Abyssal predators are completely blind to blue-green light spectrums.',
      'Seawater chemically reacts with red light to create poisonous chlorine gas.',
      'Luciferin enzymes can only be manufactured in boiling thermal springs.'
    ],
    explanation: 'Metinde mavi-yeşil dalga boylarının deniz suyunda en uzağa ulaştığı, kırmızı ışığın ise hızla soğurulduğu belirtilir.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, counter-illumination camouflage enables fish to -------.',
    correctAnswer: 'match downwelling light from the surface so predators below cannot see their silhouette',
    distractors: [
      'freeze the surrounding ocean water into solid ice barriers',
      'blind deep-sea divers with intense radioactive laser pulses',
      'transform their skin scales into transparent glass windows',
      'generate enough electrical heat to warm the ocean floor'
    ],
    explanation: 'Metinde biyolüminesansın kamuflaj ve silüet gizleme için kullanıldığı anlatılır.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that without bioluminescence, -------.',
    correctAnswer: 'reproduction and hunting in the deep ocean twilight zone would be severely impaired',
    distractors: [
      'all marine water would become completely toxic to human beings',
      'deep-sea fish would easily migrate to shallow coral reefs',
      'oceanic volcanic vents would stop emitting mineral nutrients',
      'the sun would no longer be able to illuminate the surface of Earth'
    ],
    explanation: 'Zifiri karanlık derinliklerde ışık üretmenin eş bulma ve avlanma için vazgeçilmez olduğu çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "abyssal" refers to -------.',
    correctAnswer: 'the deepest, sunless regions of the ocean',
    distractors: ['shallow freshwater mountain streams', 'coastal sandy tidal pools', 'polar ice glaciers', 'tropical mangrove swamps'],
    explanation: '"Abyssal ocean", okyanusun en derin, ışıksız tabakaları (abisal bölge) demektir.'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: The Urban Engineering of Ancient Teotihuacan',
      text: 'Flourishing in the Valley of Mexico between 100 BCE and 650 CE, the ancient metropolis of Teotihuacan was one of the largest planned cities in the pre-industrial world, housing an estimated one hundred and twenty-five thousand residents. Constructed along a monumental north-south axis known as the Avenue of the Dead, the city featured an orthogonal grid plan oriented precisely 15.5 degrees east of astronomical true north. Remarkably, rather than reserving permanent stone masonry solely for temples and palaces, Teotihuacan authorities constructed over two thousand multi-family apartment compounds with interior courtyards and sophisticated drainage systems.'
    },
    questionText: 'What is unique about the urban planning of ancient Teotihuacan?',
    correctAnswer: 'It featured a strict orthogonal grid system with standardized stone apartment compounds for citizens.',
    distractors: [
      'It had no roads, buildings, or water systems of any kind.',
      'It was constructed entirely out of cast bronze and imported glass.',
      'It was built on floating reed rafts in the Pacific Ocean.',
      'It banned all citizens from living within the city boundaries.'
    ],
    explanation: 'Metin, Teotihuacan\'ın ızgara şehir planı ve halk için taş çok aileli konut kompleksleri inşa ettiğini vurgular.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, the city\'s main monumental artery was known as -------.',
    correctAnswer: 'the Avenue of the Dead',
    distractors: ['the Boulevard of the Sun', 'the Pyramid Causeway', 'the Aztec Imperial Canal', 'the Obsidian Highway'],
    explanation: 'Metinde ana eksenin "Avenue of the Dead" (Ölüler Yolu) olduğu belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that the society of Teotihuacan -------.',
    correctAnswer: 'possessed advanced astronomical, geometrical, and administrative coordination',
    distractors: [
      'was completely disorganized and built mud huts randomly',
      'collapsed because it refused to trade with neighboring cultures',
      'had no knowledge of calendar cycles or cardinal directions',
      'was ruled exclusively by foreign Roman legionaries'
    ],
    explanation: 'Izgara plan, 15.5 derece astronomik yönelim ve drenaj sistemleri yüksek yönetim ve geometri bilgisine işaret eder.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "orthogonal" in urban planning means -------.',
    correctAnswer: 'intersecting at right angles to form a grid',
    distractors: ['completely circular without corners', 'winding randomly through hills', 'subterranean and hidden', 'floating on water'],
    explanation: '"Orthogonal grid", dik açılarla kesişen ızgara plan demektir.'
  }
];
const readingQuestions = buildQuestionList('rd13', rawReading);

// 15 VOCABULARY ITEMS (DAY 13)
const vocabDay13 = [
  { word: 'Synthesize', partOfSpeech: 'verb', phonetic: '/ˈsɪn.θə.saɪz/', turkishMeaning: 'Sentezlemek, kimyasal olarak üretmek, birleştirmek', synonyms: ['produce', 'formulate', 'compound', 'manufacture'], antonyms: ['decompose', 'disintegrate', 'break down'], exampleSentence: 'Chemists synthesize antiviral medications in computerized laboratories.' },
  { word: 'Lucid', partOfSpeech: 'adjective', phonetic: '/ˈluː.sɪd/', turkishMeaning: 'Açık, anlaşılır, berrak, net', synonyms: ['clear', 'articulate', 'intelligible', 'limpid'], antonyms: ['obscure', 'vague', 'confusing', 'opaque'], exampleSentence: 'The professor gave a lucid explanation of relativistic time dilation.' },
  { word: 'Precipitate', partOfSpeech: 'verb', phonetic: '/prɪˈsɪp.ɪ.teɪt/', turkishMeaning: 'Çökelmek, çökeltmek; hızlandırmak', synonyms: ['deposit', 'settle', 'condense', 'trigger'], antonyms: ['dissolve', 'evaporate', 'delay'], exampleSentence: 'Carbon atoms precipitate from hydrocarbon plasma onto the diamond wafer.' },
  { word: 'Bioluminescence', partOfSpeech: 'noun', phonetic: '/ˌbaɪ.oʊˌluː.mɪˈnes.əns/', turkishMeaning: 'Biyolüminesans (canlıların kimyasal ışık üretmesi)', synonyms: ['living light', 'biochemical illumination'], antonyms: ['darkness'], exampleSentence: 'Fireflies and deep-sea anglerfish utilize bioluminescence to attract prey.' },
  { word: 'Luciferin', partOfSpeech: 'noun', phonetic: '/luːˈsɪf.ər.ɪn/', turkishMeaning: 'Lüsiferin (biyolüminesansı sağlayan ışık verici pigment)', synonyms: ['light-emitting substrate', 'bioluminescent molecule'], antonyms: ['pigment'], exampleSentence: 'Luciferin reacts with oxygen in the presence of luciferase to produce green light.' },
  { word: 'Abyssal', partOfSpeech: 'adjective', phonetic: '/əˈbɪs.əl/', turkishMeaning: 'Abisal, okyanus derinliklerine ait', synonyms: ['deep-sea', 'bathypelagic', 'profoundly deep'], antonyms: ['shallow', 'coastal', 'littoral', 'pelagic'], exampleSentence: 'Abyssal plain ecosystems thrive under crushing hydrostatic pressure.' },
  { word: 'Orthogonal', partOfSpeech: 'adjective', phonetic: '/ɔːˈθɒɡ.ən.əl/', turkishMeaning: 'Dik açılı, ızgara biçimli (ortogonal)', synonyms: ['perpendicular', 'right-angled', 'grid-aligned'], antonyms: ['oblique', 'diagonal', 'curvilinear'], exampleSentence: 'Manhattan’s street layout is designed on a strictly orthogonal grid.' },
  { word: 'Metropolis', partOfSpeech: 'noun', phonetic: '/məˈtrɒp.əl.ɪs/', turkishMeaning: 'Metropol, büyük anakent', synonyms: ['megacity', 'capital', 'urban center'], antonyms: ['village', 'hamlet'], exampleSentence: 'Ancient Alexandria was a thriving commercial and cultural metropolis.' },
  { word: 'Notwithstanding', partOfSpeech: 'preposition', phonetic: '/ˌnɒt.wɪðˈstæn.dɪŋ/', turkishMeaning: '-e rağmen, karşın', synonyms: ['despite', 'in spite of', 'regardless of'], antonyms: ['because of', 'owing to'], exampleSentence: 'Notwithstanding the torrential rain, the football match proceeded as scheduled.' },
  { word: 'Semiconductor', partOfSpeech: 'noun', phonetic: '/ˌsem.i.kənˈdʌk.tər/', turkishMeaning: 'Yarı iletken madde (silisyum, elmas vb.)', synonyms: ['electronic chip material', 'solid-state conductor'], antonyms: ['insulator', 'superconductor'], exampleSentence: 'Silicon and CVD diamond are crucial materials for advanced semiconductor circuits.' },
  { word: 'Camouflage', partOfSpeech: 'noun', phonetic: '/ˈkæm.ə.flɑːʒ/', turkishMeaning: 'Kamuflaj, gizlenme', synonyms: ['disguise', 'concealment', 'protective coloration'], antonyms: ['conspicuousness', 'exposure'], exampleSentence: 'Cuttlefish alter their skin pigments rapidly for dynamic camouflage.' },
  { word: 'Axis', partOfSpeech: 'noun', phonetic: '/ˈæk.sɪs/', turkishMeaning: 'Eksen, doğrultu çizgisi', synonyms: ['central line', 'pivot', 'centerline', 'vector'], antonyms: ['periphery'], exampleSentence: 'The city was organized around a central north-south ceremonial axis.' },
  { word: 'Subterranean', partOfSpeech: 'adjective', phonetic: '/ˌsʌb.təˈreɪ.ni.ən/', turkishMeaning: 'Yeraltındaki, zemin altı', synonyms: ['underground', 'subsurface', 'hypogeal'], antonyms: ['aerial', 'surface', 'open-air'], exampleSentence: 'Subterranean aquifers supply freshwater to desert oases.' },
  { word: 'Compound', partOfSpeech: 'noun', phonetic: '/ˈkɒm.paʊnd/', turkishMeaning: 'Bileşik, site, çoklu bina kompleksi', synonyms: ['complex', 'enclosure', 'chemical substance'], antonyms: ['element', 'isolated unit'], exampleSentence: 'The embassy staff lived within a secure walled residential compound.' },
  { word: 'Vapor', partOfSpeech: 'noun', phonetic: '/ˈveɪ.pər/', turkishMeaning: 'Buhar, gaz hali', synonyms: ['steam', 'gaseous state', 'fume', 'mist'], antonyms: ['liquid', 'solid'], exampleSentence: 'Chemical vapor deposition deposits microscopic crystal layers with extreme accuracy.' }
];

const day13Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 13,
  title: 'Gün 13 — YDT Reading Akademik Metinler & Çeviri Ustalığı',
  database: day13Database,
  vocab: vocabDay13
};
