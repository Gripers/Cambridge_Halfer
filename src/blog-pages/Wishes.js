import React from "react";
import styled from "styled-components";
import BlogNav from "../blog-componenets/BlogNav";
import Footer from "../components/Footer";

import handshakers from "../img/handshakersL.jpg";

const Wishes = () => {
  return (
    <Wisher>
      <BlogNav />
      <div className="container">
        <div className="row">
          <img src={handshakers} alt="" />
          <p className="date">06 Dec 2021</p>
          <h1>Поздравление на английском языке</h1>
          <p>
            Знание и использование различных способов поздравлений является
            одним из важных факторов, если вы хотите развивать дружбу и хорошие
            деловые отношения. Всем нравится, когда их достижения получают
            признание и похвалу, а простые "поздравления" могут стать причиной
            хорошего настроения в чей-то день. Признание чужих достижений и
            выражение восхищения ими может помочь развить хорошие чувства между
            вами и другими.
          </p>
          <p>
            Если вы хотите быть хорошим другом , хорошим начальником или хорошим
            коллегой, вам нужно будет изучить соответствующие способы поздравить
            окружающих вас людей таким образом, чтобы они казались теплыми и
            искренними. Вы ошибаетесь, если думаете, что да, достаточно простого
            слова “Поздравляю”. Не забывайте, что, как и на узбекском языке,
            существует формальное и неформальное общение на других иностранных
            языках, в том числе на английском языке. На протяжении всего
            изучения английского языка вы сталкивались со многими словами,
            которые означают приветствие, или, если вы только начали учиться,
            теперь вы можете рассмотреть во время чтения.
          </p>
          <p>
            Мы знаем, что существуют значительные различия между формальным и
            неформальным общением. В неформальном общении нельзя использовать в
            официальном общении слова , которые вы употребляете с друзьями и
            знакомыми, будь то устное общение или письменное. Поздравление тоже
            самое. Можно сказать, что само слово Congratulation можно
            использовать везде. Да, конечно, вы правы, но бывают ситуации, когда
            вы просто не можете использовать само слово. Например, вы устроились
            на работу на новое предприятие ваш начальник добился какого-то
            успеха когда вы поздравляете его, вы просто используете фразы,
            предназначенные для официального общения, не говоря уже о
            congratulation, который выражает вашу речь, а также высокий уровень
            вашего обращения. Давайте сейчас с вами рассмотрим виды
            поздравлений. Прежде всего, начнем с официального общения.
          </p>
          <p>1.I am really pleased for you-Я очень рад за вас.</p>
          <p>
            You have been voted the most popular singer ever? I am really
            pleased for you. Вы были признаны самым популярным певцом? Я очень
            рад за тебя.
          </p>
          <p>
            2.Congratulations! You deserve this success-поздравляю! Вы
            заслуживаете этого успеха. Г-жа Джейн awarded by government.
            Congratulations! Теплый десерт из тиса. Г-жа Джейн была награждена
            правительством. Поздравляю! Он заслуживает этого успеха.
          </p>
          <p>
            3. My sinsre/heartfelt/ warmet congratulations to you - сердечно /
            искренне поздравляю вас.
          </p>
          <p>
            {" "}
            - I have to say that as your boss I will start my new work next week
            in USA
          </p>
          <p>- Our heartfelt congratulations to you!</p>
          <p>
            – Как ваш начальник, я должен сказать вам, что со следующей недели я
            начну новую работу в Соединенных Штатах.
          </p>
          <p>- От всей души вас поздравляем!</p>
          <p>
            4.That's wonderful news - отличная новость. - Я буду покупать новый
            автомобиль после 2 недель
          </p>
          <p>- That’s wonderful news.</p>
          <p>Через 2 недели куплю новую машину.</p>
          <p>- Это отличная новость.</p>
          <p>
            5. Please accept my warmet congratulations-примите мои искренние
            пожелания.
          </p>
          <p>
            I heard about your achievement. I am really happy for you. Please
            accept my warmest congratulations.
          </p>
          <p>
            Я слышал о вашем прогрессе. Я очень рад за Тебя, прими мои искренние
            пожелания.
          </p>
          <p>
            6. Sincre congratulations on your hard-earned success-искренне
            поздравляю вас с успехом, которого вы достигли с трудом.
          </p>
          <p>
            7. Let me express my congratulations-я представляю вам свои
            поздравления.
          </p>
          <p>
            В неформальном общении, которое происходит с нашими друзьями и
            знакомыми, мы используем само слово Congratulation или другие
            выражения.
          </p>
          <p>1. High five.</p>
          <p>2. Take a bow.</p>
          <p>3. Hats off to you.</p>
          <p>4. Here’s to you.</p>
          <p>5. Bravo.</p>
          <p>
            Все вышесказанное переводится на узбекский язык как поздравление.
          </p>
          <p>So proud of you-Я горжусь тобой.</p>
          <p>I couldnut be happier for you-Я не могу быть более счастливым.</p>
          <p>
            My face has a proud smile because of you - На моем лице улыбка
            благодаря тебе
          </p>
          <p>
            Great things come from great people-великие вещи приходят от великих
            людей.
          </p>
        </div>
      </div>
      <Footer />
    </Wisher>
  );
};

const Wisher = styled.div`
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

export default Wishes;
