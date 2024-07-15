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

const HotDessert = () => {
  return (
    <section>
      <div className="container py-12">
        <motion.h3 className="font-semibold py-8 uppercase text-2xl text-darkGreen">
          Hot Dessert
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {HotDessertData.map((item) => {
            return (
              <motion.div
                key={item.id}
                className="group bg-white/50 shadow-md p-3 flex items-center gap-3"
                variants={slideUp(item.delay)}
                initial="hidden"
                whileInView="show"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-24 rounded-full drop-shadow-2xl group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-xl text-yellow-500">{item.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotDessert;
