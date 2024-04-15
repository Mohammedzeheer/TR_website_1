import React from 'react'

const ProjectDetailsSection = ({ head1, head2, img, align, color, text }) => {
    return (
        <>
            <div className='max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="flex flex-col gap-[54px] items-start justify-start mt-4">
                    <div className={`${align} flex flex-col md:gap-10 gap-[137px]  w-auto md:w-full`}>
                        <div className={`${align}  flex flex-col md:gap-10 gap-16 w-auto md:w-full`}>
                            <div className="flex flex-col gap-6 w-auto sm:w-full">
                                <p
                                    className={`${color} sm:leading-[120.00%] sm:text-6xl text-4xl tracking-[-0.64px] font-exo font-extrabold text-start`}>
                                    <span className={`${color} font-exo font-extrabold`}>
                                        <>
                                            {head1}
                                            <br />
                                        </>
                                    </span>
                                    <span className="text-blue_gray-900 font-exo font-extrabold">
                                        {head2}
                                    </span>
                                </p>
                                <p
                                    className="sm:leading-[160.00%] max-w-[556px]  text-gray-900 text-lg tracking-[-0.54px] font-montserrat font-normal text-start"
                                >
                                    {text}
                                </p>
                            </div>

                            <img
                                className="h-auto sm:h-auto mb-10 object-cover md:w-full hover:scale-95 transition duration-500"
                                src={img}
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsSection