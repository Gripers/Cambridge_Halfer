import React from "react";
import styled from "styled-components";
import BlogNav from "../blog-componenets-uz/BlogNavUz";
import Footer from "../components-uz/Footer";

import students from "../img/university.jpg";

const EffectUz = () => {
  return (
    <Efect>
      <BlogNav />
      <div className="container">
        <div className="row">
          <img src={students} alt="" />
          <p className="date">06 Dec 2021</p>
          <h1>Ingliz tilini o’rganishning 14 ta samarali usuli</h1>
          <p>
            <strong>
              <em>1.Ko’proq o’qing.</em>
            </strong>
          </p>
          <p>
            Shunchaki o’qimang, balki o’zingiz turli xil qiziqarli mavzudagi
            kichik maqolalar yoki kitoblarni o’qing. Bu sizga faqatgina ingliz
            tilini o’rganishingizga yordam beribgina qolmasdan, balki
            dunyoqarashingiz kengaytiradi va har bir sohada bilimga ega
            bo’lishingizda asosiy manbalardan biri hisoblanadi.
          </p>
          <p>
            <strong>
              <em> 2. Yangi lug'atni faollashtiring</em>
            </strong>
          </p>
          <p>
            O'rganayotganda biz ko'pincha yangi so'zlardan shunchalik
            zavqlanamizki, uni unutish imkonsiz bo'lib tuyuladi. Ammo bizga
            ishoning, hamma narsa birinchi martadayoq esda qolib ketmaydi. Bunga
            qarshi kurashish uchun o'zingizda lug’at daftar olib yurishni yoki
            Evernote kabi dasturdan foydalanishni odat qiling.
          </p>
          <p>
            <strong>
              <em>3. Haqiqiy native speakerlar bilan suhbatlashing</em>
            </strong>
          </p>
          <p>
            Agar muloqot bo'lmasa, til nima uchun kerak?! Odamlarning
            "tushunadi, lekin ingliz tilida gapira olmaydi" degan gaplarini
            necha marotaba eshitgansiz. Speakingni rivojlantirish uchun ijtimoiy
            tarmoqlardan suhbatdosh toping va turli xil mavzularda
            suhbatlashing.
          </p>
          <p>
            <strong>
              <em> 4. Podkastlarga yoki Youtube kanallariga obuna bo'ling</em>
            </strong>
          </p>
          <p>
            Siyosatmi? Blog yuritasizmi? Ovqat pishirishmi? Tasavvur qiladigan
            har qanday qiziqishni qamrab oladigan mavzular bo’yicha siz uchun
            ingliz tilida so'zlashuvchi podkast yoki Youtube kanallari mavjud
            bo’lib , ularga obuna bo'ling va xohlagan paytingiz tinglang.
          </p>
          <p>
            <strong>
              <em>5.Ingliz tilidagi postlarni o’qing.</em>
            </strong>
          </p>
          <p>Bu sizning lug’at boyligingizni oshiradi.</p>
          <p>
            <strong>
              <em>6. Ko'p savollar bering</em>
            </strong>
          </p>
          <p>
            Qiziqish mushukni o'ldirgan bo'lishi mumkin, ammo bu til
            o'rganuvchini ravon gapirishga undaydi! Sir emaski ingliz tilini
            o'rganar ekansiz, o’rganish mobaynida ko'plab savollar to'playsiz.
            Shubhalaringiz bilan o'tirmang - qiziquvchan bo'ling va ularni hal
            qiling!
          </p>
          <p>
            <strong>
              <em>7. O'zingizga ruhan zarba bermang.</em>
            </strong>
          </p>
          <p>
            Bu nima degani? Ya’ni o'zingizni zamin yaratmayotgandek his qila
            boshlaganingizdagi holat. Bu hamma o'quvchilar bilan sodir bo'ladi -
            "men ingliz tilida gapirolmayman " yoki "men buni hech qachon
            tushunolmayman" demang. Aslida, bu iboralarni so'z boyligingizdan
            o’chirib tashlang! Buning oʻrniga “Ingliz tilini har kuni
            oʻrganyapman va takomillashtiryapman”, “Bu har doim ham oson emas,
            lekin bunga arziydi “ iboralarni aytish bilan o’zingizni
            ruhlantiring.
          </p>
          <p>
            <strong>
              <em>
                {" "}
                8. Ijtimoiy tarmoq yoki smartfoningizda tilni o'zgartiring.
              </em>
            </strong>
          </p>
          <p>
            Hech qachon qurilma yoki veb-saytdagi tilni tasodifan o'zgartirib,
            keyin uni qayta tiklashga qiynalganmisiz? Biz hammamiz oldin u yerda
            bo'lganmiz. Agar siz Facebook, Twitter va smartfon sozlamalarini
            “ingliz tili”ga o’zgartirsangiz undagi texnologik atamalar ingliz
            tilida qanday atalishini o’rganib olasiz.
          </p>
          <p>
            <strong>
              <em>9. Xatolaringizni qayd qilib boring.</em>
            </strong>
          </p>
          <p>
            Haqiqatki, siz xato qilasiz, buni inkor etib bo'lmaydi. Ehtimol, siz
            bir xil xatolarga qayta-qayta yo'l qo'yishingiz mumkin. Bunday
            muammoga duch kelmaslik uchun o'qituvchi tomonidan xatolaringiz
            tuzatilganda, bu xoh yozma xoh og'zaki bo'ladimi, xatolaringizni
            yozib qo'ying. Bu sizga xatolaringiz ustida ishlashga juda katta
            yordam beradi.
          </p>
          <p>
            <strong>
              <em>10. Blog yuriting.</em>
            </strong>
          </p>
          <p>
            Yotube yoki instagram sahifalari oching va unga har kuni ingliz
            tilida vidyolar joylab boring. Vidyo joylash uchun siz professional
            bo’lishingiz shart emas, kichik vidyolardan boshlang. Misol uchun:
            ingliz tilida hayvonlar qanday nomlanishi. Siz vidyo olish orqali
            omma oldida fikringizni aniq va ravon yetkazib berishni o’rganasiz.
          </p>
          <p>
            <strong>
              <em>11. Har kuni yozing.</em>
            </strong>
          </p>
          <p>
            Yozish - bu yangi lug'atdan foydalanish va grammatika bilan
            shug'ullanishning ajoyib usuli. O'rgangan yangi so'zlar va
            grammatikadan foydalanib, har kuni biror narsa yozishga harakat
            qiling. Hatto bir necha jumla bo'lsa ham, buni qilishni odat qilish
            juda muhimdir.
          </p>
          <p>
            <strong>
              <em>12. Ovozingizni yozib oling</em>
            </strong>
          </p>
          <p>
            Smartfoningizdagi magnitafondan maksimal darajada foydalanib
            talaffuzni mashq qiling. Bu talaffuzni o'rganishning yaxshi usuli,
            chunki siz biror bir so’zning talaffuzini birinchi marta
            eshitganingizda eslab qolib, keyinchalik unutib qo’yishingiz mumkin.
            Ovozingni yozib olish esa bu so’zni takrorlashingizga yordam beradi.
          </p>
          <p>
            <strong>
              <em>13.Kimgadir o’rgating.</em>
            </strong>
          </p>
          <p>
            Ingliz tilida o’rgangan narsalaringizni boshqalar bilan baham
            ko’ring. Yaqinlaringizga ingliz tilida dars o’ting. Bu sizga ingliz
            tilida bilimingizni mustahkamlashga yordam beradi.
          </p>
          <p>
            <strong>
              <em>14. Realist bo'ling.</em>
            </strong>
          </p>
          <p>
            Til o'rganuvchilar o'zlarining ingliz tilini”noreal” tezlikda
            yaxshilashni xohlashlari juda keng tarqalgan. O'zingizga maqsadlar
            qo'ying, bor mahoratingizni ishga soling unutmang til o’rganish
            uchun qandaydir iqtidor bo’lishi shart emas shunchaki astoydil
            harakat qilsangiz shuni o’zi yetarli
          </p>
        </div>
      </div>
      <Footer />
    </Efect>
  );
};

const Efect = styled.div`
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

export default EffectUz;
