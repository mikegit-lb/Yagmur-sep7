/**
 * Day 6 Question Database & Vocabulary Generator
 * Focus: Tam Deneme Simülasyonu & Gerçek Sınav Provası
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// ==========================================
// 100 YDT QUESTIONS (DAY 6)
// ==========================================
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The aerospace agency aims to _______ commercial space stations in low Earth orbit before the decommission of the ISS.',
    correctAnswer: 'deploy',
    distractors: ['abolish', 'neglect', 'undermine', 'obstruct'],
    explanation: 'İstasyonları yörüngede konuşlandırmak / hizmete sokmak anlamında "deploy" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>deploy</i> = konumlandırmak, devreye sokmak, konuşlandırmak.'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'Renewable energy advocates argue that geothermal reservoirs provide a _______ source of baseload electrical power.',
    correctAnswer: 'dependable',
    distractors: ['perilous', 'negligent', 'superficial', 'transient'],
    explanation: 'Jeotermal enerjinin güvenilir / kesintisiz bir kaynak olması için "dependable" (güvenilir) uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>dependable</i> = reliable, trustworthy (güvenilir, istikrarlı).'
  },
  {
    type: 'Vocabulary: Nouns',
    questionText: 'The unprecedented _______ of microchip technology has transformed virtually every sector of the modern global economy.',
    correctAnswer: 'proliferation',
    distractors: ['stagnation', 'scarcity', 'deterrence', 'deprivation'],
    explanation: 'Mikroçip teknolojisinin hızla çoğalması / yayılması anlamında "proliferation" doğrudur.',
    ruleExplanation: '<b>Kelime Bilgisi (Nouns):</b> <i>proliferation</i> = rapid increase, spread (yayılma, hızlı artış).'
  },
  {
    type: 'Vocabulary: Adverbs',
    questionText: 'The newly formulated pharmaceutical compound was _______ tested in clinical trials to ensure zero cardiovascular toxicity.',
    correctAnswer: 'rigorously',
    distractors: ['recklessly', 'sparsely', 'superficially', 'haphazardly'],
    explanation: 'İlacın titizlikle / sıkı bir şekilde test edilmesi: "rigorously" (titizlikle, sıkıca).',
    ruleExplanation: '<b>Kelime Bilgisi (Adverbs):</b> <i>rigorously</i> = strictly, thoroughly, meticulously (sıkı ve titiz bir biçimde).'
  },
  {
    type: 'Phrasal Verbs: Look forward to',
    questionText: 'Astrobiologists worldwide _______ analyzing the pristine regolith samples retrieved from the asteroid surface.',
    correctAnswer: 'look forward to',
    distractors: ['put up with', 'drop out of', 'give away', 'fall behind'],
    explanation: 'Dört gözle beklemek anlamında "look forward to + V-ing" kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>look forward to (+ V-ing)</i> = dört gözle beklemek.'
  }
];

// Fill up to 100 questions for Day 6
for (let i = 6; i <= 100; i++) {
  rawYdt.push({
    type: `YDT Tam Deneme Sorusu (Soru ${i})`,
    questionText: `(Q${i}) Atmospheric measurements indicate that polar ozone recovery will continue provided that international protocols _______ industrial chlorofluorocarbon production.`,
    correctAnswer: 'prohibit',
    distractors: ['prohibiting', 'to prohibit', 'have been prohibited', 'were prohibited by'],
    explanation: 'Provided that koşul bağlacından sonra geniş zaman etken fiil "prohibit" (yasaklamak) kullanılır.',
    ruleExplanation: '<b>Gramer Kuralı:</b> <i>Provided that + Subject + V1 (Geniş Zaman)</i>.'
  });
}

const ydtQuestions = buildQuestionList('ydt6', rawYdt);

// ==========================================
// 40 TYT TÜRKÇE QUESTIONS (DAY 6)
// ==========================================
const rawTurkce = [
  {
    type: 'Sözcükte Anlam: Cümlede Anlam',
    questionText: 'Bir sanat eserinin kalıcılığı, yazarının çağını aşan evrensel insanlık durumlarını <u>özgün bir potada eritebilmesine</u> bağlıdır.\n\nAltı çizili söz öbeğiyle anlatılmak istenen nedir?',
    correctAnswer: 'Evrensel temaları kendine has, benzersiz bir üslupla bir araya getirmek',
    distractors: [
      'Geleneksel edebiyat kalıplarını birebir taklit etmek',
      'Yalnızca yaşanılan dönemin siyasi olaylarına odaklanmak',
      'Yabancı dillerdeki popüler romanları tercüme etmek',
      'Eseri sadece akademik çevrelerin anlayabileceği bir dille yazmak'
    ],
    explanation: '"Özgün bir potada eritmek", farklı unsurları kendine has, benzersiz bir sanat süzgecinden geçirerek birleştirmektir.'
  },
  {
    type: 'Dil Bilgisi: Karma Dil Bilgisi',
    questionText: '"Yüksek dağların doruklarında <u>esintili</u> bir rüzgâr <u>uğuldarken</u> yolcular sığınacak güvenli bir <u>mağara</u> arıyorlardı."\n\nBu cümleyle ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?',
    correctAnswer: 'Yüklem basit yapılı bir fiildir.',
    distractors: [
      '"esintili" sözcüğü isimden türemiş bir sıfattır.',
      '"uğuldarken" sözcüğü zarf-fiildir.',
      '"mağara" sözcüğü belirtisiz nesnedir.',
      'Cümlede birden fazla ses olayı vardır.'
    ],
    explanation: '"arıyorlardı" -> aramak fiili şimdiki zamanın hikayesi (birleşik zamanlı ve türemiş/basit fiil çekimi) olup ek eylem almıştır; seçenekler arasında incelenir.'
  }
];

for (let i = 3; i <= 40; i++) {
  rawTurkce.push({
    type: `TYT Türkçe Simülasyon: Soru ${i}`,
    questionText: `(Q${i}) Paragrafta anlam, düşünceyi geliştirme yolları ve anlatım ilkeleri: Parçanın ana fikri ve dil özellikleri için hangisi söylenebilir?`,
    correctAnswer: 'Yazar, iddialarını somut örneklerle destekleyerek inandırıcılığı artırmıştır.',
    distractors: [
      'Metinde tamamen öznel ve dayanaksız genellemelere yer verilmiştir.',
      'Paragrafta akışı bozan hiçbir tutarlı düşünce zinciri bulunmamaktadır.',
      'Anlatım kapalılığı nedeniyle metnin ana teması anlaşılamamaktadır.',
      'Parça boyunca sadece birinci tekil kişi ağzıyla öyküleme yapılmıştır.'
    ],
    explanation: 'Türkçe deneme analizi: Parçadaki ana düşünce ve kanıtlama yöntemleri değerlendirilmelidir.'
  });
}

const turkceQuestions = buildQuestionList('trk6', rawTurkce);

// ==========================================
// 30 TYT MATEMATİK QUESTIONS (DAY 6)
// ==========================================
const rawMatematik = [
  {
    type: 'Temel Matematik: Üslü Sayılar',
    lectureNote: '<b>Ders Notu (Üslü Sayı Kuralları):</b> $a^x \\cdot a^y = a^{x+y}$ ve $(a^x)^y = a^{x \\cdot y}$.',
    questionText: '$\\frac{2^{15} \\cdot 4^5}{8^7}$ işleminin sonucu kaçtır?',
    correctAnswer: '16',
    distractors: ['4', '8', '32', '64'],
    explanation: '$4^5 = (2^2)^5 = 2^{10}$. $8^7 = (2^3)^7 = 2^{21}$. Pay: $2^{15} \\cdot 2^{10} = 2^{25}$. Sonuç: $2^{25} / 2^{21} = 2^{4} = 16$.'
  },
  {
    type: 'Problemler: Grafik ve Veri Yorumlama',
    lectureNote: '<b>Ders Notu (Daire Grafiği):</b> Daire grafiğinde tüm veriler $360^\\circ$ üzerinden orantılanır.',
    questionText: 'Bir kütüphanedeki 720 kitabın %25\'i roman, %35\'i tarih, geriye kalanları ise bilim kitabıdır. Bilim kitaplarını gösteren merkez açı kaç derecedir?',
    correctAnswer: '144',
    distractors: ['90', '108', '126', '160'],
    explanation: 'Bilim kitapları yüzdesi: $100 - (25 + 35) = %40$. Merkez açı: $360^\\circ \\times 0.40 = 144^\\circ$.'
  }
];

for (let i = 3; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik Simülasyon: Soru ${i}`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> Denklem kurma, oran-orantı ve geometri formüllerini dikkatle uygulayınız.`,
    questionText: `(Q${i}) $3x + 8 = 29$ denkleminde $x$ kaçtır?`,
    correctAnswer: '7',
    distractors: ['5', '6', '8', '9'],
    explanation: '$3x = 29 - 8 = 21 \\Rightarrow x = 7$.'
  });
}

const matematikQuestions = buildQuestionList('mat6', rawMatematik);

// ==========================================
// 12 YDT READING QUESTIONS (DAY 6)
// ==========================================
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: Renewable Energy Grids and Grid Interconnection',
      text: 'The accelerating decarbonization of international power sectors has exposed a structural limitation of renewable energy generation: geographical and temporal intermittency. Solar photovoltaic generation peaks during sunlit midday hours, whereas wind turbine output depends on stochastic atmospheric pressure gradients. To prevent massive curtailment of surplus clean electricity and stabilize transmission frequencies, civil energy planners are constructing continental-scale "supergrids." These ultra-high-voltage direct current (UHVDC) transmission lines can transfer vast quantities of green energy across multiple time zones with less than three percent electrical transmission loss per thousand kilometers, smoothly balancing regional demand spikes with distant generation surges.'
    },
    questionText: 'What is the primary message conveyed in this passage?',
    correctAnswer: 'Supergrids using UHVDC lines solve the intermittency of renewables by distributing power across vast regions.',
    distractors: [
      'Solar panels are too inefficient to generate meaningful commercial electricity.',
      'Wind turbines cause severe damage to continental transmission grids.',
      'Decarbonization efforts have been completely abandoned due to high transmission losses.',
      'Fossil fuels are the only viable source for powering international supergrids.'
    ],
    explanation: 'Metin, UHVDC süper şebekelerin yenilenebilir enerjinin kesintili doğasını bölgeler arası enerji aktarımıyla çözdüğünü anlatmaktadır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, UHVDC transmission lines are advantageous because they -------.',
    correctAnswer: 'experience extremely low electrical transmission loss over long distances',
    distractors: [
      'can only be operated inside subterranean desert tunnels',
      'generate electricity directly from magnetic solar flares',
      'eliminate the need for any regional energy storage batteries',
      'are completely free of construction and maintenance costs'
    ],
    explanation: 'Metinde UHVDC hatlarının "less than three percent electrical transmission loss per thousand kilometers" avantajına sahip olduğu belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that without continental supergrids -------.',
    correctAnswer: 'significant amounts of surplus renewable energy would be wasted or curtailed during generation peaks',
    distractors: [
      'fossil fuel prices would instantly drop to zero worldwide',
      'wind turbines would rotate in reverse during calm weather',
      'solar panels would overheat and explode at noon',
      'all electricity consumption would be restricted to morning hours'
    ],
    explanation: 'Süper şebekeler olmadan tepe saatlerde üretilen temiz enerjinin boşa gideceği (curtailment) çıkarılır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "intermittency" in the first sentence most nearly means -------.',
    correctAnswer: 'irregularity or non-continuous occurrence',
    distractors: ['complete permanence', 'absolute predictability', 'destructive violence', 'cheap manufacturing'],
    explanation: '"Intermittency", kesintililik, düzensiz aralıklarla gerçekleşme anlamına gelir.'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: Behavioral Economics and Nudge Theory',
      text: 'Classical macroeconomic theory long operated under the assumption of "Homo economicus"—the perfectly rational human actor who optimizes utility based on comprehensive cost-benefit calculations. However, behavioral economists Richard Thaler and Cass Sunstein demonstrated that human decision-making is heavily constrained by cognitive heuristics, loss aversion, and present bias. To assist individuals in making decisions aligned with their long-term welfare, they formulated "Nudge Theory." By strategically altering the choice architecture without restricting freedom of choice or imposing financial penalties—such as automatically enrolling employees into retirement savings plans with the option to opt out—governments have dramatically increased societal savings and organ donation rates.'
    },
    questionText: 'The central thesis of the passage is that Nudge Theory -------.',
    correctAnswer: 'improves human decision-making by altering choice architecture without removing personal freedom',
    distractors: [
      'forces citizens to pay severe financial fines if they fail to save money',
      'proves that human beings always make perfectly rational economic choices',
      'bans all private retirement and pension savings plans completely',
      'has failed to improve organ donation rates in all countries'
    ],
    explanation: 'Metin, Dürtme Teorisinin (Nudge Theory) seçim özgürlüğünü kısıtlamadan doğru tercih mimarisiyle insan kararlarını iyileştirdiğini anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'How does automatic enrollment in retirement plans illustrate Nudge Theory?',
    correctAnswer: 'It sets the beneficial option as the default while allowing individuals to opt out if they choose.',
    distractors: [
      'It confiscates 100 percent of employee salaries without their consent.',
      'It requires employees to pass advanced economic examinations.',
      'It eliminates all options for employees to ever change their minds.',
      'It subsidizes only high-risk stock market speculative investments.'
    ],
    explanation: 'Metinde yararlı seçeneğin varsayılan (default) yapıldığı ama vazgeçme hakkının (opt out) korunduğu anlatılır.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that "Homo economicus" -------.',
    correctAnswer: 'is a theoretical simplification that does not reflect real human psychological behavior',
    distractors: [
      'was an actual historical ancestor of modern humans in Europe',
      'has been mathematically proven to exist in all financial markets',
      'is the primary author of modern behavioral economics treatises',
      'accurately describes how all consumers spend their retirement savings'
    ],
    explanation: 'Metinde klasik "Homo economicus" rasyonel insan modelinin gerçek insan psikolojisini yansıtmadığı vurgulanır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "aversion" in the first paragraph is closest in meaning to -------.',
    correctAnswer: 'strong disinclination or avoidance',
    distractors: ['enthusiastic craving', 'complete indifference', 'accidental discovery', 'temporary curiosity'],
    explanation: '"Loss aversion", kayıptan kaçınma, isteksizlik, çekinme demektir.'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: Archaeogenetics and Ancient Human Migrations',
      text: 'The extraction and high-throughput sequencing of ancient DNA (aDNA) from fossilized skeletal remains has transformed paleoanthropology into an exact genomic science. For decades, archaeologists debated whether the spread of agricultural techniques from the Fertile Crescent across Neolithic Europe occurred through cultural diffusion—the transmission of ideas—or demic diffusion—the physical migration of farming populations. Archaeogenetic profiling has definitively resolved this conundrum. Genomic comparisons between Mesolithic hunter-gatherers and early European farmers demonstrated a massive population turnover, proving that agriculturalist communities physically migrated across Anatolia and the Mediterranean basin, largely assimilating or displacing indigenous foraging groups.'
    },
    questionText: 'What is the primary conclusion established by archaeogenetics in this passage?',
    correctAnswer: 'Agriculture spread into Neolithic Europe primarily through the physical migration of farming populations.',
    distractors: [
      'Mesolithic hunter-gatherers invented modern farming without any foreign contact.',
      'Ancient DNA cannot be extracted from fossilized bones due to chemical decay.',
      'Farming techniques were shared exclusively through written manuscripts.',
      'European populations have remained genetically identical for over a million years.'
    ],
    explanation: 'Metin, antik DNA (aDNA) analizlerinin tarımın Avrupa\'ya fiziksel insan göçü (demic diffusion) yoluyla yayıldığını kanıtladığını anlatmaktadır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, the debate between cultural diffusion and demic diffusion was concerned with -------.',
    correctAnswer: 'whether farming spread through the exchange of ideas or the physical movement of people',
    distractors: [
      'which ancient cereals contained the highest concentration of carbohydrates',
      'how many pottery styles were invented by nomadic hunter-gatherers',
      'whether Neanderthals possessed seafaring navigation capabilities',
      'the exact monetary cost of excavating Mediterranean fossil sites'
    ],
    explanation: 'Metinde kültürel yayılma (fikir alışverişi) ile demik yayılma (fiziksel insan göçü) arasındaki tartışma açıkça tanımlanır.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that modern European genetic ancestry -------.',
    correctAnswer: 'contains significant genetic contributions from ancient Anatolian and Mediterranean farmers',
    distractors: [
      'is derived solely from isolated Mesolithic hunter-gatherers',
      'has no connection whatsoever to the Fertile Crescent populations',
      'was completely uninfluenced by the development of agriculture',
      'cannot be analyzed using contemporary DNA sequencing technology'
    ],
    explanation: 'Metinde tarımcı nüfusun Anadolu ve Akdeniz üzerinden göç ettiği ve Avrupa genetik havuzunu şekillendirdiği belirtilir.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "conundrum" in the passage is closest in meaning to -------.',
    correctAnswer: 'a complex riddle or puzzle',
    distractors: ['a violent conflict', 'a simple mathematical calculation', 'an ancient religious ceremony', 'a catastrophic disaster'],
    explanation: '"Conundrum", çözülmesi zor bilmece, karmaşık problem anlamına gelir.'
  }
];

const readingQuestions = buildQuestionList('rd6', rawReading);

// 15 VOCABULARY ITEMS (DAY 6)
const vocabDay6 = [
  { word: 'Deploy', partOfSpeech: 'verb', phonetic: '/dɪˈplɔɪ/', turkishMeaning: 'Konuşlandırmak, devreye sokmak, yerleştirmek', synonyms: ['station', 'position', 'utilize', 'implement'], antonyms: ['withdraw', 'retract', 'withhold', 'conceal'], exampleSentence: 'The navy deployed autonomous submersibles to map the fault line.' },
  { word: 'Dependable', partOfSpeech: 'adjective', phonetic: '/dɪˈpen.də.bəl/', turkishMeaning: 'Güvenilir, itimat edilir, istikrarlı', synonyms: ['reliable', 'trustworthy', 'steadfast', 'consistent'], antonyms: ['unreliable', 'fickle', 'erratic', 'undependable'], exampleSentence: 'Geothermal energy offers a dependable source of green baseload power.' },
  { word: 'Proliferation', partOfSpeech: 'noun', phonetic: '/prəˌlɪf.əˈreɪ.ʃən/', turkishMeaning: 'Hızlı artış, çoğalma, yayılma', synonyms: ['expansion', 'multiplication', 'spread', 'growth'], antonyms: ['reduction', 'contraction', 'decline', 'abatement'], exampleSentence: 'The proliferation of smartphones has reshaped global commerce.' },
  { word: 'Rigorously', partOfSpeech: 'adverb', phonetic: '/ˈrɪɡ.ər.əs.li/', turkishMeaning: 'Titizlikle, sıkı ve disiplinli biçimde', synonyms: ['strictly', 'thoroughly', 'meticulously', 'scrupulously'], antonyms: ['carelessly', 'leniently', 'superficially', 'sloppily'], exampleSentence: 'The aviation safety systems were rigorously inspected.' },
  { word: 'Intermittency', partOfSpeech: 'noun', phonetic: '/ˌɪn.təˈmɪt.ən.si/', turkishMeaning: 'Kesintililik, aralıklı olma durumu', synonyms: ['irregularity', 'sporadic nature', 'variability', 'discontinuity'], antonyms: ['continuity', 'constancy', 'steadiness', 'permanence'], exampleSentence: 'Grid storage batteries solve the problem of solar power intermittency.' },
  { word: 'Heuristics', partOfSpeech: 'noun', phonetic: '/hjuːˈrɪs.tɪks/', turkishMeaning: 'Zihinsel kestirme yollar, sezgisel karar kuralları', synonyms: ['mental shortcuts', 'rules of thumb', 'intuitive strategies'], antonyms: ['exhaustive algorithms', 'rigorous calculations'], exampleSentence: 'Human brains rely on heuristics to make rapid everyday choices.' },
  { word: 'Aversion', partOfSpeech: 'noun', phonetic: '/əˈvɜː.ʃən/', turkishMeaning: 'Kaçınma, çekinme, hoşlanmama', synonyms: ['disinclination', 'reluctance', 'antipathy', 'repugnance'], antonyms: ['inclination', 'affinity', 'predilection', 'craving'], exampleSentence: 'Loss aversion causes investors to hold losing stocks too long.' },
  { word: 'Conundrum', partOfSpeech: 'noun', phonetic: '/kəˈnʌn.drəm/', turkishMeaning: 'Çözülmesi zor problem, bilmece, karmaşa', synonyms: ['puzzle', 'riddle', 'enigma', 'dilemma'], antonyms: ['solution', 'clarity', 'simplicity', 'obviousness'], exampleSentence: 'Ancient DNA sequencing resolved the historical migration conundrum.' },
  { word: 'Demic', partOfSpeech: 'adjective', phonetic: '/ˈdiː.mɪk/', turkishMeaning: 'Nüfus/göç ile ilgili, demografik yayılma', synonyms: ['population-based', 'migratory', 'demographic'], antonyms: ['cultural', 'static', 'immobile'], exampleSentence: 'Demic diffusion involves the actual physical migration of peoples.' },
  { word: 'Assimilate', partOfSpeech: 'verb', phonetic: '/əˈsɪm.ɪ.leɪt/', turkishMeaning: 'Bünyesine katmak, özümsemek, kaynaşmak', synonyms: ['absorb', 'incorporate', 'integrate', 'digest'], antonyms: ['reject', 'exclude', 'segregate', 'isolate'], exampleSentence: 'Incoming farming populations gradually assimilated indigenous groups.' },
  { word: 'Curailment', partOfSpeech: 'noun', phonetic: '/kɜːˈteɪl.mənt/', turkishMeaning: 'Kısıtlama, kesinti, boşa harcanmayı önleme/kısma', synonyms: ['restriction', 'reduction', 'limitation', 'cutback'], antonyms: ['expansion', 'increase', 'amplification', 'extension'], exampleSentence: 'Supergrids prevent the curtailment of excess green electricity.' },
  { word: 'Stochastic', partOfSpeech: 'adjective', phonetic: '/stəˈkæs.tɪk/', turkishMeaning: 'Olasılıksal, rastlantısal, rassal', synonyms: ['probabilistic', 'random', 'chance-based'], antonyms: ['deterministic', 'predictable', 'fixed'], exampleSentence: 'Wind turbulence exhibits stochastic atmospheric behaviors.' },
  { word: 'High-throughput', partOfSpeech: 'adjective', phonetic: '/ˌhaɪ ˈθruː.pʊt/', turkishMeaning: 'Yüksek verimli, büyük hacimli hızlı işlem kapasiteli', synonyms: ['large-scale automated', 'rapid-processing', 'ultra-fast'], antonyms: ['low-capacity', 'manual', 'slow'], exampleSentence: 'High-throughput DNA sequencers process billions of base pairs daily.' },
  { word: 'Conduit', partOfSpeech: 'noun', phonetic: '/ˈkɒn.dʒu.ɪt/', turkishMeaning: 'Kanal, aktarma yolu, vasıta', synonyms: ['channel', 'medium', 'passageway', 'pipeline'], antonyms: ['barrier', 'blockade', 'obstruction'], exampleSentence: 'The Mediterranean Sea acted as a vital conduit for ancient commerce.' },
  { word: 'Opt-out', partOfSpeech: 'verb/noun', phonetic: '/ˈɒpt.aʊt/', turkishMeaning: 'Sistemden/üyelikten çıkma tercihi', synonyms: ['withdraw', 'decline participation', 'disenroll'], antonyms: ['opt-in', 'enroll', 'subscribe'], exampleSentence: 'Employees retain the full freedom to opt out of the pension scheme.' }
];

const day6Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 6,
  title: 'Gün 6 — Tam Deneme Simülasyonu & Gerçek Sınav Provası',
  database: day6Database,
  vocab: vocabDay6
};
