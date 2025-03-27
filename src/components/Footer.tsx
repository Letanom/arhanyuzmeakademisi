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
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim</h3>
            <p className="mb-2">Telefon: +90 555 555 55 55</p>
            <p className="mb-2">Email: info@arhanyuzme.com</p>
            <p>Adres: İstanbul, Türkiye</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Çalışma Saatleri</h3>
            <p className="mb-2">Pazartesi - Cuma: 09:00 - 21:00</p>
            <p>Cumartesi - Pazar: 10:00 - 20:00</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2024 Arhan Yüzme Akademisi. Tüm hakları saklıdır.</p>
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