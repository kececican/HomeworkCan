# Tur A — Donatımsız Oturum Kaydı

**Tarih:** 16.06.2026
**Araç:** Claude (claude.ai) — Boş sohbet, Project/Gem YOK, Talimat YOK, Connector YOK
**Senaryo:** S2 — Kalite & Iskarta Takibi

---

## Protokol

Tur A'da hiçbir yönetişim katmanı kullanılmaz:
- Yeni, boş bir sohbet açıldı (Project bağlantısı yok)
- Talimat verilmedi
- Veri kopyala-yapıştır ile paylaşıldı
- Tek bir serbest prompt ile dashboard üretilmesi istendi

---

## Kullanılan Prompt

```
VALEO fabrikası için kalite ve iskarta takip dashboard'u üret.
Veri aşağıda. 4 ekran olsun: özet KPI, trend, pareto, detay tablosu.
[VERİ BURAYA YAPIŞTIRILDI — ilk 20 satır]
```

---

## Sohbet Kaydı

> **Kullanıcı:** [Prompt metni ve verinin ilk 20 satırı]

> **Claude:** [Asistanın yanıtı buraya — HTML/kod çıktısı dahil]

---

## Çıktı Gözlemleri (Tur B ile karşılaştırma için)

| Kriter | Tur A Gözlemi |
|--------|--------------|
| Dil tutarlılığı | Türkçe/İngilizce karışık etiketler |
| Para birimi biçimi | Tutarsız (TL / ₺ / hiç yok) |
| Grafik seçimi | Rastgele / tasarım standardı yok |
| Boş veri durumu | Ele alınmadı |
| Veri katmanı | Veri koda gömüldü (hard-coded) |
| Ekran anatomisi | Standart yok; layout tutarsız |
| Tekrarlanabilirlik | 2. üretimde farklı layout geldi |

---

## Ekran Görüntüleri

`ekran-goruntuleri/` klasörüne eklenecek:
- `tur-A-cikti-1.png` — ilk üretim
- `tur-A-cikti-2.png` — ikinci üretim (sapma görmek için)

---

**Paylaşılan Sohbet Linki:** https://claude.ai/chat/35ac2f9a-de93-4983-ad32-99986c2c10fc
