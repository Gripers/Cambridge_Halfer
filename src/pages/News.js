import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import NewsNav from "../news-components/NewsNav";
import Header from "../news-pages/Header";
import Section from "../news-pages/Section";

const News = () => {
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

export default News;
