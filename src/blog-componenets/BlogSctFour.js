import React from "react";
import styled from "styled-components";

const BlogSctFour = () => {
  return (
    <Section id="quester">
      <div className="container">
        <div className="row">
          <div className="left col-lg-6 col-md-12">
            <h1>Для дополнительной информации</h1>
            <form action="#" className="py-5 col-lg-6 col-md-12">
              <input placeholder="Имя" type="text" />
              <input placeholder="Фамилия" type="text" />
              <input
                placeholder="(--) ---_--_--"
                type="text"
                className="form-control"
              />
              <div className="cuest-btn">
                <button type="submit">Отправить</button>
              </div>
            </form>
          </div>
          <div className="right col-lg-6 col-md-12">
            <h1>Часто задаваемые вопросы</h1>
            <div className="cardon">
              <h5>Вопрос на русском</h5>
            </div>
            <div className="cardon">
              <h5>Вопрос на русском</h5>
            </div>
            <div className="cardon">
              <h5>Вопрос на русском</h5>
            </div>
            <div className="cardon">
              <h5>Вопрос на русском</h5>
            </div>
            <div className="cardon">
              <h5>Вопрос на русском</h5>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 5%;

  .row {
  }

  .left {
    h1 {
      font-weight: bold;
      width: 50%;
    }
    form {
      display: grid;
      grid-gap: 15px;
      width: 100%;
      input {
        width: 70%;
        padding: 2vh;
        border: 1px solid #0057ff;
        border-radius: 16px;
        transition: 0.2s;
      }
      input:focus {
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
      }
      .cuest-btn {
        text-align: start;
        button {
          padding: 2vh;
          width: 70%;
          border: none;
          border-radius: 21px;
          background: linear-gradient(180deg, #00a3ff 0%, #0057ff 100%);
          color: white;
          font-weight: bold;
          letter-spacing: 1px;
          text-align: center;
        }
      }
    }
  }

  .right {
    display: grid;
    grid-gap: 10px;
    h1 {
      font-weight: bold;
      width: 70%;
    }
    .cardon {
      width: 70%;
      padding: 1.25rem;
      background-color: white;
      border: 2px solid #e8e8e8;
      border-radius: 16px;
      h5 {
        font-weight: bold;
      }
    }
  }

  @media (min-width: 500px) and (max-width: 576px) {
      .container {
          .row {
              width: 80%;
              margin: 0 auto;
          }
      }
  }

  @media all and (max-width: 500px) {
    margin-top: 15%;

      .row {
          width: 100%;
          margin: 0 auto !important;
          .left {
              h1 {
                  font-size: x-large;
              }
              form {
                  width: 100%;
                  input {
                      width: 100%;
                  }
                  .cuest-btn {
                      max-width: 100%;
                      button {
                          width: 100% !important;
                      }
                  }
              }
          }
          .right {
              h1 {
                  font-size: x-large;
              }
              h5 {
                  font-size: 15px;
              }
              .cardon {
                  width: 100%;
              }
          }
      }
  }
`;

export default BlogSctFour;
