import React from "react";
import productImg from "../../../assets/images/pngs/Gamepad-5.png";
const Products = () => {
  return (
    <ul>
      <li className="d-flex justify-content-between align-items-center">
        <img
          src={productImg}
          alt=""
          className="rounded-pill object-fit-contain checkout-product-img"
        />
        <div className="d-flex justify-content-between align-items-center col-8">
          <p className="product-title">icdl monitor</p>
          <p>$ 650</p>
        </div>
      </li>
    </ul>
  );
};

export default Products;
