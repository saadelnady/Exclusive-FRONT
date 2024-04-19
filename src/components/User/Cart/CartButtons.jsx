import React from "react";

const CartButtons = () => {
  return (
    <div className="d-flex justify-content-between align-items-center cart-buttons mb-5">
      <button className="btn py-3 px-md-5 fw-bold submit-reverse">
        Return To Shop
      </button>
      <button className="btn py-3 px-md-5 fw-bold submit-reverse">
        Update Cart
      </button>
    </div>
  );
};

export default CartButtons;
