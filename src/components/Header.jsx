import Home from "../pages/Home";
import { Route, Routes, Link } from "react-router-dom";
import Category from "../Category";
import Details from "../Details";
import Cart from "../Cart";
import React, { useContext } from "react";
import CartContext from "./CartContext";
import { categoryData } from "../utils/category-data";
import LaptopPage from "../pages/laptop";
import PCPage from "../pages/pc";
import KeyboardPage from "../pages/keyboard";
import MousePage from "../pages/mouse";
import HeadphonePage from "../pages/headphone";
import SpeakerPage from "../pages/speaker";

function Header() {
  let { state, dispatch } = useContext(CartContext);
  return (
    <>
      {/* <section className="bg-success-subtle py-2">
        <div className="containe">
          <div className="row align-items-center">
            <div className="container col-lg-12 ">
              <i className="bi bi-telephone-fill mm "></i> 9809751822
            </div>
          </div>
        </div>
      </section> */}

      <header className="py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 ">
              <Link to="/">
                <img
                  src="https://digitalsahuji.com/storage/app/public/company/2023-06-27-649a72e48c94a.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-7">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 py-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary m" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
            <div className="col-lg-2">
              <div className="d-flex gap-3">
                <Link
                  to={`/cart`}
                  className="btn bg-primary-subtle rounded-circle position-relative"
                >
                  <i className="bi bi-cart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {state.cart.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>

                <button
                  type="button"
                  className="btn bg-primary-subtle rounded-circle position-relative"
                >
                  <a className="btn btn-primary" href="#" role="button">
                    Login
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid/" element={<Category />} />
        <Route path="/details/:id/" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/laptops" element={<LaptopPage />} />
        <Route path="/pcs" element={<PCPage />} />
        <Route path="/keyboards" element={<KeyboardPage />} />
        <Route path="/mouse" element={<MousePage />} />
        <Route path="/headphones" element={<HeadphonePage />} />
        <Route path="/speakers" element={<SpeakerPage />} />
      </Routes>
    </>
  );
}

export default Header;
