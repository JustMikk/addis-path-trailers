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
              transition={{ duration: 0.5 }}
              className="bg-blue-50 rounded-lg p-6"
            >
              <h3 className="text-blue-600 text-xl font-semibold mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus sapiente tempora fugit necessitatibus amet temporibus.
                Quidem amet perspiciatis libero vel earum ut unde reiciendis
                debitis nulla soluta qui, molestias rem.
              </p>
            </motion.div>

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus sapiente tempora fugit necessitatibus amet temporibus.
                Quidem amet perspiciatis libero vel earum ut unde reiciendis
                debitis nulla soluta qui, molestias rem.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-blue-50 rounded-lg p-6 text-blue-600"
            >
              <h3 className="text-xl font-semibold mb-4">Our History</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus sapiente tempora fugit necessitatibus amet temporibus.
                Quidem amet perspiciatis libero vel earum ut unde reiciendis
                debitis nulla soluta qui, molestias rem.
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
                Lorem ipsum dolor sit amet consectetur adipisicing
              </h2>
              <p className="text-gray-300 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus sapiente tempora fugit necessitatibus amet temporibus.
                Quidem amet perspiciatis libero vel earum ut unde reiciendis
                debitis nulla soluta qui, molestias rem.
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
