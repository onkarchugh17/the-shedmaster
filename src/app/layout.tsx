import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";
import { companyInfo } from "@/data/company";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theshedmaster.com"),
  title: {
    default: `${companyInfo.name} — Sheds, Fire Pipeline & Steel Solutions`,
    template: `%s | ${companyInfo.name}`,
  },
  description:
    "India's premier industrial construction contractor. High-grade PEB sheds, conventional factory structures, certified fire pipelines, and heavy structural fabrication.",
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://theshedmaster.com",
    siteName: companyInfo.name,
    title: `${companyInfo.name} — Sheds, Fire Pipeline & Steel Solutions`,
    description: companyInfo.description,
    images: [
      {
        url: "/images/hero_shed_v2.jpg",
        width: 1200,
        height: 675,
        alt: `${companyInfo.name} Industrial Shed Infrastructure`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.name} — Industrial Infrastructure India`,
    description: companyInfo.description,
    images: ["/images/hero_shed_v2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": companyInfo.name,
    "description": companyInfo.description,
    "legalName": companyInfo.name,
    "telephone": companyInfo.phoneTel,
    "email": companyInfo.email,
    "url": "https://theshedmaster.com",
    "areaServed": {
      "@type": "Country",
      "name": "India",
    },
    "serviceType": [
      "PEB Shed Construction",
      "Conventional Steel Shed Construction",
      "Fire Pipeline & Hydrant Installation",
      "Heavy Structural Steel Fabrication",
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Delhi NCR / Pan India",
    },
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-800 antialiased font-sans">
        <Header />
        {children}
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
