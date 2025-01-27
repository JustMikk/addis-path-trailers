import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function InfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto p-6 px-4 md:px-12 lg:px-16 lg:max-w-[1440px]">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-50 rounded-lg p-6"
            >
              <h3 className="text-blue-600 text-xl font-semibold mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Our mission is to empower businesses by delivering
                cost-effective, reliable, and high-quality dry van trailer
                rental and leasing services while fostering sustainable
                practices and contributing to local economic growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 rounded-lg p-6"
            >
              <h3 className="text-blue-600 text-xl font-semibold mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                Our aim is to delivering outstanding service and innovative,
                customer-centric solutions. We focus on fostering lasting client
                relationships while expanding our reach and upholding high
                service standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-blue-50 rounded-lg p-6 text-blue-600"
            >
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600">
                <b>Trust</b>: We prioritize transparency and integrity, ensuring
                dependable rental experiences.
                <br /> <b>Reliability</b>: Our well-maintained trailers and
                timely services guarantee consistent quality. <br />
                <b>Customer Satisfaction</b>: We focus on understanding customer
                needs and delivering tailored solutions that exceed
                expectations.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative text-white overflow-hidden rounded-xl flex flex-col justify-center items-center p-8"
            style={{
              backgroundImage: "url('/assets/images/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gray-900/80"></div>
            <div className="z-10 relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Our Mission, Vision, and Values
              </h2>
              <p className="text-gray-300 mb-8">
                At AddisPath, our mission is to provide exceptional rental
                services that exceed customer expectations. Our vision is to be
                the leading rental service provider known for our reliability
                and customer-centric approach. We value integrity, excellence,
                and a commitment to continuous improvement in all that we do.
              </p>
              <Button
                variant="secondary"
                className="bg-blue-600 hover:bg-[#A33A1B] text-white border-none"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
