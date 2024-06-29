import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Banner from "./banner";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { brands } from "../Dat";
import Products from "./Products";
import ProductsByCat from "../ProductsByCat";
import { categoryData } from "../utils/category-data";

function Home() {
  let [cat, setCat] = useState([]);

  useEffect(() => {
    // axios.get("https://dummyjson.com/products/categories").then((res) => {
    //   setCat(res.data);
    // });
    setCat(categoryData);
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 shadow">
              <ul className="list-group list-group-flush">
                {cat.slice(0, 9).map((a) => (
                  <li className="list-group-item" key={a}>
                    <Link
                      to={`/${a.slug}`}
                      className="link-dark text-decoration-none"
                    >
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-9">
              <Slider />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="container">
              {/* <Banner /> */}
            </div>

            <div className="row">
              {/* <Swiper
                slidesPerView={9}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {brands.map((a) => (
                  <SwiperSlide>
                    <img className="w-100" src={a} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <Products />
      </section>

      <section>
        <ProductsByCat />
      </section>
    </>
  );
}

export default Home;
