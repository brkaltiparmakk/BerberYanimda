# Teknik Plan

## Başlangıç yaklaşımı

Ana ürün için Expo + React Native + TypeScript kullanılacak. Böylece tek kod tabanından iOS ve Android uygulamaları üretilecek. Vite web prototipi, fikir ve akış denemeleri için yardımcı yüzey olarak kalacak.

## Önerilen evrim

1. Expo mobil uygulama iskeleti ve mobil ana ekran
2. Yerel örnek veri ile etkileşimli randevu akışı
3. Kimlik doğrulama ve kalıcı veri
4. Berber paneli
5. Push bildirimleri, yorumlar ve ödeme

## Mağaza yayınlama

- iOS için Apple Developer hesabı ve App Store Connect gerekir.
- Android için Google Play Console geliştirici hesabı gerekir.
- EAS Build ile imzalı `.ipa` ve `.aab` çıktıları alınacak.
- Uygulama adı, ikon, splash ekranı, gizlilik politikası ve mağaza açıklamaları ayrıca hazırlanacak.

## İlk veri modelleri

- `User`: müşteri veya berber hesabı
- `Barber`: profil, konum, açıklama, puan
- `Service`: ad, süre, fiyat
- `Availability`: berberin uygunluk bilgisi
- `Appointment`: müşteri, berber, hizmet, zaman, durum

## Kalite notları

- Mobil ekran öncelikli tasarım
- Türkçe tarih, para ve kullanıcı metinleri
- Randevu durumları açık ve anlaşılır olmalı
- Gerçek ödeme veya kişisel veri eklenmeden önce güvenlik gereksinimleri ayrıca ele alınmalı
