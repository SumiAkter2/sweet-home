import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  return (
    <div className="product-container">
      <img src={product.picture} alt="img" />
      <div className="product">
        <h4>{product.name}</h4>
        <p>{product.sqr} </p>
      </div>
      <div className="product">
        <p>{product.bed} </p>
        <p>{product.guest} </p>
      </div>
      <div className="product">
        <p>{product.balance} </p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
