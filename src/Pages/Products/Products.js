import React from "react";
import useProduct from "../Hook/useProduct";
import Product from "./Product";
import "./Product.css";
const Products = () => {
  const [products] = useProduct();
  return (
    <div>
      <h1 className="header">
        STEP INTO A ROOM THAT BLURS THE LINES <br />
        <span>BETWEEN DREAMS AND REALITY</span>
      </h1>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
