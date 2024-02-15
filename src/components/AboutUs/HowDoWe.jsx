import React, { Suspense } from 'react';

    const ImageComponent = ({ src, alt }) => {
        return <img src={src} alt={alt} className="w-full h-auto" />;
    };
    
    function HowDoWe() {
        const images = [
            {
                id: 1,
                src: '/images/breifing.png',
                alt: 'Image 1',
            },
            {
                id: 2,
                src: '/images/documentation.png',
                alt: 'Image 2',
            },
            {
                id: 3,
                src: '/images/wireframe.png',
                alt: 'Image 3',
            },
            {
                id: 4,
                src: '/images/development.png',
                alt: 'Image 4',
            },
            {
                id: 5,
                src: '/images/quality.png',
                alt: 'Image 5',
            },
            {
                id: 6,
                src: '/images/deployment.png',
                alt: 'Image 6',
            },
        ];
    
        return (
            <>
                <p className="fontMontserratBold text-deep_purple-800 text-4xl sm:text-5xl lg:text-6xl font-black leading-77 tracking-7 text-left pl-9 sm:pl-[64px]">
                    How <br/> <span className='text-gray-900'> do we make it? </span>
                </p>
    
                <div className="flex flex-wrap justify-center m-8 sm:m-16">
                    {images.map((image) => (
                        // <div key={image.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
                        <div key={image.id} className="w-1/2 md:w-1/3 lg:w-1/3 p-2">
                            <Suspense fallback={<div>Loading...</div>}>
                                <ImageComponent src={image.src} alt={image.alt} />
                            </Suspense>
                        </div>
                    ))}
                </div>
            </>
        );
    }
    
    export default HowDoWe;
    