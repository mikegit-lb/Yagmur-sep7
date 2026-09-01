# 6 Günlük YDT Sınav Merkezi Çalışma Programı
## 220 Gün Kalan Öğrenci İçin Sınav Zorluğunda Hazırlık Planı

---

## 🎯 HEDEF PROFİL
- **Kalan Süre:** 220 gün (YKS Haziran 2027)
- **Hedef:** YDT Dil Sıralaması İlk 5.000
- **Mevcut Seviye:** 51.5 YDT Net (57 D / 22 Y) | 45.25 TYT Net
- **Zorluk Seviyesi:** Özgün, sınav biçimine yakın pratik içerik (ÖSYM sorusu değildir)

---

## 📁 KLASÖR YAPISI
```
sinav-merkezi-6gun/
├── index.html                    # Ana navigasyon ve gün seçici
├── sinav_merkezi.html            # Gün 1 - Mevcut sınav merkezi (taşıdı)
├── gun-2-ydt-ingilizce.html      # Gün 2 - YDT İngilizce Derinlemesine
├── gun-3-tyt-turkce.html         # Gün 3 - TYT Türkçe & Paragraf
├── gun-4-tyt-matematik.html      # Gün 4 - TYT Matematik Temel İnşa
├── gun-5-ydt-reading.html        # Gün 5 - YDT Reading Masterclass
├── gun-6-simulasyon.html         # Gün 6 - Tam Deneme Simülasyonu
├── assets/
│   ├── shared-styles.css         # Ortak stiller
│   ├── shared-utils.js           # Ortak fonksiyonlar (localStorage, timer, PDF)
│   ├── exam-engine.js            # Sınav motoru (puanlama, hata defteri)
│   └── vocab-engine.js           # Kelime motoru (Leitner SRS)
├── data/
│   ├── question-banks.js         # Gün 1–6 özgün soru bankaları ve metadata
│   └── vocab-master.json         # 90 hedef kelime (6 gün x 15)
└── README.md                     # Kullanım kılavuzu
```

---

## 📅 GÜN LÜK PROGRAM DETAYLARI

### GÜN 1: TEMEL DEĞERLENDİRME VE HAZIRLIK (Mevcut `sinav_merkezi.html`)
**Süre:** 6-7 saat | **Odak:** Mevcut seviye tespiti + Hata defteri kurulumu

| Blok | Süre | Aktivite | Çıktı |
|------|------|----------|-------|
| 06:30-07:00 | 30 dk | Planlama & Hedef Ayarla | Günlük hedefler netleştirildi |
| 07:00-09:00 | 120 dk | **100 YDT İngilizce** (Zamanlı) | Ham net, hata listesi |
| 09:00-09:15 | 15 dk | Mola | - |
| 09:15-10:30 | 75 dk | **40 TYT Türkçe** (Zamanlı) | Ham net, hata listesi |
| 10:30-10:45 | 15 dk | Mola | - |
| 10:45-11:45 | 60 dk | **30 TYT Matematik** (Ders notlu) | Ham net, zayıf konular |
| 11:45-12:15 | 30 dk | **3 Reading Pasajı** (12 soru) | Okuma hızı, anlama |
| 12:15-13:15 | 60 dk | Öğle Molası | - |
| 13:15-14:15 | 60 dk | **Hata Defteri Analizi** - Her soru etiketlenir | Konu bazlı hata haritası |
| 14:15-15:00 | 45 dk | **Leitner Kelime - Kutu 1** (15 kelime) | 15 kelime Kutu 1'e |
| 15:00-15:15 | 15 dk | Mola | - |
| 15:15-16:00 | 45 dk | **Kanban Kurulumu** (Öğretmen/Öz) | Anlatılacaklar/İşlenenler/Tekrar |
| 16:00-16:30 | 30 dk | Günlük Net Kaydı + Yedek Alma | JSON yedek, streak=1 |

