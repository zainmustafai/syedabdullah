import React from 'react'
import './Card.css';

const Card = ({title,paragraph,imgSrc,icon}) => {
  return (
    <div className='p-1 flex flex-col items-center gap-2 '
    >
        <div className='hexagon flex flex-cols items-center justify-center rotate-vert-center'>
          <div className='absolute text-5xl text-white' id="icon-div"> 
            {icon}
          </div>
          <img src={imgSrc} alt='icon' className='h-auto w-[75%]'/>
        </div>
        <h2 className='font-bold text-white text-2xl'>
            {title}
        </h2>
        <p className='w-full text-white font-light text-sm md:text-lg'>
            {paragraph}
        </p>
    </div>
  )
}

export default Card