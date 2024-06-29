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
import CategorySidebar from "./category-sidebar";
import HeaderContent from "./header-content";

function Header() {
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

      <HeaderContent />

      <CategorySidebar />

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
