import React from "react";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1200px] max-auto bg-dimBlue">
        <div className="flex flex-col items-center justify-center p-8">
          <div className="flex items-center">
            <span className="font-bold text-2xl text-darkBlue">N</span>
            <div className="bg-darkBlue mx-0 self-center rounded-full h-[6px] w-[6px] "></div>
            <span className="font-bold text-2xl text-darkBlue">B</span>
          </div>

          <ul className="flex justify-center gap-6 flex-wrap">
            <li>
              <a href="" className="text-sm text-darkBlue hover:font-medium">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-darkBlue hover:font-medium">
                Contact Us
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-darkBlue hover:font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-darkBlue hover:font-medium">
                Terms & Condictions
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-darkBlue hover:font-medium">
                Get Quotes
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-darkBlue text-sm text-white text-center p-4">
      © 2024. All Right Reserved
      </div>
    </>
  );
};

export default Footer;
