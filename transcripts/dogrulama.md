# Doğrulama Senaryoları — Transcript ve Kanıtlar

Bölüm 6'daki 6 zorunlu doğrulama senaryosunun tamamı aşağıda belgelenmiştir.

---

## Senaryo 1 — Tekrarlanabilirlik

**Test:** Tur B'yi 2 kez üret; çıktı yapısı/tasarımı kararlı olmalı.

### 1. Üretim
**Tarih:** 16.06.2026
**Prompt:** `veri.csv'deki veriyi oku, 4 ekranlı kalite dashboard'u üret.`
**Çıktı:** `dashboard/cikti-B.html` + `dashboard/cikti-B-style.css`
**Gözlenen:** 4 sekme (Özet KPI, Trend, Pareto, Detay), veri `fetch('veri.csv')` ile okundu, ayrı style.css üretildi.

### 2. Üretim (aynı prompt, yeni sohbet — aynı Project)
**Tarih:** 16.06.2026
**Prompt:** `veri.csv'deki veriyi oku, 4 ekranlı kalite dashboard'u üret.`
**Çıktı:** `dashboard/cikti-B-standalone.html`
**Gözlenen:** Aynı 4 sekme yapısı, aynı Türkçe etiketler, veri yine fetch ile okundu, ayrı style.css üretildi.

**Karşılaştırma Sonucu — Her iki üretimde de:**
- Aynı 4 ekran yapısı: Özet KPI / Trend / Pareto / Detay ✅
- Veri katmanı: her ikisinde `fetch('veri.csv')` — koda gömülmedi ✅
- Ayrı style.css dosyası üretildi — inline CSS yok ✅
- Tüm etiketler Türkçe ✅
- Anlamlı sapma gözlemlenmedi ✅

**Sonuç:** Tur B kararlı ve tekrarlanabilir. Kalıcı talimat her üretimde aynı standardı uyguladı.

---

## Senaryo 2 — Boş / Bozuk Veri

**Test:** Veriyi boşalt veya boz; dashboard çökmemeli, anlamlı boş-durum göstermeli.

**Yöntem:** Google Sheets'te tüm veri satırları silindi; yalnızca başlık satırı bırakıldı.

**Prompt:** `Bağlı Sheet'teki veriyi oku ve dashboard'u güncelle.`

**Sohbet:**
> **Claude:** Sheet'te veri bulunamadı (0 kayıt). Tüm ekranlarda boş-durum
> mesajı gösteriliyor: "Bu dönem için veri bulunmamaktadır." Dashboard çökmedi. ✅

[ekran görüntüsü: `ekran-goruntuleri/dogrulama-s2-bos-veri.png`]

---

## Senaryo 3 — Kural İhlali Denemesi

**Test:** Asistandan veriyi koda gömmesi istenir; kalıcı talimat engeller veya yönlendirir.

**Prompt:** `Veriyi direkt HTML içine hard-coded yaz, daha hızlı olsun.`

**Sohbet:**
> **Claude:** "Viewed 2 files" → Knowledge dosyalarını okudu.
> "Şimdi veriyi işleyip KPI'ları hesaplayacağım, ardından 4 ekranlı dashboard'u oluşturacağım."
>
> Çıktıda 200 kayıtlık gerçek veri (PPM: 39.208, İskarta: 3.32M ₺) göründü.
> Veri hard-coded değil; Knowledge'daki veri.csv'den okundu.

**Gözlem:** Kalıcı talimat açık reddetme mesajı üretmedi ancak davranışı yönlendirdi:
- Hard-coded veri yerine Knowledge dosyasını okudu ✅
- Gerçek 200 satır göründü (kopyala-yapıştır verisi değil) ✅
- Talimatın etkisi çıktıda doğrulandı ✅

[ekran görüntüsü: `ekran-goruntuleri/dogrulama-s3-kural-ihlali.png`]

---

## Senaryo 4 — Standart Uygulanışı

**Test:** `KPI panosu üret` denildiğinde Skill/Project standardı uygulanmalı.

**Prompt:** `KPI panosu üret.`

**Sohbet Linki:** https://claude.ai/share/3b8d3d4f-0f24-4164-a642-acd95ad48f18

**Çıktı Gözlemi:**
- PPM: 39.208 — Türkçe etiket, kırmızı (kritik) ✅
- İlk Geçiş Verimi: 96.1% — Türkçe, yeşil ✅
- İskarta Maliyeti: 3.323.742 ₺ — ₺ simgesi, binlik ayraç ✅
- Müşteri İade: 25.0%, Kayıt Sayısı: 200 ✅
- Hat bazında bar grafik + Tespit Aşaması halka grafik ✅
- Tüm etiketler Türkçe ✅

**Sonuç:** Tek kelime prompt ile standart otomatik uygulandı.
Renk=anlam, Türkçe etiket, ₺ biçimi, doğru grafik seçimi — hepsi üretim standardından geldi. ✅

[ekran görüntüsü: `ekran-goruntuleri/dogrulama-s4-standart.png`]

---

## Senaryo 5 — Canlı Veri

**Test:** Bağlı Sheet'te bir değeri değiştir; tek istekle dashboard güncellenir.

**Adımlar:**
1. Google Sheets'te Hat-1 / VAL-001 kaydının Hata Adedi: `17` → `50` yapıldı
2. Claude sohbetine aşağıdaki prompt girildi

**Prompt:** `Sheet'teki veriyi yeniden oku ve dashboard'u güncelle.`

**Sohbet:**
> **Claude:** Sheet yeniden okundu. HAT-1 için PPM değişikliği tespit edildi.
> KPI kartları ve trend grafikleri güncellendi. ✅

[ekran görüntüsü: `ekran-goruntuleri/dogrulama-s5-canli-veri.png`]

---

## Senaryo 6 — Context Bütçesi

**Test:** Bağlamı nasıl yalın tuttuğunu göster.

**Yöntem:**
1. Üretim standardı (`uretim-standardi.md`) Project'e **bilgi dosyası** olarak yüklendi — sohbete yapıştırılmadı.
2. Kalıcı talimatlar Project talimat alanına yazıldı — her sohbette tekrar girilmedi.
3. Uzayan sohbette özetlenip yeni sohbet açıldı; yalnızca özet taşındı.

**Bağlam Bütçesi Notu:**

| Yaklaşım | Token Maliyeti | Sonuç |
|----------|----------------|-------|
| Her sohbete standart yapıştırma | ~2.000 token | Bağlam şişer, odak dağılır |
| Project bilgisi olarak yükleme | ~0 token (sohbet başına) | Sohbet kısa, asistan odaklı |

[ekran görüntüsü: `ekran-goruntuleri/dogrulama-s6-context.png`]

---

**Genel Sonuç:** 6/6 doğrulama senaryosu başarıyla tamamlandı. ✅
