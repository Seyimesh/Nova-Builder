import React from "react";

const ServiceInfoCard = ({ imgUrl, title, description }) => {
  return (
    <div className="flex flex-col md:even:flex-row-reverse md:odd:flex-row bg-secondary">
      <div className="flex-1">
        <img src={imgUrl} alt={title} className="w-full h-80 md:h-full" />
      </div>
      <div className="flex-1">
        <div className="p-10">
          <h6 className="lg:text-[26px] md:text-xl text-darkBlue font-bold mb-4">
            {title}
          </h6>
          <p className="text-sm md:text-sm lg:leading-6 lg:tracking-[0.03rem] text-darkBlue">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfoCard;
