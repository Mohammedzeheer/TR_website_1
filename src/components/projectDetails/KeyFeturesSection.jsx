import React from "react";

const KeyFeturesSection = ({ img, color, text = '' }) => {
  return (
    <>
      <div className="flex flex-col font-montserrat sm:items-center justify-start md:mt-2 mt-1 mx-auto w-[90%]">
        <div className="flex flex-col sm:items-center justify-start w-auto sm:w-full mb-10">
          <p
            className="sm:leading-[120.00%] max-w-[479px] md:max-w-full sm:text-6xl text-4xl text-left sm:text-center text-indigo-400 tracking-[-0.64px] font-exo font-extrabold">
            <span className={`${color} font-exo font-extrabold`}>
              <>
                Key
                <br />
              </>
            </span>
            <span className="text-blue_gray-900 font-exo font-extrabold">
              Features
            </span>
            <span className="text-indigo-400 font-exo font-extrabold">
              {''}
            </span>
          </p>

          <p
            className="mt-5 sm:leading-[160.00%] sm:max-w-[706px] text-gray-900 text-lg tracking-[-0.54px] font-montserrat font-normal text-left"
          >
            {text}
          </p>
        </div>
        <img src={img} alt="key fetures" />
      </div>
    </>
  );
};

export default KeyFeturesSection;