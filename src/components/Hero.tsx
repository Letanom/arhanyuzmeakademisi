"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    width: number;
    height: number;
    left: string;
    duration: number;
    delay: number;
    xOffset: number;
  }>>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      width: 20 + Math.floor(Math.random() * 20),
      height: 20 + Math.floor(Math.random() * 20),
      left: `${Math.floor(Math.random() * 100)}%`,
      duration: 5 + Math.floor(Math.random() * 5),
      delay: Math.floor(Math.random() * 5),
      xOffset: Math.floor(Math.random() * 100) - 50
    }));
    setBubbles(newBubbles);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
      {/* Water Bubbles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Water Surface Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-blue-600/30">
          {/* Bubbles */}
          <div className="absolute inset-0">
            {bubbles.map((bubble) => (
              <motion.div
                key={bubble.id}
                className="absolute rounded-full bg-white/30"
                style={{
                  width: bubble.width,
                  height: bubble.height,
                  left: bubble.left,
                  bottom: '-20px',
                }}
                animate={{
                  y: [0, -1000],
                  x: [0, bubble.xOffset],
                  scale: [1, 0],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: bubble.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: bubble.delay,
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
          <div className="absolute inset-2 rounded-full bg-white overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/logo.jpg"
                alt="Arhan Yüzme Akademisi Logo"
                fill
                sizes="192px"
                style={{ objectFit: 'cover' }}
                priority
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
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-wide">
            Arhan Yüzme Akademisi
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-medium drop-shadow tracking-wide">
            Profesyonel yüzme eğitimi ile hayallerinizi gerçeğe dönüştürün
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors cursor-pointer shadow-lg"
            >
              Hemen Başla
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors cursor-pointer shadow-lg"
            >
              Daha Fazla Bilgi
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 