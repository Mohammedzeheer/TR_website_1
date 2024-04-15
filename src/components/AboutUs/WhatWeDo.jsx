import React from 'react';
import Fade from "react-reveal/Fade";

function WhatWeDo() {
  return (
    <div className='bg-gray-900 py-20  md:py-32'>
      <div className='max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8'>
        <Fade top distance='5%' duration={1000}>
          <div className=" md:gap-[24px] fontMontserrat text-left font-black text-3xl md:text-[32px] leading-[2.5rem] md:leading-[51.2px] tracking-[-3%]  text-white-A700">
            WHAT WE DO AND <br /> <span className='text-gray-500'> WHY WE DO IT</span>
          </div>

          <div className=" fontMontserrat text-white-A700 text-left text-sm md:text-lg font-normal leading-5 tracking-wide mt-7 max-w-[500px] md:max-w-[700px]">
            At Techrender, we’re fueled by an insatiable drive to push the limits of digital creativity, combined with a team of talented individuals with the capabilities to really do it. Couple that with the strategic know-how to ensure the needs of your brand, product and audience are always fully met, and you have a recipe for work that drives results.
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default WhatWeDo;