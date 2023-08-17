import React, { useEffect, useState, useRef } from "react";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Portfolio from "../../components/Portfolio/Portfolio";
import Aos from "aos"; // animate on scroll
import "aos/dist/aos.css"; // aos css file
import { useInView } from "react-intersection-observer"; // ANimate on Visibility
import { motion, useAnimation } from "framer-motion"; // Animation Hooks.
import TriangleClipPath from "../../components/TriangleClipPath/TriangleClipPath";
import Footer from "../../components/Footer/Footer";
import MyTechStack from "../../components/MyTechStack/MyTechStack";

const useNavbarAnimation = () => {
  const control = useAnimation();
  const [navbarStyle, setNavbarStyle] = useState({});

  const [navbarRef, navbarInView] = useInView();
  const navAnimation = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 1 },
  };

  useEffect(() => {
    Aos.init({
      delay: "0",
      easing: "ease-in",
      duration: 200,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    if (navbarInView) {
      control.start("hidden");
      setNavbarStyle({
        display: "none",
        transition: "1s",
      });
    } else {
      control.start("visible");
      setNavbarStyle({
        position: "fixed",
        width: "100%",
        zIndex: 2,
        top: 0,
      });
    }
  }, [navbarInView, control]);

  return { navbarRef, navbarStyle, navAnimation, control };
};

const HomePage = () => {
  const { navbarRef, navbarStyle, navAnimation, control } =
    useNavbarAnimation();
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <div className="w-full min-w-min overflow-hidden">
      <motion.div
        style={navbarStyle}
        variants={navAnimation}
        initial="hidden"
        animate={control}
      >
        <Navbar
          homeRef={homeRef}
          portfolioRef={portfolioRef}
          aboutRef={aboutRef}
        />
      </motion.div>
      <Hero portfolioRef={portfolioRef} homeRef={homeRef} />
      <div ref={navbarRef}>
        <Navbar
          homeRef={homeRef}
          contactRef={contactRef}
          portfolioRef={portfolioRef}
          aboutRef={aboutRef}
        />
      </div>
      <div className="w-full mx-auto">
        <MyTechStack />
        <About refVar={aboutRef} />
        <Portfolio refVar={portfolioRef} />
        <TriangleClipPath />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
