import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#FFE5D1] flex flex-col md:flex-row gap-6 justify-between py-12  px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32">
      {/* Intro section */}
      <div className="flex flex-col items-start gap-4">
        <Link href="#" className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#F3C269] italic font-serif">
            Memora
          </h1>
          <p className="text-xs sm:text-sm  text-black">Babies Collection</p>
        </Link>
        <p className="w-full md:max-w-80 lg:max-w-96 text-justify text-[#696666] font-medium">
          At Memora, we specialize in baby clothing, accessories, toys, and
          more, ensuring every product meets the highest standards of safety and
          comfort. We believe that every baby deserves the best, which is why we
          carefully select our materials and designs with both parents and
          babies in mind.
        </p>
      </div>

      {/* quick links section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold">Quick Links</h1>
        <div className="flex flex-col gap-2 items-start text-[#696666] font-medium">
          <Link href="/about">About Us</Link>
          <Link href="/product">Products</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="contact">Contact Us</Link>
          <Link href="services">Services</Link>
        </div>
      </div>

      {/*Conect with us section  */}
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold">Connect with us</h1>
        <div className="flex flex-col gap-1 items-start text-[#696666] font-medium">
          <span>Memora Cop.pvt.ltd</span>
          <span>Kathmandu, Nepal</span>
          <span>+977 9865410010</span>
          <span>memora@gmail.com</span>
        </div>
        <div className="flex gap-4 text-2xl items-center">
          <Link href="#">
            <IoIosMail size={28} />
          </Link>
          <Link href="#">
            <FaTiktok />
          </Link>
          <Link href="#">
            <FaInstagramSquare />
          </Link>
          <Link href="#">
            <FaFacebookSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
