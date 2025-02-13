"use client";
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
import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CustomModal } from "../CustomModal";
import ReactHtmlParser from "react-html-parser";

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
    value: (
      <>
        Mon - Fri: 8:00 AM - 5:00 PM
        <br />
        Sat: 9:00 AM - 1:00 PM
      </>
    ),
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handlePrivacyModalOpen = () => {
    setIsPrivacyModalOpen(true);
  };

  const handlePrivacyModalClose = () => {
    setIsPrivacyModalOpen(false);
  };
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container  mx-auto px-4 md:px-12 lg:px-16 lg:max-w-[1440px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div>
              <ExportedImage
                src="/images/logo.png"
                alt="Logo"
                width={200}
                height={200}
                // priority
                loading="lazy"
                className="h-24 w-24 md:h-28 md:w-28"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in dry van trailer rental and leasing
              services. Providing reliable and flexible solutions for your
              transportation needs.
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
            <Button
              onClick={handlePrivacyModalOpen}
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Button>
          </div>
        </div>
      </div>
      <CustomModal
        title="Privacy Policy for Addis Trailer Rentals"
        subtitle=""
        body={ReactHtmlParser(`
          <div>
            <p>Welcome to Addis Path Trailer Rental and Leasing. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.addispathtrailers.com).</p>
            <p>By using our Website, you consent to the practices described in this Privacy Policy. If you do not agree, please do not use our Website.</p>

            <h3 class="font-bold mt-4">1. Information We Collect</h3>
            <p>We collect the following types of information:</p>
            <h4 class="font-bold mt-2">A. Personal Information</h4>
            <p>When you interact with us, we may collect personally identifiable information, such as:</p>
            <ul class="list-disc list-inside ml-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name (if applicable)</li>
              <li>Any other information you voluntarily provide through contact forms or account registration</li>
            </ul>
            <h4 class="font-bold mt-2">B. Non-Personal Information</h4>
            <p>We may collect non-personal information, including:</p>
            <ul class="list-disc list-inside ml-4">
              <li>Browser type and version</li>
              <li>IP address</li>
              <li>Device type</li>
              <li>Website usage data (e.g., pages visited, time spent on pages)</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h3 class="font-bold mt-4">2. How We Use Your Information</h3>
            <p>We use the collected information for the following purposes:</p>
            <ul class="list-disc list-inside ml-4">
              <li>To provide and manage trailer leasing services</li>
              <li>To communicate with you regarding inquiries, contracts, and support</li>
              <li>To improve our Website and services</li>
              <li>To ensure security and prevent fraud</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h3 class="font-bold mt-4">3. How We Share Your Information</h3>
            <p>We do not sell or rent your personal information. However, we may share your information with:</p>
            <ul class="list-disc list-inside ml-4">
              <li>Service Providers: We may share information with third-party providers that help us operate our business, such as payment processors and website hosting services.</li>
              <li>Legal Compliance: We may disclose information if required by law, court order, or regulatory request.</li>
              <li>Business Transfers: In case of a business sale, merger, or acquisition, your information may be transferred to the new entity.</li>
            </ul>

            <h3 class="font-bold mt-4">4. Cookies and Tracking Technologies</h3>
            <p>We use cookies and similar tracking technologies to enhance your experience on our Website. You can adjust your browser settings to refuse cookies, but some features of the Website may not function properly.</p>

            <h3 class="font-bold mt-4">5. Data Security</h3>
            <p>We implement industry-standard security measures to protect your personal information. However, no online system is 100% secure, and we cannot guarantee absolute security.</p>

            <h3 class="font-bold mt-4">6. Changes to This Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>

            <h3 class="font-bold mt-4">7. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at info@addispathtrailers.com.</p>
          </div>
        `)}
        isOpen={isPrivacyModalOpen}
        onClose={handlePrivacyModalClose}
      />
    </footer>
  );
};

export default Footer;
