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
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300  ${
        isScrolled
          ? "bg-white text-gray-900 shadow-lg"
          : "bg-transparent border-b border-white/10 text-white"
      }`}
    >
      <div
        className="mx-auto px-4 md:px-12 lg:px-16 lg:max-w-[1440px]
"
      >
        <div className=" flex h-16 items-center justify-between ">
          <Link href="/" className="flex items-center">
            {isScrolled ? (
              <Image
                src="/assets/images/logo-sticker.png"
                alt="Logo"
                width={200}
                height={200}
                className="h-24 w-24 md:h-28 md:w-28"
              />
            ) : (
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="h-24 w-24 md:h-28 md:w-28"
              />
            )}
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
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
                className="lg:hidden p-2"
                aria-label="Open Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6">
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/assets/images/logo-sticker.png"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="h-24 w-24"
                />
              </div>
              <nav className="space-y-6">
                {navLinks.map((link) => (
                  <SheetTrigger asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`block text-lg font-medium hover:text-blue-600 ${
                        pathname === link.href
                          ? "text-blue-600 font-semibold"
                          : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetTrigger>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-sm">+1 (414) 595-0096</span>
            </div>
            <Button
              variant="outline"
              className={`border-blue-600 text-blue-600 hover:bg-blue-100 ${
                isScrolled
                  ? "bg-white text-gray-900"
                  : "bg-transparent text-white"
              } `}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
