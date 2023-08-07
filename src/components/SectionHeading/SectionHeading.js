import React from 'react'

const SectionHeading = ({text,colorCode}) => {
  return (
    <div className='w-full text-center' style={{paddingTop:'5%',}}>
        <h2
        data-aos="fade-right" 
        className='about-container w-full text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'
        style={{color:`#${colorCode}`}}
        >
            {text}
        </h2>
        <div
        data-aos='fade-left' 
        className=' w-24 m-auto mt-4'
        style={{border: `2px #${colorCode} solid`,}} >

        </div>
    </div>
  )
}

export default SectionHeading