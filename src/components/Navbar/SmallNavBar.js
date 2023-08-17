import React from "react";
import { motion } from "framer-motion";


const SmallNavBar = ({ menuArray }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-screen max-h-max bg-[#1B242F] shadow-lg rounded-md md:hidden relative z-10"
    >
      <ul className="p-[4%]">
        {menuArray.map((item) => {
          return (
            <li
              className="p-[1%] max-w-max max-h-max text-white font-semibold hover:text-yellow-800"
              key={item.id}
            >
              <a href={`${item.id}`}>{item.text}</a>
            </li>
          );
        })}
        <li className="p-[1%] max-w-max max-h-max text-white font-semibold hover:text-yellow-800">
          <a
            href="https://wa.me/+923094272562"
            target="_blank"
            rel="noreferrer"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default SmallNavBar;
