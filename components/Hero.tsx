"use client"

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "120%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/background.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          scale,
          y,
        }}
      />
      
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      
      <div className="relative z-20 -mt-[200px] text-center font-courier-prime">
        <Image
          src="/images/logo.svg"
          alt="Company Logo"
          width={200}
          height={200}
          className="mx-auto"
        />
        <h1 className="text-4xl md:text-6xl text-white mt-1">
          Pohjantähti Kiinteistöt
        </h1>
        <p className="text-xl text-gray-200 mt-0">
          Sijoitus kumppanisi ensimmäisestä asunnosta alkaen
        </p>
      </div>
    </div>
  );
};

export default Hero;
