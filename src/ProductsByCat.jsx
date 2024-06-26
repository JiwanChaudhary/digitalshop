import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductsByCat(props) {
  let [dataa, setDataa] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/categories/${props.title}`)
      .then((res) => {
        setDataa(res.data);
      });
  });
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="fw-bold text-uppercase">{props.title}</h4>
            </div>
          </div>
          <div className="row">
            {dataa.slice(0, 5).map((b) => (
              <div className="col-md-3 col-sm-6" key={b.id}>
                <div className="product-grid6">
                  <div className="product-image6">
                    <a href="#">
                      <img className="pic-1" src={b.images} />
                    </a>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">{b.title}</a>
                    </h3>
                    <div className="price">${b.price}</div>
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
      </section>
    </>
  );
}

export default ProductsByCat;
