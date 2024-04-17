import React from "react";

const MobileNavBar = ({ isOpen, setIsMenu }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) setIsMenu(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col bg-background p-8">
        <img src="" alt="Logo" className="w-16 object-contain mb-8" />

        <ul>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("hero")}>
              Home
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("services")}>
              Services
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("our-work")}>
              Our Work
            </a>
          </li>
          <li className="mb-5">
            <a
              className="menu-item"
              onClick={() => handleScroll("testimonial")}
            >
              Testimonial
            </a>
          </li>
        </ul>
        <button className="h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block">
          Contact Us
        </button>
      </div>
      <div
        onClick={() => setIsMenu(false)}
        className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"
      />
    </div>
  );
};

export default MobileNavBar;
