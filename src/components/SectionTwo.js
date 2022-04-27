import React from "react";
import styled from "styled-components";

import user from "../img/User.svg";
import cap from "../img/GraduationCap.svg";
import contact from "../img/IdentificationCard.svg";
import verification from "../img/CircleWavyCheck.svg";
import crown from "../img/Crown.svg";
import users from "../img/Users.svg";
import notebook from "../img/NotePencil.svg";
import flag from "../img/Flag.svg";
import handshake from "../img/Handshake.svg";

const SectionTwo = () => {
  return (
    <Section id="benefits">
      <div className="container">
        <h1 className="glav">Преимущества учебного центра “Cambridge”</h1>
        <p className="phara">
          У каждого из наших студентов будут следующие преимущества
        </p>
        <div className="cardons row gy-5">
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={user} alt="" />
            <p>
              Преподаватели с 3-15-летним опытом подготовки студентов к
              экзаменам (IELTS до 8.5)
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={cap} alt="" />
            <p>
              Академическая поддержка - это вторая услуга учителей. Возможность
              брать бесплатные дополнительные уроки вне класса
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={contact} alt="" />
            <p>
              Личный кабинет на специальной платформе для родителей и учеников,
              где можно отслеживать свои домашние задания, оценки и результаты
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={verification} alt="" />
            <p>
              Единственная сильная система обучения в Узбекистане и учебная
              программа Великобритании
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={crown} alt="" />
            <p>
              Мероприятия - бесплатное обучение по будням и воскресеньям,
              мастер-классы, speaking club'ы.
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={users} alt="" />
            <p className="w-100">Коворкинг для внеклассных занятий</p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={notebook} alt="" />
            <p>
              IELTS MOCK CLUB - бесплатные тренинги IELTS и экзамен IELTS MOCK
              каждое воскресенье
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={flag} alt="" />
            <p>
              Волонтерство - возможность стать волонтером в благотворительном
              фонде HOPE Кембриджского учебного центра
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={handshake} alt="" />
            <p>
              Зачисление - Студенты, владеющие английским языком, получат
              возможность поступить в штат Кембриджа и учиться в течение 3
              месяцев
            </p>
          </div>
        </div>
        <div className="course-btn">
          <button>Записаться на курс</button>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 5%;
  width: 100%;

  .glav {
    text-align: center;
    font-size: 48px;
    color: black;
    font-weight: bolder;
  }

  .phara {
    text-align: center;
    font-size: 16px;
  }

  .container {
    width: 100%;
    .cardons {
      margin-top: 3%;
      box-shadow: 5px 7px 6px -4px rgb(0 0 0 / 15%),
        inset 0px -7px 2px -6px rgb(0 0 0 / 25%);
      background-color: white;
      border-radius: 30px;
      padding: 3vh;
      .cardon {
        display: flex;
        justify-content: space-between;
        img {
          max-width: 35px;
          max-height: 35px;
        }
        p {
          padding-left: 6%;
          font-size: 15px;
        }
      }
    }
    .course-btn {
      width: 100%;
      text-align: center;
      margin-top: 3%;
      button {
        width: 307px;
        height: 56px;
        background: linear-gradient(180deg, #00a3ff 0%, #0057ff 100%);
        border-radius: 21px;
        color: white;
        font-weight: bold;
        letter-spacing: 1px;
        border: none;
      }
    }
  }

  @media all and (max-width: 500px) {
    width: 100% !important;
    margin-top: 15% !important;

    .glav {
      text-align: center;
      font-size: 22px;
      line-height: 40px;
    }

    .container {
      width: 90%;
    }

    .course-btn {
      margin-top: 10% !important;
    }
  }
`;

export default SectionTwo;
