"use client";

import { motion } from "framer-motion";
import { Truck, Shield, HeadphonesIcon, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Flexibility",
    description:
      "Customizable rental and leasing options to fit your specific needs.",
    icon: Truck,
  },
  {
    title: "Reliability",
    description:
      "Well-maintained fleet ensuring minimal downtime and maximum efficiency.",
    icon: Shield,
  },
  {
    title: "Exceptional Support",
    description: "A dedicated team ready to assist every step of the way.",
    icon: HeadphonesIcon,
  },
  {
    title: "Competitive Pricing",
    description: "Cost-effective solutions without compromising on quality.",
    icon: DollarSign,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto p-6 px-4 md:px-12 lg:px-16 lg:max-w-[1440px]">
        <motion.h2
          className="text-4xl font-bold mb-12 text-left text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose{" "}
          <span className="text-blue-600">Addis Path Trailer Leasing?</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-white hover:bg-blue-600 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-gray-900 hover:text-white " />
                  </div>
                  <CardTitle className="text-xl font-semibold text-blue-600">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
