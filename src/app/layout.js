import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IVS Alliance | Tweetalig Onderwijis",
  description:
    "IVS Alliance promotes knowledge, inspires learning, and supports students in their journey of studying and personal growth.",
  openGraph: {
    title: "IVS Alliance | Tweetalig Onderwijis",
    type: "website",
    description:
      "IVS Alliance promotes knowledge, inspires learning, and supports students in their journey of studying and personal growth.",
    url: "https://www.ivs-alliance.nl/",
    siteName: "IVS Alliance",
    images: [
      {
        url: "https://www.ivs-alliance.nl/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "IVS Alliance - Tweetalig Onderwijis",
      },
      {
        url: "https://www.ivs-alliance.nl/assets/logo.png",
        width: 800,
        height: 600,
        alt: "IVS Alliance - Tweetalig Onderwijis",
      },
    ],
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-CFB5ZS0QEK" />
      </body>
    </html>
  );
}
