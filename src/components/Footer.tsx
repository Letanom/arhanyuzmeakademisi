"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { 
  EMAILJS_SERVICE_ID, 
  EMAILJS_NEWSLETTER_TEMPLATE_ID, 
  EMAILJS_PUBLIC_KEY,
  initEmailJS
} from "../lib/emailjs";

export default function Footer() {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // EmailJS'yi sayfada yükleme sırasında başlat
  useEffect(() => {
    initEmailJS();
  }, []);

  const isValidEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Lütfen bir e-posta adresi girin");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Lütfen geçerli bir e-posta adresi girin");
      return;
    }

    setLoading(true);
    setSubscriptionStatus({
      submitted: true,
      success: false,
      message: "Abone olunuyor...",
    });

    try {
      console.log("Bülten kaydı başlatılıyor...");
      
      // Form verilerini manuel olarak hazırla
      const templateParams = {
        to_name: "Arhan Yüzme Akademisi",
        from_name: "Bülten Abonesi",
        from_email: email,
        reply_to: email,
        message: `${email} adresi bülten aboneliği için kaydoldu.`
      };
      
      console.log("Template params:", templateParams);
      console.log("Servis ID:", EMAILJS_SERVICE_ID);
      console.log("Template ID:", EMAILJS_NEWSLETTER_TEMPLATE_ID);
      console.log("Public Key:", EMAILJS_PUBLIC_KEY);
      
      // EmailJS ile e-posta gönderme
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_NEWSLETTER_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Bülten kaydı başarıyla gerçekleşti!', result.text);
      
      setSubscriptionStatus({
        submitted: true,
        success: true,
        message: "Teşekkürler! Bültenimize başarıyla abone oldunuz.",
      });
      
      setEmail("");
      
      // 5 saniye sonra başarı mesajını kaldır
      setTimeout(() => {
        setSubscriptionStatus({
          submitted: false,
          success: false,
          message: "",
        });
      }, 5000);
    } catch (error) {
      console.error('Bülten kaydı sırasında hata oluştu:', error);
      
      // Hata detaylarını logla
      if (error instanceof Error) {
        console.error('Hata mesajı:', error.message);
        console.error('Hata stack:', error.stack);
      }
      
      setSubscriptionStatus({
        submitted: true,
        success: false,
        message: "Abonelik işlemi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      });
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hakkımızda */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hakkımızda</h3>
            <p className="text-blue-200 mb-4">
              Arhan Yüzme Akademisi, her yaş ve seviyedeki öğrenciye güvenli ve 
              eğlenceli bir ortamda yüzme eğitimi sağlamayı amaçlamaktadır.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/arhanyuzmeakademisi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Linkler</h3>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-blue-200 hover:text-white transition-colors">Anasayfa</Link></li>
                <li><Link href="/#programlar" className="text-blue-200 hover:text-white transition-colors">Programlar</Link></li>
                <li><Link href="/#hakkimizda" className="text-blue-200 hover:text-white transition-colors">Hakkımızda</Link></li>
                <li><Link href="/#ekibimiz" className="text-blue-200 hover:text-white transition-colors">Ekibimiz</Link></li>
                <li><Link href="/#yorumlar" className="text-blue-200 hover:text-white transition-colors">Yorumlar</Link></li>
                <li><Link href="/#iletisim" className="text-blue-200 hover:text-white transition-colors">İletişim</Link></li>
              </ul>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">İletişim</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:arhanswim@gmail.com" className="hover:text-blue-400 transition-colors">
                  arhanswim@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Bülten */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bültenimize Abone Olun</h3>
            <p className="text-blue-200 mb-4">
              En son haberler, etkinlikler ve özel teklifler için bültenimize abone olun.
            </p>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  className="px-4 py-2 rounded-lg text-white bg-blue-800/50 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`${loading ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-500'} text-white py-2 px-4 rounded-lg transition-colors duration-300 flex justify-center items-center`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      İşleniyor...
                    </>
                  ) : "Abone Ol"}
                </button>
                {error && <p className="text-red-300 text-sm">{error}</p>}
                {subscriptionStatus.submitted && (
                  <p className={`text-sm ${subscriptionStatus.success ? 'text-green-300' : 'text-red-300'}`}>
                    {subscriptionStatus.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-300">
          <p>
            &copy; {currentYear} Arhan Yüzme Akademisi. Tüm hakları saklıdır.
          </p>
          <p className="mt-2">
            <a 
              href="https://keweble.studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Keweble Studio
            </a>{" "}
            tarafından ❤️ ile yapılmıştır
          </p>
        </div>
      </div>
    </footer>
  );
} 