import React, { Suspense } from "react";
import CardList from "../components/RecentProject/CardList;";
import ProjectCarousel from "../components/HeroSection/ProjectCarousel";
import Explore from "../components/HeroSection/Explore";
import ReadyToCollabrate from "../components/AboutUs/ReadyToCollabrate";
import BackToTop from "../components/BackToTop";
import Loader from "../components/Loader";

const Projects = () => {
  return (
    <div>
      <BackToTop />
      <Suspense fallback={<div className='h-screen'> <Loader /></div>}>
        <Explore
          backgroundColor=""
          titleColor=""
          descriptionColor=""
          title="Case Studies"
          description="Explore how our innovative solutions have addressed unique challenges for our clients."
        />
        <ProjectCarousel bg_Color="white-A700" />
        <CardList />
        <ReadyToCollabrate />
      </Suspense>
    </div>
  );
};

export default Projects;