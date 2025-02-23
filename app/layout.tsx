import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/layout/Topbar";
import Heading from "@/components/layout/Heading";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppin = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
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
        <Footer />
        <Topbar
          text="Hurry Up! Enjoy Up to 50% Off on Selected Apparel & Home Essentials | *T&C Apply"
          top={true}
        />
      </body>
    </html>
  );
}
