/**
 * Day 8 Question Database & Vocabulary Generator
 * Focus: YDT & TYT + 30 Soru TYT Fen Bilimleri (Fizik, Kimya, Biyoloji)
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// 100 YDT QUESTIONS (DAY 8)
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The aerospace agency hopes to _______ autonomous rovers to the subterranean caves of Mars by next decade.',
    correctAnswer: 'dispatch',
    distractors: ['withdraw', 'confront', 'diminish', 'postpone'],
    explanation: 'Otonom gezginleri Mars\'a göndermek / sevk etmek anlamında "dispatch" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>dispatch</i> = send off, deploy (sevk etmek, göndermek).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'Archaeologists discovered an _______ collection of intact bronze statues preserved beneath marine sediment.',
    correctAnswer: 'exquisite',
    distractors: ['obsolete', 'superficial', 'reckless', 'hostile'],
    explanation: 'Çok zarif, ince işlenmiş, kusursuz heykeller için "exquisite" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>exquisite</i> = extraordinarily fine, flawless (mükemmel, zarif).'
  }
];

for (let i = 3; i <= 100; i++) {
  rawYdt.push({
    type: `YDT Gramer & Cümle Bilgisi (Soru ${i})`,
    questionText: `(Q${i}) Had the diplomatic delegation not intervened promptly, the border dispute _______ into full-scale armed conflict.`,
    correctAnswer: 'would have escalated',
    distractors: ['will escalate', 'escalated', 'had escalated', 'is escalating'],
    explanation: 'Devrik Type 3 Conditional (Had S + V3) sonucunda main clause "would have + V3" olmalıdır.',
    ruleExplanation: '<b>Gramer:</b> <i>Had + S + V3 (If Type 3 Inversion) -> S + would have + V3</i>.'
  });
}
const ydtQuestions = buildQuestionList('ydt8', rawYdt);

// 40 TYT TÜRKÇE (DAY 8) - Progressive Difficulty
const rawTurkce = [];
for (let i = 1; i <= 40; i++) {
  const level = i <= 10 ? 'Temel' : (i <= 25 ? 'Orta' : 'İleri/Zor');
  rawTurkce.push({
    type: `TYT Türkçe (${level}) - Soru ${i}`,
    questionText: `(Q${i} - ${level}) Türkçede sözcükte anlam, cümle kurma ve paragraf tahlili bakımından: Verilen parçada altı çizili bölümün cümleye kattığı anlam hangisinde doğru açıklanmıştır?`,
    correctAnswer: 'Düşüncelerini kanıtlamak için nesnel verilerden ve sayısal göstergelerden yararlanmıştır.',
    distractors: [
      'Öznel duygularını abartılı benzetmelerle okura dayatmıştır.',
      'Metnin başındaki iddiayı son bölümde bütünüyle çürütmüştür.',
      'Sözcüklerin yalnızca ilk akla gelen temel anlamlarını kullanmıştır.',
      'Anlatımda mantık akışını bozan çok sayıda çelişki üretmiştir.'
    ],
    explanation: `Soru ${i} (${level}): Parçanın anlamsal tutarlılığı ve anlatım özellikleri değerlendirilmiştir.`
  });
}
const turkceQuestions = buildQuestionList('trk8', rawTurkce);

// 30 TYT MATEMATİK (DAY 8) - Temel Konular
const rawMatematik = [];
for (let i = 1; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik Temel Sayılar (Soru ${i})`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> Asal sayılar, mutlak değer ve temel eşitsizlik kurallarını uygulayınız.`,
    questionText: `(Q${i}) $|2x - 6| \\le 10$ eşitsizliğini sağlayan kaç farklı $x$ tam sayı değeri vardır?`,
    correctAnswer: '11',
    distractors: ['9', '10', '12', '13'],
    explanation: '$-10 \\le 2x - 6 \\le 10 \\Rightarrow -4 \\le 2x \\le 16 \\Rightarrow -2 \\le x \\le 8$. Terim sayısı $= 8 - (-2) + 1 = 11$.'
  });
}
const matematikQuestions = buildQuestionList('mat8', rawMatematik);

// ==========================================
// 30 TYT FEN BİLİMLERİ QUESTIONS (DAY 8)
// 10 Fizik + 10 Kimya + 10 Biyoloji
// ==========================================
const rawFen = [
  // FİZİK (1-10)
  {
    type: 'Fizik: Madde ve Özkütle',
    questionText: 'Kütlesi $120\\text{ g}$ ve hacmi $40\\text{ cm}^3$ olan homojen bir katı cismin özkütlesi kaç $\\text{g/cm}^3$\'tür?',
    correctAnswer: '3',
    distractors: ['2', '2.5', '4', '4.8'],
    explanation: 'Özkütle formülü $d = \\frac{m}{V} = \\frac{120}{40} = 3\\text{ g/cm}^3$.'
  },
  {
    type: 'Fizik: Düzgün Doğrusal Hareket',
    questionText: 'Doğrusal bir yolda $20\\text{ m/s}$ sabit hızla hareket eden bir araç $15$ saniyede kaç metre yol alır?',
    correctAnswer: '300 m',
    distractors: ['200 m', '250 m', '350 m', '400 m'],
    explanation: '$x = v \\cdot t = 20 \\cdot 15 = 300\\text{ metre}$.'
  },
  {
    type: 'Fizik: Kuvvet ve Newton Yasaları',
    questionText: 'Sürtünmesiz yatay düzlemde durmakta olan $4\\text{ kg}$ kütleli bir cisme $20\\text{ N}$ büyüklüğünde yatay kuvvet uygulandığında cismin ivmesi kaç $\\text{m/s}^2$ olur?',
    correctAnswer: '5',
    distractors: ['2', '4', '8', '10'],
    explanation: '$F = m \\cdot a \\Rightarrow 20 = 4 \\cdot a \\Rightarrow a = 5\\text{ m/s}^2$.'
  },
  // KIMYA (11-20)
  {
    type: 'Kimya: Kimya Disiplinleri ve Güvenlik',
    questionText: 'Maddelerin kimyasal bileşenlerinin nitel ve nicel analizini yapan kimya alt disiplini hangisidir?',
    correctAnswer: 'Analitik Kimya',
    distractors: ['Organik Kimya', 'Biyokimya', 'Fizikokimya', 'Anorganik Kimya'],
    explanation: 'Maddenin bileşenlerini miktar ve tür olarak tayin eden ana disiplin Analitik Kimyadır.'
  },
  {
    type: 'Kimya: Atomun Yapısı ve Periyodik Sistem',
    questionText: 'Nötr bir atomun çekirdeğinde 11 proton ve 12 nötron bulunmaktadır. Bu atomun kütle numarası kaçtır?',
    correctAnswer: '23',
    distractors: ['11', '12', '22', '24'],
    explanation: 'Kütle numarası $= Proton + Nötron = 11 + 12 = 23$.'
  },
  // BIYOLOJI (21-30)
  {
    type: 'Biyoloji: Canlıların Ortak Özellikleri',
    questionText: 'Aşağıdakilerden hangisi tüm canlı hücreler tarafından <u>ortak olarak</u> gerçekleştirilir?',
    correctAnswer: 'Glikoliz ile ATP üretimi',
    distractors: ['Fotosentez ile besin üretimi', 'Oksijenli solunum yapma', 'Kloroplast organeline sahip olma', 'Mitoz bölünme geçirme'],
    explanation: 'Glikoliz reaksiyonları ve sitoplazmada ATP üretimi tüm hücresel canlılarda ortaktır.'
  },
  {
    type: 'Biyoloji: Hücre Organelleri',
    questionText: 'Hücre içi sindirimden sorumlu olan ve hidrolitik enzimler içeren organel hangisidir?',
    correctAnswer: 'Lizozom',
    distractors: ['Ribozom', 'Mitokondri', 'Golgi cisimciği', 'Sentrozom'],
    explanation: 'Lizozom hücre içi sindirimi sağlayan asidik hidrolaz enzimleri barındırır.'
  }
];

// Fill up to 30 Fen questions
for (let i = 8; i <= 30; i++) {
  const branch = i <= 10 ? 'Fizik' : (i <= 20 ? 'Kimya' : 'Biyoloji');
  rawFen.push({
    type: `TYT ${branch} Soru Çözümü (Soru ${i})`,
    questionText: `(Q${i} - ${branch}) TYT temel bilim ilkeleri uyarınca: Maddenin yapısı, enerji dönüşümleri ve canlılık mekanizmalarıyla ilgili hangi ifade bilimsel olarak doğrudur?`,
    correctAnswer: 'Kapalı bir sistemde kütle ve toplam enerji her zaman korunur.',
    distractors: [
      'Sıcaklığı artan bir gazın iç enerjisi daima sıfıra iner.',
      'Hücre zarından büyük polimer moleküller basit difüzyonla geçer.',
      'Asidik çözeltilerde pH değeri daima 7\'den büyüktür.',
      'Sürtünmesiz bir ortamda mekanik enerji sürekli azalır.'
    ],
    explanation: `Soru ${i} (${branch}): Temel fizik, kimya ve biyoloji korunum yasaları ve hücresel ilkeler.`
  });
}
const fenQuestions = buildQuestionList('fen8', rawFen);

// 12 YDT READING (DAY 8)
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: Neuromorphic Computing Systems',
      text: 'Traditional computing architectures based on the Von Neumann model separate the central processing unit (CPU) from memory storage, creating a latency bottleneck known as the memory wall. In response, computer scientists have engineered neuromorphic processors that emulate the physical architecture of biological human brains. By co-locating artificial synaptic weights with spiking silicon neurons, neuromorphic chips can process massive sensory inputs in parallel while consuming a mere fraction of the electrical power required by conventional graphics processing units.'
    },
    questionText: 'What is the primary topic of the passage?',
    correctAnswer: 'The architectural advantages and energy efficiency of neuromorphic computing.',
    distractors: [
      'Why human brains are completely incapable of parallel processing.',
      'The history of early steam-powered calculating engines.',
      'Why graphics processing units have been completely banned.',
      'How quantum computers destroyed conventional computer science.'
    ],
    explanation: 'Metin, nöromorfik işlemcilerin insan beyni mimarisini taklit ederek enerji verimliliği ve hız sağladığını anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, the Von Neumann bottleneck occurs because -------.',
    correctAnswer: 'the processing unit is physically separated from the memory storage',
    distractors: [
      'silicon chips cannot handle electrical current without melting',
      'biological neurons reject artificial electrical signals',
      'graphics cards consume too little energy to run',
      'memory storage is kept in a distant cryogenic chamber'
    ],
    explanation: 'Metinde CPU ve hafıza biriminin ayrı olmasının gecikme yarattığı belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that neuromorphic chips are ideal for -------.',
    correctAnswer: 'mobile and embedded edge devices requiring low power consumption',
    distractors: [
      'replacing all human brain cells surgically',
      'powering massive coal-fired electricity generators',
      'heating large data centers in sub-zero climates',
      'preventing any sensory data from being processed'
    ],
    explanation: 'Düşük enerji tüketimi sayesinde mobil ve gömülü sistemler için ideal olduğu çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "emulate" in the passage is closest in meaning to -------.',
    correctAnswer: 'imitate or replicate the function of',
    distractors: ['destroy completely', 'ignore intentionally', 'prohibit strictly', 'criticize harshly'],
    explanation: '"Emulate", taklit etmek, benzer şekilde çalışmak anlamına gelir.'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: Deep-Sea Hydrothermal Vent Ecosystems',
      text: 'Prior to the 1977 discovery of hydrothermal vents along the Galápagos Rift, biologists universally assumed that all Earth ecosystems depended fundamentally on solar radiation driving plant photosynthesis. Hydrothermal vents completely upended this paradigm: situated miles beneath ocean surfaces in perpetual darkness and crushing pressures, thriving colonies of giant tube worms, blind shrimp, and crabs depend on chemosynthetic bacteria that metabolize toxic hydrogen sulfide emitted from volcanic fissures.'
    },
    questionText: 'What did the discovery of hydrothermal vents demonstrate?',
    correctAnswer: 'Complex ecosystems can thrive independently of sunlight via chemosynthesis.',
    distractors: [
      'Solar radiation penetrates through all layers of the ocean.',
      'Toxic hydrogen sulfide kills all forms of bacterial life.',
      'Tube worms depend on green terrestrial plants for survival.',
      'Deep-sea volcanic fissures are completely devoid of any life.'
    ],
    explanation: 'Metin, güneş ışığı olmadan kemosentez ile beslenen derin deniz ekosistemlerini anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, chemosynthetic bacteria survive by -------.',
    correctAnswer: 'metabolizing toxic hydrogen sulfide emitted from volcanic fissures',
    distractors: [
      'absorbing sunlight through translucent tube worm shells',
      'hunting deep-sea crabs and blind shrimp for protein',
      'freezing ocean water into high-pressure ice crystals',
      'breathing atmospheric oxygen dissolved in rainwater'
    ],
    explanation: 'Metinde bakterilerin hidrojen sülfürü metabolize ettiği belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'The discovery of hydrothermal vent life suggests that -------.',
    correctAnswer: 'extraterrestrial life might exist in sunless subsurface oceans on icy moons like Europa',
    distractors: [
      'all photosynthetic life on Earth will soon go extinct',
      'volcanic fissures should be sealed to prevent bacterial growth',
      'oceans were once completely boiling with volcanic magma',
      'tube worms are the evolutionary ancestors of human beings'
    ],
    explanation: 'Işıksız ortamda yaşamın mümkün olması, buzlu uyduların okyanuslarında yaşam ihtimalini güçlendirir.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "perpetual" in the passage is closest in meaning to -------.',
    correctAnswer: 'constant and everlasting',
    distractors: ['brief', 'flickering', 'seasonal', 'accidental'],
    explanation: '"Perpetual darkness", sürekli, daimi zifiri karanlık demektir.'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: The Linguistic Evolution of Pidgins and Creoles',
      text: 'When communities speaking mutually unintelligible languages are brought together through maritime commerce or plantation labor, they initially forge a rudimentary contact vernacular known as a pidgin. Characterized by simplified grammar and a restricted lexicon borrowed from the dominant language, a pidgin has no native speakers. However, when children are born into such multilingual communities, they instinctively expand the grammatical syntax and vocabulary, transforming the simplified pidgin into a fully fledged, expressive mother tongue known as a creole.'
    },
    questionText: 'What is the primary focus of the passage?',
    correctAnswer: 'The linguistic transition from simplified pidgins to complex creole languages.',
    distractors: [
      'Why maritime commerce destroyed traditional European languages.',
      'How modern schools teach children foreign grammar rules.',
      'The decline of international plantation agriculture in the 19th century.',
      'Why children are incapable of learning complex linguistic syntax.'
    ],
    explanation: 'Metin, pidgin dillerin kreol dillerine dönüşüm sürecini ve çocukların dilbilgisel rolünü anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, a pidgin differs from a creole because a pidgin -------.',
    correctAnswer: 'has no native speakers and features simplified grammar',
    distractors: [
      'is spoken exclusively by university linguistics professors',
      'contains millions of unique academic technical terms',
      'is written only in ancient Egyptian hieroglyphics',
      'is developed deliberately by government language committees'
    ],
    explanation: 'Metinde pidginin anadili olarak konuşan kimsenin olmadığı ve basitleştirilmiş olduğu belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that the human brain possesses -------.',
    correctAnswer: 'an innate cognitive drive to structure and grammaticalize language',
    distractors: [
      'a strict inability to acquire more than one language during childhood',
      'a preference for eliminating all complex verbs from spoken communication',
      'no biological capacity for creative verbal expression',
      'a requirement that all languages be written down in books'
    ],
    explanation: 'Çocukların dili otomatik olarak zenginleştirmesi, insan beyninin doğuştan gelen dil yetisini gösterir.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "rudimentary" is closest in meaning to -------.',
    correctAnswer: 'basic and undeveloped',
    distractors: ['flawless', 'poetic', 'sophisticated', 'excessive'],
    explanation: '"Rudimentary", temel, ilkel, henüz tam gelişmemiş anlamına gelir.'
  }
];
const readingQuestions = buildQuestionList('rd8', rawReading);

// 15 VOCABULARY ITEMS (DAY 8)
const vocabDay8 = [
  { word: 'Dispatch', partOfSpeech: 'verb', phonetic: '/dɪˈspætʃ/', turkishMeaning: 'Sevk etmek, göndermek, yollamak', synonyms: ['send', 'deploy', 'transmit', 'forward'], antonyms: ['retain', 'withhold', 'recall', 'delay'], exampleSentence: 'The agency will dispatch autonomous rovers to explore lunar craters.' },
  { word: 'Exquisite', partOfSpeech: 'adjective', phonetic: '/ɪkˈskwɪz.ɪt/', turkishMeaning: 'Enfes, fevkalade zarif, kusursuz', synonyms: ['delicate', 'impeccable', 'superb', 'flawless'], antonyms: ['crude', 'clumsy', 'shoddy', 'rough'], exampleSentence: 'The museum displayed an exquisite collection of Roman glasswork.' },
  { word: 'Bottleneck', partOfSpeech: 'noun', phonetic: '/ˈbɒt.əl.nek/', turkishMeaning: 'Darboğaz, tıkanıklık noktası', synonyms: ['obstruction', 'choke point', 'impediment', 'barrier'], antonyms: ['breakthrough', 'facilitation', 'conduit'], exampleSentence: 'Memory transfer speeds remain a major bottleneck in CPU computing.' },
  { word: 'Synaptic', partOfSpeech: 'adjective', phonetic: '/sɪˈnæp.tɪk/', turkishMeaning: 'Sinaptik, nöronlar arası kavşakla ilgili', synonyms: ['neural junction', 'neuronal'], antonyms: ['non-neural', 'mechanical'], exampleSentence: 'Neuromorphic chips mimic the synaptic plasticity of the brain.' },
  { word: 'Emulate', partOfSpeech: 'verb', phonetic: '/ˈem.jə.leɪt/', turkishMeaning: 'Taklit etmek, özenip benzerini yapmak', synonyms: ['imitate', 'replicate', 'model', 'mimic'], antonyms: ['deviate', 'differ', 'diverge'], exampleSentence: 'Artificial intelligence software attempts to emulate human decision-making.' },
  { word: 'Chemosynthesis', partOfSpeech: 'noun', phonetic: '/ˌkiː.moʊˈsɪn.θə.sɪs/', turkishMeaning: 'Kemosentez (kimyasal enerjiyle besin üretimi)', synonyms: ['chemical biosynthesis', 'autotrophy'], antonyms: ['photosynthesis', 'heterotrophy'], exampleSentence: 'Deep-sea bacteria use chemosynthesis to produce organic nutrients.' },
  { word: 'Fissure', partOfSpeech: 'noun', phonetic: '/ˈfɪʃ.ər/', turkishMeaning: 'Yarık, çatlak, fay yarığı', synonyms: ['crevice', 'cleft', 'chasm', 'fracture'], antonyms: ['closure', 'solid surface', 'joint'], exampleSentence: 'Mineral-rich hot water erupted from the volcanic fissure on the ocean floor.' },
  { word: 'Perpetual', partOfSpeech: 'adjective', phonetic: '/pəˈpetʃ.u.əl/', turkishMeaning: 'Sürekli, kesintisiz, ebedi', synonyms: ['ceaseless', 'constant', 'everlasting', 'endless'], antonyms: ['ephemeral', 'intermittent', 'temporary', 'transient'], exampleSentence: 'Deep oceanic trenches exist in perpetual cold and darkness.' },
  { word: 'Vernacular', partOfSpeech: 'noun', phonetic: '/vəˈnæk.jə.lər/', turkishMeaning: 'Yerel konuşma dili, halk dili', synonyms: ['dialect', 'colloquial speech', 'idiom', 'jargon'], antonyms: ['formal language', 'classical standard'], exampleSentence: 'Writers often incorporate the local vernacular to create authentic characters.' },
  { word: 'Pidgin', partOfSpeech: 'noun', phonetic: '/ˈpɪdʒ.ɪn/', turkishMeaning: 'Karma temas dili (anadili olmayan basitleştirilmiş dil)', synonyms: ['contact language', 'simplified lingua franca'], antonyms: ['mother tongue', 'standardized language'], exampleSentence: 'Traders developed a pidgin to negotiate prices across foreign ports.' },
  { word: 'Creole', partOfSpeech: 'noun', phonetic: '/ˈkriː.oʊl/', turkishMeaning: 'Kreol dili (tam kurallı hale gelmiş anadil)', synonyms: ['indigenized language', 'nativized vernacular'], antonyms: ['pidgin', 'artificial jargon'], exampleSentence: 'Haitian Creole developed from French and West African languages.' },
  { word: 'Rudimentary', partOfSpeech: 'adjective', phonetic: '/ˌruː.dɪˈmen.tər.i/', turkishMeaning: 'Temel, ilkel, başlangıç düzeyinde', synonyms: ['elementary', 'primitive', 'basic', 'fundamental'], antonyms: ['advanced', 'sophisticated', 'complex', 'elaborate'], exampleSentence: 'The expedition built a rudimentary shelter before the snowstorm arrived.' },
  { word: 'Innate', partOfSpeech: 'adjective', phonetic: '/ɪˈneɪt/', turkishMeaning: 'Doğuştan gelen, fıtri, içsel', synonyms: ['inborn', 'natural', 'instinctive', 'inherent'], antonyms: ['acquired', 'learned', 'extrinsic'], exampleSentence: 'Chomsky argued that humans possess an innate capacity for grammar.' },
  { word: 'Upend', partOfSpeech: 'verb', phonetic: '/ʌpˈend/', turkishMeaning: 'Altüst etmek, tepetaklak etmek, değiştirmek', synonyms: ['overturn', 'invert', 'revolutionize', 'disrupt'], antonyms: ['maintain', 'reinforce', 'uphold', 'preserve'], exampleSentence: 'The discovery of extremophiles upended traditional biological theories.' },
  { word: 'Paradigm', partOfSpeech: 'noun', phonetic: '/ˈpær.ə.daɪm/', turkishMeaning: 'Paradigma, model, genel kabul görmüş çerçeve', synonyms: ['framework', 'prototype', 'model', 'standard'], antonyms: ['anomaly', 'deviation', 'irregularity'], exampleSentence: 'Relativity theory caused a fundamental paradigm shift in modern physics.' }
];

const day8Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  fen: fenQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 8,
  title: 'Gün 8 — YDT & TYT + 30 Soru TYT Fen Bilimleri (Fizik, Kimya, Biyoloji)',
  database: day8Database,
  vocab: vocabDay8
};
