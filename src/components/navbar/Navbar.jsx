import React from "react";
import logo from "../../assets/food/logo.png";
import { SlBasket } from "react-icons/sl";
import { animate, motion } from "framer-motion";

const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      title: "Home",
      path: "/",
      delay: 0.1,
    },
    {
      id: 2,
      title: "About",
      path: "/about",
      delay: 0.2,
    },
    {
      id: 3,
      title: "Menu",
      path: "/menu",
      delay: 0.3,
    },
    {
      id: 4,
      title: "Delivery",
      path: "/delivery",
      delay: 0.4,
    },
    {
      id: 5,
      title: "Contact Us",
      path: "/contact",
      delay: 0.5,
    },
  ];

  const slideDown = (delay) => {
    return {
      initial1: {
        y: "-100%",
        opacity: 0,
      },
      animate1: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: delay,
        },
      },
    };
  };
  return (
    <nav>
      <div className="container flex items-center justify-between">
        <div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            src={logo}
            className="w-36"
            alt=""
          />
        </div>
        <ul className=" item-center justify-center gap-5 md:flex hidden">
          {menuItems &&
            menuItems.length > 0 &&
            menuItems.map((item) => (
              <motion.li
                key={item.id}
                data-delay={item.delay}
                variants={slideDown(item.delay)}
                initial="initial1"
                animate="animate1"
                className="cursor-pointer font-LeagueGothic text-2xl"
              >
                {item.title}
              </motion.li>
            ))}
        </ul>
        <motion.div
          className=" "
          variants={slideDown(1)}
          initial="initial1"
          animate="animate1"
        >
          <button className="bg-dark rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <SlBasket className="text-white2 text-xl" />
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
