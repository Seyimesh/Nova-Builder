import React, { useState } from "react";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import MobileNavBar from "./MobileNavBar";

const dot = (
  <div className="bg-darkBlue mx-2 self-center rounded-full h-[6px] w-[6px] "></div>
);

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggle = () => {
    setIsMenu(!isMenu);
  };
  return (
    <>
      {isMenu && <MobileNavBar setIsMenu={setIsMenu} />}
      <div className="bg-background sticky top-0 z-10">
        <nav className="max-w-screen-xl mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="font-bold text-2xl text-darkBlue">N</span>
              <div className="bg-darkBlue mx-0 self-center rounded-full h-[6px] w-[6px] "></div>
              <span className="font-bold text-2xl text-darkBlue">B</span>
            </div>{" "}
            <ul className="hidden md:flex md:gap-12">
              <li>
                <a className="menu-item">Home</a>
              </li>
              <li>
                <a className="menu-item">Services</a>
              </li>
              <li>
                <a className="menu-item">Services</a>
              </li>
              <li>
                <a className="menu-item">Our Work</a>
              </li>
              <li>
                <a className="menu-item">Testimonial</a>
              </li>
            </ul>
            <button className="hidden h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block">
              Contact Us
            </button>
            <button
              onClick={() => {
                toggle();
              }}
              className="w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden z-50"
            >
              {isMenu ? <RiCloseFill /> : <RiMenu4Line />}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
