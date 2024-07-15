import BannerPng from "../../assets/food/banner.png";
import avatar from "../../assets/food/avatar.jpg";

import { motion } from "framer-motion";
import { slideUp } from "../hero/Hero";

const Testimonials = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-24">
          <div className="text lg:max-w-[400px] space-y-10">
            <motion.p
              variants={slideUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="font-serif text-2xl"
            >
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti blanditiis ipsam, optio molestias sit itaque a. Sint,ptio
              molestias sit itaque a. Sint, vero obcaecati. Ipsam.
            </motion.p>
            <div className="flex items-center justify-start gap-4">
              <div>
                <img src={avatar} className="w-16 rounded-full h-16" alt="" />
              </div>
              <div className="flex flex-col items-center justify-start">
                <h1 className="font-bold text-xl">Marya</h1>
                <p className="text-sm">Customer</p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
