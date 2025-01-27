import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { services } from "@/constants";
import { ServiceCard } from "./ServiceCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ServiceSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto p-6 px-4 md:px-12 lg:px-16 lg:max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl">
            At Addis Path, we provide high-quality dry van trailer rental and
            leasing services tailored to meet the specific needs of various
            industries.
          </p>
        </motion.div>
        <div className="relative">
          {showLeftArrow && (
            <button
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-blue-600/50 backdrop-blur-sm text-white p-6 rounded-full z-10"
              onClick={scrollLeft}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          <div
            className="flex overflow-x-auto space-x-6 pb-6 px-4 -mx-4 no-scrollbar"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          {showRightArrow && (
            <button
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-blue-600/50 backdrop-blur-sm text-white p-6 rounded-full z-10"
              onClick={scrollRight}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
