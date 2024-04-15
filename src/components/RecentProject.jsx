import React from "react";

import img_frame427320989 from "../assets/images/img_frame427320989.png";
import img_frame427320989_deep_purple_600 from "../assets/images/img_frame427320989_deep_purple_600.png";

import milescart_img from "../assets/images/milescart_img.png";
import logo_milscart from "../assets/images/logo_milscart.png";
import nexcrm_img from "../assets/images/nexcrm_img.png";
import logo_nexcrm from "../assets/images/logo_nexcrm.png";
import nexbook_img from "../assets/images/nexbook_img.png";
import logo_nexbook from "../assets/images/logo_nexbook.png";
import logo_ec from "../assets/images/logo_ec.png";
import ec_img from "../assets/images/ec_img.png";
import logo_1_wonderla from "../assets/images/logo_1_wonderla.png";
import wonderla_img from "../assets/images/wonderla_img.png";
import logo_1_akessia from "../assets/images/logo_1_akessia.png";
import akesia_img from "../assets/images/akesia_img.png";
import RecentPrjCard from "./RecentPrjCard";

const RecentProject = () => {
    return (
        <>
            <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto py-[3px] w-full md:px-0 px-48">
                <div className="flex flex-col items-end mt-2 md:pl-10  sm:pl-5 w-full">
                    <div className="flex flex-col items-start justify-start w-full px-14 md:px-5">
                        <div className="flex flex-col gap-6 items-start justify-start mt-[120px] w-auto md:w-full">
                            <p className="sm:text-7xl text-5xl  text-left text-gray-900 tracking-[-0.72px] w-auto font-exo font-extrabold">
                                Recent Projects
                            </p>
                            <p className="text-left text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.72px] w-auto font-montserrat font-normal">
                                Here are a couple of previous project we worked on.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 items-start justify-start md:ml-[0] ml-[37px] mt-16 w-auto md:w-full md:px14">
                    <div className="flex flex-col gap-8 items-start justify-start w-full md:w-full md:px14">
                        {/* card section */}
                        <RecentPrjCard
                            txt="NexCRM is a comprehensive SaaS application that
                                 streamlines client relationship and project management.
                                 Combining tasks, invoices, leads, estimates, and more in
                                 one user-friendly platform for enhanced efficiency."
                            containerClass={'bg-cover bg-gray-200 bg-no-repeat flex flex-col h-[300px] items-center justify-start rounded w-[300px]'}
                            logo={logo_nexcrm}
                            logoAlt={"img_crmlogo4x81.png"}
                            logoClass={'h-2 md:h-2 object-cover w-[142px]  sm:h-10'}
                            img={nexcrm_img}
                            imgAlt={"img_11126"}
                            // h-auto md:h-auto object-cover rounded w-[300px]
                            imgClass={''}
                            bg={img_frame427320989}
                        />

                        {/* <RecentPrjCard
                            txt="MilesCart is a comprehensive fitness solution, merging
                                cutting-edge technology and wellness. With an enhanced
                                UI and features curated, it offers advanced tracking,
                                ticketing, and events. Unveiling new elements such as
                                coin reimbursement, e-commerce, health features, and
                                community building, MilesCart redefines the fitness
                                app experience. Embrace a holistic approach to
                                well-being with MilesCart&#39;s innovative features
                                and user-friendly interface."
                            //containerClass={'bg-cover bg-gray-200 bg-no-repeat flex flex-col h-[300px] items-start justify-end pt-[37px] sm:px-5 px-[37px] rounded w-[300px]'}
                            logo={logo_milscart}
                            logoAlt={"img_image1609.png"}
                            logoClass={'mx-auto h-11 md:h-auto object-cover w-[140px] sm:w-full sm:h-10 '}
                            img={milescart_img}
                            imgAlt={"img_mssc1"}
                            imgClass={'h-[263px] md:h-[263px] my-auto  md:ml-[0] object-cover w-[74%] sm:w-32'}
                            bg={img_frame427320989_deep_purple_600}
                        />

                        <RecentPrjCard
                            txt="A customized Membership Management App & user-friendly
                                 website. Features include user registration, login,
                                 sub-admins, and admin portal. Streamline membership,
                                 events, wallet, payments, and data management."
                            //containerClass={'bg-cover bg-gray-200 bg-no-repeat flex flex-col h-[300px] items-center justify-start rounded w-[300px]'}
                            logo={logo_1_akessia}
                            logoAlt={"img_image1604.png"}
                            logoClass={'h-[26px] md:h-auto object-cover w-[140px] sm:w-full sm:h-10'}
                            img={akesia_img}
                            imgAlt={"img_11122"}
                            imgClass={'h-[300px] md:h-auto object-cover rounded w-[300px]'}
                            bg={img_frame427320989}
                        />

                        <RecentPrjCard
                            txt="  Wonderla&#39;s upgraded Enterprise Asset Management
                                   (EAM) app, featuring enhanced functionality through
                                   added features and optimized internal workflows and
                                   approvals. Elevate your asset management experience."
                            //containerClass={'"bg-gray-200 flex h-[300px] justify-end relative rounded w-[300px]'}
                            logo={logo_1_wonderla}
                            logoAlt={"img_image95"}
                            logoClass={'h-[54px] md:h-auto object-cover w-[140px] sm:w-full sm:h-10'}
                            img={wonderla_img}
                            imgAlt={"img_11123"}
                            imgClass={'h-[251px] mt-auto mx-auto object-cover'}
                            bg={img_frame427320989_deep_purple_600}
                        />

                        <RecentPrjCard
                            txt="Discover Ecdeals&#39; innovative mobile recharge app,
                                 streamlining transactions and incorporating GST invoice
                                 generation for added value in the thriving digital
                                 recharge market."
                            //containerClass={'bg-gray-200 flex h-[300px] justify-end relative rounded w-[300px]'}
                            logo={logo_ec}
                            logoAlt={"img_image1608"}
                            logoClass={'h-[72px] md:h-auto object-cover w-[140px] sm:w-full sm:h-10'}
                            img={ec_img}
                            imgAlt={"img_11121"}
                            imgClass={'h-[268px] mt-auto mx-auto'}
                            bg={img_frame427320989}
                        />

                        <RecentPrjCard
                            txt="Introducing NEXBOOK: Empower freelancers and small
                                 businesses with seamless accounting. Generate professional
                                 invoices, manage accounts, create detailed quotes, and
                                 effortlessly track payments, expenses, and tax types.
                                 Elevate your financial management experience."
                            //containerClass={'bg-cover bg-gray-200 bg-no-repeat flex flex-col h-[300px] items-end justify-end pl-[5px] py-[5px] rounded w-[300px]'}
                            logo={logo_nexbook}
                            logoAlt={"img_nexbook"}
                            logoClass={"h-5 w-[140px] sm:w-full sm:h-10"}
                            img={nexbook_img}
                            imgAlt={"img_11128"}
                            imgClass={'h-[246px] md:h-auto mt-[42px] object-cover w-[97%] '}
                            bg={img_frame427320989_deep_purple_600}
                        /> */}
 
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentProject;
