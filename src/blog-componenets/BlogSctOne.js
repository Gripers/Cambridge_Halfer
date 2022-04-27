import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import boy from "../img/boy-study.jpg";
import girl from "../img/girl-study.jpg";
import students from "../img/students-study.jpg";

const BlogSctOne = () => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="first-div gx-5 col-lg-5 col-md-4 col-sm-12">
            <div class="card-overlay">
              <Link to="/alone">Как выучить английский язык в одиночку?</Link>{" "}
              <p>07 Dec 2021</p>
            </div>
          </div>
          <div className="second-div gx-5 col-lg-3 col-md-4 col-sm-12">
            <div class="card-overlay">
              <Link to="/orfograf">
                Знаете ли вы, как проверить орфографические ошибки в английском
                языке?
              </Link>{" "}
              <p>07 Dec 2021</p>
            </div>
          </div>
          <div className="third-div gx-5 col-lg-3 col-md-4 col-sm-12">
            <div class="card-overlay">
              <Link to="/joke">Как шутить на английском?</Link>
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
      background: url(${girl}) no-repeat center/cover;
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
export default BlogSctOne;
