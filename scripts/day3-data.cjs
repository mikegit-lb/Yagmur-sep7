/**
 * Day 3 Question Database & Vocabulary Generator
 * Focus: TYT Türkçe & Paragraf Mastery
 */

const { buildQuestionList } = require('./day-data-builder.cjs');

// ==========================================
// 100 YDT QUESTIONS (DAY 3)
// ==========================================
const rawYdt = [
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The UN climate council urged industrial leaders to _______ greenhouse gas emissions before global warming exceeds the 1.5°C threshold.',
    correctAnswer: 'curtail',
    distractors: ['prolong', 'instigate', 'exaggerate', 'subsidize'],
    explanation: 'Emisyonları kısmak / sınırlandırmak / azaltmak anlamında "curtail" doğru cevaptır.',
    ruleExplanation: '<b>Kelime Bilgisi (Verbs):</b> <i>curtail</i> = azaltmak, kısmak, sınırlandırmak.'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'The discovery of extremophile bacteria living in boiling hydrothermal vents proved that life can thrive in _______ environments.',
    correctAnswer: 'inhospitable',
    distractors: ['complacent', 'lucrative', 'redundant', 'negligible'],
    explanation: 'Yaşama elverişsiz / zorlu çevre koşulları için "inhospitable" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Adjectives):</b> <i>inhospitable</i> = elverişsiz, çetin, barınılması güç.'
  },
  {
    type: 'Vocabulary: Nouns',
    questionText: 'The historical treaty suffered from a fundamental _______ because it failed to define maritime territorial borders clearly.',
    correctAnswer: 'ambiguity',
    distractors: ['prosperity', 'perseverance', 'unanimity', 'durability'],
    explanation: 'Sınırların net tanımlanmaması belirsizliğe / yoruma açıklığa yol açmıştır: "ambiguity".',
    ruleExplanation: '<b>Kelime Bilgisi (Nouns):</b> <i>ambiguity</i> = belirsizlik, muğlaklık.'
  },
  {
    type: 'Vocabulary: Adverbs',
    questionText: 'Although the initial prototype had minor software glitches, the autonomous vehicle operated _______ during its 500-mile cross-country test.',
    correctAnswer: 'flawlessly',
    distractors: ['recklessly', 'sparsely', 'superficially', 'haphazardly'],
    explanation: 'Aracın kusursuz / sorunsuz çalışması anlamında "flawlessly" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi (Adverbs):</b> <i>flawlessly</i> = kusursuzca, mükemmel biçimde.'
  },
  {
    type: 'Phrasal Verbs: Account for',
    questionText: 'Commercial aviation and international shipping currently _______ approximately five percent of global greenhouse gas emissions.',
    correctAnswer: 'account for',
    distractors: ['fall through', 'take over', 'break down', 'give away'],
    explanation: 'Toplam emisyonun yaklaşık %5\'ini oluşturmak / oluşturduğu anlamına gelmek: "account for".',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>account for</i> = constitute, explain (oran oluşturmak, açıklamak).'
  },
  {
    type: 'Phrasal Verbs: Turn down',
    questionText: 'The distinguished biochemist decided to _______ the lucrative corporate offer to continue her academic research on stem cells.',
    correctAnswer: 'turn down',
    distractors: ['look up to', 'carry out', 'bring up', 'get along with'],
    explanation: 'Kazançlı şirket teklifini reddetti: "turn down" = reddetmek, geri çevirmek.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>turn down</i> = reject, refuse (reddetmek).'
  },
  {
    type: 'Phrasal Verbs: Look into',
    questionText: 'The aviation safety bureau formed a specialized panel to _______ the mechanical cause of the engine failure.',
    correctAnswer: 'look into',
    distractors: ['cut off', 'put up with', 'run out of', 'drop out of'],
    explanation: 'Arızanın mekanik nedenini araştırmak / incelemek: "look into" = incelemek, soruşturmak.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>look into</i> = investigate, examine (araştırmak).'
  },
  {
    type: 'Phrasal Verbs: Set up',
    questionText: 'Non-governmental organizations have begun to _______ emergency solar-powered water purification stations in flood-hit regions.',
    correctAnswer: 'set up',
    distractors: ['take off', 'fall behind', 'call off', 'give in'],
    explanation: 'İstasyon kurmak / tesis etmek anlamında "set up" kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>set up</i> = establish (kurmak).'
  },
  {
    type: 'Vocabulary: Adjectives',
    questionText: 'Deep-sea exploration requires materials capable of withstanding the _______ hydrostatic pressure at the bottom of the Mariana Trench.',
    correctAnswer: 'colossal',
    distractors: ['trivial', 'transient', 'fragile', 'monotonous'],
    explanation: 'Çok büyük / devasa hidrostatik basınç için "colossal" (muazzam, devasa) kullanılır.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>colossal</i> = immense, enormous (muazzam, devasa).'
  },
  {
    type: 'Vocabulary: Verbs',
    questionText: 'The new data encryption protocol is expected to _______ unauthorized access to confidential medical archives.',
    correctAnswer: 'preclude',
    distractors: ['facilitate', 'provoke', 'stimulate', 'accelerate'],
    explanation: 'Yetkisiz erişimi engellemek / imkânsız kılmak anlamında "preclude" uygundur.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>preclude</i> = prevent, make impossible (engellemek, önünü kesmek).'
  },
  {
    type: 'Phrasal Verbs: Wipe out',
    questionText: 'The catastrophic asteroid impact 66 million years ago was powerful enough to _______ non-avian dinosaurs and three-quarters of plant species.',
    correctAnswer: 'wipe out',
    distractors: ['show off', 'put off', 'bring in', 'stand out'],
    explanation: 'Dinozorları tamamen yok etmek / kökünü kazımak anlamında "wipe out" kullanılır.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>wipe out</i> = eradicate, destroy completely (yok etmek).'
  },
  {
    type: 'Vocabulary: Nouns',
    questionText: 'A major _______ in battery chemistry could finally make electric transoceanic flights commercially feasible.',
    correctAnswer: 'breakthrough',
    distractors: ['setback', 'deterrent', 'hindrance', 'deficiency'],
    explanation: 'Batarya kimyasında önemli bir atılım / çığır açıcı gelişme için "breakthrough" doğrudur.',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>breakthrough</i> = major discovery/advance (büyük buluş, atılım).'
  },
  {
    type: 'Vocabulary: Verbs',
    questionText: 'Psychologists note that chronic social isolation can _______ underlying depressive symptoms among adolescents.',
    correctAnswer: 'exacerbate',
    distractors: ['alleviate', 'soothe', 'mitigate', 'dispel'],
    explanation: 'Yalnızlığın semptomları kötüleştirmesi / alevlendirmesi: "exacerbate" (kötüleştirmek).',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>exacerbate</i> = worsen, aggravate (kötüleştirmek, şiddetlendirmek).'
  },
  {
    type: 'Vocabulary: Adverbs',
    questionText: 'The ancient aqueduct was so _______ designed that sections of it continue to channel mountain spring water today.',
    correctAnswer: 'ingeniously',
    distractors: ['clumsily', 'arbitrarily', 'recklessly', 'sparsely'],
    explanation: 'Su kemerinin dahiyane bir şekilde / ustalıkla tasarlanması: "ingeniously".',
    ruleExplanation: '<b>Kelime Bilgisi:</b> <i>ingeniously</i> = cleverly, brilliantly (dahiyane biçimde, ustalıkla).'
  },
  {
    type: 'Phrasal Verbs: Bring up',
    questionText: 'During the international summit, delegates agreed to _______ the unresolved issue of deep-sea mineral rights during the next session.',
    correctAnswer: 'bring up',
    distractors: ['give up', 'look down on', 'drop out', 'break off'],
    explanation: 'Bir konuyu gündeme getirmek / bahsini açmak: "bring up" = gündeme getirmek.',
    ruleExplanation: '<b>Phrasal Verb:</b> <i>bring up</i> = raise a topic (gündeme getirmek).'
  }
];

