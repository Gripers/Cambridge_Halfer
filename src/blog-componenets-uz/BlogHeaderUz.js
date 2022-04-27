import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import city from "../img/bg-blog.jpg";

const BlogHeaderUz = () => {
  return (
    <Head>
      <div className="container">
        <h1 className="glav">Blog</h1>
        <div className="cardons row">
          <div className="left col-lg-6 col-md-12">
            <div className="cardon">
              <Link to="/headerdivfirstuz">
                Dunyoning istalgan mamlakatiga sayohat qilish uchun bularni siz
                bilishingiz kerak
              </Link>
              <p>28 Dec 2021</p>
              <hr />
            </div>
            <div className="cardon">
              <Link to="/headerdivseconduz">
                O‘zingizni ingliz tilida tanishtirish — til o‘rganishning muhim
                bosqichi
              </Link>
              <p>28 Dec 2021</p>
              <hr />
            </div>
            <div className="cardon">
              <Link to="/headerdivthirduz">
                “Arzimaydi” deb aytishning 19 ta usuli
              </Link>
              <p>7 Dec 2021</p>
              <hr />
            </div>
          </div>
          <div className="right col-lg-6 col-md-12">
            <img className="w-75" src={city} alt="" />
          </div>
        </div>
      </div>
    </Head>
  );
};

const Head = styled.div`
  padding-top: 7%;

  .glav {
    text-align: center;
    font-weight: bold;
  }

  .cardons {
    padding-top: 3%;
    .left {
      display: grid;
      padding: 3vh;
      align-items: center;
      .cardon {
        a {
          font-size: 24px;
          font-weight: bold;
          color: black;
          text-decoration: none;
        }
        p {
          font-size: 16px;
          color: #999999;
        }
      }
    }
    .right {
      text-align: center;
    }
  }
`;

export default BlogHeaderUz;
