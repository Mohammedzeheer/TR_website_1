import React from 'react';

function TeamTrust() {
    return (
        <>
            <div className='max-w-[1300px] mx-auto my-10'>
                <div className="flex flex-col md:flex-row px-5 mb-[-20px] md:mb-0 lg:px-28 lg:pt-28">
                    <img
                        src="/images/team.webp"
                        alt="Top Image"
                        className="w-full h-auto object-cover rounded-lg border-1 border-gray-500 mb-5 md:mb-0"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col md:flex-row p-5 sm:gap-5 lg:px-28 lg:pb-28">
                    <div className="relative w-full md:w-1/2">
                        <img
                            src="/images/designing.webp"
                            alt="Left Image"
                            className="w-full h-auto object-cover rounded-lg border-1 border-gray-500"
                            loading="lazy"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-5 mt-5 md:mt-0">
                        <img
                            src="/images/wemake.webp"
                            alt="Right Image 1"
                            className="w-full h-auto rounded-lg object-cover"
                            loading="lazy"
                        />
                        <img
                            src="/images/agile.webp"
                            alt="Right Image 2"
                            className="w-full h-auto rounded-lg object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamTrust;