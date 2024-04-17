import React from "react";
import Cuppon from "./Cuppon.jsx";
import CartTotal from "./CartTotal.jsx";

const CartFooter = () => {
  return (
    <div className="d-flex">
      <Cuppon />
      <CartTotal />
    </div>
  );
};

export default CartFooter;
