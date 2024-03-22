import React from "react";
import TestimonalCard from "../common/cards/TestimonalCard";
import { TESTIMONIALS } from "../utils/mock";

const Testimonials = () => {
  return (
    <section className="">
      <h5>What people says about us</h5>
      <div className="">
        {TESTIMONIALS.map((item) => {
          <TestimonalCard
            key={item.id}
            description={item.description}
            name={item.name}
            imgUrl={item.imgUrl}
            review={item.review}
          />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
