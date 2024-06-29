import React from "react";
import { categoryData } from "../utils/category-data";

const CategorySidebar = () => {
  return (
    <nav className="navbar navbar-expand-lg  menu">
      <div className="container ">
        <div className="dropdown mn">
          <button
            className="btn btn-light dropdown-toggle w"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </button>
          <ul className="dropdown-menu">
            {categoryData.map((cat, i) => (
              <li key={i}>
                <a className="dropdown-item" href={cat.slug}>
                  {cat.name}
                </a>
              </li>
            ))}
            <li>
              <a className="dropdown-item" href="/">
                All
              </a>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CategorySidebar;
