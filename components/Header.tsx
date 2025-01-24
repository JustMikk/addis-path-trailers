"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 shadow-lg ${
        isScrolled ? "bg-white text-gray-900" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo.jpg"
            alt="Logo"
            width={60}
            height={60}
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <span className="ml-2 text-lg font-bold">Addis path</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-600 transition ${
                pathname === link.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="md:hidden p-2"
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6">
            <div className="flex items-center justify-between mb-6">
              <Image
                src="/assets/images/logo.jpg"
                alt="Logo"
                width={50}
                height={50}
                className="h-10 w-10"
              />
            </div>
            <nav className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-lg font-medium hover:text-blue-600 ${
                    pathname === link.href ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-blue-600" />
            <span className="text-sm">123 456 789</span>
          </div>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-100"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
