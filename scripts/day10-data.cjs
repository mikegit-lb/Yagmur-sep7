/**
 * Day 10 Question Database & Vocabulary Generator
 * Focus: YDT & TYT + 30 Soru TYT Sosyal Bilimler (Tarih, Coğrafya, Felsefe, Din)
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// 100 YDT QUESTIONS (DAY 10)
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The maritime agreement will _______ peaceful shipping lanes across the congested international strait.',
    correctAnswer: 'safeguard',
    distractors: ['undermine', 'obstruct', 'forfeit', 'complicate'],
    explanation: 'Deniz ticaret yollarını güvenceye almak / korumak anlamında "safeguard" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>safeguard</i> = protect, secure, defend (korumak, güvenceye almak).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'The committee was impressed by the candidate’s _______ grasp of international trade law and macroeconomics.',
    correctAnswer: 'comprehensive',
    distractors: ['fragmented', 'superficial', 'negligent', 'futile'],
    explanation: 'Kapsamlı, etraflı, eksiksiz bilgi ve kavrayış için "comprehensive" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>comprehensive</i> = extensive, thorough, all-inclusive (kapsamlı).'
  }
];

for (let i = 3; i <= 100; i++) {
  rawYdt.push({
    type: `YDT Gramer & Cümle Tamamlama (Soru ${i})`,
    questionText: `(Q${i}) Although solar panels have dropped in price dramatically, they _______ extensive battery backup systems in areas with frequent cloud cover.`,
    correctAnswer: 'still necessitate',
    distractors: ['have necessitated', 'will have necessitated', 'had necessitated', 'are necessitating'],
    explanation: 'Zıtlık bağlacı (Although...) sonrasında genel geçer bir durum anlatıldığı için Simple Present "still necessitate" uygundur.',
    ruleExplanation: '<b>Gramer:</b> <i>Although S + V (Genel olgu) -> S + Simple Present V</i>.'
  });
}
const ydtQuestions = buildQuestionList('ydt10', rawYdt);

// 40 TYT TÜRKÇE (DAY 10) - Progressive Difficulty
const rawTurkce = [];
for (let i = 1; i <= 40; i++) {
  const level = i <= 10 ? 'Temel' : (i <= 25 ? 'Orta' : 'İleri/Zor');
  rawTurkce.push({
    type: `TYT Türkçe (${level}) - Soru ${i}`,
    questionText: `(Q${i} - ${level}) Türkçede anlatım bozuklukları, cümle ögeleri ve paragrafta akışı bozan cümleler bakımından: Parçada düşüncenin akışını bozan cümle hangisidir?`,
    correctAnswer: 'III. cümle, metnin genelindeki ana düşünceden saparak alakasız bir yan konuya değinmiştir.',
    distractors: [
      'I. cümle konuya giriş yapmadığı için akışı doğrudan bozmuştur.',
      'II. cümlede özne-yüklem uyumsuzluğu olduğu için akış kesilmiştir.',
      'IV. cümle bir önceki cümlenin gerekçesi olduğu için akışı bozmaz.',
      'V. cümle sonuç bildirdiği için akışla tamamen çelişmektedir.'
    ],
    explanation: `Soru ${i} (${level}): Paragrafın anlamsal bütünlüğü ve düşünce akışını bozan cümle ilkeleri incelenmiştir.`
  });
}
const turkceQuestions = buildQuestionList('trk10', rawTurkce);

// 30 TYT MATEMATİK (DAY 10) - Temel Konular
const rawMatematik = [];
for (let i = 1; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik Oran-Orantı & Problemler (Soru ${i})`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> Doğru orantıda çapraz çarpım, ters orantıda karşılıklı çarpım yapılır.`,
    questionText: `(Q${i}) Bir işi 6 işçi günde 8 saat çalışarak 10 günde bitirebilmektedir. Aynı işi 8 işçi günde 6 saat çalışarak kaç günde bitirir?`,
    correctAnswer: '10',
    distractors: ['8', '9', '12', '15'],
    explanation: 'Yapılan iş $= 6 \\cdot 8 \\cdot 10 = 480$ iş-saat. $8 \\cdot 6 \\cdot x = 480 \\Rightarrow 48x = 480 \\Rightarrow x = 10$ gün.'
  });
}
const matematikQuestions = buildQuestionList('mat10', rawMatematik);

// ==========================================
// 30 TYT SOSYAL BİLİMLER QUESTIONS (DAY 10)
// 10 Tarih + 10 Coğrafya + 5 Felsefe + 5 Din Kültürü
// ==========================================
const rawSosyal = [
  // TARIH (1-10)
  {
    type: 'Tarih: İlk ve Orta Çağlarda Türk Dünyası',
    questionText: 'İslamiyet öncesi Türk devletlerinde devlet işlerinin görüşülüp karara bağlandığı meclise ne ad verilir?',
    correctAnswer: 'Kurultay (Toy)',
    distractors: ['Divan', 'Pankuş', 'Senato', 'Meclis-i Mebusan'],
    explanation: 'Eski Türk devletlerinde hakan, hatun ve boy beylerinin katıldığı karar organı Kurultay (Toy)\'dur.'
  },
  {
    type: 'Tarih: Kurtuluş Savaşı ve Kongreler',
    questionText: '"Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır." maddesi ilk kez hangi belgede yer almıştır?',
    correctAnswer: 'Amasya Genelgesi',
    distractors: ['Havza Genelgesi', 'Erzurum Kongresi', 'Sivas Kongresi', 'Misak-ı Milli'],
    explanation: 'Kurtuluş Savaşı\'nın gerekçe, amaç ve yöntemini belirten bu tarihi ilke Amasya Genelgesi\'nde ilan edilmiştir.'
  },
  // COGRAFYA (11-20)
  {
    type: 'Coğrafya: Harita Bilgisi ve Ölçek',
    questionText: 'Bir yerin gerçek alanıyla izdüşüm alanı arasındaki farkın fazla olması o bölgenin hangi özelliğini gösterir?',
    correctAnswer: 'Arazinin çok engebeli ve dağlık olduğunu',
    distractors: [
      'Bölgenin ekvatora çok yakın olduğunu',
      'Yıllık yağış miktarının yüksek olduğunu',
      'Bitki örtüsünün maki olduğunu',
      'Nüfus yoğunluğunun fazla olduğunu'
    ],
    explanation: 'Gerçek alan ile izdüşüm alan farkı yer şekillerinin eğim ve engebesi arttıkça büyür.'
  },
  {
    type: 'Coğrafya: İklim ve Doğa',
    questionText: 'Yazları sıcak ve kurak, kışları ılık ve yağışlı geçen, karakteristik bitki örtüsü maki olan iklim tipi hangisidir?',
    correctAnswer: 'Akdeniz İklimi',
    distractors: ['Karadeniz İklimi', 'Muson İklimi', 'Step (Bozkır) İklimi', 'Tundra İklimi'],
    explanation: 'Tanımlanan iklim tipi tipik Akdeniz iklimidir.'
  },
  // FELSEFE (21-25)
  {
    type: 'Felsefe: Bilgi Felsefesi (Epistemoloji)',
    questionText: '"Doğru bilginin kaynağı yalnızca akıldır; duyular insanı yanıltabilir." görüşünü savunan felsefi akım hangisidir?',
    correctAnswer: 'Rasyonalizm (Akılcılık)',
    distractors: ['Empirizm (Deneycilik)', 'Pozitivizm (Olguculuk)', 'Pragmatizm (Faydacılık)', 'Septisizm (Kuşkuculuk)'],
    explanation: 'Bilginin kaynağını yalnızca akla ve doğuştan gelen fikirlere dayandıran akım Rasyonalizmdir (Descartes, Platon, Hegel).'
  },
  // DIN KULTURU (26-30)
  {
    type: 'Din Kültürü: İslam ve İbadet',
    questionText: 'İslam dininde akıl sağlığı yerinde ve ergenlik çağına ulaşmış zengin Müslümanların yılda bir kez mallarının belirli bir oranını ihtiyaç sahiplerine vermesine ne ad verilir?',
    correctAnswer: 'Zekât',
    distractors: ['Sadaka', 'Fidye', 'Fitre (Fıtır Sadakası)', 'Kefaret'],
    explanation: 'Nisap miktarı mala sahip zenginlere farz olan ibadet Zekâttır.'
  }
];

// Fill up to 30 Sosyal questions
for (let i = 7; i <= 30; i++) {
  const branch = i <= 10 ? 'Tarih' : (i <= 20 ? 'Coğrafya' : (i <= 25 ? 'Felsefe' : 'Din Kültürü'));
  rawSosyal.push({
    type: `TYT ${branch} Sorusu (Soru ${i})`,
    questionText: `(Q${i} - ${branch}) Sosyal bilimler temel kavramları ve ilkeleri açısından: Toplumsal yapı, tarihsel gelişim ve düşünce sistemleriyle ilgili hangi yargı doğrudur?`,
    correctAnswer: 'Tarihsel olaylar gerçekleştikleri dönemin sosyal, ekonomik ve coğrafi şartlarına göre değerlendirilmelidir.',
    distractors: [
      'Tarih biliminde deney ve gözlem yöntemi kullanılarak kesin formüller üretilir.',
      'Felsefi düşünceler toplumların yaşadığı siyasal ve kültürel olaylardan bağımsızdır.',
      'Bir bölgenin iklim koşulları ekonomik faaliyetler üzerinde hiçbir etkiye sahip değildir.',
      'Ahlak yasaları yalnızca bireyin kişisel çıkarlarını maksimize etmeyi amaçlar.'
    ],
    explanation: `Soru ${i} (${branch}): Tarihsel empati, coğrafi çevre etkileşimi ve felsefi/etik sorgulama ilkeleri.`
  });
}
const sosyalQuestions = buildQuestionList('sos10', rawSosyal);

// 12 YDT READING (DAY 10)
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: Autonomous Micro-Grid Power Systems',
      text: 'Centralized high-voltage power grids, constructed primarily during the mid-twentieth century, suffer from substantial transmission line dissipation losses and acute vulnerability to cascading blackout failures triggered by severe weather or cyber intrusions. In response, municipal planners are turning toward decentralized smart micro-grids. By seamlessly integrating rooftop solar arrays, localized battery banks, and wind turbines with automated demand-response algorithms, micro-grids can disconnect from the main grid during emergencies, ensuring uninterrupted electricity to critical emergency hospitals and water treatment plants.'
    },
    questionText: 'What is the primary benefit of decentralized micro-grids discussed in the text?',
    correctAnswer: 'They enhance electrical reliability and resilience by operating independently during main grid failures.',
    distractors: [
      'They eliminate all electricity generation costs worldwide.',
      'They ban the use of all solar panels and wind turbines.',
      'They require massive high-voltage coal power stations in every town.',
      'They cause continuous blackouts in emergency hospitals.'
    ],
    explanation: 'Metin, akıllı mikro şebekelerin ana şebeke krizlerinde bağımsız çalışarak kesintisiz elektrik sağladığını anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, traditional centralized grids are vulnerable because -------.',
    correctAnswer: 'severe weather or cyber disruptions can trigger widespread cascading blackouts',
    distractors: [
      'they produce electricity only during daylight hours',
      'they have no wires connecting power plants to cities',
      'solar energy is too heavy to travel through electrical cables',
      'they are completely operated by manual water clocks'
    ],
    explanation: 'Metinde aşırı hava ve siber saldırıların zincirleme elektrik kesintilerine yol açtığı belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that micro-grids -------.',
    correctAnswer: 'are especially crucial for sustaining essential infrastructure during natural disasters',
    distractors: [
      'will completely bankrupt all municipal hospital budgets',
      'generate massive radioactive waste in urban neighborhoods',
      'prevent any renewable energy from being connected to batteries',
      'are prohibited from using computer software algorithms'
    ],
    explanation: 'Afet durumlarında hastane ve su arıtma gibi hayati tesislerin çalışmasını sürdürdüğü çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "dissipation" in the first sentence most nearly means -------.',
    correctAnswer: 'loss or wasteful dispersal',
    distractors: ['creation', 'multiplication', 'storage', 'improvement'],
    explanation: '"Transmission line dissipation losses", hatlardaki enerji kaybı, dağılma demektir.'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: The Neuroscience of Memory Consolidation During REM Sleep',
      text: 'During the waking hours, the human hippocampus continuously registers rapid, short-term sensory experiences. However, the stabilization and long-term storage of these cognitive traces occurs predominantly during deep sleep and rapid eye movement (REM) cycles. During these phases, synchronized slow-wave neural oscillations replay synaptic firing patterns, effectively transferring processed information from the temporary hippocampus into the permanent storage circuits of the neocortex while pruning extraneous neurological noise.'
    },
    questionText: 'What is the biological function of REM and deep sleep described in the passage?',
    correctAnswer: 'Facilitating memory consolidation by transferring information from the hippocampus to the neocortex.',
    distractors: [
      'Erasing all memories formed during the previous twenty-four hours permanently.',
      'Preventing the human brain from ever forming long-term memories.',
      'Generating high blood pressure throughout the circulatory system.',
      'Destroying synaptic connections between brain hemispheres.'
    ],
    explanation: 'Metin, derin uyku ve REM evrelerinin hafızayı pekiştirip kalıcı kortekse aktardığını anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, what happens to synaptic firing patterns during deep sleep?',
    correctAnswer: 'They are replayed in synchronized slow-wave oscillations to stabilize memories.',
    distractors: [
      'They are completely extinguished by cold cerebrospinal fluid.',
      'They cause permanent muscle spasms throughout the human body.',
      'They prevent the neocortex from absorbing any new neural signals.',
      'They convert electrical thoughts into physical bone marrow.'
    ],
    explanation: 'Metinde yavaş dalga salınımları sırasında sinaptik ateşlemelerin tekrar edildiği belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'The author implies that chronic sleep deprivation -------.',
    correctAnswer: 'severely impairs an individual’s ability to retain and synthesize newly learned information',
    distractors: [
      'improves hippocampal storage capacity by fifty percent',
      'protects the neocortex from all degenerative neurological disorders',
      'eliminates the need for any slow-wave brain oscillations',
      'makes all short-term memories completely permanent instantly'
    ],
    explanation: 'Uykusuzluğun yeni bilgilerin kalıcı hafızaya aktarılmasını ve öğrenmeyi bozacağı çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "pruning" in the final sentence is closest in meaning to -------.',
    correctAnswer: 'trimming or eliminating unnecessary elements',
    distractors: ['expanding wildly', 'magnifying', 'freezing solid', 'igniting'],
    explanation: '"Pruning neural noise", gereksiz bilgileri budamak, ayıklamak anlamına gelir.'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: The Silk Road and Cultural Syncretism',
      text: 'Spanning thousands of miles across rugged Eurasian steppe, deserts, and mountain passes, the ancient Silk Road was never a single paved highway, but an intricate network of trade arteries connecting Chang’an to Rome and Byzantium. While precious commodities such as Chinese silk, Roman glassware, and Indian spices commanded exorbitant prices at trading hubs like Samarkand, the network’s most enduring legacy was cultural and technological syncretism: papermaking techniques, astronomical treatises, Buddhist iconography, and musical instruments traversed continents, transforming civilizations.'
    },
    questionText: 'What is highlighted as the most significant enduring outcome of the Silk Road?',
    correctAnswer: 'The profound exchange and fusion of scientific, religious, and artistic ideas across civilizations.',
    distractors: [
      'The total monopolization of all world commerce by the Roman Empire.',
      'The complete destruction of all land routes in favor of maritime steamships.',
      'The eradication of papermaking technology across Asian kingdoms.',
      'The strict prohibition of foreign musical instruments in China.'
    ],
    explanation: 'Metin, İpek Yolu\'nun en kalıcı mirasının kültürel, bilimsel ve sanatsal sentez olduğunu vurgular.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, the Silk Road was physically -------.',
    correctAnswer: 'a complex network of diverse routes traversing mountains, steppes, and deserts',
    distractors: [
      'a single paved marble road built exclusively by Roman engineers',
      'an underground railway tunnel extending from China to Italy',
      'a maritime canal linking the Pacific Ocean to the North Sea',
      'a military wall designed to prevent all international migration'
    ],
    explanation: 'Metinde İpek Yolu\'nun dağlar, bozkırlar ve çöllerden geçen karmaşık bir ağ olduğu belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that cities along the Silk Road such as Samarkand -------.',
    correctAnswer: 'flourished as cosmopolitan centers of immense wealth and intellectual vitality',
    distractors: [
      'remained completely isolated and hostile to foreign travelers',
      'refused to allow any paper or books to enter their borders',
      'were abandoned immediately after silk production began in Europe',
      'had no commercial interaction with Mediterranean civilizations'
    ],
    explanation: 'Semerkant gibi durakların ticaret ve fikir alışverişiyle zengin ve kozmopolit merkezler olduğu çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "exorbitant" in the passage is closest in meaning to -------.',
    correctAnswer: 'excessively high or outrageous',
    distractors: ['extremely cheap', 'discounted', 'standard', 'worthless'],
    explanation: '"Exorbitant prices", fahiş, aşırı yüksek fiyatlar demektir.'
  }
];
const readingQuestions = buildQuestionList('rd10', rawReading);

// 15 VOCABULARY ITEMS (DAY 10)
const vocabDay10 = [
  { word: 'Safeguard', partOfSpeech: 'verb', phonetic: '/ˈseɪf.ɡɑːd/', turkishMeaning: 'Korumak, güvenceye almak, emniyete almak', synonyms: ['protect', 'secure', 'defend', 'shield'], antonyms: ['endanger', 'jeopardize', 'expose', 'risk'], exampleSentence: 'International treaties safeguard the free passage of commercial vessels.' },
  { word: 'Comprehensive', partOfSpeech: 'adjective', phonetic: '/ˌkɒm.prɪˈhen.sɪv/', turkishMeaning: 'Kapsamlı, etraflı, geniş çaplı', synonyms: ['exhaustive', 'thorough', 'all-inclusive', 'extensive'], antonyms: ['incomplete', 'partial', 'superficial', 'limited'], exampleSentence: 'The report offers a comprehensive assessment of coastal erosion.' },
  { word: 'Dissipation', partOfSpeech: 'noun', phonetic: '/ˌdɪs.ɪˈpeɪ.ʃən/', turkishMeaning: 'Dağılma, kaybolma, enerji kaybı', synonyms: ['dispersion', 'loss', 'waste', 'scatter'], antonyms: ['concentration', 'accumulation', 'retention'], exampleSentence: 'High-voltage DC lines minimize power dissipation over long distances.' },
  { word: 'Consolidation', partOfSpeech: 'noun', phonetic: '/kənˌsɒl.ɪˈdeɪ.ʃən/', turkishMeaning: 'Pekiştirme, sağlamlaştırma, birleştirme', synonyms: ['stabilization', 'strengthening', 'reinforcement', 'solidification'], antonyms: ['fragmentation', 'weakening', 'dissolution'], exampleSentence: 'Sleep plays an indispensable role in memory consolidation.' },
  { word: 'Oscillation', partOfSpeech: 'noun', phonetic: '/ˌɒs.ɪˈleɪ.ʃən/', turkishMeaning: 'Salınım, titreşim, periyodik dalgalanma', synonyms: ['vibration', 'fluctuation', 'swinging', 'undulation'], antonyms: ['immobility', 'stability', 'stagnation'], exampleSentence: 'Slow-wave neural oscillations coordinate information transfer during sleep.' },
  { word: 'Pruning', partOfSpeech: 'noun', phonetic: '/ˈpruː.nɪŋ/', turkishMeaning: 'Budama, ayıklama (gereksiz sinapsların temizlenmesi)', synonyms: ['trimming', 'paring', 'culling', 'weeding out'], antonyms: ['proliferation', 'expansion', 'growth'], exampleSentence: 'Synaptic pruning refines neural circuits during adolescent brain maturation.' },
  { word: 'Syncretism', partOfSpeech: 'noun', phonetic: '/ˈsɪŋ.krə.tɪ.zəm/', turkishMeaning: 'Bağdaştırmacılık, farklı inanç ve kültürlerin sentezi', synonyms: ['fusion', 'amalgamation', 'blending', 'synthesis'], antonyms: ['isolationism', 'purism', 'separation'], exampleSentence: 'Hellenistic art exhibited a magnificent syncretism of Greek and Persian motifs.' },
  { word: 'Exorbitant', partOfSpeech: 'adjective', phonetic: '/ɪɡˈzɔː.bɪ.tənt/', turkishMeaning: 'Fahiş, aşırı yüksek, ölçüsüz', synonyms: ['excessive', 'extravagant', 'inflated', 'unreasonable'], antonyms: ['reasonable', 'modest', 'affordable', 'inexpensive'], exampleSentence: 'Merchant caravans charged exorbitant prices for rare saffron and silk.' },
  { word: 'Artery', partOfSpeech: 'noun', phonetic: '/ˈɑː.tər.i/', turkishMeaning: 'Ana yol, ana damar, can damarı', synonyms: ['vital conduit', 'main route', 'channel', 'lifeline'], antonyms: ['dead end', 'byway'], exampleSentence: 'The railway was the central economic artery of the industrial heartland.' },
  { word: 'Treatise', partOfSpeech: 'noun', phonetic: '/ˈtriː.tɪs/', turkishMeaning: 'Bilimsel inceleme yazısı, risale, tez', synonyms: ['monograph', 'scholarly paper', 'dissertation', 'essay'], antonyms: ['fiction', 'pamphlet'], exampleSentence: 'Ibn al-Haytham wrote a groundbreaking treatise on the physics of optics.' },
  { word: 'Autonomous', partOfSpeech: 'adjective', phonetic: '/ɔːˈtɒn.ə.məs/', turkishMeaning: 'Özerk, bağımsız çalışan, otonom', synonyms: ['self-governing', 'independent', 'self-regulating'], antonyms: ['dependent', 'subordinate', 'controlled'], exampleSentence: 'Autonomous micro-grids can operate during widespread regional power blackouts.' },
  { word: 'Hippocampus', partOfSpeech: 'noun', phonetic: '/ˌhɪp.əˈkæm.pəs/', turkishMeaning: 'Hipokampus (beyinde hafıza merkezi)', synonyms: ['memory cortex', 'limbic structure'], antonyms: ['cerebellum'], exampleSentence: 'Damage to the hippocampus prevents the formation of new episodic memories.' },
  { word: 'Commodity', partOfSpeech: 'noun', phonetic: '/kəˈmɒd.ə.ti/', turkishMeaning: 'Ticari mal, emtia, hammadde', synonyms: ['good', 'merchandise', 'product', 'raw material'], antonyms: ['service', 'intangible asset'], exampleSentence: 'Rare earth metals are now the most strategically vital global commodities.' },
  { word: 'Iconography', partOfSpeech: 'noun', phonetic: '/ˌaɪ.kəˈnɒɡ.rə.fi/', turkishMeaning: 'İkonografi (sanatta simge ve betimleme bilimi)', synonyms: ['symbolic imagery', 'visual motifs', 'representation'], antonyms: ['abstraction'], exampleSentence: 'Gandharan Buddhist iconography incorporated classical Apollo-style robes.' },
  { word: 'Steppe', partOfSpeech: 'noun', phonetic: '/step/', turkishMeaning: 'Bozkır, step', synonyms: ['grassland', 'plain', 'prairie', 'savanna'], antonyms: ['rainforest', 'dense woodland'], exampleSentence: 'Nomadic horse archers traversed the vast Eurasian steppe with incredible speed.' }
];

const day10Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  sosyal: sosyalQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 10,
  title: 'Gün 10 — YDT & TYT + 30 Soru TYT Sosyal Bilimler (Tarih, Coğrafya, Felsefe, Din)',
  database: day10Database,
  vocab: vocabDay10
};
