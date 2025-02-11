"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import ExportedImage from "next-image-export-optimizer";

export default function ContactPage() {
  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center">
        <ExportedImage
          src="/images/trailer-02.png"
          alt="contact background"
          fill
          // priority
          loading="lazy"
          style={{ objectFit: "cover" }}
          className="brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h3 className="text-lg md:text-xl font-light text-gray-80000 mb-4">
          At <span className="text-blue-600 font-semibold">Addis Path</span>, we
          are here to provide the dry van trailer rental and leasing solutions
          your business needs. Whether you have a question, need a quote, or
          want to learn more about our services, contact us through any of the
          following:
        </h3>
      </motion.div>
      <ContactForm />
      <section className="py-16 bg-primary-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary-800">
            Visit Our Office
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.7007290496584!2d-84.14234668479258!3d33.82645798066789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a68e8f8f8f8f%3A0x1b3f7c7b7b7b7b7b!2s290%20Jackson%20Pl%20NW%2C%20Lilburn%2C%20GA%2030047!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
