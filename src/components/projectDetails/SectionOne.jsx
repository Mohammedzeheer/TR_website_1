import React from 'react'

const SectionOne = ({ name, text, image, h = 'h-9' }) => {
    return (
        <>
            <div className='max-w-[1300px] mx-auto'>
                <div className="flex flex-col sm:flex-row items-start justify-around sm:mt-[55px] pb-8 sm:pb-12 ">
                    <div className="flex flex-col gap-[42px] items-start justify-start md:mt-0 mt-4 sm:mt-[63px] px-4 sm:px-6 lg:px-8  sm:w-1/2">
                        <img className={h} src={name} alt="group230198" />
                        <p className="leading-[140.00%] text-gray-900 text-lg w-full font-montserrat font-normal text-start">
                            {text}
                        </p>
                    </div>
                    <div className="mt-8 sm:mt-0 mx-2 sm:w-1/2 sm:hover:scale-95 transition duration-500">
                        <img className="h-[330px] md:h-auto object-cover" src={image} alt="image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionOne