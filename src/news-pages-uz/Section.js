import React from "react";
import styled from "styled-components";
import lion from "../img/big-lion.png";
import { Link } from "react-router-dom";

const SectionUz = () => {
  return (
    <Juster>
      <div className="container row mx-auto">
        <div className="lefter col-lg-6 gy-5">
          <img className="w-100" src={lion} alt="" />
        </div>
        <div className="righter py-5 col-lg-6 gy-5">
          <p>05 Aug 2021</p>
          <Link to="/moreuz">Batafsil</Link>
        </div>
      </div>
    </Juster>
  );
};

const Juster = styled.div`
  .righter {
    p {
      font-size: 16px;
      color: #999999;
    }
    a {
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
      transition: 0.5s;
    }
    a:after {
      display: block;
      width: 0;
      height: 1px;
      background-color: #0057ff;
      content: "";
      transition: width 0.3s ease-out;
    }
    a:hover:after {
      width: 10%;
    }
  }
`;

export default SectionUz;
