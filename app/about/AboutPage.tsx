"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import AboutSection from "@/components/about/AboutUs";
import InfoSection from "@/components/about/InfoSection";
import AboutAddis from "@/components/about/AboutAddis";
import ExportedImage from "next-image-export-optimizer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <section className="relative h-[60vh] flex items-center justify-center">
        <ExportedImage
          src="/assets/images/trailer-02.png"
          alt="Hero background"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <motion.div
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <InfoSection />
      <AboutAddis />
    </div>
  );
}
