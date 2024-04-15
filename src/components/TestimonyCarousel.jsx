import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonyCarousel = ({ users }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: 'slick-dots custom-dots'
  };

  return (
     <Slider {...settings}>
      {users.map((user, index) => (
        <div key={index} className='py-16 px-4 max-w-[1300px] mx-auto'>
            <div className="sm:w-[73%] sm:h-auto bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-10 px-2 sm:px-5 rounded-[24px] shadow-lg mx-auto">
              <div className="flex flex-col gap-6 items-center justify-start mt-[5px] w-full md:w-full px-3">
                <p className="sm:leading-[160.00%] leading-[140.00%]  md:max-w-[90%] text-md md:text-[22px] text-center text-gray-900 sm:text-2xl tracking-[-0.72px] font-medium font-montserrat">
                  &quot;{user.comment}&quot;
                </p>
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <p className="text-gray-900_87 text-lg tracking-[-0.54px] w-auto font-medium font-montserrat">{user.name}</p>
                    <p className="text-gray-900 text-lg w-auto font-montserrat font-semibold">{user.desg}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonyCarousel;