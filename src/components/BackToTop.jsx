import React, { useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-5 bg-gray-200 text-white p-3 rounded-full shadow-md hover:bg-deep_purple-800 hover:text-white-A700 focus:outline-none focus:bg-gray-600"
          style={{ zIndex: 9999 }}
        >
          <HiArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;