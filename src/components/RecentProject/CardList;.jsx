import React from 'react';
import Explore from '../HeroSection/Explore';
import Fade from "react-reveal/Fade";

const Card = ({ logoSrc, ImageSrc, description }) => {
    return (
        <>
            <Fade top distance='5%' duration={1000}>
                <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center mx-[26px] sm:mx-[93px] my-5">
                    {/* Right side image */}
                    <div className="m-2 md:order-last hover:scale-95 transition duration-500">
                        <img src={ImageSrc} alt="placeholder" className="w-72 h-72 md:w-[300px] md:h-[300px] object-cover" />
                    </div>
                    {/* Left side symbol */}
                    <div className="flex justify-start sm:items-center my-4 md:mb-0 md:mr-4 md:order-first sm:hover:scale-110 transition duration-500">
                        <img src={logoSrc} className='w-[142px] h-auto' />
                    </div>
                    {/* Center text paragraph */}
                    <div className="text-left m-2 mb-4 md:mb-0 lg:mx-8 md:max-w-[400px] lg:max-w-[550px]">
                        <p className="text-black-1000 md:text-lg font-montserrat tracking-wide">{description}</p>
                    </div>
                </div>
            </Fade>
        </>
    );
};

const CardList = () => {

    const cardData = [
        {
            logoSrc: "/images/NexcrmLogo.png",
            ImageSrc: "/images/NexcrmImage.webp",
            description: "NexCRM is a comprehensive SaaS application that streamlines client relationship and project management. Combining tasks, invoices, leads, estimates, and more in one user-friendly platform for enhanced efficiency."
        },
        {
            logoSrc: "/images/MilesCartLogo.png",
            ImageSrc: "/images/MilesCartImage.webp",
            description: "MilesCart is a comprehensive fitness solution, merging cutting-edge technology and wellness. With an enhanced UI and features curated, it offers advanced tracking, ticketing, and events. Unveiling new elements such as coin reimbursement, e-commerce, health features, and community building, MilesCart redefines the fitness app experience. Embrace a holistic approach to well-being with MilesCart's innovative features and user-friendly interface."
        },
        {
            logoSrc: "/images/AkkesiaLogo.png",
            ImageSrc: "/images/AkkesiaImage.webp",
            description: "A customized Membership Management App & user-friendly website. Features include user registration, login, sub-admins, and admin portal. Streamline membership, events, wallet, payments, and data management."
        },
        {
            logoSrc: "/images/WonderlaLogo.png",
            ImageSrc: "/images/WonderlaImage.webp",
            description: "Wonderla's upgraded Enterprise Asset Management (EAM) app, featuring enhanced functionality through added features and optimized internal workflows and approvals. Elevate your asset management experience."
        },
        {
            logoSrc: "/images/EcDealsLogo.png",
            ImageSrc: "/images/EcDealsImage.webp",
            description: "Discover Ecdeals' innovative mobile recharge app, streamlining transactions and incorporating GST invoice generation for added value in the thriving digital recharge market."
        },
        {
            logoSrc: "/images/NexBookLogo.png",
            ImageSrc: "/images/NexBookImage.webp",
            description: "Introducing NEXBOOK: Empower freelancers and small businesses with seamless accounting. Generate professional invoices, manage accounts, create detailed quotes, and effortlessly track payments, expenses, and tax types. Elevate your financial management experience."
        },

    ];

    return (
        <div>
            <Explore
                backgroundColor=""
                titleColor=""
                descriptionColor=""
                title="Recent Projects"
                description="Here are a couple of previous project we worked on."
            />

            {cardData.slice(0, 6).map((card, index) => (
                <React.Fragment key={index}>
                    <Card
                        logoSrc={card.logoSrc}
                        ImageSrc={card.ImageSrc}
                        description={card.description}
                    />
                    {index !== 5 && (
                        <div className="flex justify-center">
                            <hr className="hidden md:block border-t-2 border-gray-200 w-[80%] my-2 md:m-10"></hr>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default CardList;