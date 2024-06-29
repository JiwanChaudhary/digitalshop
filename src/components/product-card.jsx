import React from "react";

const ProductCard = ({ image, price, name }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-grid6 custom-min-width mb-4 position-relative">
        <div className="product-image6">
          <a href="#">
            <img className="pic-1 max-w-50" src={image} />
          </a>
        </div>
        <div className="product-content position-absolute" style={{bottom: "0px"}}>
          <h3 className="title">
            <a href="#">{name}</a>
          </h3>
          <div className="price">${price}</div>
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
  );
};

export default ProductCard;
