import React from "react";




const SectionTwo = ({ datas }) => {

    return (
        <>
            {/* <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-center p-14 md:px-10 sm:px-5 rounded-[16px] shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row sm:flex-row md:gap-10 gap-[88px] items-start justify-start mb-2 mt-[3px] w-auto md:w-full sm:items-center">

                    {datas.map((data) => {
                        return (
                            <div className="flex flex-col gap-4 items-start justify-start w-auto text-start ">
                                <p className="text-gray-900 text-lg tracking-[0.54px] w-auto font-montserrat font-normal">
                                    {data.text}
                                </p>
                                <p className={data.pClass}>
                                    <>
                                        {data.name1}
                                        <br />
                                        {data.name2}
                                    </>
                                </p>
                            </div>
                        )
                    })}

                </div>
            </div> */}


<div class="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-center p-14 md:px-10 sm:px-5 rounded-[16px] shadow-bs1 mt-10 sm:mt-0 w-[90%] mx-auto">
    <div class="flex flex-col md:flex-row sm:flex-col md:gap-10 gap-[88px] items-center justify-around mb-2 mt-[3px] w-auto md:w-full sm:items-center">
        {datas.map((data) => {
            return (
                <div class="flex flex-col gap-4 items-start justify-start w-full md:w-auto sm:w-full text-start">
                    <p class="text-gray-900 text-lg tracking-[0.54px] w-full font-montserrat font-normal">
                        {data.text}
                    </p>
                    <p class={data.pClass}>
                        <>
                            {data.name1}
                            <br />
                            {data.name2}
                        </>
                    </p>
                </div>
            )
        })}
    </div>
</div>

        </>
    );
};

export default SectionTwo;
