import BannerPng from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { slideUp } from "../hero/Hero";
const Banner = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-24">
          <div className="">
            <motion.div className=" h-[360px] lg:h-[420px] w-[360px] lg:w-[420px] rounded-full bg-lightYellow flex items-center justify-center">
              <motion.img
                initial={{
                  opacity: 0,
                  x: -100,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 1,
                  y: 1,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 15,
                  x: 50,
                  y: -50,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  scale: { duration: 0.5 },
                }}
                src={BannerPng}
                alt=""
                className="  w-full lg:max-w-[390px]"
              />
            </motion.div>
          </div>
          <div className="text lg:max-w-[400px] space-y-10">
            <motion.h1
              className="text-3xl lg:text-7xl font-bold font-LeagueGothic"
              variants={slideUp(0.2)}
              initial="hidden"
              whileInView="show"
            >
              THE BEST YUMMY FOOD IN THE TOWN
            </motion.h1>
            <motion.p
              variants={slideUp(0.4)}
              initial="hidden"
              whileInView="show"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              consequuntur aut eum officia iusto nobis officiis! Eaque quasi,
              sed culpa neque aliquid eveniet ullam eligendi libero vitae, harum
              voluptates sapiente?
            </motion.p>
            <motion.button
              className="btn-primary"
              variants={slideUp(0.6)}
              initial="hidden"
              whileInView="show"
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
