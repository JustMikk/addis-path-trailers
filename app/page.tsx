"use client";

import { useState } from "react";
import { industries } from "@/constants";
import VailableCard from "@/components/Home/VailableCards";
import AboutSection from "@/components/Home/WhyChooseUs";
import HeroSection from "@/components/Home/HeroSection";
import { OurService } from "@/components/OurServices";
import { Banner } from "@/components/common/Banner";

import { ServiceSection } from "@/components/Home/ServiceSection";

import { ContactForm } from "@/components/contact/ContactForm";

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
      <ContactForm />
    </div>
  );
}
