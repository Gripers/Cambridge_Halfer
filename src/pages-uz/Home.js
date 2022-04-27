import React from "react";
import FooterUz from "../components-uz/Footer";
import HeaderUz from "../components-uz/Header";
import NavbarUz from "../components-uz/Navbar";
import SectionFiveUz from "../components-uz/SectionFive";
import SectionFourUz from "../components-uz/SectionFour";
import SectionOneUz from "../components-uz/SectionOne";
import SectionThreeUz from "../components-uz/SectionThree";
import SectionTwoUz from "../components-uz/SectionTwo";

const HomeUz = () => {
  return (
    <div>
      <NavbarUz />
      <HeaderUz />
      <SectionOneUz />
      <SectionTwoUz />
      <SectionThreeUz />
      <SectionFourUz />
      <SectionFiveUz />
      <FooterUz />
    </div>
  );
};

export default HomeUz;
