import React from "react";
import { ReactComponent as StarIcon } from "../Icons/star.svg";

const TestimonalCard = ({ name, imgUrl, review, description }) => {
  return (
    <div className="border bg-white rounded-md mx-2 p-5">
      <div className="flex items-center mb-4 gap-3">
        <img src={imgUrl} alt={name} className=" h-14 w-14 md:h-16 md:w-16 rounded-full object-cover" />

        <div className="">
            <p className="text-sm mb-1 md:text-base">{name}</p>
            <div className="flex items-end gap-[2px]">
                <StarIcon className="object-contain h-4 w-4" />
                <StarIcon className="object-contain h-4 w-4" />
                <StarIcon className="object-contain h-4 w-4" />
                <StarIcon className="object-contain h-4 w-4" />
                <StarIcon className="object-contain h-4 w-4" />

            </div>   
        </div>
      </div>
      <h6 className="text-sm md:text-base font-bold mb-1">{review}</h6>
      <span className="text-sm md:text-[14px] text-slate-700">{description}</span>
    </div>
  );
};

export default TestimonalCard;
