import type React from "react";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/aboutus" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "Dry Van Trailer Rental",
  "Long-term Leasing",
  "Short-term Rental",
  "Storage Solutions",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Info@addispathtrailer.com",
    href: "mailto:Info@addispathtrailer.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (414) 595-0096",
    href: "tel:+14145950096",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "290 Jackson Place NW, Lilburn, GA 30047",
    href: "https://maps.google.com/?q=290+Jackson+Place+NW,+Lilburn,+GA+30047",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 8:00 AM - 6:00 PM",
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container  mx-auto px-4 md:px-12 lg:px-16 lg:max-w-[1440px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div>
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="h-24 w-24 md:h-28 md:w-28"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in dry van trailer rental and leasing
              services. Providing reliable solutions for your transportation
              needs since 2010.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name} className="group flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="group flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex items-start gap-3">
                  <info.icon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-sm text-gray-400">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-300">{info.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Addis Path Trailer Leasing. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
