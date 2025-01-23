import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Addis Path Trailer Leasing</h3>
            <p className="text-sm text-primary-200">Reliable Dry Van Trailer Rental & Leasing Services</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-primary-200">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About Us", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    className="text-white hover:text-primary-300 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-primary-200">Contact</h4>
            <p className="text-sm text-white">Email: Info@AddisPathTrailer.com</p>
            <p className="text-sm text-white">Phone: +1 (414) 595-0096</p>
            <p className="text-sm text-white">290 Jackson Place NW, Lilburn, GA 30047</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2 text-primary-200">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                {
                  name: "Facebook",
                  icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                },
                {
                  name: "Twitter",
                  icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
                {
                  name: "LinkedIn",
                  icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Addis Path Trailer Leasing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

