import React from "react";

type TopbarType = {
  text: string;
  className?: string;
};
const Topbar = ({ text, className }: TopbarType) => {
  return (
    <h1
      className={`${className} bg-[#F7AD3D] py-[6px] text-xs sm:text-sm  text-white text-center font-semibold`}
    >
      {text}
    </h1>
  );
};

export default Topbar;
