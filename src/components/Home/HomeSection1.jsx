import React from 'react'
import LetsTalk from '../buttons/LetsTalk'
import MoreProjects from '../buttons/MoreProjects'
import Fade from "react-reveal/Fade";

function HomeSection1() {
    return (
        <div className='bg-gray-900 p-10  py-20 md:py-20'>
            <Fade top distance='5%' duration={1000}>
                <div className="fontExo text-center font-extrabold text-[28px] md:text-[64px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%] uppercase text-white-A700">
                    READY TO KICK OFF OUR <br className='hidden md:block' /> COLLABORATION?
                </div>
                <div className="fontMontserrat text-gray-500 text-center text-xs md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-7">
                    Drop us a line to Know how technology and <br className='hidden md:block' />design will impact your business.
                </div>
            </Fade>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-7 gap-2">
                <LetsTalk /> <MoreProjects />
            </div>
        </div>
    )
}

export default HomeSection1