**Başarı Kriterleri:**
- [ ] 182 soru tamamlandı, net hesaplandı (100 YDT + 40 Türkçe + 30 Matematik + 12 Reading)
- [ ] Tüm hatalar "Konu > Alt Konu > Hata Tipi" ile etiketlendi
- [ ] Kanban'da en az 8 aksiyon kartı var
- [ ] 15 kelime Leitner sistemine girdi

---

### GÜN 2: YDT İNGİLİZCE DERİNLEMESİ - GRAMER VE YAPI MASTERY
**Süre:** 7-8 saat | **Odak:** Gün 1 hatalarının kök nedenlerini çözme + İleri seviye gramer

#### Yeni Soru Seti (120 Soru - özgün sınav biçimli pratik)
| Konu | Soru Sayısı | Zorluk | Açıklama |
|------|-------------|--------|----------|
| Tenses (Mixed/Advanced) | 20 | ⭐⭐⭐⭐⭐ | Future Perfect Continuous, Past Perfect Continuous, Mixed Conditionals içinde tense |
| Modals (Semi-modals, Perfect Modals) | 15 | ⭐⭐⭐⭐ | Must have done, Could have been doing, Needn't have done vs Didn't need to |
| Inversion (Negative Adverbials, Conditionals) | 15 | ⭐⭐⭐⭐⭐ | Never have I..., Not only..., Should you..., Were I to... |
| Reduced Relative Clauses & Participles | 15 | ⭐⭐⭐⭐ | Having been done, Being done, To be done yapıları |
| Noun Clauses & Reported Speech (Advanced) | 10 | ⭐⭐⭐ | That-clause, Wh-clause, Question word + infinitive |
| Prepositions (Dependent Prepositions, Phrasal) | 15 | ⭐⭐⭐⭐ | 50+ dependent prep + 20 phrasal verb (ayrıştırma odaklı) |
| Connectors & Cohesion (Discourse Markers) | 10 | ⭐⭐⭐ | However, Nevertheless, In contrast, Consequently kullanım farkları |
| Word Formation (Prefix/Suffix/Root) | 10 | ⭐⭐⭐⭐ | Academic Word List'tan 50 kök kelime türetme |
| Restatement / Paraphrase | 10 | ⭐⭐⭐⭐⭐ | Cümle anlamını koruyarak yeniden yazma (YDT tarzı) |

#### Gün 2 Program Akışı
| Blok | Süre | Aktivite | Araç |
|------|------|----------|------|
| 06:30-07:00 | 30 dk | Gün 1 Hata Defteri Review - YDT hatalarını konu bazlı grupla | `gun-2-ydt-ingilizce.html` → Hata Analiz Paneli |
| 07:00-09:30 | 150 dk | **YDT İngilizce 120 Soru** (Zamanlı: 150 dk) | `gun-2-ydt-ingilizce.html` - Tam sınav modu |
| 09:30-09:45 | 15 dk | Mola | - |
| 09:45-11:15 | 90 dk | **Hata Analizi Derinlemesine** - Her yanlış için: Kural + Neden Yanlış + Doğru Yapı | Hata Defteri "Gramer Kuralı" butonları |
| 11:15-11:30 | 15 dk | Mola | - |
| 11:30-12:30 | 60 dk | **Konu Tekrar Kartları Oluştur** - En zayıf 5 konu için özet kart | `index.html` → Kelime Koçu'ya "Kural Kartı" olarak ekle |
| 12:30-13:30 | 60 dk | Öğle Molası | - |
| 13:30-14:30 | 60 dk | **IELTS Writing Task 1 - Type 2** (Bar & Line) | `server.js` → localhost:3000 |
| 14:30-15:15 | 45 dk | **Leitner Session** - Gün 1 kutuları review + 15 yeni kelime (Kutu 1) | `index.html` → Kelime Koçu |
| 15:15-15:30 | 15 dk | Mola | - |
| 15:30-16:30 | 60 dk | **Hedefli Pratik** - Sadece zayıf konulardan 30 soru çöz | `gun-2-ydt-ingilizce.html` → "Zayıf Konu Pratiği" modu |
| 16:30-17:00 | 30 dk | Günlük Net + Kanban Güncelle + Yedek | - |

