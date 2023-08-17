import Card from "./Card";
import polgon from "./polygon.svg";
import SkillsSection from "./SkillsSection";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FaRocket } from "react-icons/fa";
import { AiFillBulb } from "react-icons/ai";
import { FaPalette } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";

const About = ({ refVar }) => {
  const features = [
    {
      title: "Creative",
      paragraph:
        "Fast Inspired by the boundless nature of creativity, I embrace the art of design, breaking rules, taking risks, and letting my imagination soar.",
      icon: <FaPalette />,
    },
    {
      title: "Innovative",
      paragraph:
        "Innovation fuels my spirit, propelling me to explore uncharted territories and challenge conventional boundaries. I thrive on crafting solutions that transform the world around me. ",
      icon: <AiFillBulb />,
    },
    {
      title: "Professional",
      paragraph:
        "Embracing professionalism as my guiding light, I strive to bring unwavering dedication, a strong work ethic, and a commitment to excellence to every endeavor.",
      icon: <BsBriefcaseFill />,
    },
    {
      title: "Dynamic",
      paragraph:
        "As a dynamic force of nature, I adapt, evolve, and flourish in ever-changing landscapes. I fearlessly embrace new challenges and seize opportunities",
      icon: <FaRocket />,
    },
  ];
  return (
    <div className="bg-[#252934] relative z-0" id="about">
      <section
        ref={refVar}
        className="about-container w-full text-center container mx-auto"
        id="about"
      >
        {/* SECTION HEADING */}
        <SectionHeading text={"ABOUT"} colorCode={"fff"} />
        {/* FEATURE CARDS */}
        <div className="cards mt-16 w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((item) => {
              return (
                <div key={item.title} className="flex justify-center">
                  <Card
                    imgSrc={polgon}
                    title={item.title}
                    paragraph={item.paragraph}
                    icon={item.icon}
                  />
                </div>
              );
            })}
          </div>
          <SkillsSection />
        </div>
      </section>
    </div>
  );
};

export default About;
