import React from "react";
import { TESTIMONIALS } from "../../utils/mock";

const Pagination = ({ active }) => {
  return (
    <div className="flex items-center justify-center mt-2 gap-3">
      {TESTIMONIALS.map((item, index) => (
        <div
          key={item.id}
          className={`w-6 h-1 ${
            active === index -1 ? "bg-primary" : "bg-blue-100"
          } rounded-md  duration-500 transition-all`}
        />
      ))}
    </div>
  );
};

export default Pagination;