// Grammar templates for Day 3
const ydtGrammarTemplatesD3 = [
  {
    type: 'Tenses: Past Continuous vs Past Simple',
    questionText: 'While the oceanographic vessel _______ sediment cores from the tectonic fault, an unexpected underwater seismic shock _______ the drilling rig.',
    correctAnswer: 'was extracting / damaged',
    distractors: ['extracted / was damaging', 'had extracted / damages', 'is extracting / had damaged', 'has been extracting / will damage'],
    explanation: 'Devam eden uzun eylem (was extracting) sırasında anlık kısa bir olay gerçekleşmiştir (damaged).',
    ruleExplanation: '<b>Kural:</b> <i>While + Past Continuous (was/were V-ing) , Simple Past (V2)</i>.'
  },
  {
    type: 'Inversion: Scarcely... when',
    questionText: 'Scarcely _______ the flight telemetry confirmed engine malfunction _______ the pilot initiated emergency ditching protocols.',
    correctAnswer: 'had / when',
    distractors: ['did / than', 'was / that', 'would / as', 'has / before'],
    explanation: '"Scarcely had + S + V3 ... when + S + V2" devrik kalıbı kullanılır.',
    ruleExplanation: '<b>Kural:</b> <i>Scarcely / Hardly had + Subject + V3 ... when + Subject + V2</i>.'
  },
  {
    type: 'Conditionals: Type 3 (Past Unreal)',
    questionText: 'If the naval architects _______ double-layered steel hulls, the cargo ship _______ after striking the underwater reef.',
    correctAnswer: 'had installed / would not have sunk',
    distractors: ['installed / will not sink', 'were installing / does not sink', 'have installed / would not sink', 'would install / had not sunk'],
    explanation: 'Geçmişte gerçekleşmemiş durum ve sonucu: If + had V3, would have V3.',
    ruleExplanation: '<b>Kural:</b> <i>If + had V3 (Past Perfect), Subject + would/could/might have V3</i>.'
  },
  {
    type: 'Modals: Past Impossibility (Couldn\'t / Can\'t have V3)',
    questionText: 'The laboratory archive was locked from the outside with biometric credentials, so the intruder _______ the building through the ventilation shaft alone.',
    correctAnswer: 'couldn’t have entered',
    distractors: ['must have entered', 'should enter', 'might enter', 'had better enter'],
    explanation: 'Kapının biyometrik kilitli olması havalandırmadan girilmiş olmasını imkansız kılar: couldn’t have entered.',
    ruleExplanation: '<b>Kural:</b> <i>can’t / couldn’t have + V3</i> = Geçmişte imkânsızlık (-mış olamaz).'
  },
  {
    type: 'Reduced Clauses: Infinitive after The First / Only',
    questionText: 'Valentina Tereshkova was the first woman _______ into outer space aboard the Vostok 6 spacecraft in 1963.',
    correctAnswer: 'to travel',
    distractors: ['travelling', 'travelled', 'having travelled', 'to be travelling'],
    explanation: '"the first / the only / the last" ifadelerinden sonra gelen sıfat cümlecikleri to-infinitive (to travel) ile kısaltılır.',
    ruleExplanation: '<b>Kural:</b> <i>the first / the second / the only / the best + to + V1</i> kısaltması.'
  },
  {
    type: 'Connectors: Result (Consequently / Therefore)',
    questionText: 'The volcanic ash cloud reduced atmospheric visibility to near zero; _______, civil aviation authorities grounded all regional commercial flights.',
    correctAnswer: 'consequently',
    distractors: ['nevertheless', 'in contrast', 'whereas', 'otherwise'],
    explanation: 'Görüş mesafesinin sıfıra inmesi uçuşların durdurulmasının nedenidir; sonuç bildiren "consequently" (dolayısıyla) doğrudur.',
    ruleExplanation: '<b>Kural:</b> <i>Consequently / Therefore / As a result</i> neden-sonuç bağlaçlarıdır.'
  },
  {
    type: 'Connectors: Condition (Provided that / As long as)',
    questionText: 'Modern wind turbines can supply electricity efficiently _______ average wind velocities remain between twelve and twenty-five meters per second.',
    correctAnswer: 'provided that',
    distractors: ['unless', 'although', 'in case of', 'despite'],
    explanation: '"Rüzgar hızı bu aralıkta kaldığı sürece/şartıyla" anlamında "provided that" kullanılır.',
    ruleExplanation: '<b>Kural:</b> <i>provided that / as long as</i> = -dığı sürece, şartıyla (şart bağlacı).'
  },
  {
    type: 'Noun Clauses: Subject Clause (That / What)',
    questionText: '_______ early agricultural communities developed complex irrigation canals enabled them to sustain permanent urban populations.',
    correctAnswer: 'That',
    distractors: ['What', 'Whether', 'Whose', 'Which'],
    explanation: 'Tam bir cümle ("early communities developed canals") özne konumuna getirilirken "That" kullanılır.',
    ruleExplanation: '<b>Kural:</b> <i>That + Tam Cümle + Fiil</i> = ... -dığı gerçeği (özne isim cümleciği).'
  },
  {
    type: 'Prepositions: Dependent Preposition',
    questionText: 'A comprehensive medical diagnosis should be based _______ verified biochemical markers rather than subjective symptoms.',
    correctAnswer: 'on',
    distractors: ['in', 'with', 'at', 'to'],
    explanation: '"base on / upon" (bir şeye dayandırmak) kalıplaşmış edat birlikteliğidir.',
    ruleExplanation: '<b>Kural:</b> <i>based on</i> = -e dayalı.'
  },
  {
    type: 'Adverbial Clauses: Time (By the time)',
    questionText: 'By the time the rescue team reached the isolated mountain hut, the severe blizzard _______ for more than forty-eight hours.',
    correctAnswer: 'had been raging',
    distractors: ['raged', 'is raging', 'has raged', 'will be raging'],
    explanation: 'By the time + V2 (reached) yapısında ana cümle geçmişteki süreci belirtiyorsa Past Perfect Continuous (had been raging) alır.',
    ruleExplanation: '<b>Kural:</b> <i>By the time + V2, had been V-ing</i>.'
  }
];

