import React, { Suspense } from 'react';
import Fade from "react-reveal/Fade";

const ImageComponent = ({ src, alt }) => {
    return <img src={src} alt={alt} className="w-full h-auto hover:scale-95 transition duration-500" />;
};

function HowDoWe() {
    const images = [
        {
            id: 1,
            src: '/images/breifing.webp',
            alt: 'Image 1',
        },
        {
            id: 2,
            src: '/images/documentation.webp',
            alt: 'Image 2',
        },
        {
            id: 3,
            src: '/images/wireframe.webp',
            alt: 'Image 3',
        },
        {
            id: 4,
            src: '/images/development.webp',
            alt: 'Image 4',
        },
        {
            id: 5,
            src: '/images/quality.webp',
            alt: 'Image 5',
        },
        {
            id: 6,
            src: '/images/deployment.webp',
            alt: 'Image 6',
        },
    ];

    return (
        <>
            <div className='max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8'>
                <Fade top distance='5%' duration={1000}>
                    <p className="fontMontserratBold text-deep_purple-800 text-4xl sm:text-5xl lg:text-6xl font-black leading-77 tracking-7 text-left">
                        How <br /> <span className='text-gray-900'> do we make it? </span>
                    </p>

                    <div className="flex flex-wrap justify-center my-8 sm:my-16">
                        {images.map((image) => (
                            <div key={image.id} className="w-1/2 md:w-1/3 lg:w-1/3 p-2">
                                <Suspense >
                                    <ImageComponent src={image.src} alt={image.alt} />
                                </Suspense>
                            </div>
                        ))}
                    </div></Fade>
            </div>
        </>
    );
}

export default HowDoWe;