import React from 'react'
import img3 from '../assets/images/img_frame14292.svg'
import img1 from '../assets/images/img_leave2.png'
import img2 from '../assets/images/img_onboarding2.png'

const snapTrackCard = (props) => {
  return (
    <>
      <div className={props.className}>
        {/* bg-gradient2 */}
        <div className="absolute bg-indigo-900 border border-indigo-900 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[7px] rounded-[24px] shadow-bs2 w-96">

          <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mt-[69px] w-[84%] md:w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <p
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.96px] w-auto font-bold font-montserrat"
              >
                SnapTracks
              </p>
              <p
                className="leading-[160.00%] max-w-[294px] md:max-w-full text-base text-white-A700 tracking-[-0.48px] font-montserrat font-normal"
              >
                A SAAS based state-of-the-art attendance and payroll management software.
              </p>
            </div>
            <div className="flex flex-row items-start justify-between w-3/4 md:w-full">

              <img
                className="h-[194px] md:h-auto mt-6 object-cover rounded-[10px]"
                src={img2}
                alt="onboardingTwo"
              />
              <img
                className="h-[191px] md:h-auto object-cover rounded-[10px]"
                src={img1}
                alt="leaveTwo"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute h-16 left-[9%] rounded-[12px] top-[0]"
          src={img3}
          alt="frame14292"
        />
      </div>
    </>
  )
}

export default snapTrackCard