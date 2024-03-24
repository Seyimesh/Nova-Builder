import React from "react";
import img1 from "../assets/nic1.jpeg";
import img2 from "../assets/nic2.jpeg";
import img3 from "../assets/nic3.jpeg";
import img4 from "../assets/nic4.jpeg";
import img5 from "../assets/nic5.jpeg";
import img6 from "../assets/nic6.jpeg";

const OurWork = () => {
  return (
    <section className="max-w-[1200px] pt-8 mx-auto">
      <h5 className="text-2xl font-semibold text-darkBlue text-center mb-2 ">
        Our work
      </h5>
      <p className="text-center mb-14 text-gray-500">
        Our work speaks volumes - meticulous craftsmanship, innovative
        solutions, and unparalleled dedication to excellence.
      </p>

      <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2">
        <div className="md:col-span-2">
          <img src={img1} alt="" className="gallery-img" />
        </div>
        <div>
          <img src={img6} alt="" className="gallery-img" />
        </div>
        <div>
          <img src={img3} alt="" className="gallery-img" />
        </div>
        <div>
          <img src={img4} alt="" className="gallery-img" />
        </div>
        <div>
          <img src={img5} alt="" className="gallery-img" />
        </div>
        <div className="md:col-span-2">
          <img src={img2} alt="" className="gallery-img" />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
