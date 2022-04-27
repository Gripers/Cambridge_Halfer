import React from "react";
import styled from "styled-components";
import BlogNav from "../blog-componenets/BlogNav";
import Footer from "../components/Footer";

import map from "../img/map.jpg";

const HeaderDivFirst = () => {
  return (
    <Header>
      <BlogNav />
      <div className="container">
        <div className="row">
          <img className="w-100" src={map} alt="" />
          <p className="date">28 Dec 2021</p>
          <h1>Вы должны это знать, чтобы путешествовать в любую страну мира</h1>
          <p>
            На сегодняшний день, английский является основным языком общения
            более чем 500 миллионов людей и вторым языком еще для 1 миллиарда
            300 миллионов людей.
          </p>
          <p>
            Итак, как вы можете говорить по-английски, не беспокоясь о поездке в
            любую англоязычную страну? Для этого мы собрали наиболее часто
            используемые слова в английском языке. Но не останавливайтесь на
            достигнутом, изучая эти слова. Вам все равно придется много
            исследовать, чтобы выучить язык в совершенстве.
          </p>
          <br />
          <ul>
            <li>Good morning - Доброе утро</li>
            <li>Hello, Hi - Привет</li>
            <li>
              I speak English just a little bit - Я плохо разговариваю на
              английском
            </li>
            <li>What is your name?- Как тебя/вас зовут?</li>
            <li>I am fine! - Я в порядке</li>
            <li>I am here for the first time - Я здесь первый раз</li>
            <li>I’m from …- Я из ...</li>
            <li>How do you say in English? - Как вы говорите по английски?</li>
            <li>All the best! - Всего наилучшего!</li>
            <li>Please - Пожалуйста</li>
            <li>Thank you very much - Большое спасибо</li>
            <li>
              Please, accept my apologies - Пожалуйста, примите мои извинения
            </li>
            <li>
              One single and one return ticket for tomorrow, please - Один
              одноместный и один обратный билет на завтра, пожалуйста
            </li>
            <li>
              Where can i book a ticket for the train (plane, ship)? - Где я
              могу забронировать билет на поезд (самолет, корабль)?
            </li>
            <li>Slumber coach - Двухместное купе</li>
            <li>
              Where can i check my luggage? - Где я могу сдать свой багаж?
            </li>
            <li>
              How does one get to the platform? - Как попасть на платформу?
            </li>
            <li>
              When does the check-in begin? - Когда начинается регистрация?
            </li>
            <li>
              Here are my passport and custom declaration - Вот мой паспорт и
              таможенная декларация
            </li>
            <li>Excuse me, i don't understand - Извините, я не понимаю</li>
            <li>I have nothing to declare - Мне нечего декларировать</li>
            <li>These are my personal items - Это мои личные вещи</li>
            <li>
              What is to be mentioned in the customs declaration? - Что должно
              быть указано в таможенной декларации?
            </li>
            <li>
              Where can i get my customs papers? - Где я могу получить свои
              таможенные документы?
            </li>
            <li>Help me - Помоги мне</li>
            <li>I’m not well - Мне нехорошо (чувствую себя плохо)</li>
            <li>Take me to the hospital - Отвезите меня в больницу</li>
            <li>I’ve lost all my documents - Я потерял все свои документы</li>
            <li>I’m late for the train/plane - Я опаздываю на поезд/самолет</li>
            <li>
              Don’t do it! I’ll call the police! - Не делай этого! Я вызову
              полицию!
            </li>
            <li>What’s the matter? - В чем дело?</li>
            <li>Give mе watеr - Дайте мне воды</li>
            <li>Pleased to meet you - Приятно познакомиться</li>
          </ul>
          <p>
            Вы можете свободно путешествовать в любую страну, изучая эти фразы.
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

export default HeaderDivFirst;