**Başarı Kriterleri:**
- [ ] 120 soru tamamlandı, net ≥ Gün 1 YDT neti + 3
- [ ] En zayıf 3 konu için "Kural Kartı" oluşturuldu
- [ ] IELTS Type 2 essay Band 6.0+ alındı
- [ ] 30 kelime Leitner'de (15 Kutu 2+, 15 Kutu 1)

---

### GÜN 3: TYT TÜRKÇE VE PARAGRAF MASTERY
**Süre:** 6-7 saat | **Odak:** Paragraf mantığı, anlam ilişkileri, dil bilgisi hassasiyeti

#### Yeni Soru Seti (50 Soru - özgün sınav biçimli pratik)
| Konu | Soru Sayısı | Zorluk | Açıklama |
|------|-------------|--------|----------|
| Paragraf: Ana Fikir & Konu Cümlesi | 8 | ⭐⭐⭐⭐ | Dolaylı ana fikir, yazım amacı, okuyucu kitlesi |
| Paragraf: Anlam İlişkileri (Neden-Sonuç, Karşılaştırma) | 8 | ⭐⭐⭐⭐ | Bağlaç bazlı anlam analizi, zıtlık/benzerlik |
| Paragraf: Cümle Yerleştirme / Akışı Bozan | 8 | ⭐⭐⭐⭐⭐ | Köprü cümleler, referans zinciri, tutarlılık |
| Paragraf: Çoklu Metin / Karşılaştırmalı | 6 | ⭐⭐⭐⭐⭐ | İki metin arası ortak tema, farklı bakış açısı |
| Dil Bilgisi: Sözcük Türleri & Yapım Ekleri | 6 | ⭐⭐⭐ | İsim/Fiil/Sıfat/Edat ayırma, türetme ekleri |
| Dil Bilgisi: Cümle Öğeleri & Çeşitleri | 5 | ⭐⭐⭐ | Özne/Yüklem/Nesne/Örtük Özne, Cümle türleri |
| Dil Bilgisi: Anlam Bozuklukları & Noktalama | 5 | ⭐⭐⭐⭐ | Anlatım bozukluğu, virgül/noktalı virgül kullanımı |
| Söz Varlığı: Deyim/Atasözü/ Birleşik Fiil | 4 | ⭐⭐⭐ | Bağlamda anlam belirleme |

#### Gün 3 Program Akışı
| Blok | Süre | Aktivite |
|------|------|----------|
| 06:30-07:00 | 30 dk | Gün 2 YDT hatalarını hızlı tekrar + Gün 1 Türkçe hatalarını review |
| 07:00-08:30 | 90 dk | **TYT Türkçe 50 Soru** (Zamanlı: 60 dk + 30 dk analiz) |
| 08:30-08:45 | 15 dk | Mola |
| 08:45-10:15 | 90 dk | **Paragraf Çözüm Teknikleri Atölyesi** - Her hata için: "Neden bu cevap?" analizi |
| 10:15-10:30 | 15 dk | Mola |
| 10:30-11:30 | 60 dk | **Dil Bilgisi Hızlı Tekrar** - Yanlış yapılan konular için mini ders notları |
| 11:30-12:00 | 30 dk | **Leitner Review** - Tüm kutular (Gün 1-2-3 birikimi) |
| 12:00-13:00 | 60 dk | Öğle Molası |
| 13:00-14:00 | 60 dk | **Yazılı Paragraf Yazma** - Verilen ana fikirden paragraf üretme (5 paragraf) |
| 14:00-14:45 | 45 dk | **Hedefli Pratik** - Zayıf konulardan 20 soru |
| 14:45-15:00 | 15 dk | Mola |
| 15:00-15:30 | 30 dk | Günlük Net + Kanban + Yedek |

**Başarı Kriterleri:**
- [ ] 50 soru tamamlandı, net ≥ Gün 1 Türkçe neti + 2
- [ ] Paragraf çözümünde "Köprü Cümle" yöntemi oturuldu
- [ ] 5 orijinal paragraf yazıldı (akademik dilde)
- [ ] 45 kelime Leitner'de aktif

---

