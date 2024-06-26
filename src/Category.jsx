import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

function Category(props) {
  let { cid } = useParams();
  let [data, setDataa] = useState([]);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${cid}`).then((res) => {
      setDataa(res.data.products);
    });
  }, [cid]);

  return (
    <>
      <div className="container">
        <h2>Category {cid}</h2>
        <div className="row">
          {data.map((a) => (
            <div className="col-md-3 col-sm-6" key={a.id}>
              <div className="product-grid6">
                <div className="product-image6">
                  <Link to={`/details/${a.id}`}>
                    <img className="pic-1" src={a.images} />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">{a.title}</a>
                  </h3>
                  <div className="price">${a.price}</div>
                </div>
                <ul className="social">
                  <li>
                    <a href data-tip="View Detail">
                      <i className="bi bi-card-text" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
