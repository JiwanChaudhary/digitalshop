import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { categoryDetailData } from "../utils/category-detail-data";
import ProductCard from "../components/product-card";

function Products() {
  let [dataa, setDataa] = useState([]);
  useEffect(() => {
    // axios.get("https://dummyjson.com/products").then((res) => {
    //   setDataa(res.data.products);
    // });
    setDataa(categoryDetailData);
  }, []);

  console.log(categoryDetailData.laptop, "cate data");
  return (
    <>
      <div className="container shadow">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="fw-bold py-3 text-center">Featured Products</h3>
          </div>
        </div>
        <div>
          {/* #region laptop */}
          <div className="row">
            <h2 className="text-center">Laptop</h2>
            {categoryDetailData.laptop.slice(0, 4).map((data, i) => (
              <ProductCard
                image={data.image}
                name={data.name}
                price={data.name}
                key={i}
              />
            ))}
            <h3 className="text-center">
              <a href="/laptops">Explore all Laptop</a>
            </h3>
            <hr />
          </div>
          {/* #region pc */}
          <div className="row">
            <h2 className="text-center">PC</h2>
            {categoryDetailData.pc.slice(0, 4).map((data, i) => (
              <ProductCard
                image={data.image}
                name={data.name}
                price={data.name}
                key={i}
              />
            ))}
            <h3 className="text-center">
              <a href="/pcs">Explore all PCs</a>
            </h3>
            <hr />
          </div>
          {/* #region speakers */}
          <div className="row">
            <h2 className="text-center">Speakers</h2>
            {categoryDetailData.speaker.slice(0, 4).map((data, i) => (
              <ProductCard
                image={data.image}
                name={data.name}
                price={data.name}
                key={i}
              />
            ))}
            <h3 className="text-center">
              <a href="/speakers">Explore all Speakers</a>
            </h3>
            <hr />
          </div>
          {/* #region Headphones */}
          <div className="row">
            <h2 className="text-center">Headphones</h2>
            {categoryDetailData.headphone.slice(0, 4).map((data, i) => (
              <ProductCard
                image={data.image}
                name={data.name}
                price={data.name}
                key={i}
              />
            ))}
            <h3 className="text-center">
              <a href="/headphones">Explore all Headphones</a>
            </h3>
            <hr />
          </div>
          {/* #region  Keyboard*/}
          <div className="row">
            <h2 className="text-center">Keyboard</h2>
            {categoryDetailData.keyboard.slice(0, 4).map((data, i) => (
              <ProductCard
                image={data.image}
                name={data.name}
                price={data.name}
                key={i}
              />
            ))}
            <h3 className="text-center">
              <a href="/keyboards">Explore all Keyboards</a>
            </h3>
            <hr />
          </div>
          {/* #region  Mouse*/}
          <div className="row">
            <h2 className="text-center">Mouse</h2>
            {categoryDetailData.mouse.slice(0, 4).map((data, i) => (
              <ProductCard
                image={data.image}
                name={data.name}
                price={data.name}
                key={i}
              />
            ))}
            <h3 className="text-center">
              <a href="/mouse">Explore all Mouse</a>
            </h3>
            <hr />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Products;
