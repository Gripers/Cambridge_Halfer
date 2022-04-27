import React from "react";
import styled from "styled-components";

import user from "../img/User.svg";
import cap from "../img/GraduationCap.svg";
import contact from "../img/IdentificationCard.svg";
import verification from "../img/CircleWavyCheck.svg";
import crown from "../img/Crown.svg";
import users from "../img/Users.svg";
import notebook from "../img/NotePencil.svg";
import flag from "../img/Flag.svg";
import handshake from "../img/Handshake.svg";

const SectionTwoUz = () => {
  return (
    <Section id="benefits">
      <div className="container">
        <h1 className="glav">“Cambridge” o’quv markazi afzalliklari</h1>
        <p className="phara">
          Har bir o'quvchimiz quyidagi afzalliklarga ega bo'ladi
        </p>
        <div className="cardons row gy-5">
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={user} alt="" />
            <p>
              O'quvchilarni imtihonlarga tayyorlash bo'yicha 3-15 yillik
              tajribaga ega ustozlar (IELTS 8,5 gacha)
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={cap} alt="" />
            <p>
              Academic Support - ikkinchi o'qituvchi xizmati. Darsdan tashqari
              bepul qo'shimcha mashg'ulotlar olish imkoniyati
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={contact} alt="" />
            <p>
              Ota-ona va o’quvchi o'z uy vazifalari, baho va natijalarini
              kuzatib borishi uchun maxsus platformada shaxsiy kabinet
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={verification} alt="" />
            <p>
              O'zbekistonda yagona kuchli o'qitish tizimi va Buyuk Britaniya
              o'quv dasturi
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={crown} alt="" />
            <p>
              Tadbirlar - hafta davomida va yakshanba kungi bepul trening,
              master-class, speaking club'lar
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={users} alt="" />
            <p className="w-100">
              Darsdan tashqari qo'shimcha dars tayyorlash uchun co-working
              joylar
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={notebook} alt="" />
            <p>
              IELTS MOCK CLUB – har yakshanba kuni bepul IELTS treninglari va
              IELTS MOCK imtihoni
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={flag} alt="" />
            <p>
              Volontyorlik - Cambridge o’quv markazining “HOPE” xayriya fondi
              tadbirlarida volontyorlik qilish imkoniyati
            </p>
          </div>
          <div data-aos="fade-up" className="cardon col-lg-4 col-md-6">
            <img src={handshake} alt="" />
            <p>
              Shogird tushish - Ingliz tilini yaxshi o’zlashtirgan o’quvchilarda
              Cambridge hodimlariga shogird tushib, 3 oy davomida ish o’rganish
              imkoniyati
            </p>
          </div>
        </div>
        <div className="course-btn">
          <button>Kursga yozilish</button>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 5%;
  width: 100%;

  .glav {
    text-align: center;
    font-size: 48px;
    color: black;
    font-weight: bolder;
  }

  .phara {
    text-align: center;
    font-size: 16px;
  }

  .container {
    width: 100%;
    .cardons {
      margin-top: 3%;
      box-shadow: 5px 7px 6px -4px rgb(0 0 0 / 15%),
        inset 0px -7px 2px -6px rgb(0 0 0 / 25%);
      background-color: white;
      border-radius: 30px;
      padding: 3vh;
      .cardon {
        display: flex;
        justify-content: space-between;
        img {
          max-width: 35px;
          max-height: 35px;
        }
        p {
          padding-left: 6%;
          font-size: 15px;
        }
      }
    }
    .course-btn {
      width: 100%;
      text-align: center;
      margin-top: 3%;
      button {
        width: 307px;
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
    width: 100% !important;
    margin-top: 15% !important;

    .glav {
      text-align: center;
      font-size: 22px;
      line-height: 40px;
    }

    .container {
      width: 90%;
    }

    .course-btn {
      margin-top: 10% !important;
    }
  }
`;

export default SectionTwoUz;
