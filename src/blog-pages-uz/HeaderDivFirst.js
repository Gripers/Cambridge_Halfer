import React from "react";
import styled from "styled-components";
import BlogNav from "../blog-componenets-uz/BlogNavUz";
import Footer from "../components-uz/Footer";

import map from "../img/map.jpg";

const HeaderDivFirstUz = () => {
  return (
    <Header>
      <BlogNav />
      <div className="container">
        <div className="row">
          <img className="w-100" src={map} alt="" />
          <p className="date">28 Dec 2021</p>
          <h1>
            Dunyoning istalgan mamlakatiga sayohat qilish uchun bularni
            bilishingiz kerak
          </h1>
          <p>
            Bugungi kunda, ingliz tili 500 milliondan ko‘proq kishining asosiy
            muloqot tili bo‘lib, yana 1 milliard 300 millionga yaqin inson uchun
            ikkinchi til hisoblanadi.
          </p>
          <p>
            Xoʻsh, qanday qilib siz istalgan ingliz zabon mamlakatga borganda
            qiynalmay ingliz tilida soʻzlashishingiz mumkin? Buning uchun biz
            ingliz tilida eng koʻp ishlatiladigan soʻzlarni jamladik. Ammo ushbu
            soʻzlarni oʻrganiboq, izlanishdan toʻxtab qolmang. Hali tilni
            mukammal oʻrganish uchun koʻp izlanishingiz kerak boʻladi.
          </p>
          <br />
          <ul>
            <li>• Good morning - Xayrli tong</li>
            <li>• Hello, Hi - Salom</li>
            <li>
              • I speak English just a little bit - Men ingliz tilida ozgina
              gaplasha olaman
            </li>
            <li>• What is your name?- Ismingiz nima?</li>
            <li>• I am fine! - Men yaxshiman!</li>
            <li>
              • I am here for the first time - Men bu yerga birinchi marta
              keldim.
            </li>
            <li>• I’m from …- Men ...danman</li>
            <li>
              • How do you say in English? - Ingliz tilida buni qanday aytasiz?
            </li>
            <li>• All the best! - Barcha ezgu tilaklarni tilayman!</li>
            <li>• Please - Iltimos</li>
            <li>• Thank you very much - Katta rahmat</li>
            <li>• Please, accept my apologies - Uzrimni qabul qiling</li>
            <li>
              • One single and one return ticket for tomorrow, please - Bitta
              qaytish chiptasi, iltimos
            </li>
            <li>
              • Where can i book a ticket for the train (plane, ship)? - Poyezd
              chiptasini (samolyot, qayiq) qayerdan sotib olsam bo'ladi?
            </li>
            <li>• Slumber coach - Ikki kishilik kupeda</li>
            <li>
              • Where can i check my luggage? - • Yukimni qayerga qo’ysam
              bo'ladi?
            </li>
            <li>
              • How does one get to the platform? - Platformaga qanday borish
              mumkin?
            </li>
            <li>
              • When does the check-in begin? - Ro'yxatdan o'tish boshlandimi?
            </li>
            <li>
              •Here are my passport and custom declaration -Mana mening
              pasportim va bojxona deklaratsiyasi
            </li>
            <li>•Excuse me, i don't understand - Kechirasiz tushunmadim</li>
            <li>
              •I have nothing to declare - Bayon qilishga hech narsam yo'q
            </li>
            <li>
              •These are my personal items - Bular shaxsiy foydalanish uchun
              narsalar
            </li>
            <li>
              •What is to be mentioned in the customs declaration? - Bojxona
              deklaratsiyasida nimalar qayd etilishi kerak?
            </li>
            <li>
              •Where can i get my customs papers? - Bojxona hujjatlarini
              qayerdan olsam bo'ladi?
            </li>
            <li>• Help me - Saqlash / menga yordam bering</li>
            <li>• I’m not well - Men ozimni yomon his qilyapman</li>
            <li>
              • Take me to the hospital - Meni shifoxonoga olib borib qo'ying
            </li>
            <li>
              • I’ve lost all my documents - Men barcha hujjatlarimni yo‘qotib
              qo‘ydim
            </li>
            <li>
              • I’m late for the train/plane - Men poyezdni/samolyotni o‘tkazib
              yubordim
            </li>
            <li>
              • Don’t do it! I’ll call the police! - Buni qilma! Men politsiyani
              chaqiraman
            </li>
            <li>• What’s the matter? - Nima gap?</li>
            <li>• Give mе watеr - Menga suv bering</li>
            <li>• Pleased to meet you - Siz bilan tanishganimdan xursandman</li>
          </ul>
          <p>
            Siz ushbu iboralarni o’rganib bemalol istagan mamlakatingizga
            sayohat qilishingiz mumkin.
          </p>
        </div>
      </div>
      <Footer />
    </Header>
  );
};

const Header = styled.div`
  .row {
    padding-top: 10% !important;
    width: 60%;
    text-align: start;
    margin: 0 auto;
    h1 {
      text-align: start;
      font-weight: bold;
    }
    .date {
      padding-top: 3%;
      color: #999999;
      text-align: start;
    }
    p {
      text-align: start;
    }
    ul {
      li {
        line-height: 40px;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 400;
      }
    }
  }

  @media (min-width: 500px) and (max-width: 991px) {
    .row {
      padding-top: 15% !important;
      width: 80%;
      text-align: start;
      h1 {
        font-size: 30px;
      }
    }
  }

  @media (min-width: 500px) and (max-width: 767px) {
    .row {
      padding-top: 20% !important;
      width: 80%;
      h1 {
        font-size: 20px;
      }
    }
  }

  @media all and (max-width: 500px) {
    .row {
      padding-top: 30% !important;
      text-align: start;
      width: 90%;
      h1 {
        font-size: 22px;
      }
    }
  }
`;

export default HeaderDivFirstUz;
