import React from "react";
//import { Link } from "react-scroll";
import { Link } from "react-router-dom";
// import Contact from "./Contact";

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <img src="./image/hero.jpg" alt="techno" className="hero2"/>
        <h1 className="absolute font-extrabold text-3xl md:text-7xl text-gradient">
          TECHNOKRATOS'24
        </h1>
      </section>
    </>
  );
};

export default HeroSection;
