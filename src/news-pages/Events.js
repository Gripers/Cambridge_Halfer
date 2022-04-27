import React from "react";
import styled from "styled-components";
import NewsNav from "../news-components/NewsNav";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Events = () => {
  const handleDateChange = (date) => {
    console.log(date);
  };

  return (
    <Eventor id="evender">
      <NewsNav />
      <div className="container">
        <div className="cropp">
        <div className="sections">
          <div className="sct-1">
            <Link to="/news">Новости</Link>
          </div>
          <div className="sct-2">
            <Link to="/events">Мероприятия</Link>
          </div>
        </div>
        <div className="row">
          <h3 className="gy-5 col-lg-6 col-md-6 col-sm-12">No event for this day</h3>
          <Calendar
            className="calendar gy-5 col-lg-6 col-md-6 col-sm-12"
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        </div>
      </div>
      <Footer />
    </Eventor>
  );
};

const Eventor = styled.div`

  .container {
    .row {
      padding-top: 5%;
      text-align: center;
      .calendar {
        margin: 0 auto;
      }
    }
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
        width: 183px;
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
      .sct-2 {
        background: linear-gradient(180deg, #ffd900 0%, #ffc000 100%);
        width: 250px;
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
    }
  }

  .cropp {
    padding-top: 10% !important;
  }

  @media (min-width: 500px) and (max-width: 1250px) {
    .cropp {
      padding-top: 20% !important;
    }
  }

  @media all and (max-width: 500px) {
    .container {
      .sections {
        width: 100%;
        height: 100%;
        margin: 0 auto;
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

    .cropp {
      padding-top: 30% !important;
    }
  }
`;

export default Events;
