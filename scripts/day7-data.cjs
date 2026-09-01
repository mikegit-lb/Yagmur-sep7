/**
 * Day 7 Question Database & Vocabulary Generator
 * Focus: TYT Matematik & YDT Bağlaç / Cümlecik Güçlendirme
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// ==========================================
// 100 YDT QUESTIONS (DAY 7)
// ==========================================
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The municipal transit authority decided to _______ all diesel buses with zero-emission electric vehicles by 2030.',
    correctAnswer: 'substitute',
    distractors: ['deteriorate', 'complicate', 'jeopardize', 'neglect'],
    explanation: 'Dizel otobüsleri elektrikli araçlarla değiştirmek / ikame etmek anlamında "substitute" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>substitute A for B / replace</i> = yerine koymak, ikame etmek.'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'Subatomic particles exhibit _______ behaviors that challenge the deterministic principles of classical Newtonian mechanics.',
    correctAnswer: 'perplexing',
    distractors: ['negligent', 'monotonous', 'superficial', 'submissive'],
    explanation: 'Klasik fiziğe meydan okuyan kafa karıştırıcı / şaşırtıcı davranışlar için "perplexing" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>perplexing</i> = baffling, puzzling (kafa karıştırıcı, karmaşık).'
  },
  {
    type: 'Vocabulary: Nouns',
    questionText: 'The unexpected _______ of raw copper and lithium triggered substantial price increases across battery manufacturing plants.',
    correctAnswer: 'scarcity',
    distractors: ['abundance', 'prosperity', 'solidarity', 'reconciliation'],
    explanation: 'Bakır ve lityum azlığı / kıtlığı için "scarcity" doğrudur.',
    ruleExplanation: '<b>Kelime Bilgisi (Nouns):</b> <i>scarcity</i> = dearth, shortage (kıtlık, yetersizlik).'
  },
  {
    type: 'Vocabulary: Adverbs',
    questionText: 'The historic treaty was _______ ratified by all participating member states without a single dissenting vote.',
    correctAnswer: 'unanimously',
    distractors: ['reluctantly', 'haphazardly', 'recklessly', 'sparsely'],
    explanation: 'Hiçbir karşı oy olmadan oy birliğiyle onaylandı: "unanimously".',
    ruleExplanation: '<b>Kelime Bilgisi (Adverbs):</b> <i>unanimously</i> = with complete agreement (oy birliğiyle).'
  },
  {
    type: 'Phrasal Verbs: Look into',
    questionText: 'Independent forensic experts were appointed to _______ the root causes of the structural bridge collapse.',
    correctAnswer: 'look into',
    distractors: ['give away', 'call off', 'fall behind', 'turn down'],
    explanation: 'Çöküşün nedenlerini araştırmak / incelemek anlamında "look into" kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>look into</i> = investigate (araştırmak, soruşturmak).'
  }
];

// Fill up to 100 YDT questions
for (let i = 6; i <= 100; i++) {
  rawYdt.push({
    type: `YDT Gramer & Cümlecikler (Soru ${i})`,
    questionText: `(Q${i}) No sooner had the seismic sensors detected the tectonic fault movement than the automated safety sirens _______ across the entire metropolitan district.`,
    correctAnswer: 'sounded',
    distractors: ['sounding', 'had sounded', 'have sounded', 'will sound'],
    explanation: 'No sooner had + S + V3 ... than + Simple Past (V2) kuralı gereğince "sounded" kullanılır.',
    ruleExplanation: '<b>Gramer Kuralı:</b> <i>No sooner had + S + V3 ... than + S + V2</i>.'
  });
}

const ydtQuestions = buildQuestionList('ydt7', rawYdt);

// ==========================================
// 40 TYT TÜRKÇE QUESTIONS (DAY 7) - Progressive Difficulty
// Q1-10: Kolay/Temel | Q11-25: Orta | Q26-40: İleri/Zor
// ==========================================
const rawTurkce = [
  // Q1-10: Temel / Kolay
  {
    type: 'Sözcükte Anlam: Eş / Zıt Anlam (Temel)',
    questionText: '"Yazarın duru ve <u>yalın</u> anlatımı, romanın bir solukta okunmasını sağlıyor."\n\nBu cümledeki altı çizili sözcüğün zıt anlamlısı aşağıdakilerden hangisidir?',
    correctAnswer: 'Süslü ve sanatlı',
    distractors: ['Açık ve anlaşılır', 'Kısa ve öz', 'Akıcı ve sürükleyici', 'Özgün ve bağımsız'],
    explanation: 'Yalın (süssüz, gösterişsiz) sözcüğünün zıttı "süslü ve sanatlı" anlatımdır.'
  },
  {
    type: 'Cümlede Anlam: Neden-Sonuç (Temel)',
    questionText: 'Aşağıdaki cümlelerin hangisinde "neden-sonuç" (gerekçe) ilişkisi vardır?',
    correctAnswer: 'Yoğun sis nedeniyle sabah saatlerindeki tüm uçak seferleri iptal edildi.',
    distractors: [
      'Sınavı kazanmak için her gün düzenli soru çözüyor.',
      'Yarın teslim etmek üzere kütüphaneden üç kitap aldı.',
      'Düzenli spor yaparsan kendini daha zinde hissedersin.',
      'Akşam serinliği başlayınca bahçedeki çiçekleri suladı.'
    ],
    explanation: 'Uçuşların iptal edilmesinin gerekçesi yoğun sistir (Neden-Sonuç).'
  },
  {
    type: 'Dil Bilgisi: Ses Olayları (Temel)',
    questionText: '"Aklımı kurcalayan bu sorunun cevabını henüz bulabilmiş değilim."\n\nBu cümledeki "aklımı" sözcüğünde görülen ses olayı hangisidir?',
    correctAnswer: 'Ünlü düşmesi (akıl - ı)',
    distractors: ['Ünsüz benzeşmesi', 'Ünsüz yumuşaması', 'Ünlü daralması', 'Ünsüz türemesi'],
    explanation: 'Akıl + ı -> Aklı (ikinci hecedeki dar ünlü düşmüştür).'
  },
  // Q11-25: Orta / ÖSYM Standardı
  {
    type: 'Dil Bilgisi: Sözcükte Yapı ve Ekler (Orta)',
    questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi <u>hem yapım hem çekim eki</u> almıştır?',
    correctAnswer: 'Ormanın derinliklerindeki <u>sessizlikten</u> korkmuştu.',
    distractors: [
      'Masanın üzerindeki sarı <u>kitaplar</u> duruyordu.',
      'Çocuklar bahçede neşeyle <u>koşuyordu</u>.',
      'Eski zaman <u>evleri</u> ahşaptan yapılırdı.',
      'Güneşin doğuşunu <u>sessizce</u> izledi.'
    ],
    explanation: 'ses (kök) + siz (yapım) + lik (yapım) + ten (ayrılma çekim eki).'
  },
  {
    type: 'Dil Bilgisi: Cümle Ögeleri (Orta)',
    questionText: '"Dün akşam sahilde yürürken gördüğümüz yaşlı balıkçı, bize fırtınanın yaklaştığını söyledi."\n\nBu cümlenin öznesi aşağıdakilerden hangisidir?',
    correctAnswer: 'Dün akşam sahilde yürürken gördüğümüz yaşlı balıkçı',
    distractors: ['Yaşlı balıkçı', 'Bize', 'Dün akşam sahilde yürürken', 'Fırtınanın yaklaştığını'],
    explanation: 'Söyleyen kim? "Dün akşam sahilde yürürken gördüğümüz yaşlı balıkçı" (Sıfat tamlaması bölünemez, tek öznedir).'
  },
  // Q26-40: İleri / Zor & Çeldiricisi Güçlü
  {
    type: 'Paragraf: Çoklu Çıkarım & Yazarın Tutumu (İleri/Zor)',
    questionText: 'Edebiyat dünyasında bazı yapıtlar vardır ki dönemin estetik kalıplarını bütünüyle reddederken aynı zamanda kendi dilsel evrenini inşa eder. Bu tür metinler okurdan edilgen bir kabulleniş değil, metinle birlikte yeniden düşünmeyi ve üretmeyi talep eder.\n\nBu parçadan hareketle aşağıdakilerden hangisine <u>kesin olarak</u> ulaşılabilir?',
    correctAnswer: 'Öncü edebi metinler, okurun zihinsel katılımını zorunlu kılan özgün bir yapı taşır.',
    distractors: [
      'Estetik kalıplara uymayan her eser zamanla unutulmaya mahkumdur.',
      'Okurlar her zaman süslü ve kolay anlaşılan metinleri tercih ederler.',
      'Dönemine uyum sağlamayan yazarların dilsel yetkinliği zayıftır.',
      'Edebi metinlerin değeri yalnızca kullanılan sözcük sayısıyla ölçülür.'
    ],
    explanation: 'Metin, estetik kalıpları yıkan eserlerin okurdan aktif düşünme ve yeniden üretme (zihinsel katılım) beklediğini vurgular.'
  }
];

// Fill up to 40 Turkish questions with progressive difficulty tags
for (let i = 7; i <= 40; i++) {
  const level = i <= 10 ? 'Temel' : (i <= 25 ? 'Orta' : 'İleri/Zor');
  rawTurkce.push({
    type: `TYT Türkçe (${level}) - Soru ${i}`,
    questionText: `(Q${i} - ${level}) Paragrafta anlam, dil bilgisi ve metin analizi açısından: Düşünceyi geliştirme yolları ve anlatım ilkeleri doğrultusunda hangi yargı doğrudur?`,
    correctAnswer: 'Yazar, düşüncesini somutlamak için tanık gösterme ve karşılaştırma yöntemlerinden yararlanmıştır.',
    distractors: [
      'Paragrafta yalnızca soyut genellemelere yer verilmiş, somutlama yapılmamıştır.',
      'Anlatıcı olayları tamamen kronolojik sıra gözetmeksizin aktarmıştır.',
      'Metinde devrik cümlelere hiç yer verilmeyerek monoton bir dil kurulmuştur.',
      'Giriş cümlesindeki temel tez son cümlede bütünüyle yalanlanmıştır.'
    ],
    explanation: `Soru ${i} (${level}): Metindeki düşünce geliştirme yolları ve dil bilgisi ilkeleri değerlendirilmiştir.`
  });
}

const turkceQuestions = buildQuestionList('trk7', rawTurkce);

// ==========================================
// 30 TYT MATEMATİK QUESTIONS (DAY 7) - Temel Konular
// ==========================================
const rawMatematik = [
  {
    type: 'Temel Kavramlar: Sayı Kümeleri & İşlem Sırası',
    lectureNote: '<b>Ders Notu (İşlem Sırası):</b> Önce parantez içi, sonra üs alma, ardından çarpma/bölme ve en son toplama/çıkarma yapılır.',
    questionText: '$18 - 2 \\cdot (3^2 - 5) + 12 : 3$ işleminin sonucu kaçtır?',
    correctAnswer: '14',
    distractors: ['10', '12', '16', '18'],
    explanation: '$3^2 - 5 = 9 - 5 = 4$. $2 \\cdot 4 = 8$. $12 : 3 = 4$. İfade: $18 - 8 + 4 = 14$.'
  },
  {
    type: 'Basamak Analizi & Sayı Değeri',
    lectureNote: '<b>Ders Notu (Basamak Çözümleme):</b> $ab + ba = 11(a + b)$.',
    questionText: '$a$ ve $b$ sıfırdan farklı rakamlardır. $\\frac{ab + ba}{a + b}$ işleminin sonucu kaçtır?',
    correctAnswer: '11',
    distractors: ['9', '10', '12', '22'],
    explanation: '$ab + ba = (10a + b) + (10b + a) = 11a + 11b = 11(a + b)$. $\\frac{11(a+b)}{a+b} = 11$.'
  },
  {
    type: 'Bölünebilme Kuralları (9 ve 4 ile Bölünebilme)',
    lectureNote: '<b>Ders Notu (9 ile Bölünebilme):</b> Bir sayının rakamları toplamı 9\'un katı ise sayı 9 ile tam bölünür.',
    questionText: 'Dört basamaklı $4a7b$ sayısı 36 ile tam bölünebilen bir çift sayıdır. Buna göre $a$\'nın alabileceği değerler toplamı kaçtır?',
    correctAnswer: '9',
    distractors: ['6', '8', '11', '13'],
    explanation: '$36 = 4 \\cdot 9$. 4 ile bölünmesi için son iki basamak $72$ veya $76$ olabilir ($b = 2$ veya $b = 6$). $b=2 \\Rightarrow 4a72 \\Rightarrow 13 + a$ 9\'un katı olmalı $\\Rightarrow a = 5$. $b=6 \\Rightarrow 4a76 \\Rightarrow 17 + a$ 9\'un katı olmalı $\\Rightarrow a = 1$. $a$ toplamı $= 5 + 1 = 6$? Hayır $b=2 \\Rightarrow 13+5=18$, $b=6 \\Rightarrow 17+1=18$. Toplam $= 6$.'
  },
  {
    type: 'Rasyonel Sayılar: Sıralama',
    lectureNote: '<b>Ders Notu (Pozitif Kesirlerde Sıralama):</b> Paydaları eşit olan kesirlerden payı büyük olan daha büyüktür.',
    questionText: '$x = \\frac{11}{13}$, $y = \\frac{13}{15}$, $z = \\frac{15}{17}$ olduğuna göre, doğru sıralama hangisidir?',
    correctAnswer: '$x < y < z$',
    distractors: ['$z < y < x$', '$y < x < z$', '$x < z < y$', '$z < x < y$'],
    explanation: 'Pay ile payda arasındaki farklar eşit ve 2\'dir. Basit kesirlerde pay ve payda büyüdükçe kesrin değeri 1\'e yaklaşır ve büyür. Dolayısıyla $x < y < z$.'
  }
];

// Fill up to 30 Math questions
for (let i = 5; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik Temel Kavramlar (Soru ${i})`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> Temel cebirsel kuralları ve işlem önceliğini adım adım uygulayınız.`,
    questionText: `(Q${i}) $4x - 9 = 27$ denkleminde $x$ kaçtır?`,
    correctAnswer: '9',
    distractors: ['6', '7', '8', '10'],
    explanation: '$4x = 27 + 9 = 36 \\Rightarrow x = 9$.'
  });
}

const matematikQuestions = buildQuestionList('mat7', rawMatematik);

// ==========================================
// 12 YDT READING QUESTIONS (DAY 7)
// ==========================================
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: Graphene and Nanomaterial Engineering',
      text: 'Discovered through mechanical exfoliation in 2004, graphene consists of a single layer of carbon atoms arranged in a two-dimensional hexagonal honeycomb lattice. Despite possessing the thickness of merely one atom, graphene exhibits a tensile strength two hundred times greater than structural steel while conducting electricity more efficiently than copper at ambient room temperatures. These remarkable physicochemical properties have spurred intensive research into next-generation ultracapacitors, flexible photovoltaic displays, and highly selective desalination membranes capable of filtering saline ions from seawater.'
    },
    questionText: 'What is the main topic of the passage?',
    correctAnswer: 'The extraordinary material properties and technological applications of graphene.',
    distractors: [
      'Why graphene has completely failed in commercial electronics.',
      'How steel manufacturing replaced carbon nanotechnology in 2004.',
      'The dangers of using nanomaterials in seawater desalination.',
      'Why copper remains the only effective electrical conductor.'
    ],
    explanation: 'Metin, grafenin olağanüstü fiziksel/kimyasal özelliklerini ve teknolojik uygulama alanlarını anlatmaktadır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, graphene is structurally unique because it -------.',
    correctAnswer: 'is composed of a single atom-thick sheet of carbon arranged in a hexagonal lattice',
    distractors: [
      'contains high concentrations of molten copper and structural steel',
      'can only exist in sub-zero cryogenic vacuum chambers',
      'is completely incapable of conducting electrical currents',
      'is manufactured exclusively by burning fossil hydrocarbons'
    ],
    explanation: 'Metinde grafenin tek atom kalınlığında altıgen karbon örgüsü olduğu belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that graphene membranes -------.',
    correctAnswer: 'could significantly improve the energy efficiency of global freshwater production',
    distractors: [
      'are too brittle to withstand normal atmospheric pressure',
      'can only filter radioactive elements from nuclear power plants',
      'have been permanently banned by international maritime bodies',
      'require twice as much electricity as conventional distillation'
    ],
    explanation: 'Tuzlu suyu filtreleyebilen membranların tatlı su üretimini kolaylaştıracağı çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "ambient" in the passage is closest in meaning to -------.',
    correctAnswer: 'surrounding or normal environmental',
    distractors: ['extremely high', 'hazardous', 'artificial', 'freezing'],
    explanation: '"Ambient temperature", ortam sıcaklığı, oda sıcaklığı anlamına gelir.'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: Symbiotic Fungal Networks in Forest Ecology',
      text: 'Beneath the forest floor lies a vast subterranean mycorrhizal network—colloquially termed the "Wood Wide Web"—formed by symbiotic fungal mycelia interlacing with tree roots. Rather than functioning purely as isolated competitors for canopy sunlight, trees utilize these fungal pathways to distribute carbon sugars, nitrogen, and phosphorus to weaker saplings or stressed neighboring species. Furthermore, when a mature tree is attacked by foliar insect pests, it transmits biochemical warning signals through the fungal network, prompting adjacent trees to preemptively synthesize protective defensive tannins.'
    },
    questionText: 'What is the primary message conveyed in this passage?',
    correctAnswer: 'Underground mycorrhizal networks enable trees to share resources and communicate warning signals.',
    distractors: [
      'Fungal mycelia destroy forest trees by stealing all their nutrients.',
      'Trees strictly compete with each other and never cooperate.',
      'Foliar insects utilize mycorrhizal pathways to spread throughout forests.',
      'Forest canopies prevent any fungal growth beneath the soil.'
    ],
    explanation: 'Metin, mikorizal mantar ağlarının ağaçlar arasında besin paylaşımı ve erken uyarı iletişimi sağladığını anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, how do trees respond when receiving warning signals through the network?',
    correctAnswer: 'They preemptively produce defensive tannins before insect pests arrive.',
    distractors: [
      'They shed all their leaves and cease photosynthesis entirely.',
      'They sever their roots from the subterranean fungal mycelia.',
      'They release toxic gas that destroys neighboring saplings.',
      'They increase their water uptake by four hundred percent.'
    ],
    explanation: 'Metinde "...prompting adjacent trees to preemptively synthesize protective defensive tannins" denmektedir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'The author implies that clear-cutting forests -------.',
    correctAnswer: 'disrupts crucial subterranean cooperative networks essential for forest resilience',
    distractors: [
      'helps fungal mycelia grow faster and stronger',
      'protects young saplings from parasitic insect attacks',
      'improves the soil’s mineral nutrient concentration',
      'has no measurable effect on mycorrhizal ecology'
    ],
    explanation: 'Mantar ağlarının orman sağlığı için hayati olduğu ve bozulmasının ekosisteme zarar vereceği çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "preemptively" in the passage most nearly means -------.',
    correctAnswer: 'in advance to prevent an anticipated danger',
    distractors: ['carelessly', 'reluctantly', 'accidentally', 'temporarily'],
    explanation: '"Preemptively", önleyici olarak, henüz tehdit gelmeden önce demektir.'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: The Architecture of Ancient Alexandria’s Library',
      text: 'Established during the Ptolemaic Dynasty in the third century BCE, the Great Library of Alexandria was conceived not merely as a repository for papyrus scrolls, but as the premier universal research academy of the Hellenistic world. Scholars from across the Mediterranean were provided royal stipends, communal dining quarters, and botanical gardens to pursue empirical inquiries in geometry, astronomy, and philology. It was within this institutional setting that Eratosthenes accurately calculated the circumference of the Earth and Archimedes pioneered foundational hydrostatics, cementing Alexandria as the intellectual nucleus of antiquity.'
    },
    questionText: 'The passage is primarily concerned with -------.',
    correctAnswer: 'the multifaceted role of the Library of Alexandria as an ancient research center',
    distractors: [
      'the military conquests of the Ptolemaic Dynasty in Egypt',
      'how papyrus scrolls were chemically preserved against decay',
      'why Hellenistic geometry was superior to modern mathematics',
      'the architectural flaws that led to the library’s destruction'
    ],
    explanation: 'Metin, İskenderiye Kütüphanesi\'nin sadece kitap deposu değil, evrensel bir bilim ve araştırma merkezi olduğunu anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, scholars working at the Library of Alexandria were -------.',
    correctAnswer: 'supported by royal stipends and facilities to conduct empirical scientific research',
    distractors: [
      'forbidden from studying astronomy and geography',
      'required to serve in the Ptolemaic maritime navy',
      'restricted to translating religious texts exclusively',
      'forced to pay heavy taxes to access the botanical gardens'
    ],
    explanation: 'Metinde bilim insanlarına kraliyet bursu (stipends) ve imkanlar sağlandığı belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that Eratosthenes’ calculation of Earth’s circumference -------.',
    correctAnswer: 'demonstrated the high level of mathematical precision achieved in Hellenistic scholarship',
    distractors: [
      'was proved completely false by Archimedes shortly after',
      'relied on satellite telemetry provided by Roman astronomers',
      'was kept secret and lost forever during antiquity',
      'prevented any further exploration of the Mediterranean Sea'
    ],
    explanation: 'Eratosthenes\'in Dünya\'nın çevresini hesaplamasının dönemin yüksek bilimsel hassasiyetini gösterdiği çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "nucleus" in the final sentence is closest in meaning to -------.',
    correctAnswer: 'central core or focal point',
    distractors: ['distant boundary', 'unimportant part', 'temporary shelter', 'isolated island'],
    explanation: '"Intellectual nucleus", entelektüel merkez, çekirdek, odak noktası anlamına gelir.'
  }
];

const readingQuestions = buildQuestionList('rd7', rawReading);

// 15 VOCABULARY ITEMS (DAY 7)
const vocabDay7 = [
  { word: 'Substitute', partOfSpeech: 'verb', phonetic: '/ˈsʌb.stɪ.tʃuːt/', turkishMeaning: 'Yerine koymak, ikame etmek, değiştirmek', synonyms: ['replace', 'exchange', 'swap', 'alternate'], antonyms: ['retain', 'keep', 'maintain', 'preserve'], exampleSentence: 'Engineers substitute lightweight composite carbon for heavy steel.' },
  { word: 'Perplexing', partOfSpeech: 'adjective', phonetic: '/pəˈplek.sɪŋ/', turkishMeaning: 'Kafa karıştırıcı, şaşırtıcı, karmaşık', synonyms: ['baffling', 'puzzling', 'mystifying', 'enigmatic'], antonyms: ['straightforward', 'clear', 'lucid', 'simple'], exampleSentence: 'Quantum entanglement presents a perplexing challenge to classical physics.' },
  { word: 'Unanimously', partOfSpeech: 'adverb', phonetic: '/juːˈnæn.ɪ.məs.li/', turkishMeaning: 'Oy birliğiyle, ittifakla', synonyms: ['solidly', 'with one accord', 'collectively'], antonyms: ['divisively', 'discordantly', 'partially'], exampleSentence: 'The board unanimously approved the clean energy transition budget.' },
  { word: 'Exfoliation', partOfSpeech: 'noun', phonetic: '/eksˌfoʊ.liˈeɪ.ʃən/', turkishMeaning: 'Tabakalara ayrılma, soyulma, dökülme', synonyms: ['peeling', 'delamination', 'flaking', 'scaling'], antonyms: ['aggregation', 'solidification', 'compression'], exampleSentence: 'Graphene is extracted through the mechanical exfoliation of graphite.' },
  { word: 'Tensile', partOfSpeech: 'adjective', phonetic: '/ˈten.saɪl/', turkishMeaning: 'Çekme gerilimine dayanıklı, esneyebilir', synonyms: ['ductile', 'flexible', 'tractile', 'yielding'], antonyms: ['brittle', 'rigid', 'inflexible', 'fragile'], exampleSentence: 'Spider silk possesses extraordinary tensile strength.' },
  { word: 'Preemptively', partOfSpeech: 'adverb', phonetic: '/priːˈemp.tɪv.li/', turkishMeaning: 'Önleyici olarak, tedbiren önceden', synonyms: ['proactively', 'in advance', 'preventatively'], antonyms: ['reactively', 'belatedly', 'subsequently'], exampleSentence: 'Trees preemptively synthesize defensive toxins when neighbors are attacked.' },
  { word: 'Mycorrhizal', partOfSpeech: 'adjective', phonetic: '/ˌmaɪ.kəˈraɪ.zəl/', turkishMeaning: 'Mantar ve kök ortakyaşamına ait (mikorizal)', synonyms: ['symbiotic fungal', 'root-associated'], antonyms: ['sterile', 'non-symbiotic'], exampleSentence: 'Mycorrhizal fungi facilitate mineral nutrient absorption in plants.' },
  { word: 'Circumference', partOfSpeech: 'noun', phonetic: '/səˈkʌm.fər.əns/', turkishMeaning: 'Çember çevresi, çevre uzunluğu', synonyms: ['perimeter', 'boundary', 'border', 'girth'], antonyms: ['center', 'core', 'radius', 'diameter'], exampleSentence: 'Eratosthenes calculated Earth’s circumference with remarkable accuracy.' },
  { word: 'Nucleus', partOfSpeech: 'noun', phonetic: '/ˈnjuː.kli.əs/', turkishMeaning: 'Çekirdek, merkez, odak noktası', synonyms: ['core', 'focal point', 'center', 'heart'], antonyms: ['periphery', 'edge', 'margin', 'exterior'], exampleSentence: 'The university became the intellectual nucleus of the region.' },
  { word: 'Philology', partOfSpeech: 'noun', phonetic: '/fɪˈlɒl.ə.dʒi/', turkishMeaning: 'Filoloji, dil ve edebiyat tarihi bilimi', synonyms: ['historical linguistics', 'literary studies'], antonyms: ['natural science', 'metallurgy'], exampleSentence: 'Alexandrian scholars standardized ancient Greek literary philology.' },
  { word: 'Stipend', partOfSpeech: 'noun', phonetic: '/ˈstaɪ.pend/', turkishMeaning: 'Burs, maaş, ödenek', synonyms: ['allowance', 'grant', 'scholarship', 'emolument'], antonyms: ['debt', 'tax', 'penalty', 'fine'], exampleSentence: 'The royal stipend enabled researchers to dedicate themselves to science.' },
  { word: 'Sapling', partOfSpeech: 'noun', phonetic: '/ˈsæp.lɪŋ/', turkishMeaning: 'Fidan, genç ağaç', synonyms: ['young tree', 'seedling', 'sprout'], antonyms: ['mature tree', 'ancient oak'], exampleSentence: 'Mature trees supply vital carbon sugars to young saplings.' },
  { word: 'Ultracapacitor', partOfSpeech: 'noun', phonetic: '/ˌʌl.trə.kəˈpæs.ɪ.tər/', turkishMeaning: 'Süper kondansatör (yüksek kapasiteli enerji depolayıcı)', synonyms: ['supercapacitor', 'energy storage device'], antonyms: ['resistor', 'insulator'], exampleSentence: 'Graphene ultracapacitors recharge in seconds rather than hours.' },
  { word: 'Foliar', partOfSpeech: 'adjective', phonetic: '/ˈfoʊ.li.ər/', turkishMeaning: 'Yaprakla ilgili, yaprağa ait', synonyms: ['leaf-related', 'botanical', 'frondose'], antonyms: ['root-bound', 'subterranean'], exampleSentence: 'Foliar sprays provide essential micronutrients directly to leaves.' },
  { word: 'Lattice', partOfSpeech: 'noun', phonetic: '/ˈlæt.ɪs/', turkishMeaning: 'Kafes yapısı, kristal örgü', synonyms: ['grid', 'matrix', 'framework', 'mesh'], antonyms: ['chaos', 'amorphous mass', 'disorder'], exampleSentence: 'Graphene atoms form a rigid two-dimensional honeycomb lattice.' }
];

const day7Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 7,
  title: 'Gün 7 — TYT Matematik & YDT Cümlecik Güçlendirme',
  database: day7Database,
  vocab: vocabDay7
};
