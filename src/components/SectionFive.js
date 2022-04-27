import React from "react";
import styled from "styled-components";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import drujba from "../img/drujba.jpg";
import darxan from "../img/darxon.jpg";
import tinchlik from "../img/tinchlik.jpg";
import oybek from "../img/oybek.jpg";

import street from "../img/location.svg";
import metro from "../img/metro.svg";
import search from "../img/search.svg";

const SectionFive = () => {
  const options = {
    items: 2,
    loop: true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      1410: {
        items: 2,
      },
    },
  };

  return (
    <Section id="filials">
      <h1 className="glav">
        Где находится <br /> учебный центр “Cambridge”?
      </h1>
      <p className="phara">Как с нами связаться?</p>
      <OwlCarousel className="owl-carousel row" {...options}>
        <div className="item">
          <div className="left">
            <img src={drujba} alt="" />
          </div>
          <div className="right">
            <h2>Дружба Народов</h2>
            <div className="location">
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={street} alt="" />
                  <p>Улица:</p>
                </div>
                <div className="mini-end">
                  <p>Фуркат, 5/6</p>
                </div>
              </div>
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={metro} alt="" />
                  <p>Метро:</p>
                </div>
                <div className="mini-end">
                  <p>Дружба Народов</p>
                </div>
              </div>
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={search} alt="" />
                  <p>Ориентир:</p>
                </div>
                <div className="mini-end">
                  <p>
                    Дворец Дружба <br /> Народов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img src={darxan} alt="" />
          </div>
          <div className="right">
            <h2>Дархан</h2>
            <div className="location">
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={street} alt="" />
                  <p>Улица:</p>
                </div>
                <div className="mini-end">
                  <p>Мустакиллик, 3</p>
                </div>
              </div>
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={metro} alt="" />
                  <p>Метро:</p>
                </div>
                <div className="mini-end">
                  <p>Хамид Алимджан</p>
                </div>
              </div>
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={search} alt="" />
                  <p>Ориентир:</p>
                </div>
                <div className="mini-end">
                  <p>ЗАГС</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img src={tinchlik} alt="" />
          </div>
          <div className="right">
            <h2>Тинчлик</h2>
            <div className="location">
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={street} alt="" />
                  <p>Улица:</p>
                </div>
                <div className="mini-end">
                  <p>Беруний, 35а</p>
                </div>
              </div>
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={metro} alt="" />
                  <p>Метро:</p>
                </div>
                <div className="mini-end">
                  <p>Тинчлик</p>
                </div>
              </div>
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={search} alt="" />
                  <p>Ориентир:</p>
                </div>
                <div className="mini-end">
                  <p>"Райхон" кафеси</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img src={oybek} alt="" />
          </div>
          <div className="right">
            <h2>Ойбек</h2>
            <div className="location">
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={street} alt="" />
                  <p>Улица:</p>
                </div>
                <div className="mini-end">
                  <p>Миробод 2/1</p>
                </div>
              </div>
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={metro} alt="" />
                  <p>Метро:</p>
                </div>
                <div className="mini-end">
                  <p>Ойбек</p>
                </div>
              </div>
              <div className="mini-cardon">
                <div className="mini-start">
                  <img src={search} alt="" />
                  <p>Ориентир:</p>
                </div>
                <div className="mini-end">
                  <p>
                    Гостиница <br /> "Гранд Мир"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 5%;

  .glav {
    font-size: 48px;
    text-align: center;
    font-weight: bolder;
    color: black;
  }

  .phara {
    font-size: 16px;
    text-align: center;
  }

  .owl-carousel {
    margin-top: 5%;
  }

  .item {
    width: 687px;
    display: flex;
    justify-content: space-between;
    border: none;
    border-radius: 30px;
    margin: 0 auto !important;
    background-color: white;
    text-align: start;
    .left {
      width: 100%;
      img {
        width: 100%;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
      }
    }
    .right {
      width: 100%;
      display: grid;
      padding: 3vh;
      h2 {
        font-size: 26px;
        font-weight: bold;
        color: black;
      }
      .location {
        display: grid;
        .mini-cardon {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .mini-start {
            width: 25%;
            display: flex;
            justify-content: space-between;
            padding-top: 2%;
            img {
              max-width: 16px;
              max-height: 16px;
            }
            p {
              font-size: 10px;
              color: #b3b3b3;
            }
          }
          .mini-end {
            width: 50%;
            p {
              font-size: 17px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 500px) and (max-width: 720px) {
    .glav {
      font-size: x-large;
    }
    .item {
      display: block;
      width: 60%;
      height: 100% !important;
      text-align: center;
      .left {
        margin: 0 auto;
        width: 100%;
        img {
          width: 100%;
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        }
      }
      .right {
        .location {
          padding-top: 5%;
        }
      }
    }
  }

  @media all and (max-width: 500px) {
    max-width: 100% !important;
    margin-top: 10%;

    .glav {
      font-size: 26px;
      color: black;
      font-weight: bolder;
      line-height: 40px;
    }

    .item {
      width: 80%;
      height: 100%;
      display: block;
      margin: 0 auto;
      text-align: center;
      .left {
        img {
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        }
      }
      .right {
        .location {
          padding-top: 10%;
          display: grid;
          grid-gap: 10px;
          .mini-cardon {
            .mini-end {
              width: 100%;
              p {
                font-size: 17px;
              }
            }
          }
        }
      }
    }
  }
`;

export default SectionFive;
