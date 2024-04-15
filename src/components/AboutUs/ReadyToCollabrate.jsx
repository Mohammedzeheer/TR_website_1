import React from 'react'
import LetsTalk from '../buttons/LetsTalk'
import Fade from "react-reveal/Fade";

function ReadyToCollabrate({ text1 }) {
    return (
        <div className='max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12'>
            <div className='relative bg-gray-900 rounded-[12px] p-10 md:p-40'>
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 rounded-xl"
                    style={{
                        backgroundImage: "url('/images/CollabrateBackground.webp')",
                    }}
                ></div>
                <Fade top distance='5%' duration={1000}>
                    <div className="relative z-10">

                        <div className="fontExo text-center font-extrabold text-3xl md:text-[64px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%] text-white-A700">
                            READY TO<br />COLLABORATE?{text1}
                        </div>

                        <div className="fontMontserrat text-gray-500 text-center text-xs md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-7">
                            Drop us a line to Know how technology and<br className='hidden md:block' />design will impact your business.
                        </div>

                        <div className="flex flex-row items-center justify-center mt-7">
                            <LetsTalk />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default ReadyToCollabrate