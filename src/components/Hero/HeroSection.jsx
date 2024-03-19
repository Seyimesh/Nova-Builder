import React from "react";
import house from "../../assets/house1.jpeg";
import house1 from "../../assets/house2.jpeg";
import house2 from "../../assets/house3.jpeg";

const HeroSection = () => {
  return (
    <section className="max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row ">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">
          Buidling Dreams, Crafting Homes
        </h2>
        <p className="text-sm leading-6 text-darkBlue mb-6 md:w-4/5">
          Turning dreams into homes. Explore our exceptional craftmanship and
          envision your perfect space.
        </p>

        <button className="primary-btn">Explore our projects</button>
      </div>

      <div className="flex gap-2 justify-center md:gap-3 lg:gap-5">
        <img className="hero-img" src={house} alt="Image House" />
        <img className="mt-[5%] hero-img" src={house2} alt="Image Building" />
        <img className="hero-img" src={house1} alt="Image Home" />
      </div>
    </section>
  );
};

export default HeroSection;
