import React, { useRef, useState } from "react";
import TestimonalCard from "../common/cards/TestimonalCard";
import { TESTIMONIALS } from "../utils/mock";
import Slider from "react-slick";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import Pagination from "../common/cards/Pagination";

const Testimonials = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const setting = {
    dots: false,
    infinite: false, //this part stop continuous scrolling
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: false, //
    speed: 800,
    autoPlaySpeed: 4000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current,index) => {
      setCurrentSlide(index);
    },
  };

  const slideRight = () => {
    if (sliderRef.current && currentSlide < TESTIMONIALS.length - 1) {
      sliderRef.current.slickNext();
    }
  };

 const slideLeft = () => {
    if (sliderRef.current && currentSlide > 0) {
      sliderRef.current.slickPrev();
    }
  };


  return (
    <section className="max-w-[1200px] mx-auto py-16">
      <h5 className="text-center text-darkBlue font-semibold text-2xl mb-16">
        What people says about us
      </h5>
      <div className="relative mb-7 px-5 md:px-10 ">
        <Slider ref={sliderRef} {...setting}>
          {TESTIMONIALS.map((item) => (
            <TestimonalCard
              key={item.id}
              description={item.description}
              name={item.name}
              imgUrl={item.imgUrl}
              review={item.review}
            />
          ))}
        </Slider>

        <button
          className={`arrow-btn left-1 md:left-5 lg:left-2 ${
            currentSlide === 0 ?  "hidden"
              : "bg-primary text-white"
          }`}
          onClick={slideLeft}
          disabled={currentSlide === TESTIMONIALS.length - 1}
        >
          <RiArrowLeftSLine size={24} />
        </button>
        <button
          className={`arrow-btn right-1 md:right-5 lg:right-2 ${
            currentSlide === TESTIMONIALS.length - 1
              ? "hidden"
              : "bg-primary text-white"
          }`}
          onClick={slideRight}
          disabled={currentSlide === TESTIMONIALS.length - 1}
        >
          <RiArrowRightSLine size={24} />
        </button>

        <Pagination active={currentSlide}/>
      </div>
    </section>
  );
};

export default Testimonials;
