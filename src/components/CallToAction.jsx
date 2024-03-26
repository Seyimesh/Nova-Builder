import React from "react";
import house from "../assets/house1.jpeg";

const CallToAction = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-[1200px] h-auto mx-auto flex flex-col items-start md:h-[400px] md:flex-row min-[1090px]:h-[320px]">
        <img
          src={house}
          alt="House"
          className="w-full md:w-1/2 md:h-full object-cover"
        />

        <div className="p-10">
          <h5 className="text-lg font-medium mb-2 text-darkBlue lg:mb-4">
            Find out the Cost
          </h5>
          <p className="text-sm text-darkBlue mb-5 text-justify leading-6">
            At Noval Building Construction, we recognize the significance of
            transparency and clarity when it comes to pricing. Our experienced
            team is dedicated to providing comprehensive cost estimates tailored
            to your specific needs and preferences. By partnering with us,
            you'll gain insights into the investment required to transform your
            dreams into tangible structures. With our commitment to delivering
            value and excellence, you can trust us to guide you through the
            financial aspects of your project with integrity and expertise. Let
            us help you discover the cost and embark on the exciting journey of
            building your future.
          </p>
          <button className="primary-btn">GET ESTIMATION</button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
