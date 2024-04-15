import React, { Suspense } from 'react';
import { usersResponse } from '../constants/userResponse'
import Fade from "react-reveal/Fade";
import BackToTop from '../components/BackToTop';
import Loader from '../components/Loader';
import ChatBox from '../components/Chat/ChatBox';
const LazyHeroOne = React.lazy(() => import('../components/HeroSection/SectionOne'));
const LazyProjectCarousel = React.lazy(() => import('../components/HeroSection/ProjectCarousel'));
const LazyHomeSection1 = React.lazy(() => import('../components/Home/HomeSection1'));
const LazyHomeSection2 = React.lazy(() => import('../components/Home/HomeSection2'));
const LazyHomeSection3 = React.lazy(() => import('../components/Home/HomeSection3'));
const LazyTestimonyCarousel = React.lazy(() => import('../components/TestimonyCarousel'));
const LazyHomeSection4 = React.lazy(() => import('../components/Home/HomeSection4'));
const LazyDontLet = React.lazy(() => import('../components/DontLet'));
const LazyExplore = React.lazy(() => import('../components/HeroSection/Explore'));

const Home = () => {
  return (
    <div>
      <BackToTop />
      <ChatBox />
      <Suspense fallback={<div className='h-screen'> <Loader /></div>}>
        <LazyHeroOne />
        <LazyExplore
          backgroundColor="gray-900"
          titleColor="blue-400"
          descriptionColor="gray-500"
          title="Explore What We Have Done"
          description="See how we have worked on projects for clients."
        />

        {/* <CarouselControlsOutside/> */}
        <LazyProjectCarousel bg_Color='gray-900' />
        <LazyHomeSection1 />
        <LazyHomeSection2 />
        <Fade top distance='5%' duration={1000}>
          <LazyHomeSection3 />
        </Fade>
        <div className="carousel-container">
          <LazyTestimonyCarousel users={usersResponse} />
        </div>

        <div className="relative">
          <div className="sm:sticky top-0">
            <LazyHomeSection4
              backgroundImage="/images/Bluebkg.webp"
              imageUrl="/images/3Dcircless.webp"
              title="We’re a design driven team"
              firstHeading=" Designing world-class products & brands"
              firstDescription="We’ve helped top startups and other enterprises turn their ideas and goals into refined products and brands that generate millions in revenue."
              secondHeading="Pushing boundaries & designers everywhere"
              secondDescription="Our designs are inspiring millions of people across social media and product teams. We shape new trends and push the boundaries."
            />
          </div>
          <div className="sm:sticky top-0 ">
            <LazyHomeSection4
              backgroundImage="/images/Darkblue.webp"
              imageUrl="/images/feasble.webp"
              title="We get things done, fast & feasible "
              firstHeading="Agile and transparent"
              firstDescription="Forget a useless 80-slide presentation. We focus on design deliverables every week. And when we commit to a deadline, we make it happen. Always."
              secondHeading="Flexible collaboration & payments"
              secondDescription="Whether you're starting from scratch and need an autonomous team or are looking for staff augmentation with a lot of collaboration, we've got you covered."
            />
          </div>
          <div className="sm:sticky top-0 ">
            <LazyHomeSection4
              backgroundImage="/images/Darkblue2.webp"
              imageUrl="/images/affordnew.webp"
              title="We made world-class services affordable."
              firstHeading="We make the complex simple"
              firstDescription="From neurotech companies to admin tools with intricate access policies, we understand your product and simplify it for the people who use it."
              secondHeading="Commited to putting a smile on people’s faces"
              secondDescription="Get continuous high-quality design & fast turnaround at a flat rate to help scale your business. It helps you save time on hiring and career laddering and avoid the hustle of dealing with expensive agencies."
            />
          </div>
        </div>
        <LazyDontLet />

      </Suspense>
    </div>
  );
};

export default Home;