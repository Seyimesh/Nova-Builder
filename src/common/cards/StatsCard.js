import React from "react";

const StatsCards = ({ iconURL, count, label }) => {
  return (
    <div className="min-w-48 flex flex-col items-center py-6 justify-center sm:py-14">
      <div className="w-14 h-14 flex justify-center items-center rounded-full bg-lightBlue ">
        {iconURL}
      </div>

      <p className="text-xl md:text-2xl text-darkBlue font-medium mt-4">
        {count}
      </p>
      <span className="mt-1 text-sm md:text-base text-darkBlue">{label}</span>
    </div>
  );
};

export default StatsCards;
