import React from "react";
import Cuppon from "../Cart/Cuppon";
import Total from "./Total.jsx";
import Products from "./Products.jsx";
import PaymentMethod from "./PaymentMethod.jsx";

const PlaceOrder = () => {
  return (
    <div className="col-12 col-lg-5">
      <Products />
      <Total />
      <PaymentMethod />
      <Cuppon />
      <button className="btn submit py-3 col-5 mt-4">Place order</button>
    </div>
  );
};

export default PlaceOrder;
