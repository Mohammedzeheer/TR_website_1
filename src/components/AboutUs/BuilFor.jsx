import React from 'react';
import LetsTalk from '../buttons/LetsTalk';
import Fade from "react-reveal/Fade";

function BuiltFor() {
    return (
        <>
            <div
                className="inset-0 bg-cover bg-center opacity-25"
                style={{
                    backgroundImage: "url('images/background.png')"
                }}
            ></div>
            <div className="flex md:h-[660px] max-w-[1300px] mx-auto ">
                <div className="relative z-10 text-left py-[50px] px-4 sm:px-6 lg:px-8 md:pt-[80px]">
                    <div className='max-w-[1300px]'>
                        <Fade top distance='5%' duration={1000}>
                            <div className="font-Montserrat text-left text-sm text-gray-900 md:text-2xl font-normal leading-[33.6px] tracking-[5%] pb-3">
                                We are Techrenders 🔥❤️
                            </div>

                            <div className="font-Exo text-left font-extrabold text-3xl md:text-[63px] leading-[2.5rem] md:leading-[89.6px] text-customBlueishBlack max-w-[300px] md:max-w-[1000px]">
                                Built for modern founders who want to make waves.
                            </div>
                        </Fade>
                        <div className="text-left mt-7">
                            <LetsTalk />
                        </div>

                        <img
                            src="/images/chair.webp"
                            alt="chair"
                            className="absolute w-96 h-112 right-3 md:top-[220px] md:pb-20 hidden lg:block"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BuiltFor;