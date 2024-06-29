import React, { useContext } from "react";
import CartContext from "./CartContext";
import { Link } from "react-router-dom";

const HeaderContent = () => {
  let { state, dispatch } = useContext(CartContext);

  return (
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
  );
};

export default HeaderContent;
