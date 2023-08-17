import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import TechGrid from "./TechGrid";

const MyTechStack = () => {
  return (
    <section className="bg-white relative z-10 text-center py-8 sm:py-12" id="techstack">
      <div className="container mx-auto">
        <SectionHeading text={"MY TECH STACK"} colorCode="45474A" />
        <p className="my-4 text-lg sm:text-xl">
          Technologies I’ve been working with recently
        </p>
        <TechGrid />
      </div>
    </section>
  );
};

export default MyTechStack;
