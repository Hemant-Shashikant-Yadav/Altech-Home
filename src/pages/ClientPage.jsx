import React from "react";
import Navbar from "../components/Navbar";
import Review from "../components/Review";
import TestimonialsPage from "../components/TestimonialsPage";
import CollaborationSection from "../components/CollaborationSection";
import AnimatedHeader from "../components/AnimatedHeader";
import Footer from "../components/Footer";
import Container from "../components/ui/Container";

const ClientPage = () => {
  return (
    <>
      <Container>
        <Review />
        <TestimonialsPage />
      </Container>

      <div className="bg-black">
        <Container>
          <AnimatedHeader />
        </Container>
      </div>
      <CollaborationSection />
    </>
  );
};

export default ClientPage;
