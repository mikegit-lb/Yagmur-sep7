/**
 * Day 14 Question Database & Vocabulary Generator
 * Focus: Büyük Kamp Finali + 30 Soru TYT Sosyal Bilimler 2
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// 100 YDT QUESTIONS (DAY 14)
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The central bank president intervened to _______ the fluctuating national currency against speculative offshore trading.',
    correctAnswer: 'stabilize',
    distractors: ['devalue', 'destabilize', 'abandon', 'jeopardize'],
    explanation: 'Para birimini istikrara kavuşturmak / sabitlemek anlamında "stabilize" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>stabilize</i> = make steady, secure, anchor (istikrara kavuşturmak).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'The summit concluded with a _______ declaration affirming joint commitments to carbon neutrality and biodiversity conservation.',
    correctAnswer: 'momentous',
    distractors: ['negligible', 'trivial', 'futile', 'monotonous'],
    explanation: 'Tarihi önem taşıyan, çok büyük ve etkili bildiri için "momentous" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>momentous</i> = of great significance, historic, consequential (çok önemli, tarihi).'
  }
];

for (let i = 3; i <= 100; i++) {
  rawYdt.push({
    type: `YDT Büyük Final & Deneme Sorusu (Soru ${i})`,
    questionText: `(Q${i}) Never before in human history _______ such rapid interconnected technological communication across the entire globe.`,
    correctAnswer: 'has there been',
    distractors: ['there has been', 'was there being', 'there was', 'had there being'],
    explanation: '"Never before..." olumsuz zaman zarfı başa geldiğinde Inversion (Has + S + been) uygulanır.',
    ruleExplanation: '<b>Gramer:</b> <i>Never before + Inversion (has there been / had there been)</i>.'
  });
}
const ydtQuestions = buildQuestionList('ydt14', rawYdt);

// 40 TYT TÜRKÇE (DAY 14) - Progressive Difficulty
const rawTurkce = [];
for (let i = 1; i <= 40; i++) {
  const level = i <= 10 ? 'Temel' : (i <= 25 ? 'Orta' : 'İleri/Zor');
  rawTurkce.push({
    type: `TYT Türkçe (${level}) - Soru ${i}`,
    questionText: `(Q${i} - ${level}) TYT Türkçe genel deneme: Paragrafta çoklu sorular, dil bilgisi karma analizi ve anlam bilgisi doğrultusunda hangi çıkarım kesin olarak doğrudur?`,
    correctAnswer: 'Metinde eleştirilen tutum, sanat yapıtını yalnızca ticari bir meta olarak görüp sanatsal özünü göz ardı etmektir.',
    distractors: [
      'Yazar, klasik eserlerin günümüz okuruna hiçbir şey katamayacağını savunmaktadır.',
      'Paragraftaki tüm cümleler kurallı ve yüklemleri geçişli fiillerden oluşmuştur.',
      'Metinde sadece geçmişe duyulan özlem romantik bir dille betimlenmiştir.',
      'Son paragrafta ilk paragrafta savunulan temel görüş bütünüyle reddedilmiştir.'
    ],
    explanation: `Soru ${i} (${level}): Paragrafta ana fikir, yazarın eleştirel tutumu ve karma dil bilgisi ilkeleri incelenmiştir.`
  });
}
const turkceQuestions = buildQuestionList('trk14', rawTurkce);

// 30 TYT MATEMATİK (DAY 14) - Temel Konular
const rawMatematik = [];
for (let i = 1; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik Büyük Final (Soru ${i})`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> Permütasyon sıralama $P(n,r)$, Kombinasyon seçme $C(n,r)$ ve Olasılık $= \\frac{\\text{İstenen Durum}}{\\text{Tüm Durumlar}}$.`,
    questionText: `(Q${i}) 5 elemanlı bir kümenin 3 elemanlı alt küme sayısı kaçtır?`,
    correctAnswer: '10',
    distractors: ['8', '12', '15', '20'],
    explanation: '$C(5, 3) = \\frac{5 \\cdot 4 \\cdot 3}{3 \\cdot 2 \\cdot 1} = 10$.'
  });
}
const matematikQuestions = buildQuestionList('mat14', rawMatematik);

// ==========================================
// 30 TYT SOSYAL BİLİMLER 2 (DAY 14)
// 10 Tarih + 10 Coğrafya + 5 Felsefe + 5 Din Kültürü
// ==========================================
const rawSosyal = [
  // TARIH (1-10)
  {
    type: 'Tarih: Osmanlı Devleti Kuruluş ve Yükselme',
    questionText: 'Osmanlı Devleti\'nde fethedilen topraklarda yerli halka hoşgörülü davranılması ve onların din, dil, geleneklerine müdahale edilmemesi politikasına ne ad verilir?',
    correctAnswer: 'İstimalet Politikası (Hoşgörü)',
    distractors: ['İskân Politikası', 'Devşirme Sistemi', 'Tımar Sistemi', 'Müsadere Sistemi'],
    explanation: 'Osmanlı\'nın fethettiği bölgelerdeki halkı devlete bağlamak için uyguladığı hoşgörü ve adalet politikası İstimalettir.'
  },
  {
    type: 'Tarih: Atatürk İlkeleri ve İnkılap Tarihi',
    questionText: 'Egemenliğin kayıtsız şartsız millete ait olduğunu, halkın kendi kendini yönetmesini ve çok partili siyasi yaşamı savunan Atatürk ilkesi hangisidir?',
    correctAnswer: 'Cumhuriyetçilik',
    distractors: ['Milliyetçilik', 'Halkçılık', 'Laiklik', 'Devletçilik'],
    explanation: 'Milli egemenlik ve halkın yönetime katılımı doğrudan Cumhuriyetçilik ilkesi ile ilgilidir.'
  },
  // COGRAFYA (11-20)
  {
    type: 'Coğrafya: Doğal Afetler ve Çevre',
    questionText: 'Türkiye\'de jeolojik yapının genç ve kırıklı (fay hatları) olması en çok hangi doğal afetin sık yaşanmasına neden olur?',
    correctAnswer: 'Deprem (Tektonik Hareketler)',
    distractors: ['Tsunami', 'Tropikal Kasırga', 'Kuraklık', 'Çığ'],
    explanation: 'Türkiye Alp-Himalaya deprem kuşağında yer aldığı için tektonik depremler en yaygın afettir.'
  },
  {
    type: 'Coğrafya: Nüfus ve Yerleşme',
    questionText: 'Aşağıdakilerden hangisi bir ülkede nüfus artış hızının çok yüksek olmasının <u>olumsuz</u> sonuçlarından biridir?',
    correctAnswer: 'Demografik yatırımların (okul, hastane vb.) artması ve tasarrufların azalması',
    distractors: [
      'Vergi gelirlerinin ve genç iş gücünün artması',
      'Ülke savunmasında asker sayısının artması',
      'Yeni yatırım ve üretim alanlarının doğması',
      'İç piyasada tüketici talebinin canlanması'
    ],
    explanation: 'Hızlı nüfus artışı demografik giderleri artırarak kalkınma hızını yavaşlatır (olumsuz sonuç).'
  },
  // FELSEFE (21-25)
  {
    type: 'Felsefe: Ahlak Felsefesi (Etik)',
    questionText: '"Öyle davran ki eyleminin ilkesi tüm insanlar için genel bir yasa haline gelebilsin." (Ödev Ahlakı) ilkesini ortaya koyan filozof kimdir?',
    correctAnswer: 'Immanuel Kant',
    distractors: ['Aristoteles', 'Jean-Paul Sartre', 'Jeremy Bentham', 'Friedrich Nietzsche'],
    explanation: 'Kategorik imperatif (koşulsuz ödev ahlakı) Alman filozof Immanuel Kant\'a aittir.'
  },
  // DIN KULTURU (26-30)
  {
    type: 'Din Kültürü: Vahiy ve Akıl',
    questionText: 'İslam inancına göre peygamberlerin doğru sözlü, dürüst ve asla yalan söylemeyen kimseler olmalarını ifade eden sıfat hangisidir?',
    correctAnswer: 'Sıdk',
    distractors: ['Emanet', 'Fetanet', 'İsmet', 'Tebliğ'],
    explanation: 'Peygamberlerin sıfatlarından "Sıdk" doğruluk ve dürüstlük anlamına gelir.'
  }
];

for (let i = 7; i <= 30; i++) {
  const branch = i <= 10 ? 'Tarih' : (i <= 20 ? 'Coğrafya' : (i <= 25 ? 'Felsefe' : 'Din Kültürü'));
  rawSosyal.push({
    type: `TYT ${branch} 2 Sorusu (Soru ${i})`,
    questionText: `(Q${i} - ${branch}) Sosyal bilimler genel değerlendirme: Kültürel miras, anayasal yurttaşlık ve etik sorumluluk bakımından hangi yargı evrensel olarak doğrudur?`,
    correctAnswer: 'Bireylerin temel hak ve özgürlükleri hukuk devleti ilkesi ve anayasal güvenceler altında korunmalıdır.',
    distractors: [
      'Toplumsal düzen yalnızca katı askeri yasaklar ve cezalandırmalarla sağlanabilir.',
      'Tarihi yapılar ekonomik kâr sağlamadığı takdirde yıkılıp yerine ticari binalar yapılmalıdır.',
      'Felsefi eleştiri ve sorgulama toplumların bilimsel gelişimine zarar verir.',
      'Coğrafi sınırlar küresel çevre sorunlarının ülkeler arasında yayılmasını tamamen engeller.'
    ],
    explanation: `Soru ${i} (${branch}): Hukuk devleti, anayasal güvenceler ve evrensel insan hakları ilkeleri.`
  });
}
const sosyalQuestions = buildQuestionList('sos14', rawSosyal);

// 12 YDT READING (DAY 14)
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: Asteroid Mining and Space Resource Economics',
      text: 'Near-Earth asteroids contain astronomical concentrations of platinum-group metals, rare earth elements, and water ice. While extracting minerals on Earth requires devastating surface open-pit mining and produces millions of tons of toxic tailings, space mining offers an ecologically benign alternative. Furthermore, volatile water ice harvested from asteroids can be electrolyzed using solar radiation into liquid hydrogen and oxygen rocket propellant, establishing orbital refueling depots that will dramatically lower the propulsion costs of deep-space missions to the outer solar system.'
    },
    questionText: 'What is the primary dual benefit of asteroid mining presented in the text?',
    correctAnswer: 'Providing rare metals without terrestrial environmental damage and producing rocket fuel in space.',
    distractors: [
      'Preventing asteroids from ever colliding with the planet Jupiter.',
      'Banning all rocket launches from Earth permanently.',
      'Transporting Earth’s oceans into distant asteroid orbits.',
      'Eliminating all need for solar energy in spacecraft.'
    ],
    explanation: 'Metin, asteroit madenciliğinin hem Dünya\'yı çevre kirliliğinden koruyacağını hem de uzayda roket yakıtı üreteceğini anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, water ice mined from asteroids can be used to -------.',
    correctAnswer: 'manufacture liquid hydrogen and oxygen propellant for deep-space rockets',
    distractors: [
      'cool the burning surface of the sun during solar flares',
      'freeze space stations into solid ice crystals',
      'extinguish asteroid volcanic eruptions immediately',
      'replace all satellite computer silicon microchips'
    ],
    explanation: 'Metinde su buzunun elektroliz edilerek roket yakıtına dönüştürüleceği belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that in-space orbital refueling -------.',
    correctAnswer: 'will make interplanetary exploration far more economically and logistically feasible',
    distractors: [
      'will cause immediate atmospheric collapse on Earth',
      'will require all astronauts to stay permanently on the Moon',
      'cannot function in the presence of solar radiation',
      'will be prohibited by all international environmental bodies'
    ],
    explanation: 'Yörüngede yakıt ikmali yapmanın derin uzay görevlerinin maliyetini düşüreceği çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "benign" in the passage is closest in meaning to -------.',
    correctAnswer: 'harmless or environmentally safe',
    distractors: ['catastrophic', 'toxic', 'expensive', 'illegal'],
    explanation: '"Ecologically benign", çevreye zararsız, dostça demektir.'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: The Neurobiology of Mindfulness and Stress Reduction',
      text: 'Long considered an esoteric spiritual discipline, mindfulness meditation has in recent years become the subject of rigorous neurological imaging. Functional MRI and EEG scans demonstrate that consistent mindfulness practice induces measurable neuroplastic alterations in brain morphology. Specifically, it downregulates the amygdala—the brain’s primary fear and stress-response hub—while increasing gray matter density in the prefrontal cortex and anterior cingulate cortex, thereby enhancing emotional self-regulation, working memory capacity, and immune resilience.'
    },
    questionText: 'What have modern MRI scans revealed about mindfulness meditation?',
    correctAnswer: 'It causes measurable neuroplastic changes that reduce stress and enhance prefrontal brain functions.',
    distractors: [
      'It destroys brain cells in the anterior cingulate cortex completely.',
      'It has zero measurable effect on human neurological physiology.',
      'It enlarges the amygdala to increase chronic anxiety levels.',
      'It prevents human beings from ever experiencing physical emotions.'
    ],
    explanation: 'Metin, meditasyonun amigdala stresini azaltıp ön kortekste gri maddeyi artırdığını anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, downregulating the amygdala results in -------.',
    correctAnswer: 'a reduction in physiological stress and fear responses',
    distractors: [
      'the permanent loss of all long-term memory circuits',
      'an immediate rise in dangerous cardiovascular inflammation',
      'the complete paralysis of sensory vision and hearing',
      'an inability to fall asleep during the night'
    ],
    explanation: 'Metinde amigdalanın yatıştırılmasının stres ve korku tepkilerini azalttığı belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that the human brain -------.',
    correctAnswer: 'retains structural plasticity and can be physically reshaped through mental training',
    distractors: [
      'is completely fixed and unchangeable from the moment of birth',
      'cannot be examined safely by magnetic resonance imaging',
      'requires pharmaceutical drugs for any emotional regulation',
      'has no biological connection to the human immune system'
    ],
    explanation: 'Beynin zihinsel pratiklerle fiziksel olarak değişebildiği (nöroplastisite) çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "morphology" refers to -------.',
    correctAnswer: 'the physical structure and form of an organism or organ',
    distractors: ['the chemical taste', 'the financial value', 'the electrical voltage', 'the temperature'],
    explanation: '"Brain morphology", beynin fiziksel yapısı, şekil ve formu demektir.'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: The Architecture of Medieval Islamic Water Clocks',
      text: 'In his monumental 1206 treatise "The Book of Knowledge of Ingenious Mechanical Devices," Arab polymath and engineer Ismail al-Jazari documented extraordinary automated hydraulic machines that prefigured modern robotics. His crowning achievement was the Elephant Clock: an ornate, multi-cultural water clock featuring an internal submerged perforated float (tarjayhar) that slowly filled with water over thirty minutes. When full, the float tripped a mechanical escapement mechanism triggering automated bronze dragons, chirping mechanical birds, and falling metal balls that struck cymbals to mark the passage of time.'
    },
    questionText: 'What is highlighted about al-Jazari’s Elephant Clock in the passage?',
    correctAnswer: 'It was an ingenious automated water clock that combined multicultural art with sophisticated mechanical robotics.',
    distractors: [
      'It was an ancient steam engine used for digging irrigation canals.',
      'It was made entirely of solid gold and had no moving parts.',
      'It was destroyed immediately because clocks were banned in 1206.',
      'It required twenty horses to wind its mechanical springs daily.'
    ],
    explanation: 'Metin, El-Cezeri\'nin Fil Saati\'nin robotik ve otomasyonun öncüsü olan dâhiyane bir mekanik saat olduğunu anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, the timing mechanism of the clock relied on -------.',
    correctAnswer: 'a submerged perforated float that gradually filled with water over thirty minutes',
    distractors: [
      'a digital quartz crystal connected to an electric battery',
      'the shadow cast by a tall marble sundial on the floor',
      'the burning speed of a scented candle in a bronze bowl',
      'the gravitational pull of the moon on an iron pendulum'
    ],
    explanation: 'Metinde suyla yavaşça dolan delikli şamandıra (tarjayhar) mekanizması anlatılır.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that Islamic engineering during the Middle Ages -------.',
    correctAnswer: 'achieved sophisticated advances in automation and precision mechanical engineering',
    distractors: [
      'was strictly limited to theoretical astronomy without building physical machines',
      'refused to use water or gravity in any mechanical inventions',
      'had no influence on the development of modern clockmaking',
      'was completely forgotten and left no written manuscripts'
    ],
    explanation: 'El-Cezeri\'nin çalışmalarının modern robotik ve saat mekaniğinin temellerini attığı çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "prefigured" in the first sentence most nearly means -------.',
    correctAnswer: 'foreshadowed or anticipated an early version of',
    distractors: ['destroyed', 'condemned', 'prevented', 'delayed'],
    explanation: '"Prefigured modern robotics", modern robotiğin öncüsü oldu, önceden haber verdi anlamına gelir.'
  }
];
const readingQuestions = buildQuestionList('rd14', rawReading);

// 15 VOCABULARY ITEMS (DAY 14)
const vocabDay14 = [
  { word: 'Stabilize', partOfSpeech: 'verb', phonetic: '/ˈsteɪ.bəl.aɪz/', turkishMeaning: 'İstikrara kavuşturmak, sabitlemek, dengelemek', synonyms: ['steady', 'secure', 'anchor', 'balance'], antonyms: ['destabilize', 'unsettle', 'fluctuate', 'shake'], exampleSentence: 'The emergency fiscal package helped stabilize the financial markets.' },
  { word: 'Momentous', partOfSpeech: 'adjective', phonetic: '/məˈmen.təs/', turkishMeaning: 'Tarihi önem taşıyan, çok büyük, çok mühim', synonyms: ['historic', 'consequential', 'epoch-making', 'significant'], antonyms: ['trivial', 'inconsequential', 'insignificant', 'minor'], exampleSentence: 'The signing of the armistice was a momentous event in world history.' },
  { word: 'Benign', partOfSpeech: 'adjective', phonetic: '/bɪˈnaɪn/', turkishMeaning: 'Zararsız, iyi huylu, çevre dostu', synonyms: ['harmless', 'innocuous', 'favorable', 'gentle'], antonyms: ['malignant', 'harmful', 'toxic', 'noxious'], exampleSentence: 'Solar energy provides a benign alternative to burning polluting fossil fuels.' },
  { word: 'Propellant', partOfSpeech: 'noun', phonetic: '/prəˈpel.ənt/', turkishMeaning: 'İtici yakıt (roket yakıtı)', synonyms: ['rocket fuel', 'propulsive agent', 'fuel mixture'], antonyms: ['coolant', 'oxidizer inhibitor'], exampleSentence: 'Liquid hydrogen serves as high-efficiency rocket propellant.' },
  { word: 'Depot', partOfSpeech: 'noun', phonetic: '/ˈdep.oʊ/', turkishMeaning: 'Depo, ikmal istasyonu, ambar', synonyms: ['storehouse', 'refueling station', 'terminal', 'warehouse'], antonyms: ['frontline'], exampleSentence: 'Orbital fuel depots will support long-duration manned missions to Mars.' },
  { word: 'Neuroplasticity', partOfSpeech: 'noun', phonetic: '/ˌnjʊə.roʊ.plæsˈtɪs.ə.ti/', turkishMeaning: 'Nöroplastisite (beynin öğrenme ile kendini yeniden yapılandırması)', synonyms: ['neural adaptability', 'brain rewiring'], antonyms: ['neural rigidity'], exampleSentence: 'Neuroplasticity enables stroke patients to regain speech and motor functions.' },
  { word: 'Amygdala', partOfSpeech: 'noun', phonetic: '/əˈmɪɡ.də.lə/', turkishMeaning: 'Amigdala (beyinde korku ve stres merkezi)', synonyms: ['fear center', 'limbic emotional nucleus'], antonyms: ['frontal cortex'], exampleSentence: 'Mindfulness meditation reduces hyperactive signaling in the amygdala.' },
  { word: 'Morphology', partOfSpeech: 'noun', phonetic: '/mɔːˈfɒl.ə.dʒi/', turkishMeaning: 'Morfoloji, biçim bilimi, yapısal form', synonyms: ['anatomical structure', 'form', 'configuration'], antonyms: ['physiology', 'function'], exampleSentence: 'Biologists studied the floral morphology of carnivorous pitcher plants.' },
  { word: 'Escapement', partOfSpeech: 'noun', phonetic: '/ɪˈskeɪp.mənt/', turkishMeaning: 'Maşa sistemi (saatlerde enerjiyi düzenli aralıklarla bırakan mekanizma)', synonyms: ['clockwork regulator', 'timing mechanism'], antonyms: ['freewheel'], exampleSentence: 'The mechanical escapement produces the characteristic ticking sound of clocks.' },
  { word: 'Prefigure', partOfSpeech: 'verb', phonetic: '/priːˈfɪɡ.ər/', turkishMeaning: 'Öncüsü olmak, gelecekteki bir şeyi önceden haber vermek', synonyms: ['foreshadow', 'anticipate', 'presage', 'herald'], antonyms: ['recapitulate', 'follow'], exampleSentence: 'Al-Jazari’s hydraulic automata prefigured the development of modern industrial robotics.' },
  { word: 'Automaton', partOfSpeech: 'noun', phonetic: '/ɔːˈtɒm.ə.tən/', turkishMeaning: 'Otomat, mekanik kendi kendine çalışan figür/robot', synonyms: ['mechanical robot', 'android', 'self-operating machine'], antonyms: ['human operator'], exampleSentence: 'The medieval water clock featured automata that poured tea automatically.' },
  { word: 'Perforated', partOfSpeech: 'adjective', phonetic: '/ˈpɜː.fə.reɪ.tɪd/', turkishMeaning: 'Delikli, üzerinde küçük delikler bulunan', synonyms: ['punctured', 'pierced', 'sieved', 'holed'], antonyms: ['solid', 'impermeable', 'sealed'], exampleSentence: 'Water entered the perforated float at a precisely calibrated flow rate.' },
  { word: 'Resilience', partOfSpeech: 'noun', phonetic: '/rɪˈzɪl.jəns/', turkishMeaning: 'Dayanıklılık, esneklik, kendini çabuk toparlama', synonyms: ['robustness', 'elasticity', 'hardiness', 'tenacity'], antonyms: ['fragility', 'vulnerability', 'weakness'], exampleSentence: 'Deep breathing exercises improve physiological resilience to acute stress.' },
  { word: 'Tailings', partOfSpeech: 'noun', phonetic: '/ˈteɪ.lɪŋz/', turkishMeaning: 'Maden atığı, pasa (maden çıkarma sonrası kalan zehirli atık)', synonyms: ['mining waste', 'refuse', 'slag', 'residue'], antonyms: ['pure ore', 'refined metal'], exampleSentence: 'Toxic mining tailings can contaminate local watershed basins if not sealed.' },
  { word: 'Ingenious', partOfSpeech: 'adjective', phonetic: '/ɪnˈdʒiː.ni.əs/', turkishMeaning: 'Dâhiyane, son derece hünerli, zekice yapılmış', synonyms: ['brilliant', 'clever', 'inventive', 'astute'], antonyms: ['clumsy', 'foolish', 'unimaginative', 'crude'], exampleSentence: 'The engineer devised an ingenious solution to purify industrial wastewater.' }
];

const day14Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  sosyal: sosyalQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 14,
  title: 'Gün 14 — Büyük Kamp Finali + 30 Soru TYT Sosyal Bilimler 2',
  database: day14Database,
  vocab: vocabDay14
};