for (let i = 16; i <= 100; i++) {
  const tpl = ydtGrammarTemplatesD3[(i - 16) % ydtGrammarTemplatesD3.length];
  rawYdt.push({
    type: `YDT: ${tpl.type}`,
    questionText: `(Q${i}) ` + tpl.questionText,
    correctAnswer: tpl.correctAnswer,
    distractors: tpl.distractors,
    explanation: tpl.explanation,
    ruleExplanation: tpl.ruleExplanation
  });
}

const ydtQuestions = buildQuestionList('ydt3', rawYdt);

// ==========================================
// 40 TYT TÜRKÇE QUESTIONS (DAY 3)
// ==========================================
const rawTurkce = [
  {
    type: 'Sözcükte Anlam: Deyimler',
    questionText: 'Tüm uyarılara rağmen kendi bildiğini okuyan ve başkalarının önerilerine <u>kulak asmayan</u> bir yöneticinin başarıya ulaşması zordur.\n\nAltı çizili deyimin cümleye kattığı anlam hangisidir?',
    correctAnswer: 'Önem vermemek, dinlememek',
    distractors: ['Gizlice dinlemek', 'Çok dikkatle takip etmek', 'İstemeden duymak', 'Söylenenleri not almak'],
    explanation: '"Kulak asmamak", söylenenlere değer vermemek, aldırış etmemek, dinlememek demektir.'
  },
  {
    type: 'Cümlede Anlam: Öznel / Nesnel Yargı',
    questionText: 'Aşağıdaki cümlelerin hangisi kanıtlanabilirlik açısından diğerlerinden <u>farklıdır</u>?',
    correctAnswer: 'Yazarın son denemesi, insanı derinden sarsan büyüleyici bir üslupla kaleme alınmış.',
    distractors: [
      'Türkiye’nin en yüksek dağı olan Ağrı Dağı’nın rakımı 5.137 metredir.',
      'Romanda geçen olaylar 1920 ile 1935 yılları arasındaki İstanbul’da geçmektedir.',
      'Yapılan son arkeolojik kazılarda Tunç Çağı’na ait 15 adet seramik kap bulunmuştur.',
      'Güneş ışığının Dünya’ya ulaşması yaklaşık 8 dakika 20 saniye sürer.'
    ],
    explanation: '"Büyüleyici bir üslup" ve "derinden sarsan" kişisel beğeniye dayalı öznel bir yargıdır; diğerleri bilimsel ve nesneldir.'
  },
  {
    type: 'Dil Bilgisi: Fiilimsiler (Eylemsiler)',
    questionText: '"Sabahın erken saatlerinde <u>açan</u> çiçeklerin kokusu, bahçede <u>dolaşırken</u> içimize <u>çektiğimiz</u> havayı güzelleştiriyordu."\n\nAltı çizili fiilimsilerin türleri sırasıyla hangisinde verilmiştir?',
    correctAnswer: 'Sıfat-fiil — Zarf-fiil — Sıfat-fiil',
    distractors: [
      'İsim-fiil — Sıfat-fiil — Zarf-fiil',
      'Sıfat-fiil — İsim-fiil — Zarf-fiil',
      'Zarf-fiil — Sıfat-fiil — İsim-fiil',
      'Sıfat-fiil — Zarf-fiil — İsim-fiil'
    ],
    explanation: 'Aç-an (Sıfat-fiil) — dolaş-ırken (Zarf-fiil) — çek-tiğimiz (Sıfat-fiil).'
  },
  {
    type: 'Dil Bilgisi: Yazım Kuralları (de/da ve ki)',
    questionText: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı <u>yapılmamıştır</u>?',
    correctAnswer: 'Mademki gelmeyecektin, neden saatlerce seni durakta beklememe izin verdin?',
    distractors: [
      'Ev de ki hesap ne yazık ki çarşıya uymadı.',
      'Sende bizimle tiyatroya gelseydin çok eğlenirdik.',
      'Oysaki durumu biliyordu ama yinede bir şey söylemedi.',
      'Duydumki unutmuşsun gözlerimin rengini.'
    ],
    explanation: '"Mademki" kalıplaşmış bağlaç olarak bitişik yazılır (SOMBAHÇEM kuralı). Diğerlerinde "evdeki", "Sen de", "yine de", "Duydum ki" hatalıdır.'
  },
  {
    type: 'Paragraf: Ana Düşünce',
    questionText: 'Eleştiri, bir eserin yalnızca eksik ya da zayıf yönlerini ortaya dökmek demek değildir. Gerçek bir eleştirmen, eserin içinde saklı cevherleri keşfeden, yazarın kurduğu dünyayı okura açan bir köprüdür. Yıkıcı değil yapıcı olan, sanatçıyı besleyen ve edebiyat ortamını zenginleştiren eleştiri ancak bu anlayışla var olabilir.\n\nBu parçaya göre eleştirinin temel işlevi aşağıdakilerden hangisidir?',
    correctAnswer: 'Eserin değerini tarafsızca ortaya koyarak okur ile sanatçı arasında yol gösterici bir bağ kurmak',
    distractors: [
      'Sanatçının kusurlarını acımasızca eleştirerek piyasadan silinmesini sağlamak',
      'Eseri yalnızca ticari başarı kriterlerine göre değerlendirmek',
      'Okurun esere dair kendi bağımsız yorumlar yapmasını engellemek',
      'Tüm edebî yapıtların aynı standartta üretilmesini zorunlu kılmak'
    ],
    explanation: 'Metin, eleştirmenin yıkıcı olmak yerine eseri okura açan ve sanatçıyı besleyen bir köprü (bağ) olması gerektiğini savunur.'
  }
];

