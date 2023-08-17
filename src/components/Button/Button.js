import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import "./Button.css";
import { useState } from "react";

const Button = ({ text, clickEvent }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <button
        className="btn flex gap-2 items-center relative z-[1234]"
        onClick={clickEvent}
      >
        <span>{text}</span>
        <BsArrowRightShort className={`text-4xl ${isHovered ?"rotate-90":"rotate-0"} transition-all duration-150`} />
      </button>
    </motion.div>
  );
};

export default Button;
