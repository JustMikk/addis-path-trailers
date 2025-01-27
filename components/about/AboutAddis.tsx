import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutAddis() {
  return (
    <section className="py-16 my-20 ">
      <div className="mx-auto p-6 px-4 md:px-12 lg:px-16 lg:max-w-[1440px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/assets/images/truck.jpg"
                alt="Professional team"
                width={700}
                height={500}
                className="rounded-xl shadow-xl h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/images/about.jpg"
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
              <h2 className="text-4xl font-extrabold leading-snug text-gray-800">
                Why <span className="text-blue-600">Choose AddisPath?</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                At AddisPath, we prioritize customer satisfaction by offering
                exceptional trailer rental and leasing services tailored to your
                needs. Here’s why we stand out:
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Premium quality dry van trailers built for durability",
                "Flexible rental and leasing options to suit every budget",
                "24/7 customer support for a seamless experience",
                "Nationwide service coverage to meet your logistics needs",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-blue-500" size={24} />
                  <span className="text-gray-700 text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div>
              <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
                <Link href="/contact">Contact Us for more</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
