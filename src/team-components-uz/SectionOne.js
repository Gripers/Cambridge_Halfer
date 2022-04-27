import React from "react";
import styled from "styled-components";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import star from "../img/star.svg";
import file from "../img/file.svg";
import shield from "../img/shield.svg";

import first from "../img/1.png";
import second from "../img/2.png";
import third from "../img/3.png";
import fourth from "../img/4.png";
import fifth from "../img/5.png";
import sixth from "../img/6.png";

const SectionOneUz = () => {
  const options = {
    loop: true,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
  };

  return (
    <Section id="teamer">
      <div className="container">
        <h1 className="glav">Bizning jamoa</h1>
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">FAXRLI USTOZLAR</h4>
              <h4 className="teacher">Abdulkhamidov Abdulboriy</h4>
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Tajriba: </span> 7 yil
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Yutuqlari: </span> IELTS 8.0, 500+ o'quvchilar,
                    o’quvchilarda IELTS 7.0-8.5 ball
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Kuchli tomonlari: </span> IELTS rocket. Ma'suliyatli,
                    talabchan, o'quvchilariga nisbatan qattiqqo'l.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={first} alt="" />
              </div>
            </div>
          </div>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">FAXRLI USTOZLAR</h4>
              <h4 className="teacher">Yo'ldosheva Lobar</h4>
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Tajriba: </span> 6 yil
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Yutiqlari: </span> IELTS 8.5. Graduate of Westminter,
                    MA Columbia University, Teacher's College va MA Webster
                    University
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Kuchli tomonlari: </span> Interaktiv darslar. Pozitiv
                    va kuchli mutaxassis
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={second} alt="" />
              </div>
            </div>
          </div>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">FAXRLI USTOZLAR</h4>
              <h4 className="teacher">Erkinov Sardor</h4>
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Tajriba: </span> 5 yil
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Yutiqlari: </span> 1000+ o'quvchilar. Ulardan 200
                    nafari universitetga qabul qilingan. O'quvchilarning
                    natijasi: IELTS 6.5 - 7.5
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Kuchli tomonlari: </span> Ingliz davlatlarida tajriba
                    olgan. IELTS writing. Mavzularni tushuntirish qobilyati
                    yuqori
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={third} alt="" />
              </div>
            </div>
          </div>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">FAXRLI USTOZLAR</h4>
              <h4 className="teacher">Berdiqulova Nodira</h4>
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Tajriba: </span> 7 yil
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Yutiqlari: </span> 2000+ o'quvchilar. 1000+
                    o'quvchilar beginner darajasidan IELTS darajasigacha
                    ko'tarilgan.
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Kuchli tomonlari: </span> 500+ o'quvchilar talaba
                    bo'lishga erishgan.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={fourth} alt="" />
              </div>
            </div>
          </div>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">FAXRLI USTOZLAR</h4>
              <h4 className="teacher">Ibrohimov Barzu</h4>
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Tajriba: </span> 8 yil
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Yutiqlari: </span>
                    1000+ o'quvchilar beginner darajasidan IELTS darajasigacha
                    ko'tarilgan. 500+ o'quvchilar talaba bo'lishga erishgan.
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Kuchli tomonlari: </span> O'quvchilarning natijasi:
                    IELTS 6.5 - 7.5
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={fifth} alt="" />
              </div>
            </div>
          </div>
          <div className="item row">
            <div className="left-part col-lg-6">
              <h4 className="teachers">FAXRLI USTOZLAR</h4>
              <h4 className="teacher">Khurshidakhon Sayfullakhonova</h4>
              <div className="mini-bars">
                <div className="mini-bar">
                  <img src={star} alt="" />
                  <p>
                    <span>Tajriba: </span> 6 yil
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={file} alt="" />
                  <p>
                    <span>Yutiqlari: </span> 1500+ o'quvchilar. 1000+
                    o'quvchilar beginner darajasidan IELTS darajasigacha
                    ko'tarilgan. 200+ o'quvchilar talaba bo'lishga erishgan.
                  </p>
                </div>
                <div className="mini-bar">
                  <img src={shield} alt="" />
                  <p>
                    <span>Kuchli tomonlari: </span> O'quvchilarning natijasi:
                    IELTS 6.5 - 7.5
                  </p>
                </div>
              </div>
            </div>
            <div className="right-part col-lg-6">
              <div className="backgrounder">
                <img src={sixth} alt="" />
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 5%;

  .glav {
    font-size: 48px;
    font-weight: bold;
    color: black;
    text-align: center;
  }

  .item {
    padding-top: 5%;
    margin: 0 auto;
    .left-part {
      padding-top: 10%;
      display: grid;
      grid-gap: 20px;
      height: 100%;
      .teachers {
        font-size: 24px;
        color: #ffa900;
      }
      .teacher {
        font-size: 28px;
        color: #0057ff;
        font-weight: bold;
      }
      .mini-bars {
        .mini-bar {
          display: flex;
          img {
            max-width: 32px;
            max-height: 32px;
          }
          p {
            width: 100%;
            padding-left: 2%;
            font-size: 18px;
            font-weight: 400;
            span {
              font-weight: bold;
            }
          }
        }
      }
    }
    .right-part {
      .backgrounder {
        max-width: 440px;
        max-height: 100%;
        background-color: #ffa900;
        border-radius: 25px;
        img {
          max-width: 100%;
          max-height: 100%;
          margin: 0 auto;
          object-fit: contain;
        }
      }
    }
  }

  .owl-theme .owl-dots .owl-dot span {
    background-color: #ffa900;
  }

  @media (min-width: 500px) and (max-width: 992px) {
    .item {
      width: 70%;
      .left-part {
        order: 2;
      }
      .right-part {
        order: 1;
        .backgrounder {
          margin: 0 auto;
        }
      }
    }
  }

  @media all and (max-width: 500px) {
    margin-top: 10% !important;

    .glav {
      font-size: x-large;
    }

    .item {
      width: 77%;
      .left-part {
        order: 2;
        .mini-bars {
          .mini-bar {
            p {
              font-size: 15px;
              padding-left: 5%;
            }
          }
        }
      }
      .right-part {
        order: 1;
        .backgrounder {
          height: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default SectionOneUz;
