import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function MoreProjects() {
    return (
        <Link
            to={'/projects'}
            className="relative overflow-hidden text-blue-100 shadow-xl inline-flex items-center font-montserrat cursor-pointer px-4 py-2 md:px-6 md:py-3 md:mb-0 md:mr-4 font-semibold md:font-bold text-sm md:text-xl leading-normal leading-trim uppercase tracking-wide rounded-full border border-white border-solid group hover:text-white-A700"
        >
            <span className="relative z-10">More Projects</span>
            <BsArrowRightCircleFill className="ml-2 text-lg md:text-2xl arrow-icon transition-transform duration-300 transform-g" />
        </Link>
    )
}

export default MoreProjects