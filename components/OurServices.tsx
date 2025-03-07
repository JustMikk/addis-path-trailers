import {
  Package,
  CheckCircle,
  MoreHorizontal,
  Calendar,
  Truck,
  ArrowBigRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const statsVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const statItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: Truck,
    title: "Cargo Transport",
    description: "Secure and efficient transportation for your goods.",
  },
  {
    icon: Package,
    title: "Temporary Storage",
    description: "Flexible storage solutions for your inventory needs.",
  },
  {
    icon: Calendar,
    title: "Event Logistics",
    description: "Reliable support for your event planning and execution.",
  },
  {
    icon: MoreHorizontal,
    title: "And More",
    description: "Customized solutions to meet your unique requirements.",
  },
];

const stats = [
  { value: "Tailored", label: "Rental Solutions" },
  { value: "Multiple", label: "Sizes available" },
  { value: "100%", label: "Commitment to Quality" },
];

const additionalFeatures = [
  "Flexible Rental & Leasing Terms",
  "Custom Trailer Configurations",
  "cost-effective solutions",
  "weatherproof storage",
];

export function OurService() {
  return (
    <section className="py-10 md:py-20 lg:py-36">
      <div className="container mx-auto px-4 md:px-12 lg:px-16 lg:max-w-[1440px] p-6">
        <div className="text-left mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Services
            <span className="text-blue-600"> Offered</span>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight flex"
          >
            {" "}
            <ArrowBigRight className="h-8 w-8 text-blue-600 mr-3" />
            Dry Van Semi-Trailer Rentals and Leasing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8 max-w-2xl text-lg"
          >
            We Provide secure and versatile dry van trailers designed to meet a
            variety of needs across industries. While primarily used for cargo
            transport, our trailers are also ideal for:
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-4 hover:shadow-lg transition-all duration-300 rounded-lg bg-white border border-gray-200 group">
                    <CardHeader className="flex flex-col sm:flex-row items-center sm:items-start gap-3 pb-2">
                      <div className="p-2 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
                        <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-800 text-center sm:text-left">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center sm:text-left">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Additional Benefits
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {additionalFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div> */}
          </div>

          <motion.div variants={imageVariants} className="relative">
            <div className="relative rounded-md overflow-hidden shadow-xl">
              <ExportedImage
                src="/images/hero.png"
                alt="Our services in action"
                width={800}
                height={600}
                // priority
                loading="lazy"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <motion.div
                variants={statsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-sm"
              >
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={statItemVariants}
                      className="space-y-1"
                    >
                      <p className="text-lg md:text-2xl font-bold text-blue-600">
                        {stat.value}
                      </p>
                      <p className="text-gray-800 text-sm font-medium">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-8">
            <li>
              <span className="font-semibold text-blue-600">Flexible</span>: Our
              rental and leasing options are flexible, accommodating both
              short-term and long-term requirements to suit your business or
              personal needs.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                Available sizes
              </span>
              : 28’, 40’, and 53’, ensuring a perfect fit for a wide range of
              load capacities and purposes, available with roll-up or swing
              doors for easy loading and unloading.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
