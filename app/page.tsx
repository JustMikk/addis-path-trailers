"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <ImageSlider />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Reliable Dry Van Trailer Rental and Leasing Solution for Your
            Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Your trusted partner in providing flexible, reliable, and
            cost-effective trailer solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold inline-block hover:scale-110 transition-transform duration-300"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Our Services at a Glance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of trailer solutions designed to
              meet your specific business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dry Van Semi-Trailer Rentals",
                description:
                  "Short-term solutions for your temporary storage and transportation needs",
                image:
                  "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3",
              },
              {
                title: "Flexible Leasing Options",
                description:
                  "Customizable long-term leasing solutions that grow with your business",
                image:
                  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3",
              },
              {
                title: "Industry-Specific Solutions",
                description:
                  "Specialized solutions tailored to your industry requirements",
                image:
                  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-primary-600 font-semibold hover:scale-110 transition-transform duration-300 inline-flex items-center"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Why Choose Addis Path?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium trailer solutions and
              exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Flexible Leasing Options",
                description:
                  "Customizable solutions that adapt to your business needs",
                quote: "Tailored solutions for every business size and need",
              },
              {
                title: "Top-Quality Equipment",
                description:
                  "Well-maintained trailers ensuring reliability and performance",
                quote: "Excellence in every mile, every load",
              },
              {
                title: "Exceptional Support",
                description: "24/7 customer service and maintenance assistance",
                quote: "Always there when you need us, day or night",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6"
              >
                <blockquote className="text-lg italic text-gray-600 mb-4">
                  "{feature.quote}"
                </blockquote>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for diverse industry needs
            </p>
          </motion.div>

          {[
            {
              name: "E-Commerce and Retail",
              description:
                "Our trailers support e-commerce giants and retailers by offering scalable leasing options to handle growing demand. Whether it is moving goods between fulfilment centers or managing seasonal inventory spikes, our trailers are ready to meet your needs.",
              image:
                "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3",
            },
            {
              name: "Logistics and Freight",
              description:
                "We collaborate with logistics companies, and other carriers, to provide reliable trailers that expand fleet capacity without the long-term cost of ownership. Our flexible leasing terms ensure you can meet delivery commitments on time.",
              image:
                "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3",
            },
            {
              name: "Manufacturing",
              description:
                "From raw materials to finished goods, we provide secure and durable dry van trailers for storing and transporting products efficiently. Our services help manufacturers focus on production without worrying about logistics equipment.",
              image:
                "https://images.unsplash.com/photo-1565793979206-10951493332d?ixlib=rb-4.0.3",
            },
            {
              name: "Food and Beverage",
              description:
                "Our dry van trailers are perfect for non-refrigerated food items and beverages, ensuring safe and dry storage for transport or temporary holding. We provide cost-effective solutions for food suppliers and distributors.",
              image:
                "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3",
            },
            {
              name: "Construction Materials",
              description:
                "For builders and suppliers, our dry van trailers provide secure, weatherproof storage for construction materials, tools, and equipment. We help you keep your supplies safe and accessible on or off the job site.",
              image:
                "https://images.unsplash.com/photo-1503594384566-461fe158e797?ixlib=rb-4.0.3",
            },
          ].map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to find the perfect trailer solution for your
              needs
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-full text-lg font-semibold inline-block hover:scale-110 transition-transform duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-6">
                Addis Path Trailer Leasing is a family-owned business with over
                30 years of experience in the transportation industry. We pride
                ourselves on providing reliable, flexible, and cost-effective
                trailer solutions to businesses across the Southeast.
              </p>
              <Link
                href="/about"
                className="text-primary-600 font-semibold hover:scale-110 transition-transform duration-300 inline-flex items-center"
              >
                Learn More About Us <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
                alt="Our team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Preview */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
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