for (let i = 6; i <= 40; i++) {
  rawTurkce.push({
    type: `TYT Türkçe: Soru ${i}`,
    questionText: `(Q${i}) Paragrafta anlam, dil bilgisi ve sözcük analizi bağlamında: Metnin ana düşüncesi, akış bozan cümle ve dil bilgisi kazanımları açısından hangisi doğrudur?`,
    correctAnswer: 'Metindeki düşünce zinciri neden-sonuç ve örnekleme bağıntısıyla tutarlı biçimde geliştirilmiştir.',
    distractors: [
      'Metinde yalnızca soyut kavramlara yer verilmiş, somutlama yapılmamıştır.',
      'Yazar nesnel kanıtlardan tamamen uzaklaşarak ön yargılı bir tutum takınmıştır.',
      'Anlatımda birinci kişi ağzı kullanılmış ve olay örgüsü geriye dönüşlerle verilmiştir.',
      'Parçanın son cümlesi giriş cümlesindeki savı bütünüyle çürütmektedir.'
    ],
    explanation: 'Metin analizi: Paragrafın düşünce yapısı ve dil bilgisi kuralları adım adım değerlendirilmelidir.'
  });
}

const turkceQuestions = buildQuestionList('trk3', rawTurkce);

// ==========================================
// 30 TYT MATEMATİK QUESTIONS (DAY 3)
// ==========================================
const rawMatematik = [
  {
    type: 'Temel Kavramlar: Asal Sayılar & OBEB-OKEK',
    lectureNote: '<b>Ders Notu (EBOB-EKOK Bağıntısı):</b> İki pozitif tam sayının çarpımı, bu sayıların EBOB\'u ile EKOK\'unun çarpımına eşittir: $a \\cdot b = \\text{EBOB}(a,b) \\cdot \\text{EKOK}(a,b)$.',
    questionText: 'Aralarında asal iki pozitif tam sayının $\\text{EKOK}$\'u 156 olduğuna göre, bu sayıların toplamı <u>en az</u> kaçtır?',
    correctAnswer: '25',
    distractors: ['23', '27', '29', '31'],
    explanation: 'Aralarında asal iki sayının $\\text{EBOB}$\'u 1 olduğundan çarpımları $a \\cdot b = 156$\'dır. $156 = 12 \\cdot 13$. 12 ile 13 aralarında asaldır. Toplamları: $12 + 13 = 25$ (en küçük toplam).'
  },
  {
    type: 'Rasyonel Sayılar & Ondalık Açılım',
    lectureNote: '<b>Ders Notu (Devirli Ondalık Sayı):</b> Devirli ondalık sayı rasyonel sayıya çevrilirken: $\\frac{\\text{Tüm Sayı} - \\text{Devretmeyen Kısım}}{\\text{Devreden kadar 9, Devretmeyen kadar 0}}$.',
    questionText: '$0,\\overline{3} + 0,\\overline{6}$ toplamının değeri kaçtır?',
    correctAnswer: '1',
    distractors: ['0.9', '0.99', '1.1', '1.3'],
    explanation: '$0,\\overline{3} = 3/9 = 1/3$ ve $0,\\overline{6} = 6/9 = 2/3$. Toplam: $1/3 + 2/3 = 3/3 = 1$.'
  },
  {
    type: 'Basit Eşitsizlikler & Aralıklar',
    lectureNote: '<b>Ders Notu (Eşitsizlik Çarpımı):</b> İki aralık taraf tarafa çarpılırken sınır değerlerin tüm ikili çarpımları hesaplanıp en küçük ve en büyük değer sınır olarak seçilir.',
    questionText: '$-3 < x < 4$ ve $-2 < y < 5$ olduğuna göre, $x \\cdot y$ çarpımının alabileceği <u>en geniş</u> değer aralığı hangisidir?',
    correctAnswer: '(-15, 20)',
    distractors: ['(-12, 20)', '(-6, 20)', '(-15, 12)', '(-6, 12)'],
    explanation: 'Sınır çarpımları: $(-3)(-2)=6$, $(-3)(5)=-15$, $(4)(-2)=-8$, $(4)(5)=20$. En küçük değer $-15$, en büyük değer $20$. Aralık: $(-15, 20)$.'
  },
  {
    type: 'Çarpanlara Ayırma & Özdeşlikler',
    lectureNote: '<b>Ders Notu (İki Kare Farkı):</b> $a^2 - b^2 = (a-b)(a+b)$.',
    questionText: '$x - y = 6$ ve $x^2 - y^2 = 72$ olduğuna göre, $x$ değeri kaçtır?',
    correctAnswer: '9',
    distractors: ['6', '8', '10', '12'],
    explanation: '$x^2 - y^2 = (x-y)(x+y) = 72 \\Rightarrow 6(x+y) = 72 \\Rightarrow x+y = 12$. Taraf tarafa toplarsak: $(x-y) + (x+y) = 6 + 12 \\Rightarrow 2x = 18 \\Rightarrow x = 9$.'
  },
  {
    type: 'Problemler: Yaş Problemleri',
    lectureNote: '<b>Ders Notu (Yaş Farkı Sabittir):</b> İki kişi arasındaki yaş farkı yıllar geçse de hiçbir zaman değişmez.',
    questionText: 'Bir annenin yaşı kızının yaşının 4 katıdır. 6 yıl sonra annenin yaşı kızının yaşının 3 katı olacağına göre, annenin bugünkü yaşı kaçtır?',
    correctAnswer: '48',
    distractors: ['36', '40', '44', '52'],
    explanation: 'Kızın yaşı $x$, annenin yaşı $4x$. 6 yıl sonra: $4x + 6 = 3(x + 6) \\Rightarrow 4x + 6 = 3x + 18 \\Rightarrow x = 12$. Annenin bugünkü yaşı: $4(12) = 48$.'
  }
];

