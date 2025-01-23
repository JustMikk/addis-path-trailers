"use client";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Hero
        title="About Us"
        backgroundImage="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4 text-gray-700">
                  Addis Path Trailer Leasing was founded in 2010 with a vision
                  to revolutionize the dry van trailer rental and leasing
                  industry. Our founders, with over 30 years of combined
                  experience in logistics and transportation, recognized the
                  need for a more flexible, customer-centric approach to trailer
                  leasing.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                  Starting with a small fleet of 50 trailers, we've grown to
                  become one of the leading providers in the Southeastern United
                  States, now managing over 1,000 trailers and serving hundreds
                  of satisfied clients across various industries.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                  Our journey has been marked by continuous innovation,
                  unwavering commitment to quality, and a deep understanding of
                  our clients' evolving needs. We've weathered economic storms,
                  adapted to technological changes, and consistently delivered
                  value to our customers.
                </p>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Addis Path Trailer Leasing Team"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl mb-8 text-center text-primary-600 italic max-w-3xl mx-auto">
              "Empowering businesses by delivering cost-effective, reliable, and
              high-quality dry van trailer rental and leasing services."
            </p>
            <p className="text-lg mb-8 text-gray-700 text-center max-w-3xl mx-auto">
              At Addis Path Trailer Leasing, we are committed to providing our
              clients with flexible, efficient, and innovative trailer
              solutions. We understand that every business has unique needs, and
              we strive to tailor our services to meet those specific
              requirements, helping our clients optimize their operations and
              achieve their goals.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Our Vision and Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-white to-primary-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-primary-700">
                  Vision
                </h3>
                <p className="text-gray-700">
                  To become the leading provider of dry van trailer rental and
                  leasing services in the Southeastern United States, known for
                  our exceptional customer service, innovative solutions, and
                  commitment to sustainability. We aim to set new industry
                  standards and contribute to the growth and success of our
                  clients' businesses.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-primary-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-primary-700">
                  Values
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Trust: Building lasting relationships with our clients based
                    on transparency and reliability.
                  </li>
                  <li>
                    Reliability: Providing dependable equipment and services
                    that our clients can count on.
                  </li>
                  <li>
                    Customer Satisfaction: Going above and beyond to exceed our
                    clients' expectations.
                  </li>
                  <li>
                    Innovation: Continuously improving our services and adopting
                    new technologies to better serve our clients.
                  </li>
                  <li>
                    Sustainability: Committing to environmentally friendly
                    practices in our operations and promoting responsible
                    business practices.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-lg mb-8 text-gray-700 text-center max-w-3xl mx-auto">
              Our team is the backbone of Addis Path Trailer Leasing. With
              diverse backgrounds in logistics, customer service, and fleet
              management, our professionals are committed to excellence,
              innovation, and customer satisfaction. We pride ourselves on our:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expertise",
                  description:
                    "Years of experience in the trailer leasing industry",
                  icon: "🧠",
                },
                {
                  title: "Dedication",
                  description:
                    "Committed to providing the best possible service",
                  icon: "💪",
                },
                {
                  title: "Responsiveness",
                  description: "Always available to address your concerns",
                  icon: "⚡",
                },
              ].map((quality, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{quality.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">
                    {quality.title}
                  </h3>
                  <p className="text-gray-600">{quality.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-white to-primary-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            Join Our Team
          </h2>
          <p className="text-lg mb-8 text-gray-700 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our growing
            team. If you're passionate about logistics, customer service, and
            innovation, we'd love to hear from you!
          </p>
          <a
            href="/careers"
            className="bg-primary-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 text-lg inline-block hover:scale-110 transform"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
}
