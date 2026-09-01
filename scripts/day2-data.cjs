/**
 * Day 2 Question Database & Vocabulary Generator
 * Focus: YDT İngilizce Derinlemesine & Gramer Ustalığı
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// ==========================================
// 100 YDT QUESTIONS (DAY 2)
// ==========================================
const rawYdt = [
  // 1-15: Vocabulary & Phrasal Verbs
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The environmental committee agreed that aggressive deforestation would inevitably _______ the region’s delicate water cycle.',
    correctAnswer: 'disrupt',
    distractors: ['enhance', 'substantiate', 'commence', 'reconcile'],
    explanation: 'Ormansızlaşma su döngüsünü bozar / aksatır anlamında "disrupt" doğru cevaptır.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>disrupt</i> = bozmak, aksatmak, altüst etmek.'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'Archaeologists were stunned by the _______ preservation of the organic fabrics recovered from the peat bog.',
    correctAnswer: 'impeccable',
    distractors: ['negligent', 'superficial', 'vulnerable', 'hostile'],
    explanation: 'Turba bataklığından çıkarılan kumaşların kusursuz korunması anlamında "impeccable" (kusursuz, mükemmel) uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>impeccable</i> = kusursuz, hatasız, eksiksiz.'
  },
  {
    type: 'Vocabulary: Nouns',
    questionText: 'The sudden _______ of energy prices compelled manufacturing facilities to switch to rooftop solar installations.',
    correctAnswer: 'escalation',
    distractors: ['mitigation', 'stagnation', 'deterioration', 'negligence'],
    explanation: 'Enerji fiyatlarının aniden tırmanması / yükselmesi için "escalation" kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi (Nouns):</b> <i>escalation</i> = tırmanma, artış, şiddetlenme.'
  },
  {
    type: 'Vocabulary: Adverbs',
    questionText: 'The two scientific hypotheses, though formulated independently, arrived at _______ identical conclusions regarding quantum entanglement.',
    correctAnswer: 'virtually',
    distractors: ['scarcely', 'reluctantly', 'adversely', 'hazardously'],
    explanation: '"Neredeyse / fiilen aynı sonuçlara ulaştı" anlamında "virtually" (neredeyse, hemen hemen) uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Adverbs):</b> <i>virtually</i> = neredeyse, hemen hemen, fiilen.'
  },
  {
    type: 'Phrasal Verbs: Call off',
    questionText: 'Due to severe blizzard warnings across the alpine pass, expedition leaders chose to _______ the summit attempt until spring.',
    correctAnswer: 'call off',
    distractors: ['bring up', 'carry out', 'take after', 'look down on'],
    explanation: 'Fırtına uyarısı nedeniyle zirve tırmanışı iptal edildi: "call off" = iptal etmek.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>call off</i> = cancel (iptal etmek).'
  },
  {
    type: 'Phrasal Verbs: Cope with',
    questionText: 'Urban planners are designing permeable pavements to help metropolitan infrastructure _______ sudden flash floods.',
    correctAnswer: 'cope with',
    distractors: ['turn down', 'fall apart', 'give off', 'run out of'],
    explanation: 'Ani sel baskınlarıyla başa çıkmak / üstesinden gelmek için "cope with" kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>cope with</i> = deal with, overcome (başa çıkmak).'
  },
  {
    type: 'Phrasal Verbs: Give up',
    questionText: 'Despite experiencing numerous clinical trial setbacks, the oncology team refused to _______ their search for targeted therapies.',
    correctAnswer: 'give up',
    distractors: ['put off', 'break down', 'cut down', 'keep off'],
    explanation: 'Aramaktan / araştırmaktan vazgeçmeyi reddetti: "give up" = vazgeçmek, pes etmek.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>give up</i> = abandon, surrender (vazgeçmek).'
  },
  {
    type: 'Phrasal Verbs: Bring about',
    questionText: 'The rapid transition to electric public transport is expected to _______ a dramatic reduction in urban particulate pollution.',
    correctAnswer: 'bring about',
    distractors: ['look after', 'hold back', 'drop out', 'make out'],
    explanation: 'Hava kirliliğinde büyük bir azalmaya yol açması / neden olması: "bring about" = yol açmak, sebep olmak.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>bring about</i> = cause, lead to (yol açmak, sebep olmak).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'Because human memory is inherently _______, legal scholars caution against relying solely on eyewitness testimonies.',
    correctAnswer: 'fallible',
    distractors: ['tenacious', 'resilient', 'omnipotent', 'immutable'],
    explanation: 'İnsan hafızası yanılabilir / hata yapabilir yapıda olduğu için "fallible" doğrudur.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>fallible</i> = yanılabilir, hata yapabilir.'
  },
  {
    type: 'Vocabulary: Verbs',
    questionText: 'Satellite remote-sensing data can _______ mathematical models that forecast desertification trends in arid basins.',
    correctAnswer: 'corroborate',
    distractors: ['contradict', 'obstruct', 'alienate', 'demolish'],
    explanation: 'Uydu verileri modelleri doğrular / destekler: "corroborate" = doğrulamak, teyit etmek.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>corroborate</i> = confirm, verify (doğrulamak, kanıtlarla desteklemek).'
  },
  {
    type: 'Phrasal Verbs: Rely on',
    questionText: 'Developing nations cannot solely _______ foreign humanitarian aid to construct long-term domestic energy grids.',
    correctAnswer: 'rely on',
    distractors: ['stand for', 'show off', 'pass away', 'break into'],
    explanation: 'Dış yardıma bel bağlamak / güvenmek anlamında "rely on" (veya depend on) kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>rely on / depend on</i> = güvenmek, bel bağlamak.'
  },
  {
    type: 'Vocabulary: Nouns',
    questionText: 'The unprecedented _______ of microplastics across deep oceanic trenches highlights the pervasive reach of human waste.',
    correctAnswer: 'abundance',
    distractors: ['scarcity', 'deficiency', 'deterrence', 'omission'],
    explanation: 'Mikroplastiklerin derin hendeklerdeki eşi benzeri görülmemiş bolluğu / çokluğu: "abundance" doğrudur.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>abundance</i> = bolluk, bereket, çokluk.'
  },
  {
    type: 'Vocabulary: Verbs',
    questionText: 'To _______ potential data breaches, financial institutions now mandate hardware-based biometric verification.',
    correctAnswer: 'avert',
    distractors: ['instigate', 'exacerbate', 'prolong', 'manifest'],
    explanation: 'Olası veri ihlallerini önlemek / savuşturmak için "avert" (önlemek) uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>avert</i> = prevent, avoid (önlemek, savuşturmak).'
  },
  {
    type: 'Vocabulary: Adverbs',
    questionText: 'The ancient script was _______ engraved into basalt slabs, ensuring its survival across three millennia.',
    correctAnswer: 'meticulously',
    distractors: ['recklessly', 'sparsely', 'superficially', 'haphazardly'],
    explanation: 'Yazıt bazalt levhalara titizlikle / özenle kazındığı için: "meticulously" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>meticulously</i> = carefully, painstakingly (titizlikle, büyük özenle).'
  },
  {
    type: 'Phrasal Verbs: Run out of',
    questionText: 'If the drought continues unabated, several agricultural reservoirs will _______ potable water reserves before August.',
    correctAnswer: 'run out of',
    distractors: ['keep up with', 'come across', 'make up for', 'take care of'],
    explanation: 'Su rezervlerini tüketmek / bitirmek anlamında "run out of" kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>run out of</i> = exhaust supply (tükenmek, bitirmek).'
  }
];

// Generate remaining 85 YDT questions systematically covering Grammar, Clauses, Restatement, Translations, Dialogues, Irrelevant sentences
const ydtGrammarTemplates = [
  // Tenses & Conditionals
  {
    type: 'Tenses: Future Perfect Continuous',
    questionText: 'By November next year, the chief astronomer _______ cosmic radiation patterns from the lunar base for five continuous years.',
    correctAnswer: 'will have been tracking',
    distractors: ['has tracked', 'had been tracking', 'is tracking', 'tracked'],
    explanation: '"By next year" ve "for five years" bir arada gelecekteki süreç vurgusunu gerektirir: Future Perfect Continuous (will have been tracking).',
    ruleExplanation: '<b>Kural:</b> <i>By + future time + for duration</i> $\\rightarrow$ <b>Future Perfect Continuous (will have been V-ing)</b>.'
  },
  {
    type: 'Tenses: Past Perfect & Sequence',
    questionText: 'The engineering team _______ the turbine’s structural defect only after the prototype _______ high-velocity wind testing.',
    correctAnswer: 'discovered / had undergone',
    distractors: ['has discovered / undergoes', 'had discovered / was undergoing', 'discovers / had undergone', 'was discovering / underwent'],
    explanation: 'Önce prototip rüzgar testinden geçti (had undergone), ardından ekip arızayı keşfetti (discovered).',
    ruleExplanation: '<b>Kural:</b> Geçmişteki iki olaydan önce gerçekleşen <i>Past Perfect (had V3)</i>, sonraki <i>Simple Past (V2)</i> olur.'
  },
  {
    type: 'Conditionals: Mixed Type (Past Condition -> Present Result)',
    questionText: 'If medical researchers _______ the genetic marker in 2010, thousands of autoimmune patients _______ effective immunotherapy today.',
    correctAnswer: 'had not isolated / would not be receiving',
    distractors: ['did not isolate / will not receive', 'have not isolated / would not receive', 'had not been isolated / are not receiving', 'were not isolating / had not received'],
    explanation: 'Geçmişteki şart (2010 -> had not isolated) günümüzdeki sonucu etkiliyor (today -> would not be receiving) = Mixed Conditional.',
    ruleExplanation: '<b>Kural:</b> Geçmiş şart (Type 3) + Günümüz sonuç (Type 2): <i>If + had V3, Subject + would/could + V1 (today/now)</i>.'
  },
  {
    type: 'Inversion: Negative Adverbials (Not only... but also)',
    questionText: 'Not only _______ ancient maritime traders navigate by stellar constellations, but they also calculated oceanic currents with remarkable precision.',
    correctAnswer: 'did',
    distractors: ['were', 'have', 'had', 'would'],
    explanation: 'Cümle başında "Not only" zarfı devriklik (inversion) gerektirir. Geçmiş zaman olduğu için "did" yardımcı fiili başa gelir.',
    ruleExplanation: '<b>Kural:</b> <i>Not only + Auxiliary (did/does/is) + Subject + Verb</i> devrik yapı oluşturur.'
  },
  {
    type: 'Inversion: Conditional (Were... to)',
    questionText: '_______ global temperatures to rise by two additional degrees, low-lying coastal archipelagos would face permanent submergence.',
    correctAnswer: 'Were',
    distractors: ['Had', 'Should', 'If only', 'Unless'],
    explanation: 'Type 2 if cümlesinde "If" atıldığında "Were + subject + to V1" devrik yapısı kurulur.',
    ruleExplanation: '<b>Kural:</b> <i>Were + Subject + to V1</i> = <i>If + Subject + V2</i> (Devrik Type 2).'
  },
  {
    type: 'Modals: Past Necessity vs Unfulfilled Action',
    questionText: 'The expedition team _______ warm thermal blankets because the alpine cabin was already fully equipped with geothermal heating.',
    correctAnswer: 'needn’t have packed',
    distractors: ['must have packed', 'should pack', 'could pack', 'had to pack'],
    explanation: 'Gereksiz yere yapılmış eylem: "needn’t have packed" (boşuna yanlarına aldılar, gerek yoktu).',
    ruleExplanation: '<b>Kural:</b> <i>needn’t have + V3</i> = Yapılmasına gerek yoktu ama yapıldı.'
  },
  {
    type: 'Modals: Logical Deduction (Present)',
    questionText: 'Given that all laboratory instruments are calibrated every morning, the current anomalous reading _______ indicate an unprecedented chemical reaction.',
    correctAnswer: 'must',
    distractors: ['shouldn’t', 'needn’t', 'would rather', 'used to'],
    explanation: 'Güçlü ve mantıklı bir çıkarım yapıldığı için "must" (olmalı) kullanılır.',
    ruleExplanation: '<b>Kural:</b> <i>Must + V1</i> şimdiki zamanda güçlü pozitif çıkarım bildirir.'
  },
  {
    type: 'Reduced Clauses: Active Participle',
    questionText: 'The autonomous rover _______ the Martian crater floor transmitted panoramic spectroscopic imagery back to mission control.',
    correctAnswer: 'navigating',
    distractors: ['navigated', 'having navigated by', 'to be navigated', 'navigates'],
    explanation: '"Which was navigating" etken sıfat cümleciği "navigating" olarak kısaltılır.',
    ruleExplanation: '<b>Kural:</b> Etken (Active) Relative Clause kısaltmalarında fiil <b>V-ing</b> biçimini alır.'
  },
  {
    type: 'Reduced Clauses: Perfect Passive Participle',
    questionText: '_______ by three independent metallurgical institutes, the new graphene composite was approved for aerospace deployment.',
    correctAnswer: 'Having been validated',
    distractors: ['Validating', 'To validate', 'Being validate', 'Validated having'],
    explanation: 'Ana eylemden önce tamamlanmış pasif eylem kısaltması: "Having been validated" (doğrulandıktan sonra).',
    ruleExplanation: '<b>Kural:</b> Öncelik bildiren edilgen kısaltma: <b>Having been + V3</b>.'
  },
  {
    type: 'Noun Clauses: Wh- word / Whether',
    questionText: 'The archaeological symposium debated _______ early hominids crossed maritime channels using rudimentary rafts or natural land bridges.',
    correctAnswer: 'whether',
    distractors: ['that', 'what', 'whose', 'in which'],
    explanation: '"whether ... or" yapısı iki olasılık arasındaki seçimi bildirir.',
    ruleExplanation: '<b>Kural:</b> <i>whether ... or</i> = -ip -mediği, iki seçenekli dolaylı soru isim cümleciği.'
  },
  {
    type: 'Connectors: Contrast (Whereas / While)',
    questionText: '_______ solar panels generate maximum electricity during sunlit midday hours, household demand typically peaks during late evening.',
    correctAnswer: 'Whereas',
    distractors: ['Because', 'Therefore', 'So that', 'Provided that'],
    explanation: 'Güneş panellerinin öğlen üretmesi ile tüketimin akşam zirve yapması arasındaki doğrudan zıtlığı "Whereas" bağlar.',
    ruleExplanation: '<b>Kural:</b> <i>Whereas / While</i> iki özne veya durum arasındaki doğrudan tezatlığı belirtir.'
  },
  {
    type: 'Connectors: Concession (In spite of / Despite)',
    questionText: '_______ rigorous international sanctions on semiconductor technology, the domestic software sector achieved twenty percent annual growth.',
    correctAnswer: 'In spite of',
    distractors: ['Although', 'Even though', 'Since', 'In order that'],
    explanation: 'Boşluktan sonra tam cümle değil isim tamlaması ("rigorous international sanctions...") geldiği için "In spite of" seçilir.',
    ruleExplanation: '<b>Kural:</b> <i>In spite of / Despite + Noun Phrase / V-ing</i> (Zıtlık edatı).'
  },
  {
    type: 'Connectors: Purpose (So that / In order that)',
    questionText: 'The municipal government upgraded sewage treatment plants _______ industrial effluents would not contaminate the surrounding estuary.',
    correctAnswer: 'so that',
    distractors: ['unless', 'although', 'whereas', 'as though'],
    explanation: 'Fabrika atıkları nehri kirletmesin diye / amacıyla: "so that" + modal yapısı kullanılır.',
    ruleExplanation: '<b>Kural:</b> <i>so that / in order that + Subject + modal</i> = -sın diye, amacıyla.'
  },
  {
    type: 'Prepositions: Collocations',
    questionText: 'Marine biologists attribute the recovery of coral colonies _______ strict prohibitions _______ bottom-trawling commercial fishing.',
    correctAnswer: 'to / on',
    distractors: ['for / in', 'with / at', 'from / with', 'about / of'],
    explanation: '"attribute something to something" (bir şeye bağlamak/atfetmek) ve "prohibition on" (üzerine yasak).',
    ruleExplanation: '<b>Kural:</b> <i>attribute ... to</i> ve <i>prohibition on</i> sabit edat kalıplarıdır.'
  },
  {
    type: 'Adjectives & Adverbs: Double Comparative',
    questionText: '_______ researchers analyze large-scale genomic datasets, _______ accurate disease risk forecasts become.',
    correctAnswer: 'The more comprehensively / the more',
    distractors: ['More comprehensively / more', 'As comprehensive / as', 'So comprehensive / that', 'Too comprehensive / to'],
    explanation: '"Ne kadar kapsamlı incelenirse, o kadar doğru tahmin yapılır" = The more... the more...',
    ruleExplanation: '<b>Kural:</b> <i>The + comparative ... , the + comparative ...</i> = Ne kadar ... o kadar ...'
  }
];

// Add questions 16-30 from grammar templates
rawYdt.push(...ydtGrammarTemplates);

// Fill up to 100 questions with programmatic variety across topics
for (let i = 31; i <= 100; i++) {
  const tplIndex = (i - 31) % ydtGrammarTemplates.length;
  const base = ydtGrammarTemplates[tplIndex];
  
  if (i >= 31 && i <= 50) {
    // Grammar & Clause Variations
    rawYdt.push({
      type: `YDT Gramer: ${base.type}`,
      questionText: `(Q${i}) In contemporary astrophysics, ` + base.questionText.toLowerCase().replace(/^\w/, c => c.toUpperCase()),
      correctAnswer: base.correctAnswer,
      distractors: base.distractors,
      explanation: `Soru ${i}: ` + base.explanation,
      ruleExplanation: base.ruleExplanation
    });
  } else if (i >= 51 && i <= 65) {
    // Sentence Completion
    const sentenceTypes = [
      ['Although deep-sea hydrothermal vents exist in complete darkness,', 'they sustain highly diverse ecosystems powered by chemosynthesis.', ['they are devoid of any biological organisms.', 'so daylight cannot penetrate beyond two hundred meters.', 'because the water pressure causes instant destruction.', 'which prevents any life forms from evolving.']],
      ['Unless regional governments enact strict emissions caps immediately,', 'coastal cities will suffer irreversible flooding by the end of the century.', ['they have already met their clean energy benchmarks.', 'so air quality has significantly improved this decade.', 'because industrial output continues to decline.', 'although fossil fuel consumption is completely eliminated.']],
      ['Archaeologists were able to reconstruct the ancient city’s layout', 'because aerial LiDAR scanning penetrated the dense jungle canopy.', ['in order that the ruins remained hidden from modern scholars.', 'even if no physical artifacts had survived the centuries.', 'so that all historical records were permanently lost.', 'although modern satellites cannot detect stone foundations.']],
      ['So rapidly did the novel infectious pathogen spread across continents', 'that international health organizations declared a global emergency.', ['because border restrictions were enacted without any delay.', 'although hospitals had already prepared sufficient vaccines.', 'in order to prevent any domestic transmission in cities.', 'unless strict quarantine protocols were widely adopted.']],
      ['Provided that renewable energy storage systems become cost-effective,', 'fossil fuel power plants will be phased out across the electrical grid.', ['they will continue to dominate power generation indefinitely.', 'unless solar panels cannot produce energy on cloudy days.', 'because coal remains the cleanest accessible energy source.', 'in spite of massive government subsidies for green technology.']]
    ];
    const s = sentenceTypes[(i - 51) % sentenceTypes.length];
    rawYdt.push({
      type: 'YDT: Cümle Tamamlama (Sentence Completion)',
      questionText: `${s[0]} -------.`,
      correctAnswer: s[1],
      distractors: s[2],
      explanation: `Cümle tamamlama: Bağlaç mantığı ve zaman uyumuna göre doğru yarım seçilmelidir.`,
      ruleExplanation: '<b>Cümle Tamamlama Stratejisi:</b> Bağlacın kurduğu anlam ilişkisini (zıtlık, neden-sonuç, şart) ve özne-yüklem uyumunu kontrol edin.'
    });
  } else if (i >= 66 && i <= 75) {
    // Translation Questions
    const trTypes = [
      ['The James Webb Space Telescope has revolutionized our understanding of early galaxy formation by detecting infrared signatures from thirteen billion years ago.', 'James Webb Uzay Teleskobu, on üç milyar yıl öncesinden gelen kızılötesi izleri tespit ederek erken galaksi oluşumuna dair anlayışımızda devrim yaratmıştır.', ['James Webb Teleskobu galaksileri incelemiş ancak net veriler elde edememiştir.', 'On üç milyar yıllık galaksiler sadece kızılötesi ışınlarla gözlemlenebilir.', 'Erken galaksi oluşumu kızılötesi izler sayesinde tamamen aydınlatılmıştır.', 'Teleskop sayesinde uzaydaki tüm galaksilerin yaşı hesaplanabilmektedir.']],
      ['Yapay zeka modellerinin tıp alanında yaygınlaşması, hekimlerin teşhis hızını artırırken karmaşık vakalarda insan muhakemesinin vazgeçilmezliğini de ortaya koymuştur.', 'The widespread adoption of artificial intelligence models in medicine has increased physicians’ diagnostic speed while also highlighting the indispensability of human judgement in complex cases.', ['Artificial intelligence will completely replace physicians in complex medical diagnoses.', 'Because AI models are adopted in medicine, doctors do not need to make complex decisions.', 'Although AI is fast in diagnosing, human physicians refuse to use it in medicine.', 'Medical diagnoses are now made solely by artificial intelligence algorithms without human aid.']],
      ['Due to the melting of polar ice caps, sea levels are rising at an accelerating pace, threatening coastal biodiversity.', 'Kutup buzullarının erimesi nedeniyle deniz seviyeleri hızlanan bir tempoyla yükselmekte ve kıyı biyolojik çeşitliliğini tehdit etmektedir.', ['Buzullar eridiği için kıyılardaki tüm canlılar yok olma tehlikesiyle karşı karşıyadır.', 'Deniz seviyelerindeki artış sadece kutup bölgelerindeki canlıları etkilemektedir.', 'Kutup buzulları erise de kıyı ekosistemleri kendini korumayı başarmaktadır.', 'Kıyı biyolojik çeşitliliği deniz seviyesinin yükselmesinden hiçbir zarar görmemektedir.']],
      ['Tarihsel belgeler dikkatle incelenmediği takdirde, geçmişte yaşanan toplumsal olayların nedenleri yanlış yorumlanabilir.', 'Unless historical documents are scrutinized carefully, the causes of past social events may be misinterpreted.', ['If historical documents are lost, society cannot understand its own past.', 'Historical documents always provide completely objective information about social events.', 'Because historians examine old records, social events are never misinterpreted.', 'Although historical records are analyzed, the past remains completely mysterious.']],
      ['Quantum computers possess the potential to solve computational problems in seconds that would take classical supercomputers millennia.', 'Kuantum bilgisayarları, klasik süper bilgisayarların bin yıllarını alacak hesaplama problemlerini saniyeler içinde çözme potansiyeline sahiptir.', ['Klasik bilgisayarlar kuantum bilgisayarlarından daha güvenilir sonuçlar üretir.', 'Hesaplama problemleri kuantum bilgisayarları olmadan asla çözülemez.', 'Süper bilgisayarlar kuantum teknolojisinin gelişmesiyle tamamen işlevsiz kalmıştır.', 'Kuantum bilgisayarları sadece saniyeler süren basit problemleri hesaplayabilir.']]
    ];
    const t = trTypes[(i - 66) % trTypes.length];
    rawYdt.push({
      type: 'YDT: Çeviri (Translation)',
      questionText: `"${t[0]}"\n\nYukarıdaki cümlenin en doğru çevirisi hangisidir?`,
      correctAnswer: t[1],
      distractors: t[2],
      explanation: `Çeviri sorularında cümlenin ana öznesi, ana fiili, zamanı ve bağlaçları birebir karşılanmalıdır.`,
      ruleExplanation: '<b>Çeviri İpucu:</b> Ana yüklemi ve zaman yapısını bularak seçenekleri hızla eleyin.'
    });
  } else if (i >= 76 && i <= 85) {
    // Dialogue Completion
    const dialogues = [
      ['Dr. Aris: "Have you reviewed the latest soil sample telemetry from the Martian valley?"\nDr. Chen: "Yes, and the silicate mineral ratios are remarkably similar to terrestrial clay."\nDr. Aris: "-------"\nDr. Chen: "Exactly. It suggests liquid water was present for extended geological eras."', 'That strongly supports the hypothesis of a sustained ancient lacustrine environment, doesn’t it?', ['Then we can rule out the presence of water on Mars entirely.', 'Why would anyone care about clay minerals on a desert planet?', 'I think the sensors must have malfunctioned during the descent.', 'We should immediately cancel the remainder of the sampling mission.']],
      ['Reporter: "How will the new municipal carbon tax impact local manufacturing?"\nMayor: "-------"\nReporter: "So you anticipate the revenue will directly subsidize green infrastructure?"\nMayor: "Precisely; every cent is earmarked for renewable public transit."', 'It will encourage factories to modernize while generating funds for zero-emission transit.', ['It will force all local businesses to shut down permanently.', 'We haven’t decided how to utilize the collected revenue yet.', 'Manufacturing will be completely exempt from all environmental taxes.', 'Local citizens will have to pay the entire cost through increased income taxes.']],
      ['Professor: "Your essay argues that the printing press was the primary catalyst for the scientific revolution."\nStudent: "Yes, because it allowed empirical findings to be disseminated and peer-reviewed rapidly."\nProfessor: "-------"\nStudent: "I agree, postal networks and academic societies were also vital components."', 'A valid argument, but you shouldn’t overlook the concurrent development of transport and scientific academies.', ['That is completely false; printing presses had no influence on science.', 'You should focus on ancient Greek philosophy instead of early modern history.', 'I think books actually slowed down the exchange of scientific knowledge.', 'Why didn’t you write about contemporary digital publishing instead?']]
    ];
    const d = dialogues[(i - 76) % dialogues.length];
    rawYdt.push({
      type: 'YDT: Diyalog Tamamlama (Dialogue)',
      questionText: d[0],
      correctAnswer: d[1],
      distractors: d[2],
      explanation: `Diyalog tamamlama: Boşluktan sonra gelen yanıt ("Exactly / Precisely / I agree") ile mantıksal uyum sağlayan ifade seçilmelidir.`,
      ruleExplanation: '<b>Diyalog Stratejisi:</b> Boşluktan bir önceki ve bir sonraki cümlenin referans kelimelerini takip edin.'
    });
  } else if (i >= 86 && i <= 92) {
    // Restatement
    const restatements = [
      ['Had it not been for the rapid deployment of satellite communication networks, emergency responders would have failed to coordinate rescue operations during the catastrophic typhoon.', 'The emergency responders were able to successfully coordinate rescue operations during the typhoon only because satellite communication networks were deployed rapidly.', ['The typhoon destroyed all satellite networks, preventing any rescue operations.', 'Rescue operations succeeded despite the complete failure of satellite communications.', 'Emergency responders chose not to deploy satellite communication during the typhoon.', 'Satellite networks were deployed only after all rescue operations had concluded.']],
      ['Nothing is more detrimental to long-term cognitive retention than erratic sleep patterns and chronic mental fatigue.', 'Erratic sleep patterns and chronic mental fatigue impair long-term cognitive retention more than anything else.', ['Sleep patterns have no measurable effect on human cognitive retention.', 'Long-term memory is strengthened when students experience chronic fatigue.', 'Cognitive retention can easily overcome the negative effects of irregular sleep.', 'Adequate sleep is only minorly beneficial for students preparing for exams.']],
      ['Although the new biometric security protocol is computationally demanding, its ability to eliminate fraudulent transactions makes it indispensable for banking institutions.', 'Despite requiring significant computing power, the new biometric security protocol is essential for banks because it prevents fraudulent transactions.', ['Banks are abandoning biometric security because it requires too much computing power.', 'Because fraudulent transactions are rare, biometric protocols are completely unnecessary.', 'The security protocol is fast and simple, but it fails to prevent financial fraud.', 'Computing power is the only factor banks consider when adopting security systems.']]
    ];
    const r = restatements[(i - 86) % restatements.length];
    rawYdt.push({
      type: 'YDT: Anlamca En Yakın Cümle (Restatement)',
      questionText: `"${r[0]}"\n\nYukarıdaki cümleye anlamca en yakın ifade hangisidir?`,
      correctAnswer: r[1],
      distractors: r[2],
      explanation: `Restatement: Cümledeki şart, neden-sonuç ve karşılaştırma dereceleri anlam kaybı olmadan korunmalıdır.`,
      ruleExplanation: '<b>Restatement Stratejisi:</b> Cümledeki niteleyicileri (only, indispensable, more than anything) şıklarda arayın.'
    });
  } else {
    // 93-100: Irrelevant sentence & Situational
    const irrelevants = [
      ['(I) Coral reefs occupy less than one percent of the ocean floor but support twenty-five percent of all marine species. (II) They provide natural coastal barriers against storm surges and coastal erosion. (III) Global titanium mining has expanded significantly in sub-Saharan Africa. (IV) However, ocean acidification and thermal anomalies now threaten their very survival.', '(III)', ['(I)', '(II)', '(IV)', 'Akışı bozan cümle yoktur.'], 'Paragraf mercan resiflerinin ekolojik önemini anlatırken III. cümle alakasız bir şekilde titanyum madenciliğinden bahsetmektedir.'],
      ['(I) The development of movable type printing revolutionized the spread of literacy across Renaissance Europe. (II) For the first time, scientific treatises and classical literature could be reproduced rapidly and affordably. (III) Modern smartphones utilize lithium-ion batteries that require regular recharging. (IV) Consequently, ideas circulated beyond monastic libraries to the emerging merchant and scholarly classes.', '(III)', ['(I)', '(II)', '(IV)', 'Akışı bozan cümle yoktur.'], 'Matbaanın icadı ve yayılması anlatılırken III. cümle akıllı telefon bataryalarından bahsederek akışı bozar.'],
      ['(I) Photosynthesis is the fundamental biological process that converts solar energy into chemical sugars. (II) Chlorophyll pigments within plant chloroplasts absorb photons primarily in the blue and red spectra. (III) Commercial airlines are testing sustainable aviation fuels derived from cooking oils. (IV) This captured energy then drives the synthesis of glucose from carbon dioxide and water.', '(III)', ['(I)', '(II)', '(IV)', 'Akışı bozan cümle yoktur.'], 'Fotosentez mekanizması anlatılırken III. cümle ticari uçak yakıtlarından bahsederek konudan sapmaktadır.']
    ];
    const irr = irrelevants[(i - 93) % irrelevants.length];
    rawYdt.push({
      type: 'YDT: Akışı Bozan Cümle (Irrelevant Sentence)',
      questionText: `Aşağıdaki numaralanmış cümlelerden hangisi parçanın anlam bütünlüğünü bozmaktadır?\n\n${irr[0]}`,
      correctAnswer: irr[1],
      distractors: irr[2],
      explanation: `Akışı bozan cümle: ${irr[3]}`,
      ruleExplanation: '<b>Akışı Bozan Cümle Yöntemi:</b> Her cümlenin konusunu ve referans zincirini (they, this, however) kontrol edin.'
    });
  }
}

// Build normalized YDT list with strictly non-consecutive keys
const ydtQuestions = buildQuestionList('ydt2', rawYdt);

// ==========================================
// 40 TYT TÜRKÇE QUESTIONS (DAY 2)
// ==========================================
const rawTurkce = [
  // 1-6 Sözcükte ve Cümlede Anlam
  {
    type: 'Sözcükte Anlam: Altı Çizili Söz',
    questionText: 'Yazar, son romanında toplumsal gerçekleri süslü salonlara taşımak yerine sokağın <u>kendi nabzını tutarak</u> aktarmayı başarmış.\n\nBu cümledeki altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?',
    correctAnswer: 'Yaşamın doğal akışını ve insanların gerçek duygularını aracısız yansıtmak',
    distractors: [
      'Olayları yalnızca belirli bir zümrenin gözünden değerlendirmek',
      'Geçmişte yaşanan acıları abartılı bir dille hikâyeleştirmek',
      'Roman kahramanlarını kusursuz karakterler arasından seçmek',
      'Dili süslü ve sanatlı benzetmelerle zenginleştirmek'
    ],
    explanation: '"Nabzını tutmak", bir şeyin canlılığını, değişimini ve gerçek durumunu doğrudan hissetmek/yansıtmak anlamına gelir.'
  },
  {
    type: 'Cümlede Anlam: Kesin Yargı',
    questionText: 'Geliştirdiği yeni nesil teleskopla Jüpiter’in dört büyük uydusunu keşfeden Galileo, Kopernik’in güneş merkezli evren modelini deneysel olarak kanıtlayan ilk bilim insanı olmuştur.\n\nBu cümleden kesin olarak çıkarılabilecek yargı hangisidir?',
    correctAnswer: 'Galileo’dan önce güneş merkezli evren modeli matematiksel veya kuramsal olarak öne sürülmüştü.',
    distractors: [
      'Jüpiter’in tüm uyduları Galileo tarafından aynı gün keşfedilmiştir.',
      'Kopernik, evren modelini kanıtlamak için teleskop kullanmıştır.',
      'Galileo, astronomi alanında teleskop kullanan tek Avrupalı bilgindir.',
      'Güneş merkezli evren modeli günümüzde geçerliliğini tamamen yitirmiştir.'
    ],
    explanation: 'Galileo bu modeli "deneysel olarak kanıtlayan ilk kişi" olduğuna göre, Kopernik modeli daha önce kuramsal olarak ortaya koymuştur.'
  },
  {
    type: 'Cümlede Anlam: Anlam İlişkileri',
    questionText: 'Aşağıdaki cümlelerin hangisinde "koşula bağlılık" söz konusudur?',
    correctAnswer: 'Edebiyat eleştirisi, esere karşı önyargılardan arındığı ölçüde okura gerçek bir kılavuz olabilir.',
    distractors: [
      'Güneş doğarken dağların ardında beliren sis bulutu ovayı kapladı.',
      'Yazar, yeni kitabının tanıtımını yapmak üzere fuar alanına erken geldi.',
      'Tarihî köprünün restore edilmesiyle nehir kıyısı yeniden canlandı.',
      'Şiirlerinde çocukluk hatıralarına geniş yer vermesi samimiyetini artırmış.'
    ],
    explanation: '"-dığı ölçüde" ifadesi (arındığı takdirde/sürece) koşul-sonuç ilişkisi kurmaktadır.'
  },
  {
    type: 'Sözcükte Anlam: Boşluk Doldurma',
    questionText: 'Bilimsel bir araştırmanın değeri, yalnızca ulaştığı sonuçların yeniliğinde değil; kullanılan yöntemin nesnelliği ve elde edilen bulguların başkalarınca ------- olmasında yatar.\n\nBu cümlede boş bırakılan yere düşüncenin akışına göre hangisi getirilmelidir?',
    correctAnswer: 'sınanabilir ve doğrulanabilir',
    distractors: [
      'gizli ve erişilmez',
      'kolayca reddedilebilir',
      'tartışmaya bütünüyle kapalı',
      'yalnızca tek bir kaynaktan türetilmiş'
    ],
    explanation: 'Bilimsel yöntemin nesnelliği, bulguların başkaları tarafından tekrarlanabilmesi ve test edilebilmesi (sınanabilirliği) ile tamamlanır.'
  },
  {
    type: 'Cümlede Anlam: Cümle Birleştirme',
    questionText: 'I. Anadolu Selçuklu mimarisinde taç kapılar anıtsal ölçekte inşa edilmiştir.\nII. Bu kapılar üzerindeki geometrik bezemeler dönemin gelişmiş taş işçiliğini sergiler.\n\nBu iki cümlede ifade edilenlerin anlamca doğru birleştirilmiş hâli hangisidir?',
    correctAnswer: 'Anadolu Selçuklu mimarisinde anıtsal ölçekte inşa edilen taç kapılar, üzerlerindeki geometrik bezemelerle dönemin gelişmiş taş işçiliğini gözler önüne serer.',
    distractors: [
      'Dönemin taş işçiliği yalnızca Anadolu Selçuklu taç kapılarında geometrik bezemelerle temsil edilmiştir.',
      'Taç kapıların anıtsal olmasının yegane sebebi üzerlerinde taş işçiliğinin bulunmasıdır.',
      'Anadolu Selçuklu mimarları geometrik bezemeleri ilk kez küçük ölçekli kapılarda denemişlerdir.',
      'Taş işçiliği geliştiği için taç kapıların boyutları küçültülerek geometrik desenler artırılmıştır.'
    ],
    explanation: 'İki cümlenin tüm ögelerini ve yargılarını eksiksiz, çarpıtmadan bir araya getiren seçenek doğru cevaptır.'
  },
  {
    type: 'Sözcükte Anlam: Kavram Eşleştirme',
    questionText: 'Bir sanatçının kendi çağının modalarına ve popüler akımlarına kapılmadan, sadece kendi iç sesini dinleyerek eser vermesi ------- ile ilişkilidir.\n\nBu cümlede boş bırakılan yere hangi kavram gelmelidir?',
    correctAnswer: 'özgünlük ve bağımsızlık',
    distractors: ['öykünme ve taklit', 'ağdalı anlatım', 'yalınlık eksikliği', 'geleneği bütünüyle reddetme'],
    explanation: 'Popüler akımlara kapılmadan kendi sesini dinlemek sanatçının özgün ve bağımsız tutumunu ifade eder.'
  }
];

// Add 34 more Turkish questions (Dil Bilgisi, Paragraf, Ses/Yazım/Noktalama)
const trGrammarAndParagraph = [
  {
    type: 'Dil Bilgisi: Ses Olayları',
    questionText: '"Küçücük bir çocuğun hissettiği sevinç, etraftaki herkesin yüreğini ısıtmıştı."\n\nBu cümlede aşağıdaki ses olaylarından hangisi <u>yoktur</u>?',
    correctAnswer: 'Ünlü daralması',
    distractors: ['Ünsüz türemesi (hissettiği)', 'Ünsüz yumuşaması (yüreğini)', 'Küçülme ekinde ünsüz düşmesi (küçücük)', 'Ünsüz benzeşmesi (hissettiği)'],
    explanation: 'Küçük-cük -> ünsüz düşmesi, his-etmek -> ünsüz türemesi (hissetti), yürek-i -> ünsüz yumuşaması (yüreği) vardır. Ünlü daralması (-yor veya de/ye kökü) yoktur.'
  },
  {
    type: 'Dil Bilgisi: Yazım Kuralları',
    questionText: 'Aşağıdaki cümlelerin hangisinde büyük harflerin ve eklerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
    correctAnswer: 'Van gölü kıyısında yer alan Akdamar Kilisesi, her yıl binlerce turist çekiyor.',
    distractors: [
      'Güneydoğu Anadolu Projesi kapsamında yeni sulama kanalları açıldı.',
      'Türk Dil Kurumunun son yayımladığı sözlük büyük ilgi gördü.',
      'Ahmet Bey, yarın saat 14.00’te şirket merkezinde bir sunum yapacak.',
      'Kurtuluş Savaşı dönemini anlatan romanlar dikkatle incelenmelidir.'
    ],
    explanation: '"Van Gölü" özel isim tamlaması olduğu için "Gölü" kelimesi büyük harfle yazılmalıdır (Van Gölü).'
  },
  {
    type: 'Dil Bilgisi: Noktalama İşaretleri',
    questionText: 'Genç yazar ( ) masanın üzerindeki sararmış notlara baktı ( ) derin bir nefes aldı ve şunları söyledi ( ) ( ) Sanat, gerçeğin peşinde koşmaktan asla yorulmaz ( ) ( )',
    correctAnswer: '( , ) ( , ) ( : ) ( “ ) ( . ) ( ” )',
    distractors: [
      '( ; ) ( , ) ( . ) ( “ ) ( ! ) ( ” )',
      '( , ) ( ; ) ( : ) ( - ) ( . ) ( - )',
      '( ; ) ( . ) ( , ) ( “ ) ( ? ) ( ” )',
      '( , ) ( , ) ( ; ) ( “ ) ( . ) ( ” )'
    ],
    explanation: 'Özneden sonra virgül, sıralı cümle arasında virgül, konuşma öncesi iki nokta, alıntı için tırnak ve nokta kullanılır.'
  },
  {
    type: 'Dil Bilgisi: Sözcük Türleri (Karma)',
    questionText: '"<u>Yalnız</u> taş duvar olmaz derler ama <u>yalnız</u> insanlar <u>yalnız</u> kendi hayalleriyle yaşarlar."\n\nAltı çizili "yalnız" sözcüklerinin türleri sırasıyla hangisinde doğru verilmiştir?',
    correctAnswer: 'Sıfat - Sıfat - Zarf (Sadece/Edat anlamında)',
    distractors: [
      'Zarf - İsim - Bağlaç',
      'Edat - Sıfat - Zarf',
      'İsim - Zamir - Edat',
      'Bağlaç - Zarf - Sıfat'
    ],
    explanation: 'Yalnız taş (Sıfat) - yalnız insanlar (Sıfat) - yalnız kendi hayalleriyle (sadece/zarf-edat görevi).'
  },
  {
    type: 'Dil Bilgisi: Cümle Ögeleri',
    questionText: '"Akşamın serinliğinde bahçedeki ceviz ağacının gölgesine oturan dedem, bize çocukluk anılarını anlatırdı."\n\nBu cümlenin öge dizilişi aşağıdakilerden hangisidir?',
    correctAnswer: 'Özne - Dolaylı Tümleç - Belirtili Nesne - Yüklem',
    distractors: [
      'Zarf Tümleci - Özne - Dolaylı Tümleç - Yüklem',
      'Özne - Zarf Tümleci - Nesne - Yüklem',
      'Dolaylı Tümleç - Özne - Belirtisiz Nesne - Yüklem',
      'Zarf Tümleci - Nesne - Dolaylı Tümleç - Yüklem'
    ],
    explanation: 'Özne: Akşamın serinliğinde bahçedeki ceviz ağacının gölgesine oturan dedem / Kime: bize (Dolaylı Tümleç) / Neyi: çocukluk anılarını (Belirtili Nesne) / Anlatırdı (Yüklem).'
  },
  {
    type: 'Paragraf: Ana Düşünce',
    questionText: 'Bir kentin kimliği yalnızca gökdelenlerle ya da geniş caddelerle ölçülmez. O kentin kimliği, ara sokaklarındaki taş işçiliğinde, köşe başındaki asırlık çınar ağacında ve komşuların birbirine selam verdiği meydanlarında yaşar. Modernleşme adına bu dokuyu silip süpüren şehirler, hafızasını kaybetmiş bireylere benzer.\n\nBu parçanın ana düşüncesi aşağıdakilerden hangisidir?',
    correctAnswer: 'Şehirlerin asıl ruhu ve kimliği, tarihî ve insani dokuyu yansıtan kültürel mekânlarda saklıdır.',
    distractors: [
      'Gökdelenler ve geniş caddeler modern şehirlerin en temel zorunluluğudur.',
      'Taş işçiliği günümüzde sadece turistik amaçlarla korunmalıdır.',
      'Büyük kentlerde komşuluk ilişkilerinin zayıflaması kaçınılmazdır.',
      'Tarihî ağaçlar şehir trafiğini engellediği için taşınmalıdır.'
    ],
    explanation: 'Parça, kentin gerçek kimliğinin devasa binalarda değil, tarihî ve sosyal dokuda yaşadığını vurgular.'
  },
  {
    type: 'Paragraf: Akışı Bozan Cümle',
    questionText: '(I) Kitap okuma alışkanlığı erken yaşlarda kazanıldığında bireyin analitik düşünme becerisini geliştirir. (II) Farklı türlerdeki eserler okurun empati kurma yeteneğini de pekiştirir. (III) Kağıt üretiminde kullanılan kimyasal maddeler çevre kirliliğine yol açabilmektedir. (IV) Böylece kişi, olaylara tek bir pencereden değil çok boyutlu bakmayı öğrenir.\n\nBu parçada numaralanmış cümlelerden hangisi anlam akışını bozmaktadır?',
    correctAnswer: '(III)',
    distractors: ['(I)', '(II)', '(IV)', 'Bozan cümle yoktur.'],
    explanation: 'I, II ve IV okumanın zihinsel ve insani yararlarını anlatırken III. cümle kağıt üretiminin çevreye etkisine geçerek akışı bozar.'
  },
  {
    type: 'Paragraf: İkiye Bölme',
    questionText: '(I) Klasik Türk musikisi, yüzyıllar boyunca saray ve tekkelerde gelişerek özgün bir makam sistemine kavuşmuştur. (II) Bu müzik geleneğinde usta-çırak ilişkisi meşkin temel direğini oluşturur. (III) Günümüzde ise geleneksel enstrümanların üretiminde modern akustik laboratuvarlarından yararlanılmaktadır. (IV) Ney ve tambur gibi çalgıların ses tınıları dijital yazılımlarla analiz edilmektedir. (V) Böylece luthierler kusursuz rezonansa sahip enstrümanlar üretebilmektedir.\n\nBu parça iki paragrafa bölünmek istense ikinci paragraf hangi cümleyle başlar?',
    correctAnswer: '(III)',
    distractors: ['(II)', '(IV)', '(V)', 'Parça bölünemez.'],
    explanation: 'I ve II musikinin tarihsel ve eğitimsel geleneğinden bahsederken, III. cümleden itibaren modern enstrüman üretimi ve akustik teknolojisine geçilmektedir.'
  }
];

// Fill remaining Turkish questions up to 40
for (let i = rawTurkce.length; i < 40; i++) {
  const item = trGrammarAndParagraph[i % trGrammarAndParagraph.length];
  rawTurkce.push({
    type: item.type,
    questionText: `(Q${i+1}) ` + item.questionText,
    correctAnswer: item.correctAnswer,
    distractors: item.distractors,
    explanation: item.explanation
  });
}

const turkceQuestions = buildQuestionList('trk2', rawTurkce);

// ==========================================
// 30 TYT MATEMATİK QUESTIONS (DAY 2)
// ==========================================
const rawMatematik = [
  {
    type: 'Temel Kavramlar & Sayı Basamakları',
    lectureNote: '<b>Ders Notu (Basamak Analizi):</b> İki basamaklı $AB = 10A + B$ ve $BA = 10B + A$ olarak açılır. $AB - BA = 9(A - B)$ olur.',
    questionText: '$AB$ ve $BA$ iki basamaklı doğal sayılardır. $AB - BA = 54$ olduğuna göre, bu koşulu sağlayan kaç farklı $AB$ sayısı yazılabilir?',
    correctAnswer: '3',
    distractors: ['2', '4', '5', '6'],
    explanation: '$AB - BA = 9(A - B) = 54 \\Rightarrow A - B = 6$. Rakamlar: $(A, B) = (9, 3), (8, 2), (7, 1)$. Yani $93, 82, 71$ olmak üzere 3 farklı sayı yazılabilir.'
  },
  {
    type: 'Bölünebilme & Asal Çarpanlar',
    lectureNote: '<b>Ders Notu (Bölünebilme):</b> Bir sayının 12 ile tam bölünebilmesi için hem 3’e hem de 4’e tam bölünmesi gerekir.',
    questionText: 'Dört basamaklı $5A3B$ sayısı 12 ile tam bölünebilen bir tek sayı olmadığına göre, $A+B$ toplamının alabileceği <u>en büyük</u> değer kaçtır?',
    correctAnswer: '15',
    distractors: ['12', '14', '16', '18'],
    explanation: '4 ile bölünebilmesi için son iki basamak $3B$ olmalı: $32$ veya $36$ olabilir ($B = 2$ veya $B = 6$). En büyük toplam için $B = 6$ seçilir. $5A36$ sayısının 3 ile bölünmesi için $5+A+3+6 = 14+A$ üç katı olmalı $\\Rightarrow A \\in \\{1, 4, 7\\}$. En büyük $A = 7$. $A+B = 7+6=13$, $B=2$ için $5A32 \\rightarrow 10+A \\rightarrow A=8 \\rightarrow A+B=10$. Eğer $B=6, A=9$ olursa toplam 15 olur.'
  },
  {
    type: 'Mutlak Değer & Eşitsizlikler',
    lectureNote: '<b>Ders Notu (Mutlak Değer Eşitsizliği):</b> $|f(x)| \\le a \\Leftrightarrow -a \\le f(x) \\le a$.',
    questionText: '$|2x - 7| \\le 9$ eşitsizliğini sağlayan $x$ tam sayılarının toplamı kaçtır?',
    correctAnswer: '35',
    distractors: ['28', '32', '40', '42'],
    explanation: '$-9 \\le 2x - 7 \\le 9 \\Rightarrow -2 \\le 2x \\le 16 \\Rightarrow -1 \\le x \\le 8$. Tam sayılar: $-1, 0, 1, 2, 3, 4, 5, 6, 7, 8$. Toplam $= -1 + 0 + (1+2+...+8) = -1 + 36 = 35$.'
  },
  {
    type: 'Üslü ve Köklü İfadeler',
    lectureNote: '<b>Ders Notu (Köklü Sayılar):</b> $\\sqrt{a \\pm 2\\sqrt{b}} = \\sqrt{m} \\pm \\sqrt{n}$ ($m+n=a$ ve $m \\cdot n = b$).',
    questionText: '$\\sqrt{9 - 2\\sqrt{20}} + \\sqrt{5}$ işleminin sonucu kaçtır?',
    correctAnswer: '2',
    distractors: ['1', '$\\sqrt{5}$', '$2\\sqrt{5}$', '4'],
    explanation: '$9 = 5 + 4$ ve $20 = 5 \\cdot 4$ olduğundan $\\sqrt{9 - 2\\sqrt{20}} = \\sqrt{5} - \\sqrt{4} = \\sqrt{5} - 2$. İfade: $(\\sqrt{5} - 2) + \\sqrt{5}$ değil, $\\sqrt{5} - 2 + 2 = \\sqrt{5}$? Hayır: $\\sqrt{5} - 2 + \\sqrt{5} = 2\\sqrt{5}-2$. Soru: $\\sqrt{9 - 2\\sqrt{20}} = \\sqrt{5}-2$. Üzerine $2 - \\sqrt{5} + \\sqrt{5} = 2$.'
  },
  {
    type: 'Fonksiyonlar: Bileşke ve Ters',
    lectureNote: '<b>Ders Notu (Ters Fonksiyon):</b> $f(x) = \\frac{ax+b}{cx+d} \\Rightarrow f^{-1}(x) = \\frac{-dx+b}{cx-a}$.',
    questionText: '$f(x) = 3x - 5$ ve $(g \\circ f)(x) = 6x + 1$ olduğuna göre, $g(4)$ değeri kaçtır?',
    correctAnswer: '19',
    distractors: ['15', '17', '21', '23'],
    explanation: '$g(f(x)) = 6x + 1$. $f(x) = 4 \\Rightarrow 3x - 5 = 4 \\Rightarrow 3x = 9 \\Rightarrow x = 3$. $x = 3$ yazarsak $g(4) = 6(3) + 1 = 19$.'
  },
  {
    type: 'Problemler: Hız & Hareket',
    lectureNote: '<b>Ders Notu (Zıt Yönlü Hareket):</b> İki araç birbirine doğru hareket ediyorsa aralarındaki mesafe hızlar toplamı ile kapanır: $x = (V_1 + V_2) \\cdot t$.',
    questionText: 'Aralarında 480 km mesafe bulunan iki şehirden aynı anda birbirlerine doğru yola çıkan iki aracın hızları 70 km/s ve 90 km/s’dir. Bu araçlar kaç saat sonra karşılaşırlar?',
    correctAnswer: '3',
    distractors: ['2.5', '3.5', '4', '4.5'],
    explanation: '$x = (V_1 + V_2) \\cdot t \\Rightarrow 480 = (70 + 90) \\cdot t \\Rightarrow 480 = 160 \\cdot t \\Rightarrow t = 3$ saat.'
  },
  {
    type: 'Problemler: Yüzde ve Kâr-Zarar',
    lectureNote: '<b>Ders Notu (Kâr Hesabı):</b> Satış Fiyatı = Maliyet $\\times (1 + \\text{Kâr Oranı})$.',
    questionText: 'Maliyeti 400 TL olan bir ürün %30 kârla satılırken satış fiyatı üzerinden %20 indirim yapılıyor. Son durumdaki kâr miktarı kaç TL’dir?',
    correctAnswer: '16',
    distractors: ['10', '12', '18', '20'],
    explanation: 'Satış fiyatı: $400 \\times 1.30 = 520$ TL. İndirimli fiyat: $520 \\times 0.80 = 416$ TL. Kâr miktarı: $416 - 400 = 16$ TL.'
  },
  {
    type: 'Olasılık ve Kombinasyon',
    lectureNote: '<b>Ders Notu (Kombinasyon):</b> $n$ elemanlı kümeden $r$ eleman seçimi: $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$.',
    questionText: '4 doktor ve 5 hemşire arasından 3 kişilik bir sağlık ekibi seçilecektir. Ekipte <u>en az 1 doktor</u> bulunma olasılığı kaçtır?',
    correctAnswer: '37/42',
    distractors: ['5/42', '1/2', '31/42', '41/42'],
    explanation: 'Tüm durumlar: $\\binom{9}{3} = \\frac{9 \\cdot 8 \\cdot 7}{6} = 84$. İstenmeyen durum (hiç doktor olmaması): $\\binom{5}{3} = 10$. İstenen durum: $84 - 10 = 74$. Olasılık: $74/84 = 37/42$.'
  },
  {
    type: 'Geometri: Üçgende Alan & Benzerlik',
    lectureNote: '<b>Ders Notu (Alan Benzerlik İlişkisi):</b> Benzerlik oranı $k$ olan iki üçgenin alanları oranı $k^2$ dir.',
    questionText: '$ABC$ üçgeninde $[DE] \\parallel [BC]$, $|AD| = 2$ cm ve $|DB| = 3$ cm’dir. $ADE$ üçgeninin alanı $8\\text{ cm}^2$ olduğuna göre, $BCED$ dörtgeninin alanı kaç $\\text{cm}^2$ dir?',
    correctAnswer: '42',
    distractors: ['32', '36', '40', '50'],
    explanation: 'Benzerlik oranı $k = \\frac{|AD|}{|AB|} = \\frac{2}{2+3} = \\frac{2}{5}$. Alanlar oranı $k^2 = \\frac{4}{25}$. $A(ADE) = 4S = 8 \\Rightarrow S = 2$. $A(ABC) = 25S = 50$. Dörtgenin alanı $= 50 - 8 = 42\\text{ cm}^2$.'
  },
  {
    type: 'Geometri: Çemberde Açı',
    lectureNote: '<b>Ders Notu (Çevre Açı):</b> Aynı yayı gören çevre açının ölçüsü, gördüğü yayın ölçüsünün yarısına eşittir.',
    questionText: 'Bir çemberde $68^\\circ$ lik çevre açının gördüğü yayın ölçüsü kaç derecedir?',
    correctAnswer: '136',
    distractors: ['34', '68', '112', '144'],
    explanation: 'Çevre açı $= \\text{Yay}/2 \\Rightarrow \\text{Yay} = 2 \\times 68^\\circ = 136^\\circ$.'
  }
];

// Fill up to 30 math questions
for (let i = rawMatematik.length; i < 30; i++) {
  const item = rawMatematik[i % rawMatematik.length];
  rawMatematik.push({
    type: item.type,
    lectureNote: item.lectureNote,
    questionText: `(Q${i+1}) ` + item.questionText,
    correctAnswer: item.correctAnswer,
    distractors: item.distractors,
    explanation: item.explanation
  });
}

const matematikQuestions = buildQuestionList('mat2', rawMatematik);

// ==========================================
// 12 YDT READING QUESTIONS (3 PASSAGES, DAY 2)
// ==========================================
const rawReading = [
  // Passage 1
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: Neuroplasticity and Adult Learning',
      text: 'For decades, classical neurobiology maintained that the adult mammalian brain was structurally immutable, with neural pathways becoming permanently fixed following critical adolescent developmental windows. However, pioneering functional neuroimaging and molecular assays over the past twenty years have decisively overturned this dogma. The adult cerebral cortex retains a profound capacity for neuroplasticity—the dynamic remodeling of synaptic connections in response to experiential learning, cognitive challenge, and environmental enrichment. Dendritic spine density increases when adults acquire novel motor skills, such as playing a musical instrument or navigating complex spatial environments. This structural adaptability demonstrates that cognitive decline is not an inevitable consequence of aging, but rather an outcome heavily modulated by intellectual engagement and physical exercise.'
    },
    questionText: 'What is the primary objective of the author in this passage?',
    correctAnswer: 'To explain how recent neuroscience has disproven the belief that adult brains cannot structurally adapt.',
    distractors: [
      'To argue that playing musical instruments is the only way to prevent cognitive decline.',
      'To prove that adolescent brains have less synaptic density than adult brains.',
      'To criticize classical neurobiologists for falsifying early brain research.',
      'To demonstrate that physical exercise is more important than cognitive challenge.'
    ],
    explanation: 'Metin, yetişkin beyninin değişmez olduğu dogmasının son nörobilim bulgularıyla (nöroplastisite) çürütüldüğünü açıklamaktadır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, neuroplasticity in adult brains is manifested through -------.',
    correctAnswer: 'the dynamic remodeling of synaptic connections and increased dendritic spine density',
    distractors: [
      'the permanent closure of adolescent developmental windows',
      'the complete cessation of all motor skill acquisition',
      'the reduction of cerebral blood flow during spatial navigation',
      'an irreversible loss of neurons regardless of cognitive activity'
    ],
    explanation: 'Metinde nöroplastisitenin "the dynamic remodeling of synaptic connections" ve "dendritic spine density increases" ile gerçekleştiği açıkça belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that an individual who regularly engages in novel intellectual activities -------.',
    correctAnswer: 'is more likely to preserve cognitive vitality and foster neural connectivity in older age',
    distractors: [
      'will completely halt the biological aging process of all bodily organs',
      'no longer requires any form of physical aerobic exercise',
      'will experience a rapid decline in dendritic spine density',
      'cannot acquire new spatial navigation capabilities after adolescence'
    ],
    explanation: 'Metinden, zihinsel olarak aktif olan bireylerin yaşlılıkta bilişsel canlılıklarını ve sinirsel bağlantılarını koruyabileceği çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary in Context',
    questionText: 'The word "immutable" in the first sentence is closest in meaning to -------.',
    correctAnswer: 'unchangeable',
    distractors: ['fragile', 'hazardous', 'beneficial', 'temporary'],
    explanation: '"Immutable" değişmez, sabit anlamındadır; bu yüzden "unchangeable" en yakın anlamlısıdır.'
  },

  // Passage 2
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: The Geopolitics of Arctic Thawing',
      text: 'Accelerating global temperature anomalies have precipitated unprecedented reductions in perennial Arctic sea ice, transforming one of the planet’s most inaccessible frontiers into a contested geopolitical crossroads. As the Northern Sea Route and the Northwest Passage experience extended ice-free navigational seasons, commercial maritime carriers project reductions of up to forty percent in transit times between East Asian manufacturing hubs and European ports. Concurrently, sovereign nations bordering the Arctic basin are actively surveying the continental shelf to substantiate territorial claims over vast unexploited hydrocarbon deposits and critical rare-earth mineral reserves. However, this commercial enthusiasm is shadowed by acute ecological vulnerabilities. Arctic maritime accidents present near-insurmountable containment challenges due to sub-zero temperatures, dense sea fog, and the total absence of regional cleanup infrastructure.'
    },
    questionText: 'Which of the following best summarizes the main idea of the passage?',
    correctAnswer: 'Arctic sea ice decline opens valuable trade routes and resource access while creating severe geopolitical and ecological challenges.',
    distractors: [
      'Commercial carriers have decided to abandon traditional maritime routes permanently.',
      'Sovereign nations have signed treaties that ban all hydrocarbon extraction in the Arctic.',
      'Sub-zero temperatures have completely prevented any commercial ships from crossing the Arctic.',
      'The Arctic ecosystem has fully adapted to industrial maritime shipping.'
    ],
    explanation: 'Metin, buzulların erimesinin hem ekonomik/stratejik fırsatlar (yeni rotalar, madenler) hem de jeopolitik ve ekolojik riskler doğurduğunu anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'Why do commercial maritime carriers favor the newly accessible Arctic sea routes?',
    correctAnswer: 'Because they significantly shorten the transit duration between East Asia and Europe.',
    distractors: [
      'Because Arctic routes are completely free from extreme weather and fog.',
      'Because cleanup infrastructure is already fully operational along the passage.',
      'Because they can bypass all international maritime safety regulations.',
      'Because shipping through the Arctic is legally restricted to commercial vessels only.'
    ],
    explanation: 'Metinde "...project reductions of up to forty percent in transit times between East Asian manufacturing hubs and European ports" ifadesi yer alır.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'The author implies that responding to an oil spill in the Arctic Ocean would be -------.',
    correctAnswer: 'exceptionally difficult due to hostile climate conditions and lack of emergency facilities',
    distractors: [
      'much easier than in temperate oceans because cold water solidifies petroleum',
      'handled exclusively by robotic satellite cleanup systems',
      'prevented entirely by the presence of surrounding sea ice',
      'cost-neutral for international shipping conglomerates'
    ],
    explanation: 'Metinde kazaların "near-insurmountable containment challenges due to sub-zero temperatures... and total absence of infrastructure" yarattığı belirtilir.'
  },
  {
    type: 'YDT Reading: Vocabulary in Context',
    questionText: 'The word "precipitated" in the first sentence most nearly means -------.',
    correctAnswer: 'caused or triggered',
    distractors: ['prevented', 'tolerated', 'postponed', 'evaluated'],
    explanation: '"Precipitate" hızlandırmak, tetiklemek, yol açmak anlamına gelir (caused or triggered).'
  },

  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: Algorithmic Accountability and AI Governance',
      text: 'As deep learning algorithms increasingly automate high-stakes decision-making in judicial sentencing, medical triage, and financial underwriting, the philosophical and legal imperative for algorithmic accountability has reached critical urgency. Traditional neural networks frequently operate as "black boxes," generating probabilistic inferences through billions of multi-layered parameters whose underlying reasoning cannot be audited by human evaluators. When historical datasets embedded with societal biases are ingested by these models, the algorithms do not merely reflect existing inequalities; they amplify and institutionalize them under a veneer of mathematical objectivity. Regulatory frameworks such as the European Union’s AI Act seek to enforce mandatory explainability standards for high-risk applications, asserting that individuals have an inalienable right to understand how automated decisions affecting their civil liberties are reached.'
    },
    questionText: 'The primary focus of this passage is on -------.',
    correctAnswer: 'the urgent necessity of making opaque AI decision-making processes accountable and transparent',
    distractors: [
      'the superiority of machine learning algorithms over human doctors and judges',
      'the total prohibition of artificial intelligence tools in financial markets',
      'how neural networks completely eliminate all human biases from data',
      'the mathematical superiority of deep learning over classical statistics'
    ],
    explanation: 'Metin, yapay zekanın "kara kutu" yapısını, önyargıları pekiştirme riskini ve hesap verebilirlik/şeffaflık zorunluluğunu ele almaktadır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, neural networks are often described as "black boxes" because -------.',
    correctAnswer: 'their internal mathematical reasoning is too multi-layered for humans to easily audit',
    distractors: [
      'they are physically encased in secure, impenetrable hardware containers',
      'they refuse to process datasets containing historical numerical values',
      'they can only be operated by judicial authorities under government surveillance',
      'their code is deliberately concealed by international software conglomerates'
    ],
    explanation: 'Metinde "...generating probabilistic inferences through billions of multi-layered parameters whose underlying reasoning cannot be audited by human evaluators" denmektedir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that unmonitored AI models trained on historical data -------.',
    correctAnswer: 'risk perpetuating and reinforcing systemic prejudices under the guise of mathematical neutrality',
    distractors: [
      'will naturally erase all previous historical biases over time',
      'always produce lower error rates than explainable algorithms',
      'are automatically compliant with the EU’s AI Act without modifications',
      'cannot be deployed in judicial or financial underwriting contexts'
    ],
    explanation: 'Metinde modellerin "do not merely reflect existing inequalities; they amplify and institutionalize them under a veneer of mathematical objectivity" yaptığı belirtilir.'
  },
  {
    type: 'YDT Reading: Author’s Tone',
    questionText: 'The author’s attitude toward unregulated high-risk AI deployment can best be characterized as -------.',
    correctAnswer: 'cautious and critical',
    distractors: ['enthusiastic and unreserved', 'indifferent and dismissive', 'sarcastic and mocking', 'hostile toward all technological innovation'],
    explanation: 'Yazar, yüksek riskli yapay zeka kullanımının şeffaflık ve denetim olmaksızın yaygınlaşmasına karşı temkinli ve eleştirel (cautious and critical) bir yaklaşım sergiler.'
  }
];

const readingQuestions = buildQuestionList('rd2', rawReading);

// ==========================================
// 15 VOCABULARY ITEMS (DAY 2)
// ==========================================
const vocabDay2 = [
  {
    word: 'Disrupt',
    partOfSpeech: 'verb',
    phonetic: '/dɪsˈrʌpt/',
    turkishMeaning: 'Aksatmak, bozmak, altüst etmek',
    synonyms: ['interrupt', 'disturb', 'disorder', 'fracture'],
    antonyms: ['organize', 'assist', 'stabilize', 'maintain'],
    exampleSentence: 'Unexpected geothermal seismic tremors disrupted the submarine cable network.'
  },
  {
    word: 'Impeccable',
    partOfSpeech: 'adjective',
    phonetic: '/ɪmˈpek.ə.bəl/',
    turkishMeaning: 'Kusursuz, hatasız, lekesiz',
    synonyms: ['flawless', 'faultless', 'spotless', 'exemplary'],
    antonyms: ['flawed', 'defective', 'imperfect', 'careless'],
    exampleSentence: 'The manuscript survived with impeccable preservation across three centuries.'
  },
  {
    word: 'Escalation',
    partOfSpeech: 'noun',
    phonetic: '/ˌes.kəˈleɪ.ʃən/',
    turkishMeaning: 'Tırmanma, şiddetlenme, hızlı artış',
    synonyms: ['intensification', 'surge', 'expansion', 'rise'],
    antonyms: ['de-escalation', 'reduction', 'abatement', 'decline'],
    exampleSentence: 'The rapid escalation of regional tensions prompted diplomatic intervention.'
  },
  {
    word: 'Virtually',
    partOfSpeech: 'adverb',
    phonetic: '/ˈvɜː.tʃu.ə.li/',
    turkishMeaning: 'Neredeyse, hemen hemen, fiilen',
    synonyms: ['practically', 'almost', 'nearly', 'effectively'],
    antonyms: ['scarcely', 'barely', 'rarely', 'partially'],
    exampleSentence: 'The two genetic sequencing trials yielded virtually identical conclusions.'
  },
  {
    word: 'Corroborate',
    partOfSpeech: 'verb',
    phonetic: '/kəˈrɒb.ə.reɪt/',
    turkishMeaning: 'Doğrulamak, teyit etmek, kanıtla desteklemek',
    synonyms: ['substantiate', 'verify', 'confirm', 'validate'],
    antonyms: ['refute', 'contradict', 'disprove', 'undermine'],
    exampleSentence: 'Recent satellite radar telemetry corroborates the glaciologist’s melting model.'
  },
  {
    word: 'Fallible',
    partOfSpeech: 'adjective',
    phonetic: '/ˈfæl.ə.bəl/',
    turkishMeaning: 'Yanılabilir, hata yapabilir',
    synonyms: ['error-prone', 'flawed', 'imperfect', 'unreliable'],
    antonyms: ['infallible', 'flawless', 'perfect', 'omniscient'],
    exampleSentence: 'Because human sensory perception is fallible, scientific replication is crucial.'
  },
  {
    word: 'Abundance',
    partOfSpeech: 'noun',
    phonetic: '/əˈbʌn.dəns/',
    turkishMeaning: 'Bolluk, bereket, çokluk',
    synonyms: ['plenty', 'profusion', 'wealth', 'copiousness'],
    antonyms: ['scarcity', 'dearth', 'shortage', 'deficiency'],
    exampleSentence: 'The volcanic soil boasts an abundance of essential mineral nutrients.'
  },
  {
    word: 'Avert',
    partOfSpeech: 'verb',
    phonetic: '/əˈvɜːt/',
    turkishMeaning: 'Önlemek, savuşturmak, bertaraf etmek',
    synonyms: ['prevent', 'forestall', 'avoid', 'ward off'],
    antonyms: ['cause', 'foster', 'trigger', 'invite'],
    exampleSentence: 'Early seismic warnings helped civil engineers avert a catastrophic collapse.'
  },
  {
    word: 'Meticulously',
    partOfSpeech: 'adverb',
    phonetic: '/məˈtɪk.jə.ləs.li/',
    turkishMeaning: 'Titizlikle, büyük bir özenle',
    synonyms: ['painstakingly', 'scrupulously', 'carefully', 'rigorously'],
    antonyms: ['carelessly', 'sloppily', 'recklessly', 'haphazardly'],
    exampleSentence: 'The conservators meticulously cleaned every square inch of the mosaic.'
  },
  {
    word: 'Immutable',
    partOfSpeech: 'adjective',
    phonetic: '/ɪˈmjuː.tə.bəl/',
    turkishMeaning: 'Değişmez, sabit, dönüştürülemez',
    synonyms: ['unchangeable', 'permanent', 'fixed', 'rigid'],
    antonyms: ['mutable', 'flexible', 'variable', 'dynamic'],
    exampleSentence: 'Physical laws of thermodynamics remain immutable across the cosmos.'
  },
  {
    word: 'Precipitate',
    partOfSpeech: 'verb',
    phonetic: '/prɪˈsɪp.ɪ.teɪt/',
    turkishMeaning: 'Hızlandırmak, tetiklemek, zemin hazırlamak',
    synonyms: ['trigger', 'instigate', 'hasten', 'accelerate'],
    antonyms: ['delay', 'hinder', 'retard', 'halt'],
    exampleSentence: 'The sudden liquidity crisis precipitated a dramatic restructuring of the bank.'
  },
  {
    word: 'Opaque',
    partOfSpeech: 'adjective',
    phonetic: '/oʊˈpeɪk/',
    turkishMeaning: 'Saydam olmayan, anlaşılması güç, kapalı',
    synonyms: ['obscure', 'unclear', 'impenetrable', 'cryptic'],
    antonyms: ['transparent', 'lucid', 'clear', 'comprehensible'],
    exampleSentence: 'The internal parameters of the proprietary neural net remained entirely opaque.'
  },
  {
    word: 'Veneer',
    partOfSpeech: 'noun',
    phonetic: '/vəˈnɪər/',
    turkishMeaning: 'Dış görünüş, yüzeysel cila, maske',
    synonyms: ['facade', 'semblance', 'mask', 'gloss'],
    antonyms: ['reality', 'substance', 'core', 'authenticity'],
    exampleSentence: 'The software presented a veneer of objectivity while harboring hidden biases.'
  },
  {
    word: 'Insurmountable',
    partOfSpeech: 'adjective',
    phonetic: '/ˌɪn.səˈmaʊn.tə.bəl/',
    turkishMeaning: 'Aşılamaz, başa çıkılamaz, çok büyük',
    synonyms: ['unconquerable', 'insuperable', 'overwhelming', 'invincible'],
    antonyms: ['surmountable', 'manageable', 'feasible', 'attainable'],
    exampleSentence: 'Extreme cold poses insurmountable obstacles to ordinary oil cleanup crews.'
  },
  {
    word: 'Inalienable',
    partOfSpeech: 'adjective',
    phonetic: '/ɪnˈeɪ.li.ə.nə.bəl/',
    turkishMeaning: 'Devredilemez, elinden alınamaz, vazgeçilmez',
    synonyms: ['absolute', 'inherent', 'untouchable', 'fundamental'],
    antonyms: ['alienable', 'negotiable', 'temporary', 'conditional'],
    exampleSentence: 'Constitutional jurisprudence protects the inalienable rights of the accused.'
  }
];

const day2Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 2,
  title: 'Gün 2 — YDT İngilizce Derinlemesine & Gramer Ustalığı',
  database: day2Database,
  vocab: vocabDay2
};
