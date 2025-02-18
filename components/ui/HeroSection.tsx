"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Filter from "../shared/Filter";
import { IoSearchSharp } from "react-icons/io5";
import { SelectComp } from "../shared/Select";

const HeroData = [
  {
    image:
      "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tiny Treasures",
    description: "Soft, cozy, and cute essentials for your little one!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Playtime Wonders",
    description: "Fun and safe toys to spark joy and learning.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1726873405579-e5affcbd91a6?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Little Luxe Picks",
    description: "Stylish and comfy baby outfits & accessories.",
  },
];
export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {HeroData.map((item, index) => (
          <CarouselItem
            key={index}
            style={{
              backgroundImage: `url('${item.image}')`,
            }}
            className="relative h-64 sm:h-96 md:h-screen w-full bg-center bg-cover bg-no-repeat px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32"
          >
            <div className="flex flex-col md:gap-1 lg:gap-2 place-items-center mt-8 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-32">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F7AD3D]">
                {item.title}
              </h1>
              <p className="text-white font-semibold sm:text-lg text-center">
                {item.description}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="text-sm sm:text-base flex flex-col gap-4 absolute top-40 sm:top-56 md:top-96 border-[2px] border-[#F7AD3D] bg-white rounded-lg h-[156px] sm:h-36 w-fit left-1/2 -translate-x-1/2 p-2 sm:p-3 md:py-3 md:px-4 lg:py-4 lg:px-6">
        <Filter
          filterField="category"
          options={[
            {
              label: "All",
              value: "all",
            },
            {
              label: "Clothing",
              value: "clothing",
            },
            {
              label: "Toys",
              value: "toys",
            },
            {
              label: "Accessories",
              value: "accessories",
            },
          ]}
        />
        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
          <div className="flex border-[2px] rounded sm:rounded-md border-[#F7AD3D] w-full sm:w-fit px-4 py-2 sm:py-3">
            <input
              type="text"
              className="outline-none pe-2 text-sm sm:text-base w-full sm:w-64  md:w-72 xl:w-80"
              placeholder="Search by product, brand or category"
            />
            <button className="text-lg md:text-xl">
              <IoSearchSharp />
            </button>
          </div>
          <div className="flex gap-2">
            <SelectComp
              items={[
                {
                  label: "New Born",
                  value: "new-born",
                },
                {
                  label: "Kid",
                  value: "kid",
                },
                {
                  label: "Teenage",
                  value: "teenage",
                },
              ]}
              label="Baby Type"
              placeholder="Select Baby"
            />
            <button className="bg-green-600 rounded-md w-full sm:w-24 lg:w-28 xl:w-36 px-2 font-semibold text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <CarouselPrevious className="absolute left-5 sm:left-12 md:left-20 lg:left-28 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-[#F7AD3D] hover:bg-yellow-600 hover:text-white  text-white" />
      <CarouselNext className="absolute right-5 sm:right-12 md:right-20 lg:right-28  sm:h-10 sm:w-10 md:h-12 md:w-12 bg-[#F7AD3D]  text-white hover:bg-yellow-600 hover:text-white" />
    </Carousel>
  );
}
