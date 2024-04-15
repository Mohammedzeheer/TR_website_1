import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function LetsTalk() {
    return (
        <Link to={'/contact_us'} className="relative overflow-hidden bg-deep_purple-800 text-white-A700 shadow-bs1 inline-flex items-center font-Montserrat cursor-pointer px-4 py-2 font-semibold md:font-bold text-sm md:text-xl leading-normal leading-trim uppercase tracking-wide rounded-full hover:bg-blue-700 md:px-6 md:py-3">
            <span className="relative z-10">LET’S TALK</span>
            <BsArrowRightCircleFill className="ml-2 text-lg md:text-2xl" />
        </Link>
    )
}

export default LetsTalk