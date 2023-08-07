import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projectArry }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container">
      {projectArry.map((obj,index) => {
        let i = 1000,
          j = 500;
        i = i + j;
        return (
          <li className="w-full sm:col-span-1" key={index} >
            <ProjectCard
              projectObject={obj}
              animationDuration={i}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectGrid;
