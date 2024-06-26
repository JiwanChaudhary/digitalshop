import React from 'react'
import { categoryDetailData } from '../utils/category-detail-data'

const MousePage = () => {
  return (
    <div className="row">
      {categoryDetailData.mouse.map((lap, i) => (
        <div className="col-md-3 col-sm-6" key={i}>
          <div className="product-grid6">
            <div className="product-image6">
              <a href="#">
                <img className="pic-1" src={lap.image} />
              </a>
            </div>
            <div className="product-content">
              <h3 className="title">
                <a href="#">{lap.name}</a>
              </h3>
              <div className="price">${lap.price}</div>
            </div>
            <ul className="social">
              <li>
                <a href="#" data-tip="View Detail">
                  <i className="bi bi-card-text" />
                </a>
              </li>
              <li>
                <a href="#" data-tip="Add to Wishlist">
                  <i className="fa fa-shopping-bag" />
                </a>
              </li>
              <li>
                <a href="#" data-tip="Add to Cart">
                  <i className="fa fa-shopping-cart" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MousePage