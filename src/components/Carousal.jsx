import React, { useEffect, useState } from "react"
import Glide from "@glidejs/glide"
import { Link } from 'react-router-dom';

import SnapCardImage from '../assets/images/SnaptrackImgSide.webp'
import DoubleMobile from '../assets/images/DoubleMobile.webp'

import offrolls from '../assets/images/offrolls.webp'
import img_BizBuz from '../assets/images/bizbuzside.webp'
import img_BizBuz_hover from '../assets/images/CrossMobile.webp'
import Img_Dmtc from '../assets/images/img-Dmtc_side.webp'
import Img_Dmtc_hover from '../assets/images/dmtc_full.png'
import MoreProjectImage from '/images/Moreprojectcard.png'
import MoreProjects from '../components/buttons/MoreProjects'


export default function CarouselControlsOutside() {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleHover = (index) => {
        setHoveredIndex(index);
    };

    const gradientClasses = [
        "bg-gradient-radial-indigo",
        "bg-gradient-radial-red",
        "bg-gradient-radial-indigo-800",
        "bg-gradient-radial-purple"
    ];
    const BorderClasses = [
        "border-indigo-900",
        "border-red-900",
        "border-indigo-800",
    ];
    const ShadowClasses = [
        "shadow-indigo-900",
        "shadow-red-900",
        "shadow-indigo-800",
        "shadow-blue-400",
    ];

    const carouselItems = [
        {
            id: 1,
            to: '/projects/snaptrack',
            imageSrc: SnapCardImage,
            imagehoverSrc: DoubleMobile,
            badge: '/images/Top1.svg',
            title: 'SnapTrack',
            description: 'A SAAS based state-of-the-art attendance and payroll management software.',
            border: 'indigo-900'
        },
        {
            id: 2,
            to: '/projects/offroll',
            imageSrc: offrolls,
            imagehoverSrc: offrolls,
            badge: '/images/Top2.png',
            title: 'Offrolls',
            description: 'Helping corporations find the hidden talent within the dense branches.',
            border: 'blue-400'
        },
        {
            id: 3,
            to: '/projects/bizbuz',
            imageSrc: img_BizBuz_hover,
            imagehoverSrc: img_BizBuz_hover,
            badge: '/images/Top3.png',
            title: 'Biz & Buz',
            description: 'A dynamic B2B and B2C application that revolutionized public transportation.',
            border: 'indigo-800'
        },
        {
            id: 4,
            to: '/projects/dmct',
            imageSrc: Img_Dmtc,
            imagehoverSrc: Img_Dmtc,
            badge: '/images/Top4.png',
            title: 'Data Mappers',
            description: 'Providing an advanced, self hosted email marketing solution.',
            border: 'deep_purple-800'
        },
    ];

    useEffect(() => {
        const slider = new Glide(".glide-04", {
            type: "carousel",
            focusAt: "center",
            perView: 3,
            autoplay: 3500,
            animationDuration: 700,
            gap: 24,
            rewind: true,
            classNames: {
                nav: {
                    //   active: "[&>*]:bg-wuiwhite-A700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])

    return (
        <>
            <div className="bg-gray-900 px-2 sm:px-20">
                <div className="glide-04 bg-gray-900 max-w-[1300px] mx-auto relative">
                    {/*    <!-- Buttons --> */}
                    <div
                        className="flex w-full items-right justify-center sm:justify-end sm:pr-10 gap-2 p-4"
                        data-glide-el="controls"
                    >
                        <button
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-white-A700 hover:bg-blue-100 text-gray-900 transition duration-300  focus-visible:outline-none lg:h-12 lg:w-12"
                            data-glide-dir="<"
                            aria-label="prev slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <title>prev slide</title>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                />
                            </svg>
                        </button>
                        <button
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-white-A700 hover:bg-blue-100 text-gray-900 transition duration-300  focus-visible:outline-none lg:h-12 lg:w-12"
                            data-glide-dir=">"
                            aria-label="next slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <title>next slide</title>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </button>
                    </div>
                    {/*    <!-- Slides --> */}
                    <div className="overflow-hidden " data-glide-el="track">
                      <div className=" py-6 relative flex overflow-hidden p-3">
                            {carouselItems.map((item, index) => (
                                <Link to={item.to} key={item.id} className="cursor-pointer">
                                    <div
                                        className={`relative h-[500px] w-[364px] md:w-[390px] md:h-[500px] rounded-3xl `}
                                        onMouseEnter={() => handleHover(index)}
                                        onMouseLeave={() => handleHover(null)}
                                    >
                                        <div className={gradientClasses[index % gradientClasses.length] + ` rounded-3xl h-full m-2 sm:m-4 relative border ${BorderClasses[index % BorderClasses.length]} shadow-lg ${ShadowClasses[index % ShadowClasses.length]}`}>
                                            <img className="absolute -top-8 sm:-top-8 left-8 w-24 h-24 p-4 sm:w-24 sm:h-24 object-cover" src={item.badge} alt="Badge" />
                                            <div className='pl-5 sm:pl-10'>
                                                <div className="fontMontserrat mt-16 pt-8 text-white-A700 text-left font-bold text-3xl mb-2 letter-spacing[-3%]">{item.title}</div>
                                                <p className="fontMontserrat text-white-A700 text-left font-normal text-sm sm:text-base sm:leading-[25.6px]">{item.description}</p>
                                            </div>
                                            <div className='flex justify-center'>
                                                <img
                                                    className={`absolute h-52 w-100  object-cover transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'rounded-2xl bottom-2' : 'right-0 rounded-tl-2xl rounded-br-3xl  bottom-0'
                                                        }`}
                                                    style={{
                                                        transform: hoveredIndex === index ? 'scale(1.08)' : 'scale(1)'
                                                    }}
                                                    src={hoveredIndex === index ? item.imagehoverSrc : item.imageSrc}
                                                    alt="img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                            <Link to={'/projects'} className="relative inline-block ">
                                <img className='h-[500px] w-[364px] m-2 hover:scale-95 rounded-3xl transition duration-500  shadow-xl shadow-blue-800' src={MoreProjectImage} alt="moreProjects" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <MoreProjects />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}