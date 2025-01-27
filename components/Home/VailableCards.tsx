import React from "react";
import LeasingCard from "../Home/card";
import { motion } from "framer-motion";
import Content from "../../constants/index";
import { LucideIcon } from "lucide-react";

const VailableCard = () => {
  return (
    <section className="-mt-20 mx-auto px-4 md:px-12 lg:px-16 lg:max-w-[1440px]">
      <div className="container mx-auto px-4 z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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

export default VailableCard;
