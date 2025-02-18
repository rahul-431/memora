import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/layout/Topbar";
import Heading from "@/components/layout/Heading";
import Navbar from "@/components/layout/Navbar";

const poppin = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memora",
  description: "Online baby shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppin.variable}  antialiased`}>
        <Topbar text="Hurry Up! Enjoy Up to 50% Off on Selected Apparel & Home Essentials | *T&C Apply" />
        <Heading />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
