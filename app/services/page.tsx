"use client";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import WeServeSection from "@/components/services/WeServeSection";
import { FeaturesSection } from "@/components/services/FeatureServices";
import { Banner } from "@/components/common/Banner";
import { OurService } from "@/components/OurServices";

export default function Services() {
  return (
    <div className="min-h-screen bg-blue-50">
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/assets/images/hero.jpg"
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
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide a range of services to meet your needs
          </motion.p>
        </div>
      </section>
      <WeServeSection />
      <FeaturesSection />
      <Banner />

      <OurService />
    </div>
  );
}
