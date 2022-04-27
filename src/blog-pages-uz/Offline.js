import React from "react";
import styled from "styled-components";
import BlogNav from "../blog-componenets-uz/BlogNavUz";
import Footer from "../components-uz/Footer";

import offline from "../img/offline.jpg";

const OfflineUz = () => {
  return (
    <Ofline>
      <BlogNav />
      <div className="container">
        <div className="row">
          <img src={offline} alt="" />
          <p className="date">06 Dec 2021</p>
          <h1>Online va offline ta’lim haqida</h1>
          <p>
            Ma’lumki, ta’lim olishning 2 xil asosiy turi mavjud. Bular “offline”
            deb ataluvchi an’anaviy ta’lim hamda masofaviy, ya’ni “online”
            o‘rganish tizimi.
          </p>
          <p>
            An’anaviy ta’limning kelib chiqishi uzoq tarixga borib taqaladi.
            Yuzma-yuz o‘rganish va o‘rgatish insoniyat paydo bo‘lgandan buyon
            davom etib kelayotgan bo‘lsada, oliy ta’lim misolida tarixdagi eng
            birinchi universitet sifatida 970-yilda Misrning Qohira shahrida
            tashkil etilgan Al-Azhar universitetini alohida ta’kidlash joiz.
            Shuningdek, “an’anaviy ta’lim” atamasi ilk bor XVII asrda Ya.A.
            Komenskiy tomonidan o‘zining “Buyuk didaktika” asarida ta’limning
            sinf-dars tarzida tashkil etilishi izohi sifatida keltirilgan.
          </p>
          <p>
            Kompyuter texnologiyasi hamda Internet rivoji esa ta’limda mutlaqo
            yangi tushuncha “online” ta’lim, boshqa so‘z bilan aytganda,
            masofaviy ta’lim tushunchasini olib keldi. Garchi ilk onlayn
            ta’limning boshlanishi 1982-yillarga to‘g‘ri kelsada, umumiy
            konsepsiya bundan 170 yillar ilgari ishlab chiqilgan.Ammo
            2019-2020-yillarda boshlangan pandemiya (Covid-19) tufayli
            ta’limning bu turi globallashib, o‘qishdan tortib ishgacha barcha
            tizim onlayn shaklga o‘tkazildi. Xususan, O‘zbekistonda ham
            ta’limning barcha bosqichlari ushbu shaklda olib borildi va
            hozirgacha qisman davom etmoqda. Ushbu maqolada siz bilan ta’limning
            har ikkala turi afzalliklari va kamchiliklarini tahlil qilamiz.
          </p>
          <p>
            <strong>
              <em>“Offline ta’lim” ning afzalliklari</em>
            </strong>
          </p>
          <p>
            · Bir vaqtda talabalarning barchasining diqqatini to‘laqonli darsga
            jalb qila olish imkoniyati mavjud.
          </p>
          <p>
            · O‘qituvchi har bir o‘rganuvchi bilan qisqa fursatlarda individual
            munosabat qila oladi.
          </p>
          <p>
            · An’anaviy ta’lim onlayn ta’limga nisbatan samaraliroq va
            tushunarliroq.
          </p>
          <p>
            · Barcha turdagi o‘rganuvchilar (ko‘rib, eshitib, bajarib, yozib
            o‘rganuvchilar) uchun qulay metodika va ta’lim texnologiyalari
            yaratishingiz mumkin.
          </p>
          <p>
            · Sarf-xarajat kamroq ( kompyuter, gadjetlar, internet aloqasini
            ta’minlash masalalaridan yiroq).
          </p>
          <p>
            · Tushunishdagi muammolarni tezgina hal qilish imkoniyati
            mavjud.Shuningdek, talabaning qay darajada o‘zlashtirgani haqqoniy
            tarzda ko‘rinadi.
          </p>
          <p>
            · Talabalar orasidagi sog‘lom raqobat yanada ko‘proq o‘z ustilarida
            ishlash imkoniyatini beradi.
          </p>
          <p>
            <strong>
              <em>“Offline ta’lim” ning kamchiliklari</em>
            </strong>
          </p>
          <p>
            · Xoh talaba bo‘lsin, xoh o‘qituvchi an’anaviy ta’lim uchun ko‘proq
            vaqt va energiya sarflaydi. Tayyorgarlik, qatnov uchun ketkazgan
            vaqtni yanada unumliroq sarflash to‘g‘ri tanlov bo‘lar edi.
          </p>
          <p>
            · An’anaviy darslar butun sinf sharoitini hisobga olgan holda
            uzoqroq vaqt qilib belgilangan. Universitetdagi 80 daqiqalik bir
            darsingiz va onlayn ta’limda bu vaqt ichida olishingiz mumkin
            bo‘lgan ma’lumotlarni taqqoslashning o‘zi fikrning yaqqol dalilidir.
          </p>
          <p>
            · Ba’zi sabablar bilan o‘tkazib yuborilgan darsni o‘zlashtirish
            qiyin kechishi mumkin.
          </p>
          <p>
            · Zamonaviy texnologiyalar va o‘qitish metodlaridan foydalanish
            ko‘rsatkichi kamligi. Bunda dars o‘rganuvchilar uchun zerikarli
            bo‘lishi mumkin.
          </p>
          <p>
            · Talabalar orasida mustaqil ta’lim olishning pasayib ketishi
            kabilar an’anaviy ta’limning asosiy kamchiliklaridir.
          </p>
          <p>
            <strong>
              <em>“Online ta’lim” ning afzalliklari</em>
            </strong>
          </p>
          <p>
            · Masofaviy ta’lim orqali o‘quvchilarga darslarni tushuntirishning
            qator samarali va zamonaviy usullari mavjud.Masalan, turli xil
            audio/videolar, podkastlar,PDF fayllar va hokazolar.
          </p>
          <p>
            · Onlayn ta’lim orqali siz qisqa fursatda katta hajmdagi
            ma’lumotlarni qabul qilishingiz mumkin. Shuningdek, cheksiz Internet
            olamida istalgan manbaani bir zumda topish imkoniyati bor.
          </p>
          <p>
            · Ushbu ta’lim turi an’anaviy bilan taqqoslaganda arzon
            hisoblanadi.Bundan tashqari, barcha kurs yoki o‘quv materiallari
            elektron formatda bo‘lib, qog‘ozsiz o‘quv muhitini yaratadi. Bu esa
            yanada sarf-xarajatni kamaytiradi va atrof-muhit uchun ham
            foydalidir.
          </p>
          <p>
            · Ma’lum sabablarga ko‘ra qoldirilgan darsni o‘zlashtirish
            qiyinchilik tug‘dirmaydi.
          </p>
          <p>
            · Onlayn ta’lim o‘rganuvchi uchun mustaqil ta’lim olish imkoniyatini
            oshiradi.Bu albatta talabaning o‘qishga bo‘lgan mas’uliyatini
            oshiradi.
          </p>
          <p>
            <strong>
              <em> “Online ta’lim” ning kamchiliklari</em>
            </strong>
          </p>
          <p>
            · Uzoq vaqt ekran oldida diqqatni jamlay olmaslik. Bu onlayn
            ta’limning eng katta kamchiliklaridan biri hisoblanadi. Dars
            mobaynida talabalarning ijtimoiy tarmoqlar yoki boshqa saytlarga
            chalg‘ib ketishlari ehtimoli katta.Shu boisdan o‘qituvchilar
            darslarni aniq, qiziqarli hamda interaktiv usullarda tashkil qilib,
            o‘rganuvchlar diqqatini qarata olishlari kerak.
          </p>
          <p>
            · Masofaviy darslarning asosiy muammolaridan biri – bu internet
            masalasi. Ta’limning uzluksiz bo‘lishi uchun internet aloqa sifati
            yaxshi bo‘lishi kerak.
          </p>
          <p>
            · Jonli muloqotning kam ekanligi. Buning oldini olish uchun audio
            suhbatlar, video konferensiyalar o‘tkazib turish mumkin.
          </p>
          <p>
            Xulosa o‘rnida shuni aytib o‘tish lozimki, har ikkala ta’lim turi
            ham o‘ziga xos yaxshi tomonlari va kamchiliklarga ega. Qanday
            shakldagi ta’lim bo‘lmasin, o‘rganuvchida kuchli xohish va iroda
            bo‘lsa, albatta katta-katta yutuqlarga erishish mumkin. Siz qaysi
            ta’lim turini afzal ko‘rasiz?
          </p>
        </div>
      </div>
      <Footer />
    </Ofline>
  );
};

const Ofline = styled.div`
  .row {
    padding-top: 10% !important;
    width: 50%;
    margin: 0 auto;
    .date {
      color: #999999;
      padding-top: 3%;
    }
    h1 {
      font-weight: bold;
    }
    p {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    .koko {
      font-weight: bold;
    }
  }

  @media (min-width: 500px) and (max-width: 1200px) {
    .row {
      padding-top: 15% !important;
      width: 80%;
    }
  }

  @media (min-width: 500px) and (max-width: 767px) {
    .row {
      padding-top: 20% !important;
      h1 {
        font-size: x-large;
      }
    }
  }

  @media all and (max-width: 500px) {
    .row {
      padding-top: 30% !important;
      width: 80%;
      h1 {
        font-size: x-large;
      }
    }
  }
`;

export default OfflineUz;
