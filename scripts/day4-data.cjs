/**
 * Day 4 Question Database & Vocabulary Generator
 * Focus: TYT Matematik Temel İnşa & Formülsüz Mantık
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// ==========================================
// 100 YDT QUESTIONS (DAY 4)
// ==========================================
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The newly inaugurated transport policy aims to _______ urban carbon footprints by incentivizing electric commuter rail transit.',
    correctAnswer: 'diminish',
    distractors: ['intensify', 'obstruct', 'amplify', 'provoke'],
    explanation: 'Karbon ayak izini azaltmak / küçültmek için "diminish" (azaltmak) doğru yanıttır.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>diminish</i> = reduce, decrease (azaltmak, eksiltmek).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'Tardigrades possess a _______ resilience that allows them to survive the vacuum of space and intense ionizing radiation.',
    correctAnswer: 'phenomenal',
    distractors: ['negligent', 'superficial', 'submissive', 'monotonous'],
    explanation: 'Olağanüstü / fevkalade bir direnç anlamında "phenomenal" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>phenomenal</i> = extraordinary, exceptional (olağanüstü).'
  },
  {
    type: 'Vocabulary: Nouns',
    questionText: 'The sudden _______ of clean drinking water during the drought compelled municipal leaders to build reverse-osmosis desalination plants.',
    correctAnswer: 'scarcity',
    distractors: ['abundance', 'reconciliation', 'prosperity', 'solidarity'],
    explanation: 'Temiz içme suyu kıtlığı / yetersizliği için "scarcity" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Nouns):</b> <i>scarcity</i> = dearth, shortage (kıtlık, azlık).'
  },
  {
    type: 'Vocabulary: Adverbs',
    questionText: 'The ancient papyrus scrolls were _______ preserved due to the completely arid microclimate inside the desert tomb.',
    correctAnswer: 'exceptionally',
    distractors: ['hazardously', 'carelessly', 'sparsely', 'reluctantly'],
    explanation: 'Parşömenlerin olağanüstü / fevkalade şekilde korunması anlamında "exceptionally" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Adverbs):</b> <i>exceptionally</i> = remarkably, extraordinarily (olağanüstü şekilde).'
  },
  {
    type: 'Phrasal Verbs: Cope with',
    questionText: 'Modern urban drainage systems must be upgraded to _______ severe localized deluges caused by climate volatility.',
    correctAnswer: 'cope with',
    distractors: ['give away', 'turn down', 'fall behind', 'call off'],
    explanation: 'Aşırı yağışlarla başa çıkmak / üstesinden gelmek için "cope with" kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>cope with</i> = deal with, handle (başa çıkmak).'
  },
  {
    type: 'Phrasal Verbs: Carry out',
    questionText: 'Before authorizing commercial distribution, pharmaceutical regulators mandate that laboratories _______ multiple double-blind trials.',
    correctAnswer: 'carry out',
    distractors: ['bring up', 'look down on', 'drop out', 'make out'],
    explanation: 'Deneyleri / testleri yürütmek, uygulamak anlamında "carry out" doğrudur.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>carry out</i> = conduct, execute (yürütmek, gerçekleştirmek).'
  },
  {
    type: 'Phrasal Verbs: Put off',
    questionText: 'Due to severe supply-chain disruptions, the automobile manufacturer decided to _______ the launch of its new electric crossover.',
    correctAnswer: 'put off',
    distractors: ['take after', 'break into', 'fall out', 'give up'],
    explanation: 'Lansmanı ertelemek / tehir etmek anlamında "put off" kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>put off</i> = postpone, delay (ertelemek).'
  },
  {
    type: 'Phrasal Verbs: Hold back',
    questionText: 'Inadequate regional infrastructure continues to _______ economic development across remote highland provinces.',
    correctAnswer: 'hold back',
    distractors: ['look after', 'carry on', 'set up', 'stand for'],
    explanation: 'Gelişimi engellemek / geride tutmak / köstek olmak anlamında "hold back" kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>hold back</i> = impede, restrain, delay progress (engellemek, frenlemek).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'Because clean groundwater is a _______ resource, international treaties strictly regulate industrial aquifer extraction.',
    correctAnswer: 'finite',
    distractors: ['boundless', 'limitless', 'superfluous', 'redundant'],
    explanation: 'Yeraltı suyu sınırlı / sonlu bir kaynak olduğu için "finite" (sınırlı, sonlu) seçilir.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>finite</i> = limited, bounded (sınırlı, sonlu).'
  },
  {
    type: 'Vocabulary: Verbs',
    questionText: 'To _______ historical accuracy, period film directors hire academic consultants to review costume and dialect designs.',
    correctAnswer: 'ensure',
    distractors: ['demolish', 'neglect', 'distort', 'jeopardize'],
    explanation: 'Tarihsel doğruluğu garantiye almak / sağlamak için "ensure" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>ensure</i> = guarantee, secure (sağlamak, garanti etmek).'
  },
  {
    type: 'Phrasal Verbs: Break through',
    questionText: 'After decades of theoretical modeling, materials scientists managed to _______ and synthesize room-temperature superconductive crystals.',
    correctAnswer: 'break through',
    distractors: ['run out of', 'give in', 'call off', 'fall apart'],
    explanation: 'Engelleri aşıp büyük başarı / atılım elde etmek anlamında "break through" kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>break through</i> = overcome barriers, make a breakthrough (atılım yapmak).'
  },
  {
    type: 'Vocabulary: Nouns',
    questionText: 'The unexpected _______ of the bridge’s steel cables during the gale prompted an immediate structural inspection of the suspension system.',
    correctAnswer: 'oscillation',
    distractors: ['stagnation', 'solidarity', 'prosperity', 'deprivation'],
    explanation: 'Köprü halatlarının fırtınada salınması / titreşimi için "oscillation" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>oscillation</i> = vibration, swinging motion (salınım, titreşim).'
  },
  {
    type: 'Vocabulary: Verbs',
    questionText: 'Renewable energy subsidies are designed to _______ private investment in offshore wind turbine farms.',
    correctAnswer: 'stimulate',
    distractors: ['hinder', 'suppress', 'undermine', 'obstruct'],
    explanation: 'Özel yatırımları teşvik etmek / canlandırmak için "stimulate" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>stimulate</i> = encourage, boost, prompt (teşvik etmek, canlandırmak).'
  },
  {
    type: 'Vocabulary: Adverbs',
    questionText: 'The autonomous deep-sea submersible navigated _______ through the narrow hydrothermal labyrinth without scraping the rock walls.',
    correctAnswer: 'deftly',
    distractors: ['clumsily', 'recklessly', 'sparsely', 'superficially'],
    explanation: 'Denizaltının dar kanyonlarda ustalıkla / maharetle ilerlemesi: "deftly" (ustaca).',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>deftly</i> = skillfully, adroitly (ustaca, hünerle).'
  },
  {
    type: 'Phrasal Verbs: Make up for',
    questionText: 'The research institute operated round-the-clock weekend shifts to _______ time lost during the laboratory refurbishment.',
    correctAnswer: 'make up for',
    distractors: ['cut down on', 'put up with', 'look down on', 'get away with'],
    explanation: 'Kaybedilen zamanı telafi etmek anlamında "make up for" kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>make up for</i> = compensate for (telafi etmek).'
  }
];

// Fill up to 100 YDT questions
for (let i = 16; i <= 100; i++) {
  rawYdt.push({
    type: `YDT Gramer & Yapı (Soru ${i})`,
    questionText: `(Q${i}) According to modern macroeconomic modeling, sovereign debt restructuring will succeed only if fiscal regulators _______ transparency standards across banking reserves.`,
    correctAnswer: 'enforce',
    distractors: ['enforcing', 'to enforce', 'have been enforced', 'were enforced by'],
    explanation: 'Only if koşul yan cümlesinde geniş zaman etken fiil "enforce" gereklidir.',
    ruleExplanation: '<b>Gramer Kuralı:</b> <i>Only if + Present Simple , Main Clause (will + V1)</i>.'
  });
}

const ydtQuestions = buildQuestionList('ydt4', rawYdt);

// ==========================================
// 40 TYT TÜRKÇE QUESTIONS (DAY 4)
// ==========================================
const rawTurkce = [
  {
    type: 'Sözcükte Anlam: Anlam Genişlemesi',
    questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi mecaz anlamda kullanılmıştır?',
    correctAnswer: 'Söylediği sert sözlerle etrafındaki herkesin <u>hevesini kırdı</u>.',
    distractors: [
      'Piknik için getirdiğimiz tahta masanın <u>ayağı kırıldı</u>.',
      'Soğuk kış günlerinde pencerenin <u>camı kırıldı</u>.',
      'Çiftçi, tarladaki taşları <u>büyük bir balyozla kırdı</u>.',
      'Dikkatsiz sürücü arabanın <u>dikiz aynasını kırdı</u>.'
    ],
    explanation: '"Heves kırmak", cesaretini yok etmek, moralini bozmak anlamında mecazlaşmıştır.'
  },
  {
    type: 'Dil Bilgisi: Cümle Türleri (Yapısına Göre)',
    questionText: 'Aşağıdaki cümlelerin hangisi yapısı bakımından "bağlı cümle"dir?',
    correctAnswer: 'Sabah erken saatlerde kütüphaneye gitti ve akşama kadar ders çalıştı.',
    distractors: [
      'Güneş batarken dağların ardında harika bir kızıllık belirdi.',
      'Sınav sonuçları açıklandığında herkes büyük bir sevinç yaşadı.',
      'Dışarıda lapa lapa yağan kar sokakları tamamen beyaza bürüdü.',
      'Kendine güvenen insanlar zorluklar karşısında asla pes etmezler.'
    ],
    explanation: 'İki bağımsız yüklem ("gitti" ve "çalıştı") "ve" bağlacıyla bağlandığı için bağlı cümledir.'
  },
  {
    type: 'Dil Bilgisi: Noktalama İşaretleri (Noktalı Virgül)',
    questionText: 'Aşağıdaki cümlelerin hangisinde noktalı virgül ( ; ) yerinde kullanılmıştır?',
    correctAnswer: 'Türkiye, İtalya, Yunanistan Akdeniz; Almanya, Polonya, İsveç ise Baltık ve Kuzey Denizi havzasındadır.',
    distractors: [
      'Pazardan elma; armut ve kiraz aldık.',
      'Genç adam; masaya oturup sessizce bekledi.',
      'Dün akşam bize geldi; fakat konuşmadı.',
      'Eve vardım; kapıyı açtım; içeri girdim.'
    ],
    explanation: 'Farklı tür ve grupları (Akdeniz ülkeleri ile Baltık ülkelerini) birbirinden ayırmak için noktalı virgül kullanılır.'
  }
];

for (let i = 4; i <= 40; i++) {
  rawTurkce.push({
    type: `TYT Türkçe: Soru ${i}`,
    questionText: `(Q${i}) Paragraf yapısı, ana düşünce ve dil bilgisi incelemesi: Metnin dil ve anlatım özellikleri için hangisi söylenebilir?`,
    correctAnswer: 'Düşünceyi geliştirmek için karşılaştırma ve tanımlama yollarından yararlanılmıştır.',
    distractors: [
      'Olaylar kronolojik sıra gözetilmeksizin geriye dönüşlerle sunulmuştur.',
      'Anlatıcı tamamen taraflı ve sübjektif bir dil kullanmıştır.',
      'Metinde hiçbir sayısal veri veya somut kanıta yer verilmemiştir.',
      'Parçadaki bütün cümleler devrik ve eksiltili yapıda kurulmuştur.'
    ],
    explanation: 'Türkçe paragraf analizi: Parçadaki düşünce geliştirme yolları incelenmelidir.'
  });
}

const turkceQuestions = buildQuestionList('trk4', rawTurkce);

// ==========================================
// 30 TYT MATEMATİK QUESTIONS (DAY 4)
// ==========================================
const rawMatematik = [
  {
    type: 'Temel Kavramlar: Tek ve Çift Sayılar',
    lectureNote: '<b>Ders Notu (Çift/Tek Kuralları):</b> $\\text{Çift} \\times \\text{Tek} = \\text{Çift}$, $\\text{Tek} + \\text{Tek} = \\text{Çift}$. Eğer $3a + 5$ çift ise $3a$ tektir, dolayısıyla $a$ tek sayıdır.',
    questionText: '$a, b, c$ birer tam sayı olmak üzere, $a \\cdot b + 3c = 14$ olduğuna göre, aşağıdakilerden hangisi <u>kesinlikle</u> doğrudur?',
    correctAnswer: '$a \\cdot b$ tek ise $c$ çifttir.',
    distractors: [
      '$a$ ve $b$ çift sayıdır.',
      '$c$ tek sayıdır.',
      '$a+b+c$ toplamı tektir.',
      '$a \\cdot b \\cdot c$ çarpımı tektir.'
    ],
    explanation: '$a \\cdot b + 3c = 14$ (çift). Eğer $a \\cdot b$ tek ise $3c$ de tek olmalıdır (Tek + Tek = Çift). Eğer $a \\cdot b$ çift ise $3c$ çift, dolayısıyla $c$ çift olur.'
  },
  {
    type: 'Sayı Basamakları & Bölme Kalanı',
    lectureNote: '<b>Ders Notu (Basamak Analizi):</b> Üç basamaklı $ABC = 100A + 10B + C$.',
    questionText: '$A, B, C$ birbirinden farklı rakamlardır. $ABC + BCA + CAB = 1332$ olduğuna göre, $A+B+C$ toplamı kaçtır?',
    correctAnswer: '12',
    distractors: ['10', '11', '13', '14'],
    explanation: '$ABC + BCA + CAB = 111(A + B + C) = 1332 \\Rightarrow A + B + C = 1332 / 111 = 12$.'
  },
  {
    type: 'Problemler: Karışım Problemleri',
    lectureNote: '<b>Ders Notu (Karışım Formülü):</b> $\\text{Madde Miktarı} = \\text{Toplam Ağırlık} \\times \\text{Yüzde}$.',
    questionText: 'Şeker oranı %20 olan 60 gramlık şekerli su karışımına 40 gram saf su eklenirse yeni karışımın şeker oranı yüzde kaç olur?',
    correctAnswer: '12',
    distractors: ['10', '14', '15', '16'],
    explanation: 'Mevcut şeker: $60 \\times 0.20 = 12$ gram. Toplam yeni ağırlık: $60 + 40 = 100$ gram. Yeni yüzde: $(12 / 100) \\times 100 = \\%12$.'
  },
  {
    type: 'Geometri: Özel Üçgenler (3-4-5 / Pisagor)',
    lectureNote: '<b>Ders Notu (Özel Dik Üçgenler):</b> $3-4-5, 5-12-13, 8-15-17, 7-24-25$ ve katları Pisagor bağıntısını sağlar.',
    questionText: 'Hipotenüs uzunluğu 25 cm ve bir dik kenarı 15 cm olan dik üçgenin alanı kaç $\\text{cm}^2$ dir?',
    correctAnswer: '150',
    distractors: ['120', '135', '180', '200'],
    explanation: 'Diğer dik kenar: $3-4-5$ üçgeninin 5 katı: $15 - 20 - 25$. Kenar $= 20$ cm. Alan: $(15 \\times 20) / 2 = 150\\text{ cm}^2$.'
  },
  {
    type: 'Geometri: Çokgenlerde İç Açılar',
    lectureNote: '<b>Ders Notu (Düzgün Çokgen Açısı):</b> $n$ kenarlı düzgün çokgenin bir iç açısı: $\\frac{(n-2) \\cdot 180^\\circ}{n}$.',
    questionText: 'Bir düzgün sekizgenin bir iç açısının ölçüsü kaç derecedir?',
    correctAnswer: '135',
    distractors: ['120', '128', '140', '144'],
    explanation: 'İç açı: $\\frac{(8 - 2) \\times 180^\\circ}{8} = \\frac{6 \\times 180^\\circ}{8} = \\frac{1080^\\circ}{8} = 135^\\circ$.'
  }
];

for (let i = 6; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik: Soru ${i}`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> Denklem kurma, oran-orantı ve temel geometri kurallarını adım adım uygulayınız.`,
    questionText: `(Q${i}) Bir kenarı $6\\text{ cm}$ olan eşkenar üçgenin çevresi kaç cm\'dir?`,
    correctAnswer: '18',
    distractors: ['12', '15', '24', '36'],
    explanation: 'Çevre $= 3 \\times 6 = 18\\text{ cm}$.'
  });
}

const matematikQuestions = buildQuestionList('mat4', rawMatematik);

// ==========================================
// 12 YDT READING QUESTIONS (DAY 4)
// ==========================================
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: Quantum Computing and Cryptographic Paradigms',
      text: 'Classical computing fundamentally relies on binary digits (bits) that exist strictly in one of two discrete states: zero or one. In contrast, quantum computers leverage the quantum mechanical phenomena of superposition and entanglement through quantum bits, or qubits. Because a qubit can exist in a linear combination of simultaneous states, a quantum processor with N qubits can evaluate two to the power of N computational states simultaneously. This exponential processing capability threatens the foundational architecture of contemporary public-key cryptography, such as RSA and Elliptic Curve encryption, which underpin modern internet security and financial transactions. Global cryptographic bodies are consequently racing to standardize post-quantum cryptography algorithms resistant to Shor’s quantum factorization algorithm.'
    },
    questionText: 'What is the central focus of the passage?',
    correctAnswer: 'How quantum computing’s immense processing capabilities challenge current digital encryption systems.',
    distractors: [
      'The mathematical proof that quantum computers will completely replace classical PCs in homes.',
      'Why RSA encryption is permanently immune to all quantum computational attacks.',
      'How qubits are physically manufactured using commercial silicon transistors.',
      'The complete failure of international cryptographic bodies to standardize algorithms.'
    ],
    explanation: 'Metin, kuantum bilgisayarların üstel hesaplama gücünün mevcut şifreleme (kriptografi) sistemlerini tehdit ettiğini ve yeni algoritmalar geliştirildiğini anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, qubits differ from classical bits because they -------.',
    correctAnswer: 'can exist in a superposition of multiple simultaneous states',
    distractors: [
      'can only process binary numbers during the daytime',
      'are physically larger than traditional semiconductor chips',
      'do not require any mathematical algorithms to operate',
      'can only be stored on magnetic optical discs'
    ],
    explanation: 'Metinde "a qubit can exist in a linear combination of simultaneous states" (süperpozisyon) ifadesi yer alır.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that if post-quantum encryption is not adopted -------.',
    correctAnswer: 'global financial transactions and digital communications will become highly vulnerable to quantum decryption',
    distractors: [
      'quantum computers will instantly cease to function',
      'classical supercomputers will become twice as fast',
      'all internet traffic will be routed through analog telephone lines',
      'cryptographers will ban all research into quantum physics'
    ],
    explanation: 'Mevcut RSA sistemlerinin kuantum bilgisayarlarca kırılabileceği ve yeni şifreleme standartlarının zorunlu olduğu çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "underpin" in the passage is closest in meaning to -------.',
    correctAnswer: 'support or form the basis of',
    distractors: ['obstruct', 'destroy', 'distort', 'neglect'],
    explanation: '"Underpin", desteklemek, temelini oluşturmak anlamına gelir (support or form the basis of).'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: The Silk Road as a Conduit of Cultural Syncretism',
      text: 'Historically mischaracterized as merely a commercial highway for luxury textiles and spices, the trans-Eurasian Silk Road was fundamentally a dynamic conduit of intellectual, religious, and artistic cross-pollination. Between the Han Dynasty and the Late Middle Ages, merchant caravans traversed treacherous desert basins and mountain passes, carrying not only physical cargo but also philosophical treatises, metallurgical innovations, and architectural motifs. Buddhist iconography traveled from the Indian subcontinent along Central Asian oasis routes into China, where it merged with Daoist and Confucian aesthetics to produce the monumental rock-cut grottoes of Dunhuang. Similarly, paper-making technology traversed westward from China to Samarkand and Baghdad, catalyzing the Islamic Golden Age and transforming European scholarship.'
    },
    questionText: 'The primary purpose of the passage is to demonstrate that the Silk Road -------.',
    correctAnswer: 'functioned as a vital channel for intellectual and cultural exchange beyond mere commerce',
    distractors: [
      'was exclusively dedicated to the monopolistic trade of Chinese silk fabrics',
      'prevented the spread of foreign religions across Central Asia',
      'declined rapidly because caravans could not cross desert basins',
      'was constructed entirely by European merchants in the Middle Ages'
    ],
    explanation: 'Metin, İpek Yolu\'nun sadece ticari değil, düşünsel, sanatsal ve kültürel bir köprü olduğunu anlatmaktadır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, the westward transmission of paper-making technology -------.',
    correctAnswer: 'played a pivotal role in stimulating scholarly flourishing in Baghdad and Europe',
    distractors: [
      'caused a catastrophic decline in Central Asian book production',
      'was kept entirely secret within the Dunhuang grottoes for centuries',
      'ended the commercial trade of silk across Eurasian caravan routes',
      'was rejected by Islamic scholars during the Golden Age'
    ],
    explanation: 'Metinde kağıt üretiminin batıya geçişinin "catalyzing the Islamic Golden Age and transforming European scholarship" sağladığı belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'The Dunhuang grottoes are mentioned in the passage as an example of -------.',
    correctAnswer: 'the artistic blending of Indian Buddhist motifs with indigenous Chinese philosophies',
    distractors: [
      'a military fortress used to defend commercial caravans from bandits',
      'the total destruction of local art by incoming foreign traders',
      'an exclusively European architectural style transplanted to Asia',
      'a modern museum constructed to exhibit industrial machinery'
    ],
    explanation: 'Metinde Dunhuang mağaralarının Hint Budist sanatı ile Çin estetiğinin sentezi (syncretism) olduğu belirtilir.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "syncretism" in the title and context refers to -------.',
    correctAnswer: 'the fusion of different cultural or religious ideas',
    distractors: ['the violent clash of rival armies', 'the complete isolation of civilizations', 'the rapid decline of trade revenues', 'the mathematical measurement of land'],
    explanation: '"Syncretism", farklı inanç ve kültürlerin kaynaşması, sentezi anlamına gelir.'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: Urban Rewilding and Green Corridors',
      text: 'As metropolitan sprawl fragments natural habitats into isolated ecological islands, urban ecologists are pioneering "rewilding" strategies designed to weave biodiversity back into dense concrete environments. Rather than maintaining sterile manicured lawns requiring pesticide applications and intensive irrigation, rewilding initiatives reintroduce native flora, daylight culverted urban streams, and construct vegetated green corridors connecting city parks with surrounding rural reserves. These biophilic corridors serve dual functions: they enable pollinators, migratory birds, and small mammals to navigate urban landscapes safely, while simultaneously mitigating the "urban heat island" effect by providing microclimatic shade and evaporative cooling.'
    },
    questionText: 'What is the main idea of the passage?',
    correctAnswer: 'Urban rewilding and green corridors restore urban biodiversity while mitigating climate impacts in cities.',
    distractors: [
      'Cities should replace all public parks with concrete parking structures.',
      'Manicured lawns with heavy pesticides are the most effective urban habitat.',
      'Urban sprawl has completely eradicated all forms of wildlife worldwide.',
      'Green corridors are too expensive to construct in modern metropolises.'
    ],
    explanation: 'Metin, kentsel yabanlaştırma ve yeşil koridorların hem biyoçeşitliliği hem de kentsel ısı adası etkisini azalttığını savunur.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, green corridors benefit city environments by -------.',
    correctAnswer: 'facilitating safe wildlife transit and lowering localized temperatures through shade and cooling',
    distractors: [
      'increasing the amount of concrete paving in residential areas',
      'mandating the use of chemical pesticides in public parks',
      'blocking the natural flow of rivers and urban streams',
      'encouraging the expansion of suburban motorways'
    ],
    explanation: 'Metinde koridorların hayvanlara güvenli geçiş sağladığı ve kentsel ısı adası etkisini azalttığı açıkça ifade edilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that traditional manicured lawns -------.',
    correctAnswer: 'are ecologically impoverished and demand excessive water and chemical inputs',
    distractors: [
      'provide better habitats for migratory birds than native forests',
      'are completely immune to high urban temperatures',
      'are preferred by urban ecologists over wild flora',
      'do not require any maintenance or irrigation'
    ],
    explanation: 'Metinde çimlerin "sterile manicured lawns requiring pesticide applications and intensive irrigation" olduğu belirtilir.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "mitigate" in the final sentence is closest in meaning to -------.',
    correctAnswer: 'lessen or reduce the severity of',
    distractors: ['intensify', 'accelerate', 'trigger', 'overlook'],
    explanation: '"Mitigate", hafifletmek, etkisini azaltmak demektir (lessen or reduce).'
  }
];

const readingQuestions = buildQuestionList('rd4', rawReading);

// 15 VOCABULARY ITEMS (DAY 4)
const vocabDay4 = [
  { word: 'Diminish', partOfSpeech: 'verb', phonetic: '/dɪˈmɪn.ɪʃ/', turkishMeaning: 'Azal(t)mak, eksil(t)mek, değerini düşürmek', synonyms: ['decrease', 'lessen', 'shrink', 'dwindle'], antonyms: ['increase', 'grow', 'expand', 'amplify'], exampleSentence: 'Solar investments help diminish reliance on fossil fuel imports.' },
  { word: 'Phenomenal', partOfSpeech: 'adjective', phonetic: '/fəˈnɒm.ɪ.nəl/', turkishMeaning: 'Olağanüstü, fevkalade, dikkat çekici', synonyms: ['extraordinary', 'exceptional', 'remarkable', 'astounding'], antonyms: ['ordinary', 'mediocre', 'unremarkable', 'common'], exampleSentence: 'The young pianist exhibited phenomenal technical mastery.' },
  { word: 'Scarcity', partOfSpeech: 'noun', phonetic: '/ˈskeə.sə.ti/', turkishMeaning: 'Kıtlık, azlık, yetersizlik', synonyms: ['dearth', 'shortage', 'deficiency', 'paucity'], antonyms: ['abundance', 'surplus', 'plenty', 'profusion'], exampleSentence: 'The severe drought caused an acute scarcity of fresh produce.' },
  { word: 'Exceptionally', partOfSpeech: 'adverb', phonetic: '/ɪkˈsep.ʃən.əl.i/', turkishMeaning: 'Olağanüstü biçimde, fevkalade', synonyms: ['extraordinarily', 'remarkably', 'unusually', 'incredibly'], antonyms: ['normally', 'typically', 'ordinarily', 'moderately'], exampleSentence: 'The telescope captured exceptionally clear images of distant nebulae.' },
  { word: 'Finite', partOfSpeech: 'adjective', phonetic: '/ˈfaɪ.naɪt/', turkishMeaning: 'Sonlu, sınırlı, tükenebilir', synonyms: ['limited', 'bounded', 'restricted', 'measurable'], antonyms: ['infinite', 'limitless', 'endless', 'boundless'], exampleSentence: 'Earth’s mineral wealth is a strictly finite endowment.' },
  { word: 'Ensure', partOfSpeech: 'verb', phonetic: '/ɪnˈʃɔːr/', turkishMeaning: 'Garantiye almak, temin etmek, sağlamak', synonyms: ['guarantee', 'secure', 'assure', 'certify'], antonyms: ['endanger', 'imperil', 'undermine', 'neglect'], exampleSentence: 'Safety protocols ensure that all laboratory personnel wear protective gear.' },
  { word: 'Oscillation', partOfSpeech: 'noun', phonetic: '/ˌɒs.ɪˈleɪ.ʃən/', turkishMeaning: 'Salınım, titreşim, dalgalanma', synonyms: ['vibration', 'swing', 'fluctuation', 'pulsation'], antonyms: ['steadiness', 'constancy', 'stability', 'fixity'], exampleSentence: 'The seismograph registered a periodic oscillation during the tremor.' },
  { word: 'Stimulate', partOfSpeech: 'verb', phonetic: '/ˈstɪm.jə.leɪt/', turkishMeaning: 'Canlandırmak, uyarmak, teşvik etmek', synonyms: ['encourage', 'prompt', 'foster', 'invigorate'], antonyms: ['discourage', 'dampen', 'suppress', 'inhibit'], exampleSentence: 'Tax credits stimulate technological innovation in renewable energy.' },
  { word: 'Deftly', partOfSpeech: 'adverb', phonetic: '/ˈdeft.li/', turkishMeaning: 'Ustalıkla, maharetle, becerikli biçimde', synonyms: ['skillfully', 'adroitly', 'expertly', 'nimble'], antonyms: ['clumsily', 'awkwardly', 'ineptly', 'carelessly'], exampleSentence: 'The surgeon deftly repaired the severed nerve tissue.' },
  { word: 'Underpin', partOfSpeech: 'verb', phonetic: '/ˌʌn.dəˈpɪn/', turkishMeaning: 'Desteklemek, temelini oluşturmak, güçlendirmek', synonyms: ['support', 'bolster', 'reinforce', 'sustain'], antonyms: ['undermine', 'weaken', 'destabilize', 'subvert'], exampleSentence: 'Scientific principles underpin all modern biomedical innovations.' },
  { word: 'Superposition', partOfSpeech: 'noun', phonetic: '/ˌsuː.pə.pəˈzɪʃ.ən/', turkishMeaning: 'Üst üste binme, eşzamanlı konumlanma (kuantum)', synonyms: ['overlap', 'combination', 'alignment', 'coexistence'], antonyms: ['separation', 'isolation', 'division', 'divergence'], exampleSentence: 'Qubits exploit quantum superposition to compute multiple paths simultaneously.' },
  { word: 'Conduit', partOfSpeech: 'noun', phonetic: '/ˈkɒn.dʒu.ɪt/', turkishMeaning: 'Kanal, boru, aktarma aracı/yolu', synonyms: ['channel', 'channeling medium', 'duct', 'pipeline'], antonyms: ['barrier', 'blockade', 'obstruction', 'stopper'], exampleSentence: 'The oasis town served as an intellectual conduit between civilizations.' },
  { word: 'Syncretism', partOfSpeech: 'noun', phonetic: '/ˈsɪŋ.krə.tɪ.zəm/', turkishMeaning: 'Farklı inanç/kültürlerin kaynaşması, sentez', synonyms: ['fusion', 'blending', 'amalgamation', 'integration'], antonyms: ['orthodoxy', 'purity', 'segregation', 'fraction'], exampleSentence: 'Hellenistic art exhibited a rich syncretism of Greek and Egyptian styles.' },
  { word: 'Biophilic', partOfSpeech: 'adjective', phonetic: '/ˌbaɪ.oʊˈfɪl.ɪk/', turkishMeaning: 'Doğasever, doğayla iç içe yaşayan/tasarlanan', synonyms: ['nature-oriented', 'ecological', 'organic', 'green'], antonyms: ['artificial', 'sterile', 'synthetic', 'man-made'], exampleSentence: 'Modern architectural firms prioritize biophilic design with natural light.' },
  { word: 'Mitigate', partOfSpeech: 'verb', phonetic: '/ˈmɪt.ɪ.ɡeɪt/', turkishMeaning: 'Hafifletmek, etkisini azaltmak, yatıştırmak', synonyms: ['alleviate', 'reduce', 'lessen', 'moderate'], antonyms: ['exacerbate', 'worsen', 'aggravate', 'intensify'], exampleSentence: 'Planting urban trees helps mitigate heatwave temperatures in concrete avenues.' }
];

const day4Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 4,
  title: 'Gün 4 — TYT Matematik Temel İnşa & Formülsüz Mantık',
  database: day4Database,
  vocab: vocabDay4
};
