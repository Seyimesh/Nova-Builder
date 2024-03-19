import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/Hero/HeroSection";
import Stats from "./components/Stats";
import OurService from "./components/OurService";

const App = () => {
  return (
    <div className="bg-background">
      <NavBar />
      <HeroSection />
      <Stats />
      <OurService />
    </div>
  );
};

export default App;
