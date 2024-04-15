import React from 'react'
import logo from "../assets/TR_logo.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const FooterNew = () => {
  return (
    <footer className="max-w-[1300px] mx-auto py-5 sm:py-10 bg-white-A700">
      <h2 className="sr-only">Footer</h2>

      <div className="flex flex-col-reverse sm:flex-row md:justify-between px-4 sm:px-6 lg:px-8 md:mt-8">
        <div className="relative mt-14 sm:mt-0 flex flex-col justify-center md:float-left text-gray-900">
          <div className="mt-9 flex flex-col justify-center items-center md:items-start">
            <Link to={'/'}>
              <img
                className="w-[300px] h-[26px]"
                src={logo}
                alt="tr_logo"
              />
            </Link>

            <p className='sm:w-80 pt-6 text-sm md:text-lg font-montserrat font-normal md:leading-8 text-gray-900 text-center sm:text-left  tracking-wide'>
              Stand out your business through leading digital technologies and Designs.
            </p>

            <Link to={'/contact_us'} className=" mt-3 bg-white-A700  border-2 text-deep_purple-800  inline-flex items-center font-montserrat cursor-pointer text-sm px-4 py-2 md:px-6 md:py-3 font-semibold md:font-bold  md:text-lg leading-normal leading-trim uppercase tracking-wide rounded-full hover:bg-deep_purple-800 hover:text-white-A700">
              <span>CONTACT US</span>
              <BsArrowRightCircleFill className="ml-2 text-xl md:text-2xl" />
            </Link>
          </div>


          <div className="mt-auto flex flex-col items-center">

            <span className="sm:hidden inline-flex mt-6 w-full justify-center md:justify-start md:w-auto">
              <Link to={'https://www.linkedin.com/company/tech-render/'} className="ml-3 text-gray-900">
                <span className="sr-only">Instagram</span>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              {/* Linkedin */}
              <Link to={'https://www.linkedin.com/company/tech-render/'} className="ml-3 text-gray-900">
                <span className="sr-only">Linkedin</span>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>

          {/* ::Mobile separator line */}
          <span className="sm:hidden absolute -top-4 left-1/2 w-1/4 h-px bg-gray-400 transform -translate-x-1/2" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-2 gap-5 text-gray-900">
          <div className="hidden md:block col-span-2 md:col-span-1 pb-0 md:py-3 px-4 text-left sm:items-start">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-gray-900 font-bold tracking-wide">Folow Us</h3>
            <nav className="flex justify-around md:flex-col font-medium font-montserrat leading-8 list-none">
              <a href="#link" className="flex items-center text-gray-900 hover:text-gray-700">
                <span className="sr-only">Instagram</span>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
                <span className="ml-2  font-medium font-montserrat leading-8 tracking-[0.03em]">Instagram</span>
              </a>

              <Link to={'https://www.linkedin.com/company/tech-render/'} target='_blank' className="flex items-center text-gray-900 hover:text-gray-700">
                <span className="sr-only">Linkedin</span>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
                <span className="ml-2 font-medium font-montserrat leading-8 tracking-[0.03em]">Linkedin</span>
              </Link>
            </nav>
          </div>

          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col text-left sm:items-start">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-gray-900 font-bold tracking-wide">Services</h3>
            <nav className="flex justify-around flex-col items-center md:items-start font-normal sm:font-medium font-montserrat sm:leading-8 list-none">
              <li className="hover:text-gray-700 tracking-[0.03em]">Web Development</li>
              <li className="hover:text-gray-700 tracking-[0.03em]">App Development</li>
              <li className="hover:text-gray-700 tracking-[0.03em]">Visual Designing</li>
              <li className="hover:text-gray-700 tracking-[0.03em]">Project Management</li>
              <li className="hover:text-gray-700 tracking-[0.03em]">Maintenance</li>
            </nav>
          </div>
        </div>
      </div>

      <hr className="hidden md:block border-t-2 border-gray-200 my-2 mx-40 md:mt-10"></hr>
      <div className="flex flex-col justify-center lg:flex-row lg:space-x-72 mt-4 md:mt-10 pb-10 mx-10">
        <div className="text-sm md:text-lg font-montserrat">&copy;2024 Techrender.ai</div>
        <div className="text-sm md:text-lg font-montserrat">Terms of Service</div>
        <div className="text-sm md:text-lg font-montserrat">Privacy Policy</div>
      </div>

    </footer>
  )
}

export default FooterNew