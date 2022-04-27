import React from "react";
import styled from "styled-components";
import Footer from "../components-uz/Footer";
import NewsNav from "../news-components-uz/NewsNav";
import Header from "../news-pages-uz/Header";
import Section from "../news-pages-uz/Section";

const NewsUz = () => {
  return (
    <div>
      <NewsNav />
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

const Newser = styled.div``;

export default NewsUz;
