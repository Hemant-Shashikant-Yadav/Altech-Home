import React from "react";
import Navbar from "../components/Navbar";
import TrustedSection from "../components/TrustedSection";
import SmartKisan from "../components/SmartKisan";
import CollaborationSection from "../components/CollaborationSection";
import Footer from "../components/Footer";
import Container from "../components/ui/Container";

const WorkPage = () => {
  return (
    <>
      <Container>
        <TrustedSection />
      </Container>
      <div className="bg-black">
        <Container>
          <SmartKisan />
        </Container>
      </div>
      <Container>
        <CollaborationSection />
      </Container>
    </>
  );
};

export default WorkPage;
