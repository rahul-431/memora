"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export const NavItemList = [
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
const Navbar = () => {
  const path = usePathname();

  console.log("path", path);
  return (
    <div className="hidden md:flex justify-end items-center gap-8 py-3 md:px-20 lg:px-28 xl:px-32 font-medium tracking-wide text-base">
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
