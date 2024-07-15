import React from "react";
import Food1 from "../../assets/food/food.png";
import Food2 from "../../assets/food/food2-plate.png";
import Food3 from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { slideUp } from "../hero/Hero";

const HotDessertData = [
  {
    id: 1,
    title: "Hot Dessert",
    img: Food1,
    price: "$5.99",
    delay: 0.4,
  },
  {
    id: 2,
    title: "Hot Cake",
    img: Food2,
    price: "$5.00",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Hot Tea",
    img: Food3,
    price: "$5.00",
    delay: 1.2,
  },
];
const PopularReciepe = () => {
  return (
    <section>
      <div className="container py-24">
        <h1 className="text-2xl lg:text-5xl font-bold uppercase font-LeagueGothic text-center py-8">
          Our popular reciepe
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center ">
          {HotDessertData.map((item) => {
            return (
              <div
                className="group flex flex-col items-center justify-center gap-5 bg-white/40 shadow-2xl p-10 rounded-2xl"
                key={item.id}
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src={item.img}
                    alt=""
                    className="w-36 group-hover:rotate-[50deg] group-hover:scale-x-110 group-hover:translate-x-10 group-hover:translate-y-[-50px] transition-all duration-700"
                  />
                </div>
                <div>
                  <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100  ">
                    Buy Now
                  </button>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <h1 className="text-2xl text-orange-500 font-bold">
                    {item.price}
                  </h1>
                  <p className="text-sm text-orange-500">{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularReciepe;
