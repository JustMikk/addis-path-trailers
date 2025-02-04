"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { OurService } from "@/components/OurServices";
import WeServeSection from "@/components/services/WeServeSection";
import { FeaturesSection } from "@/components/services/FeatureServices";
import { Banner } from "@/components/common/Banner";

export default function ServicesPage() {
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
            Our Reliable Trailer Rental & Leasing Services
          </motion.h1>
          {/* <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We provide a range of services to meet your needs
        </motion.p> */}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto p-6 px-4 md:px-12 lg:px-16 lg:max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left mb-12"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
              Check out our extensive range of{" "}
              <span className="text-blue-600">
                trailer rental and leasing solutions
              </span>
            </h2>
            <p className="text-gray-700 text-lg">
              Tailored to fulfill the unique requirements of industries such as
              warehousing, distribution, logistics, and beyond.
            </p>
          </motion.div>
        </div>
      </section>
      <OurService />
      <WeServeSection />
      <FeaturesSection />
      <Banner />
    </div>
  );
}
