import { services } from "@/constants/index";
import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";

export function ServiceSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div
        className="mx-auto p-6 px-4 md:px-12 lg:px-16 lg:max-w-[1440px]
"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6 ">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl">
            At Addis Path, we provide high-quality dry van trailer rental and
            leasing services tailored to meet the specific needs of various
            industries.
          </p>
        </motion.div>
        <div className="flex overflow-x-auto space-x-6 pb-6 px-4 -mx-4 no-scrollbar">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
