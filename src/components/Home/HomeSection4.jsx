import React from 'react';
import Fade from "react-reveal/Fade";

function HomeSection4({ backgroundImage, imageUrl, title, firstHeading, secondHeading, firstDescription, secondDescription }) {
    return (
        <>
            <div className="py-20 sm:py-0 sm:h-screen  bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Fade top distance='5%' duration={1000}>
                    <div className='max-w-[1300px] mx-auto'>
                        <div className="max-w-6xl px-8 pt-10 flex flex-col sm:flex-row">
                            <div className="w-full sm:w-1/2 pr-0 sm:pt-10 ">
                                <h1 className="fontExo text-5xl sm:text-[59px] text-white-A700 text-left font-extrabold mb-4">{title}</h1>
                            </div>

                            <div className="w-full sm:w-1/2 py-4 sm:pt-">
                                <img
                                    src={imageUrl}
                                    alt="image"
                                    className="w-48 sm:w-80 h-auto rounded-md"
                                />
                            </div>
                        </div>

                        <div className="max-w-6xl sm:mt-0 px-8 flex flex-col sm:flex-row">
                            <div className="mb-8 sm:mb-20  sm:mr-40">
                                <h1 className="fontMontserrat text-xl sm:text-3xl text-white-A700 text-left font-extrabold mb-4 w-max-[300px] md:w-max-[400px]">{firstHeading}</h1>
                                <p className="text-white-A700 text-left text-sm sm:text-lg">
                                    {firstDescription}
                                </p>
                            </div>

                            <div className="">
                                <h1 className="fontMontserrat text-xl sm:text-3xl text-white-A700 text-left font-extrabold mb-4 w-max-[300px] md:w-max-[400px]">{secondHeading}</h1>
                                <p className="text-white-A700 text-left text-sm sm:text-lg font-normal
                        ">
                                    {secondDescription}
                                </p>
                            </div>
                        </div>

                    </div> </Fade>
            </div>
        </>
    )
}

export default HomeSection4;