import FoodPng from "../../assets/food/food.png";
import Spoon from "../../assets/food/spoon.png";
import Banana from "../../assets/food/banana2.png";
import Leaf from "../../assets/food/leaf.png";
import { SlBasket } from "react-icons/sl";
import { motion } from "framer-motion";

export const slideUp = (delay) => {
  return {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Hero = () => {
  return (
    <main className="overflow-hidden">
      <div className="container min-h-[600px] flex justify-center relative z-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between  ">
          <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">
            <motion.h1
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-transparent text-outline"
              variants={slideUp(0)}
              initial="hidden"
              whileInView="show"
            >
              Yummy
              <img
                src={Leaf}
                alt=""
                className="absolute w-[50px] top-0 right-0 md:right-[100px]"
              />
            </motion.h1>
            <motion.h1
              className=" text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
              variants={slideUp(0.8)}
              initial="hidden"
              whileInView="show"
            >
              Breakfast
            </motion.h1>
            <motion.p
              className="text-sm"
              variants={slideUp(1)}
              initial="hidden"
              whileInView="show"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              optio facere sint harum quis dignissimos doloribus voluptatem
              iusto tempora eaque facilis quod, expedita qui vero consectetur
              reprehenderit quas saepe quam?
            </motion.p>

            <motion.button
              className="btn-primary flex items-center justify-center gap-3 "
              variants={slideUp(1.2)}
              initial="hidden"
              whileInView="show"
            >
              <SlBasket className="text-white" />
              Order Now
            </motion.button>
          </div>
          <div className="relative">
            <motion.img
              src={FoodPng}
              alt=""
              className="w-[400px] drop-shadow-2xl"
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src={Spoon}
              alt=""
              className="w-[300px] drop-shadow-2xl absolute bottom-[-100px] -left-16 rotate-[75deg]"
              initial={{ opacity: 0, rotate: 160, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src={Banana}
              alt=""
              className="w-[350px] absolute top-[-30px] right-[-130px] md:right-[-160px] drop-shadow-2xl "
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
      <motion.div
        className="w-[2500px] h-[2500px] rounded-3xl bg-lightYellow absolute top-[-30%] left-[70%] z-0"
        initial={{ opacity: 0, rotate: 160, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
      ></motion.div>
    </main>
  );
};

export default Hero;
