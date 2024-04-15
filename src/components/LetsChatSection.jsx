import React from 'react'
import img_group1 from '../assets/images/img_group1.png'
import LetsTalk from './buttons/LetsTalk'
import Fade from "react-reveal/Fade";

const LetsChatSection = () => {
    return (
        <>
            <div className="bg-gray-900 h-[700px] relative rounded-[12px] w-[90%] mx-auto ">
                <div className=" bg-opacity-5  h-[71px] ml-[183px] mt-[153px] w-[8%] md:hidden "></div>
                <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-20 md:p-20  sm:px-5 rounded-[12px] w-full"
                    style={{ backgroundImage: `url(${img_group1})` }}
                >
                    <div className="flex flex-col gap-[21px] justify-start mb-8  ml-5 md:ml-[0] w-[85%] md:w-full">
                        <div className=" bg-opacity-5 h-[71px] md:ml-[0] ml-[745px] w-[10%] md:hidden"></div>
                        <div className="flex md:flex-col flex-row md:gap-[54px] items-start justify-between mr-[19px] w-[98%] md:w-full">
                            <div className="bg-opacity-5 h-[71px] md:mt-0 mt-[345px] w-[11%] md:hidden"></div>
                            <div className="flex flex-col gap-[46px] items-center justify-start md:mb-0 mb-[59px] w-auto md:w-full">
                                <Fade top distance='5%' duration={1000}>
                                    <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                                        <p className="sm:leading-[160.00%] sm:text-6xl text-[64px] text-center text-white-A700 tracking-[-0.64px] font-exo font-extrabold">
                                            <>
                                                Have a project for us?
                                                <br />
                                                Let’s chat!
                                            </>
                                        </p>
                                        <p
                                            className="leading-[160.00%] sm:max-w-[557px]  text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[0.72px] font-montserrat font-normal">
                                            Drop us a line to Know how technology and design will
                                            impact your business.
                                        </p>
                                    </div> </Fade>
                                <div className="flex flex-col items-center justify-start w-auto">
                                    <LetsTalk />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LetsChatSection