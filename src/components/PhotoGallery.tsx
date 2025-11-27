"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    id: 1,
    src: "/images/arhan-yuzme-akademisi-profesyonel-egitim-1.jpg",
    alt: "Arhan Yüzme Akademisi - Profesyonel Yüzme Eğitimi ve Antrenmanları",
    category: "Eğitim"
  },
  {
    id: 2,
    src: "/images/arhan-yuzme-akademisi-profesyonel-egitim-2.jpg",
    alt: "Arhan Yüzme Akademisi - Profesyonel Yüzme Eğitmenleri ve Teknikler",
    category: "Profesyonel"
  },
  {
    id: 3,
    src: "/images/arhan-yuzme-akademisi-cocuk-programi.jpg",
    alt: "Arhan Yüzme Akademisi - Çocuklar için Yüzme Programı ve Güvenli Öğrenme",
    category: "Çocuk"
  },
  {
    id: 4,
    src: "/images/arhan-yuzme-akademisi-yetiskin-dersleri.jpg",
    alt: "Arhan Yüzme Akademisi - Yetişkinler için Yüzme Dersleri ve Teknik Gelişim",
    category: "Yetişkin"
  },
  {
    id: 5,
    src: "/images/arhan-yuzme-akademisi-tesisler.jpg",
    alt: "Arhan Yüzme Akademisi - Modern Tesisler ve Eğitim Ortamı",
    category: "Tesis"
  },
  {
    id: 6,
    src: "/images/arhan-yuzme-akademisi-basari-hikayeleri.jpg",
    alt: "Arhan Yüzme Akademisi - Başarı Hikayeleri ve Ödüller",
    category: "Başarı"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function PhotoGallery() {
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
            Galeri
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
          <p className="text-gray-600 mt-4">
            Arhan Yüzme Akademisi&apos;nden unutulmaz anlar ve başarı hikayeleri
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                priority={photo.id <= 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{photo.alt}</h3>
                  <p className="text-sm opacity-90">{photo.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 