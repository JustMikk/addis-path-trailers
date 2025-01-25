import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const cards = [
  {
    title: "Dry Van Semi-Trailer Rentals & Leasing",
    description: [
      "Secure and versatile trailers for cargo transport",
      "Temporary storage and seasonal inventory overflow",
      "Event logistics and more",
    ],
    details:
      "Flexible short-term and long-term rental options to suit your needs. Available sizes: 28’, 40’, and 53’ with roll-up or swing doors for easy loading and unloading.",
    image: "assets/images/dry-van.jpg",
  },
  {
    title: "Refrigerated Trailers",
    description: [
      "Ideal for temperature-sensitive goods",
      "Advanced cooling systems for consistent performance",
      "Suitable for food, pharmaceuticals, and more",
    ],
    details:
      "Available in various sizes with flexible leasing plans to meet your operational demands.",
    image: "assets/images/van1.jpg",
  },
  {
    title: "Flatbed Trailers",
    description: [
      "Perfect for heavy and oversized loads",
      "Durable and versatile designs",
      "Customizable options available",
    ],
    details:
      "Designed for a wide range of industries with short-term and long-term rental solutions.",
    image: "assets/images/flatbed-trailer.jpg",
  },
];

const TrailerRentalSection: React.FC = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Trailer Rental & Leasing Solutions
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Discover our extensive range of trailer rental and leasing solutions,
          tailored to fulfill the unique requirements of industries such as
          warehousing, distribution, logistics, and beyond.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            className="shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <motion.img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
            <CardHeader className="px-6 py-4">
              <CardTitle className="text-2xl font-bold text-gray-800">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {card.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Separator className="my-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.details}
              </p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="text-center mt-12"
      >
        <Button className="px-8 py-3 text-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900">
          Explore More
        </Button>
      </motion.div>
    </section>
  );
};

export default TrailerRentalSection;
