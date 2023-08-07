import React, { useState } from "react";

const ProjectCard = ({ projectObject, animationDuration }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative aspect-square overflow-hidden shadow-md rounded-md transition-all duration-300 hover:shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {setIsHovered(!isHovered)}}
    >
      <img
        src={projectObject.img}
        alt={"project-img"}
        className="w-full aspect-square object-cover"
        data-aos="fade-up"
        data-aos-duration={animationDuration}
      />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white bg-opacity-50 backdrop-blur-md transition-all duration-300">
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900">
              {projectObject.title}
            </h1>
            <h2 className="text-gray-600">{projectObject.type}</h2>
          </div>
          <button
            onClick={() => {
              window.open(projectObject.link, "_blank", "noopener,noreferrer"); // open link in new tab.
            }}
            className="mt-4 px-4 py-2 text-white bg-red-600 rounded-md font-semibold shadow-md hover:bg-red-700 transition-all duration-300"
          >
            Explore
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;


// import React from "react";

// const ProjectCard = ({ projectObject, animationDuration }) => {
//   return (
//     <div className="w-full aspect-square px-2 md:px-4 lg:px-8 xl:px-12">
//       <img
//         src={projectObject.img}
//         alt={"project-img"}
//         className="w-full aspect-square"
//         data-aos="fadeInUp"
//         data-aos-duration={animationDuration}
//       />
//       <div className="h-full w-full px-4 flex flex-col items-center justify-around opacity-0 transition ease-in-out duration-300 hover:opacity-100 bg-white -translate-y-full">
//         <div className="flex flex-col items-center h-[20%] justify-around">
//           <h1 className="text-xl font-bold text-gray-900 text-center">
//             {projectObject.title}
//           </h1>
//           <h2 className="">{projectObject.type}</h2>
//         </div>
//         <button
//           onClick={() => {
//             window.open(projectObject.link, '_blank', 'noopener,noreferrer'); // open link in new tab.
//           }}
//           className="min-w-[100px] min-h-[25px] px-2 py-1 font-semibold border-2 text-red-600 hover:scale-110 hover:shadow-xl hover:bg-red-500 hover:border-0 hover:text-white transition ease-in duration-150"
//         >
//           Explore
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