### GÜN 4: TYT MATEMATİK TEMEL İNŞA VE HIZ
**Süre:** 6-7 saat | **Odak:** Formül ezberi değil, mantık ve hız; "Ders Notu" ile her soru öğretici

#### Yeni Soru Seti (40 Soru - özgün sınav biçimli pratik + ders notlu)
| Konu | Soru Sayısı | Zorluk | Ders Notu Odak |
|------|-------------|--------|----------------|
| Sayılar & Basamak / Modüler Aritmetik | 5 | ⭐⭐⭐⭐ | 4'e/8'e/9'a bölünebilme, basamak değeri, kalan bulma |
| Mutlak Değer & Eşitsizlikler | 5 | ⭐⭐⭐⭐ | |x-a|+|x-b|<c, kareköklü eşitsizlikler |
| Fonksiyonlar (Bileşke, Ters, Grafik) | 5 | ⭐⭐⭐⭐ | f(g(x)), f⁻¹(x), asimptot, tanımlık kümesi |
| Polinomlar & Kökler (Vieta, Karekök) | 4 | ⭐⭐⭐⭐ | x₁+x₂, x₁·x₂, kökler arası ilişki |
| Olasılık & Permütasyon/Kombinasyon | 5 | ⭐⭐⭐⭐ | Koşullu olasılık, Bayes, tekrarlı/tekrarsız permütasyon |
| Veri Analizi (Ortalama, Medyan, Mod, Standart Sapma) | 4 | ⭐⭐⭐ | Kutu grafiği, çeyrekler arası açıklık, outliers |
| Geometri: Üçgen & Daire (Benzerlik, Teoremler) | 5 | ⭐⭐⭐⭐ | Euclid, Alan formülleri, iç/çember teoremleri |
| Geometri: Katlama & Koordinat | 4 | ⭐⭐⭐⭐⭐ | Katlama geometrisi, doğrusal denklem sistemleri |
| Problemler: İş/Hareket/Kar-Zarar/Orantı | 3 | ⭐⭐⭐ | Yeni nesil rutin olmayan problemler |

