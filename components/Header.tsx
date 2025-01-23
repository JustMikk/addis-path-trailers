"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-300"
          >
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              Addis Path Trailer Leasing
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-lg font-medium relative ${
                    pathname === item.path
                      ? "text-primary-600"
                      : `${scrolled ? "text-primary-600" : "text-white"} hover:text-primary-500`
                  } transition-all duration-300 group`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left transition-all duration-300 ${pathname === item.path ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100`}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </div>
          <button
            className="md:hidden text-primary-600 hover:text-primary-700 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 space-y-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block px-3 py-2 rounded-md text-lg font-medium ${
                    pathname === item.path
                      ? "bg-primary-100 text-primary-600"
                      : "text-primary-600 hover:bg-primary-50 hover:text-primary-500"
                  } transition-all duration-300`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header

