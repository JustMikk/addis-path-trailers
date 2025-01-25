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
      <section className="pt-16">
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
          <section className="py-20 bg-gradient-to-b from-white to-primary-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-blue-600 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text">
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
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-white to-primary-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-blue-600">
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
          <h2 className="text-4xl font-bold mb-8 text-primary">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-primary max-w-3xl mx-auto">
            Contact us today to discuss your trailer rental and leasing needs.
            Our team is ready to provide you with the best solutions for your
            business.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 text-lg inline-block hover:scale-110 transform"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
