import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  TruckIcon,
  DollarSignIcon,
  ClockIcon,
  MemoryStickIcon,
  StoreIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: TruckIcon,
    title: "Transportation",
    description: "When you are transporting goods across town.",
  },
  {
    icon: StoreIcon,
    title: "Storage",
    description: "When you need a secure place to store your goods.",
  },
  // {
  //   icon: ClockIcon,
  //   title: "24/7 Support",
  //   description: "Round-the-clock assistance for your peace of mind",
  // },
];

const AboutSection = () => {
  return (
    <section className="py-10 md:py-20 lg:py-36">
      <div
        className="mx-auto p-6 px-4 md:px-12 lg:px-16 lg:max-w-[1440px]
"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-none"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/images/trailer-11.png"
              alt="Dry Van Semi-Trailers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Quality Trailers</h3>
              <p className="text-sm">
                Our fleet of dry van semi-trailers is regularly maintained to
                ensure reliability and performance for all your transportation
                needs.
              </p>
            </div>
          </motion.div>
          <div className="space-y-8 order-2 md:order-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
                About <span className="text-blue-600">AddisPath</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-4">
                Customer-Centric, Focused on Excellence
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              AddisPath is a family owned business dedicated to providing
              high-quality trailer rental and leasing services. We specialize in
              versatile and cost-effective{" "}
              <strong>dry van semi-trailers</strong>, offering tailored
              solutions to meet the diverse transport and storage needs of
              individuals and businesses alike.
            </motion.p>

            <motion.div
              className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 bg-white shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
                    <div className="flex items-center gap-4">
                      <feature.icon className="text-blue-600 w-8 h-8" />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border border-blue-600 text-blue-700"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
