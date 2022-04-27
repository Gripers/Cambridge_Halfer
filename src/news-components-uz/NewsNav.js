import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.svg";

const NewsNavUz = () => {
  return (
    <Nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <Link to="/homeuz">
            <img width={46} height={59} src={logo} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="pages collapse navbar-collapse px-5"
            id="navbarSupportedContent"
          >
            <ul class="pages-ul navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="/homeuz#coursess">Kurslar</a>
              </li>
              <li class="nav-item">
                <NavLink to="/teamuz">Jamoa</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/newsuz">Yangiliklar</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/bloguz">Blog</NavLink>
              </li>
            </ul>
            <div class="menuu d-flex">
              <div class="dropdown">
                <button
                  class="btn bg-white dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  O'zb
                </button>
                <ul
                  class="dropdown-menu p-0"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="uzb">
                    <Link to="/newsuz">O'zbekcha</Link>
                  </li>
                  <li className="rus">
                    <Link to="/news">Русский</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Nav>
  );
};

const Nav = styled.div`
  nav {
    position: fixed;
    opacity: 0.9;
    width: 100%;
    z-index: 999999;
    margin-bottom: 10% !important;
  }

  .pages .pages-ul {
    display: flex;
    justify-content: space-around;
    width: 30%;
    a {
      color: black;
      text-decoration: none;
      transition: 0.1s;
    }
    a:hover {
      color: #ffc301;
    }
  }

  .menuu {
    ul {
      li {
        padding: 1vh;
        width: 100%;
        height: 100%;
        transition: 0.2s;
        a {
          font-size: 18px;
          color: black;
          text-decoration: none;
        }
      }
      li:hover {
        background-color: black;
        a {
          color: white;
        }
      }
      .uzb {
        background-color: black;
        a {
          color: white;
        }
      }
    }
  }
`;

export default NewsNavUz;
