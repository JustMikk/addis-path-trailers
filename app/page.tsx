"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Phone, Mail, Clock } from "lucide-react";

import { industries } from "@/constants";
import VailableCard from "@/components/Home/VailableCards";
import AboutSection from "@/components/Home/WhyChooseUs";
import HeroSection from "@/components/Home/HeroSection";
import { OurService } from "@/components/OurServices";
import { Banner } from "@/components/common/Banner";

import { ServiceSection } from "@/components/Home/ServiceSection";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? industries.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === industries.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="relative">
      <HeroSection />
      <VailableCard />
      <AboutSection />
      <ServiceSection />
      <OurService />
      <Banner />

      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-blue-600">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to help you find the perfect trailer solution for your
              business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+1 (414) 595-0096",
                link: "tel:+14145950096",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "Info@AddisPathTrailer.com",
                link: "mailto:Info@AddisPathTrailer.com",
              },
              {
                icon: Clock,
                title: "Business Hours",
                content: "Mon-Fri: 8:00 AM - 5:00 PM",
                subContent: "Sat: 9:00 AM - 1:00 PM",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    {item.content}
                  </a>
                ) : (
                  <>
                    <p className="text-gray-600">{item.content}</p>
                    {item.subContent && (
                      <p className="text-gray-600">{item.subContent}</p>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold inline-block hover:scale-110 transition-transform duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
