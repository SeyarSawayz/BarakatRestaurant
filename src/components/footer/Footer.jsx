import React from "react";
import logo from "../../assets/food/logo.png";

const Footer = () => {
  return (
    <section className="bg-lightYellow rounded-tr-3xl rounded-tl-3xl min-h-[300px]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center  lg:justify-between place-items-start justify-start lg:gap-0 gap-5">
          <div className="flex flex-col gap-y-4">
            <img src={logo} className="w-24" alt="" />
            <p className="align-middle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nihil in eveniet explicabo
            </p>
            <a href="#">Contact@food.com</a>
          </div>
          <div>
            <h1 className="font-bold text-2xl">Quick Link</h1>
            <ul className="flex flex-col items-start justify-start mt-4 gap-2">
              <a href="#">
                <li className="hover:underline">Home</li>
              </a>
              <a href="#">
                <li className="hover:underline">About</li>
              </a>
              <a href="#">
                <li className="hover:underline">Contact</li>
              </a>
              <a href="#">
                <li className="hover:underline">Order</li>
              </a>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl">Quick Link</h1>
            <ul className="flex flex-col items-start justify-start mt-4 gap-2">
              <a href="#">
                <li className="hover:underline">Home</li>
              </a>
              <a href="#">
                <li className="hover:underline">About</li>
              </a>
              <a href="#">
                <li className="hover:underline">Contact</li>
              </a>
              <a href="#">
                <li className="hover:underline">Order</li>
              </a>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl">Quick Link</h1>
            <ul className="flex flex-col items-start justify-start mt-4 gap-2">
              <a href="#">
                <li className="hover:underline">Home</li>
              </a>
              <a href="#">
                <li className="hover:underline">About</li>
              </a>
              <a href="#">
                <li className="hover:underline">Contact</li>
              </a>
              <a href="#">
                <li className="hover:underline">Order</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
