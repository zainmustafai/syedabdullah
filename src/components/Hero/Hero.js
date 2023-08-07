import React from "react";
import "./Hero.css";
import Button from "../Button/Button";

const Hero = ({ portfolioRef, homeRef }) => {
  const arrowBtnClickHandler = () => {
    portfolioRef.current?.scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      ref={homeRef}
      className="hero-container  flex flex-col justify-center items-center text-center bubbles "
      id="hero"
    >
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-white text-6xl">
          Hello, I'm{" "}
          <span className="my-name text-yellow-600 font-medium">
            Syed Abdullah
          </span>
          .
        </h1>
        <h1 className="text-white text-5xl">
          I'm a Graphic Designer/3D Designer{" "}
        </h1>
        <Button text={"View My Work"} clickEvent={arrowBtnClickHandler} />
      </div>
      {/* BUBBLES */}
    </div>
  );
};

export default Hero;
