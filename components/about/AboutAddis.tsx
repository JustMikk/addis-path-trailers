import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutAddis: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto p-6 px-4 space-y-16 md:px-12 lg:px-16 lg:max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols gap-4">
            <Image
              src="/assets/images/trailers.png"
              alt="Professional team"
              width={700}
              height={500}
              className="rounded-xl shadow-xl h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/assets/images/trailer-20.png"
              alt="Business operations"
              width={700}
              height={500}
              className="rounded-xl shadow-xl mt-6 md:mt-8 h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-snug text-blue-600">
              Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              At Addis Path, our team is the backbone of our success. With a
              shared passion for excellence, innovation, and customer
              satisfaction, we are dedicated to providing reliable dry van
              trailer rental and leasing services that empower businesses across
              various industries.
            </p>
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-snug text-blue-600">
              Who We Are
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our team comprises experienced professionals with deep knowledge
              of the transportation and logistics industry. From customer
              support to operations, each member plays a vital role in ensuring
              your business has access to high-quality trailers and outstanding
              service.
            </p>
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-snug text-blue-600">
              Why Work With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our team takes pride in building strong relationships with our
              clients, understanding their needs, and delivering solutions that
              make a difference. We are here to support your business every step
              of the way, providing the expertise and reliability you deserve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAddis;
