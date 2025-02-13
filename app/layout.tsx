import { Header } from "@/components/common/Header";
import "./globals.css";

import Footer from "@/components/common/Footer";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";

const space = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Addis Path Trailer Leasing",
    template: "%s | Addis Path Trailer Leasing",
  },
  description: "Reliable Dry Van Trailer Rental & Leasing Services",
  icons: {
    icon: "/images/og-image.png",
  },
  openGraph: {
    title: "Addis Path Trailer Leasing",
    description:
      "At Addis Path, we specialize in providing high-quality dry van semi-trailer rental and leasing services tailored to meet the unique businesses needs across various industries.",
    type: "website",
    locale: "en_US",
    url: "https://addispathtrailers.com",
    site_name: "Addis Path Trailer Leasing",
    images: [
      {
        url: "https://addispathtrailers.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Addis Path Trailer Leasing",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Addis Path Trailers",
              address: {
                "@type": "PostalAddress",
                streetAddress: "290 Jackson Place NW",
                addressLocality: "Lilburn",
                addressRegion: "GA",
                postalCode: "30047",
                addressCountry: "US",
              },
              telephone: "+1-414-595-0096",
              email: "info@addispathtrailers.com",
            }),
          }}
        />
      </head>
      <body className={space.className}>
        <div className="bg-blue-50">
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
