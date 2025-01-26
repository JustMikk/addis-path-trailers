import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Banner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative h-[400px] sm:h-[500px] flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/righttrack.jpg"
          alt="Banner Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />{" "}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Your Trusted Partner in{" "}
          <span className="text-blue-400">Transport Solutions</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          We provide secure, reliable, and versatile dry van semi-trailers for
          all your cargo and storage needs. Let us help you streamline your
          operations today.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Contact Us
        </Link>
      </motion.div>
    </motion.section>
  );
}
