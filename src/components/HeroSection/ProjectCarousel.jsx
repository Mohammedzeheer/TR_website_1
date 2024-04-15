import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import MoreProjects from '../buttons/MoreProjects';
import SnapCardImage from '../../assets/images/SnaptrackImgSide.webp'
import DoubleMobile from '../../assets/images/DoubleMobile.webp'
import offrolls from '../../assets/images/offrolls.webp'
import img_BizBuz_hover from '../../assets/images/CrossMobile.webp'
import Img_Dmtc from '../../assets/images/img-Dmtc.png'
import MoreProjectImage from '/images/Moreprojectcard.png'

function ProjectCarousel({ bg_Color }) {
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

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1250 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1250, min: 870 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1
        }
    };
    return (
        <div className={`bg-${bg_Color} sm:pt-10 sm:pb-2
              `}>
            <div className='max-w-[1300px] mx-auto'>
                <Fade top distance='5%' duration={1000}>
                    <Carousel responsive={responsive} className='pt-8 mx-4 sm:mx-16 sm:pb-20'>
                        {carouselItems.map((item, index) => (

                            <Link to={item.to} key={item.id} className="cursor-pointer">
                                <div className='flex'>
                                    <div
                                        className={`relative h-[460px] w-[364px] md:w-[364px] sm:h-[500px] sm:m-4 rounded-3xl`}
                                        onMouseEnter={() => handleHover(index)}
                                        onMouseLeave={() => handleHover(null)}
                                    >
                                        <div className={gradientClasses[index % gradientClasses.length] + ` rounded-3xl h-full m-2 sm:m-0 relative border ${BorderClasses[index % BorderClasses.length]} shadow-lg ${ShadowClasses[index % ShadowClasses.length]}`}>
                                            {/* Logo */}
                                            <img className="absolute -top-8 sm:-top-8 left-8 w-24 h-24 p-4 sm:w-24 sm:h-24 object-cover z-10" src={item.badge} alt="Badge" />

                                            <div className='pl-5 sm:pl-10'>
                                                <div className="fontMontserrat mt-16 pt-8 text-white-A700 text-left font-bold text-3xl mb-2 letter-spacing[-3%]">{item.title}</div>
                                                <p className="fontMontserrat text-white-A700 text-left font-normal text-sm sm:text-base sm:leading-[25.6px]">{item.description}</p>
                                            </div>
                                            {/* Main Image */}
                                            <div className='flex justify-center'>
                                                <img
                                                    className={`absolute h-52 w-100 object-cover transition duration-slow ease-in-out ${hoveredIndex === index ? 'rounded-2xl bottom-2' : 'right-0 rounded-tl-2xl rounded-br-3xl bottom-0'
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
                                </div>
                            </Link>
                        ))}
                        <Link to={'/projects'} className="relative inline-block sm:m-2">
                            <img className='h-[460px] sm:h-[500px] w-[335px] md:w-[350px] m-2 mb-2 hover:scale-95 rounded-3xl transition duration-500  shadow-xl shadow-blue-800' src={MoreProjectImage} alt="moreProjects" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <MoreProjects />
                            </div>
                        </Link>
                    </Carousel>
                </Fade>
            </div>
        </div>
    );
}

export default ProjectCarousel;