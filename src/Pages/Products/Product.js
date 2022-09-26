import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  return (
    <div className="product-container">
      <img src={product.picture} alt="img" />
      <h5>{product.name}</h5>
      <h6>{product.balance} </h6>
    </div>
  );
};

export default Product;
