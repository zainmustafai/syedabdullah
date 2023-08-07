import React from "react";
import StackDB from "./StackDB.js";

const TechGrid = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
        {StackDB.map((item) => {
          return (
            <li key={item.id} className="flex items-center justify-center">
              <img src={item.imgURL} alt={item.title} className="h-24 md:h-28 lg:h-32 xl:h-36 bg-contain" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechGrid;
