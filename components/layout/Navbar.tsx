"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();
  const NavItemList = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Products",
      href: "/product",
    },
    {
      label: "Testimonial",
      href: "/testimonials",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "Services",
      href: "/services",
    },
  ];
  console.log("path", path);
  return (
    <div className="flex justify-end items-center gap-8 py-3 px-32 font-medium tracking-wide text-base">
      {NavItemList.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`${
            item.href === path ? "underline underline-offset-[6px] " : ""
          } hover:underline hover:underline-offset-[6px] decoration-[#F7AD3D] decoration-[2px]`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
