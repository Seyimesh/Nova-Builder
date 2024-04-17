import React from "react";
import house from "../../assets/house1.jpeg";
import house1 from "../../assets/house2.jpeg";
import house2 from "../../assets/house3.jpeg";

const HeroSection = () => {
  return (
    <section id="hero" className="max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row ">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[2.4rem] lg:text-4xl lg:leading-[2.5rem]">
          Building Aspirations, Shaping Futures.
        </h2>
        <p className="text-base font-medium leading-7 text-darkBlue mb-6 md:w-4/5">
          At Noval Builder Construction, we don't just construct buildings; we forge
          dreams and shape destinies. We craft homes
          and structures that stand as symbols of our commitment to excellence.
          Trust us to build your future, one brick at a time.
        </p>

        <button className="primary-btn">Explore our projects</button>
      </div>

      <div className="flex gap-2 justify-center md:gap-1 lg:gap-5">
        <img className="hero-img" src={house} alt="Image House" />
        <img className="mt-[5%] hero-img" src={house2} alt="Image Building" />
        <img className="hero-img" src={house1} alt="Image Home" />
      </div>
    </section>
  );
};

export default HeroSection;
