import React from 'react'
import ContatctUsBtn from './buttons/ContactUsBtn'
import Fade from "react-reveal/Fade";

function DontLet() {
    return (
        <>
            <div className="relative bg-gray-900 p-10 md:px-40 py-28 md:py-60 ">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: "url('/images/grid.png')",

                    }}
                ></div>

                <div className="relative z-10">
                    <Fade top distance='5%' duration={1000}>
                        <div className="fontExo text-center font-extrabold text-3xl md:text-[72px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%] text-white-A700">
                            Don’t Let Your Idea <br /> Stay a Dream.
                        </div>

                        <div className="fontMontserrat text-gray-500 text-center text-xs md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-7">
                            Drop us a line to know how technology and <br /> design will impact your business.
                        </div>
                    </Fade>
                    <div className="flex flex-row items-center justify-center mt-7">
                        <ContatctUsBtn />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DontLet