import React from "react";

const CartTotal = () => {
  return (
    <div>
      <h3>CartTotal</h3>
      <div>
        <p>Subtotal</p>
        <p>$ 1750</p>
      </div>
      <div>
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div>
        <p>Total</p>
        <p>$ 1750</p>
      </div>
      <button>Process to checkout</button>
    </div>
  );
};

export default CartTotal;
