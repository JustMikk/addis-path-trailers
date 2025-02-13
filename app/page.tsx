"use client";

import { useState } from "react";
import { industries } from "@/constants";
import VailableCard from "@/components/Home/VailableCards";
import AboutSection from "@/components/Home/WhyChooseUs";
import HeroSection from "@/components/Home/HeroSection";
import { OurService } from "@/components/OurServices";
import { Banner } from "@/components/common/Banner";
import React, { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

import { ServiceSection } from "@/components/Home/ServiceSection";

import { ContactForm } from "@/components/contact/ContactForm";
import { CustomModal } from "@/components/CustomModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <CustomModal
        title="Appointments Only"
        subtitle="Important Notice"
        body="Rentals are by appointment only. Please call, text, or email us about reserving your rental today."
        isOpen={isOpen}
        onClose={handleClose}
      />

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
