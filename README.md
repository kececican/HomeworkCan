# VALEO Kalite & Iskarta Dashboard — Ödev #1

**Ad Soyad:** Can Keçeci
**Ekip:** After-Market
**Seçilen Araç:** Claude (claude.ai)
**Senaryo:** S2 — Kalite & Iskarta Takibi
**Hedef Persona:** Kalite Mühendisi

---

## Paylaşılan Sohbet Linkleri

| Tur | Link |
|-----|------|
| Tur A (Donatımsız) | https://claude.ai/chat/35ac2f9a-de93-4983-ad32-99986c2c10fc |
| Tur B (Donatılmış) | https://claude.ai/chat/ca4a6ddc-fe19-4657-b826-2049102a36bf |
| Doğrulama Oturumu | https://claude.ai/share/3b8d3d4f-0f24-4164-a642-acd95ad48f18 |

> **Not:** Linklerin herkese açık (Anyone with the link) ayarında olduğundan emin olun.

---

## Dosya Yapısı

```
Ad-Soyad/
├── README.md                        ← Bu dosya
├── talimatlar/
│   ├── kalici-talimat.md            ← Project'e yapıştırılan kalıcı kurallar
│   └── uretim-standardi.md          ← Skill/bilgi dosyası (tasarım sistemi)
├── veri/
│   └── veri.csv                     ← 200 satır sentetik S2 verisi
├── dashboard/
│   ├── index.html                   ← 4 ekranlı üretilen dashboard
│   └── style.css                    ← Tek stil dosyası
├── transcripts/
│   ├── tur-A.md                     ← Donatımsız oturum kaydı
│   ├── tur-B.md                     ← Donatılmış oturum kaydı
│   └── dogrulama.md                 ← 6 doğrulama senaryosu
├── ekran-goruntuleri/               ← Screenshots (Claude Share, Connector, vb.)
└── rapor.pdf                        ← Bölüm 8 raporu
```

---

## Senaryo Özeti

**S2 — Kalite & Iskarta Takibi:** VALEO üretim hatlarından gelen kalite verilerini
izlemek, hata tipi / hat / tespit aşamasına göre iskartayı analiz etmek ve
aksiyon önceliklendirmek için Kalite Mühendisi'ne yönelik çok ekranlı dashboard.

**Dashboard'un Cevapladığı 3 Soru:**
1. Bu dönemde hangi hata tipi en fazla iskarta maliyetine yol açtı?
2. PPM trendi iyileşiyor mu, kötüleşiyor mu?
3. Müşteriye ulaşan hatalar (müşteri iadesi) hangi hat/parçada yoğunlaşıyor?

---

## Yönetişim Katmanı

| Bileşen | Araç Karşılığı | Durum |
|---------|----------------|-------|
| Bağlam | Claude Project | ✅ Kurulu |
| Kalıcı Talimat (Rule) | Project Instructions | ✅ 10 kural aktif |
| Üretim Standardı (Skill) | Project Knowledge File | ✅ Yüklendi |
| Canlı Veri | Google Sheets Connector | ✅ Bağlı |
| Context Yönetimi | Bilgi dosyası + yeni sohbet | ✅ Uygulandı |

---

## Veri Seti Özeti

- **Kayıt Sayısı:** 200 satır (sentetik)
- **Dönem:** 01.01.2024 – 15.07.2024
- **Hatlar:** Hat-1, Hat-2, Hat-3, Hat-4
- **Hata Tipleri:** 7 adet
- **Toplam PPM:** ~39.000
- **Toplam Iskarta:** ~3.3M ₺
- **Not:** Tüm veri yapay (sentetik) üretilmiştir. Gerçek VALEO verisi kullanılmamıştır.