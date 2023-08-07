import React from "react";
import Bar from "./Bar";
import profilePicture from "./dp.jpg";
import "./Animation.css";

const skillset = [
  { title: "Photoshop", score: 90 },
  { title: "Illustrator", score: 85 },
  { title: "Premier Pro", score: 70 },
  { title: "After Effects", score: 80 },
  { title: "Blender", score: 75 },
];

const SkillsSection = () => {
  return (
    <section className="flex flex-col lg:flex-row text-center gap-4 p-5 mt-16">
      <div className="dp-div flex flex-col items-center justify-center gap-4 col-span-2 p-1">
        <div className="w-40 h-40 lg:w-48 lg:h-48 overflow-hidden scale-125 -translate-y-5 rounded-full border-2 border-[#03C2CA]">
          <img
            src={profilePicture}
            alt="Profile"
            className="img shadow-md rounded-full w-full h-full object-cover"
          />
        </div>
        <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl">
          Who's this guy?
        </h1>
        <p className="text-white text-sm md:text-md lg:text-lg font-light">
          I'm Syed Abdullah, a versatile and passionate designer specializing
          in both graphic and 3D design, and I have an insatiable thirst for
          bringing imagination to life.
        </p>
        <a href="/" className="text-slate-400">
          Let's make something special.
        </a>
      </div>
      {/* Skillset Bars */}
      <div
        className="skill-set h-full w-full grid grid-cols-1 gap-4"
        data-aos="fade-left"
      >
        {skillset.map((item) => {
          return (
            <div key={item.title}>
              <Bar title={item.title} score={item.score} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;


// import React from "react";
// import Bar from "./Bar";
// import profilePicture from "./dp.jpg";
// import "./Animation.css";

// const skillset = [
//   { title: "Photoshop", score: 90 },
//   { title: "Illustrator", score: 85 },
//   { title: "Premier Pro", score: 70 },
//   { title: "After Effects", score: 80 },
//   { title: "Blender", score: 75 },
// ];

// const SkillsSection = () => {
//   return (
//     <section className=" flex  justify-center items-center flex-col lg:flex-row text-center gap-0 md:gap-4 lg:gap-8 xl:gap-12 p-5  mt-16">
//       <div className="dp-div flex flex-col items-center justify-center gap-4 col-span-2  p-1 ">
//         <div className=" w-full px-[16%] overflow-hidden">
//           <img
//             src={profilePicture}
//             alt="Profile Pictur"
//             className="img shadow-md rounded-full"
//           />
//         </div>
//         <h1 className="text-white font-semibold text-3xl ">Who's this guy?</h1>
//         <p className="text-white text-sm md:text-md lg:text-lg font-light ">
//           I'm Syed Abdullah, a versatile and passionate designer specializing in
//           both graphic and 3D design, and I have an insatiable thirst for
//           bringing imagination to life.
//         </p>
//         <a href="/" className="text-slate-400">
//           Let's make something special.
//         </a>
//       </div>
//       {/* Skillset Bars */}
//       <div
//         className="skill-set h-full w-full grid grid-cols-1 gap-4"
//         data-aos="fade-left"
//       >
//         {skillset.map((item) => {
//           return (
//             <div key={item.title}>
//               <Bar title={item.title} score={item.score} />
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;
