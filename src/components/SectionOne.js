import React from "react";
import styled from "styled-components";

import bike from "../img/bike.svg";
import car from "../img/car.svg";
import rocket from "../img/rocket.svg";
import target from "../img/target.svg";

import calendar from "../img/calendar.svg";
import liltarget from "../img/mini_target.svg";
import arrow from "../img/up-arrow.svg";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import Aos from "aos";

const SectionOne = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  const options = {
    items: 4,
    loop: true,
    nav: false,
    dots: false,
    center: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      615: {
        items: 2,
      },
      993: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  return (
    <Section id="courses">
      <h1 className="glav">Выберите курс, который вам подходит</h1>
      <OwlCarousel
        {...options}
        className="owl-carousel w-100"
        data-aos="fade-up"
      >
        <div className="item">
          <div className="up">
            <img src={bike} alt="" />
            <h2>General English</h2>
          </div>
          <div className="down">
            <div className="minibar">
              <div className="mini-icons">
                <img src={calendar} alt="" />
                <img src={liltarget} alt="" />
                <img src={arrow} alt="" />
              </div>
              <div className="mini-titles">
                <p>
                  Для тех, кто хочет выучить английский с нуля или на
                  определенном уровне
                </p>
                <p>Продолжительность курса: 5 этапов, 1 этап - 3 месяца.</p>
                <p>Минимальный уровень: ноль или выше</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="up">
            <img width={111} height={111} src={car} alt="" />
            <h2>IELTS Full Course</h2>
          </div>
          <div className="down">
            <div className="minibar">
              <div className="mini-icons">
                <img src={calendar} alt="" />
                <img src={liltarget} alt="" />
                <img src={arrow} alt="" />
              </div>
              <div className="mini-titles">
                <p>
                  Для желающих сдать экзамен IELTS через 4 месяца и получить
                  высокий балл
                </p>
                <p>Продолжительность курса: 4 месяца</p>
                <p>Минимальный уровень: средний и выше</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="up">
            <img width={111} height={111} src={rocket} alt="" />
            <h2>IELTS Rocket</h2>
          </div>
          <div className="down">
            <div className="minibar">
              <div className="mini-icons">
                <img src={calendar} alt="" />
                <img src={liltarget} alt="" />
                <img src={arrow} alt="" />
              </div>
              <div className="mini-titles">
                <p>
                  Для тех, кто хочет получить не менее 6.0 баллов по IELTS через
                  2 месяца
                </p>
                <p>Продолжительность курса: 2 месяца</p>
                <p>Минимальный уровень: средний и выше</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="up">
            <img src={target} alt="" />
            <h2>IELTS Focus</h2>
          </div>
          <div className="down">
            <div className="minibar">
              <div className="mini-icons">
                <img src={calendar} alt="" />
                <img src={liltarget} alt="" />
                <img src={arrow} alt="" />
              </div>
              <div className="mini-titles">
                <p>
                  Для тех, кто хочет пересдать IELTS с результатом 7.0 и выше
                </p>
                <p>Продолжительность курса: 2 месяца.</p>
                <p>Минимальный уровень: IELTS 5.5 и выше</p>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      <div className="courser-btn">
        <button>Записаться на курс</button>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 5%;

  .glav {
    font-size: 48px;
    text-align: center;
    color: black;
    font-weight: bold;
  }

  .item {
    margin-bottom: 10% !important;
    margin-top: 10% !important;
    margin: 0 auto;
    display: grid;
    padding-top: 7%;
    width: 294px;
    height: 388px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 28px 17px 34px -19px rgb(0 0 0 / 10%);
    .up {
      text-align: center;
      display: grid;
      img {
        margin: 0 auto;
        max-width: 111px;
        max-height: 111px;
      }
      h2 {
        font-size: 20px;
        font-weight: bold;
        color: black;
      }
    }
    .down {
      width: 100%;
      .minibar {
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        .mini-icons {
          display: grid;
          align-items: center;
          img {
            max-width: 20px;
          }
        }
        .mini-titles {
          align-items: center;
          font-size: 13px;
          width: 88%;
        }
      }
    }
  }

  .courser-btn {
    margin: 0 auto !important;
    text-align: center;
    button {
      background: linear-gradient(180deg, #00a3ff 0%, #0057ff 100%);
      width: 307px;
      height: 56px;
      border-radius: 21px;
      color: white;
      border: none;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }

  @media all and (max-width: 500px) {
    width: 100%;
    padding-top: 5%;
    .glav {
      width: 100%;
      font-size: 22px;
      text-align: center;
    }
    .owl-carousel {
      padding-top: 10%;
    }
    .item {
      margin: 0 auto !important;
      box-shadow: none;
    }
    .courser-btn {
      margin-top: 5% !important;
    }
    .courser-btn button {
      letter-spacing: 0px;
      width: 30%;
      min-width: 65%;
    }
  }
`;

export default SectionOne;
