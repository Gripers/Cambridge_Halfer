import React from "react";
import styled from "styled-components";

import header from "../img/team-header.jpg";

const HeaderUz = () => {
  return (
    <Head>
      <div className="container">
        <div className="parts row">
          <div className="left col-lg-6 col-md-12">
            <img className="w-100" src={header} alt="" />
          </div>
          <div className="right col-lg-6 col-md-12">
            <h1>
              <span>Bizning missiya</span> - intiluvchan va qadriyatli o’zbek
              yoshlarini dunyoga yetakchi bo’ladigan darajaga olib chiqish
            </h1>
          </div>
        </div>
      </div>
    </Head>
  );
};

const Head = styled.div`
  padding-top: 7%;

  .right {
    padding-top: 12%;
    h1 {
      font-weight: bolder;
      color: black;
      font-size: 32px;
      span {
        color: #ffa900;
      }
    }
  }

  @media all and (max-width: 767px) {
    padding-top: 25%;

    .right {
      h1 {
        font-size: x-large;
        line-height: 40px;
      }
    }
  }
`;

export default HeaderUz;
