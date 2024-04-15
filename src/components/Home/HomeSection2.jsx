import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import DepSectionCard from "../DepSectionCard";
import dep_card_img_1 from "../../assets/images/dep_card_img_1.webp";
import dep_card_img_2 from "../../assets/images/dep_card_img_2.webp";
import dep_card_img_3 from "../../assets/images/dep_card_img_3.webp";
import dep_card_img_4 from "../../assets/images/dep_card_img_4.webp";
import dep_card_img_5 from "../../assets/images/dep_card_img_5.webp";
import dep_card_img_6 from "../../assets/images/dep_card_img_6.webp";
import dep_card_img_7 from "../../assets/images/dep_card_img_7.webp";
import { dep1Btn, dep2Btn, dep3Btn, dep4Btn, dep5Btn, dep6Btn, dep7Btn } from "../../constants/depBtnData";

const btBg1 = 'bg-gray-900_04 text-white-A700'
const btBg2 = 'bg-gray-800_03 text-white-A700'

const HomeSection2 = () => {
    const serviecesRef = useRef(null)
    return (
        <>
            <div className="bg-black-900_02 ">
                <div className="flex flex-col items-start justify-start w-auto md:max-w-[1300px] mx-auto mb-16 "
                    ref={serviecesRef}
                >
                    <div className="flex flex-col items-start justify-end px-4 sm:px-8 w-full pb-24">
                        <div className="flex flex-col font-montserrat items-start justify-start mb-1 mt-[30px] mx-auto w-full">
                            <Fade top distance='5%' duration={1000}>
                                <div className='pt-10 md:pt-20'>
                                    <div className={`fontExo text-left font-extrabold text-4xl md:text-[64px] md:leading-[89.6px] tracking-[-1%] bg-gradient-to-r from-white-A700 to-blue-600 bg-clip-text text-transparent text-gray-900`}>
                                        So How We Can Help?
                                    </div>
                                    <div className={`fontMontserrat text-left text-xs md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-4 sm:mt-4  text-gray-500`}>
                                        It&#39;s not about limitations, but it&#39;s something
                                        we focus on.
                                    </div>
                                </div> </Fade>


                            <div className="relative" id="services">
                                <div className="sticky top-0 transition-all duration-500 ease-in-out">
                                    <DepSectionCard
                                        head1="Web"
                                        head2="Development"
                                        text="Our developers are ready to implement visual
                              into code that adopts the latest technologies."
                                        bg="bg-gradient7"
                                        btnBg={btBg1}
                                        btn={dep1Btn}
                                        img={dep_card_img_1}
                                    /></div>
                                <div className="sticky top-0 transition-all duration-500 ease-in-out ">
                                    <DepSectionCard
                                        head1="Mobile App"
                                        head2="Development"
                                        text="Aim for big change, with a native app UI/UX design
                              process that makes users, developers and project
                              managers smile from ear to ear."
                                        bg="bg-gradient8"
                                        img={dep_card_img_2}
                                        btn={dep2Btn}
                                        btnBg={btBg2}
                                    /></div>
                                <div className="sticky top-0 transition-all duration-500 ease-in-out ">
                                    <DepSectionCard
                                        head1="Visual"
                                        head2="Design"
                                        text="We combine empathy, creativity and rationality
                              to meet user needs and business success."
                                        bg="bg-gradient7"
                                        img={dep_card_img_3}
                                        btn={dep3Btn}
                                        btnBg={btBg1}
                                    /></div>
                                <div className="sticky top-0 transition-all duration-500 ease-in-out ">
                                    <DepSectionCard
                                        head1="Project"
                                        head2="Management"
                                        text=" We manage projects from finding feasible
                               solutions to the problem and deliver it in
                               committed time frame with proper go to market
                               strategies."
                                        bg="bg-gradient8"
                                        img={dep_card_img_4}
                                        btn={dep4Btn}
                                        btnBg={btBg2}
                                    /></div>
                                <div className="sticky top-0 transition-all duration-500 ease-in-out ">
                                    <DepSectionCard
                                        head1="Maintenance"
                                        head2="& Upgrades"
                                        text="We also work on existing websites, apps,
                              databases and other existing technology
                              structures and help with upgrades and
                              maintenance."
                                        bg="bg-gradient7"
                                        img={dep_card_img_5}
                                        btn={dep5Btn}
                                        btnBg={btBg1}
                                    /></div>
                                <div className="sticky top-0 transition-all duration-500 ease-in-out ">
                                    <DepSectionCard
                                        head1="Robotic"
                                        head2="Services"
                                        text="As a part of our Robotics Service, we design and
                              build custom humanoid robots according to
                              specific business requirements."
                                        bg="bg-gradient8"
                                        img={dep_card_img_6}
                                        btn={dep6Btn}
                                        btnBg={btBg2}
                                    /></div>
                                <div className="sticky top-0 transition-all duration-500 ease-in-out ">
                                    <DepSectionCard
                                        head1="Email Marketing"
                                        head2="Services"
                                        text="Our enterprise class intelligent email delivery
                              engine gives you better email delivery."
                                        bg="bg-gradient7"
                                        img={dep_card_img_7}
                                        btn={dep7Btn}
                                        btnBg={btBg1}
                                    />
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeSection2;