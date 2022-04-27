import React from "react";
import styled from "styled-components";

import bg from "../img/fon.jpg";
import info from "../img/infa.svg";

const SectionFour = () => {
  return (
    <Section id="excursion">
      <div className="container">
        <h1 className="glav">
          Добро пожаловать в <br /> тур по нашему учебному центру!
        </h1>
        <p className="phara">
          Проверьте свой английский бесплатно и посетите <br /> один из наших
          учебных центров бесплатно, оставьте <br /> свои данные для посещения
          тура.
        </p>
        <div className="boxes row">
          <div
            data-aos="fade-right"
            className="left-box col-lg-6 col-md-12 gy-5"
          >
            <form className="d-grid" action="#">
              <input placeholder="Имя" type="text" />
              <input placeholder="Фамилия" type="text" />
              <input placeholder="Номер телефона" type="text" />
              <textarea
                placeholder="Комментарии и предложения"
                name=""
                id=""
                cols="30"
                rows="3"
              ></textarea>
              <div className="tour-btn">
                <button className="w-100" type="submit">
                  Отправить
                </button>
              </div>
            </form>
          </div>
          <div
            data-aos="fade-left"
            className="right-box col-lg-6 col-md-12 gy-5"
          >
            <img className="w-100" src={bg} alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 5%;

  .container {
    width: 90%;
  }

  .glav {
    font-size: 48px;
    color: black;
    font-weight: bolder;
    text-align: center;
  }

  .phara {
    font-size: 16px;
    text-align: center;
  }

  .left-box {
    background: linear-gradient(98.3deg, #ffd900 0%, #ffd452 100%);
    border-radius: 16px;
    padding: 5vh;
    form {
      grid-gap: 30px;
      input {
        outline-style: none;
        border: none;
        border-radius: 15px;
        padding: 2vh;
      }
      textarea {
        outline-style: none;
        border: none;
        border-radius: 15px;
        padding: 2vh;
      }
      .tour-btn {
        text-align: center;
        button {
          background: linear-gradient(180deg, #00a3ff 0%, #0057ff 100%);
          border: none;
          border-radius: 21px;
          color: white;
          font-weight: bold;
          padding: 2vh;
        }
      }
    }
  }

  @media (min-width: 500px) and (max-width: 720px) {
    .right-box {
      display: none;
    }

    .glav {
      font-size: 26px;
    }
  }

  @media all and (max-width: 500px) {
    form {
      margin: 0 auto !important;
    }

    .glav {
      font-size: 30px;
      line-height: 50px;
    }

    .right-box {
      display: none;
    }
  }
`;

export default SectionFour;
