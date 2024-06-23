import React from "react";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto bg-dimBlue p-8 flex justify-center">
        <ul className="flex justify-center text-center gap-6 flex-wrap">
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
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="" className="text-sm text-darkBlue hover:font-medium">
              Get Quotes
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-darkBlue text-sm text-white text-center p-4">
        © 2024. All Right Reserved
      </div>
    </>
  );
};

export default Footer;
