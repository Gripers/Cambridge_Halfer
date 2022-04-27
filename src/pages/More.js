import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import lion from "../img/big-lion.png";
import NewsNav from "../news-components/NewsNav";
import back from "../img/undo.png";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <Mored>
        <NewsNav />
        <div className="imageer">
          <img src={lion} alt="" />
          <p>23 Feb 2022</p>
          <Link to="/news"><img src={back} alt="" /></Link>
        </div>
        <Footer />
    </Mored>
  );
};

const Mored = styled.div`

  .imageer {
    padding-top: 7% !important;
    text-align: center;
    line-height: 100px;
    p {
      font-size: 16px;
      color: #999;
    }
    img {
      width: 40%;
    }
    a {
      img {
        width: 3%;
      }
    }
  }

  @media (min-width: 500px) and (max-width: 1200px) {
    .imageer {
      padding-top: 15% !important;
    }
  }

  @media all and (max-width: 500px) {
    .imageer {
      padding-top: 30% !important;
      img {
        width: 80% !important;
      }
      a {
        img {
          width: 10% !important;
        }
      }
    }
  }
`;

export default More;
