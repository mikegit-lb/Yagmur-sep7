/*
 * 6 Günlük Sınav Merkezi — özgün, pratik amaçlı soru bankaları
 *
 * Bu dosya resmî ÖSYM sorusu değildir ve ÖSYM ile bağlantılı değildir.
 * Sorular tarayıcıda üretilecek şekilde tutulur; böylece her günün tam seti
 * tek bir doğrulanabilir kaynaktan beslenir.
 */
(function () {
  'use strict';

  const KEYS = ['A', 'B', 'C', 'D', 'E'];
  let generated = 0;

  function rotateOptions(id, answer, distractors) {
    const values = [answer, ...distractors];
    const seed = [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const offset = seed % KEYS.length;
    const options = values.map((text, index) => ({
      key: KEYS[(index + offset) % KEYS.length],
      text
    }));
    return { options, correctAnswer: KEYS[offset] };
  }

  function question(id, type, questionText, answer, distractors, explanation, ruleExplanation, difficulty = 4, tags = [], extra = {}) {
    const rotated = rotateOptions(id, answer, distractors);
    return {
      id,
      type,
      difficulty,
      questionText,
      options: rotated.options,
      correctAnswer: rotated.correctAnswer,
      explanation,
      ruleExplanation,
      tags,
      ...extra
    };
  }

  function bank(day, subject, totalQuestions, timeLimit, categories, questions, extra = {}) {
    return {
      day,
      subject,
      totalQuestions,
      timeLimit,
      categories,
      questions,
      ...extra
    };
  }

  function rows(prefix, type, list, difficulty, tags) {
    return list.map((item, index) => question(
      prefix + String(index + 1).padStart(3, '0'),
      type,
      item[0],
      item[1],
      item[2],
      item[3],
      item[4],
      difficulty,
      tags
    ));
  }

  const tenseRows = [
    ['The coastal observatory _______ its automated archive by the end of next month.', 'will have completed', ['will complete', 'has completed', 'was completing', 'would complete'], 'The action will be finished before a future deadline.', '<b>Kural:</b> <i>By + future time</i> → <i>will have + V3</i>.'],
    ['By the time the ethics committee met, the researchers _______ the consent forms for three weeks.', 'had been revising', ['have revised', 'were revising', 'would revise', 'revised'], 'The action continued for a period before a past reference point.', '<b>Kural:</b> Past reference + duration → <i>had been + V-ing</i>.'],
    ['If the archive _______ the original map, historians would not be debating its authenticity today.', 'had preserved', ['preserved', 'would preserve', 'has preserved', 'were preserving'], 'A past condition is linked to a present result, so this is a mixed conditional.', '<b>Kural:</b> Past condition <i>had + V3</i> + present result <i>would + V</i>.'],
    ['The satellite _______ the storm’s path accurately because its calibration had been checked that morning.', 'predicted', ['has predicted', 'had been predicting', 'would predict', 'predicts'], 'The definite past event is expressed in the Simple Past.', '<b>İpucu:</b> Belirli geçmiş olaylarda ana eylem çoğunlukla Simple Past olur.'],
    ['By 2040, many urban farms _______ closed-loop water systems as standard practice.', 'will have adopted', ['adopt', 'had adopted', 'are adopting', 'would have adopted'], 'Adoption will be complete by a future date.', '<b>Kural:</b> Gelecekteki bir tarihten önce tamamlanma → Future Perfect.'],
    ['Since the laboratory introduced the new protocol, contamination rates _______ considerably.', 'have fallen', ['fell', 'are falling', 'had fallen', 'will fall'], 'The change began in the past and continues to matter now.', '<b>Kural:</b> <i>Since + past</i> → çoğunlukla <i>have/has + V3</i>.'],
    ['While the engineers _______ the bridge, an unexpected tremor damaged the monitor.', 'were inspecting', ['inspected', 'have inspected', 'had inspected', 'will inspect'], 'The inspection was in progress when the short event occurred.', '<b>Kural:</b> <i>While + was/were V-ing</i>.'],
    ['The committee _______ the proposal twice before it approved the revised version.', 'had examined', ['examines', 'has examined', 'was examining', 'would examine'], 'The examinations preceded another past event.', '<b>Kural:</b> Geçmişteki iki olaydan önce olan → <i>had + V3</i>.'],
    ['This time next year, the medical team _______ a mobile clinic in three rural districts.', 'will be operating', ['operates', 'will have operated', 'operated', 'would operate'], 'The action will be in progress at a specific future time.', '<b>Kural:</b> Gelecekte belirli anda devam eden eylem → Future Continuous.'],
    ['No sooner _______ the revised timetable than several students reported a conflict.', 'had the school published', ['the school published', 'has the school published', 'did the school publish', 'the school had published'], 'No sooner requires inversion and the earlier action takes Past Perfect.', '<b>Kural:</b> <i>No sooner had + subject + V3 ... than ...</i>.'],
    ['The archaeologists said that they _______ the chamber only after removing three layers of sediment.', 'had entered', ['enter', 'have entered', 'would enter', 'were entering'], 'The entry happened before the past reporting verb.', '<b>Kural:</b> Reported speech’te önce gerçekleşen olay → Past Perfect.'],
    ['If the sensor had not failed, the technicians _______ the leak before dawn.', 'would have detected', ['detected', 'will detect', 'would detect', 'had detected'], 'Both the condition and its result refer to an unrealised past.', '<b>Kural:</b> <i>If + had V3</i> → <i>would have V3</i>.'],
    ['The journal _______ three special issues on climate adaptation since 2022.', 'has published', ['published', 'is publishing', 'had published', 'will publish'], 'The period from 2022 to the present is unfinished.', '<b>Kural:</b> Bitmemiş zaman aralığı → Present Perfect.'],
    ['When the power returned, the backup generator _______ for almost six hours.', 'had been running', ['was running', 'has run', 'ran', 'would run'], 'The duration continued up to a past event.', '<b>Kural:</b> Geçmiş referansa kadar süre → <i>had been V-ing</i>.'],
    ['The curator _______ the fragile manuscript when the alarm suddenly sounded.', 'was examining', ['examined', 'has examined', 'had examined', 'will examine'], 'The examination forms the background to the sudden alarm.', '<b>Kural:</b> Uzun arka plan eylemi + kısa olay → Past Continuous.'],
    ['By the time the exhibition opens, the conservators _______ the damaged paintings.', 'will have restored', ['restore', 'will restore', 'had restored', 'are restoring'], 'Restoration will be complete before the opening.', '<b>Kural:</b> <i>By the time + present</i> → Future Perfect.'],
    ['The analyst realised that the figures _______ misreported in the first draft.', 'had been', ['were being', 'have been', 'will be', 'would be'], 'The incorrect reporting preceded the analyst’s realisation.', '<b>Kural:</b> Önceki geçmiş olayın edilgen biçimi → <i>had been + V3</i>.'],
    ['If the city invested in shade corridors now, summer temperatures _______ less dangerous for pedestrians.', 'would become', ['will have become', 'became', 'would have become', 'had become'], 'A present hypothetical condition has a future-oriented result.', '<b>Kural:</b> <i>If + past</i> → <i>would + V1</i>.'],
    ['The research team _______ data from 18 sites so far, but two locations remain inaccessible.', 'has collected', ['collected', 'was collecting', 'had collected', 'will collect'], 'So far describes an unfinished period up to now.', '<b>Kural:</b> <i>So far/up to now</i> → Present Perfect.'],
    ['After the negotiators _______ a compromise, the transport strike came to an end.', 'had reached', ['reach', 'have reached', 'were reaching', 'would reach'], 'The compromise was reached before the strike ended.', '<b>Kural:</b> Geçmişte sıra ilişkisini belirginleştirmek için <i>after + had V3</i>.']
  ];

  const modalRows = [
    ['The unusual silence in the server room _______ have been caused by a power-management fault.', 'must', ['should', 'would', 'need', 'used to'], 'The evidence supports a strong past deduction: must have been caused.', '<b>Kural:</b> Güçlü geçmiş çıkarımı → <i>must have + V3</i>.'],
    ['You _______ have submitted the consent form yesterday; the deadline was extended until Friday.', 'needn’t', ['mustn’t', 'couldn’t', 'wouldn’t', 'shouldn’t'], 'The action was unnecessary, expressed as needn’t have submitted.', '<b>Kural:</b> Yapılmış ama gereksiz eylem → <i>needn’t have + V3</i>.'],
    ['The witness _______ have seen the event clearly because the security lights were off.', 'couldn’t', ['mustn’t', 'needn’t', 'shouldn’t', 'wouldn’t'], 'The conditions make clear observation impossible.', '<b>Kural:</b> Geçmişte imkânsızlık → <i>couldn’t have + V3</i>.'],
    ['The interns _______ to label every specimen before storing it in the cold room.', 'are supposed', ['would rather', 'had better', 'used', 'might'], 'The protocol creates an expectation or duty.', '<b>Kural:</b> Beklenti/yükümlülük → <i>be supposed to + V1</i>.'],
    ['The rescue team _______ reach the stranded hikers before the weather worsened.', 'was able to', ['could have', 'would rather', 'needn’t have', 'must have'], 'This describes success in one specific past situation.', '<b>Kural:</b> Tek bir geçmiş başarı → <i>was/were able to + V1</i>.'],
    ['You _______ have checked the units before publishing the table; the error changes the conclusion.', 'should', ['may', 'must', 'would', 'need'], 'The speaker criticises an action that should have happened.', '<b>Kural:</b> Geçmiş eleştiri → <i>should have + V3</i>.'],
    ['The old turbine _______ have been producing that noise; it had been disconnected for months.', 'couldn’t', ['must', 'should', 'might', 'would'], 'A disconnected turbine could not have produced the sound.', '<b>Kural:</b> Geçmişte imkânsızlık → <i>couldn’t have been + V-ing</i>.'],
    ['We _______ rather postpone the launch than release an unstable version.', 'would', ['had', 'could', 'should', 'might'], 'The sentence expresses a preference between two actions.', '<b>Kural:</b> Tercih → <i>would rather + V1 + than + V1</i>.'],
    ['The maintenance crew _______ better replace the filter before the pressure rises again.', 'had', ['would', 'could', 'used', 'might'], 'Had better gives urgent advice or a warning.', '<b>Kural:</b> Güçlü tavsiye → <i>had better + V1</i>.'],
    ['The missing samples _______ have been misplaced during the overnight transfer.', 'may', ['mustn’t', 'needn’t', 'would rather', 'had better'], 'The available evidence suggests possibility, not certainty.', '<b>Kural:</b> Geçmiş olasılık → <i>may/might/could have + V3</i>.'],
    ['The policy requires that all visitors _______ their badges at the exit.', 'return', ['returns', 'returned', 'returning', 'to return'], 'After require that, formal English permits the bare infinitive.', '<b>Kural:</b> <i>require that + subject + V1</i>.'],
    ['The device _______ have overheated, judging from the melted insulation around the battery.', 'must', ['shouldn’t', 'needn’t', 'would rather', 'used to'], 'Melted insulation is strong evidence of overheating.', '<b>Kural:</b> Kanıta dayalı çıkarım → <i>must have + V3</i>.'],
    ['The pilot _______ have landed safely if the runway lights had remained on.', 'could', ['must', 'needn’t', 'shouldn’t', 'would rather'], 'The unrealised condition allows a possible past result.', '<b>Kural:</b> Gerçekleşmemiş geçmiş olasılık → <i>could have + V3</i>.'],
    ['You _______ have brought a printed map; the navigation app worked perfectly offline.', 'didn’t need to', ['needn’t', 'mustn’t', 'couldn’t', 'wouldn’t'], 'The speaker says the action was not necessary; the sentence does not assert it happened.', '<b>Kural:</b> Gerekli olmama → <i>didn’t need to + V1</i>; yapılmış gereksiz eylem → <i>needn’t have + V3</i>.'],
    ['The committee _______ have overlooked the conflict of interest, since it was listed on the first page.', 'can’t', ['needn’t', 'wouldn’t', 'shouldn’t', 'used to'], 'The explicit first-page entry makes overlooking it highly implausible.', '<b>Kural:</b> Güçlü olumsuz geçmiş çıkarımı → <i>can’t have + V3</i>.']
  ];

  const inversionRows = [
    ['Not only _______ the new model reduce energy use, but it also improves battery life.', 'does', ['is', 'has', 'did', 'would'], 'Not only at the beginning triggers auxiliary inversion.', '<b>Kural:</b> <i>Not only + auxiliary + subject + verb</i>.'],
    ['Rarely _______ a policy generated such immediate public support.', 'has', ['does', 'is', 'had', 'would'], 'Rarely is a negative-frequency adverb and requires inversion.', '<b>Kural:</b> <i>Rarely + has/have + subject + V3</i>.'],
    ['Should the measurements _______ inconsistent, the experiment will be repeated.', 'prove', ['proves', 'proving', 'to prove', 'proved'], 'Should inversion is followed by the bare infinitive.', '<b>Kural:</b> <i>Should + subject + V1</i>.'],
    ['Had the archive _______ a second copy, the files would not have been lost.', 'kept', ['keep', 'kept keeping', 'to keep', 'been keep'], 'Had inversion replaces if and requires a past participle.', '<b>Kural:</b> <i>Had + subject + V3</i>.'],
    ['Only after the final audit _______ the board approve the merger.', 'did', ['has', 'was', 'would', 'had'], 'Only after at the front makes the main clause inverted.', '<b>Kural:</b> <i>Only after + clause + did + subject + V1</i>.'],
    ['Under no circumstances _______ personal data be copied to an unencrypted drive.', 'should', ['does', 'has', 'would', 'is'], 'A negative limiting phrase at the front places the auxiliary first.', '<b>Kural:</b> Negatif sınırlama ifadeleri inversion gerektirir.'],
    ['Hardly had the lecture begun _______ the fire alarm interrupted it.', 'when', ['than', 'that', 'while', 'as'], 'Hardly pairs with when.', '<b>Kural:</b> <i>Hardly/Scarcely ... when</i>; <i>No sooner ... than</i>.'],
    ['Were the river _______ further, the farms downstream would face severe shortages.', 'to recede', ['receded', 'recedes', 'receding', 'have receded'], 'Were ... to expresses a hypothetical future condition.', '<b>Kural:</b> <i>Were + subject + to V1</i>.'],
    ['Seldom _______ the two research groups reached such a precise agreement.', 'have', ['do', 'did', 'are', 'would'], 'Seldom at the front requires the auxiliary before the subject.', '<b>Kural:</b> Seyrek sıklık zarfı başta → inversion.'],
    ['Not until the samples were reanalysed _______ the source of the error become clear.', 'did', ['has', 'was', 'would', 'had'], 'Not until is followed by inversion in the main clause.', '<b>Kural:</b> <i>Not until + clause + did + subject + V1</i>.'],
    ['Little _______ the team know that the apparently minor change would affect the model.', 'did', ['does', 'had', 'was', 'would'], 'Little did expresses lack of knowledge at a past point.', '<b>Kural:</b> <i>Little did + subject + V1</i>.'],
    ['Only by comparing the two datasets _______ the researchers identify the hidden bias.', 'could', ['did', 'have', 'were', 'would have'], 'Only by focuses the method and brings the modal forward.', '<b>Kural:</b> <i>Only by + V-ing + could + subject + V1</i>.'],
    ['No sooner had the server restarted _______ the warning messages appeared again.', 'than', ['when', 'that', 'while', 'as'], 'No sooner pairs with than.', '<b>Kural:</b> <i>No sooner ... than</i>.'],
    ['Never before _______ the committee faced such a narrow voting margin.', 'had', ['did', 'has', 'was', 'would'], 'Never before requires inversion and Past Perfect here.', '<b>Kural:</b> <i>Never before had + subject + V3</i>.'],
    ['Were it not for the backup server, the hospital _______ its patient records.', 'would lose', ['lost', 'will lose', 'would have lost', 'had lost'], 'Were it not for expresses a present hypothetical condition.', '<b>Kural:</b> <i>Were it not for + noun, subject would + V1</i>.']
  ];

  const reducedRows = [
    ['The samples _______ in sterile containers were transferred to the central laboratory.', 'collected', ['collecting', 'to collect', 'were collected', 'having collect'], 'That were collected is reduced to the passive participle collected.', '<b>Kural:</b> Edilgen relative clause → V3.'],
    ['The engineers _______ the prototype recorded every fluctuation in temperature.', 'testing', ['tested', 'to test', 'were tested', 'having tested'], 'Who were testing becomes the active -ing participle testing.', '<b>Kural:</b> Etken relative clause → V-ing.'],
    ['The documents _______ by the panel will be archived after the hearing.', 'reviewed', ['reviewing', 'to review', 'were reviewed', 'having review'], 'Which were reviewed is reduced to reviewed.', '<b>Kural:</b> <i>which were + V3</i> → V3.'],
    ['______ the initial results, the team repeated the trial with a larger sample.', 'Having questioned', ['Questioned', 'To question', 'Being questioned', 'Having question'], 'The questioning happened before the decision to repeat the trial.', '<b>Kural:</b> Önce tamamlanan etken eylem → <i>Having + V3</i>.'],
    ['The bridge _______ across the valley connects the two research stations.', 'built', ['building', 'to build', 'was built', 'having build'], 'That was built is a passive reduced clause.', '<b>Kural:</b> Pasif reduced relative → V3.'],
    ['The technicians _______ beside the reactor must wear dosimeters.', 'working', ['worked', 'to work', 'were worked', 'having work'], 'Who are working is reduced to working.', '<b>Kural:</b> Devam eden etken eylem → V-ing.'],
    ['The first study _______ the effect of sleep on memory used wearable sensors.', 'to examine', ['examining', 'examined', 'was examined', 'having examined'], 'The first study that examined can be reduced to the first study to examine.', '<b>Kural:</b> <i>the first/only + to V1</i> reduced relative.'],
    ['______ by independent reviewers, the report gained credibility.', 'Having been checked', ['Checking', 'Checked it', 'To check', 'Being check'], 'The checking was completed before the report gained credibility.', '<b>Kural:</b> Tamamlanmış pasif öncelik → <i>having been + V3</i>.'],
    ['The results _______ in the appendix support the author’s conclusion.', 'presented', ['presenting', 'to present', 'were presenting', 'having present'], 'Which are presented becomes presented.', '<b>Kural:</b> <i>which are + V3</i> → V3.'],
    ['The students _______ for the scholarship submitted a research proposal.', 'applying', ['applied', 'to apply', 'were applied', 'having applied'], 'Who applied/are applying is represented by the active participle applying.', '<b>Kural:</b> Özne eylemi yapıyorsa → V-ing.'],
    ['The protocol _______ to prevent contamination was displayed near the entrance.', 'designed', ['designing', 'to design', 'was designing', 'having design'], 'That was designed is passively reduced to designed.', '<b>Kural:</b> Nesne konumundaki isim + pasif eylem → V3.'],
    ['The researcher _______ the interview notes noticed a recurring theme.', 'analysing', ['analysed', 'to analyse', 'was analysed', 'having analyse'], 'Who was analysing is reduced to analysing.', '<b>Kural:</b> Eş zamanlı etken relative → V-ing.'],
    ['The only device _______ the signal is the older receiver.', 'to detect', ['detecting', 'detected', 'was detected', 'having detected'], 'After the only device, infinitive reduction is natural.', '<b>Kural:</b> <i>the only + to V1</i>.'],
    ['The candidates _______ for the oral exam waited outside the hall.', 'selected', ['selecting', 'to select', 'were selecting', 'having select'], 'Who were selected is reduced to selected.', '<b>Kural:</b> Pasif relative clause → V3.'],
    ['______ the safety checklist, the operator switched on the machine.', 'Having completed', ['Completing it', 'Completed', 'To completing', 'Being completed'], 'Completion came before switching on the machine.', '<b>Kural:</b> Öncelik bildiren etken participle → <i>having + V3</i>.']
  ];

  const nounRows = [
    ['The committee has not decided _______ the revised protocol should be adopted immediately.', 'whether', ['what', 'which', 'whose', 'how much'], 'Whether introduces an indirect yes/no alternative.', '<b>Kural:</b> Dolaylı evet/hayır seçimi → <i>whether</i>.'],
    ['The director explained _______ the archive had remained closed for so long.', 'why', ['what', 'whose', 'which', 'that'], 'Why asks for the reason in an embedded question.', '<b>Kural:</b> Noun clause içinde soru düzeni değil, düz cümle düzeni kullanılır.'],
    ['The report confirms _______ the treatment reduced recovery time.', 'that', ['what', 'whether', 'whose', 'how'], 'That introduces a content clause functioning as the object of confirms.', '<b>Kural:</b> Mental/reporting verb + content → <i>that-clause</i>.'],
    ['The guide shows visitors _______ to reach the observation deck safely.', 'how', ['that', 'whether', 'whose', 'what if'], 'How + to infinitive expresses the method.', '<b>Kural:</b> <i>wh-word + to V1</i> can function as a noun clause.'],
    ['It is essential that every applicant _______ the declaration before the interview.', 'sign', ['signs', 'signed', 'signing', 'to sign'], 'Essential that takes the formal bare infinitive.', '<b>Kural:</b> <i>It is essential that + subject + V1</i>.'],
    ['The question is _______ the new evidence will alter the verdict.', 'whether', ['what', 'which', 'whose', 'how many'], 'The clause asks whether the verdict will change or not.', '<b>Kural:</b> <i>whether ... or not</i> expresses an alternative.'],
    ['What distinguishes the two models _______ their treatment of uncertainty.', 'is', ['are', 'be', 'have', 'were'], 'The subject clause What distinguishes the models is singular.', '<b>Kural:</b> <i>What-clause</i> tek bir kavram gibi değerlendirilir.'],
    ['The researchers recommended that the trial _______ repeated under colder conditions.', 'be', ['is', 'was', 'being', 'to be'], 'Recommended that is followed by a subjunctive bare form.', '<b>Kural:</b> <i>recommend that + subject + V1</i>; pasifte <i>be + V3</i>.'],
    ['The scientist could not remember _______ had first reported the anomaly.', 'who', ['which', 'whose', 'that', 'what if'], 'Who is the subject of the embedded question.', '<b>Kural:</b> Özne soruluyorsa <i>who</i> kullanılır; ardından yardımcı fiil öne geçmez.'],
    ['The fact _______ the sample survived the heat surprised the entire team.', 'that', ['what', 'which', 'whether', 'whose'], 'That introduces a content clause after the noun fact.', '<b>Kural:</b> <i>the fact that + clause</i>.']
  ];

  const prepRows = [
    ['The committee insisted _______ seeing the raw measurements before voting.', 'on', ['at', 'to', 'for', 'with'], 'Insist is followed by on + noun or gerund.', '<b>Kural:</b> <i>insist on + noun/V-ing</i>.'],
    ['Several coastal villages are vulnerable _______ sudden storm surges.', 'to', ['for', 'with', 'at', 'from'], 'Vulnerable collocates with to.', '<b>Kural:</b> <i>vulnerable to</i>.'],
    ['The new schedule is conducive _______ sustained concentration.', 'to', ['for', 'with', 'at', 'on'], 'Conducive is followed by to.', '<b>Kural:</b> <i>conducive to</i>.'],
    ['The policy is detrimental _______ small businesses with limited reserves.', 'to', ['for', 'of', 'with', 'at'], 'Detrimental collocates with to.', '<b>Kural:</b> <i>detrimental to</i>.'],
    ['The final cost was accounted _______ by unexpected transport charges.', 'for', ['to', 'with', 'on', 'of'], 'Account for means explain or constitute.', '<b>Kural:</b> <i>account for</i> = açıklamak/oluşturmak.'],
    ['The decline in soil quality stems _______ repeated over-irrigation.', 'from', ['of', 'to', 'with', 'at'], 'Stem from means originate from.', '<b>Kural:</b> <i>stem from</i> = kaynaklanmak.'],
    ['The institute carried _______ a six-month survey of commuter behaviour.', 'out', ['on', 'in', 'up', 'over'], 'Carry out means perform or conduct.', '<b>Kural:</b> <i>carry out</i> = yürütmek.'],
    ['The revised timetable makes _______ for the lost laboratory hours.', 'up', ['out', 'for', 'with', 'into'], 'Make up for means compensate for.', '<b>Kural:</b> <i>make up for</i> = telafi etmek.'],
    ['The committee refrained _______ publishing the preliminary figures.', 'from', ['to', 'of', 'with', 'at'], 'Refrain is followed by from + gerund.', '<b>Kural:</b> <i>refrain from + V-ing</i>.'],
    ['All contractors must comply _______ the laboratory’s safety code.', 'with', ['to', 'for', 'on', 'at'], 'Comply collocates with with.', '<b>Kural:</b> <i>comply with</i>.'],
    ['The treatment is associated _______ a lower rate of recurrence.', 'with', ['to', 'for', 'on', 'at'], 'Associate is followed by with in this meaning.', '<b>Kural:</b> <i>be associated with</i>.'],
    ['The interns were responsible _______ cataloguing the incoming samples.', 'for', ['of', 'to', 'with', 'at'], 'Responsible is followed by for + gerund.', '<b>Kural:</b> <i>responsible for + V-ing</i>.'],
    ['The old bridge was in need _______ urgent structural repairs.', 'of', ['for', 'to', 'with', 'at'], 'The fixed phrase is in need of.', '<b>Kural:</b> <i>in need of + noun</i>.'],
    ['The new sensor is prone _______ overheating when exposed to dust.', 'to', ['for', 'of', 'with', 'at'], 'Prone is followed by to.', '<b>Kural:</b> <i>prone to + noun/V-ing</i>.'],
    ['The sealed chamber is immune _______ ordinary fluctuations in humidity.', 'to', ['from', 'for', 'with', 'at'], 'Immune collocates with to.', '<b>Kural:</b> <i>immune to</i>.']
  ];

  const connectorRows = [
    ['The trial was expensive; ________, it produced data that no cheaper method could provide.', 'nevertheless', ['consequently', 'similarly', 'otherwise', 'therefore'], 'The second clause contrasts with the expectation created by the first.', '<b>Kural:</b> Beklenmeyen zıtlık → <i>nevertheless/however</i>.'],
    ['The control group received no intervention; ________, its data were essential for comparison.', 'however', ['consequently', 'in addition', 'for instance', 'therefore'], 'However introduces a contrast.', '<b>Kural:</b> Zıtlık bağlacı iki fikir arasındaki yön değişimini gösterir.'],
    ['The river level fell below the safety mark; ________, shipping was suspended.', 'consequently', ['nevertheless', 'in contrast', 'similarly', 'although'], 'The suspension is the result of the low level.', '<b>Kural:</b> Sonuç → <i>consequently/therefore</i>.'],
    ['The northern route is shorter. ________, it is closed during winter.', 'Nevertheless', ['For example', 'Similarly', 'As a result', 'In addition'], 'The second sentence contrasts with the advantage of being shorter.', '<b>Kural:</b> Cümle başında zıtlık → <i>Nevertheless</i>.'],
    ['The first model uses local data, ________ the second relies on satellite readings.', 'whereas', ['because', 'therefore', 'so that', 'unless'], 'Whereas directly contrasts two subjects or methods.', '<b>Kural:</b> İki unsuru karşılaştıran zıtlık → <i>whereas</i>.'],
    ['The survey included rural participants; ________, the urban sample was smaller.', 'in contrast', ['as a result', 'for this reason', 'otherwise', 'in addition'], 'In contrast signals an opposing comparison.', '<b>Kural:</b> Karşıt karşılaştırma → <i>in contrast</i>.'],
    ['The funding was delayed. ________, the fieldwork had to begin two weeks later.', 'as a result', ['in contrast', 'nevertheless', 'likewise', 'for example'], 'The delayed fieldwork follows from delayed funding.', '<b>Kural:</b> Neden-sonuç ilişkisi → <i>as a result</i>.'],
    ['The method is cheap and, ________, it requires little specialist equipment.', 'moreover', ['otherwise', 'instead', 'nevertheless', 'consequently'], 'Moreover adds a supporting point.', '<b>Kural:</b> Ek bilgi → <i>moreover/furthermore</i>.'],
    ['The sample was small; ________, the pattern was consistent across all sites.', 'even so', ['for instance', 'therefore', 'similarly', 'in addition'], 'Even so contrasts with the limitation.', '<b>Kural:</b> Sınırlamaya rağmen → <i>even so</i>.'],
    ['The instructions were translated into three languages ________ every participant could follow the procedure.', 'so that', ['whereas', 'although', 'unless', 'in contrast'], 'So that introduces purpose.', '<b>Kural:</b> Amaç → <i>so that + clause</i>.']
  ];

  const formationRows = [
    ['The committee demanded greater _______ before approving the investment. (TRANSPARENT)', 'transparency', ['transparently', 'transparent', 'transparence', 'untransparent'], 'The noun transparency is needed after greater.', '<b>Kural:</b> Sıfatı isim yapan yaygın ek → <i>-y</i>.'],
    ['The policy’s long-term _______ remains uncertain. (EFFECTIVE)', 'effectiveness', ['effectively', 'effective', 'effect', 'ineffective'], 'A noun naming a quality is required.', '<b>Kural:</b> <i>-ness</i> quality noun oluşturur.'],
    ['The witness gave a remarkably _______ account of the event. (DETAIL)', 'detailed', ['detail', 'detailing', 'detailly', 'undetail'], 'An adjective modifies account.', '<b>Kural:</b> İsimden önce niteleme için adjective gerekir.'],
    ['The report was criticised for its _______ use of historical evidence. (SELECT)', 'selective', ['selection', 'selectively', 'select', 'selectiveness'], 'Selective is the adjective modifying use.', '<b>Kural:</b> <i>-ive</i> çoğunlukla sıfat türetir.'],
    ['The new material is highly _______ to moisture. (RESIST)', 'resistant', ['resistance', 'resistively', 'resist', 'irresistibly'], 'Resistant is the adjective used with to.', '<b>Kural:</b> <i>resistant to</i> kalıp ifadedir.'],
    ['The researchers questioned the _______ of the initial estimate. (RELIABLE)', 'reliability', ['reliably', 'reliable', 'reliance', 'unreliably'], 'Reliability is the noun naming the quality.', '<b>Kural:</b> <i>-ity</i> ile sıfattan isim yapılabilir.'],
    ['The intervention was designed to _______ pressure on emergency services. (MINIMUM)', 'minimise', ['minimum', 'minimal', 'minimally', 'minimisation'], 'After to, the base verb minimise is required.', '<b>Kural:</b> <i>to + V1</i>.'],
    ['The speaker’s argument was persuasive because it was supported by _______ evidence. (EMPIRIC)', 'empirical', ['empiricism', 'empirically', 'empire', 'unempirical'], 'Empirical is the adjective modifying evidence.', '<b>Kural:</b> İsimden önce adjective gerekir.'],
    ['The project’s unexpected _______ created a need for more staff. (EXPAND)', 'expansion', ['expansive', 'expanded', 'expansively', 'expandable'], 'Expansion is the noun naming the process.', '<b>Kural:</b> Fiilden süreç adı → çoğunlukla <i>-sion</i>.'],
    ['The results should be interpreted _______ rather than as proof of causation. (CAUTION)', 'cautiously', ['caution', 'cautious', 'cautiousness', 'uncaution'], 'An adverb modifies interpreted.', '<b>Kural:</b> Fiili niteleyen sözcük adverb olmalıdır.']
  ];

  const restatementRows = [
    ['Unless the sensor is recalibrated, the readings will remain unreliable.', 'If the sensor is not recalibrated, the readings will remain unreliable.', ['Although the sensor is recalibrated, the readings will remain unreliable.', 'If the readings improve, the sensor will not be recalibrated.', 'The sensor was recalibrated because the readings were reliable.', 'The readings will improve whether or not the sensor is recalibrated.'], 'Unless means if not; the time and result are unchanged.', '<b>Kural:</b> <i>Unless + affirmative clause</i> = <i>If + negative clause</i>.'],
    ['Although the procedure is time-consuming, it produces highly consistent results.', 'Despite being time-consuming, the procedure produces highly consistent results.', ['Because it is quick, the procedure produces inconsistent results.', 'The procedure produces results only when it is shortened.', 'The procedure is time-consuming, so it cannot produce consistent results.', 'If the procedure were consistent, it would not take time.'], 'Although + clause can become despite + gerund while preserving contrast.', '<b>Kural:</b> <i>Although + clause</i> → <i>despite + V-ing/noun</i>.'],
    ['The more carefully the data are cleaned, the more reliable the model becomes.', 'As data cleaning becomes more careful, the model becomes more reliable.', ['The model becomes less reliable when the data are cleaned carefully.', 'The data are cleaned because the model is already reliable.', 'The model and the data are equally reliable regardless of cleaning.', 'Careful cleaning makes the model run more quickly but not more reliably.'], 'The proportional relationship is preserved.', '<b>Kural:</b> <i>The more ..., the more ...</i> → <i>as ... becomes ..., ... becomes ...</i>.'],
    ['It was only after the second trial that the researchers accepted the result.', 'The researchers did not accept the result until the second trial.', ['The researchers accepted the result before either trial.', 'The second trial was cancelled after the result was accepted.', 'The researchers rejected the result because there was a second trial.', 'The result was accepted by a different team before the second trial.'], 'Only after X that Y means Y did not happen until X.', '<b>Kural:</b> <i>It was only after X that Y</i> = <i>Y did not ... until X</i>.'],
    ['Owing to a shortage of fuel, the ferry service was reduced.', 'The ferry service was reduced because fuel was scarce.', ['The ferry service caused a shortage of fuel.', 'Fuel became scarce after the ferry service was expanded.', 'The ferry service was reduced despite abundant fuel.', 'The ferry service and fuel supply were unrelated.'], 'Owing to introduces the cause; because preserves it.', '<b>Kural:</b> <i>Owing to + noun</i> = <i>because + clause</i>.'],
    ['That the archive survived the flood is widely recognised.', 'It is widely recognised that the archive survived the flood.', ['The archive was recognised because it caused the flood.', 'No one knows whether the archive survived the flood.', 'The flood was widely recognised by the archive.', 'The archive survived only after recognition.'], 'The that-clause can be moved after anticipatory it.', '<b>Kural:</b> Subject clause → <i>It is ... that-clause</i>.'],
    ['Nothing is as effective as early intervention in preventing recurrence.', 'Early intervention is the most effective measure for preventing recurrence.', ['Early intervention is less effective than every other measure.', 'Recurrence prevents early intervention from being effective.', 'Only late intervention can prevent recurrence.', 'Early intervention is effective only after recurrence.'], 'The negative comparison expresses a superlative meaning.', '<b>Kural:</b> <i>Nothing is as ... as X</i> ≈ <i>X is the most ...</i>.'],
    ['Had it not been for the backup generator, the laboratory would have closed.', 'The laboratory remained open because it had a backup generator.', ['The laboratory closed before the backup generator was installed.', 'The backup generator caused the laboratory to close.', 'The laboratory would have stayed open without any generator.', 'The laboratory was closed to protect the generator.'], 'Had it not been for means if it had not been for; the implied fact is that the generator existed and helped.', '<b>Kural:</b> <i>Had it not been for X</i> → <i>Without X</i> in a past unreal conditional.'],
    ['As the sample size increased, the margin of error decreased.', 'The larger the sample size became, the smaller the margin of error became.', ['A larger sample increased the margin of error.', 'The margin of error was unrelated to sample size.', 'The sample size decreased while the error margin increased.', 'The error margin was fixed before the sample was collected.'], 'The two linked changes are preserved in the double comparative.', '<b>Kural:</b> Orantılı değişim → <i>the + comparative ..., the + comparative ...</i>.'],
    ['Notwithstanding the initial setback, the team completed the fieldwork on time.', 'In spite of the initial setback, the team completed the fieldwork on time.', ['The team completed the fieldwork because there was no setback.', 'The setback prevented the team from completing the work.', 'The fieldwork was delayed until the setback ended.', 'The team ignored the fieldwork and studied the setback.'], 'Notwithstanding and in spite of both introduce contrast.', '<b>Kural:</b> <i>Notwithstanding</i> = <i>in spite of/despite</i>.']
  ];

  function day2() {
    const questions = [
      ...rows('ydt2-t-', 'Tenses: Mixed & Advanced', tenseRows, 5, ['tenses', 'time-sequence']),
      ...rows('ydt2-m-', 'Modals: Perfect & Semi-modals', modalRows, 4, ['modals', 'perfect-modals']),
      ...rows('ydt2-i-', 'Inversion: Negative Adverbials & Conditionals', inversionRows, 5, ['inversion', 'conditionals']),
      ...rows('ydt2-r-', 'Reduced Relative Clauses & Participles', reducedRows, 4, ['reduced-clauses', 'participles']),
      ...rows('ydt2-n-', 'Noun Clauses & Reported Speech', nounRows, 3, ['noun-clauses', 'reported-speech']),
      ...rows('ydt2-p-', 'Prepositions & Phrasal Verbs', prepRows, 4, ['prepositions', 'phrasal-verbs']),
      ...rows('ydt2-c-', 'Connectors & Cohesion', connectorRows, 3, ['connectors', 'cohesion']),
      ...rows('ydt2-w-', 'Word Formation', formationRows, 4, ['word-formation']),
      ...rows('ydt2-s-', 'Restatement / Paraphrase', restatementRows, 5, ['restatement', 'paraphrase'])
    ];
    return bank(2, 'YDT İngilizce Derinlemesine', 120, 9000, {
      'tenses-advanced': 20,
      'modals-perfect': 15,
      inversion: 15,
      'reduced-clauses': 15,
      'noun-clauses': 10,
      'prepositions-phrasal': 15,
      connectors: 10,
      'word-formation': 10,
      restatement: 10
    }, questions, { note: 'Özgün pratik içeriğidir; resmî sınav sorusu değildir.' });
  }

  window.YKS_QUESTION_BANKS = window.YKS_QUESTION_BANKS || {};
  window.YKS_QUESTION_BANKS.day2 = day2();

  const trMainRows = [
    ['Kütüphaneler artık yalnızca kitap ödünç verilen yerler değildir. Sessiz çalışma alanları, dijital arşivler ve ortak üretim atölyeleri sayesinde farklı ihtiyaçlara cevap verirler. Bu parçanın ana düşüncesi aşağıdakilerden hangisidir?', 'Kütüphaneler, değişen kullanıcı ihtiyaçlarına göre çok işlevli merkezlere dönüşmektedir.', ['Kütüphaneler yalnızca sessiz çalışma için kullanılmalıdır.', 'Dijital arşivler basılı kitapların yerini tamamen almıştır.', 'Atölye çalışmaları kütüphanelerin temel amacını ortadan kaldırmıştır.', 'Kullanıcıların tamamı kütüphaneleri aynı amaçla kullanır.'], 'Parça, kütüphanelerin tek işlevden çoklu işleve geçişini vurgular.', '<b>Yöntem:</b> Ana düşünce, bütün örnekleri kapsayan üst yargıdır.'],
    ['Kent içi bisiklet yolları yalnızca ulaşımı kolaylaştırmaz; gürültüyü azaltır, fiziksel etkinliği artırır ve kısa mesafeli yolculuklarda yakıt tüketimini düşürür. Bu parçadan çıkarılabilecek en kapsamlı yargı hangisidir?', 'Bisiklet altyapısı ulaşımın yanında çevresel ve sağlıkla ilgili yararlar da sağlar.', ['Bisiklet yalnızca spor yapmak isteyenler için uygundur.', 'Yakıt tüketimi şehirlerde tamamen bisiklet sayesinde sona erer.', 'Bisiklet yolları gürültüyü artıran bir şehir düzenlemesidir.', 'Kısa mesafelerde bütün insanlar bisiklet kullanmaktadır.'], 'Parçada üç ayrı yarar sayılır; kapsamlı seçenek bunları birlikte karşılar.', '<b>Yöntem:</b> Aşırı genellemeleri değil, metnin desteklediği ortak yargıyı seçin.'],
    ['Bir bilgiyi hatırlamak, onu yalnızca tekrar etmekle değil, farklı durumlarda kullanmakla da güçlenir. Öğrenci bir kavramı yeni bir probleme uyguladığında bilgiyi daha esnek biçimde yapılandırır. Bu parçanın konusu nedir?', 'Bilginin farklı durumlarda kullanılmasının öğrenmeyi güçlendirmesi', ['Sınavlarda zaman yönetimi', 'Tekrarın tamamen gereksiz olması', 'Problemlerin öğrenciler için zor olması', 'Kavramların ezberlenme biçimleri'], 'İki cümle de bilgiyi uygulamanın öğrenmeye katkısını anlatır.', '<b>Yöntem:</b> Konu, parçanın etrafında döndüğü kavram öbeğidir.'],
    ['Müzede sergilenen nesnelerin yanında üretim koşullarını anlatan kısa notlara da yer verilmesi, ziyaretçinin eseri yalnızca görmesini değil, anlamlandırmasını sağlar. Burada vurgulanan düşünce hangisidir?', 'Bağlam bilgisi, sanat eserinin anlaşılmasını kolaylaştırır.', ['Müze notları eserlerden daha değerlidir.', 'Ziyaretçiler sanat eserlerini yalnızca görsel açıdan değerlendirir.', 'Her sanat eseri aynı üretim koşullarına sahiptir.', 'Müzelerde açıklama yazıları kullanılmamalıdır.'], 'Notların işlevi esere bağlam kazandırmaktır.', '<b>Yöntem:</b> “Sağlar” gibi sonuç bildiren yüklemler vurguyu ele verir.'],
    ['Bir şehrin meydanları, yalnızca binaların arasındaki boşluklar değildir. Bu alanlar, insanların karşılaşmasına, ortak etkinliklere katılmasına ve kentin belleğini canlı tutmasına imkân verir. Ana düşünce hangisidir?', 'Meydanlar, kent yaşamında sosyal ve kültürel buluşma işlevi görür.', ['Meydanlar yalnızca trafik akışını düzenler.', 'Kent belleği sadece binalarla korunur.', 'Ortak etkinlikler şehir meydanlarında yapılamaz.', 'Bütün meydanlar aynı mimari özelliklere sahiptir.'], 'Meydanın fiziksel boşluktan öte sosyal işlevleri sıralanmıştır.', '<b>Yöntem:</b> Örneklerin ortak işlevini bir üst cümlede toplayın.'],
    ['Bir araştırmanın sonucu kadar yöntemi de önemlidir; çünkü aynı sonucu farklı yollarla elde etmek, bulgunun güvenilirliğini sınamayı sağlar. Bu cümlede asıl anlatılmak istenen nedir?', 'Bilimsel bulgunun güvenilirliği kullanılan yöntemlerin sınanmasına da bağlıdır.', ['Araştırmalarda sonuçlara hiç ihtiyaç yoktur.', 'Aynı sonuç her zaman yanlış bir yöntemle elde edilir.', 'Bilimsel yöntemler yalnızca laboratuvarda kullanılır.', 'Bir araştırmanın yöntemi sonuçtan bağımsızdır.'], 'Cümle, sonuç ile yöntemin birlikte değerlendirilmesi gerektiğini söyler.', '<b>Yöntem:</b> “Çünkü” sonrası, önceki yargının gerekçesini açıklar.'],
    ['Dijital not alma araçları aramayı hızlandırır; ancak notların düzenlenmesi, kaynakların ayırt edilmesi ve önemli fikirlerin seçilmesi hâlâ öğrencinin sorumluluğundadır. Bu parçaya göre hangisi söylenebilir?', 'Teknolojik araçlar düzenleme ve seçme becerisinin yerini tamamen tutmaz.', ['Dijital araçlar not almayı bütünüyle gereksiz kılar.', 'Kaynak ayırt etmek yalnızca yazılı metinlerde mümkündür.', 'Öğrenci dijital araç kullandığında düşünmek zorunda kalmaz.', 'Arama hızı ile seçme becerisi aynı şeydir.'], 'Parça, aracın yararını kabul ederken bilişsel sorumluluğun sürdüğünü belirtir.', '<b>Yöntem:</b> “Ancak”tan sonraki sınırlama, yardımcı düşüncedir.'],
    ['Bir metni hızlı okumak, her kelimeyi atlamak anlamına gelmez. Okur önce başlık ve girişten çerçeveyi kurar, sonra iddiayı destekleyen ayrıntılara döner. Bu parçanın ana düşüncesi hangisidir?', 'Etkili hızlı okuma, seçici dikkat ve metin yapısını kavramayı gerektirir.', ['Hızlı okumada bütün kelimeler atlanmalıdır.', 'Başlıklar metnin anlaşılmasını engeller.', 'Ayrıntılar hiçbir metinde önemli değildir.', 'Okur yalnızca giriş cümlesini okumalıdır.'], 'Hız, seçici ve yapı odaklı okumayla birlikte tanımlanır.', '<b>Yöntem:</b> Ana düşünce, ilk cümledeki yanlış anlamayı düzeltir.']
  ];

  const trRelationRows = [
    ['Yağışların azalması nedeniyle barajlardaki su seviyesi düştü. Bu cümledeki anlam ilişkisi nedir?', 'Neden-sonuç', ['Amaç-sonuç', 'Koşul-sonuç', 'Karşılaştırma', 'Benzetme'], '“Yağışların azalması” neden, “su seviyesinin düşmesi” sonuçtur.', '<b>İpucu:</b> “Neden, çünkü, -den dolayı” neden-sonuç ilişkisi kurar.'],
    ['Düzenli tekrar yaparsan öğrendiğin bilgileri daha uzun süre hatırlarsın. Bu cümledeki anlam ilişkisi nedir?', 'Koşul-sonuç', ['Neden-sonuç', 'Amaç-sonuç', 'Karşılaştırma', 'Tanımlama'], '“Yaparsan” koşulu, “hatırlarsın” sonucunu bağlar.', '<b>İpucu:</b> “-se/-sa” eki çoğu zaman koşul bildirir.'],
    ['Araştırmacı, sonuçları doğrulamak amacıyla deneyi farklı sıcaklıklarda yineledi. Bu cümledeki ilişki nedir?', 'Amaç-sonuç', ['Neden-sonuç', 'Koşul-sonuç', 'Karşılaştırma', 'Örnekleme'], 'Deneyi yineleme amacı “doğrulamak”, eylem ise “yineledi”dir.', '<b>İpucu:</b> “Amacıyla, için” amaç bildirir.'],
    ['Eski haritalar ayrıntılıyken yeni haritalar daha sade bir gösterim kullanıyor. Bu cümlede ne vardır?', 'Karşılaştırma', ['Neden-sonuç', 'Koşul-sonuç', 'Amaç-sonuç', 'Tanık gösterme'], 'Eski ve yeni haritaların özellikleri karşılaştırılmıştır.', '<b>İpucu:</b> “-ken, oysa, daha” karşılaştırma ipuçları olabilir.'],
    ['Toplantı uzadığı için otobüsü kaçırdı. Bu cümledeki ilişki nedir?', 'Neden-sonuç', ['Koşul-sonuç', 'Amaç-sonuç', 'Karşılaştırma', 'Varsayım'], 'Toplantının uzaması otobüsü kaçırmanın nedenidir.', '<b>İpucu:</b> “-dığı için” neden bildirir.'],
    ['Kitaplığını düzenlemek üzere bütün kitapları masaya çıkardı. Bu cümledeki ilişki nedir?', 'Amaç-sonuç', ['Neden-sonuç', 'Koşul-sonuç', 'Karşılaştırma', 'Benzetme'], 'Kitapları çıkarma eyleminin amacı düzenlemektir.', '<b>İpucu:</b> “Üzere” burada amaç anlamındadır.'],
    ['Sınav yaklaşırsa çalışma programını daha erken başlatacak. Bu cümledeki ilişki nedir?', 'Koşul-sonuç', ['Neden-sonuç', 'Amaç-sonuç', 'Karşılaştırma', 'Örnekleme'], '“Yaklaşırsa” koşul, “başlatacak” sonuçtur.', '<b>İpucu:</b> Koşul cümlesinde gerçekleşmesi beklenen durum bir şarta bağlanır.'],
    ['Bu yöntem daha ucuz olmasına karşın önceki yönteme göre daha fazla zaman gerektiriyor. Bu cümlede ne vardır?', 'Karşılaştırma', ['Neden-sonuç', 'Amaç-sonuç', 'Koşul-sonuç', 'Tanımlama'], 'İki yöntem maliyet ve süre bakımından karşılaştırılmıştır.', '<b>İpucu:</b> “-e karşın” zıtlık ve karşılaştırma kurar.']
  ];

  const trFlowRows = [
    ['(I) Kent bahçeleri küçük alanlarda sebze yetiştirmeyi mümkün kılar. (II) Bu alanlar komşular arasında dayanışmayı da artırır. (III) Bazı sebzelerin vitamin oranı meyvelerden yüksektir. (IV) Böylece bahçeler hem gıda hem sosyal bağ üretir. Anlam akışını bozan cümle hangisidir?', '(III)', ['(I)', '(II)', '(IV)', 'Bozan cümle yoktur'], 'I, II ve IV kent bahçelerinin ortak yararlarını anlatır; III konu dışıdır.', '<b>Yöntem:</b> Her cümleyi paragrafın ana izleğiyle karşılaştırın.'],
    ['(I) Sesli kitaplar görme engelli okurlar için erişim sağlar. (II) Ayrıca yoğun günlerde okumaya zaman kazandırabilir. (III) Kâğıdın geri dönüşümü farklı yöntemlerle yapılır. (IV) Bu nedenle sesli kitaplar okuma alışkanlığının kapsamını genişletir. Anlam akışını bozan cümle hangisidir?', '(III)', ['(I)', '(II)', '(IV)', 'Bozan cümle yoktur'], 'III, sesli kitapların işlevinden kopup kâğıt geri dönüşümüne geçer.', '<b>Yöntem:</b> Konu değişimini ve gönderim bağlarını takip edin.'],
    ['“Bu yaklaşım” ifadesiyle başlayan bir cümle, önceki bölümde anlatılan ortak üretim modeline gönderme yapmaktadır. Bu cümle paragrafta nereye getirilmelidir?', 'Modelin tanıtıldığı cümlenin hemen sonrasına', ['Paragrafın başına, başlıktan önce', 'İlk örnekten önce ve konu tanıtılmadan', 'Sonuç cümlesinden sonra', 'Paragrafın dışına'], '“Bu yaklaşım” önceki bir kavrama ihtiyaç duyduğu için tanıtımdan sonra gelmelidir.', '<b>Yöntem:</b> Zamir ve işaret ifadeleri kendinden önceki bağlamı ister.'],
    ['(I) Uyku sırasında beyin gün içinde edinilen bilgileri işler. (II) Bu işlem belleğin kalıcılaşmasına katkı sağlar. (III) Sabah kahvesinin üretiminde farklı kavurma teknikleri kullanılır. (IV) Bu yüzden yeterli uyku öğrenme sürecinin parçasıdır. Anlam akışını bozan cümle hangisidir?', '(III)', ['(I)', '(II)', '(IV)', 'Bozan cümle yoktur'], 'III, uyku-bellek ilişkisini sürdüren zincire bağlanmaz.', '<b>Yöntem:</b> Bağlaçların bağladığı iki tarafı kontrol edin.'],
    ['Bir paragrafta “Bu veriler” ifadesi kullanılmıştır. İfadenin anlaşılabilmesi için önce hangi tür cümle bulunmalıdır?', 'Verilerin daha önce sunulduğu bir cümle', ['Sonuç bildiren son cümle', 'Yazarın biyografisi', 'Konudan bağımsız bir örnek', 'Başlıksız tek sözcük'], 'İşaret zamiri “bu”, önceki cümledeki veriye gönderme yapar.', '<b>Yöntem:</b> Referans zincirinde zamirden önce kaynak aranır.'],
    ['(I) Müzik eğitimi ritim duygusunu geliştirir. (II) Birlikte çalma, dinleme ve uyum becerisi kazandırır. (III) Bazı müzik aletleri farklı ağaç türlerinden yapılır. (IV) Bu yönleriyle müzik eğitimi sosyal öğrenmeyi de destekler. Bozan cümle hangisidir?', '(III)', ['(I)', '(II)', '(IV)', 'Bozan cümle yoktur'], 'III, eğitim kazanımlarını değil araçların malzemesini anlatır.', '<b>Yöntem:</b> Ortak anahtar kelimeler akışın omurgasını gösterir.'],
    ['“Ancak bu çözüm...” cümlesi aşağıdakilerden hangisinden sonra gelmelidir?', 'Önceki çözümün bir sınırlılığını belirten cümleden sonra', ['İlk konu tanıtımından önce', 'Başlıktan önce', 'Örnekler verilmeden önce', 'Paragrafın dışında'], 'Ancak, önceki düşünceye karşıt veya sınırlayıcı yeni bir düşünce ister.', '<b>Yöntem:</b> Bağlaçları tek başına değil, önceki cümleyle birlikte okuyun.'],
    ['(I) Arşiv belgeleri geçmişin izlerini taşır. (II) Belgelerin korunması özel sıcaklık ve nem koşulları gerektirir. (III) Bu koşulların sağlanması belgenin ömrünü uzatır. (IV) Tarihî romanlarda çoğu zaman hayalî kahramanlara yer verilir. Bozan cümle hangisidir?', '(IV)', ['(I)', '(II)', '(III)', 'Bozan cümle yoktur'], 'IV, arşiv korumasından edebî kurguya geçerek akışı bozar.', '<b>Yöntem:</b> Konu dışı cümle, ana argümanın dışına çıkan cümledir.']
  ];

  const trMultiRows = [
    ['I. metin: Küçük müzeler, yerel tarihe ait nesneleri koruyarak kent sakinlerinin geçmişle bağını güçlendirir. II. metin: Dijital arşivler, farklı şehirlerdeki belgelere uzaktan erişimi kolaylaştırır. İki metinden çıkarılabilecek ortak yargı hangisidir?', 'Kültürel mirasın korunması ve erişilebilirliği farklı araçlarla desteklenebilir.', ['Yerel müzeler dijital arşivlerden daha değerlidir.', 'Dijital arşivler geçmişi koruyamaz.', 'Kültürel miras yalnızca büyük şehirlerde bulunur.', 'Müzeler ve arşivler aynı yöntemle çalışır.'], 'İlk metin koruma ve bağ, ikinci metin erişim yönünü öne çıkarır.', '<b>Yöntem:</b> Ortak yargı, iki metnin kesişimidir; üstünlük kurmaz.'],
    ['I. metin: Yazar, kısa cümlelerle olayın hızını hissettirir. II. metin: Yazar, uzun betimlemelerle olayın geçtiği çevreyi öne çıkarır. İki metin için hangisi söylenebilir?', 'Aynı anlatım amacına farklı anlatım araçlarıyla ulaşılmıştır.', ['İki metin de yalnızca betimlemeden oluşur.', 'Kısa cümleler her zaman uzun cümlelerden üstündür.', 'İki yazar da olay örgüsünü kullanmaz.', 'Çevre betimlemesi hiçbir metinde bulunmaz.'], 'Araçlar farklıdır; ikisi de anlatımı yönlendirme amacına hizmet eder.', '<b>Yöntem:</b> Farklı teknikleri ortak amaç üzerinden karşılaştırın.'],
    ['I. metin: Uzaktan çalışma esneklik sağlar; II. metin: Uzaktan çalışma, sınırları belirlenmezse iş ve özel yaşamı birbirine karıştırabilir. Bu iki metin birlikte okunduğunda hangisine ulaşılır?', 'Uzaktan çalışmanın yararları kadar yönetilmesi gereken riskleri de vardır.', ['Uzaktan çalışma her koşulda verimlidir.', 'Uzaktan çalışma hiçbir çalışan için uygun değildir.', 'Esneklik ile risk arasında ilişki kurulamaz.', 'İş ve özel yaşamın sınırı yalnızca ofiste çizilir.'], 'Metinler yarar ve risk yönlerini dengeli biçimde verir.', '<b>Yöntem:</b> Birleştirici çıkarım, iki metni de kapsamalıdır.'],
    ['I. metin: Geleneksel pazarlar yüz yüze iletişimi canlı tutar. II. metin: Çevrim içi pazarlar ürün karşılaştırmayı hızlandırır. Ortak yargı hangisidir?', 'Alışveriş ortamları farklı ihtiyaçlara farklı kolaylıklar sunar.', ['Geleneksel pazarlar her bakımdan üstündür.', 'Çevrim içi pazarlar iletişimi tamamen ortadan kaldırır.', 'İki pazar türünün hiçbir ortak yönü yoktur.', 'Ürün karşılaştırmak yalnızca pazarda mümkündür.'], 'İki metin de kendi ortamının belirli bir kolaylığını gösterir.', '<b>Yöntem:</b> Ortak yargıda “daha üstün” gibi metinde olmayan kesinlikler bulunmamalıdır.'],
    ['I. metin: Bilim iletişimi terimleri azaltıp temel ilişkiyi görünür kılmalıdır. II. metin: Bilim iletişimi, terimleri tamamen yok etmek yerine gerektiğinde açıklamalıdır. İki metin arasındaki ilişki nedir?', 'İki metin de anlaşılabilirliği savunur; yöntemde ayrılır.', ['İki metin de bilim iletişimine karşıdır.', 'İlk metin terimlerin açıklanmasını, ikinci metin yok edilmesini savunur.', 'Metinler aynı yöntemi birebir önerir.', 'Bilim iletişimi yalnızca uzmanlara yöneliktir.'], 'Her iki metin anlaşılabilirliği amaçlar; terimlerin kullanımı konusunda ayrışırlar.', '<b>Yöntem:</b> Amaç-yöntem ayrımını ayrıca değerlendirin.'],
    ['I. metin: Kırsal turizm doğayla yakın ilişki kurma fırsatı sunar. II. metin: Plansız turizm doğal alanlarda atık ve taşıma kapasitesi sorunları doğurabilir. Ortak sonuç hangisidir?', 'Turizm planlandığında doğa deneyimi ile koruma dengelenebilir.', ['Turizm doğal alanlara her zaman zarar verir.', 'Kırsal turizm yalnızca şehirlerde yapılır.', 'Doğa deneyimi ile koruma birbirini zorunlu olarak dışlar.', 'Planlama turizmde hiçbir fark yaratmaz.'], 'Metinler fırsat ve riskleri birlikte düşündürür.', '<b>Yöntem:</b> Sentez, olumlu ve olumsuz yönleri birlikte taşımalıdır.']
  ];

  const trGrammarRows = [
    ['Aşağıdaki cümlelerin hangisinde “sessiz” sözcüğü sıfat görevindedir?', 'Sessiz sokaklar sabahın erken saatlerinde boştu.', ['Çocuk sessizce kapıyı kapattı.', 'Bu odada sessiz kaldı.', 'Sessiz, bazen güçlü bir cevaptır.', 'O, soruya sessiz karşılık verdi.'], 'Sessiz, “sokaklar” adını nitelediği için sıfattır.', '<b>Kural:</b> Sıfat, ismi niteler veya belirtir.'],
    ['Aşağıdaki sözcüklerden hangisi yapım eki almıştır?', 'gözlük', ['ev', 'su', 'taş', 'yol'], 'Göz + -lük yeni bir anlamlı sözcük oluşturur.', '<b>Kural:</b> Yapım eki, kökün anlamını değiştirip yeni sözcük türetir.'],
    ['Aşağıdaki cümlelerin hangisinde “-ki” bağlaç olarak yazılmıştır?', 'Duydum ki toplantı yarına ertelenmiş.', ['Masadaki dosyayı bana getir.', 'Evdeki kitapları saydı.', 'Dünkü haberler doğrulandı.', 'Bahçedeki ağaç budandı.'], '“Ki” iki cümleyi bağlamıştır; diğerlerinde ektir ve bitişik yazılır.', '<b>Kural:</b> Bağlaç olan <i>ki</i> ayrı yazılır.'],
    ['Aşağıdaki cümlelerin hangisinde zarf kullanılmıştır?', 'Araştırmacı sonuçları dikkatle inceledi.', ['Mavi dosya masadaydı.', 'Uzun yolculuk yorucuydu.', 'Dikkatli öğrenci not aldı.', 'Eski kitaplık onarıldı.'], 'Dikkatle, inceleme eyleminin nasıl yapıldığını bildiren zarftır.', '<b>Kural:</b> Zarf, fiili veya fiilimsi niteler.'],
    ['Aşağıdaki sözcüklerden hangisi basit yapılıdır?', 'kalem', ['kalemlik', 'kalemci', 'kalemdaş', 'kalemler'], 'Kalem yapım eki almamış kök durumundadır; diğerlerinde ek vardır.', '<b>Kural:</b> Çekim eki sözcüğün yapısını değiştirmez; yapım eki yeni sözcük oluşturur.'],
    ['Aşağıdaki cümlelerin hangisinde edat kullanılmıştır?', 'Bu notlar sınav için hazırlandı.', ['Notlar masada duruyor.', 'Sınav yarın yapılacak.', 'Öğrenci soruyu çözdü.', 'Kitap çantanın içindeydi.'], '“İçin” tek başına anlamı olmayan, ilişki kuran edattır.', '<b>Kural:</b> Edat, sözcükler arasında anlam ilişkisi kurar.']
  ];

  const trSentenceRows = [
    ['“Öğretmen, yeni konuyu ayrıntılı biçimde anlattı.” cümlesinde “yeni konuyu” ögesi nedir?', 'Belirtili nesne', ['Özne', 'Dolaylı tümleç', 'Zarf tümleci', 'Yüklem'], '“Neyi anlattı?” sorusunun cevabı “yeni konuyu”dur.', '<b>Yöntem:</b> Nesneyi bulmak için yükleme “neyi/kimi” soruları yöneltilir.'],
    ['Aşağıdakilerden hangisi yapısına göre birleşik cümledir?', 'Yağmur diner dinmez yola çıktık.', ['Güneş doğdu.', 'Çocuklar bahçede oynuyor.', 'Kitabı aldım ve masaya koydum.', 'Hava serin, gökyüzü bulutluydu.'], '“Diner dinmez” yan yargısı temel cümleye bağlanmıştır.', '<b>Kural:</b> Birleşik cümlede temel cümle yanında yan yargı bulunur.'],
    ['“Akşam, istasyonun önünde uzun süre bekledik.” cümlesinde “akşam” ögesi nedir?', 'Zarf tümleci', ['Özne', 'Belirtili nesne', 'Dolaylı tümleç', 'Yüklem'], '“Ne zaman bekledik?” sorusunun cevabı “akşam”dır.', '<b>Yöntem:</b> Zaman bildiren sözcükler zarf tümleci olabilir.'],
    ['Aşağıdaki cümlelerin hangisi devrik cümledir?', 'Bahçede açmış bütün güller.', ['Bütün güller bahçede açmış.', 'Güller sabah açtı.', 'Bahçedeki güller çok güzel.', 'Çiçekleri dün suladık.'], 'Yüklem “açmış” cümlenin başında değil, sonunda da değildir; cümle devriktir.', '<b>Kural:</b> Yüklem sonda değilse devrik cümle oluşur.'],
    ['“Kardeşim bana eski fotoğrafları gönderdi.” cümlesinin öznesi hangisidir?', 'Kardeşim', ['bana', 'eski fotoğrafları', 'gönderdi', 'fotoğrafları gönderdi'], '“Kim gönderdi?” sorusunun cevabı Kardeşimdir.', '<b>Yöntem:</b> Özne için yükleme “kim/ne?” sorusu sorulur.']
  ];

  const trErrorRows = [
    ['Aşağıdaki cümlelerin hangisinde anlatım bozukluğu vardır?', 'Bu kararı birlikte ortaklaşa aldık.', ['Toplantı saatini herkes biliyor.', 'Sorunu açıkça anlattı.', 'Yeni planı yarın uygulayacağız.', 'Kitapları raflara düzenlice yerleştirdi.'], 'Birlikte ve ortaklaşa aynı anlamı taşıdığı için gereksiz sözcük kullanılmıştır.', '<b>Kural:</b> Aynı anlamı taşıyan gereksiz sözcükler anlatım bozukluğu doğurabilir.'],
    ['Aşağıdaki cümlelerin hangisinde noktalama yanlışı vardır?', 'Ali, Ayşe ve Mehmet, toplantıya katıldı.', ['Evet, önerinizi kabul ediyorum.', 'Toplantı saat 14.00’te başlayacak.', 'Ankara, İzmir ve Bursa büyük şehirlerdir.', 'Dosyayı açtı; fakat yazdırmadı.'], 'Özne ile yüklem arasına gereksiz virgül konulmuştur.', '<b>Kural:</b> Özne ile yüklem arasına, özel bir vurgu yoksa virgül konmaz.'],
    ['Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?', 'Herşey zamanında hazırlandı.', ['Birçok öğrenci erkenden geldi.', 'Bugün hiçbir sorun yaşanmadı.', 'Toplantıdan sonra biraz dinlendi.', 'Birdenbire ışıklar söndü.'], '“Her şey” ayrı yazılır.', '<b>Kural:</b> <i>Her şey</i> ayrı; <i>birçok, hiçbir</i> bitişik yazılır.'],
    ['Aşağıdaki cümlelerin hangisinde anlam belirsizliği vardır?', 'Öğretmen öğrencisine kitabını getirmesini söyledi.', ['Araştırmacı sonuçları dikkatle inceledi.', 'Kardeşim arkadaşını okulda gördü.', 'Yazar, eleştirmeni salonda karşıladı.', 'Çocuk, annesine mektup yazdı.'], '“Kitabını”nın öğretmene mi öğrenciye mi ait olduğu açık değildir.', '<b>Kural:</b> Zamirin kime ait olduğu anlaşılmıyorsa anlam belirsizliği doğar.'],
    ['Aşağıdakilerin hangisinde virgülün kullanımı yanlıştır?', 'Bu konuda, herkes aynı fikirdeydi.', ['Sevgili arkadaşım, seni bekliyorum.', 'Hayır, bugün gelmeyeceğim.', 'Ankara, Türkiye’nin başkentidir.', 'Uzun, dar bir koridordan geçtik.'], 'Özne ile yüklem arasına gereksiz virgül konmuştur.', '<b>Kural:</b> Özne-yüklem arasındaki gereksiz virgülden kaçının.']
  ];

  const trVocabRows = [
    ['“İşin püf noktası, ayrıntıları sabırla gözlemlemektir.” cümlesinde “püf noktası” sözü ne anlama gelir?', 'Bir işin en önemli ve incelikli yönü', ['İşin en kolay bölümü', 'Bir işin başlangıç tarihi', 'Gizli bir malzeme', 'Çalışmanın gereksiz kısmı'], 'Püf noktası, işi doğru yapmayı sağlayan temel inceliktir.', '<b>Kural:</b> Deyimler sözcüklerin tek tek anlamıyla değil, kalıplaşmış anlamıyla değerlendirilir.'],
    ['“Damlaya damlaya göl olur.” atasözünün verdiği ileti hangisidir?', 'Küçük birikimler zamanla büyük sonuçlar doğurur.', ['Büyük işler hemen tamamlanır.', 'Su kaynakları sınırsızdır.', 'Sabırsız davranmak gerekir.', 'Her sorun tek seferde çözülür.'], 'Atasözü, az miktarların sürekli birikmesini anlatır.', '<b>Yöntem:</b> Benzetmedeki somut görüntüyü soyut iletiye çevirin.'],
    ['“Sözünü sakınmadan düşüncesini söyledi.” cümlesinde “sözünü sakınmamak” ne demektir?', 'Düşüncesini açıkça söylemek', ['Konuşmayı ertelemek', 'Kimseyi dinlememek', 'Sözünü geri almak', 'Sessizce beklemek'], 'Deyim, düşünceyi çekinmeden açıklamak anlamındadır.', '<b>Kural:</b> Deyimin cümledeki davranışa kattığı anlamı bulun.'],
    ['“İpe un sermek” deyimi hangi durumu anlatır?', 'Bir işi yapmamak için bahane üretmek', ['İşi hızla tamamlamak', 'Bir şeyi özenle saklamak', 'Yardım istemek', 'Bir düşünceyi savunmak'], 'Deyim, sorumluluktan kaçmak için mazeret ileri sürmektir.', '<b>Kural:</b> Deyimleri gerçek anlamlarıyla değil, kalıplaşmış anlamlarıyla okuyun.']
  ];

  function day3() {
    const questions = [
      ...rows('trk3-m-', 'Paragraf: Ana Düşünce ve Konu', trMainRows, 4, ['paragraf', 'ana-dusunce']),
      ...rows('trk3-r-', 'Paragraf: Anlam İlişkileri', trRelationRows, 4, ['paragraf', 'anlam-iliskisi']),
      ...rows('trk3-f-', 'Paragraf: Cümle Akışı ve Yerleştirme', trFlowRows, 5, ['paragraf', 'akis']),
      ...rows('trk3-x-', 'Paragraf: Çoklu Metin', trMultiRows, 5, ['paragraf', 'coklu-metin']),
      ...rows('trk3-g-', 'Dil Bilgisi: Sözcük ve Ek', trGrammarRows, 3, ['dilbilgisi', 'sozluk']),
      ...rows('trk3-c-', 'Dil Bilgisi: Cümle Ögeleri ve Türleri', trSentenceRows, 3, ['dilbilgisi', 'cumle']),
      ...rows('trk3-e-', 'Anlatım Bozukluğu ve Noktalama', trErrorRows, 4, ['anlatim-bozuklugu', 'noktalama']),
      ...rows('trk3-v-', 'Söz Varlığı: Deyim ve Atasözü', trVocabRows, 3, ['soz-varligi'])
    ];
    return bank(3, 'TYT Türkçe ve Paragraf', 50, 3600, {
      'ana-dusunce': 8,
      'anlam-iliskileri': 8,
      'cumle-akisi': 8,
      'coklu-metin': 6,
      'dilbilgisi': 11,
      'anlatim-bozuklugu-noktalama': 5,
      'deyim-atasozu': 4
    }, questions, { note: 'Özgün pratik içeriğidir; resmî sınav sorusu değildir.' });
  }

  window.YKS_QUESTION_BANKS.day3 = day3();

  const mathRows = [
    ['7A5 üç basamaklı sayısı 3 ile tam bölünüyor ve 0 < A < 5 olduğuna göre A kaçtır?', '3', ['1', '2', '4', '5'], 'Rakamlar toplamı 7 + A + 5 = 12 + A olmalıdır. 0 < A < 5 aralığında toplamı 3’ün katı yapan tek rakam 3’tür.', '<b>Kural:</b> 3 ile bölünebilmede rakamlar toplamı kullanılır.'],
    ['10’dan küçük pozitif bir sayı 5 ile bölündüğünde 2 kalanını veriyor. Bu sayının kendisi kaçtır?', '2', ['1', '3', '5', '7'], '10’dan küçük pozitif sayılar içinde 5’e bölümünden 2 kalanını veren tek sayı 2’dir.', '<b>Kural:</b> Kalan, bölen sayıdan küçük olmalıdır; ek koşullar tek cevabı belirler.'],
    ['İlk terimi 4, ortak farkı 6 olan aritmetik dizinin 8. terimi kaçtır?', '46', ['40', '48', '52', '56'], 'a₈ = a₁ + 7d = 4 + 7·6 = 46.', '<b>Kural:</b> Aritmetik dizide aₙ = a₁ + (n−1)d.'],
    ['Bir sayı 3 ve 4 ile bölündüğünde sırasıyla 2 ve 3 kalanını veriyor. 12’den küçük en küçük pozitif sayı kaçtır?', '11', ['2', '3', '7', '10'], '11 sayısı 3 ile bölündüğünde 2, 4 ile bölündüğünde 3 kalanını verir.', '<b>Yöntem:</b> Kalan koşullarını aynı anda sağlayan adayları küçükten büyüğe kontrol edin.'],
    ['Rakamları farklı en büyük üç basamaklı çift sayı kaçtır?', '986', ['978', '984', '976', '998'], 'Yüzler ve onlar basamağı en büyük olacak şekilde 9 ve 8 seçilir; birler basamağında kalan en büyük çift rakam 6’dır.', '<b>Kural:</b> Çift sayı için birler basamağı çift; rakamların farklı olması gerekir.'],
    ['|x − 4| = 7 denkleminin çözüm kümesinin elemanları toplamı kaçtır?', '8', ['−8', '4', '7', '14'], 'x−4=7 veya x−4=−7 olur; x=11 ve x=−3. Toplam 8’dir.', '<b>Kural:</b> |x−a|=b → x=a±b.'],
    ['|2x + 1| < 5 eşitsizliğinin çözüm aralığı hangisidir?', '−3 < x < 2', ['x < −3 veya x > 2', '−2 < x < 3', '−5 < x < 5', 'x > 2'], '−5 < 2x+1 < 5; −6 < 2x < 4; −3 < x < 2.', '<b>Kural:</b> Mutlak değer eşitsizliğinde çift taraflı aralık kurulur.'],
    ['x² − 9 ≥ 0 eşitsizliğinin çözüm kümesi hangisidir?', 'x ≤ −3 veya x ≥ 3', ['−3 ≤ x ≤ 3', 'x < −3 veya x > 3', 'x ≥ −3', 'x ≤ 3'], 'x²−9=(x−3)(x+3). Parabol dış bölgede pozitiftir ve eşitlik dahil edilir.', '<b>Kural:</b> “≥” kökleri çözüm kümesine dahil eder.'],
    ['|x − 2| = 4 denkleminin çözüm kümesinin elemanları toplamı kaçtır?', '4', ['−4', '2', '6', '8'], 'x−2=4 veya x−2=−4 olur; x=6 ve x=−2. Çözüm elemanlarının toplamı 4’tür.', '<b>Kural:</b> |x−a|=b → x=a±b.'],
    ['3x − 5 ≤ 10 eşitsizliğinin çözüm kümesi hangisidir?', 'x ≤ 5', ['x < 5', 'x ≥ 5', 'x ≤ 3', 'x ≥ 3'], '3x≤15 ve x≤5.', '<b>Kural:</b> Pozitif sayıyla bölmede eşitsizlik yönü değişmez.'],
    ['f(x)=3x−2 olduğuna göre f(5) kaçtır?', '13', ['8', '10', '15', '17'], 'f(5)=3·5−2=13.', '<b>Kural:</b> Fonksiyon değerinde x yerine verilen sayı yazılır.'],
    ['f(x)=x+4 ve g(x)=2x−1 ise (f∘g)(3) kaçtır?', '9', ['5', '7', '11', '13'], 'g(3)=5 ve f(5)=9.', '<b>Kural:</b> (f∘g)(x)=f(g(x)); önce içteki fonksiyon uygulanır.'],
    ['f(x)=2x+7 fonksiyonunun tersi f⁻¹(15) kaçtır?', '4', ['2', '3', '8', '11'], '2x+7=15 → 2x=8 → x=4.', '<b>Kural:</b> f⁻¹(a), f(x)=a denkleminin x değeridir.'],
    ['f(x)=x²−1 ve f(a)=8 ise a’nın pozitif değeri kaçtır?', '3', ['−3', '1', '8', '9'], 'a²−1=8 → a²=9; pozitif değer 3’tür.', '<b>Dikkat:</b> “Pozitif değer” ifadesi iki kökten birini seçer.'],
    ['f(x)=|x−1| fonksiyonunun minimum değeri kaçtır?', '0', ['−1', '1', '2', '−2'], 'Mutlak değer içi x=1 olduğunda minimum 0’dır.', '<b>Kural:</b> |ifade| en az 0 olur.'],
    ['x²−6x+8=0 denkleminin kökleri x₁,x₂ ise x₁+x₂ kaçtır?', '6', ['2', '4', '8', '−6'], 'Vieta’ya göre kökler toplamı −b/a = 6’dır.', '<b>Kural:</b> ax²+bx+c=0 için kökler toplamı −b/a’dır.'],
    ['x²−5x+6=0 denkleminin kökleri çarpımı kaçtır?', '6', ['−6', '5', '−5', '11'], 'Vieta’ya göre kökler çarpımı c/a=6’dır.', '<b>Kural:</b> Kökler çarpımı c/a’dır.'],
    ['Kökleri 2 ve 7 olan ikinci dereceden denklemin x² katsayısı 1 ise sabit terimi kaçtır?', '14', ['−14', '5', '9', '28'], 'Sabit terim kökler çarpımıdır: 2·7=14.', '<b>Kural:</b> (x−2)(x−7)=x²−9x+14.'],
    ['x₁+x₂=10 ve x₁x₂=21 ise x₁²+x₂² kaçtır?', '58', ['42', '79', '100', '121'], '(x₁+x₂)²−2x₁x₂=100−42=58.', '<b>Kural:</b> Kareler toplamı özdeşliği kullanılır.'],
    ['Bir torbada 4 kırmızı, 6 beyaz top vardır. Geri koymadan iki kırmızı çekme olasılığı kaçtır?', '2/15', ['1/5', '4/25', '2/5', '3/10'], 'İlk kırmızı 4/10, sonra 3/9; çarpım 12/90=2/15.', '<b>Kural:</b> İadesiz çekimlerde ikinci çekimde toplam ve renk sayısı değişir.'],
    ['5 farklı kitap bir rafa kaç farklı şekilde dizilir?', '120', ['25', '60', '100', '240'], '5!=5·4·3·2·1=120.', '<b>Kural:</b> Farklı nesnelerin doğrusal dizilişi n! ile bulunur.'],
    ['7 kişi yuvarlak masa etrafında kaç farklı biçimde oturabilir?', '720', ['120', '360', '840', '5040'], 'Dairesel dizilişte (7−1)!=6!=720.', '<b>Kural:</b> Yuvarlak masada dönmeler aynı sayılır.'],
    ['8 soruluk bir testte 3 soru seçilecek. Sıra önemsenmiyorsa kaç seçim yapılır?', '56', ['24', '48', '112', '336'], 'C(8,3)=8·7·6/(3·2·1)=56.', '<b>Kural:</b> Sıra önemsiz seçim → kombinasyon.'],
    ['Bir zar iki kez atılıyor. İlk atışın çift, ikinci atışın 5’ten büyük olma olasılığı kaçtır?', '1/12', ['1/6', '1/9', '1/4', '1/3'], 'Çift gelme 3/6, 5’ten büyük gelme 1/6; bağımsız olaylarda çarpım 1/12.', '<b>Kural:</b> Bağımsız olayların ortak olasılığı çarpılır.'],
    ['Bir veri grubunun ortalaması 12, eleman sayısı 5’tir. Verilerin toplamı kaçtır?', '60', ['17', '24', '48', '72'], 'Toplam = ortalama·eleman sayısı = 12·5=60.', '<b>Kural:</b> Ortalama = toplam/n.'],
    ['2, 4, 4, 7, 9, 11 veri grubunun medyanı kaçtır?', '5,5', ['4', '5', '7', '6,5'], '6 eleman olduğundan ortadaki 4 ve 7’nin ortalaması 5,5’tir.', '<b>Kural:</b> Çift sayıda veride iki orta değerin aritmetik ortalaması alınır.'],
    ['3, 3, 5, 6, 6, 6, 8 veri grubunun modu kaçtır?', '6', ['3', '5', '6,5', '8'], 'En çok tekrar eden değer 6’dır.', '<b>Kural:</b> Mod, frekansı en yüksek değerdir.'],
    ['Bir veri grubundaki tüm değerlere 4 eklenirse ortalama nasıl değişir?', '4 artar', ['Değişmez', '4 azalır', '16 artar', 'İkiye katlanır'], 'Her değere aynı sabit eklendiğinde ortalama da aynı sabit kadar artar.', '<b>Kural:</b> Ortalama sabit eklemeyle aynı yönde ve aynı miktarda değişir.'],
    ['Kenarları 6 cm ve 8 cm olan dik üçgenin hipotenüsü kaç cm’dir?', '10', ['7', '12', '14', '16'], 'Pisagor: √(6²+8²)=√100=10.', '<b>Kural:</b> Dik üçgende a²+b²=c².'],
    ['Tabanı 10 cm, yüksekliği 7 cm olan üçgenin alanı kaç cm²’dir?', '35', ['17', '30', '70', '140'], 'Alan=(taban·yükseklik)/2=10·7/2=35.', '<b>Kural:</b> Üçgen alanı = taban·yükseklik/2.'],
    ['Yarıçapı 4 cm olan çemberin çevresi kaç cm’dir? (π=3)', '24', ['12', '16', '48', '64'], 'Çevre=2πr=2·3·4=24.', '<b>Kural:</b> Çember çevresi 2πr’dir.'],
    ['Dik kenarları 5 cm ve 12 cm olan dik üçgenin alanı kaç cm²’dir?', '30', ['17', '34', '60', '120'], 'Alan=5·12/2=30.', '<b>Kural:</b> Dik üçgende dik kenarlar taban ve yükseklik alınabilir.'],
    ['Merkez açısı 60° olan bir yayın, yarıçapı 6 cm’lik çemberdeki uzunluğu kaç cm’dir? (π=3)', '6', ['3', '9', '12', '18'], 'Çevre 2πr=36; 60° bu çevrenin 1/6’sıdır: 6 cm.', '<b>Kural:</b> Yay uzunluğu = merkez açı/360 · çember çevresi.'],
    ['A(2,5) noktası x eksenine göre yansıtılırsa görüntüsü hangisidir?', '(2,−5)', ['(−2,5)', '(−2,−5)', '(5,2)', '(2,5)'], 'x eksenine göre yansımada x aynı, y işaret değiştirir.', '<b>Kural:</b> (x,y) → (x,−y).'],
    ['B(−3,4) noktası y eksenine göre yansıtılırsa görüntüsü hangisidir?', '(3,4)', ['(−3,−4)', '(3,−4)', '(4,−3)', '(−4,3)'], 'y eksenine göre yansımada x işaret değiştirir.', '<b>Kural:</b> (x,y) → (−x,y).'],
    ['(1,2) ve (5,10) noktalarından geçen doğrunun eğimi kaçtır?', '2', ['1/2', '3', '4', '8'], 'Eğim=(10−2)/(5−1)=8/4=2.', '<b>Kural:</b> m=(y₂−y₁)/(x₂−x₁).'],
    ['Bir dikdörtgenin kısa kenarı 5 cm, uzun kenarı kısa kenarın 3 katıdır. Çevresi kaç cm’dir?', '40', ['20', '30', '35', '50'], 'Uzun kenar 15; çevre 2(5+15)=40.', '<b>Kural:</b> Dikdörtgen çevresi 2(a+b).'],
    ['Bir araç 240 km yolu 60 km/sa hızla kaç saatte alır?', '4', ['3', '5', '6', '8'], 'Süre=yol/hız=240/60=4.', '<b>Kural:</b> Yol = hız·zaman.'],
    ['Bir ürünün alış fiyatı 300 TL’dir. %15 kârla satış fiyatı kaç TL olur?', '345', ['315', '330', '360', '375'], 'Kâr 45 TL; satış 300+45=345 TL.', '<b>Kural:</b> Satış = alış·(1+kâr oranı).'],
    ['Bir işçi işi 12 günde, diğeri 18 günde bitiriyor. Birlikte kaç günde bitirirler?', '36/5', ['5', '6', '7,2', '15'], 'Birlikte hız 1/12+1/18=5/36; süre 36/5 gündür.', '<b>Kural:</b> İş problemlerinde hızlar toplanır.']
  ];

  function day4() {
    const groups = [
      ['Sayılar ve Basamak', mathRows.slice(0, 5), 4, ['sayilar', 'moduler']],
      ['Mutlak Değer ve Eşitsizlik', mathRows.slice(5, 10), 4, ['mutlak-deger', 'esitsizlik']],
      ['Fonksiyonlar', mathRows.slice(10, 15), 4, ['fonksiyon']],
      ['Polinomlar ve Kökler', mathRows.slice(15, 19), 4, ['polinom', 'vieta']],
      ['Olasılık ve Sayma', mathRows.slice(19, 24), 4, ['olasilik', 'sayma']],
      ['Veri Analizi', mathRows.slice(24, 28), 3, ['veri', 'istatistik']],
      ['Geometri', mathRows.slice(28, 33), 4, ['geometri']],
      ['Koordinat ve Dönüşüm', mathRows.slice(33, 37), 5, ['koordinat', 'geometri']],
      ['Problemler', mathRows.slice(37, 40), 3, ['problemler']]
    ];
    let questions = [];
    groups.forEach(([type, list, difficulty, tags], groupIndex) => {
      questions = questions.concat(list.map((item, index) => question(
        'mat4-' + String(groupIndex * 10 + index + 1).padStart(3, '0'),
        type,
        item[0],
        item[1],
        item[2],
        item[3],
        item[4],
        difficulty,
        tags,
        groupIndex === 0 && index === 1 ? { reviewNote: 'Bu madde, tek cevaplı olması için “10’dan küçük ve pozitif” koşuluyla yeniden yazılmıştır.' } : {}
      )));
    });
    return bank(4, 'TYT Matematik Temel İnşa', 40, 3600, {
      sayilar: 5,
      'mutlak-esitsizlik': 5,
      fonksiyonlar: 5,
      polinomlar: 4,
      'olasilik-sayma': 5,
      'veri-analizi': 4,
      geometri: 5,
      'koordinat-donusum': 4,
      problemler: 3
    }, questions, { note: 'Özgün pratik içeriğidir; resmî sınav sorusu değildir.' });
  }

  window.YKS_QUESTION_BANKS.day4 = day4();

  const readingPassages = [
    {
      title: 'Sleep, Memory, and the Timing of Recall',
      text: 'Memory does not become stable at the moment information is first encountered. During sleep, the brain repeatedly reactivates some recently formed patterns and links them to older knowledge. This process is selective: emotionally meaningful or repeatedly practised material is more likely to be strengthened, while irrelevant details may fade. Researchers therefore distinguish between simply spending more time awake with a text and giving the brain an opportunity to consolidate it. A short review before sleep can be useful, but it cannot replace understanding; the material must first be encoded clearly. The broader lesson is that effective learning depends on the timing and quality of both study and rest.',
      items: [
        ['Main idea', 'What is the main point of the passage?', 'Memory consolidation depends on an interaction between learning, sleep, and selective reactivation.', ['Sleeping longer guarantees that every detail will be remembered.', 'Reviewing material before sleep is more important than understanding it.', 'The brain stores all newly encountered information equally.', 'Researchers have rejected the role of practice in memory.'], 'The passage explains the process, its selectivity, and the conditions that make it useful.', '<b>Reading skill:</b> Main idea must cover the whole passage, not one detail.'],
        ['Detail', 'According to the passage, which material is more likely to be strengthened during sleep?', 'Emotionally meaningful or repeatedly practised material', ['Every detail read during the day', 'Only information encountered in the morning', 'Material that was never understood', 'Information unrelated to older knowledge'], 'The passage explicitly names emotional meaning and repeated practice as factors.', '<b>Reading skill:</b> For detail questions, match the wording to an explicit sentence.'],
        ['Inference', 'What can be inferred about a review before sleep?', 'It may support consolidation if the material has already been understood.', ['It eliminates the need for daytime study.', 'It causes irrelevant details to be stored permanently.', 'It works only when the learner stays awake all night.', 'It guarantees perfect recall of the reviewed material.'], 'The final sentences limit the value of review: it helps, but cannot replace clear encoding.', '<b>Reading skill:</b> An inference combines stated claims without adding an absolute conclusion.'],
        ['Vocabulary in context', 'The word “consolidate” is closest in meaning to _______.', 'stabilise and strengthen', ['erase completely', 'translate into another language', 'question repeatedly', 'separate from previous knowledge'], 'In context, consolidation is the process of making a memory more stable.', '<b>Reading skill:</b> Replace the word in its sentence and test the meaning.']
      ]
    },
    {
      title: 'The Arctic as a Shared but Unequal Space',
      text: 'The rapid reduction of seasonal sea ice has made the Arctic more accessible to shipping, research, and resource exploration. Yet accessibility does not mean that the region has become politically simple. Coastal states claim different rights, indigenous communities demand a meaningful role in decisions affecting their lands, and non-Arctic countries seek influence because changes in the region affect global climate and trade. Economic opportunity is therefore inseparable from questions of environmental risk and governance. Any policy that treats the Arctic merely as an empty route is likely to overlook both its resident communities and the international rules needed to manage it.',
      items: [
        ['Main idea', 'What is the primary purpose of the passage?', 'To show why new Arctic opportunities must be considered together with environmental and governance concerns.', ['To prove that Arctic shipping is already completely safe', 'To argue that only coastal states should conduct Arctic research', 'To describe the daily routine of indigenous communities', 'To predict the exact future of global trade'], 'The passage balances accessibility with political, social, and environmental complexity.', '<b>Reading skill:</b> Purpose questions ask what the author is doing overall.'],
        ['Detail', 'Why do non-Arctic countries seek influence in the region?', 'Because Arctic changes have consequences for global climate and trade.', ['Because they own all of the Arctic coastline', 'Because seasonal sea ice has increased', 'Because indigenous communities have left the region', 'Because shipping rules do not apply there'], 'This reason is stated directly in the third sentence.', '<b>Reading skill:</b> Do not confuse a stated consequence with an unstated motive.'],
        ['Inference', 'The description of the Arctic as an “empty route” would be problematic because it _______.', 'ignores the people who live there and the rules governing the region.', ['makes shipping physically impossible', 'assumes that sea ice never changes', 'focuses too much on indigenous culture alone', 'proves that resource exploration is harmless'], 'The final sentence identifies the social and legal dimensions omitted by that description.', '<b>Reading skill:</b> The final sentence often supplies the basis for an inference.'],
        ['Author’s tone', 'The author’s attitude toward Arctic resource opportunities is best described as _______.', 'cautious and analytical', ['celebratory and uncritical', 'dismissive and sarcastic', 'indifferent and humorous', 'certain and triumphalist'], 'The author acknowledges opportunities but repeatedly qualifies them with risks and governance needs.', '<b>Reading skill:</b> Tone comes from repeated qualification, not from one isolated word.']
      ]
    },
    {
      title: 'Automated Decisions and the Meaning of Explanation',
      text: 'When an algorithm recommends a loan, prioritises a medical appointment, or filters an application, people often ask for an explanation. An explanation, however, can serve two different purposes. It may describe how the system reached a result, or it may help a person challenge the assumptions and data behind that result. The first purpose concerns transparency; the second concerns accountability. A technically accurate description is not necessarily useful if the affected person cannot identify an error or request a review. For this reason, responsible automated decision-making requires not only interpretable models but also procedures that give people a meaningful opportunity to respond.',
      items: [
        ['Main idea', 'Which statement best summarises the passage?', 'Fair automated decisions require both understandable reasoning and a real way to challenge outcomes.', ['Algorithms should never be used in medical or financial settings.', 'A technical description always gives affected people enough protection.', 'Transparency and accountability are identical concepts.', 'People are unable to understand how any algorithm works.'], 'The passage distinguishes explanation from challenge and ends with both as requirements.', '<b>Reading skill:</b> A good summary preserves the contrast and the conclusion.'],
        ['Detail', 'What does the passage associate with transparency?', 'Describing how a system reached a result.', ['Allowing a person to request a review', 'Removing all data from a system', 'Guaranteeing that a result is correct', 'Replacing an algorithm with a human'], 'This definition appears in the second and third sentences.', '<b>Reading skill:</b> Identify the exact function assigned to a term.'],
        ['Inference', 'Why might a technically accurate explanation still be insufficient?', 'It may not enable the affected person to find an error or challenge the decision.', ['It may contain too many human opinions.', 'It always reveals private medical information.', 'It prevents the system from using any data.', 'It proves that the model is biased.'], 'The passage says usefulness depends on the opportunity to respond, not accuracy alone.', '<b>Reading skill:</b> “Not necessarily” signals a limitation to infer.'],
        ['Vocabulary in context', 'In the passage, “accountability” most nearly refers to _______.', 'the possibility of questioning and reviewing a decision', ['the speed of producing a prediction', 'the secrecy of a computer model', 'the size of a training dataset', 'the removal of human judgement'], 'Accountability is tied to challenging assumptions and requesting review.', '<b>Reading skill:</b> Contextual vocabulary is defined by neighbouring contrasts.']
      ]
    },
    {
      title: 'Why Public Parks Matter Beyond Recreation',
      text: 'Public parks are commonly evaluated by counting visitors or measuring the facilities they contain. Such measures are useful, but they miss less visible functions. A park can provide a setting in which neighbours encounter one another without having to purchase anything, and it can give children access to nature in densely built areas. These encounters are not automatically harmonious; design, maintenance, and safety determine who feels welcome. Nevertheless, treating parks as social infrastructure changes the question from “How many people use this space?” to “What kinds of relationships and opportunities does it make possible?”',
      items: [
        ['Main idea', 'What is the passage mainly concerned with?', 'The social value of parks cannot be understood through visitor numbers and facilities alone.', ['Parks should be designed only for children.', 'Visitor numbers are the only reliable measure of a park.', 'Public parks inevitably create conflict between neighbours.', 'Nature is unavailable in densely built areas.'], 'The author expands the evaluation of parks to social relationships and access.', '<b>Reading skill:</b> Track the shift from visible measures to less visible functions.'],
        ['Detail', 'Which factor does the author say affects who feels welcome in a park?', 'Design, maintenance, and safety', ['The price of food sold nearby', 'The number of children in a city', 'The age of the park’s trees', 'The distance to the nearest school'], 'The third sentence explicitly lists these factors.', '<b>Reading skill:</b> A detail answer should be directly recoverable from the passage.'],
        ['Inference', 'The author would most likely support which evaluation question?', 'What relationships and opportunities does the park make possible?', ['How quickly can the park be built?', 'How many facilities can be added without planning?', 'Why should all parks charge an entrance fee?', 'Which park attracts the most tourists?'], 'The final sentence proposes this broader evaluation question.', '<b>Reading skill:</b> The author’s proposed reframing is a strong inference clue.'],
        ['Author’s tone', 'The passage has a _______ tone toward common park measurements.', 'critical but constructive', ['hostile and mocking', 'completely approving', 'nostalgic and sentimental', 'uncertain and confused'], 'The author calls the measures useful but explains their limits and offers a broader approach.', '<b>Reading skill:</b> A mixed tone can acknowledge value while identifying limitations.']
      ]
    }
  ];

  function day5() {
    let questions = [];
    readingPassages.forEach((passage, passageIndex) => {
      passage.items.forEach((item, itemIndex) => {
        const [type, stem, answer, distractors, explanation, rule] = item;
        const id = 'read5-' + String(passageIndex * 4 + itemIndex + 1).padStart(3, '0');
        questions.push(question(id, 'Passage ' + (passageIndex + 1) + ': ' + type, stem, answer, distractors, explanation, rule, type === 'Inference' || type === 'Author’s tone' ? 5 : 4, ['reading', type.toLowerCase().replace(/[^a-z]+/g, '-')], { passage: { title: passage.title, text: passage.text } }));
      });
    });
    return bank(5, 'YDT Reading Masterclass', 16, 4800, {
      'main-idea': 4,
      detail: 4,
      inference: 4,
      'vocabulary-in-context': 2,
      'author-tone': 2
    }, questions, { passages: 4, note: 'Özgün pratik içeriğidir; resmî sınav sorusu değildir.' });
  }

  window.YKS_QUESTION_BANKS.day5 = day5();

  const simulationContexts = [
    'the marine observatory', 'the university archive', 'the rural health unit', 'the city transport office',
    'the renewable-energy lab', 'the museum conservation team', 'the public library network', 'the climate station',
    'the language research centre', 'the water-management agency', 'the archaeological survey', 'the food-safety board',
    'the robotics workshop', 'the coastal planning office', 'the biodiversity project', 'the hospital registry',
    'the astronomy department', 'the urban-design studio', 'the agricultural cooperative', 'the migration research group'
  ];

  const simulationEnglishTemplates = [
    ['Tenses: Future Perfect', (c) => 'By the time ' + c + ' reopens, technicians _______ all damaged equipment.', 'will have replaced', ['will replace', 'are replacing', 'had replaced', 'would replace'], 'The replacement will be complete before a future point.', '<b>Kural:</b> <i>By the time</i> + future reference → Future Perfect.'],
    ['Tenses: Past Perfect', (c) => 'The supervisor discovered that ' + c + ' _______ the warning before the inspection began.', 'had ignored', ['ignored', 'has ignored', 'would ignore', 'was ignoring'], 'Ignoring happened before the past discovery.', '<b>Kural:</b> Önce gerçekleşen geçmiş eylem → <i>had + V3</i>.'],
    ['Tenses: Present Perfect', (c) => 'Since January, ' + c + ' _______ its reporting procedure twice.', 'has revised', ['revised', 'is revising', 'had revised', 'will revise'], 'Since January connects a past starting point with the present.', '<b>Kural:</b> <i>Since</i> ile Present Perfect kullanılır.'],
    ['Tenses: Past Continuous', (c) => 'While ' + c + ' _______ the samples, the network suddenly failed.', 'was processing', ['processed', 'has processed', 'had processed', 'will process'], 'The processing was in progress when the failure occurred.', '<b>Kural:</b> <i>While + was/were V-ing</i>.'],
    ['Tenses: Mixed Conditional', (c) => 'If ' + c + ' had kept a duplicate, the current investigation _______ unnecessary.', 'would be', ['will be', 'would have been', 'was', 'had been'], 'A past condition causes a present result.', '<b>Kural:</b> Mixed conditional: <i>had + V3</i> → <i>would + V</i>.'],
    ['Modals: Past Deduction', (c) => 'The empty storage room managed by ' + c + ' _______ have been locked before the staff arrived.', 'must', ['should', 'would', 'need', 'used to'], 'The physical evidence supports a strong deduction.', '<b>Kural:</b> Güçlü geçmiş çıkarımı → <i>must have + V3</i>.'],
    ['Modals: Criticism', (c) => 'The coordinator working at ' + c + ' _______ have checked the address before sending the invitation.', 'should', ['may', 'must', 'would', 'need'], 'The sentence criticises a missed responsibility.', '<b>Kural:</b> Geçmiş eleştiri → <i>should have + V3</i>.'],
    ['Modals: Possibility', (c) => 'The missing invoice from ' + c + ' _______ have been filed under a different project code.', 'might', ['must', 'should', 'need', 'would'], 'The cause is possible but not certain.', '<b>Kural:</b> Belirsiz geçmiş olasılık → <i>might have + V3</i>.'],
    ['Modals: Obligation', (c) => 'All visitors to ' + c + ' _______ to sign the access register.', 'are required', ['would rather', 'used', 'might have', 'had better'], 'The institution imposes a formal requirement.', '<b>Kural:</b> <i>be required to + V1</i> yükümlülük bildirir.'],
    ['Modals: Preference', (c) => 'The team at ' + c + ' would _______ delay the release than publish an unverified result.', 'rather', ['better', 'must', 'need', 'used'], 'Would rather expresses a preference.', '<b>Kural:</b> <i>would rather + V1 + than + V1</i>.'],
    ['Inversion: Not only', (c) => 'Not only _______ ' + c + ' reduce waste, but it also saves staff time.', 'does', ['is', 'has', 'did', 'would'], 'Not only at the beginning triggers auxiliary inversion.', '<b>Kural:</b> <i>Not only + does + subject + V1</i>.'],
    ['Inversion: Rarely', (c) => 'Rarely _______ ' + c + ' received such detailed feedback from residents.', 'has', ['does', 'is', 'had', 'would'], 'Rarely requires the auxiliary before the subject.', '<b>Kural:</b> <i>Rarely + has/have + subject + V3</i>.'],
    ['Inversion: Should', (c) => 'Should the readings _______ unstable, ' + c + ' will repeat the measurement.', 'prove', ['proves', 'proving', 'to prove', 'proved'], 'Should inversion is followed by the base verb.', '<b>Kural:</b> <i>Should + subject + V1</i>.'],
    ['Inversion: Hardly', (c) => 'Hardly had ' + c + ' released the report _______ journalists began asking questions.', 'when', ['than', 'that', 'while', 'as'], 'Hardly pairs with when.', '<b>Kural:</b> <i>Hardly ... when</i>.'],
    ['Reduced Clause: Active', (c) => 'The analysts at ' + c + ' _______ the figures identified an error in the final table.', 'checking', ['checked', 'to check', 'were checked', 'having check'], 'Who were checking is reduced to checking.', '<b>Kural:</b> Etken relative clause → <i>V-ing</i>.'],
    ['Reduced Clause: Passive', (c) => 'The documents _______ by ' + c + ' will be stored for ten years.', 'approved', ['approving', 'to approve', 'were approving', 'having approve'], 'Which are approved becomes approved.', '<b>Kural:</b> Pasif relative clause → <i>V3</i>.'],
    ['Noun Clause: Whether', (c) => 'The board has not decided _______ ' + c + ' should receive additional funding.', 'whether', ['what', 'whose', 'which', 'how much'], 'The clause presents a yes/no alternative.', '<b>Kural:</b> Evet/hayır seçimi → <i>whether</i>.'],
    ['Connector: Contrast', (c) => c + ' has modern equipment; ________, its results still require independent verification.', 'nevertheless', ['consequently', 'similarly', 'therefore', 'for instance'], 'The second clause contrasts with the first.', '<b>Kural:</b> Beklenmeyen zıtlık → <i>nevertheless</i>.'],
    ['Preposition: Collocation', (c) => 'The final decision depends _______ the evidence collected by ' + c + '.', 'on', ['at', 'to', 'for', 'with'], 'Depend is followed by on.', '<b>Kural:</b> <i>depend on</i> kalıp ifadedir.'],
    ['Restatement: Concession', (c) => 'Although ' + c + ' is small, it serves a large regional population.', 'Despite its small size, {c} serves a large regional population.', ['Because {c} is small, it serves no one.', 'The size of {c} is unknown to the region.', 'Only a large centre can serve a regional population.', 'The regional population is smaller than {c}.'], 'Although + clause becomes despite + noun phrase without changing the contrast.', '<b>Kural:</b> <i>Although + clause</i> → <i>despite + noun phrase</i>.']
  ];

  const simulationTurkishTemplates = [
    (n) => ['Küçük mahalle kütüphaneleri yalnızca kitaplara erişim sağlamaz; komşuların bir araya geldiği ortak çalışma alanları da oluşturur. Ana düşünce hangisidir?', 'Mahalle kütüphaneleri bilgiye erişimin yanında sosyal bir işlev de üstlenir.', ['Kütüphaneler yalnızca sessiz okuma içindir.', 'Komşuluk ilişkileri yalnızca çevrim içi kurulabilir.', 'Kitaplar ortak çalışma alanlarında kullanılmaz.', 'Mahallelerde kütüphane bulunamaz.'], 'Paragraf bilgi erişimi ile sosyal işlevi birlikte verir.', '<b>Yöntem:</b> Ana düşünce, iki yönü de kapsamalıdır.'],
    (n) => ['Bir planın uygulanabilir olması, yalnızca iyi fikirler içermesine değil, kaynakların ve zamanın gerçekçi biçimde hesaplanmasına bağlıdır. Bu parçadan hangisi çıkarılır?', 'Uygulanabilir plan, fikirleri somut kaynak ve zaman hesabıyla ilişkilendirir.', ['İyi fikirler her zaman kendiliğinden uygulanır.', 'Zaman hesabı planlamada gereksizdir.', 'Kaynaklar hiçbir planı etkilemez.', 'Planlar yalnızca yaratıcı fikirlerden oluşur.'], 'Parça uygulanabilirliği gerçekçilik koşuluna bağlar.', '<b>Yöntem:</b> “Bağlıdır” yükleminin kurduğu ilişkiyi izleyin.'],
    (n) => ['Bir metindeki “bu nedenle” ifadesi, önceki cümlenin hangi işlevi üstlendiğini gösterir?', 'Önceki cümlenin neden, sonraki cümlenin sonuç olduğunu gösterir.', ['Önceki cümlenin örnek olduğunu gösterir.', 'İki cümlenin karşılaştırıldığını gösterir.', 'Sonraki cümlenin soru olduğunu gösterir.', 'Paragrafın konusunu değiştirir.'], 'Bu nedenle, önceki yargıdan sonuç çıkarır.', '<b>Kural:</b> “Bu nedenle” sonuç bildiren bağlayıcıdır.'],
    (n) => ['(I) Toprak nemi bitkinin gelişimini etkiler. (II) Düzenli ölçüm, sulama zamanını belirlemeye yardım eder. (III) Bazı kentlerde toplu taşıma ücretleri değişmiştir. (IV) Böylece su kullanımı daha verimli hâle gelir. Akışı bozan cümle hangisidir?', '(III)', ['(I)', '(II)', '(IV)', 'Bozan cümle yoktur'], 'III, bitki ve sulama zinciriyle ilgili değildir.', '<b>Yöntem:</b> Ortak konu ve gönderim zincirini kontrol edin.'],
    (n) => ['Aşağıdaki cümlelerin hangisinde “için” amaç anlamı taşır?', n + ' sınava hazırlanmak için sessiz bir oda seçti.', [n + ' yağmur için eve erken döndü.', n + ' senin için bir not bıraktı.', n + ' kardeşi için endişelendi.', n + ' bu söz için özür diledi.'], '“Hazırlanmak için” eylemin amacını bildirir.', '<b>Kural:</b> “İçin” fiilin hangi amaçla yapıldığını bildirirse amaç edatıdır.'],
    (n) => ['I. metin: Yerel pazarlar üreticiyle tüketiciyi doğrudan buluşturur. II. metin: Çevrim içi satışlar ürünlere farklı bölgelerden erişim sağlar. Ortak yargı hangisidir?', 'Farklı satış kanalları tüketiciye farklı erişim olanakları sunar.', ['Bir satış kanalı her bakımdan üstündür.', 'Yerel pazarlar çevrim içi satışları yok eder.', 'Çevrim içi satışta üretici bulunamaz.', 'Tüketici ürünlere yalnızca pazardan ulaşır.'], 'İki metin de erişim kolaylığını farklı kanallarla açıklar.', '<b>Yöntem:</b> Ortak yargı iki metni de dışlamamalıdır.'],
    (n) => ['“Yeni düzenleme, çalışanların görev paylaşımını açıklaştırdı.” cümlesinde “görev paylaşımını” hangi ögedir?', 'Belirtili nesne', ['Özne', 'Dolaylı tümleç', 'Zarf tümleci', 'Yüklem'], '“Neyi açıklaştırdı?” sorusunun yanıtıdır.', '<b>Yöntem:</b> Belirtili nesne için “neyi/kimi” sorulur.'],
    (n) => ['Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?', n + ' herşeyi zamanında tamamladı.', [n + ' birçok belge topladı.', n + ' hiçbir ayrıntıyı atlamadı.', n + ' birdenbire sustu.', n + ' bugün erken geldi.'], '“Her şey” ayrı yazılır.', '<b>Kural:</b> <i>Her şey</i> ayrı yazılır.'],
    (n) => ['“Etekleri zil çalmak” deyimi aşağıdaki durumlardan hangisini anlatır?', 'Çok sevinmek', ['Çok yorulmak', 'Kararsız kalmak', 'Bir işi geciktirmek', 'Bir şeyi gizlemek'], 'Deyim, büyük sevinç duymak anlamındadır.', '<b>Yöntem:</b> Deyimi gerçek görüntüsünden soyut anlama taşıyın.'],
    (n) => ['Aşağıdaki cümlelerin hangisinde anlatım bozukluğu vardır?', n + ' çalışan ekip, beraber birlikte çalışmaya başladı.', [n + ' sonuçları dikkatle inceledi.', n + ' raporu zamanında gönderdi.', n + ' soruları arkadaşlarına dağıttı.', n + ' toplantıya erken geldi.'], '“Beraber” ve “birlikte” aynı anlamı yinelediği için gereksiz sözcük vardır.', '<b>Kural:</b> Gereksiz tekrar anlatım bozukluğuna yol açar.']
  ];

  function makeSimulationEnglish() {
    const questions = [];
    simulationEnglishTemplates.forEach((template, templateIndex) => {
      for (let variant = 0; variant < 4; variant += 1) {
        const context = simulationContexts[(templateIndex + variant * 5) % simulationContexts.length];
        const [type, stemFactory, answer, distractors, explanation, rule] = template;
        const id = 'sim6-en-' + String(templateIndex * 4 + variant + 1).padStart(3, '0');
        const replaceContext = (value) => typeof value === 'string' ? value.replace(/{c}/g, context) : value;
        questions.push(question(id, type, stemFactory(context), replaceContext(answer), distractors.map(replaceContext), explanation, rule, type.includes('Inversion') || type.includes('Restatement') ? 5 : 4, ['simulation', 'ydt']));
      }
    });
    return questions;
  }

  function makeSimulationTurkish() {
    const questions = [];
    simulationTurkishTemplates.forEach((template, templateIndex) => {
      for (let variant = 0; variant < 4; variant += 1) {
        const context = ['kent yaşamında', 'okul ortamında', 'bilim iletişiminde', 'günlük planlamada'][variant];
        const [stem, answer, distractors, explanation, rule] = template(context);
        questions.push(question('sim6-tr-' + String(templateIndex * 4 + variant + 1).padStart(3, '0'), 'TYT Türkçe: Simülasyon', '(Bağlam: ' + context + ') ' + stem, answer, distractors, explanation, rule, 4, ['simulation', 'tyt-turkce']));
      }
    });
    return questions;
  }

  function makeSimulationMath() {
    const questions = [];
    const equationA = [2, 3, 4, 5, 6, 7];
    const equationX = [3, 5, 7, 9, 4, 6];
    const circleR = [2, 3, 4, 5, 6, 7];
    const sequenceN = [6, 9, 12, 15, 18, 21];
    const probabilityP = [2, 3, 4, 5, 6, 7];
    const rectangleW = [5, 6, 7, 8, 9, 10];
    const rectangleH = [7, 8, 9, 10, 11, 12];
    for (let i = 0; i < 30; i += 1) {
      const setIndex = Math.floor(i / 5);
      const a = equationA[setIndex];
      const x = equationX[setIndex];
      if (i % 5 === 0) {
        const b = 4 + setIndex;
        const c = a * x + b;
        questions.push(question('sim6-mat-' + String(i + 1).padStart(3, '0'), 'TYT Matematik: Denklem', a + 'x + ' + b + ' = ' + c + ' olduğuna göre x kaçtır?', String(x), [String(x - 2), String(x - 1), String(x + 1), String(x + 2)], 'ax = c−b = ' + (c - b) + ' ve x = ' + x + '.', '<b>Kural:</b> Bilinmeyeni yalnız bırakmak için sabit terim karşı tarafa alınır.', 4, ['simulation', 'tyt-matematik']));
      } else if (i % 5 === 1) {
        const r = circleR[setIndex];
        const area = r * r * 3;
        const areaDistractors = [area - 3, area + 3, r * 6, area + 6, area + 9].map(String).filter((value, index, values) => value !== String(area) && values.indexOf(value) === index).slice(0, 4);
        questions.push(question('sim6-mat-' + String(i + 1).padStart(3, '0'), 'TYT Matematik: Daire', 'π=3 alınırsa yarıçapı ' + r + ' cm olan dairenin alanı kaç cm²dir?', String(area), areaDistractors, 'Alan=πr²=3·' + r + '²=' + area + '.', '<b>Kural:</b> Daire alanı πr²’dir.', 4, ['simulation', 'tyt-matematik']));
      } else if (i % 5 === 2) {
        const n = sequenceN[setIndex];
        const sum = n * (n + 1) / 2;
        questions.push(question('sim6-mat-' + String(i + 1).padStart(3, '0'), 'TYT Matematik: Ardışık Sayılar', '1’den ' + n + '’e kadar olan doğal sayıların toplamı kaçtır?', String(sum), [String(sum - 1), String(sum + 1), String(n * n), String(n * 2)], 'Toplam=n(n+1)/2=' + n + '·' + (n + 1) + '/2=' + sum + '.', '<b>Kural:</b> 1’den n’e toplam n(n+1)/2’dir.', 3, ['simulation', 'tyt-matematik']));
      } else if (i % 5 === 3) {
        const p = probabilityP[setIndex];
        const probability = '1/' + p;
        const probabilityDistractors = ['1/2', '1/3', '2/' + p, '1/' + (p + 1), '3/' + (p + 2), '1/' + (p + 2)].filter((value, index, values) => value !== probability && values.indexOf(value) === index).slice(0, 4);
        questions.push(question('sim6-mat-' + String(i + 1).padStart(3, '0'), 'TYT Matematik: Olasılık', 'Eş olasılıklı ' + p + ' sonuçtan yalnızca biri istenen sonucu veriyor. Olasılık kaçtır?', probability, probabilityDistractors, 'Olasılık=istenen durum/tüm durum=1/' + p + '.', '<b>Kural:</b> Eş olasılıklı durumlarda P=istenen/tüm durum.', 3, ['simulation', 'tyt-matematik']));
      } else {
        const w = rectangleW[setIndex];
        const h = rectangleH[setIndex];
        const perimeter = 2 * (w + h);
        questions.push(question('sim6-mat-' + String(i + 1).padStart(3, '0'), 'TYT Matematik: Dikdörtgen', 'Kenarları ' + w + ' cm ve ' + h + ' cm olan dikdörtgenin çevresi kaç cmdir?', String(perimeter), [String(w + h), String(perimeter - 2), String(perimeter + 2), String(w * h)], 'Çevre=2(' + w + '+' + h + ')=' + perimeter + '.', '<b>Kural:</b> Dikdörtgen çevresi 2(a+b)’dir.', 3, ['simulation', 'tyt-matematik']));
      }
    }
    return questions;
  }

  const simulationScienceTemplates = [
    ['Biyoloji: Ekosistem', 'Besin zincirinde üreticilerin temel enerji kaynağı hangisidir?', 'Güneş ışığı', ['Toprak mineralleri', 'Oksijen', 'Tüketiciler', 'Ayrıştırıcılar'], 'Üreticiler fotosentezle güneş enerjisini kimyasal enerjiye çevirir.', '<b>Kural:</b> Ekosistemlerde enerji akışının ilk kaynağı çoğunlukla Güneş’tir.'],
    ['Kimya: Çözelti', 'Bir çözeltinin pH değeri 7’den küçükse çözelti nasıl nitelendirilir?', 'Asidik', ['Bazik', 'Nötr', 'Tuzsuz', 'Doymuş'], 'pH 7’nin altı asidik, üstü bazik, 7 nötrdür.', '<b>Kural:</b> pH ölçeğinde 7 nötr noktadır.'],
    ['Fizik: Hareket', 'Sabit hızla hareket eden bir cismin ivmesi kaçtır?', '0', ['1', '−1', 'Hızına eşit', 'Kütlesine eşit'], 'Hız değişmediği için ivme, hız değişiminin zamana oranı, sıfırdır.', '<b>Kural:</b> Sabit hız → Δv=0 → a=0.'],
    ['Biyoloji: Hücre', 'Hücrede kalıtsal bilginin büyük bölümünü taşıyan yapı hangisidir?', 'DNA', ['Glikoz', 'ATP', 'Su', 'Hücre duvarı'], 'Kalıtsal bilgi DNA üzerindeki genlerde taşınır.', '<b>Kural:</b> DNA, genetik bilginin temel taşıyıcısıdır.'],
    ['Kimya: Atom', 'Atom numarası hangi tanecik sayısını gösterir?', 'Proton', ['Nötron', 'Elektron kabuğu', 'Molekül', 'İyon'], 'Atom numarası çekirdekteki proton sayısına eşittir.', '<b>Kural:</b> Z=proton sayısı.'],
    ['Fizik: Enerji', 'Bir cismin kinetik enerjisi hangi büyüklüklerle doğrudan ilişkilidir?', 'Kütlesi ve hızının karesi', ['Sadece yüksekliği', 'Sadece sıcaklığı', 'Rengi ve hacmi', 'Basıncı ve yoğunluğu'], 'Kinetik enerji Ek=mv²/2 bağıntısıyla bulunur.', '<b>Kural:</b> Hareket enerjisi Ek=½mv².'],
    ['Biyoloji: Solunum', 'Oksijenli solunumun temel amacı nedir?', 'ATP üretmek', ['DNA’yı kopyalamak', 'Hücreyi susuz bırakmak', 'Mineral depolamak', 'Işık üretmek'], 'Besinlerdeki kimyasal enerji ATP biçiminde kullanılabilir hâle getirilir.', '<b>Kural:</b> ATP hücresel enerji aktarımında kullanılır.'],
    ['Kimya: Bağ', 'İyonik bağ genel olarak hangi tanecikler arasında oluşur?', 'Zıt yüklü iyonlar', ['İki nötr atom çekirdeği', 'Yalnızca iki metal', 'İki nötron', 'İki çözücü molekülü'], 'İyonik bağ elektrostatik çekimle zıt yüklü iyonları bir arada tutar.', '<b>Kural:</b> Katyon ve anyon arasındaki çekim iyonik bağdır.'],
    ['Fizik: Elektrik', 'Elektrik akımının birimi hangisidir?', 'Amper', ['Volt', 'Ohm', 'Joule', 'Watt'], 'Akım amper, gerilim volt, direnç ohm ile ölçülür.', '<b>Kural:</b> Akım birimi A (amper)’dir.'],
    ['Biyoloji: Genetik', 'Bir canlının gözlenen özelliklerinin tümüne ne ad verilir?', 'Fenotip', ['Genotip', 'Mutasyon', 'Kromozom', 'Alel'], 'Fenotip gözlenen özelliklerin; genotip genetik yapının adıdır.', '<b>Kural:</b> Fenotip = genotip + çevrenin gözlenebilir sonucu.']
  ];

  function makeSimulationScience() {
    const questions = [];
    simulationScienceTemplates.forEach((item, index) => {
      for (let variant = 0; variant < 2; variant += 1) {
        const [type, stem, answer, distractors, explanation, rule] = item;
        questions.push(question('sim6-fen-' + String(index * 2 + variant + 1).padStart(3, '0'), type, (variant === 0 ? stem : stem.replace('hangisidir?', 'hangisi doğrudur?')) + ' [' + (variant === 0 ? 'Kavram kontrolü' : 'Uygulama kontrolü') + ']', answer, distractors, explanation, rule, 3, ['simulation', 'tyt-fen']));
      }
    });
    return questions;
  }

  function day6() {
    const questions = [
      ...makeSimulationEnglish(),
      ...makeSimulationTurkish(),
      ...makeSimulationMath(),
      ...makeSimulationScience()
    ];
    return bank(6, 'Tam Deneme Simülasyonu', 170, 7200, {
      'ydt-english': 80,
      'tyt-turkish': 40,
      'tyt-mathematics': 30,
      'tyt-science-optional': 20
    }, questions, { sections: ['YDT İngilizce', 'TYT Türkçe', 'TYT Matematik', 'TYT Fen/Bilim (opsiyonel)'], note: 'Özgün pratik içeriğidir; resmî sınav sorusu değildir.' });
  }

  window.YKS_QUESTION_BANKS.day6 = day6();

  function normaliseDay1() {
    if (!window.EXAM_DATABASE) return;
    const database = window.EXAM_DATABASE;
    const totals = Object.values(database).reduce((sum, list) => sum + (Array.isArray(list) ? list.length : 0), 0);
    Object.values(database).forEach((list) => {
      if (!Array.isArray(list)) return;
      list.forEach((item) => {
        const originalAnswer = item.options.find((option) => option.key === item.correctAnswer) || item.options[0];
        const rotated = rotateOptions(item.id, originalAnswer.text, item.options.filter((option) => option !== originalAnswer).map((option) => option.text));
        item.options = rotated.options;
        item.correctAnswer = rotated.correctAnswer;
        item.ruleExplanation = item.ruleExplanation || item.lectureNote || '<b>Kural:</b> Sorunun kökünü, verilen bilgileri ve seçeneklerin birbirini dışlayıp dışlamadığını adım adım kontrol edin.';
        item.tags = item.tags || ['day1', 'diagnostic'];
      });
    });
    window.YKS_QUESTION_BANKS.day1 = {
      day: 1,
      subject: 'Temel Değerlendirme',
      totalQuestions: totals,
      timeLimit: 25200,
      questions: Object.values(database).flat(),
      note: 'Özgün pratik içeriğidir; resmî sınav sorusu değildir.'
    };
  }

  normaliseDay1();
})();
