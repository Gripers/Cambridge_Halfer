// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// import styled from "styled-components";
// import logo from "../img/logo.svg";

// const BlogNavUz = () => {
//   return (
//     <Nav>
//       <nav class="navbar navbar-expand-lg navbar-light bg-white">
//         <div class="container">
//           <Link to="/">
//             <img width={46} height={59} src={logo} alt="" />
//           </Link>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div
//             class="pages collapse navbar-collapse px-5"
//             id="navbarSupportedContent"
//           >
//             <ul class="pages-ul navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a href="/homeuz#coursess">Kurslar</a>
//               </li>
//               <li class="nav-item">
//                 <NavLink to="/teamuz">Jamoa</NavLink>
//               </li>
//               <li class="nav-item">
//                 <NavLink to="/newsuz">Yangiliklar</NavLink>
//               </li>
//               <li class="nav-item">
//                 <NavLink to="/bloguz">Blog</NavLink>
//               </li>
//             </ul>
//             <div class="menuu d-flex">
//               <div class="dropdown">
//                 <button
//                   class="btn bg-white dropdown-toggle"
//                   type="button"
//                   id="dropdownMenuButton1"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   O'zb
//                 </button>
//                 <ul
//                   class="dropdown-menu p-0"
//                   aria-labelledby="dropdownMenuButton1"
//                 >
//                   <li className="uzb">
//                     <Link to="/homeuz">O'zbekcha</Link>
//                   </li>
//                   <li className="rus">
//                     <Link to="/">Русский</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </Nav>
//   );
// };

// const Nav = styled.div`
//   nav {
//     position: fixed;
//     opacity: 0.9;
//     width: 100%;
//     z-index: 999999;
//     margin-bottom: 10% !important;
//   }

//   .pages .pages-ul {
//     display: flex;
//     justify-content: space-around;
//     width: 30%;
//     a {
//       color: black;
//       text-decoration: none;
//       transition: 0.1s;
//     }
//     a:hover {
//       color: #ffc301;
//     }
//   }

//   .menuu {
//     ul {
//       li {
//         padding: 1vh;
//         width: 100%;
//         height: 100%;
//         transition: 0.2s;
//         a {
//           font-size: 18px;
//           color: black;
//           text-decoration: none;
//         }
//       }
//       li:hover {
//         background-color: black;
//         a {
//           color: white;
//         }
//       }
//       .uzb {
//         background-color: black;
//         a {
//           color: white;
//         }
//       }
//     }
//   }
// `;

// export default BlogNavUz;

import React from "react";
import Footer from "../components-uz/Footer";
import BlogSctOne from "../blog-componenets-uz/BlogSctOneUz";
import BlogHeader from "../blog-componenets-uz/BlogHeaderUz";
import BlogSctTwo from "../blog-componenets-uz/BlogSctTwoUz";
import BlogSctThree from "../blog-componenets-uz/BlogSctThreeUz";
import BlogSctFour from "../blog-componenets-uz/BlogSctFourUz";
import { Link } from "react-router-dom";
import BlogNav from "../blog-componenets-uz/BlogNavUz";

const Blog = () => {
  return (
    <div>
      <BlogNav />
      <BlogHeader />
      <BlogSctOne />
      <BlogSctTwo />
      <BlogSctThree />
      <ul
        role="menubar"
        aria-disabled="false"
        aria-label="Pagination"
        class="pagination b-pagination justify-content-center my-5"
      >
        <li role="presentation" class="page-item">
          <button
            role="menuitem"
            type="button"
            tabindex="-1"
            aria-label="Go to first page"
            aria-controls="my-table"
            class="page-link"
          >
            «
          </button>
        </li>
        <li role="presentation" class="page-item">
          <button
            role="menuitem"
            type="button"
            tabindex="-1"
            aria-label="Go to previous page"
            aria-controls="my-table"
            class="page-link"
          >
            ‹
          </button>
        </li>
        <li role="presentation" class="page-item active">
          <li role="presentation" class="page-item">
            <Link
              to="/bloguz"
              role="menuitemradio"
              type="button"
              aria-controls="my-table"
              aria-label="Go to page 1"
              aria-checked="false"
              aria-posinset="1"
              aria-setsize="3"
              tabindex="-1"
              class="page-link"
            >
              1
            </Link>
          </li>
        </li>
        <li role="presentation" class="page-item">
          <li role="presentation" class="page-item">
            <Link
              to="/minikonuz"
              role="menuitemradio"
              type="button"
              aria-controls="my-table"
              aria-label="Go to page 2"
              aria-checked="true"
              aria-posinset="2"
              aria-setsize="3"
              tabindex="0"
              class="page-link"
            >
              2
            </Link>
          </li>
        </li>
        <li role="presentation" class="page-item">
          <button
            role="menuitem"
            type="button"
            tabindex="-1"
            aria-label="Go to next page"
            aria-controls="my-table"
            class="page-link"
          >
            ›
          </button>
        </li>
        <li role="presentation" class="page-item">
          <button
            role="menuitem"
            type="button"
            tabindex="-1"
            aria-label="Go to last page"
            aria-controls="my-table"
            class="page-link"
          >
            »
          </button>
        </li>
      </ul>
      <BlogSctFour />
      <Footer />
    </div>
  );
};

export default Blog;
