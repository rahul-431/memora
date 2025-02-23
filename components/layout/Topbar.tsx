import React from "react";

type TopbarType = {
  text: string;
  className?: string;
  top?: boolean;
};
const Topbar = ({ text, className, top }: TopbarType) => {
  return (
    <h1
      className={`${className} bg-[#F7AD3D] ${
        !top ? "py-[6px]" : "py-4"
      } px-4 text-xs sm:text-sm  text-white text-center font-semibold`}
    >
      {text}
    </h1>
  );
};

export default Topbar;
