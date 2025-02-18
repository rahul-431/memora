import Link from "next/link";
import React from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import IconLink from "../shared/IconLink";
import { FiShoppingCart } from "react-icons/fi";

const Heading = () => {
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
    <div className="flex items-center justify-between px-32 border-b-[6px] border-gray-100 py-2">
      <Link href="#" className="flex flex-col items-center">
        <h1 className="text-4xl text-[#F3C269] italic font-serif">Memora</h1>
        <p className="text-sm  text-black">Babies Collection</p>
      </Link>
      <div className="flex gap-6 text-[#F7AD3D] text-xl ">
        {MenuIconList.map((item, index) => (
          <IconLink href={item.href} icon={item.icon} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Heading;
