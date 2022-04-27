import React from "react";
import styled from "styled-components";

import header from "../img/team-header.jpg";

const Header = () => {
  return (
    <Head>
      <div className="container">
        <div className="parts row">
          <div className="left col-lg-6 col-md-12">
            <img className="w-100" src={header} alt="" />
          </div>
          <div className="right col-lg-6 col-md-12">
            <h1>
              <span>Наша миссия</span> - вывести целеустремленную молодежь с
              внутренними ценнностями на уровень мировых лидеров.
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

export default Header;