#### Gün 4 Program Akışı
| Blok | Süre | Aktivite |
|------|------|----------|
| 06:30-07:00 | 30 dk | Gün 3 hataları review + Matematik zayıf konuları (Gün 1'den) tespit |
| 07:00-08:30 | 90 dk | **TYT Matematik 40 Soru** (Zamanlı: 60 dk + 30 dk "Ders Notu" okuma) |
| 08:30-08:45 | 15 dk | Mola |
| 08:45-10:15 | 90 dk | **Ders Notu Derinlemesine** - Her sorunun altındaki not: Formül + Mantık + Alternatif Çözüm |
| 10:15-10:30 | 15 dk | Mola |
| 10:30-11:30 | 60 dk | **Hız Teknikleri Atölyesi** - Pratik yöntemler: Deneme yanılma, geriye doğru çözme, grafiksel |
| 11:30-12:00 | 30 dk | **Leitner Review** - Tüm birikim |
| 12:00-13:00 | 60 dk | Öğle Molası |
| 13:00-14:00 | 60 dk | **Konu Bazlı Mini Test** - En zayıf 3 konudan 15 soru (hız odaklı) |
| 14:00-14:45 | 45 dk | **Formül/Kural Özet Kartları** - Cep boyu formül kartları oluştur (fiziksel/kağıt) |
| 14:45-15:00 | 15 dk | Mola |
| 15:00-15:30 | 30 dk | Günlük Net + Kanban + Yedek |

**Başarı Kriterleri:**
- [ ] 40 soru tamamlandı, net ≥ Gün 1 Matematik neti + 3
- [ ] Her soru için "Ders Notu" okunup anlaşıldı
- [ ] 10 adet cep formül kartı hazırlandı
- [ ] 60 kelime Leitner'de aktif

---

### GÜN 5: YDT READING MASTERCLASS - İLERİ SEVİYE OKUMA
**Süre:** 6-7 saat | **Odak:** Akademik metin analizi, çıkarımsal sorular, hızlı okuma

#### Yeni Soru Seti (4 Pasaj + 16 Soru - YDT/YDS Seviyesi)
| Pasaj | Tema | Soru | Zorluk | Beceriler |
|-------|------|------|--------|-----------|
| 1 | Nörobilim / Bilişsel Bilim | 4 | ⭐⭐⭐⭐⭐ | Bilimsel terminoloji, referans takibi, ana argüman |
| 2 | Arktik İklim & Jeopolitik | 4 | ⭐⭐⭐⭐ | Çoklu bakış açısı, veri yorumu, yazar tonu |
| 3 | Yapay Zeka Etik & Felsefe | 4 | ⭐⭐⭐⭐⭐ | Soyut kavramlar, karşıt argümanlar, sentez |
| 4 | Tarih / Sosyoloji (Uzun Pasaj) | 4 | ⭐⭐⭐⭐ | Uzun metin dayanıklılığı, detay soruları, çıkarım |

**Soru Tipleri Dağılımı:**
- Main Idea / Primary Purpose: 4
- Detail / Explicit Information: 4
- Inference / Implied Meaning: 4
- Vocabulary in Context: 2
- Author's Tone / Attitude: 2

#### Gün 5 Program Akışı
| Blok | Süre | Aktivite |
|------|------|----------|
| 06:30-07:00 | 30 dk | Gün 4 hataları review + Reading stratejisi hatırlatma (Skimming/Scanning/Close Reading) |
| 07:00-09:00 | 120 dk | **4 Pasaj + 16 Soru** (Zamanlı: 80 dk çözme + 40 dk analiz) |
| 09:00-09:15 | 15 dk | Mola |
| 09:15-10:45 | 90 dk | **Pasaj Derin Analiz** - Her pasaj için: Yapı haritası + Ana argüman zinciri + Yazarın niyeti |
| 10:45-11:00 | 15 dk | Mola |
| 11:00-12:00 | 60 dk | **Akademik Kelime Çıkarımı** - Pasajlardan 20 yeni akademik kelime tespit + Leitner'e ekle |
| 12:00-13:00 | 60 dk | Öğle Molası |
| 13:00-14:00 | 60 dk | **IELTS Writing Task 1 - Type 3** (Pie & Bar) + AI Değerlendirme |
| 14:00-14:45 | 45 dk | **Hızlı Okuma Egzersizi** - 2 yeni pasaj, sadece ana fikir bulma (5 dk/pasaj) |
| 14:45-15:00 | 15 dk | Mola |
| 15:00-15:30 | 30 dk | Günlük Net + Kanban + Yedek |

**Başarı Kriterleri:**
- [ ] 16 soru tamamlandı, doğruluk ≥ %80
- [ ] 4 pasaj için "Yapı Haritası" çizildi
- [ ] 20 yeni akademik kelime Leitner'e eklendi (Toplam 80)
- [ ] IELTS Type 3 essay Band 6.0+

---

### GÜN 6: TAM DENEME SİMÜLASYONU - YKS GERÇEKÇİLİĞİ
**Süre:** 8-9 saat | **Odak:** Sınav günü simülasyonu, stres yönetimi, zaman yönetimi, dayanıklılık

#### Tam Deneme Seti (170 Soru - gerçekçi süre provası)
| Oturum | Ders | Soru | Süre | Not |
|--------|------|------|------|-----|
| **1. Oturum** | YDT İngilizce | 80 | 120 dk | Resmi YDT süresi |
| **Ara** | - | - | 40 dk | Yemek, dinlenme, tuvalet |
| **2. Oturum** | TYT Türkçe | 40 | 45 dk | Resmi TYT Türkçe süresi |
| | TYT Matematik | 30 | 50 dk | Resmi TYT Matematik süresi |
| | TYT Fen/Bilim (Opsiyonel) | 20 | 30 dk | Sadece DIL öğrencisi için opsiyonel |
| **Toplam** | | **170** | **~285 dk** | Gerçekçi sınav günü ritmi |

#### Gün 6 Program Akışı (Sınav Günü Simülasyonu)
| Zaman | Aktivite | Detay |
|-------|----------|-------|
| 08:00-08:30 | **Uyanış & Hazırlık** | Hafif kahvaltı, su, tuvalet, masayı düzenle, telefon uzağa |
| 08:30-08:40 | **Mental Hazırlık** | Nefes egzersizi, vizyon: "Sakin, odaklı, hazırım" |
| 08:40-10:40 | **YDT İNGİLİZCE (80 Soru - 120 dk)** | `gun-6-simulasyon.html` → "Sınav Modu" (Pause yok, geri sayım) |
| 10:40-11:20 | **UZUN MOLA (40 dk)** | Yemek (hafif protein), su, yürüyüş, GÖZ KAPATMA/YATMA YOK |
| 11:20-11:25 | **2. Oturum Hazırlığı** | Masayı temizle, su al, nefes al |
| 11:25-12:10 | **TYT TÜRKÇE (40 Soru - 45 dk)** | Hız odaklı, paragraf stratejisi uygula |
| 12:10-12:15 | **Kısa Mola (5 dk)** | Su, nefes, zihni sıfırla |
| 12:15-13:05 | **TYT MATEMATİK (30 Soru - 50 dk)** | Pratik yöntemler, formül kartlarını kullanma (hafızadan) |
| 13:05-13:10 | **Kısa Mola (5 dk)** | - |
| 13:10-13:40 | **TYT FEN/BİLİM (20 Soru - 30 dk)** | Opsiyonel - DIL öğrencisi için bonus |
| 13:40-14:30 | **ÖĞLE MOLASI (50 dk)** | Tam dinlenme, hafif yemek, güçlenme |
| 14:30-16:00 | **DETAYLI HATA ANALİZİ (90 dk)** | 170 soru üzerinden: Her yanlış/boş için kök neden analizi |
| 16:00-16:30 | **LEITNER FINAL REVIEW** | 90 kelime tam turu - Kutu 5'e ulaşanları arşivle |
| 16:30-17:00 | **6 GÜN ÖZET RAPORU** | Net trendi, zayıf konular, gelecek hafta planı, motivasyon notu |

**Başarı Kriterleri:**
- [ ] 170 soru gerçekçi oturum sürelerinde çözüldü
- [ ] Mola süreleri aşıldı (disiplin)
- [ ] Toplam Net ≥ 140 (YDT 65+ | TYT 75+)
- [ ] Hata analizi: "Bilmeme" vs "Dikkatsizlik" vs "Zaman" ayrımı yapıldı
- [ ] 6 günlük trend grafiği çizildi (index.html → Karne)
- [ ] Gelecek hafta için "Odaklanılacak 3 Konu" belirlendi

---

## 🔧 TEKNİK ALTYAPI GEREKSİNİMLERI

### 1. Ortak JavaScript Modülleri (`assets/`)
```javascript
// shared-utils.js - Tüm günlerde ortak
- localStorage yönetimi (save/load/backup/restore)
- Timer motoru (countdown, pause, resume, sessionStorage)
- PDF/Print motoru (html2pdf.js wrapper)
- Tema yönetimi (dark/light, localStorage sync)
- Bildirim sistemi (toast, modal, confetti)

// exam-engine.js - Sınav mantığı
- Soru render motoru (passage, options, math rendering)
- Cevap kaydetme + anlık geri bildirim
- Net hesaplama (D - Y/4) - anlık güncelleme
- Hata defteri: auto-save + kategori etiketleme + not alma
- Bayrak sistemi (flag/unflag)
- Tamamlanma durumu + navigasyon pill'leri

// vocab-engine.js - Leitner SRS
- 5 kutu algoritması (1→2→3→4→5, hata→1)
- Web Speech API entegrasyonu (telaffuz)
- İlerleme takibi (kutu dağılımı, streak, due cards)
- JSON import/export
```

### 2. Soru Bankası Standardı (`data/question-banks.js`)

Gün 2–6 bankaları tek bir JS kaynağından üretilir; her soruda beş seçenek, tek doğru anahtar, açıklama, kural notu, zorluk ve etiket bulunur. Gün 1’in mevcut gömülü bankası da yükleme sırasında aynı cevap dağılımı ve alan standardına normalize edilir.
```json
{
  "day": 2,
  "subject": "YDT İngilizce",
  "totalQuestions": 120,
  "timeLimit": 9000,
  "categories": {
    "tenses-advanced": 20,
    "modals-perfect": 15,
    "inversion": 15,
    "reduced-clauses": 15,
    "noun-clauses": 10,
    "prepositions-phrasal": 15,
    "connectors": 10,
    "word-formation": 10,
    "restatement": 10
  },
  "questions": [
    {
      "id": "ydt2-001",
      "type": "Tenses: Mixed Conditionals",
      "difficulty": 5,
      "questionText": "...",
      "options": [{"key":"A","text":"..."}, ...],
      "correctAnswer": "C",
      "explanation": "Detaylı ÖSYM tarzı çözüm...",
      "ruleExplanation": "<b>Kural:</b> Mixed Conditionals...<br><b>İpucu:</b> Zaman çizgisi...",
      "lectureNote": null,
      "tags": ["conditionals", "mixed-time", "advanced"]
    }
  ]
}
```

### 3. Günlük HTML Şablonu (Her `gun-X.html` için)
- Header: Gün başlığı, tarih, geri sayım (YKS'e kalan gün), tema toggle, ses
- Nav: Sekme yapısı (Sınav | Hata Defteri | Analiz | Kelime | Ayarlar)
- Ana Alan: Soru kartları (grid/scroll), timer, bitir butonu
- Footer: Print/PDF butonları, ilerleme çubuğu
- Script: `shared-utils.js`, `question-banks.js`, `daily-quiz.js` yükleme

---

## 📊 TAKİP VE DEĞERLENDİRME METRİKLERİ

### Günlük Loglanacak Veriler (localStorage: `yks_6gun_log`)
```json
{
  "day": 2,
  "date": "2026-09-02",
  "nets": {
    "ydt": 68.5,
    "turkce": 32.0,
    "matematik": 24.5,
    "total": 125.0
  },
  "accuracy": {
    "ydt": 78,
    "turkce": 80,
    "matematik": 82
  },
  "mistakes": {
    "bySubject": {"ydt": 18, "turkce": 8, "matematik": 5},
    "byType": {"concept": 15, "careless": 10, "time": 6},
    "topWeakTopics": ["Inversion", "Reduced Clauses", "Perfect Modals"]
  },
  "vocab": {"total": 30, "box1": 15, "box2": 10, "box3": 5, "box4": 0, "box5": 0},
  "kanban": {"toTeach": 3, "processing": 4, "review": 5},
  "ielts": {"task": "Type 2", "band": 6.5},
  "studyHours": 7.5,
  "mood": 4,
  "notes": "Inversion konusunda hâlâ karışıklık var, gün 7'de tekrar."
}
```

### 6 Gün Sonunda Çıktı: `6gun-rapor.html` (Otomatik Üretilen)
- Net trendi grafiği (Chart.js)
- Konu bazlı ısı haritası
- Kelime ilerlemesi (Leitner dağılımı)
- IELTS writing skor trendi
- Haftalık çalışma planı önerisi (AI tabanlı)
- PDF indirme butonu

---

## 🎒 ÖĞRENCİ İÇİN KULLANIM KILAVUZU

### Başlangıç
1. `sinav-merkezi-6gun/index.html` aç
2. "Gün 1: Değerlendirme" butonuna bas → `sinav_merkezi.html` açılır
3. Gün 1'i tamamla, JSON yedeğini al
4. Gün 2'ye geç: `gun-2-ydt-ingilizce.html` aç

### Her Gün İçin
- **Sınav Modu:** Timer başlar, durdurulamaz (sadece mola butonu var)
- **Analiz Modu:** Test bitince açılır, her soru için "Gramer Kuralı" butonu çalışır
- **Hata Defteri:** Yanlış/boş sorular otomatik kaydedilir, kategori filtresi var
- **Kelime:** Sağ panelden/slide-out'tan erişim, Leitner algoritması otomatik
- **PDF/Print:** Her an "Yazdır" veya "PDF İndir" ile A4 çıktısı

### Öğretmen/Koç İçin
- `teacher.html` aç → Öğrencinin `localStorage` verilerini oku (aynı tarayıcıdaysa)
- Veya öğrenci "Veri Yedekle" → JSON dosyası gönderir → Öğretmen "Veri Yükle" ile analiz yapar
- Kanban panosu, hata analizi, net grafikleri öğretmen panelinde görüntülenir

---

## 🚀 KURULUM VE ÇALIŞTIRMA

### Doğrudan Tarayıcıda (Sunucusuz)
```bash
# Klasöre gir
cd sinav-merkezi-6gun

# index.html'i çift tıkla veya tarayıcıya sürükle
# Tüm dosyalar localStorage kullanır, sunucu gerekmez
```

### Node.js ile (IELTS Writing için)
```bash
cd sinav-merkezi-6gun
npm init -y
npm install  # package.json varsa
node server.js  # localhost:3000 için
```

### VS Code Live Server (Önerilen)
1. Klasörü VS Code ile aç
2. `index.html` sağ tık → "Open with Live Server"
3. Tüm günler `http://localhost:5500/gun-X.html` ile erişilebilir

---

## 📈 6 GÜN SONRASI: SÜREÇ DEVAM ETTİRME

### Haftalık Döngü (6 Günlük Bloklar)
| Hafta | Odak | Açıklama |
|-------|------|----------|
| 1-2 | **Temel İnşa** | Bu 6 günlük program 2 kez tekrarlanır (Farklı soru setleriyle) |
| 3-4 | **Hız & Doğruluk** | Süreler %10 kısaltılır, hata defteri odaklı tekrar |
| 5-8 | **Deneme Haftaları** | Her hafta 1 tam deneme (Gün 6 formatında) + 5 gün hedefli çalışma |
| 9+ | **Sınav Simülasyonu** | Resmi deneme takvimiyle senkronize, tam gün simülasyonu |

### Kaynak Yönetimi
- **Soru Kaynağı:** MODADİL, Resmi YKS, YDT Denemeleri, YDS/YÖKDİL arşivleri
- **Kelime Kaynağı:** Academic Word List (Coxhead), MODADİL 60 Gün, YDS Sık Çıkanlar
- **Gramer Kaynağı:** MODADİL Gramer Kitabı, English Grammar in Use (Advanced), YDT Özel Gramer

---

## ⚠️ KRİTİK BAŞARI FAKTÖRLERİ

1. **Disiplin > Motivasyon** - Program sabah 06:30'da başlar, istisnasız
2. **Hata Defteri Kutsal** - Her yanlış bir öğrenme fırsatıdır, atlanmaz
3. **Leitner Günlük** - 15 dk bile olsa her gün kelime yapılır
4. **Gerçek Süreler** - Sınav süresinde çözmek, zaman yönetimini oturtur
5. **Analiz > Çözüm** - Soru çözmek kolay, neden yanlış yaptığını anlamak zordur
6. **Fiziksel Sağlık** - Uyku (7-8 saat), su (3L), hareket (günlük 30 dk) şart
7. **Dijital Detoks** - Çalışma saatlerinde telefon uzak, sadece sınav sekmesi açık

---

## 📝 NOTLAR

- Bu program **220 gün kalan** bir öğrenci için **yoğunlaştırılmış 6 günlük bir "bootcamp"** tasarımıdır
- Normal haftalık programda bu 6 gün 2-3 haftaya yayılır
- Her günün sonunda **mutlaka JSON yedek alınır** (veri kaybı riski sıfır)
- Tüm dosyalar **tek sayfa uygulaması (SPA)** mantığında, offline çalışır
- `sinav_merkezi.html` Gün 1 olarak kullanılır, diğer 5 gün bu şablondan türetilir

---

**Hazırlayan:** Antigravity AI  
**Tarih:** 2026-09-01  
**Versiyon:** 1.0  
**Lisans:** MIT (Eğitim amaçlı serbest kullanım)
