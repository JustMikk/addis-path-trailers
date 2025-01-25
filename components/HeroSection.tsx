import { ChevronRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-start text-left px-4 md:px-16 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-black/50 to-black/70"></div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>

      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Reliable Dry Van Trailer{" "}
          <span className="text-blue-400">Rental and Leasing</span> Solutions
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-4 text-blue-200 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Welcome to <span className="text-blue-400">Addis Path</span>
        </motion.p>
        <motion.p
          className="text-sm md:text-lg mb-8 leading-relaxed text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          At Addis Path, we specialize in providing high-quality dry van
          semi-trailer rental and leasing services tailored to meet the unique
          needs of businesses across various industries.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="/services" className="group">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center">
              Explore Our Services
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
          <a href="/contact" className="group">
            <button className="w-full sm:w-auto px-6 py-3 bg-transparent text-blue-400 border-2 border-blue-400 rounded-lg shadow-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out flex items-center justify-center">
              Contact Us
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
