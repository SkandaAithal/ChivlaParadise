import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import { BASE_URL } from "@/lib/contants";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Chivla Paradise",
  description: "Farmstay retreat by the sea at Chivla Paradise.",
  metadataBase: new URL(BASE_URL || ""),
  authors: [{ name: "Chivla Paradise" }],
  keywords: [
    "hotel Malvan",
    "accommodation in Malvan",
    "Malvan hotels",
    "resort Malvan Maharashtra",
    "book Malvan hotel",
    "Malvan hotel deals",
    "Malvan hotel booking",
    "hotel rooms open in Malvan",
    "hotel with sea view Malvan",
    "Malvan hotels for families",
    "boutique hotel Malvan",
    "best budget hotel near Chivla beach",
    "affordable accommodation Malvan for couples",
    "hotel in Malvan with free parking",
    "Chivla Paradise Malvan",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "travel",
  openGraph: {
    title: "Chivla Paradise | Beachside Farmstay in Malvan",
    description:
      "Unwind at Chivla Paradise – a coastal escape blending hospitality, healing, and scenic beauty.",
    url: BASE_URL || "",
    siteName: "Chivla Paradise",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Chivla Paradise Farmstay by the Sea",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chivla Paradise | Beachside Farmstay in Malvan",
    description:
      "Escape to Malvan’s serene coast – where cozy rooms, wellness, and beachside beauty meet.",
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased max-w-[1780px] mx-auto`}
      >
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
