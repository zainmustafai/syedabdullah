import { motion } from 'framer-motion';
import React from 'react';
import './Bar.css';

// Score
const Bar = ({ title, score }) => {
  return (
    <div className={'bar-bg w-full h-8 md:h-12 overflow-hidden flex items-center justify-start'}>
      <p className=' bg-[#fff] font-bold title text-center text-xs md:text-lg z-1 text-white flex items-center pl-6 py-2 md:py-4 w-1/2 md:w-2/5 lg:w-1/3'>
        {title}
      </p>
      <div className='w-full h-full flex items-center justify-between'>
        <div className='h-full' style={{ width: `${score}%` }}>
          <motion.div
            className='filler'
            initial={{
              width: "0%"
            }}
            whileInView={{
              width: '100%'
            }}
            transition={{
              delay: 0.5,
              duration: 1
            }}
          >
            {/* Animated filler bar */}
          </motion.div>
        </div>
        <p className='mr-2 text-green-600 text-xs md:text-base'>
          {score}%
        </p>
      </div>
    </div>
  );
};

export default Bar;