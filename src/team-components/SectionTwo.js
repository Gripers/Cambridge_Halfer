import React from "react";

import checked from "../img/true-orange.svg";
import director from "../img/director.png";
import styled from "styled-components";

const SectionTwo = () => {
  return (
    <Section id="directore">
      <div className="container">
        <div className="row">
          <div className="left row col-lg-6">
            <img src={director} alt="" />
          </div>
          <div className="right row col-lg-6">
            <h4 className="direct">РУКОВОДИТЕЛЬ</h4>
            <h4 className="direct-name">Jahongir Pulatov</h4>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>Мотиватор и Бизнесмен</p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                Основатель учебного центра <strong>"Cambridge"</strong>
              </p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                <strong>В возрасте 20 лет</strong> открыл учебный центр, который
                помог <strong>более чем 40 000 человек</strong> выучить
                английский язык <strong>за 7 лет</strong>
              </p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                <strong>Амбассадор</strong> молодых предпринимателей Узбекистана
              </p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                Один из основателей IT-школы <strong>“Mars”</strong>
              </p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                Один из основателей стартапа <strong>“Modme”</strong>
              </p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                Обладатель медали <strong>"Келажак бунёдкори"</strong>,
                награжденной Президентом
              </p>
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
    margin: 0 auto;
    .left {
      max-width: 500px;
      max-height: 100%;
      background-color: #ffa900;
      text-align: center;
      border-radius: 25px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain !important;
      }
    }
    .right {
      display: grid;
      grid-gap: 10px;
      padding: 3vh;
      background-color: white;
      border-radius: 25px;
      .direct {
        font-size: 24px;
        color: #ffa900;
      }
      .direct-name {
        font-size: 28px;
        color: #0057ff;
        font-weight: bold;
      }
      .minivan {
        display: flex;
        img {
          max-width: 32px;
          max-height: 32px;
        }
        p {
          padding-left: 2%;
          font-size: 18px;
        }
      }
    }
  }

  @media all and (max-width: 500px) {
    .minivan {
      p {
        font-size: medium !important;
      }
    }
  }
`;

export default SectionTwo;
