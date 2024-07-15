import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import HotDessert from "./components/hotDessert/HotDessert";
import Banner from "./components/banner/Banner";
import PopularReciepe from "./components/popular/PopularReciepe";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white2">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
      <Banner />
      <PopularReciepe />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
