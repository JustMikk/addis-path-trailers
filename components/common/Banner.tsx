import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

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
        <ExportedImage
          src="/images/trailer-20.png"
          sizes="100%"
          alt="Banner Background"
          fill
          className="object-cover"
          loading="lazy"
          // priority
        />
        <div className="absolute inset-0 bg-black/50" />{" "}
      </div>
      <div
        className="mx-auto px-4 md:px-12 lg:px-16 lg:max-w-[1440px]
"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative z-10 px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-2xl lg:text-4xl font-bold text-white mb-6">
            Your Trusted Partner in{" "}
            <span className="text-blue-400">
              Transport and Storage Solutions
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
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
      </div>
    </motion.section>
  );
}
