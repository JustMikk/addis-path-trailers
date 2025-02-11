import { ChevronRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

const HeroSection = () => {
  return (
    <section
      className="relative text-left  overflow-hidden"
      // style={{
      //   backgroundImage: "url('/images/hero.png')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <ExportedImage
        src="/images/hero.png"
        alt="Hero background"
        fill
        // priority
        loading="lazy"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/50 via-black/50 to-black/70"></div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="mx-auto px-4 md:px-12 lg:px-16 lg:max-w-[1440px] h-[70vh] lg:h-screen flex items-center">
        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Reliable Dry Van Trailer
            <span className="text-blue-400"> Rental and Leasing</span> Solutions
          </motion.h1>
          <motion.p
            className="text-md md:text-lg lg:text-xl mb-4 text-blue-200 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Welcome to <span className="text-blue-400">Addis Path</span>
          </motion.p>
          <motion.p
            className="text-sm md:text-md  lg:text-lg mb-8 leading-relaxed text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            At Addis Path, we specialize in providing high-quality dry van
            semi-trailer rental and leasing services tailored to meet the unique
            needs of businesses across various industries.
          </motion.p>
          <motion.div
            className="flex  gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/services" className="group">
              <button className="w-full sm:w-auto px-2 sm:px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center ">
                Explore Services
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contact" className="group">
              <button className="w-full sm:w-auto px-6 py-3 bg-transparent text-blue-400 border-2 border-blue-400 rounded-lg shadow-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out flex items-center justify-center ">
                Contact Us
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
