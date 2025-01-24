import { Header } from "@/components/Header";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";

const space = Space_Grotesk({ subsets: ["latin"] });

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
