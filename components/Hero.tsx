import Link from "next/link"
import { motion } from "framer-motion"

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  showButton?: boolean
  buttonText?: string
  buttonLink?: string
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  showButton = false,
  buttonText = "Book Now",
  buttonLink = "/contact",
}: HeroProps) => {
  return (
    <div
      className="relative h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            {subtitle}
          </motion.p>
        )}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href={buttonLink}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              {buttonText}
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Hero

