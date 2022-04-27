import React from "react";
import BlogNav from "../blog-componenets-uz/BlogNavUz";
import Footer from "../components-uz/Footer";
import BlogHeader from "../blog-componenets-uz/BlogHeaderUz";
import BlogSctFour from "../blog-componenets-uz/BlogSctFourUz";
import { Link } from "react-router-dom";
import BlogMinikonOne from "../blog-componenets-uz/BlogMinikonOneUz";
import BlogMinikonTwo from "../blog-componenets-uz/BlogMinikonTwoUz";
import BlogMinikonThree from "../blog-componenets-uz/BlogMinikonThreeUz";

const MinikonUz = () => {
  return (
    <div>
      <BlogNav />
      <BlogHeader />
      <BlogMinikonOne />
      <BlogMinikonTwo />
      <BlogMinikonThree />
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
        <li role="presentation" class="page-item">
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
        <li role="presentation" class="page-item active">
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

export default MinikonUz;
