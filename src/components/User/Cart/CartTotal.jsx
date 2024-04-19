import { NavLink } from "react-router-dom";

const CartTotal = () => {
  return (
    <div className="col-12 col-lg-5 rounded py-3 px-4 cart-total text-center">
      <h3 className="text-start">CartTotal</h3>
      <div className="d-flex justify-content-between py-3">
        <p>Subtotal</p>
        <p>$ 1750</p>
      </div>
      <div className="d-flex justify-content-between py-3">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div className="d-flex justify-content-between py-3">
        <p>Total</p>
        <p>$ 1750</p>
      </div>

      <NavLink to={"/checkout"}>
        <button className="btn submit py-3">Process to checkout </button>
      </NavLink>
    </div>
  );
};

export default CartTotal;
