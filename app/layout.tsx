import { Header } from "@/components/common/Header";
import "./globals.css";

import Footer from "@/components/common/Footer";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Addis Path Trailer Leasing",
  description: "Reliable Dry Van Trailer Rental & Leasing Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space.className}>
        <div className="bg-blue-50">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
