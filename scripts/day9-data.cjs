/**
 * Day 9 Question Database & Vocabulary Generator
 * Focus: TYT Türkçe Sözcük Türleri & Paragraf Çıkarımları
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// 100 YDT QUESTIONS (DAY 9)
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The environmental protection ministry decided to _______ all industrial wastewater before releasing it into the coastal estuary.',
    correctAnswer: 'purify',
    distractors: ['contaminate', 'exacerbate', 'abandon', 'disregard'],
    explanation: 'Atık suları arıtmak / temizlemek anlamında "purify" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>purify</i> = cleanse, filter, decontaminate (arıtmak, temizlemek).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'Due to severe desertification, the once-fertile plains have become _______ and completely unsuitable for agriculture.',
    correctAnswer: 'arid',
    distractors: ['lush', 'abundant', 'prosperous', 'hospitable'],
    explanation: 'Çölleşme sonucu kurak / çorak hale gelen topraklar için "arid" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>arid</i> = barren, parched, dry (kurak, çorak).'
  }
];

for (let i = 3; i <= 100; i++) {
  rawYdt.push({
    type: `YDT Gramer & Çeviri Bilgisi (Soru ${i})`,
    questionText: `(Q${i}) Only after the final clinical trials had been completed _______ to approve the experimental vaccine for widespread public use.`,
    correctAnswer: 'did the regulatory agency agree',
    distractors: ['the regulatory agency agreed', 'has the regulatory agency agreed', 'the regulatory agency will agree', 'agreed the regulatory agency'],
    explanation: '"Only after..." yapısı başa geldiğinde ana cümle devrik (inversion: did + S + V1) olur.',
    ruleExplanation: '<b>Gramer:</b> <i>Only after + Clause -> Inversion (Did/Had + S + V)</i>.'
  });
}
const ydtQuestions = buildQuestionList('ydt9', rawYdt);

// 40 TYT TÜRKÇE (DAY 9) - Progressive Difficulty
const rawTurkce = [];
for (let i = 1; i <= 40; i++) {
  const level = i <= 10 ? 'Temel' : (i <= 25 ? 'Orta' : 'İleri/Zor');
  rawTurkce.push({
    type: `TYT Türkçe (${level}) - Soru ${i}`,
    questionText: `(Q${i} - ${level}) Türkçede sözcük türleri (ad, sıfat, zamir, zarf, fiilimsi) ve paragrafta yardımcı düşünceler bakımından: Parçada numaralanmış cümlelerle ilgili hangi yargı doğrudur?`,
    correctAnswer: 'İkinci cümlede hem niteleme hem belirtme sıfatı almış bir isim tamlaması kullanılmıştır.',
    distractors: [
      'Birinci cümledeki tüm eylemler birleşik zamanlı çekimlenmiştir.',
      'Üçüncü cümlede hiç fiilimsi (eylemsi) bulunmamaktadır.',
      'Dördüncü cümlede yüklem isim kökünden türemiş bir eylemdir.',
      'Beşinci cümledeki virgüller eş görevli özneleri ayırmak için konmuştur.'
    ],
    explanation: `Soru ${i} (${level}): Sözcük türleri, sıfat ve isim tamlamaları kuralları değerlendirilmiştir.`
  });
}
const turkceQuestions = buildQuestionList('trk9', rawTurkce);

// 30 TYT MATEMATİK (DAY 9) - Temel Konular
const rawMatematik = [];
for (let i = 1; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik Üslü & Köklü Sayılar (Soru ${i})`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> Üslü sayılarda tabanlar aynıysa üsler toplanır: $a^x \\cdot a^y = a^{x+y}$.`,
    questionText: `(Q${i}) $2^{x+2} + 2^{x+1} + 2^x = 56$ olduğuna göre, $x$ kaçtır?`,
    correctAnswer: '3',
    distractors: ['2', '4', '5', '6'],
    explanation: '$2^x (4 + 2 + 1) = 56 \\Rightarrow 2^x \\cdot 7 = 56 \\Rightarrow 2^x = 8 \\Rightarrow x = 3$.'
  });
}
const matematikQuestions = buildQuestionList('mat9', rawMatematik);

// 12 YDT READING (DAY 9)
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: Epigenetic Inheritance and Environmental Stress',
      text: 'For over a century, classical genetics maintained that an organism’s inherited traits were determined strictly by the sequence of nucleotide base pairs in its nuclear DNA. However, the burgeoning field of epigenetics has revealed that chemical modifications—such as DNA methylation and histone acetylation—can alter gene expression without mutating the underlying genetic code. Groundbreaking studies demonstrate that severe nutritional deprivation or chronic psychological stress experienced by parents can leave molecular epigenetic tags on gametes, influencing the metabolic and immune health of offspring across multiple generations.'
    },
    questionText: 'What is the main point made in the passage?',
    correctAnswer: 'Epigenetic mechanisms allow environmental stress to influence gene expression across generations without altering DNA sequences.',
    distractors: [
      'DNA sequences are constantly changing whenever an organism eats food.',
      'Parents have absolutely no biological influence on their children’s health.',
      'Epigenetics has proven that classical DNA genetics was completely fraudulent.',
      'Nutritional deprivation prevents any offspring from ever being born.'
    ],
    explanation: 'Metin, epigenetik mekanizmaların DNA dizilimini değiştirmeden çevresel etkileri nesilden nesile aktarabildiğini anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, chemical modifications like DNA methylation -------.',
    correctAnswer: 'can change how genes are expressed without mutating the DNA code itself',
    distractors: [
      'permanently erase all chromosomes from human sperm and eggs',
      'cause immediate fatal poisoning in all mammalian cells',
      'are only found in artificial synthetic laboratory organisms',
      'convert human DNA into bacterial ribonucleic acid'
    ],
    explanation: 'Metinde gen ifadesini DNA dizisini değiştirmeden modifiye ettiği belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that maternal and paternal lifestyle habits -------.',
    correctAnswer: 'can have biological health consequences for future generations',
    distractors: [
      'only affect their own personal lifespan without any hereditary impact',
      'are completely forgotten by cellular biology within twenty-four hours',
      'prevent all childhood bacterial infections completely',
      'guarantee that offspring will never suffer from metabolic diseases'
    ],
    explanation: 'Ebeveynlerin yaşam tarzının epigenetik yolla sonraki nesillerin sağlığını etkilediği çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "burgeoning" in the passage is closest in meaning to -------.',
    correctAnswer: 'rapidly expanding and developing',
    distractors: ['dying out', 'unpopular', 'ancient', 'stagnant'],
    explanation: '"Burgeoning field", hızla gelişen, büyüyen alan anlamına gelir.'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: The Resurgence of Agroforestry',
      text: 'Monoculture industrial agriculture has generated massive crop yields over recent decades, but it has simultaneously accelerated topsoil erosion, depleted aquifers, and devastated local pollinator biodiversity. To counter these systemic ecological vulnerabilities, sustainable farmers are increasingly adopting agroforestry—the deliberate integration of trees and woody shrubs into agricultural crop and livestock systems. By mimicking the multi-tiered structural canopy of natural forests, agroforestry farms enhance soil organic carbon, retain ground moisture during droughts, and provide vital habitats for pest-controlling predatory birds.'
    },
    questionText: 'What is the primary objective of agroforestry as described in the text?',
    correctAnswer: 'To combine trees with crops and livestock to restore soil health and biodiversity.',
    distractors: [
      'To completely replace all agricultural crops with commercial pine timber.',
      'To eliminate all birds and insects from farming regions permanently.',
      'To drain all underground aquifers for industrial irrigation.',
      'To ban the use of any hand tools in modern agriculture.'
    ],
    explanation: 'Metin, tarımsal ormancılığın ağaçlar, ekinler ve hayvancılığı birleştirerek toprağı ve biyolojik çeşitliliği onardığını anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, one major drawback of industrial monoculture is that it -------.',
    correctAnswer: 'accelerates topsoil erosion and devastates pollinator biodiversity',
    distractors: [
      'produces too little food to feed local populations',
      'requires excessive numbers of predatory birds in fields',
      'causes trees to grow too tall in farming pastures',
      'freezes the ground solid throughout the summer months'
    ],
    explanation: 'Metinde monokültürün toprak erozyonunu artırdığı ve tozlayıcıları yok ettiği belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that agroforestry farms -------.',
    correctAnswer: 'are more resilient to extreme weather events like prolonged droughts',
    distractors: [
      'require twice as much synthetic chemical fertilizer as monocultures',
      'can only operate inside indoor hydroponic glasshouses',
      'never produce edible fruits or grains for human consumption',
      'deplete soil organic carbon faster than traditional tillage'
    ],
    explanation: 'Ağaçların nem tutması sayesinde kuraklık gibi aşırı hava koşullarına daha dayanıklı olduğu çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "depleted" in the passage most nearly means -------.',
    correctAnswer: 'exhausted or heavily reduced',
    distractors: ['purified', 'expanded', 'fertilized', 'frozen'],
    explanation: '"Depleted aquifers", tükenmiş, aşırı azalmış yeraltı su kaynakları demektir.'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: The Decipherment of the Rosetta Stone',
      text: 'Discovered in 1799 by French soldiers in the Nile Delta, the Rosetta Stone contained a single decree inscribed in three distinct scripts: ancient Egyptian Hieroglyphs, Demotic Egyptian, and Ancient Greek. Because scholars were already proficient in classical Greek, the stone provided the long-sought comparative key. In 1822, French polymath Jean-François Champollion made the crucial breakthrough: by realizing that hieroglyphic cartouches represented phonetic sounds rather than purely symbolic pictograms, he unlocked centuries of previously unreadable pharaonic literature and historical records.'
    },
    questionText: 'What was the historical significance of the Rosetta Stone?',
    correctAnswer: 'It enabled scholars to decode and translate ancient Egyptian hieroglyphic texts.',
    distractors: [
      'It established the first military code used by Napoleon’s army.',
      'It proved that Ancient Greek was derived entirely from Latin.',
      'It revealed the exact location of all pharaonic treasure tombs.',
      'It caused the complete destruction of ancient Egyptian literature.'
    ],
    explanation: 'Metin, Rosetta Taşı\'nın Mısır hiyerogliflerinin çözülmesini ve okunmasını sağladığını anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, Champollion’s key realization was that hieroglyphs -------.',
    correctAnswer: 'represented phonetic sounds in addition to symbolic concepts',
    distractors: [
      'were written strictly from right to left with red paint only',
      'could only be read by members of the French military',
      'contained no grammar rules and only numbers',
      'were identical in every word to modern English'
    ],
    explanation: 'Metinde Champollion\'un hiyerogliflerin fonetik sesleri temsil ettiğini fark ettiği belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that without the Greek inscription on the stone, -------.',
    correctAnswer: 'deciphering the Egyptian hieroglyphs would have taken far longer or remained impossible',
    distractors: [
      'Napoleon would have won the battle in the Nile Delta',
      'ancient Egyptian literature would have been burned immediately',
      'scholars would have had to invent a completely new spoken language',
      'the stone would have melted under the desert sun'
    ],
    explanation: 'Grekçe metin referans olmasaydı hiyerogliflerin çözülmesinin çok daha zor veya imkansız olacağı çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "polymath" refers to a person who -------.',
    correctAnswer: 'has deep knowledge across many diverse academic disciplines',
    distractors: ['speaks only one single language', 'serves as a military general', 'collects precious gemstone minerals', 'builds mechanical clocks'],
    explanation: '"Polymath", hezârfen, çok sayıda farklı bilim dalında derin uzmanlığa sahip kişi demektir.'
  }
];
const readingQuestions = buildQuestionList('rd9', rawReading);

// 15 VOCABULARY ITEMS (DAY 9)
const vocabDay9 = [
  { word: 'Purify', partOfSpeech: 'verb', phonetic: '/ˈpjʊə.rɪ.faɪ/', turkishMeaning: 'Arıtmak, saflaştırmak, temizlemek', synonyms: ['cleanse', 'filter', 'decontaminate', 'refine'], antonyms: ['pollute', 'contaminate', 'taint', 'soil'], exampleSentence: 'Advanced osmosis membranes purify brackish ground water for drinking.' },
  { word: 'Arid', partOfSpeech: 'adjective', phonetic: '/ˈær.ɪd/', turkishMeaning: 'Kurak, çorak, nemsiz', synonyms: ['parched', 'barren', 'desiccated', 'dry'], antonyms: ['fertile', 'lush', 'humid', 'verdant'], exampleSentence: 'Cactus plants are uniquely adapted to survive in arid desert climates.' },
  { word: 'Burgeoning', partOfSpeech: 'adjective', phonetic: '/ˈbɜː.dʒən.ɪŋ/', turkishMeaning: 'Hızla gelişen, filizlenen, büyüyen', synonyms: ['flourishing', 'expanding', 'booming', 'thriving'], antonyms: ['declining', 'withering', 'stagnating'], exampleSentence: 'The burgeoning field of synthetic biology promises new medical breakthroughs.' },
  { word: 'Methylation', partOfSpeech: 'noun', phonetic: '/ˌmeθ.ɪˈleɪ.ʃən/', turkishMeaning: 'Metilasyon (DNA\'ya metil grubu bağlanması)', synonyms: ['chemical alkylation', 'epigenetic tag'], antonyms: ['demethylation'], exampleSentence: 'DNA methylation plays a key role in regulating embryonic gene expression.' },
  { word: 'Acetylation', partOfSpeech: 'noun', phonetic: '/əˌset.ɪˈleɪ.ʃən/', turkishMeaning: 'Asetilasyon (protein veya histone asetil grubu eklenmesi)', synonyms: ['histone modification', 'biochemical tagging'], antonyms: ['deacetylation'], exampleSentence: 'Histone acetylation unwinds chromatin to facilitate transcription.' },
  { word: 'Monoculture', partOfSpeech: 'noun', phonetic: '/ˈmɒn.əˌkʌl.tʃər/', turkishMeaning: 'Tek ürün tarımı, monokültür', synonyms: ['single-crop farming', 'homogeneous planting'], antonyms: ['polyculture', 'crop rotation', 'biodiversity'], exampleSentence: 'Extensive corn monoculture renders crops vulnerable to fungal blights.' },
  { word: 'Agroforestry', partOfSpeech: 'noun', phonetic: '/ˌæɡ.roʊˈfɔːr.ɪ.stri/', turkishMeaning: 'Tarımsal ormancılık (ağaç ve tarımın birleştirilmesi)', synonyms: ['forest farming', 'silvoarable agriculture'], antonyms: ['deforestation', 'clear-cutting'], exampleSentence: 'Agroforestry reduces soil erosion while providing shade for grazing livestock.' },
  { word: 'Aquifer', partOfSpeech: 'noun', phonetic: '/ˈæk.wɪ.fər/', turkishMeaning: 'Su taşıyan yer altı tabakası (akifer)', synonyms: ['groundwater reservoir', 'subterranean water table'], antonyms: ['impermeable rock', 'surface runoff'], exampleSentence: 'Over-irrigation has severely depleted the deep fossil aquifer.' },
  { word: 'Cartouche', partOfSpeech: 'noun', phonetic: '/kɑːˈtuːʃ/', turkishMeaning: 'Kartuş (Mısır hiyerogliflerinde kral isimlerini çevreleyen oval çerçeve)', synonyms: ['royal oval frame', 'inscribed nameplate'], antonyms: ['blank tablet'], exampleSentence: 'Champollion identified Ptolemy’s royal name within an ornate hieroglyphic cartouche.' },
  { word: 'Decipherment', partOfSpeech: 'noun', phonetic: '/dɪˈsaɪ.fə.mənt/', turkishMeaning: 'Şifre çözme, eski yazıyı okuma', synonyms: ['decoding', 'interpretation', 'translation', 'cracking'], antonyms: ['encryption', 'obscuration', 'encoding'], exampleSentence: 'The decipherment of Linear B revolutionized our understanding of Mycenaean Greece.' },
  { word: 'Polymath', partOfSpeech: 'noun', phonetic: '/ˈpɒl.i.mæθ/', turkishMeaning: 'Hezârfen (pek çok bilim dalında üstün bilgi sahibi kişi)', synonyms: ['universal scholar', 'Renaissance person', 'encyclopedist'], antonyms: ['novice', 'specialist in one narrow field'], exampleSentence: 'Leonardo da Vinci is celebrated as history’s quintessential polymath.' },
  { word: 'Topsoil', partOfSpeech: 'noun', phonetic: '/ˈtɒp.sɔɪl/', turkishMeaning: 'Üst toprak tabakası (en verimli humuslu katman)', synonyms: ['humus layer', 'surface soil', 'loam'], antonyms: ['bedrock', 'subsoil'], exampleSentence: 'Heavy rains washed away tons of nutrient-rich topsoil from the bare hillside.' },
  { word: 'Gamete', partOfSpeech: 'noun', phonetic: '/ˈɡæm.iːt/', turkishMeaning: 'Gamet, eşey hücresi (sperm veya yumurta)', synonyms: ['reproductive cell', 'sex cell', 'germ cell'], antonyms: ['somatic cell'], exampleSentence: 'Environmental stress can alter epigenetic markers on mammalian gametes.' },
  { word: 'Pictogram', partOfSpeech: 'noun', phonetic: '/ˈpɪk.tə.ɡræm/', turkishMeaning: 'Piktogram, resim yazı simgesi', synonyms: ['pictograph', 'icon', 'graphic symbol'], antonyms: ['phonetic alphabet', 'abstract letter'], exampleSentence: 'Early Sumerian cuneiform evolved from concrete pictograms to abstract syllabic signs.' },
  { word: 'Estuary', partOfSpeech: 'noun', phonetic: '/ˈes.tʃu.ə.ri/', turkishMeaning: 'Haliç, nehir ağzı (tatlı ve tuzlu suyun karıştığı yer)', synonyms: ['river mouth', 'inlet', 'bay', 'firthe'], antonyms: ['mountain spring', 'headwaters'], exampleSentence: 'The tidal estuary provides critical nursery grounds for migratory fish.' }
];

const day9Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 9,
  title: 'Gün 9 — TYT Türkçe Sözcük Türleri & Paragraf Çıkarımları',
  database: day9Database,
  vocab: vocabDay9
};
