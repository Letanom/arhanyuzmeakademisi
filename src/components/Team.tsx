"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Team data
const teamData = [
  {
    name: "Atahan Arhan",
    role: "Kurucu & Baş Antrenör",
    bio: "15 yıllık profesyonel yüzme kariyerim boyunca edindiğim bilgi ve deneyimleri şimdi paylaşarak yüzmeyi sevdirmek ve yeni yetenekler yetiştirmek için çalışıyorum.",
    image: "/images/atahan.jpg",
  },
  {
    name: "Sevag Balcı",
    role: "Yüzme Antrenörü",
    bio: "Yüzme kariyerim boyunca edindiğim bilgi ve deneyimleri, antrenör yardımcısı olarak sporculara aktarıyor ve onların gelişimine katkı sağlıyorum. Amacım, yüzmeyi sevdirerek yeni yetenekler yetiştirmek ve her seviyedeki yüzücünün potansiyelini en iyi şekilde ortaya çıkarmasına yardımcı olmaktır.",
    image: "/images/sevag.jpg",
  },
  {
    name: "Egehan",
    role: "Fizyo Terapist",
    bio: "Fizyoterapist olarak, medikal yüzme programlarımızla kas-iskelet sistemi rahatsızlıkları ve spor sakatlıkları için kişiye özel rehabilitasyon sunuyorum. Suyun doğal iyileştirici gücüyle hareket kabiliyetinizi artırmak ve ağrılarınızı azaltmak için buradayım!",
    image: "",
  },
  {
    name: "Esma",
    role: "Yetişkin Program Antrenörü",
    bio: "Hiç yüzme bilmeyen veya sudan korkan yetişkinlere özel eğitim veriyor. Sabırlı ve anlayışlı yaklaşımıyla suya güven oluşturuyor.",
    image: "",
  },
  {
    name: "Mert",
    role: "Yarış Takımı Antrenörü",
    bio: "Yarış takımımızı çalıştıran eski üniversite yüzücüsü. Teknik gelişim, yarış stratejisi ve performans antrenmanlarına odaklanıyor.",
    image: "",
  },
  {
    name: "Rabia",
    role: "Yarış Takımı Antrenörü",
    bio: "Yarış takımımızı çalıştıran eski üniversite yüzücüsü. Teknik gelişim, yarış stratejisi ve performans antrenmanlarına odaklanıyor.",
    image: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Team() {
  return (
    <section id="ekibimiz" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Uzman Hocalarımız ile tanışın
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
          <p className="mt-4 text-lg text-gray-600">
            Sertifikalı yüzme eğitmenlerimizden oluşan ekibimiz, öğretme konusunda tutkuludur ve suda başarınıza adanmıştır.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-80 w-full bg-blue-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-200">{member.role}</p>
                </div>
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} - Arhan Yüzme Akademisi`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-blue-300"></div>
                )}
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 