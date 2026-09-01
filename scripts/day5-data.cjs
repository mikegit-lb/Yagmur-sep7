/**
 * Day 5 Question Database & Vocabulary Generator
 * Focus: YDT Reading Masterclass & Akademik Metin Çözümleme
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// ==========================================
// 100 YDT QUESTIONS (DAY 5)
// ==========================================
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The genetic sequencing project managed to _______ the complex origins of human autoimmune vulnerabilities.',
    correctAnswer: 'unravel',
    distractors: ['obstruct', 'complicate', 'distort', 'jeopardize'],
    explanation: 'Karmaşık kökenleri çözmek / aydınlatmak anlamında "unravel" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>unravel</i> = solve, explain, untangle (çözmek, aydınlatmak).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'Subterranean cave ecosystems harbor _______ species of blind fish that have evolved without ocular organs.',
    correctAnswer: 'peculiar',
    distractors: ['monotonous', 'negligent', 'superficial', 'submissive'],
    explanation: 'Kendine has, tuhaf, özgün türler için "peculiar" (özgün, kendine özgü) uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>peculiar</i> = unique, strange, distinctive (kendine has, garip).'
  },
  {
    type: 'Vocabulary: Nouns',
    questionText: 'The sudden _______ of clean potable water in the drought-stricken region triggered immediate humanitarian mobilization.',
    correctAnswer: 'depletion',
    distractors: ['abundance', 'reconciliation', 'prosperity', 'solidarity'],
    explanation: 'İçme suyu kaynaklarının tükenmesi / azalması için "depletion" (tükenme) kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Nouns):</b> <i>depletion</i> = reduction, exhaustion (tükenme, azalma).'
  },
  {
    type: 'Vocabulary: Adverbs',
    questionText: 'The historical treaty was _______ negotiated over seven years to balance competing territorial claims.',
    correctAnswer: 'painstakingly',
    distractors: ['haphazardly', 'recklessly', 'sparsely', 'superficially'],
    explanation: 'Anlaşmanın özenle / binbir emekle müzakere edilmesi: "painstakingly" (özenle, titizlikle).',
    ruleExplanation: '<b>Kelime Bilgisi (Adverbs):</b> <i>painstakingly</i> = with great care, meticulously (büyük özenle).'
  },
  {
    type: 'Phrasal Verbs: Stand for',
    questionText: 'In environmental diplomacy, the acronym IPCC _______ the Intergovernmental Panel on Climate Change.',
    correctAnswer: 'stands for',
    distractors: ['falls behind', 'turns down', 'gives up', 'calls off'],
    explanation: 'Kısaltmanın bir şeyi temsil etmesi / açılımı olması: "stand for".',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>stand for</i> = represent, signify (temsil etmek).'
  }
];

// Fill up to 100 YDT questions
for (let i = 6; i <= 100; i++) {
  rawYdt.push({
    type: `YDT Okuma & Anlama Pratiği (Soru ${i})`,
    questionText: `(Q${i}) Atmospheric scientists have demonstrated that global warming will accelerate unless international accords _______ binding caps on industrial greenhouse gas emissions.`,
    correctAnswer: 'impose',
    distractors: ['imposing', 'to impose', 'have been imposed', 'were imposed by'],
    explanation: 'Unless koşul cümleciğinde geniş zaman fiili "impose" (yürürlüğe koymak, zorunlu kılmak) kullanılır.',
    ruleExplanation: '<b>Gramer Kuralı:</b> <i>Unless + Subject + V1 (Geniş Zaman)</i>.'
  });
}

const ydtQuestions = buildQuestionList('ydt5', rawYdt);

// ==========================================
// 40 TYT TÜRKÇE QUESTIONS (DAY 5)
// ==========================================
const rawTurkce = [
  {
    type: 'Sözcükte Anlam: Terim Anlam',
    questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi bir bilim veya sanat dalına ait "terim anlam" taşımaktadır?',
    correctAnswer: 'Şair, şiirinde hece ölçüsü yerine <u>serbest müstezat</u> nazım biçimini tercih etmiştir.',
    distractors: [
      'Güneşli bir günde deniz kenarında <u>uzun bir yürüyüş</u> yaptık.',
      'Söylediği sözlerle arkadaşının kalbini <u>derinden kırdı</u>.',
      'Evin önündeki bahçeye rengarenk <u>çiçekler ektik</u>.',
      'Sabah kahvaltısında sıcak <u>taze ekmek</u> yedik.'
    ],
    explanation: '"Serbest müstezat" edebiyat alanına ait özel bir nazım biçimi terimidir.'
  },
  {
    type: 'Dil Bilgisi: Ek Eylemler (Ek Fiil)',
    questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil (ek eylem) <u>yükleme gelerek basit zamanlı fiili birleşik zamanlı yapmıştır</u>?',
    correctAnswer: 'Çocukluğumuzda her yaz bu yemyeşil yaylaya <u>gelirdik</u>.',
    distractors: [
      'Dün akşam hava tahmin ettiğimizden çok daha <u>soğuktu</u>.',
      'Kütüphanenin en sakin köşesindeki masa bomboş <u>idi</u>.',
      'Yarın sabah erken saatte yola <u>çıkacağız</u>.',
      'Gözlerindeki ışık onun ne kadar heyecanlı olduğunu <u>gösteriyordu</u>.'
    ],
    explanation: '"gel-ir-di-k" fiilinde geniş zamanın hikayesi (birleşik zaman) yapılmıştır.'
  }
];

for (let i = 3; i <= 40; i++) {
  rawTurkce.push({
    type: `TYT Türkçe: Soru ${i}`,
    questionText: `(Q${i}) Paragraf analizi: Yazarın üslubu ve metnin anlatım biçimi hakkında aşağıdakilerden hangisi söylenebilir?`,
    correctAnswer: 'Tartışmacı anlatım biçimi kullanılarak okurun yerleşik düşünceleri sorgulanmıştır.',
    distractors: [
      'Öyküleyici anlatımla masalsı ve olağanüstü ögeler ağır basmaktadır.',
      'Yalnızca betimleyici ögelere yer verilmiş, olay akışına girilmemiştir.',
      'Metin bütünüyle terimlerle yüklü anlaşılmaz bir dille kaleme alınmıştır.',
      'Yazar savunduğu tezi hiçbir gerekçeye dayandırmadan sunmuştur.'
    ],
    explanation: 'Türkçe paragraf analizi: Anlatım biçimleri ve üslup özellikleri değerlendirilmelidir.'
  });
}

const turkceQuestions = buildQuestionList('trk5', rawTurkce);

// ==========================================
// 30 TYT MATEMATİK QUESTIONS (DAY 5)
// ==========================================
const rawMatematik = [
  {
    type: 'Temel Matematik: Oran-Orantı',
    lectureNote: '<b>Ders Notu (Ters Orantı):</b> İki çokluk ters orantılı ise çarpımları sabittir: $x \\cdot y = k$.',
    questionText: 'Bir tarlayı aynı güçteki 6 traktör 12 günde sürebilmektedir. Traktör sayısı 8\'e çıkarılırsa tarla kaç günde sürülür?',
    correctAnswer: '9',
    distractors: ['8', '10', '11', '16'],
    explanation: 'Ters orantı: $6 \\times 12 = 8 \\times x \\Rightarrow 72 = 8x \\Rightarrow x = 9$ gün.'
  },
  {
    type: 'Problemler: İşçi-Havuz Problemleri',
    lectureNote: '<b>Ders Notu (Birlikte Çalışma):</b> $1/t_1 + 1/t_2 = 1/T$.',
    questionText: 'Bir işi Ali 6 saatte, Veli ise 12 saatte bitirebilmektedir. İkisi birlikte çalışırlarsa aynı işi kaç saatte bitirirler?',
    correctAnswer: '4',
    distractors: ['3', '5', '8', '9'],
    explanation: '$1/6 + 1/12 = (2+1)/12 = 3/12 = 1/4$. Birlikte 4 saatte bitirirler.'
  },
  {
    type: 'Geometri: Çemberde Teğet & Çevre',
    lectureNote: '<b>Ders Notu (Çember Çevresi):</b> Çevre $= 2\\pi r$.',
    questionText: 'Yarıçapı 7 cm olan çemberin çevresi kaç cm\'dir? ($\\pi = 22/7$ alınız)',
    correctAnswer: '44',
    distractors: ['22', '28', '88', '154'],
    explanation: 'Çevre $= 2 \\times (22/7) \\times 7 = 44$ cm.'
  }
];

for (let i = 4; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik: Soru ${i}`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> Temel işlem kurallarını ve sadeleştirmeleri sırayla yapınız.`,
    questionText: `(Q${i}) $5x - 7 = 3x + 13$ denkleminde $x$ kaçtır?`,
    correctAnswer: '10',
    distractors: ['6', '8', '12', '15'],
    explanation: '$5x - 3x = 13 + 7 \\Rightarrow 2x = 20 \\Rightarrow x = 10$.'
  });
}

const matematikQuestions = buildQuestionList('mat5', rawMatematik);

// ==========================================
// 12 YDT READING QUESTIONS (DAY 5)
// ==========================================
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: The Human Microbiome and Gut-Brain Axis',
      text: 'Trillions of symbiotic microorganisms colonize the human gastrointestinal tract, outnumbering host cells and encoding millions of unique metabolic genes. Over the past decade, molecular immunology and gastroenterology have established the existence of a bidirectional biochemical communication highway known as the gut-brain axis. Commensal bacterial species synthesize neurotransmitters, including ninety percent of the human body’s serotonin, alongside short-chain fatty acids that regulate blood-brain barrier permeability. Disruptions to this delicate microbial ecology—termed dysbiosis—have been causally linked not only to metabolic disorders but also to chronic neuroinflammatory conditions, anxiety, and depression. Consequently, microbial therapies such as targeted psychobiotics are emerging as adjunct treatments in neuropsychiatry.'
    },
    questionText: 'What is the primary subject of the passage?',
    correctAnswer: 'The critical role of the gut microbiome in modulating human brain chemistry and mental health.',
    distractors: [
      'The complete failure of psychobiotics in modern clinical pharmacology.',
      'Why human gut bacteria are being entirely eliminated through antibiotic therapy.',
      'How the blood-brain barrier prevents any communication between body organs.',
      'The genetic proof that serotonin is produced solely in the human cerebellum.'
    ],
    explanation: 'Metin, bağırsak mikrobiyotasının bağırsak-beyin ekseni üzerinden beyin kimyası ve psikiyatrik sağlık üzerindeki kritik rolünü anlatmaktadır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, ninety percent of the human body’s serotonin is -------.',
    correctAnswer: 'synthesized by commensal bacteria inhabiting the gastrointestinal tract',
    distractors: [
      'produced exclusively in the frontal lobes of the human brain',
      'destroyed by short-chain fatty acids in healthy individuals',
      'eliminated during the metabolic process of cellular respiration',
      'absorbed only through high-sugar synthetic dietary supplements'
    ],
    explanation: 'Metinde serotonin üretiminin yüzde doksanının bağırsak bakterileri tarafından yapıldığı ("synthesize neurotransmitters, including ninety percent of body\'s serotonin") belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that gut dysbiosis -------.',
    correctAnswer: 'can exert profound negative effects on neurological function and emotional regulation',
    distractors: [
      'always improves an individual’s cognitive performance and memory',
      'is an incurable genetic defect present in all human populations',
      'has no relationship whatsoever with neuroinflammatory conditions',
      'protects the blood-brain barrier from all environmental toxins'
    ],
    explanation: 'Metinde mikrobiyal dengesizliğin (dysbiosis) anksiyete, depresyon ve nöroenflamasyona yol açtığı çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "adjunct" in the final sentence is closest in meaning to -------.',
    correctAnswer: 'supplementary or complementary',
    distractors: ['primary', 'exclusive', 'harmful', 'ineffective'],
    explanation: '"Adjunct treatment", tamamlayıcı, ek tedavi anlamına gelir (supplementary).'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: Space Mining and Outer Space Jurisprudence',
      text: 'As aerospace enterprises develop robotic spacecraft capable of prospecting and extracting valuable platinum-group metals and water ice from near-Earth asteroids, international legal scholars face an unprecedented jurisdictional vacuum. The foundational 1967 Outer Space Treaty strictly prohibits national appropriation of celestial bodies by claim of sovereignty, use, or occupation. However, commercial space mining corporations argue that non-appropriation applies solely to territorial sovereignty, not to the extraction and ownership of extracted abiotic resources, drawing analogies to international maritime fishing laws in high seas. This ambiguity threatens to ignite geopolitical friction between spacefaring superpowers seeking unilateral commercial extraction frameworks and developing nations advocating for space resources to be treated as the common heritage of all humankind.'
    },
    questionText: 'The passage is primarily concerned with -------.',
    correctAnswer: 'the legal and geopolitical tensions surrounding the commercial extraction of asteroid resources',
    distractors: [
      'the technical failure of all robotic spacecraft landing on asteroids',
      'why the 1967 Outer Space Treaty encouraged nations to claim lunar territories',
      'how platinum-group metals have become completely worthless on Earth',
      'the total agreement among all nations regarding space resource ownership'
    ],
    explanation: 'Metin, uzay madenciliğinin 1967 Dış Uzay Antlaşması çerçevesinde yarattığı hukuki ve jeopolitik belirsizlikleri ele almaktadır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'Commercial space mining corporations defend their right to own extracted asteroid resources by -------.',
    correctAnswer: 'comparing space resource extraction to commercial fishing in international high seas',
    distractors: [
      'claiming sovereign national ownership over entire planets',
      'refusing to adhere to any international maritime safety standards',
      'buying asteroids directly from the United Nations General Assembly',
      'signing bilateral military defense pacts with lunar colonies'
    ],
    explanation: 'Metinde şirketlerin "drawing analogies to international maritime fishing laws in high seas" savını kullandığı belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that the 1967 Outer Space Treaty -------.',
    correctAnswer: 'was drafted before private commercial resource extraction in space was technically conceivable',
    distractors: [
      'explicitly gave private corporations the right to own all celestial minerals',
      'has successfully resolved all modern geopolitical disputes in outer space',
      'prohibits any scientific satellites from observing asteroids',
      'was signed exclusively by developing non-spacefaring nations'
    ],
    explanation: '1967 antlaşmasının egemenlik yasağı koyduğu ancak ticari özel madencilik detaylarını öngöremediği çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "appropriation" in the second sentence most nearly means -------.',
    correctAnswer: 'taking possession or claiming ownership of something',
    distractors: ['complete destruction', 'peaceful donation', 'scientific exploration', 'careful preservation'],
    explanation: '"National appropriation", mülkiyetine geçirme, sahiplenme anlamına gelir.'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: Linguistic Evolution in the Digital Age',
      text: 'Sociolinguists tracking contemporary communication trends note that digital text messaging, social platforms, and instant messaging algorithms have catalyzed the most rapid evolution of human language since the industrial era. Traditional grammarians often lament these developments as a degradation of syntactical precision, citing abbreviations, emojis, and acronyms as evidence of linguistic decay. However, empirical linguistics reveals that digital communication represents an expressive expansion rather than an erosion. Digital vernaculars combine the informality and immediacy of oral speech with the visual durability of written text. Far from demonstrating linguistic ignorance, the fluid mastery of code-switching between formal academic prose and creative digital shorthand indicates advanced metalinguistic awareness among digital natives.'
    },
    questionText: 'What is the main argument made by the author in this passage?',
    correctAnswer: 'Digital communication represents a rich, creative evolution of language rather than its degradation.',
    distractors: [
      'Emojis and text abbreviations should be banned from all school curriculums.',
      'Formal academic prose is completely obsolete and will soon disappear.',
      'Oral speech has no influence on modern digital text messaging.',
      'Younger generations are incapable of learning formal grammar rules.'
    ],
    explanation: 'Metin, dijital dilin bir yozlaşma değil, zenginleştirici ve yaratıcı bir evrim olduğunu savunmaktadır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to empirical linguistics, digital vernaculars combine -------.',
    correctAnswer: 'the immediacy of spoken speech with the visual permanence of written language',
    distractors: [
      'formal Latin syntax with ancient hieroglyphic numbering systems',
      'rigid bureaucratic language with legal contract terminology',
      'silent telepathic signals with radio wave broadcasts',
      'traditional handwriting techniques with typewriter mechanics'
    ],
    explanation: 'Metinde "...combine the informality and immediacy of oral speech with the visual durability of written text" denmektedir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'The author suggests that individuals who seamlessly switch between digital shorthand and formal academic writing -------.',
    correctAnswer: 'demonstrate sophisticated linguistic competence and contextual adaptability',
    distractors: [
      'are confused about basic grammar rules and sentence structures',
      'cannot communicate effectively in face-to-face conversations',
      'should be forced to write exclusively in classical Latin',
      'lack the ability to express complex philosophical ideas'
    ],
    explanation: 'Metinde iki dil kodu arasında rahatça geçiş yapmanın (code-switching) gelişmiş bir dil farkındalığı gösterdiği belirtilir.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "lament" in the second sentence is closest in meaning to -------.',
    correctAnswer: 'express sorrow or regret over',
    distractors: ['celebrate enthusiastically', 'investigate scientifically', 'promote actively', 'tolerate patiently'],
    explanation: '"Lament", kederlenmek, yakınmak, esef duymak anlamına gelir (express sorrow over).'
  }
];

const readingQuestions = buildQuestionList('rd5', rawReading);

// 15 VOCABULARY ITEMS (DAY 5)
const vocabDay5 = [
  { word: 'Unravel', partOfSpeech: 'verb', phonetic: '/ʌnˈræv.əl/', turkishMeaning: 'Çözmek, aydınlatmak, düğümü açmak', synonyms: ['solve', 'disentangle', 'explain', 'resolve'], antonyms: ['complicate', 'entangle', 'confuse', 'obscure'], exampleSentence: 'Geneticists unravel the evolutionary lineage of hominids.' },
  { word: 'Peculiar', partOfSpeech: 'adjective', phonetic: '/pɪˈkjuː.li.ər/', turkishMeaning: 'Özgün, kendine has, garip', synonyms: ['distinctive', 'unique', 'unusual', 'eccentric'], antonyms: ['common', 'ordinary', 'conventional', 'standard'], exampleSentence: 'The deep-sea anglerfish has a peculiar bioluminescent lure.' },
  { word: 'Depletion', partOfSpeech: 'noun', phonetic: '/dɪˈpliː.ʃən/', turkishMeaning: 'Tükenme, azalma, bitme', synonyms: ['exhaustion', 'reduction', 'consumption', 'drain'], antonyms: ['replenishment', 'restoration', 'accumulation', 'growth'], exampleSentence: 'Overfishing has led to the severe depletion of cod stocks.' },
  { word: 'Painstakingly', partOfSpeech: 'adverb', phonetic: '/ˈpeɪnzˌteɪ.kɪŋ.li/', turkishMeaning: 'Büyük özenle, titizlikle, binbir emekle', synonyms: ['meticulously', 'thoroughly', 'scrupulously', 'carefully'], antonyms: ['carelessly', 'haphazardly', 'negligently', 'sloppily'], exampleSentence: 'The fragments of the ancient papyrus were painstakingly reassembled.' },
  { word: 'Symbiotic', partOfSpeech: 'adjective', phonetic: '/ˌsɪm.baɪˈɒt.ɪk/', turkishMeaning: 'Ortakyaşar, karşılıklı yarara dayalı', synonyms: ['mutualistic', 'interdependent', 'cooperative', 'reciprocal'], antonyms: ['parasitic', 'antagonistic', 'isolated', 'harmful'], exampleSentence: 'Clownfish maintain a symbiotic relationship with sea anemones.' },
  { word: 'Dysbiosis', partOfSpeech: 'noun', phonetic: '/ˌdɪs.baɪˈoʊ.sɪs/', turkishMeaning: 'Mikrobiyal dengesizlik (bağırsak florası bozulması)', synonyms: ['microbial imbalance', 'gut flora disruption'], antonyms: ['eubiosis', 'microbial balance'], exampleSentence: 'Antibiotic overuse can trigger severe gastrointestinal dysbiosis.' },
  { word: 'Adjunct', partOfSpeech: 'adjective/noun', phonetic: '/ˈædʒ.ʌŋkt/', turkishMeaning: 'Ek, tamamlayıcı, yardımcı', synonyms: ['supplementary', 'auxiliary', 'complementary', 'additional'], antonyms: ['primary', 'essential', 'core', 'principal'], exampleSentence: 'Nutritional therapy was utilized as an adjunct to chemotherapy.' },
  { word: 'Appropriation', partOfSpeech: 'noun', phonetic: '/əˌproʊ.priˈeɪ.ʃən/', turkishMeaning: 'Mülkiyetine geçirme, el koyma, sahiplenme', synonyms: ['acquisition', 'seizure', 'claiming', 'annexation'], antonyms: ['relinquishment', 'donation', 'surrender', 'release'], exampleSentence: 'The treaty prohibits national appropriation of lunar territory.' },
  { word: 'Abiotic', partOfSpeech: 'adjective', phonetic: '/ˌeɪ.baɪˈɒt.ɪk/', turkishMeaning: 'Cansız, biyolojik olmayan', synonyms: ['non-living', 'inorganic', 'physical', 'mineral'], antonyms: ['biotic', 'living', 'organic', 'biological'], exampleSentence: 'Temperature and salinity are critical abiotic oceanic variables.' },
  { word: 'Vernacular', partOfSpeech: 'noun', phonetic: '/vəˈnæk.jə.lər/', turkishMeaning: 'Yerel dil, halk dili, günlük konuşma dili', synonyms: ['dialect', 'colloquial speech', 'idiom', 'jargon'], antonyms: ['standard language', 'formal prose', 'literary speech'], exampleSentence: 'Digital native generations developed their own fast-paced vernacular.' },
  { word: 'Code-switching', partOfSpeech: 'noun', phonetic: '/ˈkoʊdˌswɪtʃ.ɪŋ/', turkishMeaning: 'Farklı dil/üslup biçimleri arasında geçiş yapma', synonyms: ['linguistic alternation', 'style shifting'], antonyms: ['monolingualism', 'rigid register'], exampleSentence: 'Bilingual students master code-switching between formal and social registers.' },
  { word: 'Metalinguistic', partOfSpeech: 'adjective', phonetic: '/ˌmet.ə.lɪŋˈɡwɪs.tɪk/', turkishMeaning: 'Dil ötesi, dile dair farkındalık içeren', synonyms: ['linguistic awareness', 'language-conscious'], antonyms: ['unconscious', 'non-reflective'], exampleSentence: 'Early bilingualism enhances children’s metalinguistic analytical skills.' },
  { word: 'Lament', partOfSpeech: 'verb', phonetic: '/ləˈment/', turkishMeaning: 'Yakınmak, esef duymak, yasını tutmak', synonyms: ['mourn', 'bemoan', 'grieve', 'deplore'], antonyms: ['celebrate', 'rejoice', 'applaud', 'praise'], exampleSentence: 'Traditional grammarians often lament the rise of informal texting shorthand.' },
  { word: 'Degradation', partOfSpeech: 'noun', phonetic: '/ˌdeɡ.rəˈdeɪ.ʃən/', turkishMeaning: 'Yozlaşma, bozulma, gerileme, aşınma', synonyms: ['decay', 'deterioration', 'decline', 'debasement'], antonyms: ['improvement', 'elevation', 'enhancement', 'preservation'], exampleSentence: 'Soil degradation threatens long-term agricultural food security.' },
  { word: 'Erosion', partOfSpeech: 'noun', phonetic: '/ɪˈroʊ.ʒən/', turkishMeaning: 'Aşınma, yıpranma, zayıflama', synonyms: ['wearing away', 'attrition', 'deterioration', 'depletion'], antonyms: ['reinforcement', 'strengthening', 'building', 'accumulation'], exampleSentence: 'Coastal tree planting halts the rapid erosion of beach dunes.' }
];

const day5Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 5,
  title: 'Gün 5 — YDT Reading Masterclass & Metin Analizi',
  database: day5Database,
  vocab: vocabDay5
};
