import React from "react";

import checked from "../img/true-orange.svg";
import director from "../img/director.png";
import styled from "styled-components";

const SectionTwo = () => {
  return (
    <Section id="directrik">
      <div className="container">
        <div className="row">
          <div className="left row col-lg-6">
            <img src={director} alt="" />
          </div>
          <div className="right row col-lg-6">
            <h4 className="direct">RAHBAR</h4>
            <h4 className="direct-name">Jahongir Pulatov</h4>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>Motivator va Biznesmen</p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                <strong>"Cambridge"</strong> o'quv markazi asoschisi
              </p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                <strong>20 yoshida</strong> o'quv markazi ochib,{" "}
                <strong>7 yilda 40 000 dan</strong> ziyod insonlar ingliz tili
                o'rganishiga yordam bergan
              </p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                Ozbekiston Yosh Tadbirkorlar <strong>Ambassadori</strong>
              </p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                <strong>"Mars"</strong> IT maktabi asoschilaridan biri
              </p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                <strong>"Modme"</strong> startapi asoschilaridan biri
              </p>
            </div>
            <div className="minivan">
              <img src={checked} alt="" />
              <p>
                Prezident tomonidan belgilangan{" "}
                <strong>"Kelajak Bunyodkori"</strong> medali sohibi
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
