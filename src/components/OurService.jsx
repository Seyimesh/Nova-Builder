import React from "react";
import ServiceInfoCard from "../common/cards/ServiceInfoCard";
import { SERVICES } from "../utils/mock";

const OurService = () => {
  return (
    <section id="services" className="max-w-[1200px] mx-auto py-16">
      <h5 className="text-2xl text-darkBlue mb-2 text-center font-semibold">
        Our Service
      </h5>
<p className="mb-14 text-center text-gray-500">Experience excellence in every aspect of our service.</p>
      <div className="bg-white lg:shadow-xl lg:shadow-slate-200/50">
        {SERVICES.map((items) => (
          <ServiceInfoCard
            imgUrl={items.imgUrl}
            title={items.title}
            description={items.description}
            key={items.title}
          />
        ))}
      </div>
    </section>
  );
};

export default OurService;
