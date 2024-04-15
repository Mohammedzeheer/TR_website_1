import React from 'react'
import img_ellipse1 from '../assets/images/img_ellipse1.png'
import img_ellipse2 from '../assets/images/img_ellipse2.png'
import img_ellipse3 from '../assets/images/img_ellipse3.png'

const LetsChatBtn = () => {
  return (
    <>
      <div className="bg-deep_purple-800 flex flex-row gap-2.5 items-center justify-center sm:pl-5 pl-8 pr-5 py-5 rounded-full w-auto">
        <p
          className="text-center text-white-A700 text-xl tracking-[0.60px] w-auto md:font-medium font-bold font-montserrat ext-left">
          LET'S TALK
        </p>
        <div className="flex relative w-1/4">
          <div className="flex my-auto w-[73%]">
            <img
              className="h-5 my-auto rounded-[50%] w-5"
              src={img_ellipse1}
              alt="ellipseOne"
            />
            <img
              className="h-5 ml-[-8px] my-auto rounded-[50%] w-5 z-[1]"
              src={img_ellipse2}
              alt="ellipseTwo"
            />
          </div>
          <img
            className="h-5 ml-[-8px] my-auto rounded-[50%] w-5 z-[1]"
            src={img_ellipse3}
            alt="ellipseThree"
          />
        </div>
      </div>
    </>
  );
};

export default LetsChatBtn