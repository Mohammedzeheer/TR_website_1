import React from 'react'
import { ReactTyped } from "react-typed";
import LetsTalk from '../buttons/LetsTalk';
import backgroundImage from '../../assets/images/background.webp'
import ArrowGroup from '../../assets/images/arrowGroup.webp'
import ThreeCards from '../../assets/images/hero_Image1_ThreeCards.webp'
import GraphGroup from '../../assets/images/GraphGroup.webp'
import Fade from "react-reveal/Fade";

function WeTransform() {
    return (
        <div className="relative flex items-center justify-center pt-10 py-4 sm:py-10 sm:pt-32 ">
            <div className="absolute inset-0 bg-white-A700"></div>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div className="relative z-10 text-center">
                <div className='max-w-[1300px] mx-auto'>
                    <ReactTyped className="fontMontserrat text-sm md:text-base font-normal leading-6 tracking-wide pt-10 md:pt-32" strings={[" PEOPLE - CENTERED DESIGN 😎", "AGILE AND TRANSPARENT"]} typeSpeed={80} loop={true} />


                    <Fade top distance='5%' duration={1000}>
                        <div className="fontExo font-extrabold text-3xl sm:text-5xl md:text-7xl md:leading-[75px] text-center tracking-[-1%]  uppercase text-deep_purple-800 mt-3 md:mt-7">
                            We Transform Your Business<br />
                        </div>
                        <div className="fontExo font-extrabold lowercase text-black text-2xl sm:text-4xl md:text-7xl leading-6">
                            through custom software <br className='hidden md:block' /> solutions.
                        </div>


                        {/* Description */}
                        <div className="px-10 sm:px-0 fontMontserrat text-center text-[10px] md:text-xl font-normal md:leading-7  sm:tracking-wide mt-7">
                            We take responsibility of your vision as our duty and <br className='hidden md:block' /> create your tomorrow. Today.
                        </div>
                    </Fade>

                    <div className="flex flex-row items-center justify-center mt-10">
                        <LetsTalk />
                        <img
                            src={ArrowGroup}
                            alt="Responsive Image"
                            className="w-[150px] h-[28px] sm:w-[244px] sm:h-[45px] px-3"
                        />
                    </div>
                    <Fade top distance='5%' duration={1000}>
                        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
                            <img
                                src={ThreeCards}
                                alt="Responsive Image"
                                className="max-w-full mt-10 md:mt-24"
                            />
                        </div></Fade>
                </div>

                <Fade top distance='5%' duration={1000}>
                    <img
                        src={GraphGroup}
                        alt="Responsive Image"
                        className="max-w-full md:mt-[-50px]"
                    />
                </Fade>
            </div>
        </div>

    )
}

export default WeTransform