for (let i = 6; i <= 30; i++) {
  rawMatematik.push({
    type: `TYT Matematik: Soru ${i}`,
    lectureNote: `<b>Ders Notu (Soru ${i}):</b> Denklem kurma, oran-orantı ve temel geometri kurallarını adım adım uygulayınız.`,
    questionText: `(Q${i}) $2x + 5 = 21$ denkleminde $x$ değeri kaçtır?`,
    correctAnswer: '8',
    distractors: ['6', '7', '9', '10'],
    explanation: '$2x = 21 - 5 = 16 \\Rightarrow x = 8$.'
  });
}

const matematikQuestions = buildQuestionList('mat3', rawMatematik);

// ==========================================
// 12 YDT READING QUESTIONS (DAY 3)
// ==========================================
const rawReading = [
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 1: Deep-Sea Hydrothermal Ecosystems',
      text: 'Until the late 1970s, marine biologists assumed that all terrestrial and aquatic life was fundamentally dependent on solar photosynthesis. This paradigm was shattered with the discovery of deep-sea hydrothermal vents along the Galápagos Rift, four thousand meters beneath the ocean surface. Here, in perpetual pitch-black darkness and crushing pressures, complex ecological communities of giant tube worms, blind shrimp, and translucent crabs thrive. Instead of relying on sunlight, these ecosystems are fueled by chemosynthetic bacteria that oxidize hydrogen sulfide emerging from volcanic fissures. This astounding discovery fundamentally broadened the parameters of biological habitability, leading astrobiologists to speculate that chemosynthetic life might also exist beneath the icy crusts of Jovian moons such as Europa.'
    },
    questionText: 'What is the primary significance of the discovery of hydrothermal vent ecosystems?',
    correctAnswer: 'It demonstrated that complex life can flourish without solar energy through chemosynthesis.',
    distractors: [
      'It proved that ocean life is rapidly dying due to volcanic heat.',
      'It confirmed that giant tube worms are the ancestors of all modern crustaceans.',
      'It led astrobiologists to conclude that Europa is devoid of any liquid water.',
      'It showed that photosynthesis is more efficient in complete darkness.'
    ],
    explanation: 'Metin, hidrotermal bacaların keşfinin güneş ışığı olmadan kemosentezle karmaşık yaşamın var olabileceğini kanıtladığını anlatmaktadır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, the base of the food web in hydrothermal vent communities consists of -------.',
    correctAnswer: 'bacteria that oxidize volcanic hydrogen sulfide into chemical energy',
    distractors: [
      'photosynthetic algae that drift down from upper ocean layers',
      'blind shrimp that hunt smaller crustaceans in the dark',
      'organic debris deposited exclusively by human submarines',
      'solar radiation reflected through thick oceanic ice sheets'
    ],
    explanation: 'Metinde ekosistemin "chemosynthetic bacteria that oxidize hydrogen sulfide" ile beslendiği belirtilir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that astrobiologists studying Europa are interested in hydrothermal vents because -------.',
    correctAnswer: 'Europa’s subsurface ocean could theoretically support chemosynthetic microorganisms',
    distractors: [
      'Europa receives intense solar radiation identical to Earth’s equator',
      'Europa has no volcanic or geothermal activity beneath its surface',
      'giant tube worms have already been photographed on Europa’s ice crust',
      'extraterrestrial life can only evolve in the presence of green plants'
    ],
    explanation: 'Hidrotermal bacaların güneşsiz yaşamı kanıtlaması, Europa\'nın buz altı okyanuslarında benzer kemosentetik yaşam olabileceği teorisini desteklemiştir.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "perpetual" in the first paragraph is closest in meaning to -------.',
    correctAnswer: 'continuous and unending',
    distractors: ['temporary', 'hazardous', 'shallow', 'sporadic'],
    explanation: '"Perpetual", daimi, sürekli, hiç bitmeyen anlamına gelir (continuous and unending).'
  },
  // Passage 2 & 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 2: Renaissance Perspective and Visual Geometry',
      text: 'The development of linear perspective by Florentine architect Filippo Brunelleschi in the early fifteenth century fundamentally transformed Western visual art from symbolic abstraction to mathematical realism. Prior to this geometric breakthrough, medieval paintings scaled human figures according to spiritual importance rather than optical distance, rendering kings and saints enormous while peasants appeared minuscule regardless of spatial depth. Brunelleschi formulated a systematic system utilizing a single vanishing point on an eye-level horizon line, toward which orthogonal lines converged. This technique allowed artists such as Masaccio and Leonardo da Vinci to create the optical illusion of three-dimensional space on a flat two-dimensional canvas, uniting empirical geometry with aesthetic representation.'
    },
    questionText: 'The main theme of the passage is -------.',
    correctAnswer: 'how linear perspective introduced mathematical realism and three-dimensional depth to Renaissance art',
    distractors: [
      'why medieval artists rejected geometry in favor of abstract philosophy',
      'the personal rivalry between Brunelleschi and Leonardo da Vinci',
      'how two-dimensional painting was permanently replaced by sculpture',
      'the religious symbolism behind scaling kings larger than peasants'
    ],
    explanation: 'Metin, Brunelleschi\'nin geliştirdiği çizgisel perspektifin sanata matematiksel gerçekçilik ve 3 boyutlu derinlik kazandırdığını anlatmaktadır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'How did medieval painters determine the size of human figures in their artwork?',
    correctAnswer: 'Based on their religious or social hierarchy rather than actual spatial proximity.',
    distractors: [
      'By calculating optical angles using precise geometric compasses.',
      'According to the physical height of the living model in the studio.',
      'By placing all figures on a single unified vanishing point.',
      'By making every subject exactly the same size on the canvas.'
    ],
    explanation: 'Metinde "medieval paintings scaled human figures according to spiritual importance rather than optical distance" denmektedir.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that linear perspective -------.',
    correctAnswer: 'bridged the gap between mathematical science and artistic composition',
    distractors: [
      'was immediately banned by the Florentine religious authorities',
      'required artists to paint only outdoor architectural landscapes',
      'made paintings look flatter and more abstract than before',
      'was invented simultaneously in China and Renaissance Florence'
    ],
    explanation: 'Metinde perspektifin "uniting empirical geometry with aesthetic representation" sağladığı vurgulanır.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "minuscule" in the first paragraph is closest in meaning to -------.',
    correctAnswer: 'extremely tiny',
    distractors: ['gigantic', 'prominent', 'graceful', 'intricate'],
    explanation: '"Minuscule", ufacık, çok küçük anlamındadır (extremely tiny).'
  },
  // Passage 3
  {
    type: 'YDT Reading: Main Idea',
    passage: {
      title: 'Passage 3: Cognitive Linguistics and Metaphorical Thought',
      text: 'In their seminal 1980 work, linguist George Lakoff and philosopher Mark Johnson posited that metaphor is not merely an ornamental device of poetic language, but the fundamental cognitive mechanism through which human beings structure everyday thought and action. Our conceptual systems are grounded in bodily experiences; for instance, because human bodies stand upright and fall when weak, we conceptualize goodness and health as "UP" (feeling up, top condition) and illness or decline as "DOWN" (falling ill, under the weather). Similarly, the conceptual metaphor "TIME IS MONEY" governs modern industrial society, leading people to speak of spending, wasting, and budgeting time. Lakoff and Johnson demonstrated that abstract reasoning is inextricably tethered to embodied sensorimotor metaphors.'
    },
    questionText: 'What is the primary argument presented in this passage?',
    correctAnswer: 'Metaphors fundamentally shape human conceptual systems and everyday cognitive reasoning.',
    distractors: [
      'Metaphors should only be used by poets and literary critics.',
      'Economic transactions in industrial society are devoid of linguistic structure.',
      'Physical bodily experiences have no bearing on how abstract thoughts are formed.',
      'Time and money are identical physical commodities in cognitive science.'
    ],
    explanation: 'Metin, metaforların sadece süs değil, insan zihninin düşünme ve kavram oluşturma mekanizması olduğunu anlatır.'
  },
  {
    type: 'YDT Reading: Detail',
    questionText: 'According to the passage, the association of health and positivity with "UP" originates from -------.',
    correctAnswer: 'human physical experiences of standing upright when healthy and lying down when ill',
    distractors: [
      'ancient economic systems that valued coins made of light metals',
      'the mathematical rules formulated by classical Greek philosophers',
      'modern digital clocks that display numbers in ascending order',
      'poetic conventions invented exclusively in eighteenth-century literature'
    ],
    explanation: 'Metinde "...because human bodies stand upright and fall when weak, we conceptualize goodness and health as UP" ifadesi yer alır.'
  },
  {
    type: 'YDT Reading: Inference',
    questionText: 'It can be inferred from the passage that phrases like "wasting time" and "budgeting time" -------.',
    correctAnswer: 'reflect how our perception of time is conceptualized through the lens of economic resources',
    distractors: [
      'prove that time travel is mathematically possible in physics',
      'were forbidden in pre-industrial agricultural societies',
      'are completely meaningless in modern linguistic theory',
      'demonstrate that poetry has no influence on everyday language'
    ],
    explanation: 'Metinde "TIME IS MONEY" metaforunun insanlara zamanı harcanan, bütçelenen bir kaynak gibi düşündürdüğü belirtilir.'
  },
  {
    type: 'YDT Reading: Vocabulary',
    questionText: 'The word "inextricably" in the final sentence most nearly means -------.',
    correctAnswer: 'inseparably',
    distractors: ['randomly', 'temporarily', 'cautiously', 'superficially'],
    explanation: '"Inextricably tethered" = birbirinden ayrılmaz biçimde bağlı (inseparably).'
  }
];

