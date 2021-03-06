import React from "react";
import styled from "styled-components";
import BlogNav from "../blog-componenets/BlogNav";
import Footer from "../components/Footer";

import translate from "../img/translate.jpg";

const Translate = () => {
  return (
    <Translater>
      <BlogNav />
      <div className="container">
        <div className="row">
          <img src={translate} alt="" />
          <p className="date">06 Dec 2021</p>
          <h1>Перевод и определение что более эффективно?</h1>
          <p>
            Мы продолжаем давать мотивационные и научные рекомендации нашим
            наблюдателям, которые интересуются и изучают английский язык,
            которые сталкиваются с трудностями на этом пути. Каждый человек при
            изучении английского языка должен найти или создать для себя
            эффективный и удобный способ.
          </p>
          <p>
            В нашем народе существует пословица, которая орошается истиной:"
            получать знания-это все равно, что копать колодец иглой". Прежде
            всего, очевидно, что в изучении каждой области есть свои проблемы и
            приятные аспекты достижения цели . Приступая к изучению английского
            языка, человек должен уделять основное внимание изучению новых слов
            и увеличению словарного запаса. Потому что говорить, что я могу
            выучить или выучить язык только тогда, когда я могу запомнить
            грамматические правила и все правила языка в совершенно неправильном
            положении, является огромной ошибкой. При переводе английских слов
            на другой язык существуют два основных типа понятий:
          </p>
          <p>
            <strong>· Перевод</strong>
          </p>
          <p>
            <strong>· Definition</strong>
          </p>
          <p>
            Перевод - это когда слово выражается через его альтернативу на
            другом языке, и в нем делается попытка сделать его как можно более
            кратким, не нуждаясь в дополнительных объяснениях.
          </p>
          <p>
            Определение -,, определение-это подробное и полное описание слова в
            английском языке,означающее",,, описание".
          </p>
          <p>
            А теперь подумайте, какой из них подходит именно вам? и какой из них
            более эффективен?. Конечно, мы считаем, что определение, на наш
            взгляд, даст вам больший эффект в изучении английского языка. Это
            связано с тем , что когда дается полная информация о слове или
            термине , о том, что оно означает, о его синонимах, об истории
            происхождения слова, несомненно, учащемуся, запоминающему слово,
            становится намного легче запомнить его. Для того чтобы понятие
            надолго сохранялось в памяти человека , его нужно, во-первых,
            интересно объяснить, а во-вторых, подробно изложить перед глазами с
            впечатлением о предмете или понятии. Некоторые вкладывают все свои
            силы в грамматику, не доверяя своей памяти. Я должен еще раз
            подчеркнуть, что независимо от того, насколько хороша ваша
            грамматика, если у вас нет словарного запаса, который вы можете
            использовать, то есть вы не знаете достаточно слов, вы не пойдете
            так далеко со своими языковыми навыками. Словари открывают вам двери
            в новые миры, когда вы объясняете их просто, и являются
            инструментами, которые делают ваше обучение интересным. Расширение
            вашего словарного запаса новых слов похоже на пост , который вы
            соблюдаете во время Рамадана: от вас требуется немного
            настойчивости, много тяжелой работы и терпения. Ни хитрость, ни
            поддержка окружающих вам в этой ситуации не пойдут на пользу.
          </p>
          <p>
            В английском языке нет ни одного универсального метода запоминания
            новых слов, который бы одинаково подходил всем. Каждый должен найти
            и найти путь, который подходит именно ему. Мы постарались помочь вам
            в этом своими советами. Самое главное-запастись терпением, ставить
            реалистичные цели и постоянно совершенствовать себя на пути их
            достижения.
          </p>
          <p>
            Конечно, для достижения цели необходимо пробовать разные пути. Какой
            бы путь вы ни выбрали, никогда не останавливайтесь на достигнутом!
          </p>
          <p>
            Вы должны начать движение сегодня , прямо сейчас, а не завтра , в
            понедельник или в начале каждого месяца. Ваш сегодняшний день - дом
            вашего вчерашнего дня-является продуктом фантазий и действий.
          </p>
          <p>
            Если вы хотите добиться большего завтра, просто сделайте сегодня
            вдвое больше, чем вчера. Никогда не прислушивайтесь к"советам"
            фальшивых знакомых, которые негативно относятся к вашей деятельности
            в окружающем мире.
          </p>
          <p>
            ​​Никогда никого не слушайте, ни на кого не надейтесь, ни от кого
            ничего не ожидайте, просто верьте в себя и всем своим трудом и волей
            достигайте поставленной цели.
          </p>
          <p>Вы сильнее, чем вы думаете.</p>
          <p>Не мечтай, действуй !</p>
        </div>
      </div>
      <Footer />
    </Translater>
  );
};

const Translater = styled.div`
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

export default Translate;
