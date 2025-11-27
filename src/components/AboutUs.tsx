"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

// Stats data
const statsData = [
  { value: 2000, label: "Eğitilen Öğrenci", suffix: "+", color: "bg-blue-500" },
  { value: 15, label: "Yıllık Deneyim", suffix: "+", color: "bg-green-500" },
  { value: 100, label: "Başarı Oranı", suffix: "%", color: "bg-purple-500" },
  { value: 12, label: "Uzman Eğitmen", suffix: "", color: "bg-red-500" },
];

interface CounterProps {
  value: number;
  suffix?: string;
}

// Counter animation for stats
function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500; // ms
      const increment = Math.ceil(value / (duration / 16)); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutUs() {
  return (
    <section id="hakkimizda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Arhan Yüzme Akademisi Hakkında
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Hikayemiz
            </h3>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Yüzme benim için sadece bir spor değil, aynı zamanda bir yaşam biçimi ve tutku haline geldi. 15 yıllık profesyonel yüzme kariyerimde, disiplin, özveri ve hedef odaklı çalışma prensipleriyle sayısız deneyim kazandım. Bu süreçte, hem fiziksel dayanıklılığımı hem de zihinsel gücümü geliştiren bir yolculuğa çıktım. Yüzme, bana sadece suyun içinde değil, hayatın her alanında dengeyi, kontrolü ve motivasyonu sağladı.
              </p>
              <p className="leading-relaxed">
                Profesyonel kariyerimin ardından, yaklaşık 5 yıldır yüzme eğitmeni olarak çalışıyorum. Eğitimlerimde, farklı yaş gruplarındaki bireylerin ihtiyaçlarını anlayarak, onların hedeflerine ulaşmalarına yardımcı olmayı amaçlıyorum. Çocuklar için eğlenceli ve güvenli bir öğrenme ortamı sunarken, yetişkinler için ise teknik gelişim ve kondisyon odaklı bir yaklaşım sergiliyorum.
              </p>
              <p className="leading-relaxed">
                Yıllar içerisinde edindiğim tecrübeler, öğrencilerimin potansiyellerini keşfetmelerine ve en iyi performanslarını sergilemelerine rehberlik etmemi sağlıyor. Her bireyin farklı bir öğrenme sürecine ve hedefe sahip olduğunun bilinciyle, kişiselleştirilmiş eğitim programları hazırlıyorum. Bu süreçte, sadece fiziksel gelişime değil, aynı zamanda özgüven kazanmalarına ve yüzme sporuna olan sevgilerinin artmasına odaklanıyorum.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Yaklaşımımız
            </h3>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Amacım, yüzmeyi öğrenmek isteyenlere bu sporu sevdirmek ve hayat boyu sürdürülebilecek bir aktivite haline getirmek. Yüzmenin bir spor dalından çok daha fazlası olduğunu, hem beden hem de zihin için bir denge sağladığını göstermek için buradayım.
              </p>
              <p className="leading-relaxed">
                Su ile başlayan bu yolculuğa benimle birlikte çıkmak isteyen herkese, bilgi birikimim ve tecrübelerimle en iyi desteği sunmaya hazırım.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="bg-blue-600 rounded-lg p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <Image
                  src="/images/egitim.jpg"
                  alt="Arhan Yüzme Akademisi - Eğitim Mükemelliği ve Profesyonel Yüzme Eğitimi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Eğitim Mükemelliği
                </h3>
                <p className="leading-relaxed">
                  Arhan Yüzme Akademisi olarak, her öğrencimize en kaliteli eğitimi sunmak için çalışıyoruz. Deneyimli eğitmenlerimiz, modern eğitim yöntemlerimiz ve kişiselleştirilmiş öğrenme programlarımızla, öğrencilerimizin potansiyellerini en üst düzeye çıkarmayı hedefliyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className={`${stat.color} h-2 w-20 mx-auto mb-4 rounded-full`}></div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 