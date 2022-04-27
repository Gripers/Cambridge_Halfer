import React from "react";
import Header from "../team-components/Header";
import SectionOne from "../team-components/SectionOne";
import Footer from "../components/Footer";
import TeamNav from "../team-components/TeamNav";
import SectionTwo from "../team-components/SectionTwo";

const Team = () => {
  return (
    <div>
      <TeamNav />
      <Header />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
};

export default Team;
