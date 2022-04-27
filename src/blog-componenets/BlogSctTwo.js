import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import boy from "../img/boy-england.jpg";
import students from "../img/university.jpg";
import offline from "../img/offline.jpg";

const BlogSctTwo = () => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="first-div gx-5 col-lg-3 col-md-4 col-sm-12">
            <div class="card-overlay">
              <Link to="/pronuncation">Вот как произносятся эти слова на английском языке.</Link>{" "}
              <p>07 Dec 2021</p>
            </div>
          </div>
          <div className="second-div gx-5 col-lg-5 col-md-4 col-sm-12">
            <div class="card-overlay">
              <Link to="/effect">
              14 эффективных способов выучить английский язык
              </Link>{" "}
              <p>07 Dec 2021</p>
            </div>
          </div>
          <div className="third-div gx-5 col-lg-3 col-md-4 col-sm-12">
            <div class="card-overlay">
              <Link to="/offline">Об онлайн и оффлайн образовании</Link>
              <p>07 Dec 2021</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 5%;

  .row {
    width: 100%;
    height: 100%;
    grid-gap: 20px;
    margin: 0 auto;
    .first-div {
      position: relative;
      background: url(${boy}) no-repeat center/cover;
      max-width: 100%;
      height: 50vh;
      padding: 0;
      .card-overlay {
        position: absolute;
        bottom: 0;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          #111111 90.62%
        );
        min-width: 100%;
        padding: 1vh;
        a {
          font-size: 20px;
          color: white;
          text-decoration: none;
        }
        p {
          color: #d2d2d2;
        }
      }
    }
    .second-div {
      position: relative;
      background: url(${students}) no-repeat center/cover;
      max-width: 100%;
      height: 50vh;
      padding: 0;
      .card-overlay {
        position: absolute;
        bottom: 0;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          #111111 90.62%
        );
        min-width: 100%;
        padding: 1vh;
        a {
          font-size: 20px;
          color: white;
          text-decoration: none;
        }
        p {
          color: #d2d2d2;
        }
      }
    }
    .third-div {
      position: relative;
      background: url(${offline}) no-repeat center/cover;
      max-width: 100%;
      height: 50vh;
      padding: 0;
      .card-overlay {
        position: absolute;
        bottom: 0;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          #111111 90.62%
        );
        min-width: 100%;
        padding: 1vh;
        a {
          font-size: 20px;
          color: white;
          text-decoration: none;
        }
        p {
          color: #d2d2d2;
        }
      }
    }
  }

  @media (min-width: 500px) and (max-width: 576px) {
    .row {
      width: 90%;
      margin: 0 auto;
    }
  }

  @media all and (max-width: 500px) {
      .row {
          width: 80%;
          margin: 0 auto;
      }
  }
`;
export default BlogSctTwo;
