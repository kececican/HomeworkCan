# Üretim Standardı — Skill / Project Bilgi Dosyası

Bu dosya Claude Project'e **bilgi (knowledge) dosyası** olarak yüklenir.
Sohbete yapıştırılmaz; asistan ihtiyaç duyduğunda bu dosyaya başvurur.

---

## 1. Tasarım Sistemi

### Renk Paleti
| Anlam | Renk Kodu | Kullanım |
|-------|-----------|----------|
| Mevcut dönem | `#1E40AF` (koyu mavi) | Ana çizgi, aktif KPI |
| Önceki dönem | `#94A3B8` (gri) | Referans çizgi, karşılaştırma |
| Başarılı / İyi | `#16A34A` (yeşil) | Hedef altı hata oranı |
| Uyarı | `#D97706` (turuncu) | Orta risk |
| Kritik / Kötü | `#DC2626` (kırmızı) | Hedef üstü, müşteri iadesi |
| Arka plan | `#F8FAFC` | Sayfa zemini |
| Kart arka planı | `#FFFFFF` | KPI kartları |
| Kenarlık | `#E2E8F0` | Kart ve tablo çerçevesi |

### Tipografi
- Başlık (H1): 20px, font-weight: 700, `#1E293B`
- Alt başlık (H2): 16px, font-weight: 600, `#334155`
- KPI değer: 28px, font-weight: 700
- KPI etiket: 12px, font-weight: 500, `#64748B`
- Gövde metni: 14px, font-weight: 400, `#475569`
- Tablo: 13px

### Boşluk Ölçeği
- Kart iç boşluk: 16px
- Kart arası boşluk: 12px
- Bölüm arası boşluk: 24px

### Yasaklar
- Dekoratif gölge yok (box-shadow max `0 1px 3px rgba(0,0,0,0.1)`)
- 3B grafik yok
- Gradyan arka plan yok

---

## 2. Ekran Anatomisi (4 Ekran)

### E1 — Özet / KPI Ekranı
**Hedef:** İlk bakışta tüm kalite durumunu göster.
- 4–6 KPI kartı: PPM, İlk Geçiş Verimi (FPY), Toplam Iskarta Maliyeti, Hata Adedi, Müşteri İade Oranı
- Her KPI kartında: değer + delta (önceki döneme göre %) + trend oku (↑↓)
- KPI rengi: hedef altı=yeşil, hedef=turuncu, hedef üstü=kırmızı

### E2 — Trend Ekranı
**Hedef:** PPM ve iskarta maliyetinin zaman içindeki hareketi.
- Çizgi grafik: X=Tarih (haftalık), Y=PPM veya Maliyet
- İki çizgi: mevcut dönem (mavi) + önceki dönem (gri)
- Hedef eşiği için yatay kesikli kırmızı çizgi
- Grafik başlığı + legend + X/Y eksen etiketleri Türkçe

### E3 — Kırılım / Pareto Ekranı
**Hedef:** Hangi hata tipi, hat, tespit aşaması en çok iskartaya yol açıyor?
- Pareto sütun grafiği: X=Hata Tipi, Y=Hata Adedi (azalan sıra)
- Kümülatif % çizgisi (ikincil Y ekseni)
- Filtre: Hat bazında, Tespit Aşaması bazında

### E4 — Detay / Aksiyon Ekranı
**Hedef:** Kayıt düzeyinde inceleme ve önceliklendirme.
- Sayfalı tablo (10 satır/sayfa)
- Sütunlar: Tarih, Parça No, Hat, Hata Tipi, Hata Adedi, Iskarta Maliyeti, Tespit Aşaması, Durum
- Durum sütunu: ikon + renk + etiket (Açık 🔴 / İnceleniyor 🟡 / Kapalı 🟢)
- Tıklama: satır genişler, detay açılır

---

## 3. Grafik Seçim Rehberi

| Veri Türü | Grafik | Neden |
|-----------|--------|-------|
| Zaman serisi | Çizgi | Sürekli değişimi gösterir |
| Kategoriler arası kıyas | Dikey sütun | Kolay büyüklük kıyası |
| Sıralı/Pareto | Yatay bar (azalan) | Öncelik sırası net görünür |
| 2–3 oran | Pasta/Halka | Bütünün parçaları |
| Korelasyon | Scatter | İki metrik ilişkisi |

---

## 4. Çıktı Kuralları (Zorunlu Kontrol Listesi)

- [ ] 4 ayrı ekran (E1–E4) mevcut
- [ ] Veri ayrık katmanda (CSV/Sheet); koda gömülü değil
- [ ] Tüm etiketler Türkçe
- [ ] Para değerleri ₺ + binlik nokta
- [ ] Boş / hata / yüklenme durumları her ekranda ele alındı
- [ ] Renk anlamı: durum rengi + ikon + metin birlikte
- [ ] No-scroll: kritik içerik tek viewport'ta
- [ ] WCAG AA kontrast uyumlu
- [ ] Inline CSS/script yok; tek style.css
