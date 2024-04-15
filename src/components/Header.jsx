import React, {useState, useEffect } from 'react';
import logo from "../assets/images/TR_logo.webp";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import {Link, useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const Location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const smoothScroll = () => {
      const target = document.getElementById('services');
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    const servicesLink = document.querySelector('a[href="#services"]');
    if (servicesLink) {
      servicesLink.addEventListener('click', smoothScroll);
    }

    return () => {
      if (servicesLink) {
        servicesLink.removeEventListener('click', smoothScroll);
      }
    };
  }, []);

  return (

    <nav className="bg-white-A700 py-2 sm:py-4 border-b-2 shadow-bs ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <Link to={'/'} className="flex-shrink-0">
            <img src={logo} alt="Logo" className="w-40 sm:w-56 h-auto " />
          </Link>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
              {isOpen ? (

                <CgCloseO className='w-8 h-8 text-blue-500' />
              ) : (
                <CgMenuRound className='w-8 h-8 text-blue-500' />
              )}

            </button>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/about_us"
                className={`text-gray-900  hover:text-deep_purple-800 px-4 py-2 rounded-full uppercase font-medium font-montserrat text-xl tracking-[-0.60px] ${Location.pathname == "/about_us" ? "text-indigo-600" : "text-brand-darkblue"}`}
              >
                ABOUT US
              </Link>
              <Link
                to="/projects"
                className={`text-gray-900 hover:text-deep_purple-800 px-4 py-2 rounded-full uppercase font-medium font-montserrat text-xl tracking-[-0.60px] ${Location.pathname == "/projects" ||
                  /^\/projects\/.*/.test(Location.pathname) ? "text-indigo-600" : "text-brand-darkblue"
                  }`}
              >
                PROJECTS
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="hidden md:block justify-end w-full">

                <Link to={'/contact_us'} className="py-2 px-5 bg-deep_purple-800 text-white-A700  hover:bg-white-A700 border-2 border-deep_purple-800 hover:text-deep_purple-800  cursor-pointer font-medium font-montserrat rounded-[23px] text-center text-xl tracking-[0.60px]">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ml-[70%]">
            <Link to={'/about_us'} className="text-gray-900  hover:deep_purple-800 block px-3 py-1 rounded-md uppercase font-medium font-montserrat  text-xs  tracking-[-0.60px]">About Us </Link>
            <Link to={'/projects'} className="text-gray-900  hover:deep_purple-800 block px-3 py-1 rounded-md uppercase font-medium font-montserrat  text-xs tracking-[-0.60px]">PROJECTS </Link>
            <Link to={'/contact_us'} className="px-2 py-1 bg-deep_purple-800 hover:bg-blue-700 text-white-A700 cursor-pointer font-medium  rounded-full text-center text-[9px] tracking-[0.60px]">
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>

  );
}

export default Header;