import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import RatingStar from "../Rating/RatingStar";

const CardExclusive = () => {
  const cartItems = [
    {
      name: "Floral Summer Dress",
      image: "/image.png",
      price: 1200,
      orginalPrice:3500,
      rating: 1,
    },
    {
      name: "Floral Summer Dress",
      image: "/image2.png",
      price: 1200,
      orginalPrice:3500,
      rating: 2,
    },
    {
      name: "Floral Summer Dress",
      image: "/image2.png",
      price: 1200,
      orginalPrice:3500,
      rating: 3,
    },
    {
      name: "Floral Summer Dress",
      image: "/image.png",
      price: 1200,
      orginalPrice:3500,
      rating: 4,
    },
    {
      name: "Floral Summer Dress",
      image: "/image2.png",
      price: 1200,
      orginalPrice:3500,
      rating: 4.5,
    },
    {
      name: "Floral Summer Dress",
      image: "/image.png",
      price: 1200,
      orginalPrice:3500,
      rating: 5,
    },
    {
      name: "Floral Summer Dress",
      image: "/image.png",
      price: 1200,
      orginalPrice:3500,
      rating: 5,
    },
    {
      name: "Floral Summer Dress",
      image: "/image.png",
      price: 1200,
      orginalPrice:3500,
      rating: 5,
    },
  ];
  return (
    <div className="mb-8">
      <h1 className="text-center text-3xl font-bold text-blue-950">Exclusive Deals on Baby Must-Haves-Shop Now!</h1>
      <div className="grid justify-center items-center  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5 lg:gap-10 my-5 gap-5 lg:m-10 lg:my-8 lg:mr-4">
        {cartItems.map((item, index) => {
          return (
            <Card
              className="lg:w-[310px] lg:h-[520px] w-full sm:w-[350px] bg-[#FFE5D1] hover:bg-[#EDC7A9] hover:text-white text-2xl relative"
              key={index}
            >
              <CardHeader></CardHeader>
              <CardContent className="">
                <div>
                  <div className="absolute right-5 top-5 cursor-pointer">
                    <FaRegHeart
                      size={20}
                      className="text-red-500 hover:text-red-800"
                    />
                  </div>
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md transition duration-300 hover:-translate-y-1 hover:scale-105 "
                    />
                  </div>
                  <div className="">
                    <CardTitle className="text-center p-2 font-bold">
                      {item.name}
                    </CardTitle>
                    <h1 className="text-center font-bold font-mono">
                      NRs.{item.price}
                    </h1>
                    <p className="text-center font-fold font-mono">NRs.<span className="line-through space">{item.orginalPrice}</span> 10%</p>
                  </div>
                  <div className="place-items-center py-2">
                    <RatingStar rating={item.rating} />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center items-center">
                <Button className="bg-[#F7AD3D] hover:bg-[#ff9c06]">
                  <span>
                    <IoCartOutline />
                  </span>
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center items-center px-10">
        <Button className="bg-green-700 w-full sm:w-52 text-xl py-5 ">View More</Button>
      </div>
    </div>
  )
}
export default CardExclusive