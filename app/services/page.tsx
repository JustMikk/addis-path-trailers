"use client";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <div>
      <Hero
        title="Our Reliable Trailer Rental & Leasing Services"
        backgroundImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Dry Van Semi-Trailer Rentals and Leasing
            </h2>
            <p className="text-lg mb-8 text-gray-700 text-center max-w-3xl mx-auto">
              Addis Path Trailer Leasing offers tailored trailer solutions for
              warehousing, logistics, retail, and more. Our comprehensive
              services are designed to meet your specific needs and help your
              business thrive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-white to-primary-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-primary-700">
                  Our Services Include:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Temporary storage solutions</li>
                  <li>Seasonal inventory overflow management</li>
                  <li>Event logistics support</li>
                  <li>Cross-docking operations</li>
                  <li>Emergency capacity expansion</li>
                  <li>Long-term leasing options</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-primary-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-primary-700">
                  Available Trailer Sizes:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    28' trailers - Perfect for urban deliveries and tight spaces
                  </li>
                  <li>
                    40' trailers - Ideal for medium-sized loads and versatile
                    applications
                  </li>
                  <li>
                    53' trailers - Maximum capacity for long-haul transportation
                    and large inventory
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Retail/E-commerce",
                  icon: "🛍️",
                  description:
                    "Flexible solutions for inventory management and distribution.",
                },
                {
                  name: "Logistics/Freight",
                  icon: "🚚",
                  description:
                    "Reliable trailers for efficient transportation and delivery.",
                },
                {
                  name: "Manufacturing",
                  icon: "🏭",
                  description:
                    "Storage and transportation solutions for raw materials and finished goods.",
                },
                {
                  name: "Food and Beverage",
                  icon: "🍽️",
                  description:
                    "Temperature-controlled options for perishable goods.",
                },
                {
                  name: "Construction",
                  icon: "🏗️",
                  description:
                    "Durable trailers for transporting equipment and materials.",
                },
                {
                  name: "Automotive",
                  icon: "🚗",
                  description:
                    "Specialized trailers for vehicle parts and accessories.",
                },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-white to-primary-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            Why Choose Addis Path Trailer Leasing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Flexibility",
                description:
                  "Customizable rental and leasing options to fit your specific needs.",
                icon: "🔄",
              },
              {
                title: "Reliability",
                description:
                  "Well-maintained fleet ensuring minimal downtime and maximum efficiency.",
                icon: "🔧",
              },
              {
                title: "Customer Support",
                description:
                  "24/7 assistance for all your trailer-related needs.",
                icon: "📞",
              },
              {
                title: "Competitive Pricing",
                description:
                  "Cost-effective solutions without compromising on quality.",
                icon: "💰",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-primary-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Trailer on the road"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Consultation",
                description:
                  "We discuss your needs and recommend the best solutions.",
                icon: "💬",
              },
              {
                title: "Customization",
                description:
                  "We tailor our services to fit your specific requirements.",
                icon: "🔧",
              },
              {
                title: "Delivery",
                description:
                  "We ensure timely delivery and setup of your rented or leased trailers.",
                icon: "🚚",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-primary-700">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-white max-w-3xl mx-auto">
            Contact us today to discuss your trailer rental and leasing needs.
            Our team is ready to provide you with the best solutions for your
            business.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary-600 font-bold py-3 px-6 rounded-full transition-all duration-300 text-lg inline-block hover:scale-110 transform"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
