"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-bg.jpg"
            alt="Swimming Pool"
            quality={100}
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-blue-700/40"></div>
      </div>

      {/* Water Bubbles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Water Surface Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-blue-600/30">
          {/* Bubbles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/30"
                style={{
                  width: Math.random() * 30 + 10,
                  height: Math.random() * 30 + 10,
                  left: `${Math.random() * 100}%`,
                  bottom: '-20px',
                }}
                animate={{
                  y: [0, -1000],
                  x: [0, Math.random() * 100 - 50],
                  scale: [1, 0],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          {/* Water Ripple Effect */}
          <motion.div
            className="absolute inset-0 bg-cyan-500/20"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-48 h-48 mb-8"
        >
          {/* Circular Border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-spin-slow"></div>
          {/* Logo Container */}
          <div className="absolute inset-2 rounded-full bg-white overflow-hidden">
            <div className="relative w-full h-full">
              <img
                src="/images/logo.jpg"
                alt="Arhan Yüzme Akademisi Logo"
                className="w-full h-full object-cover rounded-full"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Arhan Yüzme Akademisi
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Profesyonel yüzme eğitimi ile hayallerinizi gerçeğe dönüştürün
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Hemen Başla
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Daha Fazla Bilgi
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 