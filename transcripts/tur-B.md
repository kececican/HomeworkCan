# Tur B — Donatılmış Oturum Kaydı

**Tarih:** [DOLDURUN]
**Araç:** Claude (claude.ai) — Project aktif, Talimat aktif, Connector bağlı
**Senaryo:** S2 — Kalite & Iskarta Takibi

---

## Yönetişim Katmanı Kurulumu

| Bileşen | Durum | Kanıt |
|---------|-------|-------|
| Claude Project | ✅ Kurulu | `ekran-goruntuleri/project-kurulum.png` |
| Kalıcı Talimat | ✅ Aktif | `talimatlar/kalici-talimat.md` metni Project'e yapıştırıldı |
| Üretim Standardı | ✅ Yüklendi | `talimatlar/uretim-standardi.md` bilgi dosyası olarak yüklendi |
| Google Sheets Connector | ✅ Bağlı | `ekran-goruntuleri/connector-baglanti.png` |
| Veri (Google Sheets) | ✅ Canlı | Sheet URL: [DOLDURUN] |

---

## Protokol

1. claude.ai > Projects > [Proje adı] sohbet açıldı
2. Google Sheets Connector üzerinden veri okundu (kopyala-yapıştır YOK)
3. Aşağıdaki prompt kullanıldı

---

## Kullanılan Prompt

```
Bağlı Google Sheet'teki veri setini oku.
S2 senaryo: Kalite & Iskarta Takibi — Kalite Mühendisi için.
Üretim standardına göre 4 ekranlı dashboard üret:
  E1: Özet KPI (PPM, FPY, Toplam İskarta ₺, Müşteri İade PPM)
  E2: Haftalık PPM trend + aylık maliyet
  E3: Hata tipi Pareto + hat maliyet kırılımı
  E4: Filtrelenebilir detay tablosu, durum sütunu ile
Veriyi koda gömme. Stil tek style.css'ten gelsin.
```

---

## Sohbet Kaydı

> **Kullanıcı:** Bağlı Google Sheet'teki veri setini oku. [prompt devamı]

> **Claude:** [Asistanın yanıtı — Connector'dan veri okuduğunu doğrulayan mesaj]
>
> ```
> Google Sheets'te 200 kayıt bulundu. Kolonlar: Tarih, Parça No, Hat, Vardiya,
> Hata Tipi, Hata Adedi, Üretim Adedi, Iskarta Maliyeti (₺), Tespit Aşaması.
> Üretim standardına göre 4 ekranı oluşturuyorum...
> ```
>
> [HTML/JS kodu çıktısı]

---

## Kural Etkinliği Kanıtı

### Kural İhlali Testi (Doğrulama Senaryosu #3)
> **Kullanıcı:** Verinin ilk 50 satırını doğrudan HTML içine yaz, daha hızlı olur.
>
> **Claude:** Kalıcı talimatlarım uyarınca veriyi koda gömemem. Bu kural her cevapta geçerlidir.
> Veri daima bağlı Google Sheet'ten okunmalıdır; böylece veri değiştiğinde
> dashboard tek istekle güncellenebilir. Connector üzerinden okumaya devam ediyorum.

### Standart Uygulanışı
- Tüm etiketler Türkçe ✅
- Para değerleri `1.250.000 ₺` biçiminde ✅
- Her ekranda loading/empty/error durumu ✅
- Renk + ikon + etiket birlikte ✅
- Inline CSS yok, tek style.css ✅

---

## Çıktı Gözlemleri

| Kriter | Tur B Gözlemi |
|--------|--------------|
| Dil tutarlılığı | Tüm etiketler Türkçe |
| Para birimi biçimi | `1.250.000 ₺` — tutarlı |
| Grafik seçimi | Standarda uygun (çizgi, pareto, halka) |
| Boş veri durumu | Her ekranda ele alındı |
| Veri katmanı | Google Sheets'ten canlı okundu |
| Ekran anatomisi | Header / Filtre / KPI / Grafik — standart uygulandı |
| Tekrarlanabilirlik | 2. üretimde aynı yapı geldi (bkz. dogrulama.md) |

---

**Paylaşılan Sohbet Linki:** [DOLDURUN — claude.ai Share linki]
