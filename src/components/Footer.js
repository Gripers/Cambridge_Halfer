import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import footer from "../img/logotip.svg";
import instagram from "../img/instagram_orange.svg";
import facebook from "../img/facebook_orange.svg";
import telegram from "../img/telegram_orange.svg";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <Foot>
        <footer className="bg-white">
          <div className="container">
            <div className="footer-elements">
              <div className="start">
                <img width={205} height={59} src={footer} alt="" />
              </div>
              <div className="medium">
                <a
                  href="https://www.instagram.com/cambridge_learning_centre/?hl=en"
                  target="_blank"
                >
                  <img src={instagram} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/CambridgeLearningCentreUzb"
                  target="_blank"
                >
                  <img src={facebook} alt="" />
                </a>
                <a
                  href="https://t.me/cambridge_learning_centre"
                  target="_blank"
                >
                  <img src={telegram} alt="" />
                </a>
              </div>
              <div className="end">
                <div className="first-box">
                  <a href="/#courses">Курсы</a>
                  <a href="#benefits">Преимущества</a>
                  <a href="#students">Студенты</a>
                  <a href="#excursion">Экскурсия</a>
                  <a href="#filials">Филиалы</a>
                </div>
                <div className="second-box">
                  <Link to="/team">Команда</Link>
                  <a href="/team#our-team">Преподаватели</a>
                  <a href="/team#directore">Руководитель</a>
                  <a href="/events#evender">Мероприятия</a>
                </div>
                <div className="third-box">
                  <Link to="/news">Новости</Link>
                  <Link to="/blog">Блог</Link>
                  <a href="/blog#quester">Вопросы</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Foot>
    );
  }
}

const Foot = styled.div`
  margin-top: 7%;

  .container {
    padding: 3vh;
  }

  .footer-elements {
    display: flex;
    justify-content: space-around;
  }

  .medium {
    width: 12%;
    display: flex;
    justify-content: space-around;
    img {
      max-width: 32px;
      max-height: 32px;
    }
  }

  .end {
    width: 35%;
    display: flex;
    justify-content: space-around;
    .first-box {
      display: grid;
      a {
        font-family: "Montserrat", sans-serif;
        color: black;
        text-decoration: none;
        font-size: 16px;
        font-weight: 400;
      }
    }
    .second-box {
      display: grid;
      height: 30%;
      a {
        font-family: "Montserrat", sans-serif;
        color: black;
        text-decoration: none;
        font-size: 16px;
        font-weight: 400;
      }
    }
    .third-box {
      display: grid;
      height: 10%;
      a {
        font-family: "Montserrat", sans-serif;
        color: black;
        text-decoration: none;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  @media (min-width: 500px) and (max-width: 1220px) {
    .medium {
      width: 15%;
    }

    .end {
      width: 40%;
      a {
        font-size: 14px !important;
      }
    }
  }

  @media (min-width: 500px) and (max-width: 992px) {
    .medium {
      width: 20%;
    }

    .end {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  }

  @media (min-width: 500px) and (max-width: 768px) {
    .footer-elements {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .medium {
      width: 30%;
    }

    .end {
      display: none;
    }
  }

  @media all and (max-width: 500px) {
    .footer-elements {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .start {
      img {
        width: 80%;
      }
    }

    .medium {
      width: 50%;
      img {
        width: 80%;
      }
    }

    .end {
      display: none;
    }
  }
`;

export default Footer;
