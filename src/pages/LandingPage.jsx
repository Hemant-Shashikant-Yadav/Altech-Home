import React from "react";
import Navbar from "../components/Navbar";
import ScalableSolutions from "../components/ScalableSolutions";
import AboutUsSection from "../components/AboutUsSection";
import ServicesPage from "../components/ServicesPage";
import FutureSolutions from "../components/FutureSolutions";
import ServicesSections from "../components/ServicesSections";
import TestimonialsSection from "../components/TestimonialsSection";
import IndustriesSection from "../components/IndustriesSection";
import CollaborationSectionHome from "../components/CollaborationSectionHome";
import Footer from "../components/Footer";
import { sections } from "../data/sections";
import Container from "../components/ui/Container";

const LandingPage = () => {
  return (
    <>
      <Container>
        <ScalableSolutions />
        <div className="bg-white">
          <AboutUsSection />
        </div>
        <ServicesPage />
        <FutureSolutions />
      </Container>
      
      <div className="w-full bg-black">
        <Container>
          <ServicesSections sections={sections} />
        </Container>
      </div>
      
      <Container>
        <IndustriesSection />
        <TestimonialsSection />
        <CollaborationSectionHome />
      </Container>
    </>
  );
};

export default LandingPage;
