import React from "react";

import testone from "../img/akramjon.png";
import testtwo from "../img/abdulaziz.png";
import testthree from "../img/eldor.png";
import testfour from "../img/malika.png";
import testfive from "../img/marjona.png";
import testsix from "../img/mubina.png";
import testseven from "../img/rayxona.png";
import testeight from "../img/dinara.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import styled from "styled-components";

const SectionThree = () => {
  const options = {
    items: 2,
    loop: true,
    dots: false,
    nav: false,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      1400: {
        items: 2,
      },
    },
  };

  return (
    <Section id="students">
      <h1 className="glav">Наши студенты</h1>
      <p className="phara">
        Наши студенты выиграли ГРАНТЫ в ТОПовых университетах мира. <br />{" "}
        Удостоились поступить в ВУЗы Великобритании, США и других <br />{" "}
        передовых стран и получали баллы до 8.5 по IELTS. Большинство наших{" "}
        <br /> студентов являются студентами ВУЗов как Вестминстер, MDIST и{" "}
        <br /> других зарубежных университетов страны.
      </p>
      <OwlCarousel
        style={{ marginTop: "5%" }}
        className="owl-carousel"
        {...options}
      >
        <div className="item">
          <div className="left">
            <img src={testone} alt="" />
          </div>
          <div className="right">
            <h1>
              Abdurakhimov <br /> Akramjon
            </h1>
            <div className="results">
              <p>
                Listening: <span>8.5</span>
              </p>
              <p>
                Reading: <span>8.5</span>
              </p>
              <p>
                Writing: <span>6.0</span>
              </p>
              <p>
                Speaking: <span>5.5</span>
              </p>
            </div>
            <p className="bandscore">
              Bandscore: <span>7.0</span>
            </p>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img src={testtwo} alt="" />
          </div>
          <div className="right">
            <h1>
              Olimov <br /> Abdulaziz
            </h1>
            <div className="results">
              <p>
                Listening: <span>8.5</span>
              </p>
              <p>
                Reading: <span>8.0</span>
              </p>
              <p>
                Writing: <span>6.5</span>
              </p>
              <p>
                Speaking: <span>7.5</span>
              </p>
            </div>
            <p className="bandscore">
              Bandscore: <span>7.5</span>
            </p>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img src={testthree} alt="" />
          </div>
          <div className="right">
            <h1>
              Xaitov <br /> Eldor
            </h1>
            <div className="results">
              <p>
                Listening: <span>8.5</span>
              </p>
              <p>
                Reading: <span>8.0</span>
              </p>
              <p>
                Writing: <span>6.0</span>
              </p>
              <p>
                Speaking: <span>6.5</span>
              </p>
            </div>
            <p className="bandscore">
              Bandscore: <span>7.5</span>
            </p>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img src={testfour} alt="" />
          </div>
          <div className="right">
            <h1>
              Xakimova <br /> Malika
            </h1>
            <div className="results">
              <p>
                Listening: <span>8.5</span>
              </p>
              <p>
                Reading: <span>9.0</span>
              </p>
              <p>
                Writing: <span>6.0</span>
              </p>
              <p>
                Speaking: <span>7.0</span>
              </p>
            </div>
            <p className="bandscore">
              Bandscore: <span>7.5</span>
            </p>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img src={testfive} alt="" />
          </div>
          <div className="right">
            <h1>
              Alikulova <br /> Marjona
            </h1>
            <div className="results">
              <p>
                Listening: <span>8.5</span>
              </p>
              <p>
                Reading: <span>6.5</span>
              </p>
              <p>
                Writing: <span>6.5</span>
              </p>
              <p>
                Speaking: <span>6.5</span>
              </p>
            </div>
            <p className="bandscore">
              Bandscore: <span>7.0</span>
            </p>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img src={testsix} alt="" />
          </div>
          <div className="right">
            <h1>
              Ashurkhujayeva <br /> Mubina
            </h1>
            <div className="results">
              <p>
                Listening: <span>7.0</span>
              </p>
              <p>
                Reading: <span>8.0</span>
              </p>
              <p>
                Writing: <span>6.0</span>
              </p>
              <p>
                Speaking: <span>7.5</span>
              </p>
            </div>
            <p className="bandscore">
              Bandscore: <span>7.0</span>
            </p>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img src={testseven} alt="" />
          </div>
          <div className="right">
            <h1>
              Ramatullayeva <br /> Rayxona
            </h1>
            <div className="results">
              <p>
                Listening: <span>7.5</span>
              </p>
              <p>
                Reading: <span>8.0</span>
              </p>
              <p>
                Writing: <span>6.5</span>
              </p>
              <p>
                Speaking: <span>7.0</span>
              </p>
            </div>
            <p className="bandscore">
              Bandscore: <span>7.5</span>
            </p>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img src={testeight} alt="" />
          </div>
          <div className="right">
            <h1>
              Shigabutdinova <br /> Dinara
            </h1>
            <div className="results">
              <p>
                Listening: <span>8.5</span>
              </p>
              <p>
                Reading: <span>9.0</span>
              </p>
              <p>
                Writing: <span>7.5</span>
              </p>
              <p>
                Speaking: <span>9.0</span>
              </p>
            </div>
            <p className="bandscore">
              Bandscore: <span>9.0</span>
            </p>
          </div>
        </div>
      </OwlCarousel>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 5%;

  .glav {
    text-align: center;
    font-weight: bolder;
    color: black;
    font-size: 48px;
  }
  .phara {
    font-size: 16px;
    text-align: center;
  }

  .owl-carousel {
  }

  .item {
    margin: 0 auto;
    margin-bottom: 5%;
    padding: 3vh;
    display: flex;
    justify-content: space-between;
    width: 687px;
    height: 341px;
    background-color: white;
    border-radius: 30px;
    border: none;
    box-shadow: 28px 17px 34px -19px rgb(0 0 0 / 10%);
    .left {
      width: 50%;
      img {
        max-width: 285px;
        height: 306px;
      }
    }
    .right {
      width: 40%;
      display: grid;
      height: 100%;
      h1 {
        font-size: 26px;
        font-weight: bold;
        color: black;
      }
      .results {
        display: grid;
        p {
          font-size: 18px;
          span {
            font-weight: bolder;
            color: black;
          }
        }
      }
      .bandscore {
        font-size: 18px;
        span {
          font-size: 36px;
          color: black;
          font-weight: bolder;
        }
      }
    }
  }

  @media all and (max-width: 500px) {
    margin-top: 12%;

    .glav {
      font-size: 22px;
    }

    p {
      width: 80%;
      text-align: center;
      margin: 0 auto;
    }

    .item {
      display: block;
      width: 70%;
      height: 100%;
      .left {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .right {
        width: 100%;
        padding-top: 10%;
        h1 {
          font-size: 22px;
          text-align: start;
        }
        .results {
          width: 50%;
          p {
            width: 100%;
            font-size: 15px;
            display: flex;
            justify-content: space-between;
          }
        }
        .bandscore {
          width: 100%;
          text-align: start;
          font-size: 15px;
        }
      }
    }
  }
`;

export default SectionThree;
