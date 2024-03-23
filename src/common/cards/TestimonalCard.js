import React from "react";

const TestimonalCard = ({ name, imgUrl, review, description }) => {
  return (
    <div className="border bg-white rounded-md mx-2 p-5">
      <div className="">
        <img src={imgUrl} alt={name} className="md:h-16 md:w-16 h-14 w-14 rounded-full" />
        <div className="flex items-end gap-[2px]">
            <p className="text-sm mb-1 md:text-base">{name}</p>
            <div className="">
                {/* <img src={starIcon} className="object-contain h-4 w-4"/> */}
                <span class="icon-[emojione--star]"></span>
            </div>
        </div>
      </div>
      <h6 className="">{review}</h6>
      <span className="">{description}</span>
    </div>
  );
};

export default TestimonalCard;
