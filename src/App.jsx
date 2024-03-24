import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/Hero/HeroSection";
import Stats from "./components/Stats";
import OurService from "./components/OurService";
import OurWork from "./components/OurWork";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

const App = () => {
  return (
    <div className="bg-background">
      <NavBar />
      <HeroSection />
      <Stats />
      <OurService />
      <OurWork />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default App;
