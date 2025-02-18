"use client";
import Link from "next/link";
import React from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import IconLink from "../shared/IconLink";
import { FiShoppingCart } from "react-icons/fi";
import { HiBars3BottomRight } from "react-icons/hi2";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavItemList } from "./Navbar";
import { usePathname } from "next/navigation";
const Heading = () => {
  const path = usePathname();
  const MenuIconList = [
    {
      icon: <FaRegHeart />,
      href: "#",
    },
    {
      icon: <FaRegUser />,
      href: "#",
    },
    {
      icon: <FiShoppingCart />,
      href: "#",
    },
  ];

  return (
    <div className="flex items-center justify-between px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 border-b-[6px] border-gray-100 py-2">
      <Link href="#" className="flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#F3C269] italic font-serif">
          Memora
        </h1>
        <p className="text-xs sm:text-sm  text-black">Babies Collection</p>
      </Link>
      <div className="flex gap-4 sm:gap-5 md:gap-6 text-[#F7AD3D] text-lg md:text-xl ">
        {MenuIconList.map((item, index) => (
          <IconLink href={item.href} icon={item.icon} key={index} />
        ))}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="text-xl">
              <HiBars3BottomRight />
            </SheetTrigger>
            <SheetContent side="right" className="max-w-44 py-8">
              <SheetHeader>
                <SheetTitle className="text-lg text-left">Memora</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-3 font-medium text-sm">
                {NavItemList.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className={`${
                      item.href === path
                        ? "underline underline-offset-[6px] "
                        : ""
                    } hover:underline hover:underline-offset-[6px] decoration-[#F7AD3D] decoration-[2px]`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Heading;
