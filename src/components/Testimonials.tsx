"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Ayşe Kara",
    role: "7 yaşındaki öğrencinin velisi",
    quote: "Oğlum başladığımızda sudan korkuyordu, ancak Arhan Yüzme Akademisi'nde sadece birkaç hafta içinde güvenle yüzmeye başladı. Eğitmenler sabırlı, yetenekli ve dersleri keyifli hale getiriyor. İlerleme hızına çok memnunum!",
    avatar: "/testimonials/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Mustafa Yıldız",
    role: "Yetişkin öğrenci",
    quote: "Çocukken yüzmeyi hiç öğrenemedim ve bundan her zaman utandım. 45 yaşında nihayet öğrenmeye karar verdim ve Arhan Yüzme Akademisi'ndeki ekip bunu çok olumlu bir deneyime dönüştürdü. Yetişkin programları mükemmel ve eğitmenler anlayışlı ve cesaretlendirici.",
    avatar: "/testimonials/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Zehra Demir",
    role: "Yarışma yüzücüsü",
    quote: "Arhan Yüzme Akademisi'ndeki antrenman, derecelerimi önemli ölçüde geliştirmeme yardımcı oldu. Teknik konulara dikkat edilmesi ve kişiselleştirilmiş antrenman planları büyük fark yaratıyor. Yarışma programlarına katıldığımdan beri birçok bölgesel yarışmada ödül kazandım.",
    avatar: "/testimonials/avatar-3.jpg",
  },
  {
    id: 4,
    name: "Ali Can",
    role: "4 yaşındaki ikizlerin velisi",
    quote: "İkizlerin velisi olarak çocuklarımın nasıl yüzme öğreneceği konusunda endişeliydim. Arhan Yüzme Akademisi'ndeki eğitmenler çocuklarla harika iletişim kuruyor ve eğlenceli, güvenli bir ortam yaratıyorlar. İkizlerim artık her hafta yüzme derslerini dört gözle bekliyorlar!",
    avatar: "/testimonials/avatar-4.jpg",
  },
  {
    id: 5,
    name: "Elif Yılmaz",
    role: "5 yaşındaki kızının velisi",
    quote: "Kızım yüzme derslerine başladığında çok çekingen ve utangaçtı. Ancak Arhan Yüzme Akademisi'ndeki eğitmenlerin yaklaşımı sayesinde kısa sürede kendine güveni arttı. Şimdi suda kendini çok rahat hissediyor ve yüzme derslerini seviyor. Eğitmenlerin çocuklarla iletişimi gerçekten takdire şayan!",
    avatar: "/testimonials/avatar-5.jpg",
  },
  {
    id: 6,
    name: "Mehmet Kaya",
    role: "6 yaşındaki oğlunun velisi",
    quote: "Oğlumun yüzme öğrenme sürecinde Arhan Yüzme Akademisi'ni seçtiğimiz için çok mutluyum. Eğitmenlerin profesyonel yaklaşımı ve çocuklarla kurdukları güven ilişkisi sayesinde oğlum artık suda kendini çok rahat hissediyor. Dersler hem eğlenceli hem de öğretici geçiyor. Kesinlikle tavsiye ediyorum!",
    avatar: "/testimonials/avatar-6.jpg",
  },
  {
    id: 7,
    name: "Selin Arslan",
    role: "3 yaşındaki kızının velisi",
    quote: "Küçük yaşta yüzme eğitimi için doğru adresi bulduğumuzu düşünüyorum. Arhan Yüzme Akademisi'ndeki eğitmenler, çocukların yaş gruplarına uygun özel programlar hazırlıyor. Kızım artık suya alıştı ve yüzme derslerini çok seviyor. Hijyen ve güvenlik konularına gösterilen özen de takdire şayan.",
    avatar: "/testimonials/avatar-7.jpg",
  },
  {
    id: 8,
    name: "Burak Öztürk",
    role: "8 yaşındaki oğlunun velisi",
    quote: "Oğlumun yüzme becerilerindeki gelişimi görmek harika! Arhan Yüzme Akademisi'ndeki eğitmenler, her çocuğun kendi hızında öğrenmesine olanak sağlıyor. Ayrıca, düzenli olarak yapılan gelişim değerlendirmeleri ve veli bilgilendirmeleri sayesinde süreç hakkında her zaman bilgi sahibi oluyoruz. Profesyonel yaklaşımları için teşekkürler!",
    avatar: "/testimonials/avatar-8.jpg",
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Manually change testimonial
  const goToTestimonial = (index: number) => {
    setCurrent(index);
  };

  return (
    <section id="yorumlar" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Öğrencilerimiz Ne Diyor
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
          <p className="mt-4 text-lg text-gray-600">
            Öğrencilerimiz ve velilerden Arhan Yüzme Akademisi&apos;ndeki deneyimleri hakkında yorumlar.
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Large quote mark */}
          <div className="absolute top-0 left-0 text-9xl text-blue-200 opacity-50 transform -translate-x-8 -translate-y-12 pointer-events-none">
            &ldquo;
          </div>
          
          {/* Testimonial carousel */}
          <div className="relative h-[300px] md:h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <p className="text-gray-600 text-lg italic mb-8">
                    {testimonials[current].quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-blue-200"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-gray-500">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-3 w-3 mx-2 rounded-full transition-colors duration-300 ${
                  current === index ? "bg-blue-600" : "bg-blue-200"
                }`}
                aria-label={`${index + 1}. yoruma git`}
              />
            ))}
          </div>
          
          {/* Previous/Next buttons */}
          <div className="absolute inset-y-0 left-0 md:-left-12 flex items-center">
            <button
              onClick={() => 
                setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
              }
              className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-300"
              aria-label="Önceki yorum"
            >
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 md:-right-12 flex items-center">
            <button
              onClick={() => 
                setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
              }
              className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-300"
              aria-label="Sonraki yorum"
            >
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 