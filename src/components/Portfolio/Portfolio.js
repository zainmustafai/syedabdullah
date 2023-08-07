import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Portfolio.css'
import ProjectGrid from './ProjectGrid';
import { AllProjects as gridItems } from './Projects.js'

const Portfolio = ({ refVar }) => {
  return (
    <section
      id='portfolio'
      className='bg-[#F5F5F5] w-full  px-4 sm:px-8 lg:px-12 xl:px-16'
      data-aos="fade-up"
      data-aos-once='true'
      ref={refVar}
    >
      <SectionHeading text={"PORTFOLIO"} colorCode={"45474A"} />
      <h2 className='text-lg my-8'>
        Some of my recent projects.
      </h2>

      <div className='pt-6 container mx-auto'>
        {/* Grid Container  */}
        <ProjectGrid projectArry={gridItems}
          data-aos="fade-up"
        />
      </div>
    </section>
  )
}

export default Portfolio
