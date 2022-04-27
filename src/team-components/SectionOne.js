import React from "react";
import styled from "styled-components";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import star from "../img/star.svg";
import file from "../img/file.svg";
import shield from "../img/shield.svg";

import first from "../img/1.png";
import second from "../img/2.png";
import third from "../img/3.png";
import fourth from "../img/4.png";
import fifth from "../img/5.png";
import sixth from "../img/6.png";

const SectionOne = () => {
  const options = {
    loop: true,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
  };

  return (
    <Section id="our-team">
      <div className="container">
        <h1 className="glav">Наша команда</h1>
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">ПОЧЕТНЫЕ УЧИТЕЛЯ</h4>
              <h4 className="teacher">Абдулхамидов Абдулборий</h4>
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Опыт: </span> 7 лет
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Достижения: </span> IELTS 8.0, 500+ учеников, у
                    учениках баллы IELTS 7.0-8.5
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Сильные стороны: </span> IELTS rocket. Ответственный,
                    требовательный, строгий со своими учениками.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={first} alt="" />
              </div>
            </div>
          </div>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">ПОЧЕТНЫЕ УЧИТЕЛЯ</h4>
              <h4 className="teacher">Юлдашева Лобар</h4>{" "}
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Опыт: </span> 6 лет
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Достижения: </span> IELTS 8.5. Выпускник
                    Вестминтерского, магистерского Колумбийского университета,
                    педагогического колледжа и магистерского университета
                    Вебстера.
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Сильные стороны: </span> Интерактивные уроки.
                    Позитивный и сильный специалист.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={second} alt="" />
              </div>
            </div>
          </div>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">ПОЧЕТНЫЕ УЧИТЕЛЯ</h4>
              <h4 className="teacher">Эркинов Сардор</h4>{" "}
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Опыт: </span> 5 лет
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Достижения: </span> 1000+ студентов. 200 из них были
                    приняты в университет. У учениках баллы IELTS 7.0-8.5
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Сильные стороны: </span> Опыт работы в английских
                    странах. IELTS writing. Умение объяснять темы - высокое
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={third} alt="" />
              </div>
            </div>
          </div>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">ПОЧЕТНЫЕ УЧИТЕЛЯ</h4>
              <h4 className="teacher">Бердикулова Нодира</h4>{" "}
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Опыт: </span> 7 лет
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Достижения: </span> 2000+ студентов. Более 1000
                    студентов поднялись с начального уровня до уровня IELTS.
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Сильные стороны: </span> 500+ студентов успели стать
                    студентами.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={fourth} alt="" />
              </div>
            </div>
          </div>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">ПОЧЕТНЫЕ УЧИТЕЛЯ</h4>
              <h4 className="teacher">Ибрагимов Барзу</h4>
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Опыт: </span> 8 лет
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Достижения: </span> Более 1000 студентов поднялись с
                    начального уровня до уровня IELTS. 500+ студентов успели
                    стать студентами.
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Сильные стороны: </span> У учениках баллы IELTS
                    6.5-7.5
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={fifth} alt="" />
              </div>
            </div>
          </div>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">ПОЧЕТНЫЕ УЧИТЕЛЯ</h4>
              <h4 className="teacher">Хуршидахон Сайфуллахонова</h4>
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Опыт: </span> 6 лет
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Достижения: </span> 1500+ студентов. Более 1000
                    студентов поднялись с начального уровня до уровня IELTS.
                    200+ студентов успели стать студентами.
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Сильные стороны: </span> У учениках баллы IELTS
                    6.5-7.5
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={sixth} alt="" />
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 5%;

  .glav {
    font-size: 48px;
    font-weight: bold;
    color: black;
    text-align: center;
  }

  .item {
    padding-top: 5%;
    margin: 0 auto;
    .left-part {
      padding-top: 10%;
      display: grid;
      grid-gap: 20px;
      height: 100%;
      .teachers {
        font-size: 24px;
        color: #ffa900;
      }
      .teacher {
        font-size: 28px;
        color: #0057ff;
        font-weight: bold;
      }
      .mini-bars {
        .mini-bar {
          display: flex;
          img {
            max-width: 32px;
            max-height: 32px;
          }
          p {
            width: 100%;
            padding-left: 2%;
            font-size: 18px;
            font-weight: 400;
            span {
              font-weight: bold;
            }
          }
        }
      }
    }
    .right-part {
      .backgrounder {
        max-width: 440px;
        max-height: 530px;
        background-color: #ffa900;
        border-radius: 25px;
        img {
          max-width: 100%;
          max-height: 100%;
          margin: 0 auto;
          object-fit: cover;
        }
      }
    }
  }

  .owl-theme .owl-dots .owl-dot span {
    background-color: #ffa900;
  }

  @media (min-width: 500px) and (max-width: 992px) {
    .item {
      width: 70%;
      .left-part {
        order: 2;
      }
      .right-part {
        order: 1;
        .backgrounder {
          margin: 0 auto;
        }
      }
    }
  }

  @media all and (max-width: 500px) {
    margin-top: 10% !important;

    .glav {
      font-size: x-large;
    }

    .item {
      width: 77%;
      .left-part {
        order: 2;
        .mini-bars {
          .mini-bar {
            p {
              font-size: 15px;
              padding-left: 5%;
            }
          }
        }
      }
      .right-part {
        order: 1;
        .backgrounder {
          height: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default SectionOne;