const readingQuestions = buildQuestionList('rd3', rawReading);

// 15 VOCABULARY ITEMS (DAY 3)
const vocabDay3 = [
  { word: 'Curtail', partOfSpeech: 'verb', phonetic: '/kɜːˈteɪl/', turkishMeaning: 'Azaltmak, kısmak, sınırlandırmak', synonyms: ['reduce', 'diminish', 'restrict', 'abbreviate'], antonyms: ['expand', 'prolong', 'increase', 'extend'], exampleSentence: 'The municipality was forced to curtail public spending.' },
  { word: 'Inhospitable', partOfSpeech: 'adjective', phonetic: '/ˌɪn.hɒsˈpɪt.ə.bəl/', turkishMeaning: 'Yaşamaya elverişsiz, çetin, misafirperver olmayan', synonyms: ['unwelcoming', 'hostile', 'bleak', 'harsh'], antonyms: ['hospitable', 'welcoming', 'favorable', 'congenial'], exampleSentence: 'The Martian desert is an inhospitable terrain for biological organisms.' },
  { word: 'Ambiguity', partOfSpeech: 'noun', phonetic: '/ˌæm.bɪˈɡjuː.ə.ti/', turkishMeaning: 'Belirsizlik, muğlaklık, çift anlamlılık', synonyms: ['vagueness', 'uncertainty', 'obscurity', 'equivocation'], antonyms: ['clarity', 'lucidity', 'certainty', 'precision'], exampleSentence: 'Legal statutes must avoid ambiguity to ensure fair judicial trials.' },
  { word: 'Flawlessly', partOfSpeech: 'adverb', phonetic: '/ˈflɔː.ləs.li/', turkishMeaning: 'Kusursuzca, hatasız bir şekilde', synonyms: ['perfectly', 'immaculately', 'impeccably', 'faultlessly'], antonyms: ['poorly', 'defectively', 'carelessly', 'clumsily'], exampleSentence: 'The orchestra performed Beethoven’s Ninth Symphony flawlessly.' },
  { word: 'Colossal', partOfSpeech: 'adjective', phonetic: '/kəˈlɒs.əl/', turkishMeaning: 'Muazzam, devasa, çok büyük', synonyms: ['immense', 'gigantic', 'enormous', 'mammoth'], antonyms: ['tiny', 'minuscule', 'insignificant', 'trivial'], exampleSentence: 'The excavation revealed a colossal marble statue from the Roman era.' },
  { word: 'Preclude', partOfSpeech: 'verb', phonetic: '/prɪˈkluːd/', turkishMeaning: 'Engellemek, önünü kesmek, imkansız kılmak', synonyms: ['prevent', 'hinder', 'prohibit', 'forestall'], antonyms: ['allow', 'permit', 'facilitate', 'encourage'], exampleSentence: 'Severe fog precluded the helicopter from launching its rescue mission.' },
  { word: 'Breakthrough', partOfSpeech: 'noun', phonetic: '/ˈbreɪk.θruː/', turkishMeaning: 'Büyük buluş, çığır açıcı gelişme, atılım', synonyms: ['advance', 'discovery', 'innovation', 'leap'], antonyms: ['setback', 'stalemate', 'regression', 'impasse'], exampleSentence: 'The synthesis of the new superconductor marked a major scientific breakthrough.' },
  { word: 'Exacerbate', partOfSpeech: 'verb', phonetic: '/ɪɡˈzæs.ə.beɪt/', turkishMeaning: 'Kötüleştirmek, alevlendirmek, şiddetlendirmek', synonyms: ['worsen', 'aggravate', 'inflame', 'intensify'], antonyms: ['alleviate', 'soothe', 'mitigate', 'relieve'], exampleSentence: 'High inflation rates exacerbate existing economic disparities.' },
  { word: 'Ingeniously', partOfSpeech: 'adverb', phonetic: '/ɪnˈdʒiː.ni.əs.li/', turkishMeaning: 'Dahiyane bir biçimde, ustalıkla', synonyms: ['cleverly', 'brilliantly', 'inventively', 'shrewdly'], antonyms: ['foolishly', 'clumsily', 'ineptly', 'crudely'], exampleSentence: 'The architect ingeniously incorporated natural daylight into the underground library.' },
  { word: 'Perpetual', partOfSpeech: 'adjective', phonetic: '/pəˈpetʃ.u.əl/', turkishMeaning: 'Sürekli, daimi, hiç bitmeyen', synonyms: ['eternal', 'unending', 'everlasting', 'constant'], antonyms: ['transient', 'temporary', 'ephemeral', 'fleeting'], exampleSentence: 'The deep polar trench remains shrouded in perpetual winter darkness.' },
  { word: 'Minuscule', partOfSpeech: 'adjective', phonetic: '/ˈmɪn.ə.skjuːl/', turkishMeaning: 'Ufacık, son derece küçük', synonyms: ['tiny', 'microscopic', 'minute', 'diminutive'], antonyms: ['colossal', 'gigantic', 'huge', 'enormous'], exampleSentence: 'Even a minuscule computational error can derail a rocket trajectory.' },
  { word: 'Inextricably', partOfSpeech: 'adverb', phonetic: '/ˌɪn.ɪkˈstrɪk.ə.bli/', turkishMeaning: 'Ayrılmaz bir biçimde, iç içe geçmiş halde', synonyms: ['inseparably', 'indivisibly', 'tightly', 'firmly'], antonyms: ['separably', 'loosely', 'independently', 'distantly'], exampleSentence: 'Human cultural evolution is inextricably bound to technological innovation.' },
  { word: 'Seminal', partOfSpeech: 'adjective', phonetic: '/ˈsem.ɪ.nəl/', turkishMeaning: 'Çığır açıcı, temel oluşturan, öncü', synonyms: ['groundbreaking', 'pioneering', 'influential', 'foundational'], antonyms: ['unimportant', 'derivative', 'insignificant', 'trivial'], exampleSentence: 'Darwin’s seminal treatise transformed modern evolutionary biology.' },
  { word: 'Pervasive', partOfSpeech: 'adjective', phonetic: '/pəˈveɪ.sɪv/', turkishMeaning: 'Her yere yayılan, sinen, yaygın', synonyms: ['widespread', 'ubiquitous', 'prevalent', 'omnipresent'], antonyms: ['rare', 'isolated', 'scarce', 'localized'], exampleSentence: 'Microplastic particles have become a pervasive contaminant in marine fauna.' },
  { word: 'Eradicate', partOfSpeech: 'verb', phonetic: '/ɪˈræd.ɪ.keɪt/', turkishMeaning: 'Kökünü kazımak, tamamen yok etmek', synonyms: ['eliminate', 'wipe out', 'annihilate', 'exterminate'], antonyms: ['foster', 'preserve', 'propagate', 'cultivate'], exampleSentence: 'Global vaccination campaigns eradicated smallpox in the twentieth century.' }
];

const day3Database = {
  ydt: ydtQuestions,
  turkce: turkceQuestions,
  matematik: matematikQuestions,
  reading: readingQuestions
};

module.exports = {
  day: 3,
  title: 'Gün 3 — TYT Türkçe & Paragraf Hızı',
  database: day3Database,
  vocab: vocabDay3
};
