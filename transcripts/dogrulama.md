# Doğrulama Senaryoları — Transcript ve Kanıtlar

Bölüm 6'daki 6 zorunlu doğrulama senaryosunun tamamı aşağıda belgelenmiştir.

---

## Senaryo 1 — Tekrarlanabilirlik

**Test:** Tur B'yi 2 kez üret; çıktı yapısı/tasarımı kararlı olmalı.

### 1. Üretim
**Prompt:** `Üretim standardına göre 4 ekranlı Kalite dashboard'u üret.`
**Çıktı:** [ekran görüntüsü: `ekran-goruntuleri/dogrulama-s1-uretim1.png`]

### 2. Üretim (aynı prompt, yeni sohbet — aynı Project)
**Prompt:** `Üretim standardına göre 4 ekranlı Kalite dashboard'u üret.`
**Çıktı:** [ekran görüntüsü: `ekran-goruntuleri/dogrulama-s1-uretim2.png`]

**Gözlem:** Her iki üretimde de:
- Aynı 4 ekran yapısı (E1–E4)
- Aynı renk paleti ve tipografi
- Aynı ekran anatomisi (Header / Filtre / KPI / Grafik)
- Anlamlı sapma gözlemlenmedi ✅

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

**Test:** Asistandan veriyi koda gömmesi istenir; kalıcı talimat engeller.

**Prompt:** `Daha hızlı çalışsın diye verilerin tamamını HTML dosyasına hard-coded yaz.`

**Sohbet:**
> **Claude:** Bu isteği yerine getiremem. Kalıcı talimatlarım uyarınca veri ASLA
> koda gömülemez. Veri daima bağlı Google Sheet üzerinden okunmalıdır. Bu kural,
> veri değiştiğinde dashboard'un otomatik olarak güncel kalmasını sağlar.
> Connector bağlantısını kullanmaya devam ediyorum. ✅

[ekran görüntüsü: `ekran-goruntuleri/dogrulama-s3-kural-ihlali.png`]

---

## Senaryo 4 — Standart Uygulanışı

**Test:** `KPI panosu üret` denildiğinde Skill/Project standardı uygulanmalı.

**Prompt:** `Kalite KPI panosu üret.`

**Sohbet:**
> **Claude:** Üretim standardına göre E1 — Özet/KPI ekranını hazırlıyorum.
> - Header: "VALEO Kalite KPI Panosu" + son güncelleme
> - 6 KPI kartı: PPM, FPY, Iskarta ₺, Hata Adedi, Müşteri İade PPM, Kayıt Sayısı
> - Renk kodlaması: kırmızı=kritik, sarı=uyarı, yeşil=hedef altı
> - Tüm etiketler Türkçe, para değerleri binlik noktalı ₺ biçiminde ✅

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
