"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Target, Users } from "lucide-react";

import AboutSection from "@/components/about/AboutUs";
import InfoSection from "@/components/about/InfoSection";
import AboutAddis from "@/components/about/AboutAddis";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/assets/images/trailer-02.png"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Innovating for a better tomorrow
          </motion.p>
        </div>
      </section>

      <AboutSection />
      <InfoSection />
      <AboutAddis />
    </div>
  );
}
