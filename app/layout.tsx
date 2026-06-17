import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Danilo Kulišić | Pianist & Piano Professor",
    template: "%s | Danilo Kulišić",
  },
  description:
    "Official website of pianist and piano professor Danilo Kulišić. Concert performances, online piano lessons, educational resources, sheet music and masterclasses.",

  keywords: [
    "Danilo Kulišić",
    "Danilo Kulisic",
    "Pianist",
    "Piano Professor",
    "Online Piano Lessons",
    "Piano Teacher",
    "Classical Piano",
    "Concert Pianist",
    "Piano Lessons",
    "Music Education",
    "Piano Masterclass",
    "Sheet Music",
  ],

  authors: [{ name: "Danilo Kulišić" }],

  openGraph: {
    title: "Danilo Kulišić | Pianist & Piano Professor",
    description:
      "Official website of pianist and piano professor Danilo Kulišić. Concert performances, online piano lessons, educational resources and sheet music.",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
