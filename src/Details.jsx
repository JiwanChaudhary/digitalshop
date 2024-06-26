import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Details() {
  let { id } = useParams();
  let [data, setDataa] = useState([]);
  useEffect(() => {
    axios.get(`https://dummyjson.com/product/${id}`).then((res) => {
      setDataa(res.data);
    });
  }, [id]);
  return (
    <>
      <div className="container py-5">
        <h2>Details</h2>

        <div className="row">
          <div className="col-lg-5">
            <img className="w-100" src={data.images} alt="" />
          </div>
          <div className="col-lg-7">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Price: ${data.price}</p>
            <button className="btn btn-primary btn-md">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
