import { init } from '@emailjs/browser';

// EmailJS constants
export const EMAILJS_SERVICE_ID = "service_4pogtou";
export const EMAILJS_TEMPLATE_ID = "template_jh6yt0e";
export const EMAILJS_PUBLIC_KEY = "OxpnnaQXm-KtvP8JW";
export const EMAILJS_NEWSLETTER_TEMPLATE_ID = "template_jh6yt0e";

// Initialize EmailJS
export const initEmailJS = () => {
  init(EMAILJS_PUBLIC_KEY);
};

/*
EmailJS Kurulum Rehberi:

1. EmailJS hesabı oluşturun: https://www.emailjs.com/

2. Email servisi ekleyin:
   - Gmail, Outlook veya başka bir email servisi seçin
   - Servis ID'sini EMAILJS_SERVICE_ID'ye ekleyin

3. Email template'i oluşturun:
   - Template ID'sini EMAILJS_TEMPLATE_ID'ye ekleyin
   - Template değişkenleri:
     - to_name: "Arhan Yüzme Akademisi"
     - from_name: Kullanıcının adı
     - from_email: Kullanıcının email adresi
     - user_phone: Kullanıcının telefon numarası
     - user_subject: Email konusu
     - message: Email mesajı

4. Public key'i ekleyin:
   - Account > API Keys > Public Key'i EMAILJS_PUBLIC_KEY'e ekleyin

5. Güvenlik için:
   - Public key'i .env dosyasına taşıyın
   - .env.local dosyası oluşturun:
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   - Public key'i şu şekilde kullanın:
     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

6. Kullanım:
   - initEmailJS() fonksiyonunu _app.tsx veya layout.tsx'de çağırın
   - Contact.tsx'de sendEmail() fonksiyonunu kullanın
*/ 