import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion"; // Animation Hooks.

const scrollToSection = (ref) => {
  ref.current?.scrollIntoView({
    top: 0,
    behavior: "smooth",
  });
};

const openWhatsapp = () => {
  window.open("https://wa.me/+923094272562", "_blank", "noopener,noreferrer"); // open link in new tab.
};

const Navbar = ({ homeRef, contactRef, portfolioRef, aboutRef }) => {
  const [showSmall, setShowSmall] = useState(false);
  const handleClick = () => {
    setShowSmall(!showSmall);
  };
  const menuItems = [
    { text: "HOME", id: "/hero", ref: homeRef },
    { text: "ABOUT", id: "/about", ref: aboutRef },
    { text: "PORTFOLIO", id: "/portfolio", ref: portfolioRef },
    // {text:'BLOG',id: '#blog'},
    // { text: 'CONTACT', id: '#contact', ref: contactRef },
  ];
  return (
    <div>
      <motion.div className="relative z-10 nav-container w-full py-3  md:pl-8 lg:pl-11 xl:pl-14 flex items-center justify-between shadow-lg">
        <ul className=" menu text-xl text-white font-medium hidden md:flex  sm:gap-6 md:gap-8 lg:gap-10 ">
          {menuItems.map((item) => {
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <li className="hover:text-yellow-600">
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.ref)}
                  >
                    {item.text}
                  </button>
                </li>
              </motion.div>
            );
          })}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <li onClick={openWhatsapp} className="hover:text-yellow-600">
              CONTACT
            </li>
          </motion.div>
        </ul>
        <button
          className="text-white text-2xl mx-4 md:hidden cursor-pointer"
          onClick={handleClick}
        >
          {showSmall ? <CgClose color="#fff" /> : <GiHamburgerMenu />}
        </button>
      </motion.div>

      {/* Small Screen Menu */}
      {showSmall && (
        <div className="md:hidden px-4">
          <ul className="flex flex-col gap-1 bg-[#101720] text-white rounded-lg animate-fadeIn">
            {menuItems.map((item) => (
              <li key={item.id} className="hover:text-yellow-600">
                <button
                  onClick={() => {
                    scrollToSection(item.ref);
                    handleClick();
                  }}
                  className="p-2 w-full"
                >
                  {item.text}
                </button>
              </li>
            ))}
            <li className="hover:text-yellow-600 p-2" onClick={openWhatsapp}>
              CONTACT
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
