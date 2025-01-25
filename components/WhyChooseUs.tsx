import React from "react";
import LeasingCard from "./card";
import { motion } from "framer-motion";
import Content from "../constants/index";
import { LucideIcon } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50 px-4 md:px-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text ">
            Why <span className="text-blue-600">Addis Path</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Discover our comprehensive range of trailer solutions designed to
            meet your specific business needs
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">
          {Content.map(
            (
              content: {
                title: string;
                description: string[];
                icon: LucideIcon;
              },
              index: number
            ) => (
              <LeasingCard
                key={index}
                title={content.title}
                description={content.description}
                icon={<content.icon />}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
