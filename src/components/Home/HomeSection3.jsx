import React from 'react'
import logo_1_ofroll from '../../assets/images/logo_1_ofroll.webp'
import logo_1_siloplus from '../../assets/images/logo_1_siloplus.webp'
import logo_1_wonderla from '../../assets/images/logo_1_wonderla.webp'
import logo_1_norq from '../../assets/images/logo_1_norq.webp'
import logo_1_la from '../../assets/images/logo_1_la.webp'
import logo_1_akessia from '../../assets/images/logo_1_akessia.webp'
import logo_1_bizbuz from '../../assets/images/logo_1_bizbuz.webp'
import logo_1_dmtc from '../../assets/images/logo_1_dmtc.webp'
import logo_1_smarttech from '../../assets/images/logo_1_smarttech.webp'
import logo_1_gc from '../../assets/images/EcDealsLogonewEdit.webp'
import img_image112 from '../../assets/images/img_image112.png'

const HomeSection3 = () => {
    const logos = [
        { src: logo_1_ofroll, alt: 'logo1' },
        { src: logo_1_siloplus, alt: 'logo2' },
        { src: logo_1_wonderla, alt: 'logo3' },
        { src: logo_1_norq, alt: 'logo4' },
        { src: logo_1_la, alt: 'image1605' },
        { src: logo_1_akessia, alt: 'image1604' },
        { src: logo_1_bizbuz, alt: 'logoOne' },
        { src: logo_1_dmtc, alt: 'logo8' },
        { src: logo_1_smarttech, alt: 'logo9' },
        { src: logo_1_gc, alt: 'logo10' }
    ];
    return (
        <>
            <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1300px] mx-auto px-5 sm:px-8 relative">
                <div className="flex flex-col md:gap-10 gap-16 items-center justify-start  mx-auto w-full">
                    <div className="flex flex-col h-auto md:h-auto items-center justify-start  w-full">
                        <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
                            <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">

                                <div className=''>
                                    <div className={`bg-clip-text bg-gradient9 fontExo text-left font-extrabold text-4xl md:text-[64px] md:leading-[89.6px] tracking-[-1%]  from-white-A700 to-blue-400 text-transparent text-gray-900`}>
                                        Trusted by
                                        <br />
                                        Happy clients
                                    </div>
                                    <p
                                        className="mt-4 text-lg md:text-[24px] text-left text-gray-900 sm:text-xl tracking-[-0.72px] w-auto font-montserrat font-normal"
                                    >
                                        Hear from the decision makers themselves!
                                    </p>
                                </div>

                                <div className="flex flex-col gap-8 items-start w-auto vertical">
                                    <div className="gap-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start justify-start my-0 w-full">
                                        {logos.map((logo, index) => (
                                            <div key={index} className="h-20 sm:h-24 lg:h-32 bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg shadow-bs hover:scale-110 transition duration-500 hover:shadow-lg ">
                                                <img className="h-auto max-h-full w-auto max-w-full logo-image" src={logo.src} alt={logo.alt} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col gap-6 items-center justify-start w-full md:w-full bs2  mt-0 sm:mt-16">
                                <div className="flex flex-col items-center justify-start sm:w-24 w-12 ">
                                    <div className=" h-[35px] sm:h-[76px] relative w-full">
                                        <img
                                            className="absolute h-[35px] sm:h-[76px] inset-y-[0] my-auto object-cover right-[0] w-18 sm:w-[55%]"
                                            src={img_image112}
                                            alt="image112"
                                        />
                                        <img
                                            className="absolute h-[35px] sm:h-[76px] inset-y-[0] left-[0] my-auto object-cover  w-18  sm:w-[55%]"
                                            src={img_image112}
                                            alt="image113"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection3