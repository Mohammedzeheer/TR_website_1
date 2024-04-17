import React, { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify'
import  Fade from "react-reveal/Fade";

const ContactPage = () => {
    const [mail, setMail] = useState('');
    const [mobile, setMobile] = useState('');
    const [description, setDescription] = useState('');

    const submitData = (e) => {
        e.preventDefault();
        if (!mail.trim()) {
            toast.error('Please enter your email.');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(mail)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        if (!mobile.trim()) {
            toast.error('Please enter your phone number.');
            return;
        }

        if (mobile.length < 8) {
            toast.error('Please enter a valid phone number.');
            return;
        }
        if (!description.trim()) {
            toast.error('Please enter your description.');
            return;
        }
  
        emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, {
            from_email: mail,
            from_mobile: mobile,
            description: description
        }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
        .then((response) => {
           toast.success('Email sent successfully', response);
            setMail('');
            setMobile('');
            setDescription('');
        }, (error) => {
            toast.error('Error sending email', error);
        });
    };

    return (
        <>
        <div className='relative max-w-[1300px] mx-auto'>
            <div className=" bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto pt-3 md:px-10 px-8 sm:px-5 w-auto sm:w-full md:w-full sm:mt-24 ">
                <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start lg:px-36 w-full">
                    <div className="flex flex-col font-exo md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
                        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
                        <Fade top distance='5%' duration={1000}>
                            <p
                                className="mt-10 sm:mt-1 text-4xl sm:text-7xl  text-center text-gray-900 tracking-[-0.72px] w-auto font-exo font-extrabold"
                            >
                                IT’S TIME TO CONNECT
                            </p> </Fade>
                            <div className="sm:mt-6 flex flex-col font-montserrat md:gap-10 gap-16 items-end justify-start w-auto md:w-full">
                                <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-full">

                                    <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-start justify-start w-full md:w-full">
                                        <div className="flex flex-col gap-4 md:gap-8 items-start justify-start w-full sm:w-1/2">
                                            <p className="text-center text-gray-900 text-xl tracking-[0.60px] w-auto font-medium font-montserrat">
                                                EMAIL
                                            </p>
                                            <div className="border border-gray-900_33 border-solid w-full bg-white-A700 shadow-bs2 text-black-900_87 fill pb-[23px] pt-[27px] sm:px-5 px-[23px] rounded-[10px] ">
                                                <input
                                                    className="p-0 placeholder:text-black-900_87 text-left text-xl tracking-[-0.20px] w-full border-0 bg-transparent"
                                                    name="email_One"
                                                    placeholder="Enter email"
                                                    type="email"
                                                    value={mail}
                                                    onChange={(e) => setMail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4  md:gap-8  items-start justify-start w-full sm:w-1/2">
                                            <p className="text-center text-gray-900 text-xl tracking-[0.60px] w-auto font-medium font-montserrat">
                                                PHONE
                                            </p>
                                            <div className="border border-gray-900_33 border-solid w-full bg-white-A700 shadow-bs2 text-black-900_87 fill pb-[23px] pt-[27px] sm:px-5 px-[23px] rounded-[10px]">
                                                <input
                                                    className="p-0 placeholder:text-black-900_87 text-left text-xl tracking-[-0.20px] w-full border-0 bg-transparent"
                                                    name="label"
                                                    placeholder="Enter phone number"
                                                    type="text"
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-start justify-start w-full md:w-full">
                                    <div className="flex flex-col gap-4 md:gap-8 items-start justify-center w-full md:w-full ">
                                        <p
                                            className="text-center text-gray-900 text-xl tracking-[0.60px] uppercase w-auto font-medium font-montserrat"
                                        >
                                            Project Description
                                        </p>
                                        <textarea className="text-xl bg-white-A700 border border-gray-900_33 flex flex-col items-center justify-center p-4 rounded-[10px] shadow-bs2 w-full md:w-full "
                                            placeholder="Write here "
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                                <button className="flex items-center justify-center text-white-A700 text-lg font-bold font-montserrat bg-deep_purple-800 border hover:bg-deep_purple-900 border-blue-100 border-solid px-5 py-3 rounded-full shadow-bs1"
                                    onClick={submitData}
                                >
                                    <span>Submit</span>
                                    <BsArrowRightCircleFill className="text-2xl ml-2" />
                                </button>

                            </div>
                        </div>

                        <div className="sticky top-0 bg-white-A700 border border-blue_gray-100 border-solid sm:flex-col font-montserrat md:gap-10 gap-[88px] md:h-auto items-start justify-start sm:px-5 px-8 py-9 mb-20 sm:mb-40 rounded-[16px] shadow-bs2 w-full">
                        <Fade top distance='5%' duration={1000}>
                            <div className="sm:flex sm:flex-row gap-4 items-center justify-center w-full">
                                <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                                    <p className="text-md lg:text-xl md:text-xl text-center text-gray-900_87 sm:text-xl w-auto font-montserrat font-semibold">PREFER TO TALK?</p>
                                    <a href="tel:9743061810" class="text-lg lg:text-2xl sm:text-[20px] text-center text-gray-900 underline w-auto font-montserrat font-semibold">Schedule a call</a>
                               </div>
                                <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                                    <p className="text-md lg:text-xl md:text-[22px] text-center text-gray-900_87 sm:text-xl w-auto font-montserrat font-semibold">OLD, BUT GOLD</p>
                                    <a href="mailto:info@techrender.ai" className="text-lg lg:text-2xl sm:text-[23px] text-center text-gray-900 underline w-auto font-montserrat font-semibold">info@techrender.ai</a>
                                  </div>
                                <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                                    <p className="text-md lg:text-xl md:text-[22px] text-center text-gray-900_87 sm:text-xl uppercase w-auto font-montserrat font-semibold">Messenger?</p>
                                    <a href="https://wa.me/9743061810" class="text-lg lg:text-2xl sm:text-[23px] text-center text-gray-900 underline w-auto font-montserrat font-semibold" target="_blank">Whatsapp</a>

                                </div>
                            </div> </Fade>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default ContactPage;