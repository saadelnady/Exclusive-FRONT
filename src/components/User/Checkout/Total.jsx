import React from "react";

const Total = () => {
  return (
    <div>
      <div className="d-flex justify-content-between py-3 border-bottom">
        <p>Subtotal</p>
        <p>$ 1750</p>
      </div>
      <div className="d-flex justify-content-between py-3 border-bottom">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div className="d-flex justify-content-between py-3">
        <p>Total</p>
        <p>$ 1750</p>
      </div>
    </div>
  );
};

export default Total;
