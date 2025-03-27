"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Eğitim Mükemmelliği",
    description: "Deneyimli eğitmenlerimiz ve modern eğitim yöntemlerimizle en iyi yüzme eğitimini sunuyoruz.",
    image: "/images/egitim.jpg"
  },
  {
    title: "Güvenli Öğrenme Ortamı",
    description: "En son güvenlik standartlarına uygun havuzlarımızda güvenle yüzme öğrenin.",
    image: "/images/feature2.jpg",
  },
  {
    title: "Kişiye Özel Programlar",
    description: "Yaş ve seviyenize uygun özel yüzme programlarıyla hedeflerinize ulaşın.",
    image: "/images/feature3.jpg",
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

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Neden Bizi Seçmelisiniz?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
          <p className="text-gray-600 mt-4">
            Profesyonel eğitim kadromuz ve modern tesislerimizle sizlere en iyi yüzme deneyimini sunuyoruz
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  priority={feature.title === "Eğitim Mükemmelliği"}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 