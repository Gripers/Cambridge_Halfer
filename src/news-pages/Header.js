import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <div className="container">
        <div className="sections">
          <div className="sct-1">
            <a href="#">Новости</a>
          </div>
          <div className="sct-2">
            <Link to="/events">Мероприятия</Link>
          </div>
        </div>
      </div>
    </Head>
  );
};

const Head = styled.div`
  padding-top: 7% !important;

  .sections {
    width: 450px;
    height: 71px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    text-align: center;
    padding: 1vh;
    border: 2px solid #ffc701;
    border-radius: 20px;
    align-items: center;
    .sct-1 {
      background: linear-gradient(180deg, #ffd900 0%, #ffc000 100%);
      width: 183px;
      height: 56px;
      border-radius: 16px;
      border: none;
      text-align: center;
      padding-top: 2.5%;
      a {
        color: black;
        font-weight: bold;
        font-size: 22px;
        text-decoration: none;
      }
    }
    .sct-2 {
      width: 250px;
      height: 56px;
      background-color: transparent;
      border-radius: 16px;
      border: none;
      padding-top: 2.5%;
      a {
        color: #5a5a5a;
        font-size: 22px;
        text-decoration: none;
      }
    }
  }

  @media (min-width: 500px) and (max-width: 1250px) {
    padding-top: 15% !important;
  }

  @media all and (max-width: 500px) {
    padding-top: 30% !important;

    .container {
      .sections {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding-top: 5%;
        margin-top: 10% !important;
        display: block;
        .sct-1 {
          margin: 0 auto;
        }
        .sct-2 {
          margin: 0 auto;
        }
      }
    }
  }
`;

export default Header;
