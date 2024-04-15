import React from 'react'

function OurTechnology() {
    return (
        <div className='bg-gray-900 '>
            <div className="max-w-[1300px] mx-auto  py-4 sm:py-14">
                <img
                    src="/images/technologyStacks.webp"
                    alt="Placeholder"
                    className="hidden sm:block w-full h-full object-cover"
                />
                <img
                    src="/images/ourStack.webp"
                    alt="Placeholder"
                    className="sm:hidden w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

export default OurTechnology