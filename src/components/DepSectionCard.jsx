import React from 'react'
import DomainBtn from './DomainBtn'

const DepSection = ({ head1, head2, text, bg, btnBg, img, btn }) => {
    return (
        <>
            <div className="flex flex-col items-start justify-start pt-8 w-full md:w-full  ">
                <div className="flex flex-col items-start justify-start pt-8 w-auto md:w-full">
                    <div className={`${bg} border border-gray-800_01 border-solid flex flex-row gap-12 items-center justify-start p-8 sm:p-16 rounded-[40px] w-auto md:w-full `}>
                        <div className="flex flex-col gap-4 sm:gap-10  items-start justify-start w-auto md:w-full ">
                            <div className="flex flex-col font-exo gap-6 md:gap-10  items-start justify-start w-auto sm:w-full text-left ">
                                <p
                                    className="leading-[120.00%] text-4xl sm:text-7xl text-blue-100 tracking-[-0.72px] font-exo font-extrabold"
                                >
                                    <span className="text-white-A700 fontExo text-left font-extrabold">
                                        <>
                                            {head1}
                                            <br />
                                        </>
                                    </span>
                                    <span className="text-gray-500 fontExo text-left font-extrabold">
                                        {head2}
                                    </span>
                                </p>
                                <div className="grid-cols-1 font-montserrat gap-3 items-start justify-start w-auto ">

                                    {btn.map((bt) => (
                                        <DomainBtn key={bt.name} name={bt.name} clsName={bt.class} btBg={btnBg} />
                                    ))}

                                </div>
                            </div>
                            <p
                                className="leading-[140.00%] max-w-[610px] md:max-w-full text-gray-400_01 text-sm sm:text-xl tracking-[0.60px] font-montserrat font-normal text-left"
                            >
                                {text}
                            </p>
                        </div>
                        <img
                            className="h-[405px] md:h-auto object-cover w-[405px] hidden lg:block"
                            src={img}
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepSection