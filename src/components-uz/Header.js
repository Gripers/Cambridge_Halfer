import React from "react";
import styled from "styled-components";
import header from "../img/header-boy.png";

const HeaderUz = () => {
  return (
    <Head>
      <div className="container">
        <div className="row m-auto">
          <div className="left-part col-lg-6 col-md-12 col-xs-12">
            <h1>
              IELTS 7.0 va undan yuqori ballni{" "}
              <span>birinchi imtihonning o'zidayoq qo'lga kiriting</span>
            </h1>
            <p>
              7 yil davomida 40,000 dan ziyod inson Cambridge o’quv markazida
              tahsil olgan
            </p>
            <div className="header-btn">
              <button>Birinchi darsga yozilish</button>
            </div>
          </div>
          <div className="right-part col-lg-6 col-md-12 col-xs-12 w-50 gy-5">
            <img className="w-100" src={header} alt="" />
          </div>
        </div>
      </div>
    </Head>
  );
};

const Head = styled.div`
  padding-top: 5%;

  .left-part {
    padding-top: 20%;
    h1 {
      font-size: 35px;
      font-weight: bold;
      span {
        font-weight: 400;
      }
    }
    p {
      font-size: 16px;
    }
    .header-btn {
      text-align: start;
      button {
        width: 327px;
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
    padding-top: 10%;

    .left-part {
      text-align: start;
      display: grid;
      grid-gap: 20px;
      h1 {
        font-size: 30px;
      }
      button {
        width: 60%;
        line-height: 17px;
        text-align: center;
        align-items: center;
      }
    }
    .right-part {
      width: 100% !important;
      img {
        margin: 0 auto !important;
      }
    }
  }

  @media (min-width: 500px) and (max-width: 991px) {
    .left-part {
      text-align: center;
      h1 {
        font-size: 40px;
      }
    }
    .right-part {
      width: 75% !important;
      img {
        margin: 0 auto !important;
      }
    }
    .header-btn {
      text-align: center !important;
    }
  }
`;

export default HeaderUz;
